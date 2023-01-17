import React, { useState } from "react";
import { List } from "./Styles";
import { useNavigate } from "react-router";

const ListCard = (props) => {
  const [info, setInfo] = useState(props.title);
  const navigate = useNavigate();

  return (
    <List onClick={() => navigate(`/${info.id}`)}>
      <img src={""} />
      <div>
        <div>{info.id}</div>
        <span>{info.id}</span>
      </div>
    </List>
  );
};

export default ListCard;
