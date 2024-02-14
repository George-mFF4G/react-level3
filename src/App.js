import { useState, useMemo, useCallback } from "react";
import ViewCounter from "./Components/ViewCounter";
import ViewText from "./Components/ViewText";
// import logo from './logo.svg';
// import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: "memo" });
  const name = useMemo(() => {
    return user;
  }, [user]);
  const counterHandler = () => {
    setCount(count + 1);
  };
  const ageHandler = useCallback(() => {
    setUser((prev) => {
      if (prev.age) {
        return prev;
      } else {
        return { ...prev, age: 30 };
      }
    });
  }, []);
  console.log("app");
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <ViewCounter counter={count} counterHandler={counterHandler} />
      <ViewText text={name} addAge={ageHandler} />
    </div>
  );
}

export default App;
