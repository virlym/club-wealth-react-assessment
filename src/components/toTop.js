import React, { useEffect, useState } from "react";

function ToTop(props) {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(function() {
    window.addEventListener("scroll", toggleVisibility);
  }, []);


  function toggleVisibility(){
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

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