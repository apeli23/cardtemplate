import styled from "@emotion/styled";

export const Card_1 = styled.div`
    height: 220px;
    width: 390px;
    display: grid;
    grid-template-columns: 2% 96% 2%;
    grid-template-rows: 4% 92% 4%;
    position: relative;
    margin-left: 15%;
    overflow: hidden;
    box-shadow: 2px 5px 15px 0px #17161694;
    transition: smooth;
    background-color: #122529;
    margin-top: 2%
    &:hover {
        transform: scale(1.1);
        transition: 0.3s;
      }
`;
export const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-template-rows: repeat(8, 50px);
  grid-gap: 8px;
  width: 150px;
  height: 400px;
  transform: rotate(-45deg);
`;

export const Black = styled.div`
  margin-left: 30%;
  background-color: #343536;
  grid-column: 2 / span 2;
  grid-row: 1 / span 3;
`;

export const Red1 = styled.div`
  background-color: #e45e4f;
  grid-row: 2 / span 5;
`;

export const Red2 = styled.div`
  background-color: #e45e4f;
  grid-column: 2 / span 2;
  grid-row: 4/7;
`;

export const Green = styled.div`
  background-color: #007e67;
  grid-column: 2/4;
  grid-row: 7/9;
`;

export const Front = styled.div`
  box-shadow: 2px 5px 15px 0px #17161694;
  margin-top: 10%;
  height: 220px;
  width: 390px;
`;

export const InfoGrid = styled.div`
grid-column: 2/3;
grid-row: 2/3;
z-index: 2;
width: 100%;
height: 100%;
background-color: rgba(255, 255, 255, 0.363);
box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.432);
border-radius: 6px;
font-size: 0.7rem; /*12px;*/
display: grid;
grid-template-columns: 15px repeat(3, 1fr) 15px;
grid-template-rows: repeat(3, 1fr);
line-height: 1px;
margin-=top: 10px;
`; 
 
export const Name = styled.h2`
  grid-column: 1 / span 2;
  grid-row: 1 / span 1;
  font-size: 1.2em;
  letter-spacing: 0.1rem;
  margin-top: 15px;
  font-size: 20px;
  background: transparent;
`;


export const Brand = styled.p`
  grid-column: 2 / span 2;
  grid-row: 1 / span 1;
  font-size: 1.2em;
  letter-spacing: 0.1rem;
  margin-top: 15%;
  margin-left: -28%;
  background: transparent;
`;

export const Address = styled.div`
  grid-column: 1 / span 2;
  grid-row: 4;
  margin-left: -35%;
  background: transparent;
`;


export const PhoneNumber = styled.div`
  grid-column: 3 / span 2;
  grid-row: 3;
  text-align: end;
  background: transparent;
`;

export const Email = styled.div`
  grid-column: 3 / span 2;
  grid-row: 4;
  text-align: end;
  background: transparent;
`;

export const CardText = styled.p`
  font-size: 1.2em;
  letter-spacing: 0.1rem;
`;


export const Back = styled.div`
  height: 220px;
  width: 390px;
  box-shadow: 2px 5px 15px 0px #17161694;
  margin-top: 10%;
  display: flex;
  flex-wrap: wrap;
`;
 

export const NameTag = styled.div`
   margin-top: 0px;
   width: 100%;
   height: 40%;
   box-shadow: 2px 5px 15px 0px #17161694;
   margin-top: 17%;
    background:  rgba(255, 255, 255, 0.363)

`;


export const TextLg = styled.h1`
  margin: 2px;
  font-weight: 200px;
  font-size: 30px;
  font-family: 'Heebo', sans-serif;
`;

export const TextSm = styled.p`
  margin: 2px;
  font-weight: 100px;
  font-size: 15px;
  font-family: 'Heebo', sans-serif;
`;