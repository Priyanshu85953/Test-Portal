// javascript.js

let totalMinutes = 10; // 180 minutes
let timeLeft = totalMinutes * 60; // Convert minutes to seconds
let timerId;

// Function to start the timer
function startTimer() {
    timerId = setInterval(function() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        // Display the timer
        document.getElementById('time_left').innerHTML = `Time Left: ${minutes}m ${seconds < 10 ? '0' : ''}${seconds}s`;

        if (timeLeft <= 0) {
            clearInterval(timerId);
            autoSubmit();
        }

        timeLeft--;
    }, 1000);
}

// Function to stop the timer and submit
function stopTimer() {
    clearInterval(timerId);
}

// Function to handle auto submission
function autoSubmit() {
    alert("Time is over! Submitting the test automatically.");
    document.getElementById('submit').click(); // Simulate click on submit button
}

// Start the timer when the page loads
window.onload = startTimer;

// Stop the timer on submit button click
document.getElementById('submit').onclick = function() {
    stopTimer();
};

// Login handler (assuming there's a login form)
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    // Basic validation to check if the fields are filled
    if (userId === "" || password === "") {
        alert("Please fill in both the ID and Password.");
        return false;
    }

    // Object with valid usernames and their respective passwords
    const validCredentials = {
        "jee01": "123",
        "jee02": "124",
        "jee03": "125"
    };

    // Check if the entered username exists in the object and if the password matches
    if (validCredentials[userId] && validCredentials[userId] === password) {
        // If login is successful
        window.location.href = "exam.html"; // Redirect to another page
    } else {
        // If login fails
        alert("Invalid Username or Password. Hands' up, you are going to be arrested!");
    }

    return false;
}

