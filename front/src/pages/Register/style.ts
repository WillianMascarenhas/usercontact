import styled from "styled-components";

export const StyleMain = styled.main`
  .container_resgister {
    .text {
    }

    form {
      input {
      }
    }
  }

  @media (min-width: 1000px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .container_resgister {
      background-color: rgb(70 70 70);
      height: 60%;
      width: 40%;
      display: flex;
      flex-direction: row;
      gap: 10%;
      border: transparent;
      border-radius: 20px;
      justify-content: center;
      align-items: center;

      .text {
        display: flex;
        align-items: center;
        align-content: center;
        background-color: rgb(226 226 226);
        height: 100%;
        width: 40%;
        border: transparent;
        border-bottom-left-radius: 20px;
        border-top-left-radius: 20px;

        h2 {
          margin: 0 auto;
          width: 50%;
        }
      }

      form {
        color: white;
        display: flex;
        width: 50%;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;

        label{
            margin-bottom: -10px;
            margin-left: 2px;
        }

        input {
          width: 77%;
        }
        .buttons_bottom {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin-top: 32px;
          gap: 1rem;
          
          button{
            width: 80%;
          }
        }
      }
    }
  }
`;
