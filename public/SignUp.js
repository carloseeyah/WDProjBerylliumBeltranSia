document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    if (!form) return; // if missing form element

    form.addEventListener("submit", function(x) {
        x.preventDefault();

        if(!confirm("Are all details final?")) {
            return;
        }

        const data = Object.fromEntries(new FormData(this).entries()); // form data to object

        // attach selected character (if any) to the new user record
        let selected = null;
        try {
            selected = JSON.parse(localStorage.getItem('selectedCharacter')) || null;
        } catch (e) {
            selected = null;
        }
        data.selectedCharacter = selected || null;

        let users = JSON.parse(localStorage.getItem("users") || "[]");
        // rejects signup if a user with the same username and password already exists
        const duplicate = users.some(u => u.username === data.username && u.password === data.password);
        if (duplicate) {
            alert('A user with the same username and password already exists. Please choose different credentials.');
            this.reset();
            return;
        }

        users.push(data);
        localStorage.setItem("users", JSON.stringify(users));
        // remembers which user just signed up so character selection can attach to this account
        if (data.username) {
            localStorage.setItem('pendingUser', data.username);
        }

        alert("Sign up successful! Redirecting to character selection...");
        this.reset();
        // go to choose-a-character page
        window.location.href = "public/ChooseYourCharacter.html";
    });
});

