const multiStepForm = document.querySelector("#MultiStepForm");

const stepOneContainer = document.querySelector("#StepOneContainer");
const stepTwoContainer = document.querySelector("#StepTwoContainer");
const stepThreeContainer = document.querySelector("#StepThreeContainer");

const stepOneNext = document.querySelector("#StepOneNext");
const stepTwoPrevious = document.querySelector("#StepTwoPrevious");
const stepTwoNext = document.querySelector("#StepTwoNext");
const stepThreePrevious = document.querySelector("#StepThreePrevious");
const stepThreeSubmit = document.querySelector("#StepThreeSubmit");

const successContainer = document.querySelector("#SuccessContainer");

// Шаг: 1
const first_name_input = document.querySelector("#first_name");
const last_name_input = document.querySelector("#last_name");
const email_input = document.querySelector("#email");

// Шаг: 2
const contact_input = document.querySelector("#contact");
const city_input = document.querySelector("#city");
const country_input = document.querySelector("#country");

// Шаг: 3
const select_program = document.querySelector("#select_program");
const message_area = document.querySelector("#message");

// Функции для валидации формы
function isValidName(name) {
  return /^[a-zа-яё]+$/i.test(name);
}

function isValidEmail(email) {
  return /^[a-z][a-z._0-9]+@[a-z]+\.[a-z]{2,3}$/i.test(email);
}

function isValidContact(number) {
  return /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(number);
}

function isValidPlace(place) {
  return /^[a-zа-яё]+$/i.test(place);
}

function isValidSelect(select) {
  return select !== 0;
}

function isValidTextArea(area) {
  return area !== "";
}

// Валидация формы

stepOneNext.addEventListener("click", (e) => {
  e.preventDefault();

  // Шаг 1
  // Валидация имени
  if (isValidName(first_name_input.value)) {
    first_name_input.parentElement.lastElementChild.style.display = "none";
  } else {
    first_name_input.parentElement.lastElementChild.style.display = "block";
  }

  // Валидация фамилии
  if (isValidName(last_name_input.value)) {
    last_name_input.parentElement.lastElementChild.style.display = "none";
  } else {
    last_name_input.parentElement.lastElementChild.style.display = "block";
  }

  // Валидация почты
  if (isValidEmail(email_input.value)) {
    email_input.parentElement.lastElementChild.style.display = "none";
  } else {
    email_input.parentElement.lastElementChild.style.display = "block";
  }

  if (
    isValidName(first_name_input.value) &&
    isValidName(last_name_input.value) &&
    isValidEmail(email_input.value)
  ) {
    stepOneContainer.style.display = "none";
    stepTwoContainer.style.display = "block";
    stepThreeContainer.style.display = "none";
  }
});

stepTwoPrevious.addEventListener("click", (e) => {
  e.preventDefault();

  stepOneContainer.style.display = "block";
  stepTwoContainer.style.display = "none";
  stepThreeContainer.style.display = "none";
});

stepTwoNext.addEventListener("click", (e) => {
  e.preventDefault();

  // Шаг 2

  // Валидация телефона
  if (isValidContact(contact_input.value)) {
    contact_input.parentElement.lastElementChild.style.display = "none";
  } else {
    contact_input.parentElement.lastElementChild.style.display = "block";
  }

  // Валидация города
  if (isValidPlace(city_input.value)) {
    city_input.parentElement.lastElementChild.style.display = "none";
  } else {
    city_input.parentElement.lastElementChild.style.display = "block";
  }

  // Валидация страны
  if (isValidPlace(country_input.value)) {
    country_input.parentElement.lastElementChild.style.display = "none";
  } else {
    country_input.parentElement.lastElementChild.style.display = "block";
  }

  if (
    isValidContact(contact_input.value) &&
    isValidPlace(city_input.value) &&
    isValidPlace(country_input.value)
  ) {
    stepOneContainer.style.display = "none";
    stepTwoContainer.style.display = "none";
    stepThreeContainer.style.display = "block";
  }
});

stepThreePrevious.addEventListener("click", (e) => {
  e.preventDefault();

  stepOneContainer.style.display = "none";
  stepTwoContainer.style.display = "block";
  stepThreeContainer.style.display = "none";
});

stepThreeSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  // Шаг 3
  // Валидация выпадающего списка

  let selIndex = select_program.selectedIndex;

  if (isValidSelect(selIndex)) {
    select_program.parentElement.lastElementChild.style.display = "none";
  } else {
    select_program.parentElement.lastElementChild.style.display = "block";
  }

  // Валидация текстового поля

  if (isValidTextArea(message_area.value)) {
    message_area.parentElement.lastElementChild.style.display = "none";
  } else {
    message_area.parentElement.lastElementChild.style.display = "block";
  }

  if (isValidSelect(selIndex) && isValidTextArea(message_area.value)) {
    successContainer.style.display = "block";
    multiStepForm.style.display = "none";
  }
});
