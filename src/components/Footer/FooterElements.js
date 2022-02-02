import styled from 'styled-components';

export const Box = styled.footer`
 background-color: #101522;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const FooterTitle = styled.h2`
 color: yellow;
text-align: center;
 margin-top: -50px;
 padding-bottom: 1.5rem;
 
 font-size:2rem;
 padding-top:1rem;
 
        @media (max-width: 1000px) {
            padding-right:0;
            text-align:center;
  }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
 
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
  padding-left:20%;
justify-items:center;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color:#01bf71;
        cursor:pointer;
      transition: 0.4s ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
  text-align:center;
`;