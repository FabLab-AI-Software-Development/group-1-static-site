import React, { useState, useEffect, useRef } from 'react';
import './Menu.css'; // Assuming you have a CSS file for styling

const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];

const Menu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuRef = useRef(null);
  const menuBorderRef = useRef(null);
  
  useEffect(() => {
    const handleResize = () => {
      offsetMenuBorder();
      menuRef.current.style.setProperty("--timeOut", "none");
    };

    window.addEventListener("resize", handleResize);
    offsetMenuBorder();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeIndex]);

  const offsetMenuBorder = () => {
    const activeItem = menuRef.current.querySelector('.active');
    const offsetActiveItem = activeItem.getBoundingClientRect();
    const menu = menuRef.current;
    const menuBorder = menuBorderRef.current;
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth - offsetActiveItem.width) / 2) + "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
  };

  const handleClick = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    document.body.style.backgroundColor = bgColorsBody[index];
  };

  return (
    <div className="menu-container">
      <menu className="menu" ref={menuRef}>
        {["#ff8c00", "#f54888", "#4343f5", "#e0b115", "#65ddb7"].map((color, index) => (
          <button
            key={index}
            className={`menu__item ${index === activeIndex ? 'active' : ''}`}
            style={{ '--bgColorItem': color }}
            onClick={() => handleClick(index)}
          >
            <svg className="icon" viewBox="0 0 24 24">
              {index === 0 && (
                <>
                  <path d="M3.8,6.6h16.4" />
                  <path d="M20.2,12.1H3.8" />
                  <path d="M3.8,17.5h16.4" />
                </>
              )}
              {index === 1 && (
                <>
                  <path d="M6.7,4.8h10.7c0.3,0,0.6,0.2,0.7,0.5l2.8,7.3c0,0.1,0,0.2,0,0.3v5.6c0,0.4-0.4,0.8-0.8,0.8H3.8C3.4,19.3,3,19,3,18.5v-5.6c0-0.1,0-0.2,0.1-0.3L6,5.3C6.1,5,6.4,4.8,6.7,4.8z" />
                  <path d="M3.4,12.9H8l1.6,2.8h4.9l1.5-2.8h4.6" />
                </>
              )}
              {index === 2 && (
                <>
                  <path d="M3.4,11.9l8.8,4.4l8.4-4.4" />
                  <path d="M3.4,16.2l8.8,4.5l8.4-4.5" />
                  <path d="M3.7,7.8l8.6-4.5l8,4.5l-8,4.3L3.7,7.8z" />
                </>
              )}
              {index === 3 && (
                <>
                  <path d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1C3.9,4.4,4.4,3.9,5.1,3.9z" />
                  <path d="M4.2,9.3h15.6" />
                  <path d="M9.1,9.5v10.3" />
                </>
              )}
              {index === 4 && (
                <>
                  <path d="M5.1,3.9h13.9c0.6,0,1.2,0.5,1.2,1.2v13.9c0,0.6-0.5,1.2-1.2,1.2H5.1c-0.6,0-1.2-0.5-1.2-1.2V5.1C3.9,4.4,4.4,3.9,5.1,3.9z" />
                  <path d="M5.5,20l9.9-9.9l4.7,4.7" />
                  <path d="M10.4,8.8c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6C7.3,8,8,7.3,8.9,7.3C9.7,7.3,10.4,8,10.4,8.8z" />
                </>
              )}
            </svg>
          </button>
        ))}
        <div className="menu__border" ref={menuBorderRef}></div>
      </menu>

      <div className="svg-container">
        <svg viewBox="0 0 202.9 45.5">
          <clipPath id="menu" clipPathUnits="objectBoundingBox" transform="scale(0.0049285362247413 0.021978021978022)">
            <path d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5c9.2,3.6,17.6,4.2,23.3,4H6.7z" />
          </clipPath>
        </svg>
      </div>
    </div>
  );
};

export default Menu;
