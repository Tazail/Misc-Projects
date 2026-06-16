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

  const [coordinates, setCoords] = useState<Coords>({ lat: 50, lon: 65 })
  const [location, setLocation] = useState('Tokyo')

  const { data: geocodeData } = useQuery({
    queryKey: ['geocode', location],
    queryFn: () => getGeocode(location)
  })

  const onMapClick = (lat: number, lon: number) => {
    setCoords({ lat, lon })
    setLocation('custom')
  }

  const coords =
    location === 'custom'
      ? coordinates
      : { lat: geocodeData?.[0].lat ?? 0, lon: geocodeData?.[0].lon ?? 0 }

  return (
    (
      <div className="flex flex-col gap-8">
        <LocationDropdown location={location} setLocation={setLocation} />
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
