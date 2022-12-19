import React from "react";
type dataObject = {
  name: string;
  link: string;
  roles: String[];
};

type Props = {
  items: dataObject[];
};

export const ShowLinks = ({ items }: Props) => {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <a href={item.link}>{item.name}</a>
          </div>
        );
      })}
    </div>
  );
};
