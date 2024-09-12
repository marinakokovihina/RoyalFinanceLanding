import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        // Заменяем 100vh на window.innerHeight
        if (window.pageYOffset > window.innerHeight) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Плавная прокрутка
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <StyledDiv>
            {isVisible && (
                <StyledButton onClick={scrollToTop}>
                    ↑
                </StyledButton>
            )}
        </StyledDiv>
    );
};
const StyledButton = styled.button `
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: rgba(56, 70, 190, 1);
  color: #f4f4f5;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  font-size: 25px;
  cursor: pointer;
  border: none;
  z-index:999;
  box-shadow: 0 2px 5px rgba(146, 144, 248, 0.3);
`
const StyledDiv = styled.div `
 
  
`

export default ScrollToTop;
