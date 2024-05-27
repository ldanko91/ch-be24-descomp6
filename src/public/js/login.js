const loginForm = document.getElementById('loginForm')

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(loginForm)
    const obj = {}

    data.forEach((value, key) => (obj[key] = value))

    fetch('/api/users/login', {
        headers: {
            'Content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(obj),
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

})