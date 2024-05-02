


$(document).ready(function () {
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 550) {
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible');
        } else {
            $('.navbar').removeClass('solid');
            $('.back-to-top').removeClass('visible');
        }

    });
});


$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

// $(document).ready(function () {
//     // Existing smooth scroll function
//     $("a").on('click', function (event) {
//         if (this.hash !== "") {
//             event.preventDefault();
//             $('html, body').animate({
//                 scrollTop: $(this.hash).offset().top
//             }, 800, function () {
//                 window.location.hash = this.hash;
//             }.bind(this)); // Ensure 'this' is correctly bound
//         }
//     });

//     // Intersection Observer setup
//     let observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 $(entry.target).find('.skills-bar').addClass('active');
//                 observer.unobserve(entry.target); // Optional: Stop observing after animation
//             }
//         });
//     }, { threshold: 0.5 }); // Trigger when 50% visible

//     // Observe the 'About' section
//     observer.observe(document.querySelector('.about-me'));
// });
