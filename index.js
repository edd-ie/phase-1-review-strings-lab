// currentUser is defined:
const currentUser = 'Eddie';

// welcomeMessage: "Welcome to Flatbook,'currentUser'":
let welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// excitedWelcomeMessage: "WELCOME TO FLATBOOK, 'currentUser' !"
let  excitedWelcomeMessage = welcomeMessage.toUpperCase();

// shortGreeting: "Welcome," + first initial of 'currentUser' variable + !
let shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;
