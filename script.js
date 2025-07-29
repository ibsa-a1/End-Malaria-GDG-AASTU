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
    const quantity = Number(this.value);

    if (!isNaN(quantity) && quantity > 0) {
        const total = quantity * 250;
        document.getElementById('total-price').value = total + ' ETB';
    } else {
        document.getElementById('total-price').value = '';
    }
});

document.getElementById('button2').addEventListener('click', function() {
    Swal.fire({
        title: 'Success',
        text: 'Your order has been placed successfully',
        icon: 'success',
        confirmButtonText: 'OK'
    });
});