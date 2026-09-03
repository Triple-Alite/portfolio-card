// Theme toggle -- remembers preference where storage is available,
// otherwise just applies for the current visit.
(function () {
  var toggle = document.getElementById("themeToggle");
  var root = document.documentElement;

  function apply(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
      toggle.textContent = "Light mode";
      toggle.setAttribute("aria-pressed", "true");
    } else {
      root.removeAttribute("data-theme");
      toggle.textContent = "Dark mode";
      toggle.setAttribute("aria-pressed", "false");
    }
  }

  function getSaved() {
    try {
      return localStorage.getItem("portfolio-card-theme");
    } catch (e) {
      return null;
    }
  }

  function save(theme) {
    try {
      localStorage.setItem("portfolio-card-theme", theme);
    } catch (e) {
      /* storage unavailable -- theme just won't persist between visits */
    }
  }

  var saved = getSaved();
  var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  apply(saved || (prefersDark ? "dark" : "light"));

  toggle.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    apply(next);
    save(next);
  });
})();

// Contact form -- front-end only validation and feedback.
// No message is actually sent anywhere; connect this to a service
// like Formspree or EmailJS if you want it to work for real.
(function () {
  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      status.textContent = "Please fill in every field.";
      status.setAttribute("data-state", "error");
      return;
    }
    if (!emailPattern.test(email)) {
      status.textContent = "Please enter a valid email address.";
      status.setAttribute("data-state", "error");
      return;
    }

    status.textContent = "Thanks, " + name + " -- your message has been noted.";
    status.setAttribute("data-state", "success");
    form.reset();

    setTimeout(function () {
      status.textContent = "";
      status.removeAttribute("data-state");
    }, 6000);
  });
})();