document.addEventListener('DOMContentLoaded', function () {
    let currentSection = "phySec1"; // Default section
    let quizSubmitted = false; // Track whether the quiz has been submitted

    const sectionData = {
        phySec1: [
            {
                questionNumber: 1,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F1.jpeg?alt=media", 
                options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                correctAnswer: "Option 2" 
            },
            {
                questionNumber: 2,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F2.jpeg?alt=media", 
                options: ["Option A", "Option B", "Option C", "Option D"],
                correctAnswer: "Option A"
            },
            {
                questionNumber: 3,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F3.jpeg?alt=media", 
                options: ["Option X", "Option Y", "Option Z", "Option W"],
                correctAnswer: "Option Z"
            },
            {
                questionNumber: 4,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F4.jpeg?alt=media", 
                options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                correctAnswer: "Option 1"
            },
            {
                questionNumber: 5,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F5.jpeg?alt=media", 
                options: ["Option A", "Option B", "Option C", "Option D"],
                correctAnswer: "Option B"
            },
            {
                questionNumber: 6,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F6.jpeg?alt=media", 
                options: ["Option X", "Option Y", "Option Z", "Option W"],
                correctAnswer: "Option W"
            },
            {
                questionNumber: 7,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F7.jpeg?alt=media", 
                options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                correctAnswer: "Option 2"
            },
            {
                questionNumber: 8,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F8.jpeg?alt=media", 
                options: ["Option A", "Option B", "Option C", "Option D"],
                correctAnswer: "Option D"
            },
            {
                questionNumber: 9,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F9.jpeg?alt=media", 
                options: ["Option X", "Option Y", "Option Z", "Option W"],
                correctAnswer: "Option X"
            },
            {
                questionNumber: 10,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F10.jpeg?alt=media", 
                options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                correctAnswer: "Option 3"
            },
            {
                questionNumber: 11,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F11.jpeg?alt=media", 
                options: ["Option A", "Option B", "Option C", "Option D"],
                correctAnswer: "Option A"
            },
            {
                questionNumber: 12,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F12.jpeg?alt=media", 
                options: ["Option X", "Option Y", "Option Z", "Option W"],
                correctAnswer: "Option Y"
            },
            {
                questionNumber: 13,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F13.jpeg?alt=media", 
                options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                correctAnswer: "Option 4"
            },
            {
                questionNumber: 14,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F14.jpeg?alt=media", 
                options: ["Option A", "Option B", "Option C", "Option D"],
                correctAnswer: "Option C"
            },
            {
                questionNumber: 15,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F15.jpeg?alt=media", 
                options: ["Option X", "Option Y", "Option Z", "Option W"],
                correctAnswer: "Option W"
            },
            {
                questionNumber: 16,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F16.jpeg?alt=media", 
                options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                correctAnswer: "Option 2"
            },
            {
                questionNumber: 17,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F17.jpeg?alt=media", 
                options: ["Option A", "Option B", "Option C", "Option D"],
                correctAnswer: "Option B"
            },
            {
                questionNumber: 18,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F18.jpeg?alt=media", 
                options: ["Option X", "Option Y", "Option Z", "Option W"],
                correctAnswer: "Option Z"
            },
            {
                questionNumber: 19,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F19.jpeg?alt=media", 
                options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                correctAnswer: "Option 3"
            },
            {
                questionNumber: 20,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F20.jpeg?alt=media", 
                options: ["Option A", "Option B", "Option C", "Option D"],
                correctAnswer: "Option D"
            }
        ],
        phySec2: [
            {
                questionNumber: 21,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F21.jpeg?alt=media",
                correctAnswer: 42 // Numerical answer
            },
            {
                questionNumber: 22,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F22.jpeg?alt=media",
                options: ["Option A", "Option B", "Option C", "Option D"],
                correctAnswer: "Option D"
            },
            {
                questionNumber: 23,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F23.jpeg?alt=media", // Placeholder for image 23
                options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                correctAnswer: "Option 1"
            },
            {
                questionNumber: 24,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F24.jpeg?alt=media", // Placeholder for image 24
                options: ["Option A", "Option B", "Option C", "Option D"],
                correctAnswer: "Option C"
            },
            {
                questionNumber: 25,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F25.jpeg?alt=media", // Placeholder for image 25
                options: ["Option X", "Option Y", "Option Z", "Option W"],
                correctAnswer: "Option W"
            },
            {
                questionNumber: 26,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F26.jpeg?alt=media", // Placeholder for image 26
                options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                correctAnswer: "Option 2"
            },
            {
                questionNumber: 27,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F27.jpeg?alt=media", // Placeholder for image 27
                options: ["Option A", "Option B", "Option C", "Option D"],
                correctAnswer: "Option B"
            },
            {
                questionNumber: 28,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F28.jpeg?alt=media", // Placeholder for image 28
                options: ["Option X", "Option Y", "Option Z", "Option W"],
                correctAnswer: "Option Z"
            },
            {
                questionNumber: 29,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F29.jpeg?alt=media", // Placeholder for image 29
                options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                correctAnswer: "Option 3"
            },
            {
                questionNumber: 30,
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/img%2F30.jpeg?alt=media", // Placeholder for image 30
                options: ["Option A", "Option B", "Option C", "Option D"],
                correctAnswer: "Option B"
            }
        ],
        chemSec1: [
            {
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/chemsec1-1.jpeg?alt=media&token=sampleToken3",
                options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                correctAnswer: "Option 1"
            },
            {
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/chemsec1-2.jpeg?alt=media&token=sampleToken4",
                options: ["Option A", "Option B", "Option C", "Option D"],
                correctAnswer: "Option C"
            }
        ],
        chemSec2: [
            {
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/chemsec2-1.jpeg?alt=media&token=sampleToken5",
                options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                correctAnswer: "Option 2"
            },
            {
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/chemsec2-2.jpeg?alt=media&token=sampleToken6",
                options: ["Option A", "Option B", "Option C", "Option D"],
                correctAnswer: "Option B"
            }
        ],
        mathsSec1: [
            {
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/mathssec1-1.jpeg?alt=media&token=sampleToken7",
                options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                correctAnswer: "Option 4"
            },
            {
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/mathssec1-2.jpeg?alt=media&token=sampleToken8",
                options: ["Option A", "Option B", "Option C", "Option D"],
                correctAnswer: "Option B"
            }
        ],
        mathsSec2: [
            {
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/mathssec2-1.jpeg?alt=media&token=sampleToken9",
                options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                correctAnswer: "Option 1"
            },
            {
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/mathssec2-2.jpeg?alt=media&token=sampleToken10",
                options: ["Option A", "Option B", "Option C", "Option D"],
                correctAnswer: "Option D"
            }
        ]
    };

    const sectionQuestionIndex = {
        phySec1: 0,
        phySec2: 0,
        chemSec1: 0,
        chemSec2: 0,
        mathsSec1: 0,
        mathsSec2: 0
    };

    const selectedAnswers = {};
    const markedForReview = {}; // New object to track marked for review

    const saveButton = document.getElementById('favourite');
    const saveAndNextButton = document.getElementById('next');
    const markforreviewAndNextButton = document.getElementById('mfran');
    const clearResponseButton = document.getElementById('cr');
    const previousButton = document.getElementById('previous');
    const submitButton = document.getElementById('submit'); // Assuming there's a submit button

    saveButton.addEventListener('click', saveCurrentQuestion);
    saveAndNextButton.addEventListener('click', saveAndNextQuestion);
    markforreviewAndNextButton.addEventListener('click', markforreviewAndNextQuestion);
    clearResponseButton.addEventListener('click', clearResponse);
    previousButton.addEventListener('click', goToPreviousQuestion);
    submitButton.addEventListener('click', submitQuiz);

    function saveCurrentQuestion() {
        if (currentSection.includes("Sec2")) {
            // For Section 2, save numerical answer
            const numericalAnswer = document.getElementById('numerical-answer').value;
    
            if (numericalAnswer) {
                if (!selectedAnswers[currentSection]) {
                    selectedAnswers[currentSection] = {};
                }
                selectedAnswers[currentSection][sectionQuestionIndex[currentSection]] = numericalAnswer;
            }
        } else {
            // For Section 1, save MCQ answers as before
            const selectedOption = document.querySelector(`input[name="option${sectionQuestionIndex[currentSection]}"]:checked`);
    
            if (selectedOption) {
                if (!selectedAnswers[currentSection]) {
                    selectedAnswers[currentSection] = {};
                }
                selectedAnswers[currentSection][sectionQuestionIndex[currentSection]] = selectedOption.value;
            }
        }
    
        updatePaletteItems();
    }
    

    function markforreviewAndNextQuestion() {
        saveCurrentQuestion();
        
        // Initialize the review tracking for the current section if not already done
        if (!markedForReview[currentSection]) {
            markedForReview[currentSection] = {};
        }
        
        // Set the current question as marked for review
        markedForReview[currentSection][sectionQuestionIndex[currentSection]] = true;
        
        updatePaletteItems(); // Update the palette to reflect the change
        
        goToNextQuestion();
    }

    function saveAndNextQuestion() {
        saveCurrentQuestion();
        goToNextQuestion();
    }

    function goToNextQuestion() {
        const currentIndex = sectionQuestionIndex[currentSection];
        if (currentIndex < sectionData[currentSection].length - 1) {
            sectionQuestionIndex[currentSection]++;
            updateQuestionDisplay();
            updatePaletteItems(); // Update palette colors
        } else {
            const nextSection = getNextSection();
            if (nextSection) {
                switchSection(nextSection);
            }
        }
    }

    function goToPreviousQuestion() {
        const currentIndex = sectionQuestionIndex[currentSection];
        if (currentIndex > 0) {
            sectionQuestionIndex[currentSection]--;
            updateQuestionDisplay();
            updatePaletteItems(); // Update palette colors
        }
    }

    function clearResponse() {
        // Clear selected option for the current question
        document.querySelectorAll(`input[name="option${sectionQuestionIndex[currentSection]}"]`).forEach(input => {
            input.checked = false; // Uncheck the radio buttons
        });
        
        if (selectedAnswers[currentSection]) {
            selectedAnswers[currentSection][sectionQuestionIndex[currentSection]] = null; // Clear the selected answer
        }
        
        // Update the palette items to reflect the cleared state
        updatePaletteItems();
    }

    function updateQuestionDisplay() {
        const currentQuestionData = sectionData[currentSection][sectionQuestionIndex[currentSection]];
        document.getElementById('q1').src = currentQuestionData.url;
        document.getElementById('question-title').textContent = `Question no. ${sectionQuestionIndex[currentSection] + 1}`;
    
        const optionsContainer = document.querySelector('.answers');
        optionsContainer.innerHTML = "";  // Clear previous content
    
        if (currentSection.includes("Sec2")) {
            // For Section 2, show a numerical input field
            const inputField = document.createElement('input');
            inputField.type = 'number';
            inputField.id = 'numerical-answer';
            inputField.style.width = "200px";  // Increase the size of the input field
            inputField.style.height = "40px";  // Adjust height
            inputField.placeholder = 'Enter your answer';
    
            if (selectedAnswers[currentSection] && selectedAnswers[currentSection][sectionQuestionIndex[currentSection]] !== undefined) {
                inputField.value = selectedAnswers[currentSection][sectionQuestionIndex[currentSection]];
            }
    
            optionsContainer.appendChild(inputField);
        } else {
            // For Section 1, display MCQs as usual
            currentQuestionData.options.forEach((option, index) => {
                const label = document.createElement('label');
                label.innerHTML = `<input type="radio" name="option${sectionQuestionIndex[currentSection]}" value="${option}"> ${option}`;
                optionsContainer.appendChild(label);
            });
    
            if (selectedAnswers[currentSection] && selectedAnswers[currentSection][sectionQuestionIndex[currentSection]] !== undefined) {
                const selectedValue = selectedAnswers[currentSection][sectionQuestionIndex[currentSection]];
                const selectedInput = document.querySelector(`input[name="option${sectionQuestionIndex[currentSection]}"][value="${selectedValue}"]`);
                if (selectedInput) {
                    selectedInput.checked = true;
                }
            }
        }
    
        if (quizSubmitted) {
            showResults();  // Show results after submission
        }
    
        updatePaletteItems();
    }
    

    function switchSection(section) {
        if (sectionData.hasOwnProperty(section)) {
            currentSection = section;
            updateQuestionDisplay();
            updateSectionColors(); // Change color when switching sections
        } else {
            console.error("Section not found: " + section);
        }
    }

    function getNextSection() {
        const sectionNames = ["phySec1", "phySec2", "chemSec1", "chemSec2", "mathsSec1", "mathsSec2"];
        const currentIndex = sectionNames.indexOf(currentSection);
        if (currentIndex < sectionNames.length - 1) {
            return sectionNames[currentIndex + 1];
        }
        return null;
    }

    function updatePaletteItems() {
        const paletteList = document.getElementById('palette-list');
        paletteList.innerHTML = ""; // Clear existing palette items
    
        sectionData[currentSection].forEach((_, index) => {
            const paletteItem = document.createElement('div');
            paletteItem.className = 'nv item';
            paletteItem.id = `btn${index + 1}`;
            paletteItem.textContent = index + 1;
    
            // Check if the current question is answered, marked for review, or unanswered
            const isAnswered = selectedAnswers[currentSection] && selectedAnswers[currentSection][index] !== undefined && selectedAnswers[currentSection][index] !== null;
            const isMarkedForReview = markedForReview[currentSection] && markedForReview[currentSection][index];
    
            // Determine the color of the palette item
            if (isMarkedForReview) {
                if (isAnswered) {
                    // Mix of blue and green (e.g., teal)
                    paletteItem.style.backgroundColor = 'purple';
                } else {
                    // Blue for marked for review without an answer
                    paletteItem.style.backgroundColor = '#4B0082';
                }
            } else {
                if (isAnswered) {
                    // Green for answered
                    paletteItem.style.backgroundColor = 'green';
                } else {
                    // Red for visited but unanswered
                    // Check if the question was visited but left unanswered
                    if (selectedAnswers[currentSection] && selectedAnswers[currentSection][index] === null) {
                        paletteItem.style.backgroundColor = 'red';
                    } else {
                        // No color for not visited
                        paletteItem.style.backgroundColor = '';
                    }
                }
            }
    
            // Add a click event listener to update the current question
            paletteItem.addEventListener('click', () => {
                sectionQuestionIndex[currentSection] = index;
                updateQuestionDisplay();
            });
    
            paletteList.appendChild(paletteItem);
        });
    }
    

    function updateSectionColors() {
        const sections = document.querySelectorAll('.section_unselected, .section_selected');

        sections.forEach((section) => {
            section.classList.remove('section_selected');
            section.classList.add('section_unselected');
        });

        // Find the corresponding section element and apply 'section_selected'
        const sectionIndex = Object.keys(sectionData).indexOf(currentSection);
        if (sectionIndex !== -1) {
            sections[sectionIndex].classList.remove('section_unselected');
            sections[sectionIndex].classList.add('section_selected');
        }
    }

    function showResults() {
        const currentQuestionData = sectionData[currentSection][sectionQuestionIndex[currentSection]];
        const correctAnswer = currentQuestionData.correctAnswer;
    
        if (currentSection.includes("Sec2")) {
            // Handle numerical answers for Section 2
            const userAnswer = document.getElementById('numerical-answer').value.trim(); // Get user's answer and trim spaces
    
            if (userAnswer) {
                if (parseFloat(userAnswer) === correctAnswer) {
                    // Correct answer, show in green
                    document.getElementById('numerical-answer').style.border = "2px solid green";
                } else {
                    // Incorrect answer, show in red
                    document.getElementById('numerical-answer').style.border = "2px solid red";
                }
            }
        } else {
            // Handle MCQs for Section 1
            const options = document.querySelectorAll(`input[name="option${sectionQuestionIndex[currentSection]}"]`);
    
            options.forEach(option => {
                const parentLabel = option.parentElement;
                if (option.value === correctAnswer) {
                    parentLabel.style.border = "2px solid green"; // Correct answer in green
                } else if (option.checked) {
                    parentLabel.style.border = "2px solid red"; // Incorrect answer in red
                }
            });
        }
    }
    

    function calculateMarks() {
        let totalMarks = 0;
        let sectionMarks = {};
    
        Object.keys(sectionData).forEach(section => {
            let sectionTotal = 0;
            sectionData[section].forEach((question, index) => {
                const correctAnswer = question.correctAnswer;
                const userAnswer = selectedAnswers[section] ? selectedAnswers[section][index] : null;
    
                if (section.includes("Sec2")) {
                    // Handle numerical answers
                    if (parseFloat(userAnswer) === correctAnswer) {
                        sectionTotal += 4;  // +4 for correct answer
                    } else if (userAnswer) {
                        sectionTotal -= 1;  // -1 for incorrect answer
                    }
                } else {
                    // Handle MCQ answers
                    if (userAnswer === correctAnswer) {
                        sectionTotal += 4;  // +4 for correct answer
                    } else if (userAnswer) {
                        sectionTotal -= 1;  // -1 for incorrect answer
                    }
                }
            });
            sectionMarks[section] = sectionTotal;
            totalMarks += sectionTotal;
        });
    
        return { totalMarks, sectionMarks };
    }
    

    function submitQuiz() {
        quizSubmitted = true;
        showResults(); // Show results for the current question
        
        // Calculate and show final marks and section-wise marks
        const { totalMarks, sectionMarks } = calculateMarks();
        
        // Prepare message for the email (HTML with <br>)
        let emailMessage = `Quiz submitted! Your final score is ${totalMarks} marks.<br><br>Section-wise marks:<br>`;
        let alertMessage = `Quiz submitted! Your final score is ${totalMarks} marks.\n\nSection-wise marks:\n`;
        
        for (const section in sectionMarks) {
            emailMessage += `${section}: ${sectionMarks[section]} marks<br>`;
            alertMessage += `${section}: ${sectionMarks[section]} marks\n`;
        }
        
        // Prompt the user for their name, keep prompting until a valid name is entered
        let userName = "";
        while (!userName) {
            userName = prompt("Please enter your name (This is required):");
        }
        
        // Append the name to both messages
        emailMessage = `<strong>Name: ${userName}</strong><br><br>` + emailMessage;
        alertMessage = `Name: ${userName}\n\n` + alertMessage;
        
        // Add correct answers and selected answers to the email body
        emailMessage += `<br><br><strong>Selected Answers:</strong><br>`;
        alertMessage += `\n\nSelected Answers:\n`;
        
        Object.keys(sectionData).forEach(section => {
            emailMessage += `<strong>${section}:</strong><br>`;
            alertMessage += `${section}:\n`;
            
            sectionData[section].forEach((question, index) => {
                const correctAnswer = question.correctAnswer;
                const userAnswer = selectedAnswers[section] ? selectedAnswers[section][index] : "No answer";
                emailMessage += `Question ${index + 1}: Selected - ${userAnswer}, Correct - ${correctAnswer}<br>`;
                alertMessage += `Question ${index + 1}: Selected - ${userAnswer}, Correct - ${correctAnswer}\n`;
            });
        });
    
        // Display the alert message
        alert(alertMessage);
    
        // Send the email using SMTPJS with the emailMessage
        Email.send({
            Host: "smtp.elasticemail.com", // Elastic Email SMTP server
            Username: "psych9841@gmail.com", // Your verified sender email
            Password: "C07B6B20BF9B3C1096426FD395B00464119E", // The API token you obtained
            To: "psych9841@gmail.com", // The recipient email address
            From: "psych9841@gmail.com", // Must be the same as your verified sender
            Subject: `Quiz Results for ${userName}`,
            Body: emailMessage
        })
        .then(function(response) {
            alert("THANK YOU!");
        })
        .catch(function(error) {
            console.error("Error sending email:", error);
        });
    }
    
    
    
    

    // Add click event listeners for the sections
    document.querySelectorAll('.section_unselected, .section_selected').forEach((element, index) => {
        const sectionNames = ["phySec1", "phySec2", "chemSec1", "chemSec2", "mathsSec1", "mathsSec2"];
        element.addEventListener('click', () => {
            switchSection(sectionNames[index]);
        });
    });

    updateQuestionDisplay();
    updatePaletteItems();
    updateSectionColors(); // Initialize colors
});
