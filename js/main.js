$(document).ready(function() {

    /*----------audio-------*/
    // var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    // if (!isChrome) {
    //     $('#iframeAudio').remove()
    // } else {
    //     $('#playAudio').remove() //just to make sure that it will not have 2x audio in the background 
    // }

    /*------- pop up ------*/
    var $popUp = $('#popUp');
    var $container = $('.container');


    var artimgs = [{ image: '1.jpg', year: '2017', size: 'A4' }, { image: '2.jpg', year: '2017', size: 'A4' }, { image: '3.jpg', year: '2017', size: 'A4' },
        { image: '4.jpg', year: '2017', size: 'A4' }, { image: '5.jpg', year: '2017', size: 'A3' }, { image: '6.jpg', year: '2017', size: 'A3' },
        { image: '7.jpg', year: '2018', size: 'A4' }, { image: '8.jpg', year: '2018', size: 'A2' }, { image: '9.jpg', year: '2019', size: 'A3' }, { image: '10.jpg', year: '2019', size: 'A3' }
    ];

    $('#artbutton').on('click', () => {

        $container.empty()
        for (var i = 0; i < artimgs.length; i++) {

            $container
                .prepend(`

                <div data-aos="zoom-in-up">
                <div class="card">
    
               
                <a target="_blank" href=./img/art/${artimgs[i].image}>
              
               <div class="img__wrap">
              <img class="filterDiv ${artimgs[i].size} "src=./img/art/${artimgs[i].image} >
              <p class="img__description">Click to see fullscreen.</p>
              </div>
              </a>
              <p>
              Made in : ${artimgs[i].year} </br>
              Size:  ${artimgs[i].size}
              </p>
              </div>
              </div>
              
               
             
          `)
        }

        $popUp.removeClass('hidden')
        $popUp
            .attr('class', '')

        .append($container)

        $('.closePopUp').on('click', (e) => {
            e.preventDefault()
            $popUp.addClass('hidden')
        })

    });

    /*---------------words slider----------*/
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        setTimeout(showSlides, 5000);
    }

    /*---------------img slider----------*/
    var slideIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlidesimg");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > x.length) { slideIndex = 1 }
        x[slideIndex - 1].style.display = "block";
        setTimeout(carousel, 3000);
    }

    /*-------------nav color-------*/

    var scroll_start = 0;
    var nav = $('.nav');
    var offset = nav.offset();
    if (nav.length) {
        $(document).scroll(function() {
            scroll_start = $(this).scrollTop();
            if (scroll_start > offset.top) {
                $(".nav").css('background-color', '#000');
            } else {
                $('.nav').css('background-color', 'transparent');
            }
        });
    }


    /*---------- animation -------*/
    AOS.init({

        duration: 1500

    });


});