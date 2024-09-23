document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    // Add your login logic here
    alert(`User ID: ${userId}, Password: ${password}`);
});
