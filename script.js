// Find the page elements used by the interactive features.
const pageBody = document.querySelector('body');
const welcomeMessage = document.querySelector('#welcome-message');
const modeButton = document.querySelector('#mode-button');
const skillsButton = document.querySelector('#skills-button');
const skillsContent = document.querySelector('#skills-content');
const skillInput = document.querySelector('#new-skill');
const addSkillButton = document.querySelector('#add-skill-button');
const skillMessage = document.querySelector('#skill-message');
const additionalSkills = document.querySelector('#additional-skills');
const addedSkills = document.querySelector('#added-skills');

let darkMode = false;
let skillsVisible = true;

// Display a welcome message when the script loads.
function showWelcome() {
  welcomeMessage.textContent = 'Welcome to my CV webpage!';
}

// Change the colours by adding or removing a CSS class.
function changeMode(event) {
  if (darkMode) {
    pageBody.classList.remove('dark-mode');
    event.currentTarget.textContent = 'Switch to dark mode';
    darkMode = false;
  } else {
    pageBody.classList.add('dark-mode');
    event.currentTarget.textContent = 'Switch to light mode';
    darkMode = true;
  }
}

// Show or hide the existing skills without removing them.
function showHideSkills(event) {
  if (skillsVisible) {
    skillsContent.classList.add('hidden');
    event.currentTarget.textContent = 'Show skills';
    skillsVisible = false;
  } else {
    skillsContent.classList.remove('hidden');
    event.currentTarget.textContent = 'Hide skills';
    skillsVisible = true;
  }
}

// Create a list item using the text entered by the visitor.
function addSkill() {
  const newSkill = skillInput.value;

  if (newSkill === '') {
    skillMessage.textContent = 'Please enter a skill first.';
  } else {
    const newItem = document.createElement('li');
    newItem.textContent = newSkill;
    newItem.classList.add('skill');
    addedSkills.appendChild(newItem);
    additionalSkills.classList.remove('hidden');
    skillInput.value = '';
    skillMessage.textContent = 'Skill added.';
  }
}

// Run each function when its button is clicked.
modeButton.addEventListener('click', changeMode);
skillsButton.addEventListener('click', showHideSkills);
addSkillButton.addEventListener('click', addSkill);
showWelcome();
