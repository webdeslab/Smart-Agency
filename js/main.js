$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.nav, .header__burger').toggleClass('active');
    });
});
$(function() {
    $(window).scroll(function() {
        $('.section').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInUp");
            }
        });
    });
});
$(function() {
    $(window).scroll(function() {
        $('.works').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInUp");
            }
        });
    });
});
$(function() {
    $(window).scroll(function() {
        $('.services').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInUp");
            }
        });
    });
});
$(function() {
    $(window).scroll(function() {
        $('.team').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInUp");
            }
        });
    });
});
$(function() {
    $(window).scroll(function() {
        $('.partners').each(function() {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInUp");
            }
        });
    });
});