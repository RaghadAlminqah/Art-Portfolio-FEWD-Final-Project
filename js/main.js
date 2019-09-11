$(document).ready(function() {

    /*----------audio-------*/


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


    /*---------------img slider----------*/

    var bg = $('.rightartwork');
    var backgrounds = new Array('url(./img/art/b1.jpg)', 'url(./img/art/b2.jpg)', 'url(./img/art/b3.jpg)', 'url(./img/art/b4.jpg)', 'url(./img/art/b5.jpg)', 'url(./img/art/b6.jpg)', 'url(./img/art/b7.jpg)', 'url(./img/art/b8.jpg)', 'url(./img/art/b9.jpg)', 'url(./img/art/b10.jpg)');
    var current = 0;

    function nextBackground() {
        bg.css({
            'background': backgrounds[current = ++current % backgrounds.length],
            'background-repeat': 'no-repeat',
            'background-position': ' center',
            'background-size': 'cover',
            '-webkit-transition': 'background 4s',
            '-moz-transition': 'background 4s',
            '-o-transition': 'background 4s',
            'transition': 'background 4s'
        });

        setTimeout(nextBackground, 4000);
    }
    setTimeout(nextBackground, 4000);
    bg.css({
        'background': backgrounds[0],
        'background-repeat': 'no-repeat',
        'background-position': ' center',
        'background-size': 'cover',
        '-webkit-transition': 'background 4s',
        '-moz-transition': 'background 4s',
        '-o-transition': 'background 4s',
        'transition': 'background 4s'
    });

    // var slideIndeximg = 0;
    // carousel();

    // function carousel() {
    //     var i;
    //     var x = $(".mySlidesimg");
    //     for (i = 0; i < x.length; i++) {
    //         x[i].style.display = "none";
    //     }
    //     slideIndeximg++;
    //     if (slideIndeximg > x.length) { slideIndeximg = 1 }
    //     x[slideIndeximg - 1].style.display = "block";
    //     setTimeout(carousel, 3000);
    // }

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