import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Props = {}

export default function LocationDropdown({ }: Props) {
  return (<Select>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Theme" />
    </SelectTrigger>
    <SelectContent className="z-1001">
      {locations.map((city) => (
        <SelectItem key={city} value={city}>
          {city}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>)
}

const locations = [
  "New York",
  "London",
  "Paris",
  "Tokyo",
  "Beijing",
  "Shanghai",
  "Moscow",
  "Dubai",
  "Singapore",
  "Los Angeles",
  "Hong Kong",
  "Sydney",
  "Berlin",
  "Rome",
  "Istanbul",
];