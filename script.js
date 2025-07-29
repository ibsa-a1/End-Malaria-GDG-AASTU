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

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const button2 = document.getElementById("button2");

    button2.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent form from submitting immediately

        // Check required fields manually
        const quantity = document.getElementById("quantity").value.trim();
        const region = document.getElementById("region").value.trim();
        const zone = document.getElementById("zone").value.trim();
        const city = document.getElementById("city").value.trim();
        const phone = document.getElementById("phone-number").value.trim();

        // Correct Phone number
        const phoneRegex = /^09\d{8}$/;
         if (!phoneRegex.test(phone)) {
            Swal.fire({
                icon: 'error',
                title: 'የስልክ ቁጥር ስህተት!',
                text: 'እባክዎ ትክክለኛ የኢትዮጵያ ስልክ ቁጥር ያስገቡ (ለምሳሌ፡ 0912345678)'
            });
            return;
        }

        if (quantity && region && zone && city && phone) {
            Swal.fire({
                title: 'በትዕዛዝዎ ላይ እርግጠኛ ነዎት?',
                text: "እባክዎ መረጃዎን አረጋግጡ!",
                icon: 'question',
                showCancelButton: true,
                cancelButtonText: 'ተመለስ',
                confirmButtonText: 'አዎ ይዘዙ',
            }).then((result) => {
                if (result.isConfirmed) {
                    form.submit(); // Manually submit the form if confirmed
                    Swal.fire({
                        icon: 'success',
                        title: 'እንኳን ደስ አልዎት!',
                        text: 'ትዕዛዝዎ በተሳካ ሁኔታ ተልኳል።'
                    });
                    setTimeout(() => {
                        form.reset();
                        document.getElementById('total-price').value = '';
                    }, 2500);
                }
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'መረጃ ያልተሟላ!',
                text: 'እባክዎ ሁሉንም አስፈላጊ መረጃዎች ያስገቡ።',
                confirmButtonText: 'እሺ'
            });
        }
    });
});