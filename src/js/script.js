$(document).ready(function() {

  //sticky
  var NavY = $('.nav').offset().top;

  var stickyNav = function() {
    var ScrollY = $(window).scrollTop();

    if (ScrollY > NavY) {
      $('.nav').addClass('sticky');
    } else {
      $('.nav').removeClass('sticky');
    }
  };

  stickyNav();

  $(window).scroll(function() {
    stickyNav();
  });


});


const bar = document.querySelector(".status");
const statusBar = () => {
  currentScroll = Math.round(window.scrollY / (document.documentElement.offsetHeight - window.innerHeight) * 100);
  bar.style.width = currentScroll + "%";
}

window.addEventListener("scroll", statusBar);

// map
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 51.255483,
      lng: 22.534239
    },
    zoom: 13,
    styles: [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
  });
}
