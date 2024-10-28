// Login functionality for Voyager
document.getElementById("loginBtn").addEventListener("click", function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            document.getElementById("voyagerLogin").style.display = "none";
            document.getElementById("voyagerDashboard").style.display = "block";
        })
        .catch(error => {
            document.getElementById("loginError").innerText = error.message;
        });
});

// Logout functionality
document.getElementById("logoutBtn").addEventListener("click", function() {
    auth.signOut().then(() => {
        document.getElementById("voyagerDashboard").style.display = "none";
        document.getElementById("voyagerLogin").style.display = "block";
    });
});
