$(document).ready(function() {
    $('#mobile-btn').on('click', function() {
        $('#mobile-menu').toggleClass('active');
        $('#mobile-btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function() {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

    }); 

    const sr = ScrollReveal({ reset: true });

    sr.reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%',
    });
    sr.reveal('#banner', {
        origin: 'right',
        duration: 2000,
        distance: '20%',
    });
    sr.reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });
    sr.reveal('#testemonial_chef', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    sr.reveal('.feedback', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    });

});

