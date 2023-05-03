import "./style.css";
import nav from "./scr/nav";

const navBar = nav();
const app = document.getElementById("app");
app.appendChild(navBar);
