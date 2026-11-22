## About This Assignment

This assignment contains 11 JavaScript questions based on basic JavaScript concepts, string manipulation, arrays, objects, functions and different built-in methods.

The main purpose of this assignment is to understand how JavaScript array methods, string methods, loops and object methods work with practical examples.

All questions are written in a single JavaScript file named `assignment3.js`, with separate comments and console output for easy understanding.

---

## Technologies Used

- JavaScript
- Node.js
- Visual Studio Code

---

## Project Structure

```text
JS-Assignment-3/
│
├── assignment3.js
└── README.md
```

---

## Questions and Solutions

### Q1. Filter Indian States

- Created an array containing Indian state names.
- Used the `filter()` method to remove state names starting with vowels (A, E, I, O, U).
- Displayed the remaining state names.

**Concepts Used:** Arrays, filter(), includes()

### Q2. Reverse Words in a String

- Created a string: "I love my India".
- Used `split()` to convert the sentence into an array of words.
- Used `reverse()` to reverse the order of words.
- Used `join()` to convert the array back into a sentence.

**Expected Output:** India my love I

**Concepts Used:** split(), reverse(), join()

### Q3. Convert INDIA into INDONESIA

- Converted the string into an array of characters.
- Used `splice()` to remove and insert characters.
- Converted the updated array back into a string.

**Expected Output:** INDONESIA

**Concepts Used:** split(), splice(), join()

### Q4. Count Vowels and Consonants

- Took a string containing more than 20 characters.
- Used a loop to check each character.
- Counted vowels and consonants separately.
- Ignored spaces and special characters.

**Concepts Used:** for...of loop, if-else, includes()

### Q5. Replace a Wrong Word

- Created a function named `correctfn()`.
- Passed three parameters: string, wrong word and correct word.
- Used the `replace()` method to replace the wrong word.

**Example:**
- Input: I like to eat aplle
- Wrong Word: aplle
- Correct Word: apple
- Output: I like to eat apple

**Concepts Used:** Functions, replace()

### Q6. Filter Numbers Greater Than 5

- Created the given input array.
- Used `filter()` to select only numbers greater than 5.
- Stored the filtered numbers in a new array.

**Input:** [1, 2, 3, 9, 10, 7, 5, 4, 3]

**Expected Output:** [9, 10, 7]

**Concepts Used:** Arrays, filter()

### Q7. Calculate Student Average Marks

- Created an array of student objects.
- Each student has a name and an array of scores.
- Used `map()` to create a new array.
- Used `reduce()` to calculate the total marks.
- Divided the total by the number of subjects to calculate the average.

**Expected Output:**

```javascript
[
    { name: "Ram", average: 70 },
    { name: "Mohan", average: 80 },
    { name: "Sai", average: 70 },
    { name: "Hemang", average: 85 }
]
```

**Concepts Used:** map(), reduce(), Objects, Arrays

### Q8. Repeated Sum of Digits

- Created a function named `sumOfDigits()`.
- Used a while loop to calculate the sum of individual digits.
- Repeated the process until only one digit remained.

**Example:**

456 = 4 + 5 + 6 = 15

15 = 1 + 5 = 6

**Expected Output:** 6

**Concepts Used:** Functions, while loop, modulus operator, Math.floor()

### Q9. Count Words in a Paragraph

- Created a function named `countWords()`.
- Used `trim()` to remove extra spaces from the beginning and end.
- Used `split()` with a regular expression to separate words.
- Returned the total number of words.

**Concepts Used:** Functions, trim(), split(), Regular Expressions

### Q10. Reverse a String

- Created a function named `reverseString()`.
- Converted the string into an array using `split()`.
- Used `reverse()` to reverse the characters.
- Used `join()` to create the reversed string.

**Input:** Hello

**Expected Output:** olleH

**Concepts Used:** Functions, split(), reverse(), join()

### Q11. Calculate Average Marks Using Objects

- Created an object containing three students and their subject marks.
- Used `Object.keys()` to get student names.
- Used `Object.values()` to get subject marks.
- Used `reduce()` to calculate the total marks.
- Calculated the average and stored it in a new object.

**Expected Output:**

```javascript
{
    student1: { average: 64.2 },
    student2: { average: 64.2 },
    student3: { average: 64.2 }
}
```

**Note:** The average is 64.2, not 44, because the total of all five subject marks is 321, and 321 / 5 = 64.2.

**Concepts Used:** Objects, Object.keys(), Object.values(), forEach(), reduce()

---

## JavaScript Methods Covered

| Method | Purpose |
|---|---|
| filter() | Filters elements from an array |
| map() | Creates a new array by transforming elements |
| reduce() | Reduces array values to a single result |
| splice() | Adds or removes array elements |
| split() | Converts a string into an array |
| join() | Converts an array into a string |
| reverse() | Reverses array elements |
| replace() | Replaces text in a string |
| includes() | Checks whether a value exists |
| trim() | Removes extra spaces from string ends |
| Object.keys() | Returns object property names |
| Object.values() | Returns object property values |
| forEach() | Executes a function for each array element |

---

## How to Run the Project

### Prerequisite

Make sure Node.js is installed on your system.

To check the installation, open the VS Code terminal and run:

```bash
node -v
```

### Steps to Execute

1. Open the project folder in Visual Studio Code.
2. Open the terminal.
3. Make sure the terminal is inside the assignment folder.
4. Run the following command:

```bash
node assignment3.js
```

5. All 11 questions and their outputs will be displayed in the terminal.

---

## Learning Outcomes

After completing this assignment, I learned:

- How to create and manipulate arrays.
- How to work with JavaScript strings.
- How to use filter(), map() and reduce().
- How to work with objects and their properties.
- How to write reusable functions.
- How to use loops and conditional statements.
- How to calculate averages and process numerical data.
- How to execute JavaScript programs using Node.js.
