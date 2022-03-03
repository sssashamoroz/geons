console.log("This worked!");

function scrollHandler() {
    var element = document.getElementById('scroller');
  
    var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top - 900;
    var elementHeight = element.offsetHeight;
    var scrollTop = document.documentElement.scrollTop;
      
    var opacity = 1;
      
    if (scrollTop > distanceToTop) {
          opacity = 1 - 0.1*(scrollTop - distanceToTop) / elementHeight;
    }
      
    if (opacity >= 0) {
        element.style.opacity = opacity;
    }
    
    console.log((scrollTop - distanceToTop) / elementHeight);
    }
  
window.addEventListener('scroll', scrollHandler);