export default async function fetchItems() {
  const response = await fetch("https://fakestoreapi.com/products");
  const itemData = await response.json();

  return itemData;
}
