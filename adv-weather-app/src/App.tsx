import { useQuery } from "@tanstack/react-query"
import { getWearther } from "./api"
import Card from "./components/cards/Card.tsx"
import DailyForecast from "./components/cards/DailyForecast"
import HourlyForecast from "./components/cards/HourlyForecast.tsx"


function App() {

  const { data } = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWearther({ lat: 10, lon: 25 })
  })

  return (
    (
      <div className="flex flex-col gap-8">
        <Card title="Current Weather">
          {JSON.stringify(data?.current)?.slice(0, 100)}
        </Card>
        <HourlyForecast />
        <DailyForecast />
      </div>
    )
  )
}

export default App
