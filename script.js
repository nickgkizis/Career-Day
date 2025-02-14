document.getElementById("unlock-btn").addEventListener("click", function () {
  const password = prompt("Enter the password to unlock the CV:");

  if (password === "1234") {
    document.getElementById("cv-section").style.display = "block";
    document.getElementById("unlock-btn").style.display = "none"; 
  } else {
    alert("Incorrect password!");
  }
});
