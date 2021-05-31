
$(function(){

    let header = $('#header'),
        introH = $('#intro').innerHeight(),
        scrollOffset = $(window).scrollTop();

    // Fixed Header

    checkScroll(scrollOffset);

    $(window).on('scroll',function(){

        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {


        if (scrollOffset >= introH) {
            header.addClass('fixed');
        }else
            header.removeClass('fixed');
    }


    // Smooth scroll

    $('[data-scroll]').on('click',function (event){
        event.preventDefault();

        let $this = $(this),
            blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $('#nav a').removeClass('active');
        $this.addClass('active');

        $('html,body').animate({
            scrollTop: blockOffset
        });



    });

    // Menu toggle

    $('#nav_toggle').on('click', function (event) {
        event.preventDefault();

        $(this).toggleClass('active');
        $('#nav').toggleClass('active');


    });

    $('#nav').on('click', function (event){
        event.preventDefault();

        $(this).toggleClass('active');
        $('#nav_toggle').toggleClass('active');

    });



    // collapse

    $('[data-collapse]').on('click', function (event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $(this).data('collapse');


        $(blockId).slideToggle();

    });





    // Sorting by price


        document.querySelector('#sort-price').onclick = mySort;
        let timer_is_on = true;
        function mySort() {
            if (timer_is_on) {
                timer_is_on = false;

                let introContent = document.querySelector('#intro-sort');
                for (let i = 0; i < introContent.children.length; i++){
                    for (let j = i; j < introContent.children.length; j++ ) {
                        if (+introContent.children[i].getAttribute('data-price')> +introContent.children[j].getAttribute('data-price')) {
                            replaceNode = introContent.replaceChild(introContent.children[j], introContent.children[i]);
                            insertAfter(replaceNode, introContent.children[i]);
                        }
                    }
                }


            } else {
                timer_is_on = true;

                let introContent = document.querySelector('#intro-sort');
                for (let i = 0; i < introContent.children.length; i++){
                    for (let j = i; j < introContent.children.length; j++ ) {
                        if (+introContent.children[i].getAttribute('data-price')< +introContent.children[j].getAttribute('data-price')) {
                            replaceNode = introContent.replaceChild(introContent.children[j], introContent.children[i]);
                            insertAfter(replaceNode, introContent.children[i]);
                        }
                    }
                }

            }

        }

        function insertAfter(elem,refElem) {
            return refElem.parentNode.insertBefore(elem,refElem.nextSibling);

        }


      //Sorting by age

    document.querySelector('#sort-age').onclick = mySortAge;
    let timer_is_on2 = true;
    function mySortAge() {
        if (timer_is_on2) {
            timer_is_on2 = false;

            let introContent = document.querySelector('#intro-sort');
            for (let i = 0; i < introContent.children.length; i++){
                for (let j = i; j < introContent.children.length; j++ ) {
                    if (+introContent.children[i].getAttribute('data-age')> +introContent.children[j].getAttribute('data-age')) {
                        replaceNode = introContent.replaceChild(introContent.children[j], introContent.children[i]);
                        insertAfter(replaceNode, introContent.children[i]);
                    }
                }
            }


        } else {
            timer_is_on2 = true;


            let introContent = document.querySelector('#intro-sort');
            for (let i = 0; i < introContent.children.length; i++){
                for (let j = i; j < introContent.children.length; j++ ) {
                    if (+introContent.children[i].getAttribute('data-age')< +introContent.children[j].getAttribute('data-age')) {
                        replaceNode = introContent.replaceChild(introContent.children[j], introContent.children[i]);
                        insertAfter(replaceNode, introContent.children[i]);
                    }
                }
            }

        }

    }

    // initFavs();
    // function initFavs()
    // {
    //     // Handle Favorites
    //     let items = document.getElementsByClassName('.favourite');
    //     for(let x = 0; x < items.length; x++)
    //     {
    //         let item = items[x];
    //         item.addEventListener('click', function(fn)
    //
    //         {
    //
    //             fn.target.classList.toggle('.active');
    //
    //         });
    //     }
    // }



    //
    // document.getElementById('fav').onclick = changeColor;
    //
    // function changeColor() {
    //     document.body.style.color = "purple";
    //     return false;
    // }
    //

    document.querySelector('favouriteHeart').onclick = favouriteChange;
    let buttonIsOn = true;
    function favouriteChange(buttonIsOn){
        buttonIsOn = false;


    }









})

