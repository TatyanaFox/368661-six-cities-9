import React, { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';

import { City } from '../../types/cities';
import { Points } from '../../types/points';

type MapProps = {
  city: City,
  points: Points[],
  selectedPoint: object,
}

function MapComponent({city, points, selectedPoint}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.lat,
            lng: point.lng,
          },  {
            icon: (point.title)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);

  return (
    <div
      style={{height: '500px'}}
      ref={mapRef}
    >
    </div>
  );
}

export default MapComponent;
