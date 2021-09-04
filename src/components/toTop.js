import React, { useEffect, useState } from "react";

function ToTop() {

  //state to keep track of the arrow visibility
  const [isVisible, setIsVisible] = useState(false);

  //on page load, create an action listener for scrolling
  useEffect(function() {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  //if you scroll down far enough, set the arrow's visibility to true. Or false if you've moved up enough
  function toggleVisibility(){
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  //bring the page back to the top
  function scrollToTop(){
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <div className="scroll-to-top">
      {isVisible && 
        <div onClick={scrollToTop}>
          <img className="scroll" src='https://i.postimg.cc/44Ytsk8Z/top-arrow-emoj.png' alt='Go to top'/>
        </div>}
    </div>
    );
  }
  
export default ToTop;