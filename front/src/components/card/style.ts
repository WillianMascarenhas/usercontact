import styled from "styled-components";

export const StyledCard = styled.li`
  width: 20%;
  background-color: white;
  height: 210px;
  padding: 15px;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  /* justify-content: space-between; */
  h2{
    height: 30px;
    font-size: 1.2rem;
    margin: 10px 0px;
  }

  .tags{
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    .tag_name{
        font-size: 0.8rem;
    }
  }
  .info_contact {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    span {
    }
  }
  .container_buttons {
    display: flex;
    gap: 1rem;
    width: 80%;
    margin: 0 auto;
    margin-top: 10px;
  }
  @media (max-width: 1100px) {
    width: 200px;
  }
`;
