document.getElementById('menu-icon').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});

const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        const navLinksContainer = document.getElementById('nav-links');
        navLinksContainer.classList.remove('active'); // Hide the nav links
    });
});

document.getElementById('quantity').addEventListener('input', function() {
    const quantity = this.value;
    document.getElementById('total-price').value = quantity * 250 * ' ETB';
});