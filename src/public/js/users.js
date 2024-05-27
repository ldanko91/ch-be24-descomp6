const btnAdd = Object(document.getElementById('premiumBtn'))

const askPremium = async (userId) => {

    await fetch(`/api/users/premium/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: '',
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error al agregar al carrito:', error);
        });
}