import React, { useEffect } from 'react';

import { isLatLngLiteral } from "@googlemaps/typescript-guards";
import { createCustomEqual } from "fast-equals";

// local components
import { selectCurrentLocation, updateLocationQuery } from '../../features/map/mapSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks'

interface MapProps extends google.maps.MapOptions {
    style: {[key: string]: string};
    onClick?: (e: google.maps.MapMouseEvent) => void;
    onIdle?: (map: google.maps.Map) => void
}

const deepCompareEqualsForMaps = createCustomEqual(
    (deepEqual) => (a: any, b: any) => {
        if (
            isLatLngLiteral(a) ||
            a instanceof google.maps.LatLng ||
            isLatLngLiteral(b) ||
            b instanceof google.maps.LatLng
        ) {
            return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
        }
        return deepEqual(a, b);
    }
);

function useDeepCompareMemoize(value: any) {
    const ref = React.useRef();

    if (!deepCompareEqualsForMaps(value, ref.current)) {
    ref.current = value;
    }

    return ref.current;
}

function useDeepCompareEffectForMaps(
    callback: React.EffectCallback,
    dependencies: any[]
): void {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useEffect(callback, dependencies.map(useDeepCompareMemoize));
}

const Map: React.FC<MapProps> = ({ onClick, onIdle, children, style, ...options }) => {
    const dispatch = useAppDispatch();
    const currentLocation = useAppSelector(selectCurrentLocation);

    const ref = React.useRef<HTMLDivElement>(null);
    const [map, setMap] = React.useState<google.maps.Map>();

    React.useEffect(() => {
    if (ref.current && !map) {
        setMap(new window.google.maps.Map(ref.current, {}));
        
    }
    }, [ref, map]);

    useDeepCompareEffectForMaps(() => {
        if (map) {
        map.setOptions(options);
        }
    }, [map, options]);

    React.useEffect(() => {
        if (map) {
        ["click", "idle"].forEach((eventName) =>
            google.maps.event.clearListeners(map, eventName)
        );
    
        if (onClick) {
            map.addListener("click", onClick);
        }
    
        if (onIdle) {
            map.addListener("idle", () => onIdle(map));
        }
        }
    }, [map, onClick, onIdle]);

    useEffect(() => {
        if(map) {
            const service = new google.maps.places.PlacesService(map)
            // console.log(map);

            service.textSearch({location: currentLocation, query: "restaurants"}, (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                    // dispatch results to global state --> pull down results in MapCardContent component, then map through to show markers
                    dispatch(updateLocationQuery(results))

                    console.log(results);
                }
            })

        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [map, currentLocation])

    return (
        <>
            <div ref={ref} style={style}/>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    // set the map prop on the child component
                    return React.cloneElement(child, { map });
                }
                })}
        </>
    )
}

export default Map;