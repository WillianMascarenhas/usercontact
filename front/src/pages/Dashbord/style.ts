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

  nav {
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

  .container {
    width: 80%;
    display: flex;
    justify-content: center;
    @media (max-width: 600px) {
      display: flex;
      flex-direction: column-reverse;
      gap: 3rem;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 3rem;
      width: 80%;
    }

    .container_userOwner {
      width: 40%;
      height: 275px;
      background-color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;

      @media (max-width: 1100px) {
        width: 100%;
        max-width: 230px;
      }
      span {
        margin-top: 50px;
        font-size: 3rem;
        color: white;
        background: black;
        border: solid 1px transparent;
        border-radius: 100%;
        height: 60px;
        width: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      div {
        display: flex;
        gap: 1rem;
      }
    }
  }
`;
