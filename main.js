import "./style.css";
import fetchItems from "./scr/fetchItems";
import appendItems from "./scr/appendItems";
import cart from "./scr/cart";
import logo from "./scr/logo";
import signIn from "./scr/signIn";
import searchInput from "./scr/searchInput";

export default function nav() {
  const header = document.createElement("header");
  header.classList.add("header");

  const shopName = logo();
  const cartItem = cart();
  const logInBtn = signIn();
  const searchForm = searchInput();

  header.append(shopName, searchForm, cartItem, logInBtn);

  return header;
}

const navBar = nav();
const app = document.getElementById("app");

fetchItems().then((itemData) => {
  const main = appendItems(itemData);

  app.append(navBar, main);
});
