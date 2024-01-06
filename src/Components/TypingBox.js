// Import necessary modules and components from React and external libraries
import React, { createRef, useEffect, useMemo, useRef, useState } from 'react';
import UpperMenu from './UpperMenu';
import { useTestMode } from '../Context/TestModeContext';
import Stats from './Stats';
import { toast } from 'react-toastify';
var randomWords = require('random-words');

// Functional component for the typing box
const TypingBox = () => {
    // Ref for the input element
    const inputRef = useRef(null);

    // Destructuring values from the TestModeContext
    const { testTime } = useTestMode();

    // State variables for various aspects of the typing test
    const [countDown, setCountDown] = useState(testTime);
    const [intervalId, setIntervalId] = useState(null);
    const [testStart, setTestStart] = useState(false);
    const [testEnd, setTestEnd] = useState(false);
    const [correctChars, setCorrectChars] = useState(0);
    const [incorrectChars, setIncorrectChars] = useState(0);
    const [missedChars, setMissedChars] = useState(0);
    const [extraChars, setExtraChars] = useState(0);
    const [correctWords, setCorrectWords] = useState(0);
    const [wordsArray, setWordsArray] = useState(randomWords(60));
    const [currWordIndex, setCurrWordIndex] = useState(0);
    const [currCharIndex, setCurrCharIndex] = useState(0);
    const [graphData, setGraphData] = useState([]);

    // Refs for each word span in the typing box
    const wordsSpanRef = useMemo(() => {
        return Array(wordsArray.length).fill(0).map(i => createRef(null));
    }, [wordsArray]);

    // Function to start the timer
    const startTimer = () => {
        const intervalId = setInterval(timer, 1000);
        setIntervalId(intervalId);

        function timer() {
            // Update countDown and calculate and update correctChars for graphData
            setCountDown((latestCountDown) => {
                setCorrectChars((correctChars) => {
                    setGraphData((graphData) => {
                        return [
                            ...graphData,
                            [
                                testTime - latestCountDown + 1,
                                (correctChars / 5) / (testTime - latestCountDown + 1) / 60,
                            ],
                        ];
                    });
                    return correctChars;
                });

                // If countdown reaches 1, end the test
                if (latestCountDown === 1) {
                    setTestEnd(true);
                    clearInterval(intervalId);
                    return 0;
                }
                return latestCountDown - 1;
            });
        }
    };

    // Function to reset the typing test
    const resetTest = () => {
        try {
            clearInterval(intervalId);
            setCountDown(testTime);
            setCurrWordIndex(0);
            setCurrCharIndex(0);
            setTestStart(false);
            setTestEnd(false);
            setWordsArray(randomWords(60));
            resetWordSpanClassname();
            focusInput();
        } catch (err) {
            // Show a toast message on successful test reset
            toast.success('Reset test', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    // Function to reset the class names of word spans
    const resetWordSpanClassname = () => {
        wordsSpanRef.map(i => {
            Array.from(i.current.childNodes).map(j => {
                j.className = '';
            });
            wordsSpanRef[0].current.childNodes[0].className = 'current';
        });
    };

    // Function to handle user input
    const handleUserInput = (e) => {
        try {
            if (!testStart) {
                startTimer();
                setTestStart(true);
            }

            const allCurrChars = wordsSpanRef[currWordIndex].current.childNodes;

            // Logic for handling space key
            if (e.keyCode === 32) {
                // Check if all characters in the current word are correct
                let correctCharsInWord = wordsSpanRef[currWordIndex].current.querySelectorAll('.correct');
                if (correctCharsInWord.length === allCurrChars.length) {
                    setCorrectWords(correctWords + 1);
                }

                // Logic for removing cursor from the current word
                if (allCurrChars.length <= currCharIndex) {
                    allCurrChars[currCharIndex - 1].classList.remove('current-right');
                } else {
                    setMissedChars(missedChars + (allCurrChars.length - currCharIndex));

                    for (let i = currCharIndex; i < allCurrChars.length; i++) {
                        allCurrChars[i].className += ' skipped';
                    }

                    allCurrChars[currCharIndex].classList.remove('current');
                }

                // Place cursor at the beginning of the next word
                wordsSpanRef[currWordIndex + 1].current.childNodes[0].className = 'current';

                setCurrWordIndex(currWordIndex + 1);
                setCurrCharIndex(0);
                return;
            }

            // Logic for handling backspace key
            if (e.keyCode === 8) {
                // Logic for backspacing within the current word
                if (currCharIndex !== 0) {
                    if (allCurrChars.length === currCharIndex) {
                        if (allCurrChars[currCharIndex - 1] && allCurrChars[currCharIndex - 1].className.includes('extra')) {
                            allCurrChars[currCharIndex - 1].remove();
                            allCurrChars[currCharIndex - 2].className += ' current-right';
                        }
                        if (allCurrChars[currCharIndex - 1]) {
                            allCurrChars[currCharIndex - 1].className = 'current';
                        }
                        setCurrCharIndex(currCharIndex - 1);
                        return;
                    }

                    allCurrChars[currCharIndex].className = '';
                    allCurrChars[currCharIndex - 1].className = 'current';
                    setCurrCharIndex(currCharIndex - 1);
                }
                return;
            }

            // Logic for handling other key inputs
            if (currCharIndex === allCurrChars.length) {
                // Insert an extra character span for incorrect input
                let newSpan = document.createElement('span');
                newSpan.innerText = e.key;
                newSpan.className = 'incorrect extra current-right';
                allCurrChars[currCharIndex - 1].classList.remove('current-right');
                wordsSpanRef[currWordIndex].current.append(newSpan);
                setCurrCharIndex(currCharIndex + 1);
                setExtraChars(extraChars + 1);
                return;
            }

            // Check if the input key matches the current character
            if (e.key === allCurrChars[currCharIndex].innerText) {
                allCurrChars[currCharIndex].className = "correct";
                setCorrectChars(correctChars + 1);
            } else {
                allCurrChars[currCharIndex].className = "incorrect";
                setIncorrectChars(incorrectChars + 1);
            }

            // Update class names for the next character
            if (currCharIndex + 1 === allCurrChars.length) {
                allCurrChars[currCharIndex].className += ' current-right';
            } else {
                allCurrChars[currCharIndex + 1].className = "current";
            }

            setCurrCharIndex(currCharIndex + 1);
        } catch (err) {
            console.log(err);
        }
    };

    // Function to calculate words per minute (WPM)
    const calculateWPM = () => {
        return Math.round((correctChars / 5) / (testTime / 60));
    };

    // Function to calculate accuracy
    const calculateAcc = () => {
        return Math.round((correctWords / currWordIndex) * 100);
    };

    // Function to focus on the input element
    const focusInput = () => {
        inputRef.current.focus();
    };

    // useEffect hook to reset the test when testTime changes
    useEffect(() => {
        resetTest();
    }, [testTime]);

    // useEffect hook to focus on the input element and set the class for the first word
    useEffect(() => {
        focusInput();
        wordsSpanRef[0].current.childNodes[0].className = 'current';
    }, []);

    // Variables for key generation
    let keyWord = 1;
    let keyChar = 1;

    return (
        <div>
            {/* UpperMenu component displaying the countdown */}
            <UpperMenu countDown={countDown} />

            {/* Conditional rendering based on whether the test has ended or not */}
            {testEnd ? (
                // Display Stats component with test results if the test has ended
                <Stats
                    wpm={calculateWPM()}
                    accuracy={calculateAcc()}
                    correctChars={correctChars}
                    incorrectChars={incorrectChars}
                    missedChars={missedChars}
                    extraChars={extraChars}
                    graphData={graphData}
                    resetTest={resetTest}
                />
            ) : (
                // Display typing box if the test is ongoing
                <div className='type-box' onClick={focusInput}>
                    <div className='words'>
                        {
                            wordsArray.map((word, index) => (
                                <span className='word' key={'word' + (keyWord++)} ref={wordsSpanRef[index]}>
                                    {
                                        word.split('').map(char => (
                                            <span key={'char' + (keyChar++)}>{char}</span>
                                        ))
                                    }
                                </span>
                            ))

                        }
                    </div>
                </div>
            )}
            {/* Hidden input for user typing, with onKeyDown event handler */}
            <input
                type="text"
                className='hidden-input'
                ref={inputRef}
                onKeyDown={handleUserInput}
            />
        </div>
    );
};

export default TypingBox;
