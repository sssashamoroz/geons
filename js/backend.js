console.log("This worked!");


function scrollerHandler() {
    var element = document.getElementById('scroller');

    var num = 90;
  
    var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top - 900;
    var elementHeight = element.offsetHeight;
    var scrollTop = document.documentElement.scrollTop;
      
    var opacity = 1;
    
    if (scrollTop > distanceToTop) {
          opacity = 1 - 0.1*(scrollTop - distanceToTop) / elementHeight;
          num -= 2*(scrollTop - distanceToTop) / elementHeight;
    }
      
    if (opacity >= 0) {
        element.style.opacity = opacity;
        element.style.top = num.toString() + "%";
    }
    }
    
window.addEventListener('scroll', scrollerHandler);