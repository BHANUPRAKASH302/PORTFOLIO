//for navbar
$(".menu-btn").click(function () {
  $(".navbar .menu").toggleClass("active");
  $(".menu-btn i").toggleClass("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (response.ok && data.success) {
        document.getElementById("alert").style.visibility = "visible";
        document.getElementById("alert-error").style.visibility = "hidden";
        form.reset();
      } else {
        document.getElementById("alert-error").style.visibility = "visible";
        document.getElementById("alert").style.visibility = "hidden";
      }
    } catch (error) {
      document.getElementById("alert-error").style.visibility = "visible";
      document.getElementById("alert").style.visibility = "hidden";
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
});
//resume unavilable
function myresume() {
  document.getElementById("alert2").style.visibility = "visible";
}
