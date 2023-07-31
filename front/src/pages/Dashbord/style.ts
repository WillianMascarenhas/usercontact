import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 100vw;
  height: 90px;
  background-color: rgb(170 167 167 / 92%);

  .conatiner_header {
    display: flex;
    display: flex;
    height: 100%;
    width: 90%;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }

  nav{
    display: flex;
    gap: 1rem;
  }

`;

export const StyledMain = styled.main`
width: 100vw;
margin-top: 5rem;
display: flex;
justify-content: center;
margin-bottom: 80px;

ul{
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    width: 80%;
}

`
