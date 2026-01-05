'use client';

import L from 'leaflet';
import { CONFIG } from '@/global-config';
import { Popup, Marker, TileLayer, MapContainer } from 'react-leaflet';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const customIcon = new L.Icon({
  iconUrl: `${CONFIG.assetsDir}/assets/icons/workspaces/MapMarker.svg`,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

type Location = {
  lat: number;
  lng: number;
  popup: string;
};

const locations: Location[] = [
  { lat: -33.912, lng: 151.095, popup: '2 Messiter Street, Campsie NSW 2194' },
];

export default function MapComponent() {
  return (
    <div className='tw:relative tw:z-0 tw:mb-40'>
      <MapContainer
        center={[-33.912, 151.095]}
        zoom={5}
        zoomControl={false}
        className="tw:xl:max-w-[1240px] tw:mx-4 tw:sm:mx-6 tw:xl:mx-auto tw:mb-[75px] tw:sm:mb-20 tw:rounded-2xl  tw:sm:rounded-3xl tw:h-[300px] tw:sm:h-[393px]"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((loc, index) => (
          <Marker key={index} position={[loc.lat, loc.lng]} icon={customIcon}>
            <Popup>{loc.popup}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
