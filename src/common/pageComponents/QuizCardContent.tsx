import React, { FormEvent, useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from "../../app/hooks";
// import { selectFinalScore } from "./quizSlice";

function QuizCardContent(): JSX.Element {

    /**
     * allQuestionsAnswered variable checks to see if there is an answer for every question prior to showing the submit button on the quiz form.
     */

    const dispatch = useAppDispatch();
    // const finScore = useAppSelector(selectFinalScore);
    const [counter, setCounter] = useState(0);
    const [localScore, setLocalScore] = useState([] as any);
    const [indivScore, setIndivScore] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    // const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false)

    const handleSubmitFinalScore = (event: FormEvent) => {
        event.preventDefault();
    };
    /**
     * Continue documenting the following function: handleNextQuestionClick
     * @param e : click event
     */
    useEffect(() => {
        console.log(localScore)
    }, [localScore])

    useEffect(() => {
        console.log(indivScore)
    }, [indivScore])

    useEffect(() => {
        console.log(totalScore)
    }, [totalScore])

    useEffect(() => {
        let sum = localScore.reduce((a: number, b: number) => a + b, 0)
        setTotalScore(sum)
    }, [counter === 10])

    const handleAnswerOne = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setIndivScore(1)
    }
    const handleAnswerTwo = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setIndivScore(2)
    }
    const handleAnswerThree = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setIndivScore(3)
    }
    const handleAnswerFour = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setIndivScore(4)
    }

    const handleNextQuestionClick = (e: FormEvent) => {
        e.preventDefault();
        if (indivScore !== 0){
            setLocalScore([...localScore, indivScore])
            setIndivScore(0)
            setCounter(counter + 1)
        }
    }

    /**
     * Continue documenting the following function: handlePreviousQuestionClick
     * @param e : click event
     */

    const handlePreviousQuestionClick = (e: FormEvent) => {
        e.preventDefault();
        if (counter > 1){
            localScore.pop()
            setLocalScore([...localScore])
        }
        else{
            setLocalScore([])
        }
        setCounter(counter - 1)
    }

    /**
     * Continue documenting the following function: handleSubmit
     * @param e : click event
     */

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setLocalScore([...localScore, indivScore])
        setCounter(counter + 1)
    }
    
    return (
        <>
            <div className='center-align'>
                <img src="logo192.png" alt="" />
            </div>
            {counter >= 10
            ?
                <>
                    <h3 className='center-align'>Thanks for your input!</h3>
                    <hr />
                    <br />
                    {`Your Score: ${totalScore}`}
                </>
            :
                <>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <h3 className='center-align'>{`Question ${counter + 1}`}</h3>
                        <hr />
                        <br />

                        <div className='center-align'>
                            {counter === 0 &&
                                <>
                                    <h6>"I have now decided that I <i>don't</i> need milk, as there's someone else currently looking at the milk."</h6>
                                    <br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerOne}>My interest is still whole.</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerTwo}>My interest is half and half.</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerThree}>My interest is at 2%.</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerFour}>My interest is skim.</button><br />
                                </>
                            }
                            {counter === 1 &&
                                <>
                                    <h6>"Han shot first."</h6>
                                    <br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerOne}>Who's Han?</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerTwo}>I mean, if Georgie Boy said that he didn't...</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerThree}>YES.</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerFour}>YES, and I have the Laserdisc to prove it.</button><br />
                                </>
                            }
                            {counter === 2 &&
                                <>
                                    <h6>"I actually <i>finish</i> reading the books that I start."</h6>
                                    <br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerOne}>What's a book?</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerTwo}>Do magazines count?</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerThree}>Sometimes.</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerFour}>Often.</button><br />
                                </>
                            }
                            {counter === 3 &&
                                <>
                                    <h6>"That elevator looks quite crowded, but I sure am in a hurry."</h6>
                                    <br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerOne}>Surely, they can fit one more in there...</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerTwo}>I'll wait for the next one.</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerThree}>I hope the escalators aren't "temporarily stairs"...</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerFour}>These 40 flights of stairs won't climb themselves!</button><br />
                                </>
                            }
                            {counter === 4 &&
                                <>
                                    <h6>"'Starship Troopers' is OBVIOUSLY the true sequel to 'RoboCop'."</h6>
                                    <br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerOne}>C'MON YOU APES, YOU WANNA LIVE FOREVER?!?</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerTwo}>Your move, creep.</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerThree}>M.I. does the dyin', Fleet just does the flyin'...</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerFour}>I'd buy that for a dollar.</button><br />
                                </>
                            }
                            {counter === 5 &&
                                <>
                                    <h6>"Sorry to cancel our plans at the last minute..."</h6>
                                    <br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerOne}>Bummer!</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerTwo}>How's tomorrow?</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerThree}>Call me sometime down the road when you're free.</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerFour}>Whew!</button><br />
                                </>
                            }
                            {counter === 6 &&
                                <>
                                    <h6>"I have 'The Right Stuff'."</h6>
                                    <br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerOne}>The best pilot you ever saw? You're lookin' at him.</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerTwo}>2</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerThree}>An astronaut named Gus???</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerFour}>I'm More like spam in a can.</button><br />
                                </>
                            }
                            {counter === 7 &&
                                <>
                                    <h6>"Two plus two equals?"</h6>
                                    <br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerOne}>4</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerTwo}>2²</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerThree}>3x = 12, solved for "X"</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerFour}>( ∞ + 4 ) - ∞</button><br />
                                </>
                            }
                            {counter === 8 &&
                                <>
                                    <h6>Placeholder 9</h6>
                                    <br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerOne}>1</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerTwo}>2</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerThree}>3</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerFour}>4</button><br />
                                </>
                            }
                            {counter === 9 &&
                                <>
                                    <h6>Placeholder 10</h6>
                                    <br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerOne}>1</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerTwo}>2</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerThree}>3</button><br />
                                    <button className='waves-effect waves-light btn-small' style={{margin: "7px"}} onClick={handleAnswerFour}>4</button><br />
                                </>
                            }
                            
                        </div>

                            <div className='right-align mt-5'>
                                
                                {/* contidtional rendering to show "next question" vs. "submit answers" buttons in div below */}

                                {counter === 9 
                                ?
                                    <>
                                        <button className='waves-effect waves-light btn-small' onClick={(e) => handlePreviousQuestionClick(e)}>Previous Question</button>
                                        &nbsp;
                                        <button type="submit" className='waves-effect waves-light btn-small'>Submit</button>
                                    </>
                                :
                                    <>
                                        {counter !== 0
                                        ?
                                        <>
                                            <button className='waves-effect waves-light btn-small' onClick={(e) => handlePreviousQuestionClick(e)}>Previous Question</button>
                                            &nbsp;
                                            <button className='waves-effect waves-light btn-small' onClick={(e) => handleNextQuestionClick(e)}>Next Question</button>
                                        </>
                                        :
                                            <button className='waves-effect waves-light btn-small' onClick={(e) => handleNextQuestionClick(e)}>Next Question</button>
                                        }
                                    </>
                                }
                                
                            </div>
                            
                    </form>
                </>
            }
        </>
    )
}

export default QuizCardContent;