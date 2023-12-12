import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.95;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContentController = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGreen};
  width: clamp(275px, 60vw, 600px);
  padding: 1em;
  border-radius: 10px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    padding: 2em 0.5em;
  }

  p {
    font-size: clamp(1rem, 1.25vw, 1.25rem);
    margin-bottom: 1.5em;
    text-align: center;
  }

  button {
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.colors.lightGreen};
    border-radius: 8px;
    padding: 0.75em 2em;
    background: none;
    color: ${({ theme }) => theme.colors.lightGreen};
    font-size: clamp(1rem, 1.25vw, 1.25rem);
    font-weight: 600;
    transition: all 0.5s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightGreen};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
