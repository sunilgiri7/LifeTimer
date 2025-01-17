const settingIconEle = document.getElementById("settingIcon");
const settingContentEle = document.getElementById("settingContent");
const settingTitleEle = document.getElementById("settingTitle");
const initialTextEle = document.getElementById("initialTexts");
const afterDobEle = document.getElementById("after-dob-btn");
const dobBtnEle = document.getElementById("dobBtn");
const dobInputEle = document.getElementById("dobInput");
let dateOfBirth;
let isDobOpen = false;

const yearEle = document.getElementById("year");
const monthEle = document.getElementById("months");
const daysEle = document.getElementById("days");
const hourEle = document.getElementById("hours");
const minutesEle = document.getElementById("minutes");
const secondEle = document.getElementById("seconds");

const makeTwoDigitNumber = (num) => {
  return num > 9 ? num : `0${num}`;
};

const setUpdateDate = () => {
  const currentDate = new Date();
  const dateDiff = currentDate - dateOfBirth;
  const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
  const month = Math.floor((dateDiff / (1000 * 60 * 60 * 24 * 30)) % 12);
  const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
  const hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
  const minute = Math.floor(dateDiff / (1000 * 60)) % 60;
  const second = Math.floor(dateDiff / 1000) % 60;

  yearEle.innerHTML = makeTwoDigitNumber(year);
  monthEle.innerHTML = makeTwoDigitNumber(month);
  daysEle.innerHTML = makeTwoDigitNumber(day);
  hourEle.innerHTML = makeTwoDigitNumber(hour);
  minutesEle.innerHTML = makeTwoDigitNumber(minute);
  secondEle.innerHTML = makeTwoDigitNumber(second);
};

const toggleDateBar = () => {
  settingContentEle.classList.toggle("hide");
  isDobOpen = !isDobOpen;
};

const setDobHandler = () => {
  const dateString = dobInputEle.value;
  dateOfBirth = dateString ? new Date(dateString) : null;

  if (dateOfBirth) {
    localStorage.setItem("dob", dateString);
    initialTextEle.classList.add("hide");
    afterDobEle.classList.remove("hide");
    setInterval(setUpdateDate, 1000);
  }
};

//Quote Generator
const quoteTextEle = document.getElementById("quote-text");
const generateQuoteEle = document.getElementById("generate-quote");

const quotes = [
  "Life is what happens when you're busy making other plans.",
  "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  // Add more quotes here
];

const generateQuote = () => {
  console.log("QUOTE");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  console.log(randomIndex);
  quoteTextEle.textContent = quotes[randomIndex];
  console.log((quoteTextEle.textContent = quotes[randomIndex]));
};

generateQuoteEle.addEventListener("click", generateQuote);

settingIconEle.addEventListener("click", toggleDateBar);
dobBtnEle.addEventListener("click", setDobHandler);

window.onload = () => {
  const storedDob = localStorage.getItem("dob");
  if (storedDob) {
    dateOfBirth = new Date(storedDob);
    initialTextEle.classList.add("hide");
    afterDobEle.classList.remove("hide");
    setInterval(setUpdateDate, 1000);
  }
  generateQuote();
};
