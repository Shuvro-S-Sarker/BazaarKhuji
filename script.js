// script.js
const login = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check login credentials (dummy values)
    if (email === 'user1@example.com' && password === 'Password1') {
        window.location.href = 'representative.html';
    } else if (email === 'user2@example.com' && password === 'Password2') {
        window.location.href = 'products.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
};

const goToProductPage = () => {
    window.location.href = 'products.html';
};

const logout = () => {
    window.location.href = 'index.html';
};
