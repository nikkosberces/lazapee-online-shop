export default function signIn() {
  const list = document.createElement("ul");

  const item2 = document.createElement("li");
  const login = document.createElement("a");
  login.href = "#";
  login.textContent = "Login";

  list.append(item2);
  item2.appendChild(login);

  return list;
}
