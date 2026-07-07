import { useState } from 'react'

const API_KEY = "58d48763d4b3b5c0183ff7987d0ed680";

async function getTemperature() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=55&lon=55&appid=${API_KEY}`);
  if (!response.ok) {
    throw new Error("Ошибка запроса");
  }
  const data = await response.json();
  console.log(data);
  return data.main.temp;
}


function App() {
  const [temperature, setTemperature] = useState(22)

  async function handleClick() {
    // позже здесь будет fetch
    // const newTemperature = await getTemperature();

    const newTemperature = await getTemperature();
    setTemperature(newTemperature);
  }

  return (
    <>
      <div>
        <h1>{temperature}°</h1>
        <button onClick={handleClick}>
          Изменить температуру
        </button>
      </div>
    </>
  )
}

export default App
