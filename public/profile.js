document.addEventListener("DOMContentLoaded", function() {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const currentUser = localStorage.getItem('currentUser');
    const user = currentUser ? users.find(u => u.username === currentUser) : null;

    if (!user) {
        alert("Not logged in! Please log in to view your profile.");
        window.location.href = "Login.html";
        return;
    }

    // Get selected character name
    let selectedCharacterName = 'None';
    if (user.selectedCharacter) {
        selectedCharacterName = user.selectedCharacter.name || (typeof user.selectedCharacter === 'string' ? user.selectedCharacter : 'None');
    }

    function updateProfilePic(name) {
        const profilepic = document.getElementById("profilePic");
        profilepic.src = "/WDProjBerylliumBeltranSia/website-assets/Mirror.png";
        if (name === 'Mal') {
            profilepic.src = "/WDProjBerylliumBeltranSia/website-assets/malpfp.png";
        } else if (name === 'Evie') {
            profilepic.src = "/WDProjBerylliumBeltranSia/website-assets/eviepfp.png";
        } else if (name === 'Jay') {
            profilepic.src = "/WDProjBerylliumBeltranSia/website-assets/jaypfp.png";
        } else if (name === 'Carlos') {
            profilepic.src = "/WDProjBerylliumBeltranSia/website-assets/carlospfp.png";
        } else if (name === 'Ben') {
            profilepic.src = "/WDProjBerylliumBeltranSia/website-assets/benpfp.png";
        }
    }

    // Display user details
    document.getElementById("displayUsername").textContent = user.username;
    document.getElementById("displayCharacter").textContent = selectedCharacterName;
    updateProfilePic(selectedCharacterName);

    // Edit button
    document.getElementById("editBtn").addEventListener("click", function() {
        document.getElementById("profileDisplay").style.display = "none";
        document.getElementById("profileForm").style.display = "block";
        document.getElementById("username").value = user.username;
        document.getElementById("password").value = user.password;
        const currentSelection = user.selectedCharacter ? (typeof user.selectedCharacter === 'string' ? user.selectedCharacter : user.selectedCharacter.name) : '';
        document.getElementById("character").value = currentSelection;
    });

    // Cancel button
    document.getElementById("cancelBtn").addEventListener("click", function() {
        document.getElementById("profileForm").style.display = "none";
        document.getElementById("profileDisplay").style.display = "block";
    });

    // Save changes
    document.getElementById("profileForm").addEventListener("submit", function(e) {
        e.preventDefault();
        if (!confirm("Save profile changes?")) {
            return;
        }
        const newUsername = document.getElementById("username").value.trim();
        const newPassword = document.getElementById("password").value.trim();
        const newCharacter = document.getElementById("character").value;

        if (!newUsername || !newPassword || !newCharacter) {
            alert("All fields are required.");
            return;
        }

        // Check if new username is taken by another user
        const usernameTaken = users.some(u => u.username === newUsername && u.username !== user.username);
        if (usernameTaken) {
            alert("Username already taken.");
            return;
        }

        // Update user
        user.username = newUsername;
        user.password = newPassword;
        user.selectedCharacter = newCharacter;

        // Update users array
        const userIndex = users.findIndex(u => u.username === currentUser);
        users[userIndex] = user;

        // Save to localStorage
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem('currentUser', newUsername);

        // Update display
        document.getElementById("displayUsername").textContent = newUsername;
        document.getElementById("displayCharacter").textContent = newCharacter;
        updateProfilePic(newCharacter);
        document.getElementById("profileForm").style.display = "none";
        document.getElementById("profileDisplay").style.display = "block";

        alert("Profile updated successfully!");
    });
});