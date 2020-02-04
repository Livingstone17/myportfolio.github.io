  AOS.init({
            easing: 'slide',
            duration: 1000,
            // once:true 
        });

function sendEmail() {
	Email.send({
    SecureToken : "80c560169c69a805050a9e3f96132e6f",
    To : "peterson.omobolaji@gmail.com",
    From : "sender@example.com",
    Subject : "Test Email",
    Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
        message => alert("mail sent successfully")
    );
};
sendEmail();

(function ($) {
    $(document).ready(function () {
        $('.menu-toggler').on('click', function () {
            $(this).toggleClass('open');
            $('.top-nav').toggleClass('open');
        });
        $('.top-nav .nav-link').on('click', function () {
            $('.menu-toggler').removeClass('open');
            $('.top-nav').toggleClass('open');
        });

        $('nav a[href*="#"]').on('click', function () {
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top -100
            }, 2000);
        });
        
        $('#up').on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 2000);
        });

      
    });
})(jQuery);

