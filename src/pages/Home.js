import { useState, useEffect } from "react";

function Home() {
  const [list, setList] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/cards")
      .then((res) => {
        return res.json();
      })
      .then((data) => setList(data));
  }, []);

  return (
    <div>
      <div className="">
        {list &&
          list.map((item) => (
            <div className="" key={item.id}>
              <p>{item.title}</p>
              <p>{item.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
