// ================================
// MENU MOBILE
// ================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

// ================================
// CLOSE MENU SETELAH KLIK
// ================================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("active");
  });
});

// ================================
// FORM CONTACT
// ================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("Silakan lengkapi semua data.");

    return;
  }

  alert("Terima kasih " + name + "! Pesan Anda berhasil diisi.");

  contactForm.reset();
});

// ================================
// ANIMASI SAAT SCROLL
// ================================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },

  {
    threshold: 0.1,
  },
);

sections.forEach(function (section) {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "0.7s ease";

  observer.observe(section);
});
