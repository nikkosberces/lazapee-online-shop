export default function incrementItem() {
  const counter = document.createElement("span");
  counter.classList.add("counter");
  counter.innerText = "0";

  return counter;
}
