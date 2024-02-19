import React from 'react'

export default function Questions() {
    const [questions, setQuestions] = React.useState([{
        ques: 'What is your name?',
        ans: ''
    },
    {
        ques: 'What is your age?',
        ans: ''
    }]);
    const handleClick = (index) => {
        // generate some random text
        const randomText = Math.random().toString(36).substring(2);

        setQuestions(prev => {
            return [...prev.slice(0, index), { ...prev[index], ans: randomText }, ...prev.slice(index + 1)]
        })
    }
    return (
        <div
        className='flex flex-col items-center justify-center m-5'
        >
            {
                questions.map((question, index) => {
                    return (
                        <div 
                            className='border-2 p-3 shadow-md w-80 flex justify-between items-center mb-3 rounded-md bg-gray-100 hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-300'
                            key={index}
                        > 
                            <div className='flex flex-col font-serif'>
                            <span>{question.ques}</span>
                            <span>{question.ans}</span>
                            </div>
                            <button
                            className='bg-blue-500 text-white rounded-md p-1 hover:bg-blue-400 hover:scale-105 transition-all ease-in-out duration-300'
                            onClick={() => handleClick(index)}>Generate</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
