const toggleBtn = document.querySelector(".toggle-btn");
const dropdownOffBtn = document.querySelector(".dropdown-off-btn");
const toggleIcon = document.querySelector(".toggle-icon");
const dropdown = document.querySelector(".dropdown");

function showDropDown() {
  dropdown.classList.add("active");
  dropdownOffBtn.classList.add("active");
  toggleIcon.classList.add("rotate");
}

function toggleDropDown() {
  dropdown.classList.toggle("active");
  dropdownOffBtn.classList.toggle("active");
  toggleIcon.classList.toggle("rotate");
}

function hideDropDown() {
  dropdown.classList.remove("active");
  dropdownOffBtn.classList.remove("active");
  toggleIcon.classList.remove("rotate");
}

toggleBtn.addEventListener("mouseover", showDropDown);

toggleBtn.addEventListener("click", toggleDropDown);

dropdownOffBtn.addEventListener("click", hideDropDown);

dropdown.addEventListener("mouseout", (event) => {
  if (!dropdown.contains(event.relatedTarget)) {
    hideDropDown();
  }
});
