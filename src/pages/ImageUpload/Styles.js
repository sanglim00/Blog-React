import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  > img {
    max-width: 300px;
    max-height: 400px;
    object-fit: contain;
  }

  > input {
    display: none;
  }

  > button {
    all: unset;
    cursor: pointer;
    border-radius: 12px;
    padding: 4px 16px;
    background-color: #ffbebe;
  }
`;
