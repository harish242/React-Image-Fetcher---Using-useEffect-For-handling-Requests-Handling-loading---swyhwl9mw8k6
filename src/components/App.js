import React, { useState } from "react";
import "../styles/App.css";
import { Loader } from "./Loader";
import { PhotoFrame } from "./PhotoFrame";
const App = () => {
  const [id, setNumber] = useState();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const HandleChange = async (event) => {
    const number = event.target.value;
    setNumber(number);

    setTimeout(async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${number}`
      );
      const data = await response.json();
      console.log(data);
      setData(data);
      setIsLoading(false);
    }, 0);
  };

  return (
    <>
      <input
        type="number"
        placeholder="number"
        onChange={HandleChange}
        value={id}
      />
      {isLoading && <Loader />}
      {data && <PhotoFrame url={data.url} title={data.title} />}
    </>
  );
};

export default App;
