// Particle JS config

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "star",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 12
        },
        "image": {
          "src": "",
          "width": 0,
          "height": 0
        }
      },
      "opacity": {
        "value": 0.4,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 0.2,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false
        }
      },
      "line_linked": {
        "enable": false,
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 0.5
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });



  // testimonials
  jQuery( document ).ready( function ( $ ) {
	const $feedbackSlider = $( '.feedback-slider' );

	if ( $feedbackSlider.length ) {
		$feedbackSlider.owlCarousel( {
			items: 1,
			nav: true,
			dots: true,
			autoplay: false,
			loop: true,
			mouseDrag: true,
			touchDrag: true,
			navText: [
				'<i class="fa fa-arrow-left"></i>',
				'<i class="fa fa-arrow-right"></i>'
			],
			responsive: {
				// viewport >= 767px
				767: {
					nav: true,
					dots: false
				}
			}
		} );
	
		$feedbackSlider.on( 'translate.owl.carousel', function() {
			$( '.feedback-slider-item h3' )
				.removeClass( 'animated fadeIn' )
				.css( 'opacity', '0' );
	
			$( '.feedback-slider-item img, .feedback-slider-thumb img, .customer-rating' )
				.removeClass( 'animated zoomIn' )
				.css( 'opacity', '0' );
		} );
	
		$feedbackSlider.on( 'translated.owl.carousel', function() {
			$( '.feedback-slider-item h3' )
				.addClass( 'animated fadeIn' )
				.css( 'opacity', '1' );
	
			$( '.feedback-slider-item img, .feedback-slider-thumb img, .customer-rating' )
				.addClass( 'animated zoomIn' )
				.css( 'opacity', '1' );
		} );
	
		$feedbackSlider.on( 'changed.owl.carousel', function( property ) {
			const current = property.item.index;
	
			const prevThumb = $( property.target )
				.find( '.owl-item' )
				.eq( current )
				.prev()
				.find( 'img' )
				.attr( 'src' );
	
			const nextThumb = $( property.target )
				.find( '.owl-item' )
				.eq( current )
				.next()
				.find( 'img' )
				.attr( 'src' );
	
			const prevRating = $( property.target )
				.find( '.owl-item' )
				.eq(current)
				.prev()
				.find( 'span' )
				.attr( 'data-rating' );
	
			const nextRating = $( property.target )
				.find( '.owl-item' )
				.eq( current )
				.next()
				.find( 'span' )
				.attr( 'data-rating' );
	
			$( '.thumb-prev' ).find( 'img' ).attr( 'src', prevThumb );
			$( '.thumb-next' ).find( 'img' ).attr( 'src', nextThumb );
	
			$( '.thumb-prev' )
				.find( 'span' )
				.next()
				.html( prevRating + '<i class="fa fa-star"></i>' );
	
			$( '.thumb-next' )
				.find( 'span' )
				.next()
				.html( nextRating + '<i class="fa fa-star"></i>' );
		} );
	
		$( '.thumb-next' ).on( 'click', function( e ) {
			e.preventDefault();
	
			$feedbackSlider.trigger( 'next.owl.carousel', [ 300 ] );
		} );
	
		$( '.thumb-prev' ).on( 'click', function( e ) {
			e.preventDefault();
	
			$feedbackSlider.trigger( 'prev.owl.carousel', [ 300 ] );
		} );
	}
} ); // end ready func



// contact form

		const handleSubmit = (event) => {
			event.preventDefault();

			const myForm = event.target;
			const formData = new FormData(myForm);

			fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(formData).toString(),
			})
			.then(() => {
				// SUCCESS: Do what you want here
				alert("Thank you! Your message has been sent. We typically respond within 15 minutes.");
				myForm.reset(); // Clear the form fields
			})
			.catch((error) => alert(error));
		};

		document.querySelector("form").addEventListener("submit", handleSubmit);

//contact form end
