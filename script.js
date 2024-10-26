let cookieCount = 0;

document.getElementById('cookie-button').addEventListener('click', function() {
    cookieCount++;
    document.getElementById('cookie-count').textContent = 'Cookies: ' + cookieCount;
});