const logoutBtn = document.getElementById("logout");

logoutBtn.addEventListener('click', (e) => {
    fetch('/api/users/logout')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
})