// Admin Login functionality
document.getElementById("adminLoginBtn").addEventListener("click", function() {
    const email = document.getElementById("adminEmail").value;
    const password = document.getElementById("adminPassword").value;
    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            document.getElementById("adminLogin").style.display = "none";
            document.getElementById("adminDashboard").style.display = "block";
        })
        .catch(error => {
            document.getElementById("adminLoginError").innerText = error.message;
        });
});

// Admin Logout
document.getElementById("adminLogoutBtn").addEventListener("click", function() {
    auth.signOut().then(() => {
        document.getElementById("adminDashboard").style.display = "none";
        document.getElementById("adminLogin").style.display = "block";
    });
});
