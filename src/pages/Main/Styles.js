import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: auto;

  @media screen and (max-width: 1040px) {
    padding: 0 20px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  padding: 8px 16px;
  border: 1px solid #ebebeb;
  border-radius: 8px;

  transition: all 0.1s ease;
  :hover {
    background-color: #ebebeb;
  }
`;

export const ThumbnailWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 24px 20px;

  @media screen and (max-width: 1040px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px 16px;
  }
  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr 1fr;
    gap: 20px 12px;
  }
`;

export const ListWrap = styled.div``;
