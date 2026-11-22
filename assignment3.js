// Q1. Create an array of Indian states and remove
// all state names starting with vowels using filter().

console.log("\n========== QUESTION 1 ==========");

let states = [
    "Maharashtra",
    "Andhra Pradesh",
    "Uttar Pradesh",
    "Madhya Pradesh",
    "Rajasthan",
    "Odisha",
    "Gujarat",
    "Assam",
    "Kerala",
    "Haryana"
];

// filter() keeps only those states that do not start with a vowel.
let filteredStates = states.filter(state => 
    {
    return !["A", "E", "I", "O", "U"].includes(state[0].toUpperCase());
});

console.log("States after removing names starting with vowels:");
console.log(filteredStates);

// Q2. Reverse the order of words in a string.
// Input: I love my India
// Expected Output: India my love I

console.log("\n========== QUESTION 2 ==========");

let str = "I love my India";

// First split the sentence into words, then reverse and join them.
let reversedWords = str.split(" ").reverse().join(" ");

console.log("Original String:", str);
console.log("Reversed Words:", reversedWords);


// Q3. Convert INDIA into INDONESIA using splice().

console.log("\n========== QUESTION 3 ==========");

let string = "INDIA";

// Convert the string into an array so that splice() can modify it.
let characters = string.split("");

// Remove "IA" and insert "ONESIA" after "IND".
characters.splice(3, 2, "O", "N", "E", "S", "I", "A");

let updatedString = characters.join("");

console.log("Original String:", string);
console.log("Updated String:", updatedString);


// Q4. Count the number of vowels and consonants
// in a string containing at least 20 characters.

console.log("\n========== QUESTION 4 ==========");

let sentence = "JavaScript is an amazing language";

let vowelCount = 0;
let consonantCount = 0;

// Check each character and count only alphabet letters.
for (let char of sentence.toLowerCase()) 
    {
    if (char >= "a" && char <= "z") 
        {
        if ("aeiou".includes(char)) 
            {
            vowelCount++;
        } else 
            {
            consonantCount++;
        }
    }
}

console.log("String:", sentence);
console.log("Number of Vowels:", vowelCount);
console.log("Number of Consonants:", consonantCount);

// Q5. Create a function to replace a wrong word
// with the correct word using replace().

console.log("\n========== QUESTION 5 ==========");

function correctfn(string, wrong, correct) 
{
    // replace() replaces the first matching wrong word.
    return string.replace(wrong, correct);
}

let wrongSentence = "I like to eat aplle";

// Call the function with the sentence, wrong word and correct word.
let correctSentence = correctfn(wrongSentence, "aplle", "apple");

console.log("Original Sentence:", wrongSentence);
console.log("Corrected Sentence:", correctSentence);

// Q6. Use filter() to return only numbers greater than 5.

console.log("\n========== QUESTION 6 ==========");

let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];

// filter() checks every number and keeps only numbers greater than 5.
let greaterNumbers = inputArr.filter(num => num > 5);

console.log("Original Array:", inputArr);
console.log("Numbers greater than 5:", greaterNumbers);

// Q7. Calculate the average marks of every student
// using map() and reduce().

console.log("\n========== QUESTION 7 ==========");

const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] }
];

// map() creates a new array containing each student's name and average.
let studentAverages = students.map(student => 
    {

    // reduce() adds all the marks to calculate the total.
    let total = student.scores.reduce((sum, score) => sum + score, 0);

    // Divide total marks by the number of subjects.
    let average = total / student.scores.length;

    return {
        name: student.name,
        average: average
    };
});

console.log("Student Average Marks:");
console.log(studentAverages);

// Q8. Find the repeated sum of digits until
// only one digit is left.

console.log("\n========== QUESTION 8 ==========");

function sumOfDigits(num) 
{

    // Keep adding digits until the result becomes a single digit.
    while (num >= 10)
         {

        let sum = 0;

        // Extract each digit and add it to sum.
        while (num > 0) 
            {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        // Use the new sum for the next iteration.
        num = sum;
    }

    return num;
}

let number = 456;

console.log("Original Number:", number);
console.log("Final Single Digit:", sumOfDigits(number));

// Q9. Create a function to count the number
// of words in a paragraph.

console.log("\n========== QUESTION 9 ==========");

function countWords(paragraph) 
{

    // Remove extra spaces from the beginning and end.
    let cleanedParagraph = paragraph.trim();

    // Return 0 if the paragraph is empty.
    if (cleanedParagraph === "") 
        {
        return 0;
    }

    // Split the paragraph wherever one or more spaces occur.
    let words = cleanedParagraph.split(/\s+/);

    return words.length;
}

let paragraph = "JavaScript is a programming language used for web development.";

console.log("Paragraph:", paragraph);
console.log("Total Number of Words:", countWords(paragraph));

// Q10. Write a function to reverse a string.
// Input: Hello
// Expected Output: olleH

console.log("\n========== QUESTION 10 ==========");

function reverseString(str) 
{

    // Convert string into an array, reverse it and join it again.
    return str.split("").reverse().join("");
}

let inputString = "Hello";

console.log("Original String:", inputString);
console.log("Reversed String:", reverseString(inputString));

// Q11. Calculate the average marks of each student
// using Object.keys(), Object.values() and reduce().

console.log("\n========== QUESTION 11 ==========");

const studentMarks = 
{
    student1: 
    {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },

    student2: 
    {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },

    student3: 
    {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

// Get all student names from the object.
let studentNames = Object.keys(studentMarks);

let finalResult = {};

// Loop through each student to calculate their average.
studentNames.forEach(student => 
    {

    // Get all subject marks of the current student.
    let marks = Object.values(studentMarks[student]);

    // Add all subject marks using reduce().
    let total = marks.reduce((sum, mark) => sum + mark, 0);

    // Calculate the average marks.
    let average = total / marks.length;

    // Store only the average for each student.
    finalResult[student] = 
    {
        average: average
    };
});

console.log("Final Student Average:");
console.log(finalResult);