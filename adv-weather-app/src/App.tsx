import DailyForecast from "./components/cards/DailyForecast"
import HourlyForecast from "./components/cards/HourlyForecast.tsx"
import CurrentWeather from "./components/cards/CurrentWeather.tsx"
import AdditionalInfo from "./components/cards/AdditionalInfo.tsx"
import Map from "./components/Map.tsx"
import { useState } from "react"
import type { Coords } from "./types.ts"
import LocationDropdown from "./components/dropdowns/LocationDropdown.tsx"
import { useQuery } from "@tanstack/react-query"
import { getGeocode } from "./api.ts"


function App() {

  const [coords, setCoords] = useState<Coords>({ lat: 50, lon: 65 })
  const [location, srtLocation] = useState('Tokyo')

  const { data } = useQuery({
    queryKey: ['geocode', location],
    queryFn: () => getGeocode(location)
  })

  const onMapClick = (lat: number, lon: number) => {
    setCoords({ lat, lon })
  }

  return (
    (
      <div className="flex flex-col gap-8">
        <LocationDropdown />
        <Map coords={coords} onMapClick={onMapClick} />
        <CurrentWeather coords={coords} />
        <HourlyForecast coords={coords} />
        <DailyForecast coords={coords} />
        <AdditionalInfo coords={coords} />
      </div>
    )
  )
}

export default App
