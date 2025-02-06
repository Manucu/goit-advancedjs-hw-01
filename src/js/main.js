import "../css/style.css";
import javascriptLogo from "../img/javascript.svg";
import viteLogo from "/vite.svg";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Topic 2. Code Modularity: Homework</h1>
    <div class="card">
      <a href="1-gallery.html">
        <button class="btn">Image Gallery</button>
      </a>
      <a href="2-form.html">
        <button class="btn">Feedback Form</button>
      </a>
    </div>
    <p class="read-the-docs">By Emanuel Niculai</p>
  </div>
`;