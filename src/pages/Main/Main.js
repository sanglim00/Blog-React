import React, { useState } from "react";
import { Button, Buttons, ListWrap, ThumbnailWrap, Wrap } from "./Styles";
import ThumbnailCard from "../../componenets/Cards/ThumbnailCard";
import ListCard from "../../componenets/Cards/ListCard";
import { Titles } from "../../data/titles";

function Main() {
  const [Type, setType] = useState("thumbnail");

  const HandleListType = (e) => {
    const type = e.target.id;
    if (type === "thumbnail") setType("thumbnail");
    else if (type === "list") setType("list");
  };

  return (
    <Wrap>
      <Buttons>
        <Button id={"thumbnail"} onClick={HandleListType}>
          썸네일
        </Button>
        <Button id={"list"} onClick={HandleListType}>
          리스트
        </Button>
      </Buttons>
      {Type === "thumbnail" ? (
        <ThumbnailWrap>
          {Titles.map((title) => (
            <ThumbnailCard title={title} />
          ))}
        </ThumbnailWrap>
      ) : (
        <ListWrap>
          {Titles.map((title) => (
            <ListCard title={title} />
          ))}
        </ListWrap>
      )}
    </Wrap>
  );
}

export default Main;
