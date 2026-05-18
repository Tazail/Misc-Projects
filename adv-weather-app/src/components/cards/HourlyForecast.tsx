import { React } from "react";
import Card from "./Card";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getWearther } from "../../api";
import WeatherIcon from "../WeatherIcon";

type Props = {};

export default function HourlyForecast({ }: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ['weather'],
    queryFn: () => getWearther({ lat: 10, lon: 25 })
  })
  return (
    <Card title="Hourly Forecast (48 Hours)" childrenClassName="flex gap-6 overflow-x-scroll">
      {data.hourly.map(hour => (
        <div className="flex flex-col gap-2 items-center p-2">
          <p className="whitespace-nowrap">{new Date(hour.dt * 1000).toLocaleTimeString(undefined, {
            hour: "numeric",
            minute: "2-digit"
          })}</p>
          <WeatherIcon src={hour.weather[0].icon} />
          <p>{Math.round(hour.temp)}°C</p>
        </div>
      ))}
    </Card>
  )
}