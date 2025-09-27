const Mk = "09102006";
const MAX_ATTEMPTS = 3;

window.addEventListener('DOMContentLoaded', () => {
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    const mk = prompt("Em sinh ngày mấy? (nhập ddmmyyyy)");
    const input = mk.trim();
    if (input == Mk) {
      return;
    } 
    else {
      const left = MAX_ATTEMPTS - attempt;
      if (left > 0) {
        alert("Sai mật khẩu. Còn " + left + " lần thử.");
      }
    }
  }

  location.replace("phake.html");
});