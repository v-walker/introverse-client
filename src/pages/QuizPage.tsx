import React from 'react';
import BasicLargeCard from '../common/pageComponents/BasicLargeCard';
import QuizCardContent from '../common/pageComponents/QuizCardContent';

function QuizPage() {
    return (
        <>
            <main className='container'>
                <div className="row m-below-nav">
                    <div className='col s12'>
                        <h2>Quiz/About/Directions</h2>
                        <p>Here is some sample text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat rem porro assumenda esse, odio aperiam corporis, excepturi maxime sunt, soluta nulla! Quis suscipit commodi repellendus deserunt ad alias sunt corporis.</p>
                    </div>
                    <div className='col s12 mt-5'>
                        <BasicLargeCard cardContent={<QuizCardContent />} />
                    </div>
                </div>
            </main>
        </>
    )
}

export default QuizPage
