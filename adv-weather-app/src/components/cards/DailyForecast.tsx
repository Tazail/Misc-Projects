import { type ReactNode } from 'react'
import Card from './Card'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getWearther } from '../../api'

type Props = {
  children: ReactNode
}

export default function DailyForecast({ children }: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ['weather'],
    queryFn: () => getWearther({ lat: 10, lon: 25 })
  })
  return (
    <Card title="Daily Forecast">
      <div className='flex flex-col gap-4'>
        {data?.daily.map(day => (
          <div key={day.dt} className="flex justify-between ">
            <p>DATE</p>
            <img src="" alt="" />
          </div>
        ))}
      </div>
    </Card>
  )
}
