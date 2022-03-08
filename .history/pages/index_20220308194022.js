import { forwardRef, useState, createRef, useEffect, useRef } from 'react';
import { FaLaptop, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import {
  Card_2,
  Purple,
  Yellow2,
  Pink2,
  Dots2,
  Back2
} from "../styles/emotion/card2"
import { Address, Black, Brand, CardText, Card_1, ColorGrid, Email, Front, Green, InfoGrid, Name, NameTag, PhoneNumber, Red1, Red2, TextLg, TextSm, Back } from '../styles/emotion/card1';
import { Button, Card, Container, Details, FinalCardContainer, FormContainer, Input, Inputs, Label, Templates, Text, Title, TitleContainer } from '../styles/emotion';


export default function Home() {
  const [selectedtemplate, setSelectedTemplate] = useState(false)
  const [selectedcard, setSelectedCard] = useState(false)
  const [submittedform, setSubmittedForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');
  const [brand, setBrand] = useState('');
  const [link, setLink] = useState('');
  const frontRef = useRef();
  const backRef = useRef();
  const testRef = useRef();

  const refOne = createRef();
  const refTwo = createRef();
  const finalcardRef = useRef();
  const testCanvas = useRef();
  
  let background = "";

  const Card1 = forwardRef((props, ref) => (
    <Card_1 ref={refOne} onClick={card1Handler} >
     <ColorGrid>
        <Red1 />
        <Red2 />
        <Green />
     </ColorGrid>
    </Card_1>
  ));

  const Card2 = forwardRef((props, ref) => (
    <Card_2 ref={refTwo} onClick={card2Handler} >
      <Purple />
      <Yellow2 />
      <Pink2 />
      <Dots2 />
    </Card_2>
  ));

  const card1Handler = async () => {
    setSelectedTemplate(true);
    setSelectedCard(true);
    html2canvas(refOne.current).then((canvas) => {
      uploadHandler(canvas.toDataURL())
    })
  }


  const card2Handler = async () => {
    setSelectedTemplate(true);
    setSelectedCard(true)
    html2canvas(refTwo.current).then((canvas) => {
      uploadHandler(canvas.toDataURL())

    })
  }

  const uploadHandler = async (template) => {
    console.log(template)
    try {
      fetch('/api/upload', {
        method: 'POST',
        body: JSON.stringify({ data: template }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => response.json())
        .then((data) => {
          background = data.data
          document.getElementById("front").style.backgroundImage = `url(${background})`
          document.getElementById("back").style.backgroundImage = `url(${background})`
        })
    } catch (error) {
      console.error(error);
    }
  }

  return (
   <>
   <TitleContainer>
        <Title>Design Business card with Nextjs and Emotion css</Title>
      </TitleContainer>
      <Container>
        {selectedtemplate == true ?
          <Details>
            {submittedform ?
              "" :
              <FormContainer>
                <Inputs>
                  <Label>Name</Label>
                  <Input
                    id="name"
                    placeholder="Full Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <Label>Company / Business Name</Label>
                  <Input
                    id="brandname"
                    placeholder="company / brand / name"
                    onChange={(e) => {
                      setBrand(e.target.value);
                    }}
                  />
                  <Label>Phone Number</Label>
                  <Input
                    id="phonenumber"
                    placeholder="070000000"
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                  />
                  <Label>Email</Label>
                  <Input
                    id="email"
                    placeholder="example@test.com"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <Label >Location</Label>
                  <Input
                    id="location"
                    type="location"
                    placeholder="location"
                    onChange={(e) => {
                      setLocation(e.target.value);
                    }}
                  />
                  <Label >Website</Label>
                  <Input
                    id="website"
                    type="website"
                    placeholder="website"
                    onChange={(e) => {
                      setWebsite(e.target.value);
                    }}
                  />
               
                </Inputs>
              </FormContainer>
            }

            {selectedcard &&
              <FinalCardContainer>
                <Card ref={finalcardRef}>
                  <Front id="front" ref={frontRef}>
                    <InfoGrid>
                      <Name>{name ? name : 'Your Name'}</Name>
                      <Brand>{brand ? brand : 'Company / Brand Name'}</Brand>
                      <Address>
                        <FaMapMarkerAlt id="icon" />
                        <CardText>{location ? location : 'Location'}</CardText>
                      </Address>
                      <PhoneNumber>
                        <FaPhone />
                        <CardText>
                          {phonenumber ? phonenumber : '0700000000'}
                        </CardText>
                      </PhoneNumber>
                      <Email>
                        <FaLaptop />
                        <CardText>{email ? email : 'user@example.com'}</CardText>
                        <CardText>{website ? website : 'website'}</CardText>
                      </Email>
                    </InfoGrid>
                  </Front>
                  <Back id="back" ref={backRef}>
                    <NameTag>
                      <TextLg>{name ? name : 'Your Name'}</TextLg>
                      <TextSm>
                        {brand ? brand : 'Company / Brand name'}
                      </TextSm>
                    </NameTag>
                  </Back>
                </Card>
              </FinalCardContainer>
            }
          </Details>
          :
          <Templates >
            <Text>Select Design </Text>
            <Card1 ref={refOne} />
            <Card2 ref={refTwo} />
          </Templates>
        }
      </Container>
   </>
  )
}
