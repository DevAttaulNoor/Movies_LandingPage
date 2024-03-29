$(document).ready(function () {
    $('.carousel').carousel();

    // Function to update content based on active slide index
    function updateContent() {
        var index = $('.carousel-item.active').index();

        // Change the background image URL of the body
        var bgImageUrl = [
            'Images/movies/bg-little-mermaid.jpg',
            'Images/movies/bg-the-black-demon.jpeg',
            'Images/movies/bg-the-covenant.jpg',
            'Images/movies/bg-the-tank.jpg',
            'Images/movies/bg-65.jpg'
        ];
        $('body').css('background-image', 'url(' + bgImageUrl[index] + ')');

        // Set the src attribute of the image in the bodyLeft section
        var $contentLeftImages = $('.contentLeft_Top img');
        var movieLogoUrl = [
            "Images/the-little-mermaid-title.png",
            "Images/the-black-demon-title.png",
            "Images/the-covenant-title.png",
            "Images/the-tank-title.png",
            "Images/the-65-title.png"
        ];
        $contentLeftImages.attr('src', movieLogoUrl[index]);

        // Update the HTML content of the h4 element in the bodyLeft section
        var $contentMiddleH4 = $('.contentLeft_Middle h4');
        var movieDetails = [
            '<span>2023</span><span><i>PG</i></span><span>2h 15m</span><span>Adventure & Romance</span>',
            '<span>2023</span><span><i>R</i></span><span>1h 40m</span><span>Drama & Horror</span>',
            '<span>2023</span><span><i>R</i></span><span>2h 3m</span><span>Action & Drama</span>',
            '<span>2023</span><span><i>R</i></span><span>1h 40m</span><span>Horror & Mystery</span>',
            '<span>2023</span><span><i>PG-13</i></span><span>1h 33m</span><span>Action & Sci-Fi</span>'
        ];
        $contentMiddleH4.html(movieDetails[index]);

        // Update the text content of the p tag in the bodyLeft_Bottom section
        var $contentBottomP = $('.contentLeft_Bottom p');
        var movieDescriptions = [
            "The youngest of King Triton's daughters, Ariel is a beautiful and spirited young mermaid with a thirst for adventure. Longing to find out more about the world beyond the sea, Ariel visits the surface and falls for the dashing Prince Eric. Following her heart, she makes a deal with the evil sea witch, Ursula, to experience life on land.",
            "Oilman Paul Sturges' idyllic family vacation turns into a living nightmare when they encounter a gigantic megalodon shark that will stop at nothing to protect its territory. Stranded and under constant attack, Paul and his family must somehow find a way to get back to shore alive before it strikes again.",
            "Guy Ritchie's The Covenant follows US Army Sergeant John Kinley (Jake Gyllenhaal) and Afghan interpreter Ahmed (Dar Salim). After an ambush, Ahmed goes to Herculean lengths to save Kinley's life. When Kinley learns that Ahmed and his family were not given safe passage to America as promised, he must repay his debt by returning to the war zone to retrieve them before the Taliban hunts them down first.",
            "After mysteriously inheriting an abandoned coastal property, Ben and his family accidentally unleash an ancient, long-dormant creature that terrorized the entire region-including his own ancestors-for generations.",
            "After a catastrophic crash, pilot Mills quickly discovers he's actually stranded on an unknown planet. Now, with only one chance at rescue, Mills must make his way across an unknown terrain riddled with dangerous prehistoric creatures in an epic fight to survive. From the writers of A Quiet Place comes 65, a sci-fi thriller produced by Sam Raimi, Deborah Liebling, Zainab Azizi, Scott Beck and Bryan Woods"
        ];
        $contentBottomP.text(movieDescriptions[index]);
    }

    // Timer to periodically update content based on active slide index
    var slideTimer = setInterval(updateContent, 500); // Adjust the interval as needed
});


// Show the trailer iframe based on the active carousel item
$('.footerLeft').on('click', '.play', function (e) {
    e.preventDefault();
    var index = $('.carousel-item.active').index();
    $('.trailerContainer').css('display', 'block');

    var iframeUrls = [
        'https://www.youtube.com/embed/kpGo2_d3oYE?si=COivBT0uXadZnG3e',
        'https://www.youtube.com/embed/z1xJAyVKAPY?si=t8-XCnFUpynnno7N',
        'https://www.youtube.com/embed/02PPMPArNEQ?si=y3VxlwdP9HxhYiva',
        'https://www.youtube.com/embed/23GmhsmrCIo?si=QAft6LEKQcRwCj00',
        'https://www.youtube.com/embed/bHXejJq5vr0?si=i2xxGHmzOLYzuK7N'
    ];

    // Set default width and height
    var width = 700;
    var height = 450;

    // Check if media query max-width: 790px is achieved
    if (window.matchMedia("(max-width: 790px)").matches) {
        width = 350;
        height = 250;
    }

    var iframeCode = '<iframe width="' + width + '" height="' + height + '" src="' + iframeUrls[index] + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
    $('.trailer').html(iframeCode);
    $('.main').addClass('blur');
});

// When the close button is clicked
$('.trailerContainer').on('click', '.close', function () {
    $('.trailerContainer').css('display', 'none');
    $('.trailer').empty();
    $('.main').removeClass('blur');
});

// Toggle & Hide the content of hamburger content
$(document).ready(function () {
    $(".fa-bars").click(function () {
        $(".hamburgerHeaderRightContent").toggleClass("visable");
    });

    $(".fa-indent").click(function () {
        $(".hamburgerHeaderRightContent").removeClass("visable");
    });
});