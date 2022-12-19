import { useEffect, useState } from "react";
import "./App.css";
import jsondata from "./data.json";
import { ShowLinks } from "./ShowLinks";

type dataObject = {
  name: string;
  link: string;
  roles: String[];
};

const tags = ["css", "frontend", "backend", "react", "php"];

function App() {
  const [data, setData] = useState<dataObject[]>([]);
  const [filteredItems, setFilteredItems] = useState<dataObject[]>([]);

  const filterTags = (name: string) => {
    return setFilteredItems(() =>
      data.filter((data) => data.roles.includes(name))
    );
  };

  const clearFilter = () => {
    return setFilteredItems([]);
  };

  useEffect(() => {
    setData(jsondata);
  }, []);

  return (
    <div className="App">
      <h1>Links Uteis</h1>
      <div className="links-uteis">
        {Array.from(tags)
          .sort((a, b) => {
            return a.localeCompare(b, "en", { sensitivity: "base" });
          })
          .map((item, index) => {
            return (
              <button key={index} onClick={() => filterTags(item)}>
                {item}
              </button>
            );
          })}
        {/* {tags.map((item, index) => {
          return (
            <button key={index} onClick={() => filterTags(item)}>
              {item}
            </button>
          );
        })} */}
      </div>
      <hr></hr>
      <button onClick={() => clearFilter()}>clear filter</button>
      <hr></hr>
      {filteredItems.length <= 0 ? (
        <ShowLinks items={data} />
      ) : (
        <ShowLinks items={filteredItems} />
      )}
    </div>
  );
}

export default App;
