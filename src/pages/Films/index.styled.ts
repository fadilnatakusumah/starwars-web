import styled from "styled-components";
import { COLORS } from "../../consts/styles";


export const FilmContent = styled.div`
  background-color: ${COLORS.GRAY};
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 25px;
  }

  > div:first-child {
    flex: 1;
    width: 55%;
    overflow: hidden;
    padding: 16px;
    position: relative;

    > p {
      max-height: 130px;
    }

    > p:after {
      content: "";
      position: absolute;
      top: 50px;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        to bottom,
        transparent 55%,
        ${COLORS.GRAY} 90%
      );
    }

    h2 {
      margin-bottom: 5px;

      :hover {
        color: yellow;
      }
    }
  }

  > div:last-child {
    width: 45%;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
      border-left: 3px solid yellow;
    }
  }

  @media screen and (max-width: 700px) {
    flex-direction: column-reverse;
    > div:first-child {
      p {
        display: none;
      }
    }
    > div:last-child {
      width: 100%;

      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        border: none;
        border-bottom: 3px solid yellow;
      }
    }
  }
`;

export const FilmSelector = styled.div`
  cursor: pointer;
  background-color: ${COLORS.GRAY};
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: grey;
  }
  > div:first-child {
    position: relative;
  }

  div.list-options {
    background-color: ${COLORS.LIGHT_GRAY};
    position: absolute;
    left: 0;
    right: 0;
    top: 50px;
    border-radius: 0 0 5px 5px;
    padding: 20px;
    text-transform: uppercase;
    font-weight: bold;
    z-index: 1;

    display: grid;
    grid-template-columns: auto auto;

    > a p {
      border-left: 5px solid transparent;
      padding: 0 12px;
      margin-bottom: 12px;
      :hover {
        border-left: 5px solid yellow;
        color: yellow;
      }
    }
  }
`;
