import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

let formData = {};

addTextarea();

form.addEventListener('input', throttle(inputTextarea, 500));

form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem(localStorageKey);
  event.currentTarget.reset();
  console.log(formData);
  formData = {};
});

function inputTextarea(event) {
  formData[event.target.name] = event.target.value.trim();
  const stringifiedData = JSON.stringify(formData);
  localStorage.setItem(localStorageKey, stringifiedData);
}

function addTextarea() {
  try {
    const saveData = localStorage.getItem(localStorageKey);
    if (!saveData) return;
    formData = JSON.parse(saveData);
    Object.entries(formData).forEach(([key, val]) => {
      form.elements[key].value = val;
    });
  } catch ({ message }) {
    console.log(message);
  }
}
