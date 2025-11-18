(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    if (typeof WOW !== 'undefined') {
        new WOW().init();
    }


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover with enhanced animations
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    let hideTimeout = null;
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            // Clear any existing handlers
            $dropdown.off("mouseenter mouseleave");
            $dropdownMenu.off("mouseenter mouseleave");
            
            // Handle hover on dropdown parent
            $dropdown.on("mouseenter", function() {
                const $this = $(this);
                const $menu = $this.find($dropdownMenu);
                
                // Clear any pending hide timeout
                if (hideTimeout) {
                    clearTimeout(hideTimeout);
                    hideTimeout = null;
                }
                
                // Reset animation for items
                $menu.find('.dropdown-item').css({
                    'opacity': '0',
                    'transform': 'translateX(-10px)'
                });
                
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $menu.addClass(showClass);
                
                // Animate items with stagger
                $menu.find('.dropdown-item').each(function(index) {
                    var $item = $(this);
                    setTimeout(function() {
                        $item.css({
                            'opacity': '1',
                            'transform': 'translateX(0)'
                        });
                    }, index * 50);
                });
            });
            
            // Handle mouse leave on dropdown parent
            $dropdown.on("mouseleave", function() {
                const $this = $(this);
                const $menu = $this.find($dropdownMenu);
                
                // Clear any existing timeout
                if (hideTimeout) {
                    clearTimeout(hideTimeout);
                }
                
                // Set timeout to hide menu (allows time to move to menu)
                hideTimeout = setTimeout(function() {
                    // Check if mouse is still over dropdown or menu
                    if (!$this.is(':hover') && !$menu.is(':hover')) {
                        // Fade out items
                        $menu.find('.dropdown-item').css({
                            'opacity': '0',
                            'transform': 'translateX(-10px)'
                        });
                        
                        setTimeout(function() {
                            $this.removeClass(showClass);
                            $this.find($dropdownToggle).attr("aria-expanded", "false");
                            $menu.removeClass(showClass);
                        }, 200);
                    }
                    hideTimeout = null;
                }, 300); // Increased delay to allow moving to menu
            });
            
            // Handle hover on dropdown menu itself
            $dropdownMenu.on("mouseenter", function() {
                const $menu = $(this);
                const $parent = $menu.closest($dropdown);
                
                // Clear any pending hide timeout
                if (hideTimeout) {
                    clearTimeout(hideTimeout);
                    hideTimeout = null;
                }
                
                // Ensure parent is shown
                $parent.addClass(showClass);
                $parent.find($dropdownToggle).attr("aria-expanded", "true");
                $menu.addClass(showClass);
            });
            
            // Handle mouse leave on dropdown menu
            $dropdownMenu.on("mouseleave", function() {
                const $menu = $(this);
                const $parent = $menu.closest($dropdown);
                
                // Clear any existing timeout
                if (hideTimeout) {
                    clearTimeout(hideTimeout);
                }
                
                // Set timeout to hide menu
                hideTimeout = setTimeout(function() {
                    // Check if mouse is still over dropdown or menu
                    if (!$parent.is(':hover') && !$menu.is(':hover')) {
                        // Fade out items
                        $menu.find('.dropdown-item').css({
                            'opacity': '0',
                            'transform': 'translateX(-10px)'
                        });
                        
                        setTimeout(function() {
                            $parent.removeClass(showClass);
                            $parent.find($dropdownToggle).attr("aria-expanded", "false");
                            $menu.removeClass(showClass);
                        }, 200);
                    }
                    hideTimeout = null;
                }, 200);
            });
        } else {
            $dropdown.off("mouseenter mouseleave");
            $dropdownMenu.off("mouseenter mouseleave");
        }
    });
    
    // Enhanced dropdown click for mobile
    $dropdownToggle.on('click', function(e) {
        if ($(window).width() < 992) {
            e.preventDefault();
            const $parent = $(this).parent('.dropdown');
            const $menu = $parent.find('.dropdown-menu');
            
            if ($parent.hasClass(showClass)) {
                $menu.find('.dropdown-item').css({
                    'opacity': '0',
                    'transform': 'translateX(-10px)'
                });
                $parent.removeClass(showClass);
                $(this).attr("aria-expanded", "false");
                $menu.removeClass(showClass);
            } else {
                $parent.addClass(showClass);
                $(this).attr("aria-expanded", "true");
                $menu.addClass(showClass);
                
                // Animate items
                setTimeout(function() {
                    $menu.find('.dropdown-item').each(function(index) {
                        var $item = $(this);
                        setTimeout(function() {
                            $item.css({
                                'opacity': '1',
                                'transform': 'translateX(0)'
                            });
                        }, index * 50);
                    });
                }, 50);
            }
        }
    });

    // Prevent body scroll when mobile menu is open
    $('#navbarCollapse').on('show.bs.collapse', function () {
        if ($(window).width() < 992) {
            $('body').addClass('menu-open');
        }
    });

    $('#navbarCollapse').on('hide.bs.collapse', function () {
        $('body').removeClass('menu-open');
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        window.scrollTo({ top: 0, behavior: 'auto' });
        return false;
    });

    // Scroll animations for sections
    $(window).on('scroll', function() {
        $('.section-fade-in').each(function() {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('visible');
            }
        });
    });

    // Parallax effect disabled - normal scroll behavior
    // $(window).on('scroll', function() {
    //     const scrolled = $(window).scrollTop();
    //     const parallax = $('.hero-header');
    //     const speed = scrolled * 0.3;
    //     
    //     if (parallax.length) {
    //         parallax.css('transform', 'translateY(' + speed + 'px)');
    //     }
    // });

    // Smooth reveal animation for product cards
    function animateProductCards() {
        $('.product-item').each(function(index) {
            var $item = $(this);
            $item.css({
                'opacity': '0',
                'transform': 'translateY(30px)'
            });
            
            setTimeout(function() {
                $item.animate({
                    opacity: 1
                }, 600, function() {
                    $item.css('transform', 'translateY(0)');
                });
            }, index * 100);
        });
    }

    // Initialize animations when page loads
    $(document).ready(function() {
        // Trigger scroll animations on load
        setTimeout(function() {
            $(window).trigger('scroll');
        }, 100);
        
        // Animate product cards
        setTimeout(animateProductCards, 300);
        
        // Add page transition class
        $('body').addClass('page-transition');
    });

    // Image loading animation
    $('img').on('load', function() {
        $(this).css('opacity', '1');
    }).each(function() {
        if (this.complete) {
            $(this).trigger('load');
        }
    });

    // Button click ripple effect
    $('.btn').on('click', function(e) {
        var button = $(this);
        var ripple = $('<span class="ripple"></span>');
        var rect = this.getBoundingClientRect();
        var size = Math.max(rect.width, rect.height);
        var x = e.clientX - rect.left - size / 2;
        var y = e.clientY - rect.top - size / 2;
        
        ripple.css({
            width: size,
            height: size,
            left: x,
            top: y,
            position: 'absolute',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.5)',
            pointerEvents: 'none',
            transform: 'scale(0)',
            animation: 'ripple 0.6s ease-out'
        });
        
        button.css('position', 'relative').append(ripple);
        
        setTimeout(function() {
            ripple.remove();
        }, 600);
    });

    // Intersection Observer for better performance
    if ('IntersectionObserver' in window) {
        var observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.section-fade-in').forEach(function(el) {
            observer.observe(el);
        });
    }

    // Smooth hover effects for cards
    $('.product-card, .service-item, .team-item, .testimonial-item').hover(
        function() {
            $(this).addClass('hover-effect');
        },
        function() {
            $(this).removeClass('hover-effect');
        }
    );


    // Facts counter - will be initialized in _app.tsx after all scripts load
    // This is handled in React component to ensure proper loading order


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonials carousel
    if (typeof $.fn.owlCarousel !== 'undefined') {
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            center: true,
            margin: 24,
            dots: true,
            loop: true,
            nav : false,
            responsive: {
                0:{
                    items:1
                },
                768:{
                    items:2
                },
                992:{
                    items:3
                }
            }
        });
    }
    
})(jQuery);

