import React, { useState, useEffect, useRef } from "react";

const Image = ({ src, alt, className, priority = false, ...props }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const currentImgRef = imgRef.current; // Store the current ref value in a variable

    if (priority) {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px",
      }
    );

    if (currentImgRef) {
      observer.observe(currentImgRef);
    }

    // Cleanup function
    return () => {
      if (currentImgRef) {
        observer.unobserve(currentImgRef);
      }
    };
  }, [priority]);

  return (
    <img
      ref={imgRef}
      src={isIntersecting ? src : ""}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      {...props}
    />
  );
};

export default Image;
