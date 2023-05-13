import incrementItem from "./increamentItem";

export default function cart() {
  const link = document.createElement("button");
  const cartItem = document.createElement("img");
  cartItem.classList.add("cart-item");
  cartItem.src = "add-to-cart-icon.svg";

  const itemAdd = incrementItem();

  link.append(cartItem, itemAdd);

  return cartItem;
}
