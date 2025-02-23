document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const aiInput = document.getElementById("ai-input");
    const aiResponse = document.getElementById("ai-response");

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            themeToggle.textContent = "حالت روشن";
        } else {
            themeToggle.textContent = "حالت تاریک";
        }
    });

    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("پیام شما ارسال شد!");
    });

    window.askAI = function () {
        const userInput = aiInput.value.trim();
        if (userInput === "") {
            aiResponse.textContent = "لطفا یک سوال وارد کنید.";
            return;
        }
        aiResponse.textContent = "در حال پردازش...";
        setTimeout(() => {
            aiResponse.textContent = "پاسخ هوش مصنوعی به سوال شما: " + userInput;
        }, 1000);
    };
});
