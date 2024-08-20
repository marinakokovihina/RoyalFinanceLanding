import React, {useState} from 'react';
import {Region} from "./Region";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const ListOfCountry = () => {
    const [activeRegion, setActiveRegion] = useState<string | null>('asia');

    const region = (region: string) => {
        setActiveRegion(region);
    };

    return (
        <Container>
            <ListOfButtons>
            <Button
                active={activeRegion === 'asia'}
                onClick={() => region('asia')}
            >
                Азия
            </Button>
            <Button
                active={activeRegion === 'europe'}
                onClick={() => region('europe')}
            >
                Европа
            </Button>
            <Button
                active={activeRegion === 'america'}
                onClick={() => region('america')}
            >
                Америка
            </Button>
            <Button
                active={activeRegion === 'oceania'}
                onClick={() => region('oceania')}
            >
                Океания
            </Button>
            </ListOfButtons>

            {activeRegion && <Region region={activeRegion} />}
        </Container>
    );
};


const Container = styled.div`
  width: 526px;
  height: 385px;
  box-sizing: border-box;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;


  background: #FFFFFF;
  border: 1px solid #F1F1F4;
  border-radius: 20px;
  @media (max-width: 426px) {
    width: 351px;
    height: auto;
  }
 


`;
const ListOfButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap:16px;
  margin-top: 20px;
  margin-left: 20px;
  @media (max-width: 426px) {
    display: grid;
    width: auto;
//TODO ПОФИКСИТЬ КНОПКИ
    grid-template-columns: repeat(2, 1fr);
  }

`;

const Button = styled.button<{ active: boolean }>`
  background-color: ${props => (props.active ? `${theme.colors.fontColorBlue}` : `${theme.colors.fontColorWhite}`)};
  color: ${props => (props.active ? `${theme.colors.fontColorWhite}` : `${theme.colors.fontPrimary}`)};
  padding: 8px 16px 8px 16px;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  border: 1px solid #F1F1F4;
  border-radius: 24px;
  cursor: pointer;
  @media (max-width: 426px) {
    width: auto;
  }
`;
