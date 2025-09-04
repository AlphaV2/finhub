// Early Access Form
document.getElementById("early-access-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target[0].value;
  document.getElementById("access-msg").textContent = `Thanks! Early access link will be sent to ${email}`;
  e.target.reset();
});

// Contact Form
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target[0].value;
  document.getElementById("contact-msg").textContent = `Thanks ${name}, we’ll get back to you soon!`;
  e.target.reset();
});

// Modal Handling
function openModal(type) {
  document.getElementById(`${type}-modal`).style.display = "flex";
}
function closeModal(type) {
  document.getElementById(`${type}-modal`).style.display = "none";
}
window.onclick = function(e) {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
}
