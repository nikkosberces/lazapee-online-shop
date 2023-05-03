export default async function fetchItems() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const itemData = await response.json();

  return fetchItems;
}
