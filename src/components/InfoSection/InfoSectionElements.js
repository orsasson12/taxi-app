import styled from "styled-components";
import { Link } from "react-router-dom";


export const InfoContainer = styled.div`
color:#fff;
background: ${({ lightBg }) => (lightBg ? '#fff' : '#010606')};
@media screen and (max-width:768px){
    padding: 100px 0;
}
`


export const InfoWrapper = styled.div`
display: grid;
z-index: 1;
height: 860px;
width:100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;

`


export const InfoRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto,1fr);
align-items: center;
grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width:768px) {
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
}
`

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`

export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`


export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
@media screen and (min-width:1064px) {
  margin:0 2.2rem;
  text-align:center;
 
}
`

export const TopLine = styled.p`
color: #01bf71;
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`


export const Heading = styled.h2`
margin-bottom: 24px;
font-size: 48px;
font-weight: 700;
margin-top:25px;
text-align:right;
width:90%;
font-style:italic;
color:${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

@media screen and (max-width:1064px) {
  line-height: 50px;
  text-align:center;
  width:100%;
}
`


export const Subtitle = styled.p`
max-width:440px;
margin-bottom:35px;
font-size:24px;
line-height:54px;
font-style:italic;
text-align:center;
color:${({ darkText }) => (darkText ? '#010606' : '#fff')};

@media screen and (max-width:1064px) {
  text-align:center;
}
`

export const BtnWrap = styled.div`
display:flex;
justify-contnet:flex-start;
`


export const ImgWrap = styled.div`
max-width:555px;
height:100%
`

export const Img = styled.img`
width:100%;
margin:0 0 10px 0;
padding-right:0;

`

export const TextLink = styled(Link)`
color:rgb(0,0,232);
opacity:0.8;
font-size:18px;
text-decoration:none;
display:${({ linktext }) => (linktext ? 'block' : 'none')};
&:hover{
  color:#01bf71;
  text-decoration: underline;
   transition:0.3s ease-out;
   cursor: pointer;
}
`