const headerdropdown = document.getElementById('dropdown');
const menu = document.getElementById('menu');

headerdropdown.addEventListener('click', function () {
    menu.classList.toggle('show');
});
