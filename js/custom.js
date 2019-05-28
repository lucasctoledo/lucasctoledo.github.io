$(document).on('ready', function () {
    
    "use strict";
    
    var win = $(window);
            
    
    win.on('load', function () {
        $('.loading-area').fadeOut(100);
    });
   
    win.on("scroll", function () {
        var wScrollTop  = $(window).scrollTop();    
        
        if (wScrollTop > 50) {
            $("#pageHeader").addClass("shrink");
        } else {
            $("#pageHeader").removeClass("shrink");
        }
    });

	$('.header.shrink .navbar-brand').attr('src' , 'images/back.png')
	
     // Bootstrap Scroll Spy //
       
    $("body").scrollspy({
        target: ".navbar-collapse",
        offset: 70
    });
    
     // Collapse navigation on click on nav anchor in Mobile //
       
    $(".nav a").on('click', function () {
        $("#myNavbar").removeClass("in").addClass("collapse");
    });

     // navbar Scroll //
     
    $(".navbar-nav li a, .navbar-brand, .button a, .a-btn").on("click", function (e) {
        var anchor = $(this);
        $("html, body").stop().animate({
            
            scrollTop: $(anchor.attr("href")).offset().top - 60
        }, 1000);
        e.preventDefault();
    });
    
    var scrollButton = $('#scroll-top');
    
    
    // Caching The Scroll Top Element
    
    win.on('scroll', function () {
        if ($(this).scrollTop() >= 700) {
            
            scrollButton.show();
            
        } else {
            
            scrollButton.hide();
        }
        
    });
    
    // Click On Button To Scroll Top
    
    scrollButton.on('click', function () {
        
        $('html,body').animate({ scrollTop : 0 }, 1100);
        
    });
	
	$('.our-faqs .questions p:first').css("display","block");
	
    $('.our-faqs .questions h3').on("click", function(){
		$(this).toggleClass('colored').siblings().removeClass('colored');
        $(this).next().slideToggle(500);
        $(".questions p").not($(this).next()).slideUp(500); 
    });
/*
    $('.our-faqs .questions .video-1').on("click", function(){
        $(".videoToggle iframe").replaceWith('<iframe width="560" height="315" src="https://www.youtube.com/embed/NSHfbAcJ2KY" frameborder="0" allowfullscreen></iframe>');
    });

    $('.our-faqs .questions .video-2').on("click", function(){
        $(".videoToggle iframe").replaceWith('<iframe width="560" height="315" src="https://www.youtube.com/embed/NVkYJ77CafA" frameborder="0"  allowfullscreen></iframe>');
    });

    $('.our-faqs .questions .video-3').on("click", function(){
        $(".videoToggle iframe").replaceWith('<iframe width="560" height="315" src="https://www.youtube.com/embed/d2TkyLmq7wU" frameborder="0"  allowfullscreen></iframe>');
    });

    $('.our-faqs .questions .video-4').on("click", function(){
        $(".videoToggle iframe").replaceWith('<iframe width="560" height="315" src="https://www.youtube.com/embed/NSHfbAcJ2KY" frameborder="0" allowfullscreen></iframe>');
    });
*/
    // section features videos 

    $('.open-video-institucional, .open-video-lancamento, .open-video-marketing, .open-video-explainer, .open-video-works, .open-video-promocional')
    .magnificPopup({
        type:'inline',
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
      });

	// slider of screenshots section
    $('.screenshots .owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        smartSpeed: 650,
        responsiveClass:true,
        responsive : {
            992 : {
                items: 4
            },
    
            768 : {
                items: 3
            },
            
            0 : {
                items: 1
            }
        }
        
    });
    
  
   // slider of clients section
    $('.clients .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 650
    });

    
    // slider of vier clients
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    // Evento open video vier clients
    
        $("#playClient-1").click(function() {
            $(".video-clients").replaceWith('<iframe class="video-clients" width="560" height="315" src="https://www.youtube.com/embed/NSHfbAcJ2KY" frameborder="0" allowfullscreen></iframe>');
            $(".heading-clients").replaceWith('<h1 class="heading-clients">Camila Fotoploc</h1>');
            $(".para-clients").replaceWith('<p class="para-clients">Camila é CEO da FOTOPLOC e utiliza o klickpages para internacionalizar o seu produto e testar quais páginas convertem mais. Além de rapidez que ele tem para criar todas páginas que ela precisa</p>');
        });

        $("#playClient-2").click(function() {
            $(".video-clients").replaceWith('<iframe class="video-clients" width="560" height="315" src="https://www.youtube.com/embed/MFDJRfY3fq4" frameborder="0" allowfullscreen></iframe>');
            $(".heading-clients").replaceWith('<h1 class="heading-clients">Gustavo Martins</h1>');
            $(".para-clients").replaceWith('<p class="para-clients">Gostaria de enfatizar que a valorização de fatores subjetivos cumpre um papel essencial na formulação do remanejamento dos quadros funcionais.</p>');
        });

    // slider of team section
    $('.team .owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3200,
        autoplayHoverPause: true,
        smartSpeed: 650,
        responsiveClass:true,
        responsive : {
            992 : {
                items: 3
            },
    
            768 : {
                items: 2
            },
            
            0 : {
                items: 1
            }
        }
        
    });
    
     
    
    $('.counter').counterUp({
        delay: 40,
        time: 1800
    });
     
	
	// contact form
    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });
    
    
});

