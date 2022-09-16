import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ButtonProps {
  backgroundColor?: string;
  color?: string;
}
export const Button = styled.button<ButtonProps>`
    background-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : "#282c34"};
    color: white;
    cursor: pointer;
    width: 175px;
    height: 40px;
    border: none;
    border-radius: 20px;
    margin: 10px auto;
    font-size: 1rem;
    transition: all linear 250ms;
   
    }
   
  `;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  background: whitesmoke;
  border-radius: 10px;
  padding-bottom: 10px;
  box-shadow: 0 0 10px black;
  margin: 10px;

  p {
    margin: 0;
    padding: 3px 10px;
    overflow: hidden;
  }
`;
export const StyledImage = styled.img`
  height: 130px;
  margin: auto;
  overflow: hidden;
`;

export const StyledTitle = styled.p`
  font-size: 1.3rem;
`;
export const StyledCategory = styled.p`
  color: #777;
  font-size: 0.9rem;
`;
export const StyledPrice = styled.p`
  font-size: 1.3rem;
`;
export const Container = styled.div`
  padding: 3%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 5%;

  h3,
  ul,
  li {
    color: red;
    flex-direction: row;
    margin-left: 10%;
  }
`;

export const ContainerButton = styled.button`
  color: white;
  background-color: #282c34;
  cursor: pointer;
  width: 30%;
  height: 40px;
  border: none;
  border-radius: 20px;
  margin: 10px auto;
  margin-left: 150px;
  font-size: 1rem;
  transition: all linear 250ms;
`;
export const StyledImageDetail = styled.img`
  display: flex;
  margin: auto;
  justify-content: center;
  border: 2px solid #282c34;
  border-radius: 10px;
  width: 25%;
  overflow-x: auto;
  overflow-y: hidden;

  &:hover {
    border: 5px solid #282c34;
  }
`;
export const ButtonCart = styled.button`
  color: white;
  background: #282c34;
  cursor: pointer;
  width: 30%;
  height: 40px;
  border: none;
  border-radius: 20px;
  margin: 10px auto;
  margin-left: 35%;
  font-size: 1rem;
  transition: all linear 250ms;
  text-align: center;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #1e283c;
  }
`;

export const StyledHeader = styled.header`
  color: white;
  background: #282c34;
 align-items: center;
  width: 100%;
  height: 60px;
  position: fixed;
  margin-top: -50px;
 
`;

export const StyledLink = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

  user-select: none;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  color: white;
  background-color: #282c34;
  padding: 10px;
  margin-left: 10px;
  text-align: center;
  text-transform: uppercase;
`;

export const StyledLink1 = styled(Link)`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

  user-select: none;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  color: white;
  background-color: #282c34;
  padding: 10px;
  margin-left: 10px;
  text-align: center;
  text-transform: uppercase;
`;


export const StyledImageFuture = styled.div`

background: white ;
padding: 3%;
display: grid;
grid-template-columns: 1fr 1fr;

`;

export const Image = styled.img`
  width: 80%;
display: flex;
padding: 3%;
display: grid;
grid-template-columns: 1fr 1fr;

`;


