import React from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

type Props = {}

export default function Map({ }: Props) {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={5} style={{ width: '500px', height: '500px' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]} />
    </MapContainer>
  )
}