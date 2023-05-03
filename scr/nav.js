export default function nav() {
  const header = document.createElement("header");

  const logo = document.createElement("h1");
  logo.classList.add("logo");
  logo.textContent = "Lazapee";

  const searchForm = document.createElement("form");

  const searchBar = document.createElement("input");
  searchBar.type = "text";
  searchBar.placeholder = "Search item...";

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Search";

  const addToCart = document.createElement("img");
  addToCart.classList.add("add-to-cart");
  addToCart.src = "add-to-cart-icon.svg";

  const list = document.createElement("ul");

  const item1 = document.createElement("li");
  const signUp = document.createElement("a");
  signUp.href = "#";
  signUp.textContent = "Sign Up";

  const item2 = document.createElement("li");
  const login = document.createElement("a");
  login.href = "#";
  login.textContent = "Login";

  list.append(item1, item2);
  item1.appendChild(signUp);
  item2.appendChild(login);
  searchForm.append(searchBar, submitBtn);

  header.append(logo, searchForm, addToCart, list);

  return header;
}
