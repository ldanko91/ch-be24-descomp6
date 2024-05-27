let userSession = req.user.user

const navbar = document.getElementById('cond-render');
if (userSession) {
    navbar.innerHTML = `
        <li><a href="/perfil">Perfil</a></li>
        <li><a href="/cerrar-sesion">Cerrar Sesión</a></li>
    `;
} else {
    navbar.innerHTML = `
        <li><a href="/acceder">Acceder</a></li>
    `;
}