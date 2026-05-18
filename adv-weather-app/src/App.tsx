import { useQuery } from "@tanstack/react-query"
import { getWearther } from "./api"
import DailyForecast from "./components/cards/DailyForecast"
import HourlyForecast from "./components/cards/HourlyForecast.tsx"
import CurrentWeather from "./components/cards/CurrentWeather.tsx"


function App() {

  const { data } = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWearther({ lat: 10, lon: 25 })
  })

  return (
    (
      <div className="flex flex-col gap-8">
        <CurrentWeather />
        <HourlyForecast />
        <DailyForecast />
      </div>
    )
  )
}

export default App