$(function() { // document ready
    if ($('.tabela-fixed').length) { // make sure "#sticky" element exists
        var el = $('.tabela-fixed');
        var stickyTop = $('.tabela-fixed').offset().top; // returns number
        var stickyHeight = $('.tabela-fixed').height();
        var stickWidth = $(window).width();
        el.css('position', 'fixed');
        $(window).scroll(function() { // scroll event
            var limit = $('#footer').offset().top - stickyHeight - 280;

            var windowTop = $(window).scrollTop(); // returns number
             
            if(stickWidth <= 1000) {
                $("div").removeClass("tabela-fixed");
                el.css('position', '');
            } else if (stickyTop < windowTop) {
                el.css({
                    position: 'fixed',
                    top: 120
                });
            } else {
                el.css('position', 'fixed');
                el.css('margin-top', '50px');
            }

            if (limit < windowTop) {
                var diff = limit - windowTop;
                el.css({
                    top: diff
                });
            }
            
        });
    }
});

/******************** Plugin para Formulário Dinâmico ****************************/

//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
    var input_nome = $("input[name='name']").val();
    if(input_nome == ""){
        $('.erro').fadeIn().delay(1000).html('<p class="message-danger" class="text-danger">Campo Obrigatório</p>').fadeOut(1000);
    } else {
    if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	//$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
    //show the next fieldset
        next_fs.show(); 
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now, mx) {
                //as the opacity of current_fs reduces to 0 - stored in "now"
                //1. scale current_fs down to 80%
                scale = 1 - (1 - now) * 0.2;
                //2. bring next_fs from the right(50%)
                left = (now * 50)+"%";
                //3. increase opacity of next_fs to 1 as it moves in
                opacity = 1 - now;
                current_fs.css({
            'transform': 'scale('+scale+')',
            'position': 'absolute'
        });
                next_fs.css({'left': left, 'opacity': opacity});
            }, 
            duration: 800, 
            complete: function(){
                current_fs.hide();
                animating = false;
            }, 
            //this comes from the custom easing plugin
            easing: 'easeInOutBack' 
	}); }
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$("#enviar").click(function(){
    var pacote_1 = $("input[name='question-6']:checked").val();
   
    if(pacote_1 != 10){
        $('.imprimir_mensagem').replaceWith('<div class="pacote_ideal col-md-10"><h2 class="">Pronto</h2><p><i class="fa fa-check-circle fa-3x"></i></p><p>O vídeo ideal para o seu negócio é o <strong>Básico de 1 minuto!</strong> O valor é <strong>R$ 1.299,00</strong> em 3x sem juros no cartão ou <strong>R$ 1234,00</strong> á vista no boleto ou transferência!<u><a href="light.html" blank> Clique aqui e veja a página do Vídeo Básico</a></u></p></div>');
    } else {
        $('.imprimir_mensagem').replaceWith('<div class="pacote_ideal col-md-10"><h2 class="">Pronto</h2><p><i class="fa fa-check-circle fa-3x"></i></p><p>O vídeo ideal para o seu negócio é o <strong>Extented de 1 minuto!</strong> O valor é <strong>R$ 5.299,00</strong> em 3x sem juros no cartão ou <strong>R$ 5034,00</strong> á vista no boleto ou transferência!<u><a href="extented.html" blank> Clique aqui e veja a página do Vídeo Extented</a></u></p></div>');
    }

});

