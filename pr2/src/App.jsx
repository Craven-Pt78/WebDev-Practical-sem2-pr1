import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context/UserContext";

export default function App() {
  const { user, setUser } = useContext(UserContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      {/* Context API Part */}
      <h1>Hello, {user}</h1>
      <button onClick={() => setUser("Dipanshu")}>
        Change User
      </button>

      {/* Fetch API Part */}
      <h2>Posts from JSONPlaceholder</h2>

      {data.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}
