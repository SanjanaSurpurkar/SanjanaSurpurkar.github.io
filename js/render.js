const content = document.getElementById("content");

function render(html) {
  content.style.opacity = 0;

  setTimeout(() => {
    content.innerHTML = html;
    content.style.opacity = 1;

    initContactForm(); // 🔥 attach events AFTER render
  }, 200);
}

function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return; // not on contact page

  form.addEventListener("submit", function (e) {
  e.preventDefault();

  const status = document.getElementById("formStatus");
  status.textContent = "Sending...";
  status.classList.add("show");

  emailjs
    .send("service_argorxh", "template_tbsey6b", {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    })
    .then(() => {
      status.textContent = "Thank you for your message!";
      form.reset();
    })
    .catch(() => {
      status.textContent = "Something went wrong. Please try again.";
    });
});
}
