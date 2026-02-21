document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    if (!form) return;

    form.addEventListener("submit", function(x) {
        x.preventDefault();

        if(!confirm("Are all details final?")) {
            return;
        }

        const data = Object.fromEntries(new FormData(this).entries());

        let users = JSON.parse(localStorage.getItem("users") || "[]");
        users.push(data);
        localStorage.setItem("users", JSON.stringify(users));

        alert("Sign up successful! You can now log in.");
        this.reset();
    });
});
