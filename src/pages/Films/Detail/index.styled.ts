import styled from "styled-components";
import { COLORS } from "../../../consts/styles";

export const PosterFilm = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 50px;

  h1 {
    font-size: 2em;
  }
  img {
    border-radius: 10px;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ListCharacters = styled.div`
  h1 {
    padding: 10px;
    text-align: center;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
  }

  .list-container {
    margin-top: 15px;
    display: grid;
    gap: 15px;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    > div {
      border-radius: 5px;
      background-color: ${COLORS.GRAY};
      margin: 0 auto;
      text-align: center;
      width: fit-content;
      overflow: hidden;

      > div:last-child {
        height: 100px;
      }

      img {
        height: 200px;
        width: 200px;
        object-fit: cover;
      }
    }

    @media screen and (max-width: 900px) {
      grid-template-columns: auto;
      > div {
        display: flex;
        gap: 15px;
        width: 100%;
        overflow: hidden;

        > div:first-child {
          flex-direction
        }
        
        > div:last-child {
          padding: 20px 0;
        }
      }
      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;
