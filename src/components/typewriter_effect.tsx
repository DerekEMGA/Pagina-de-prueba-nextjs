import React, { useEffect } from 'react';
//import styles from "../page.module.css";
import styles from "../styles/typewriter_effect.module.css"

// Function simulating a typewriter effect to gradually display text
function typewriter(container: string, text: string, interval: number, callback?: () => void) {
    let i: number = 0;
    // Timer to display text gradually
    const timer = setInterval(() => {
        const element = document.getElementById(container);
        if (element !== null) {
            // Display current text up to position 'i' and add an underscore to simulate the blinking effect
            if (i <= text.length) {
                element.innerHTML = text.substr(0, i++) + "_";
            } else {
                clearInterval(timer);
                // After displaying all the text, start a timer to wait for 2 seconds before erasing the text
                setTimeout(() => {
                    let j = text.length;
                    // Timer to erase text gradually
                    const reverseTimer = setInterval(() => {
                        if (j >= 0) {
                            // Gradually erase text from the end to the beginning
                            element.innerHTML = text.substr(0, j--) + "_";
                        } else {
                            clearInterval(reverseTimer);
                            // If a callback function is provided, call it once the animation is completed
                            if (callback) {
                                callback();
                            }
                        }
                    }, interval);
                }, 2000); // Wait for 2 seconds before erasing the text
            }
        }
    }, interval); // Interval between each character
}

// Functional component Typewriter
function Typewriter() {
    
    // useEffect hook to execute the animation when the component mounts
    useEffect(() => {
        // Array of texts to display
        const texts: string[] = ["¡Coming Soon!"];
        let index = 0; // Index of the current text
        const interval = 100; // Interval of time between each character

        // Function to display the current text
        function showText(text: string) {
            // Call the 'typewriter' function to display the current text
            typewriter("text", text, interval, () => {
                // Once the animation is completed, move to the next text after 1 second
                index = (index + 1) % texts.length;
                setTimeout(() => {
                    showText(texts[index]);
                }, 1000);
            });
        }

        // Call the 'showText' function to start the animation with the first text
        showText(texts[index]);
    }, []); // Only runs once, when the component mounts

    // Render the component
    return (
        <>
            {/* Div where the text will be displayed */}
            <div id="text" className={styles.typeWriterStyle}></div>
        </>
    );
}

// Export the Typewriter component so it can be used in other parts of the application
export default Typewriter;
