// Side Nav Close on click 

function closeSideNav() {
    const navLinks = document.querySelectorAll("#navbarSupportedContent .nav-link");
    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            // Hide the offcanvas menu
            const offcanvas = document.getElementById("navbarSupportedContent");
            const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvas);
            offcanvasInstance.hide();
        });
    });
}

closeSideNav();

// Counters
function counter() {
    $(document).ready(function () {
        $('.counter-value').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3500,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });
}

counter();


