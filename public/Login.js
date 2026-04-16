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
            // selectedCharacter may be an object or a string
            selectedCharacterName = user.selectedCharacter.name || (typeof user.selectedCharacter === 'string' ? user.selectedCharacter : null);
        }
        if (user) {
            let charMsg = '';
            if (selectedCharacterName) {
                charMsg = ' Your chosen character: ' + selectedCharacterName + '.';
            } // gets selected character name if exists and adds to welcome message
            alert("Login successful! Welcome, " + user.username + "!" + charMsg);
            try {
                localStorage.setItem('currentUser', user.username);
            } catch (e) {
                console.warn('Could not set currentUser in localStorage', e);
            } 
            this.reset();
            // redirect to quiz page or main content
            window.location.href = "index.html";
        } else {
            alert("Invalid username or password. Please try again.");
        } // failsafe for missing user or character data
    });
});