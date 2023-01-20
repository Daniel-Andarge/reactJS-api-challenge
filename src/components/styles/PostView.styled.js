import styled from "styled-components";

export const PostView = styled.div`
background:  #131313;
border-radius: 0.95rem;
box-shadow: 0 5px 15px rgb(var(--gh-red-4) / 10%);
padding: 2rem 3.5rem;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;

`

export const ID = styled.div`
width: 40px;
height: 40px;
border: 2px solid #1287ba;
border-radius: 50%;
display: flex;
color: #b84064;

`

export const Span = styled.span`
margin: auto;
font-size: 15px;
`

export const Title = styled.div`
  font-size: 12px;
  /* text-align:left; */
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  text-transform: capitalize; 
  color: #1287ba;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

 
`
export const PageButton = styled.a`
  padding: 10px;
  color: rgb(193, 71, 71);
  background: var(--gh-grey-1);
  border-color: transparent;
  border-radius: 5px;
  cursor: pointer;
  margin: 0.5rem;
  transition: all 0.3s linear; 
  text-decoration: none;

`
export const Body = styled.div`

  font-size: 12px;
  text-align:left,justify;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0px;
  text-transform: capitalize;
  font-family: 'Times New Roman', Times, serif;
  color: #dbdbdb;

  p::first-letter {
    font-size: 1.5rem;
    font-weight: bold;
    color: #b84064;
  }
`