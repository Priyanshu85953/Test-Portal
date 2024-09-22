document.addEventListener('DOMContentLoaded', function () {
    let currentSection = "phySec1"; // Default section
    let quizSubmitted = false; // Track whether the quiz has been submitted

    const sectionData = {
        phySec1: [
            {
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/1.jpeg?alt=media&token=22c8dce8-b8fc-4b82-8ea3-e550d875c8e1",
                options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                correctAnswer: "Option 2" // Example correct answer
            },
            {
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/2.jpeg?alt=media&token=6a76bc40-7fa0-44c6-8ea6-0a47811a9921",
                options: ["Option A", "Option B", "Option C", "Option D"],
                correctAnswer: "Option A"
            },
            {
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/3.jpeg?alt=media&token=b5f69f4a-aa01-496e-9adb-82cc2599d425",
                options: ["Option X", "Option Y", "Option Z", "Option W"],
                correctAnswer: "Option Z"
            }
        ],
        phySec2: [
            {
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/physec2-1.jpeg?alt=media&token=sampleToken1",
                options: ["Option 1", "Option 2", "Option 3", "Option 4"],
                correctAnswer: "Option 3"
            },
            {
                url: "https://firebasestorage.googleapis.com/v0/b/mentorsmantratestportal1.appspot.com/o/physec2-2.jpeg?alt=media&token=sampleToken2",
                options: ["Option A", "Option B", "Option C", "Option D"],
                correctAnswer: "Option D"
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

    const saveButton = document.getElementById('favourite');
    const saveAndNextButton = document.getElementById('next');
    const clearResponseButton = document.getElementById('cr');
    const previousButton = document.getElementById('previous');
    const submitButton = document.getElementById('submit'); // Assuming there's a submit button

    saveButton.addEventListener('click', saveCurrentQuestion);
    saveAndNextButton.addEventListener('click', saveAndNextQuestion);
    clearResponseButton.addEventListener('click', clearResponse);
    previousButton.addEventListener('click', goToPreviousQuestion);
    submitButton.addEventListener('click', submitQuiz);

    function saveCurrentQuestion() {
        const selectedOption = document.querySelector(`input[name="option${sectionQuestionIndex[currentSection]}"]:checked`);
        if (selectedOption) {
            if (!selectedAnswers[currentSection]) {
                selectedAnswers[currentSection] = {};
            }
            selectedAnswers[currentSection][sectionQuestionIndex[currentSection]] = selectedOption.value;
        }
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
        }
    }

    function clearResponse() {
        document.querySelectorAll(`input[name="option${sectionQuestionIndex[currentSection]}"]`).forEach(input => {
            input.checked = false;
        });
        if (selectedAnswers[currentSection]) {
            selectedAnswers[currentSection][sectionQuestionIndex[currentSection]] = null;
        }
    }

    function updateQuestionDisplay() {
        const currentQuestionData = sectionData[currentSection][sectionQuestionIndex[currentSection]];

        document.getElementById('q1').src = currentQuestionData.url;
        document.getElementById('question-title').textContent = `Question no. ${sectionQuestionIndex[currentSection] + 1}`;

        const optionsContainer = document.querySelector('.answers');
        optionsContainer.innerHTML = "";

        currentQuestionData.options.forEach((option, index) => {
            const label = document.createElement('label');
            label.innerHTML = `
                <input type="radio" name="option${sectionQuestionIndex[currentSection]}" value="${option}">
                ${option}
            `;
            optionsContainer.appendChild(label);
        });

        if (selectedAnswers[currentSection] && selectedAnswers[currentSection][sectionQuestionIndex[currentSection]] !== undefined) {
            const selectedValue = selectedAnswers[currentSection][sectionQuestionIndex[currentSection]];
            const selectedInput = document.querySelector(`input[name="option${sectionQuestionIndex[currentSection]}"][value="${selectedValue}"]`);
            if (selectedInput) {
                selectedInput.checked = true;
            }
        }

        if (quizSubmitted) {
            showResults(); // Show results when navigating after submission
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
        paletteList.innerHTML = "";

        sectionData[currentSection].forEach((_, index) => {
            const paletteItem = document.createElement('div');
            paletteItem.className = 'nv item';
            paletteItem.id = `btn${index + 1}`;
            paletteItem.textContent = index + 1;

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

    function calculateMarks() {
        let totalMarks = 0;
        let sectionMarks = {};

        Object.keys(sectionData).forEach(section => {
            let sectionTotal = 0;
            sectionData[section].forEach((question, index) => {
                const correctAnswer = question.correctAnswer;
                const userAnswer = selectedAnswers[section] ? selectedAnswers[section][index] : null;
                if (userAnswer === correctAnswer) {
                    sectionTotal += 4;
                } else if (userAnswer) {
                    sectionTotal -= 1;
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
        let message = `Quiz submitted! Your final score is ${totalMarks} marks.\n\nSection-wise marks:\n`;
        for (const section in sectionMarks) {
            message += `${section}: ${sectionMarks[section]} marks\n`;
        }
    
        // Display the result in an alert
        alert(message);
    
        // Send the email using Google Apps Script
        fetch('https://script.google.com/macros/s/AKfycbzfWTCBjjdCTV-_LiX-zkA7aznK6JygS5zGIbnL3qHgNXrRkrE5DO0wX8iz0o0lh13R/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                subject: 'Quiz Scorecard',
                message: message
            })
        }).then(response => {
            if (response.ok) {
                console.log('Email sent successfully');
            } else {
                console.error('Error sending email');
            }
        }).catch(error => {
            console.error('Error:', error);
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

