import "..\css\style.css";
import javascriptLogo from "..\img\javascript.svg";
import viteLogo from "\vite.svg";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Task 2: Feedback Form</h1>
    <div id="form-app">
      <form class="feedback-form" autocomplete="off">
        <label>
          Email
          <input type="email" name="email" autofocus />
        </label>
        <label>
          Message
          <textarea name="message" rows="8"></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
      <button class="back-button" onclick="location.href='index.html'">Back</button>
    </div>
  </div>
`;

// JavaScript logic for form handling
const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

// Initialize formData object
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
  email: "",
  message: "",
};

// Prefill form with stored data
document.addEventListener("DOMContentLoaded", () => {
  const { email, message } = formData;
  form.email.value = email || "";
  form.message.value = message || "";
});

// Save data to localStorage on input
form.addEventListener("input", (e) => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { email, message } = formData;

  // Validate that all fields are filled
  if (!email.trim() || !message.trim()) {
    alert("Please fill in all fields");
    return;
  }

  console.log("Form Submitted:", formData);

  // Clear storage and reset form
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: "", message: "" };
  form.reset();
});