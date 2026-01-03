// JAM SERVER
function updateTime() {
  const now = new Date();
  const jam = document.getElementById("jam");
  if (jam) {
    jam.innerHTML = now.toLocaleTimeString();
  }
}
setInterval(updateTime, 1000);
updateTime();

// NAVBAR ACTIVE
const navLinks = document.querySelectorAll(".nav-link");
const currentPage = location.pathname.split("/").pop();

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
