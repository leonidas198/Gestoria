import { useEffect } from "react";
import { useState } from "react"
import { FaArrowUp } from "react-icons/fa";



export const ScrollButton = () => {

  

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300){
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <div className="scrool-to-top" onClick={scrollToTop}>
        <FaArrowUp/>

      </div>
    )
  )
  
}
