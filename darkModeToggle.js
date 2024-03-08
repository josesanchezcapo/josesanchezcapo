document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("modeToggle");

    // Check if dark mode is already enabled
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
        enableDarkMode();
    }

    modeToggle.addEventListener("click", function () {
        const body = document.body;
        const isDarkMode = body.classList.contains("dark-mode");

        if (isDarkMode) {
            // If dark mode is enabled, switch to light mode
            disableDarkMode();
            localStorage.setItem("darkMode", "false");
        } else {
            // If light mode is enabled, switch to dark mode
            enableDarkMode();
            localStorage.setItem("darkMode", "true");
        }
    });

    function enableDarkMode() {
        document.body.classList.add("dark-mode");
    }

    function disableDarkMode() {
        document.body.classList.remove("dark-mode");
    }
});
