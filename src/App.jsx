import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BackgroundImageRandom } from "./Background/Background.styled";

function App() {
  const [count, setCount] = useState(0);

  function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
  }

  console.log(reverseWords("The quick brown fox jumps over the lazy dog."));

  useEffect(() => {
    const random = Math.floor(Math.random() * 3) + 1;

    setCount(random);
  }, []);

  // 1. Создал переменную для каждого статуса
  // const STATUS_BUSY = "busy";
  // const STATUS_READY = "ready";
  // // 2. Использовал вычисляемые свойства
  // const STATUS_LABELS = {
  //   [STATUS_BUSY]: "Ожидает",
  //   [STATUS_READY]: "Готов",
  // };
  // // 3. Получил массив из БД
  // const drivers = [
  //   { name: "Павел", status: "busy" },
  //   { name: "Сергей", status: "ready" },
  // ];
  // // 4. Перевел статусы в нужный (человеческий) формат
  // const driverStatuses = drivers.map((driver) => {
  //   const { status } = driver;
  //   console.log(status);
  //   return STATUS_LABELS[status];
  // });
  // console.log(driverStatuses);
  // // Array [ "Ожидает", "Готов" ]

  return (
    <BackgroundImageRandom randomNumber={count}>
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="./vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </BackgroundImageRandom>
  );
}

export default App;
