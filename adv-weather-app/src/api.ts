const API_KEY = import.meta.env.VITE_API_KEY;

export async function getWearther({ lat, lon }: { lat: number; lon: number }) {
  console.log(API_KEY);
  const res = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
  );
  const data = await res.json();
  console.log(res);
  console.log(data);
  return data;
}
