"use strict";

// Створіть об'єкт "bankAccount" з властивостями "ownerName",
// "accountNumber", "balance". Додайте до об'єкту метод "deposit",
//  який дозволяє додавати гроші на рахунок, та метод "withdraw",
//  який дозволяє знімати гроші з рахунку. Методи повинні зпрацьовувати
//   при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’
//    відповідно. Після
//  проведення операції виводити повідомлення про залишок на рахунку.

const bankAccount = {
  ownerName: "Максим",
  accountNumber: "12359238",
  balance: 0,

  deposit(amount) {
    if (amount > 4) {
      this.balance += amount;
      console.log(`поповнення балансу на ${amount} грн.`);
      document.getElementById("balance").textContent = this.balance;
    } else {
      console.log("Мінімальна кількість поповнення 5 грн.");
    }
  },

  withdraw(amount) {
    if (amount > 4 && amount <= this.balance) {
      this.balance -= amount;
      document.getElementById("balance").textContent = this.balance;
      console.log(`Зняття ${amount} грн. готівкою.`);
    } else if (amount <= 4) {
      console.log("Сума для зняття повинна бути більше 5 грн.");
    } else {
      console.log("Недостатньо коштів на рахунку.");
    }
  },
};
document.getElementById("depositBtn").addEventListener("click", function () {
  const amount = parseFloat(prompt("Введіть суму для поповнення:"));
  bankAccount.deposit(amount);
});

document.getElementById("withdrawBtn").addEventListener("click", function () {
  const amount = parseFloat(prompt("Введіть суму для зняття:"));
  bankAccount.withdraw(amount);
});

//  Створіть об'єкт "weather" з властивостями
//   "temperature", "humidity", "windSpeed". Додайте
//    до об'єкту метод, який повертає "true", якщо температура
//     нижче 0 градусів Цельсія, та "false", якщо температура
//      вище або рівна 0 градусів Цельсія. Температуру потрібно
//       отримати з інпуту на сторінці. Якщо метод повернув
//   "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки

const weather = {
  temperature: "0",
  humidity: "0",
  windSpeed: "0",
  thermometer(grad) {
    if (this.temperature <= 0) {
      return true;
    } else {
      return false;
    }
  },
};
const temperatureInput = document.getElementById("temperatureInput");
temperatureInput.addEventListener("input", function () {
  weather.temperature = parseFloat(temperatureInput.value);
  if (weather.thermometer()) {
    console.log("Температура нижче 0 градусів");
  } else {
    console.log("Температура вище або дорівнює 0 градусів");
  }
});

// Створіть об’єкт "user", якbq буде мати властивості
//  "name", "email", "password". Додайте метод "login", який буде перевіряти правильність
//  введеного email та password. Використайте
//   інпути для запису значень властивостей в об’єкт

const user = {
  name: "",
  email: "",
  password: "",

  setInputValues(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  },

  login(inputName, inputEmail, inputPassword) {
    if (
      inputName === this.name &&
      inputEmail === this.email &&
      inputPassword === this.password
    ) {
      alert("Авторизація пройшла успішно!");
    } else {
      alert("Помилка авторизації, не вірні дані.");
    }
  },
};

function loginUser() {
  const nameInput = document.getElementById("name").value;
  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;
  user.setInputValues(nameInput, emailInput, passwordInput);

  const enteredName = "Maksym";
  const enteredEmail = "maksym.alchynskyi@gmail.com";
  const enteredPassword = "12345687";
  user.login(enteredName, enteredEmail, enteredPassword);
}

// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating".
//  Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false",
//   якщо рейтинг фільму 8 або нижче. Вивести значення властивостей на сторінку.
//  Якщо метод повернув "true" то змінити колір тексту поля title на зелений.
const movie = {
  title: "Fast and furious",
  director: "Rob Koen",
  year: "2001",
  rating: "7.8",
  isRatingbeloweight() {
    if (this.rating >= 8) {
      return true;
    } else {
      return false;
    }
  },
};
// console.log(movie.isRatingbeloweight());

const filmInput = document.getElementById("filmTitle")
if(movie.isRatingbeloweight()){
    filmInput.style.color = "green";
}else {
    filmInput.style.color = "black";
}
