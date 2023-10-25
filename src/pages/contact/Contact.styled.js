import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
`;

export const Heading = styled.h3`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  align-items: center;

  span:nth-child(1) {
    color: ${({ theme }) => theme.colors.lightGreen};
    /* font-size: clamp(3rem, 6vw, 7rem); */
    font-size: clamp(3rem, 5.5vw + 3rem, 7rem);
    margin-right: 0.3em;
  }

  span:nth-child(2) {
    font-size: clamp(1.4rem, 3vw, 3rem);
    color: ${({ theme }) => theme.colors.black};
    padding-top: 0.3em;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 1000px;
`;

export const InputsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGreen};
  padding: 1em 1.5em;
  border-radius: 10px;
`;

export const InputController = styled.div`
  position: relative;
  margin-bottom: 2.5em;

  input {
    width: 100%;
    border-radius: 5px;
    font-size: clamp(1rem, 1.25vw, 1.25rem);
    padding: 0.5em;
    border: none;
    margin-top: 0.25em;

    /* error span position */
    &[type="text"] + span,
    &[type="email"] + span {
      bottom: -3.3em;

      @media only screen and (min-width: 375px) {
        bottom: -1.9em;
      }
    }
  }

  textarea {
    width: 100%;
    border-radius: 5px;
    font-size: clamp(1rem, 1.25vw, 1.25rem);
    padding: 0.5em;
    margin-top: 0.25em;
    resize: none;
    border: none;

    /* error span position */
    & + span {
      bottom: -2.8em;

      @media only screen and (min-width: 407px) {
        bottom: -1.5em;
      }
    }
  }

  input:focus,
  textarea:focus {
    outline: none;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 1em;
  text-align: right;

  button {
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.colors.lightGreen};
    border-radius: 8px;
    padding: 1em;
    background: none;
    color: ${({ theme }) => theme.colors.lightGreen};
    font-size: clamp(0.9rem, 1vw + 0.25rem, 1.1rem);
    font-weight: 600;
    transition: all 0.5s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightGreen};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const ErrorInfo = styled.span`
  position: absolute;
  left: 0;
  display: inline-block;
  padding-top: 0.5em;
  color: ${({ theme }) => theme.colors.errorColor};
  font-size: clamp(0.6rem, 3vw, 0.9rem);
  font-weight: 600;
  animation: shake 700ms ease-out;

  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    5% {
      transform: translateX(-4px);
    }
    15% {
      transform: translateX(4px);
    }
    25% {
      transform: translateX(-4px);
    }
    35% {
      transform: translateX(4px);
    }
    45% {
      transform: translateX(-4px);
    }
    55% {
      transform: translateX(4px);
    }
    65% {
      transform: translateX(-4px);
    }
    75% {
      transform: translateX(3px);
    }
    85% {
      transform: translateX(-3px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
