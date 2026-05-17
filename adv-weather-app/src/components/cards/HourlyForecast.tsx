import { React } from "react";
import Card from "./Card";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getWearther } from "../../api";

type Props = {};

export default function HourlyForecast({ }: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ['weather'],
    queryFn: () => getWearther({ lat: 10, lon: 25 })
  })
  return (
    <Card title="Hourly Forecast (48 Hours)" childrenClassName="flex gap-6">
      {data.hourly.map(hour => (
        <div className="flex flex-col gap-2">
          <p>{new Date(hour.dt * 1000).toLocaleTimeString()}</p>
        </div>
      ))}
    </Card>
  )
}