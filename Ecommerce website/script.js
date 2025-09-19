const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const Close = document.getElementById("Close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (Close) {
  Close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// ======= SHOP NOW BUTTON =======
const shopNowBtn = document.querySelector("#hero");
if (shopNowBtn) {
  shopNowBtn.addEventListener("click", () => {
    window.location.href = "shop.html"; // redirect to shop page
  });
}

// ======= NEWSLETTER SIGNUP =======

const newsletterBtn = document.querySelector("#newsletter .form button");
const newsletterInput = document.querySelector("#newsletter input");

if (newsletterBtn) {
  newsletterBtn.addEventListener("click", () => {
    const email = newsletterInput.value.trim();

    if (email === "") {
      alert("Please enter your email address!");
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email address!");
    } else {
      alert(`Thank you for subscribing, ${email}!`);
      newsletterInput.value = ""; // clear input
    }
  });
}

// Simple email validation function
// function validateEmail(email) {
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return regex.test(email);
// }
