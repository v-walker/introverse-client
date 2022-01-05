import React from 'react';
import BasicLargeCard from '../common/pageComponents/BasicLargeCard';
import QuizCardContent from '../common/pageComponents/QuizCardContent';

function QuizPage() {
    return (
        <>
            <main className='container'>
                <div className="row m-below-nav">
                    <div className='col s12 center-align'>
                        <h2>Quiz</h2>
                        <h5>Before we get started, please ponder these sentences.</h5>
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
