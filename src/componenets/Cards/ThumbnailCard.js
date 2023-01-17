import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Thumbnail } from "./Styles";

const ThumbnailCard = (props) => {
  const [info, setInfo] = useState(props.title);
  const navigate = useNavigate();

  return (
    <Thumbnail onClick={() => navigate(`/${info.id}`)}>
      <img src={""} />
      <div>
        <div>{info.id}</div>
        <span>{info.id}</span>
      </div>
    </Thumbnail>
  );
};

export default ThumbnailCard;
