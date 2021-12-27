import React, { FormEvent, useState } from 'react';

function QuizCardContent(): JSX.Element {

    /**
     * allQuestionsAnswered variable checks to see if there is an answer for every question prior to showing the submit button on the quiz form.
     */

    const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false)


    /**
     * input example for quiz question choices
     */
    let choices: string[] = ["choice1", "choice2", "choice3", "choice4"]

    /**
     * Continue documenting the following function: handleNextQuestionClick
     * @param e : click event
     */

    const handleNextQuestionClick = (e: FormEvent) => {
        e.preventDefault();

        // continue fleshing out logic here

    }

    /**
     * Continue documenting the following function: handlePreviousQuestionClick
     * @param e : click event
     */

    const handlePreviousQuestionClick = (e: FormEvent) => {
        e.preventDefault();

        // continue fleshing out logic here

    }

    /**
     * Continue documenting the following function: handleSubmit
     * @param e : click event
     */

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // continue fleshing out logic here
    }
    
    return (
        <>
            <div className='center-align'>
                <img src="logo192.png" alt="" />
            </div>

            <form onSubmit={(e) => handleSubmit(e)}>
                <h3 className='center-align'>Question</h3>
                <hr />
                <br />

                <div className='center-align'>
                    {choices.map(option => {
                        return (
                            <p>
                                <label>
                                    <input className="with-gap" name="" type="radio" />
                                    <span>{option}</span>
                                </label>
                            </p>
                        )
                    })}
                </div>

                    <div className='right-align mt-5'>
                        
                        {/* contidtional rendering to show "next question" vs. "submit answers" buttons in div below */}

                        {allQuestionsAnswered 
                        ? 
                            <button type="submit" className='waves-effect waves-light btn-small'>Submit</button>
                        :
                            <>
                                <button className='waves-effect waves-light btn-small' onClick={(e) => handlePreviousQuestionClick(e)}>Previous Question</button>
                                &nbsp;
                                <button className='waves-effect waves-light btn-small' onClick={(e) => handleNextQuestionClick(e)}>Next Question</button>
                            </>
                        }
                        
                    </div>
                    
            </form>
            
        </>
    )
}

export default QuizCardContent;
