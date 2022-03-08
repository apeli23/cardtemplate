import styled from '@emotion/styled';


export const Card_2 = styled.div`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(4, 1fr);
  width: 390px;
  height: 220px;
  font-family: 'Trebuchet MS', sans-serif;
  margin-top: 2%;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
`;

export const Purple = styled.div`
  background-color: #871F78;
  grid-column: 8 / span 5;
  grid-row: 1 / span 4;
`;

export const Yellow2 = styled.div`
  background-color: #F2B900;
  grid-column: 1 / span 7;
  grid-row: 1 / span 4;
`;

export const Pink2 = styled.div`
  background-color: #fa001a;
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
  clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
  grid-row: 1 / span 3;
  grid-column: 1 / span 11;
  position: relative;
  z-index: 2;
`;

export const Dots2 = styled.div`
  background: radial-gradient(#fa001a 20%, transparent 19%),
    radial-gradient(#fa001a 20%, transparent 19%), transparent;
  background-size: 6px 6px;
  background-position: 0 0, 3px 3px;
  grid-column: 1 / span 12;
  grid-row: 3 / span 2;
  margin: 0 0 15px 20px;
  z-index: 1;
`;

export const Intro = styled.div`
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  grid-column: 4 / span 6;
  grid-row: 2 / span 2;
  justify-content: center;
  text-align: center;
  z-index: 3;
`;

export const FrontName = styled.p`
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 18px;
`;

export const FrontBrand = styled.p`
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 8px;
  margin-top: 5px;
`;


export const Back2 = styled.div`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  margin-top: 6%;
  margin-left: 6%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  height: 215px;
  width: 100%;
  &:hover {
    transform: scale(1.1);
  }
`;

export const BackYellow = styled.div`
  background-color: #f1ef1c;
  grid-column: 1 / span 9;
  grid-row: 1 / span 3;
`;

export const BackTopDots = styled.div`
  background: radial-gradient(#4cc9c8 20%, transparent 19%),
    radial-gradient(#4cc9c8 20%, transparent 19%), transparent;
  background-size: 6px 6px;
  background-position: 0 0, 3px 3px;
  grid-column: 8 / span 6;
  grid-row: 2 / span 3;
`;

export const BackInfo = styled.div`
  grid-column: 2 / span 6;
  grid-row: 5 / span 6;
`;

export const BackName = styled.p`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const BackBrand = styled.p`
  font-size: 12px;
  margin-bottom: 15px;
`;

export const BackText = styled.p`
  font-size: 12px;
  margin-bottom: 15px;
`;

export const BackDots = styled.div`
  background: radial-gradient(#4cc9c8 20%, transparent 19%),
    radial-gradient(#4cc9c8 20%, transparent 19%), transparent;
  background-size: 6px 6px;
  background-position: 0 0, 3px 3px;
  grid-column: 1 / span 8;
  grid-row: 11 / span 2;
  z-index: 2;
`;

export const BackkPink = styled.div`
  background-color: #fa001a;
  grid-column: 8 / span 5;
  grid-row: 10 / span 3;
`;