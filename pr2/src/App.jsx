import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export default function App() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <h1>Hello, {user}</h1>

      <button onClick={() => setUser("Dipanshu")}>
        Change User
      </button>
    </div>
  );
}
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Posts from JSONPlaceholder</h1>

      {data.map((item) => (
        <div key={item.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
