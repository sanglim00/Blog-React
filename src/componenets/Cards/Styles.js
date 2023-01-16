import styled from "styled-components";

export const Animation = styled.div`
  cursor: pointer;
  transition: all 0.1s ease;
  :hover {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const Thumbnail = styled(Animation)`
  > img {
    background: gray;
    width: 100%;
    height: 220px;
  }
`;

export const List = styled(Animation)`
  display: flex;

  > img {
    background: gray;
    width: 120px;
    height: 120px;
  }
`;
