// ### First Project JavaScript:


class User {
    constructor(name, email, age, password) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.password = password;
        this.balance = 0;
        this.transactions = [];
        this.loans = 0;
        this.investments = [];
    }
}

const users = [];

// !===== Validations =====

function capitalizeName(name) {
    return name.trim().split(" ")
        .map(w => w[0].toUpperCase() + w.slice(1).toLowerCase())
        .join(" ");
}

function validateName(name) {
    name = name.trim();
    return name.length >= 5 && /^[a-zA-Z\s]+$/.test(name);
}

function validateEmail(email) {
    email = email.trim().toLowerCase();
    if (email.includes(" ")) return false;
    if (email.indexOf("@") !== email.lastIndexOf("@")) return false;
    if (email.length < 10) return false;
    return !users.some(u => u.email === email);
}

function validateAge(age) {
    return /^\d{1,2}$/.test(age.trim());
}

function validatePassword(password) {
    password = password.trim();
    return password.length >= 7 &&
           !password.includes(" ") &&
           /[@#\-\+\*\/]/.test(password);
}

// ^===== SIGN UP =====

function signUp() {
    let name = prompt("Dkhel smitk Kamla ");
    if (!validateName(name)) return alert("Invalid name"), signUp();
    name = capitalizeName(name);

    let email = prompt("Dkhel email dyalk :");
    if (!validateEmail(email)) return alert("Invalid email"), signUp();

    let age = prompt("Dkhel age dyalk:");
    if (!validateAge(age)) return alert("Invalid age"), signUp();

    let password = prompt("Dkhel password li bghiti :");
    if (!validatePassword(password)) return alert("Invalid password"), signUp();

    let confirm = prompt("Confirm password:");
    if (confirm !== password) return alert("Passwords not matching"), signUp();

    users.push(new User(name, email.toLowerCase(), age, password));
    alert("Account created successfully ");
}






// ## 1 - Instructions:
// - Create a folder named: first_project_js_firstName_lastName
// - Create a repository with the same name as the folder
// - Adhere to the folder structure
// - Individual work
// - Minimum of 10 commits
// - Deadline: One day
// - Use of object classes, arrays, functions, prompts, etc.

// ## 2 - Project Objective:
// - Create a JavaScript program that simulates logging into a bank account using only the console to interact with the user.

// ## 3 - Instructions:
// - Account Creation and Management:
//     + Allow the user, via prompts, to choose between signing up, logging in, or changing the password.
//     + If the user only writes "exit," they exit the current process, and the choice question is asked again.
//         * If the user chooses to sign up, here are the details they must enter:
//             # Name (Full):
//             - Check for leading or trailing spaces.
//             - The first letter should be capitalized.
//             - After each space, the first letter should remain capitalized.
//             - Check that all other characters are in lowercase.
//             - Do not save the Name if it has less than 5 characters (excluding spaces).
//             - Do not save the Name if it contains numbers, "@", or similar special characters.

//             # Email:
//             - Check for leading or trailing spaces.
//             - Convert all letters to lowercase.
//             - Do not save the Email if it has spaces in the middle.
//             - Do not save the Email if it has fewer than 10 characters (excluding spaces).
//             - Do not save the Email if it does not contain exactly one "@" symbol.
//             - Ensure the email is unique.

//             # Age:
//             - Check for leading, trailing, or middle spaces.
//             - Verify that only digits are entered.
//             - Do not save the Age if it has 0 characters, or if it has 3 characters or more.

//             # Password:
//             - Check for leading or trailing spaces.
//             - Do not save the Password if it has spaces in the middle.
//             - Require at least one special character from the set: ["@", "#", "-", "+", "*", "/"].
//             - Require at least 7 characters to confirm the password.






//             # Password_confirmed:
//             - The user must re-enter their exact password; otherwise, they are blocked.

//         * If the user chooses to log in, here are the details they must enter:
//             # Email:
//             - Check if the email exists in our Database.
            
//             # Password:
//             - Check if the entered password is associated with the previously entered email.

//         * If the user chooses to change the password:
//             - They must enter their existing Email in the Database.

//         * After the user logs in, display the amount they have in their bank (user's choice) and offer them services:
//             # Logout:
//             - If the user chooses this option, they are logged out and offered the option, as at the beginning, to sign up, log in, or change the password.
            
//             # Withdraw Money:
//             - If the user chooses this option, they can withdraw an amount from their bank (not exceeding the available amount).
            
//             # Deposit Money:
//             - If the user chooses this option, they can deposit the desired amount (not exceeding 1000 dirhams).
            
//             # Take a Loan:
//             - If the user chooses this option, they can take a loan up to 20% of what they already have.
//             - They receive an additional 20%, but lose 10% with each login until reaching the amount of their loan.
            
//             # Invest:
//             - If the user chooses this option, they can invest any amount in the bank.
//             - Upon the next login, they will receive 20% of their investment each time until reaching 120% (earning 20% on each investment).
            
//             # History:
//             - Ability to view the entire transaction history.
