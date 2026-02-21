document.addEventListener("DOMContentLoaded", function() {
    // Expose a global function used by inline onclick handlers in ChooseYourCharacter.html
    window.CharacterFunction = function(name, img) {
        if (!name) return;
        if (!confirm(`Select ${name} as your character?`)) return;

        const selected = {
            name: name
        };

        // Save selection globally
        localStorage.setItem('selectedCharacter', JSON.stringify(selected));

        // If there's a pending user (just signed up), attach the selected character to that user
        const pending = localStorage.getItem('pendingUser');
        if (pending) {
            try {
                const users = JSON.parse(localStorage.getItem('users') || '[]');
                const idx = users.findIndex(u => u.username === pending);
                if (idx !== -1) {
                    users[idx].selectedCharacter = selected;
                    localStorage.setItem('users', JSON.stringify(users));
                    localStorage.removeItem('pendingUser');
                }
            } catch (e) {
                // ignore JSON errors
            }
        }

        alert(`${name} selected and saved.`);
        // Redirect back to login
        window.location.href = '../Login.html';
    };
});
