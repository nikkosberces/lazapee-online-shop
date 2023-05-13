import addToCart from "./addToCart";

export default function appendItems(itemData) {
  const mainElement = document.createElement("main");
  mainElement.classList.add("products");

  if (Array.isArray(itemData)) {
    itemData.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("product");

      const productName = document.createElement("h1");
      productName.classList.add("product-name");
      productName.textContent = `${item.title}`;

      const productCategory = document.createElement("p");
      productCategory.classList.add("product-category");
      productCategory.textContent = `${item.category}`;

      const productImg = document.createElement("img");
      productImg.classList.add("product-image");
      productImg.src = `${item.image}`;

      const productPrice = document.createElement("p");
      productPrice.classList.add("product-price");
      productPrice.textContent = `₱${item.price}`;

      const productButton = addToCart();

      const counter = document.createElement("p");
      counter.classList.add("counter");
      counter.innerText = "0";

      productButton.addEventListener("click", () => {
        counter.innerText = parseInt(counter.innerText) + 1;
      });

      div.append(
        productName,
        productCategory,
        productImg,
        productPrice,
        productButton
      );
      mainElement.appendChild(div);
    });
  } else {
    console.error("itemData is not an array");
  }

  return mainElement;
}
