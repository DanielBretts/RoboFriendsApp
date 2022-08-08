import React from "react";
import Card from "./Card";

const cardList = ({ robots }) => {
  return (
    <div>
      {robots.map((_, i) => {
        return (
          <Card
            key={robots[i].id}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default cardList;
