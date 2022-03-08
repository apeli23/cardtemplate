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

  return (
   <>
   
   </>
  )
}
