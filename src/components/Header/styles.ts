import styled from "styled-components";
import media from "../../utils/mediaQuery";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 640px;
  margin: 3em auto 0em auto;

  ${media.lessThan("small")`
    margin: 1em auto 0em auto;
  `};

  h2 {
    margin-top: 1em;
  }

  p {
    font-size: 1.2em;
    margin-top: 0.5em;
    text-align: center;
  }
`;

export const ProfilePic = styled.div`
  position: relative;

  img {
    height: 10em;
    width: 10em;
    border: 0.3em solid #fff;
    border-radius: 5em;
    margin: 0 auto;

    transition: all 0.3s ease-in-out;

    &:hover {
      box-shadow: 0px 20px 38px 0px rgba(0, 0, 0, 0.25);
      transform: scale(1.03);
      cursor: pointer;
    }
  }

  span {
    display: none;
    animation: showUp 0.3s ease-in-out;
  }

  &:hover span {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: max-content;
    top: calc(50% + -5px);
    transform: translateY(-50%);
    left: 110%;
    padding: 0.5em 1em;
    background: ${({ theme }) => theme.backgroundColor};
    box-shadow: 0px 20px 38px 0px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }

  @keyframes showUp {
    0% {
      top: 60%;
      opacity: 0;
    }
    100% {
      top: calc(50% + -5px);
      opacity: 1;
    }
  }
`;

export const ThemeButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  button {
    background-color: ${({ theme }) => theme.primary};
    border: 0;
    width: 40px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    outline: none;
    cursor: pointer;
    border-radius: 8px;

    & > svg {
      width: 20px;
      height: 20px;
      color: #fff;
    }
  }
`;
