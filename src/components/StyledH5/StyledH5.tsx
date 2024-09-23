import styled from "styled-components";

export const StyledH5 = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  margin-bottom: 80px;
  text-align: left;

  @media  (max-width: 767px) {
    font-size: 32px;
    line-height: 40px;
    max-width: 350px;
    text-align: left;
    margin-bottom: 40px;

  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 40px;
  
  }
  @media (max-width: 425px) {
    max-width: 335px;


  }
`;
