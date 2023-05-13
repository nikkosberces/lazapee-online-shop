export default function searchInput(itemsToFilter, container) {
  const searchForm = document.createElement("form");

  const searchInput = document.createElement("input");
  searchInput.classList.add("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search item...";

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Search";

  searchForm.append(searchInput, submitBtn);

  return searchForm;
}
