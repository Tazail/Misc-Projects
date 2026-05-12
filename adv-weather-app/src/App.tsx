import { useQuery } from "@tanstack/react-query"
import { getWearther } from "./api"


function App() {

  const { data } = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWearther({ lat: 50, lon: 50 })
  })

  return (
    <>
      <p>sdfwhgsdfghdfgh</p>
      {JSON.stringify(data)}
    </>
  )
}

export default App
