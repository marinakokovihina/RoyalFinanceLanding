import React from 'react';
import {regions} from "../../store/regions/regions";
import styled from "styled-components";
import {theme} from "../../styles/Theme";
type RegionProps = {
    region: string;
}

export const Region: React.FC<RegionProps> = ({ region }) => {
    const countries = regions[region.toLowerCase()];

    return (
        <RegionDiv>
            {countries.map((country, index) => (
                <RegionP key={index}>
                    <SpanAbbreviation>{country.abbreviation}</SpanAbbreviation>  <SpanName>{country.name}</SpanName>
                </RegionP>
            ))}
        </RegionDiv>
    );
};

const RegionDiv = styled.div `
  max-height: 263px;
  text-align: left;
  max-width: 251px;
  display: flex;
  margin: 20px 24px 20px 20px;
  flex-wrap: wrap;
  flex-direction: column;
  @media (max-width: 430px) {
    width: 351px;
    max-height: 671px;
    max-width: max-content;

  }
  @media (min-width: 431px) and (max-width: 1024px) {
    max-width: 100%;
    //min-width: 696px;
    width: 351px;
  }

`
const RegionP = styled.div`
  padding-bottom: 6px;
  flex-direction: row;
  display: flex;
  @media (min-width: 430px) and (max-width: 1024px) {
    //width: 300px;

  }
`;
const SpanAbbreviation = styled.div `
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: ${theme.colors.fontPrimary};
  min-width: 50px;
`;
const SpanName = styled.div `
  font-weight: 400;
  text-align: justify;
  font-size: 18px;
  line-height: 23px;
  color: ${theme.colors.fontColorSecondary};
  //@media (min-width: 430px) and (max-width: 1024px) {
  //  text-align: left;
  //
  //}
`;
