export default function addToCart() {
  const button = document.createElement("button");
  button.textContent = "Add to Cart";
  button.classList.add("add-to-cart");

  return button;
}
