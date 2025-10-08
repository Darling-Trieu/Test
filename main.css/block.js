const Mk = "09102006";
    const TK = "Pnhu";
    const MAX_ATTEMPTS = 3;
    let attempts = 0;

    window.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('loginForm');
      const inpUser = document.getElementById('username');
      const inpPass = document.getElementById('password');

      form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = inpUser.value.trim().toLowerCase();
        const password = inpPass.value.trim();

        if (username === TK.toLowerCase() && password === Mk) {
          location.href = "main.html";
        } else {
          attempts++;
          const left = MAX_ATTEMPTS - attempts;
          if (left > 0) {
            alert("Sai tên đăng nhập hoặc mật khẩu. Còn " + left + " lần thử.");
          } else {
            location.href = "phake.html";
          }
        }
      });
    });
