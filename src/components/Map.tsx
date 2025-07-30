"use client";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const center = { lat: 28.4595, lng: 77.0266 };
// Example: Gurugram location

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
      <GoogleMap
        zoom={12}
        center={center}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}
