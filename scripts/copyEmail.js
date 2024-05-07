const mailLink = document.getElementById("mail-link");

mailLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default action of following the link

  const email = "rioslazosamuel@gmail.com"; // Replace with your email
  const tempInput = document.createElement("input");
  tempInput.value = email;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  // Show a message to the user
  const message = document.createElement("div");
  message.textContent = "Email copied to clipboard!";
  message.style.position = "fixed";
  message.style.top = "50%";
  message.style.left = "50%";
  message.style.transform = "translate(-50%, -50%)";
  message.style.backgroundColor = "#f0f0f0";
  message.style.padding = "10px 20px";
  message.style.borderRadius = "5px";
  message.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
  message.style.zIndex = "9999";
  document.body.appendChild(message);

  // Remove the message after a couple of seconds
  setTimeout(function () {
    document.body.removeChild(message);
  }, 2000);
});
