document.addEventListener("DOMContentLoaded", function() {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const form = document.getElementById("loginForm");
    if (!form) return;

    form.addEventListener("submit", function(x) {
        x.preventDefault();

        const data = Object.fromEntries(new FormData(this).entries());
        const user = users.find(u => u.username === data.username && u.password === data.password);
        let selectedCharacterName = null;
        if (user && user.selectedCharacter) {
            // selectedCharacter may be an object {name:...} or a string
            selectedCharacterName = user.selectedCharacter.name || (typeof user.selectedCharacter === 'string' ? user.selectedCharacter : null);
        }
        if (user) {
            let charMsg = '';
            if (selectedCharacterName) {
                charMsg = ' Your chosen character: ' + selectedCharacterName + '.';
            }
            alert("Login successful! Welcome, " + user.username + "!" + charMsg);
            this.reset();
            // Redirect to quiz page or main content
            window.location.href = "index.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});