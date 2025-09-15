import React, { useEffect, useRef, useState } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

// 지도 컴포넌트
const MapComponent = ({ center, zoom, address, hotelName }) => {
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);
    const [marker, setMarker] = useState(null);

    useEffect(() => {
        if (mapRef.current && !map) {
            const newMap = new window.google.maps.Map(mapRef.current, {
                center,
                zoom,
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: false,
            });
            setMap(newMap);
        }
    }, [center, zoom, map]);

    useEffect(() => {
        if (map && address) {
            // 기존 마커 제거
            if (marker) {
                marker.setMap(null);
            }

            // Geocoding을 통해 주소를 좌표로 변환
            const geocoder = new window.google.maps.Geocoder();
            geocoder.geocode({ address: address }, (results, status) => {
                if (status === 'OK' && results[0]) {
                    const location = results[0].geometry.location;

                    // 지도 중심 이동
                    map.setCenter(location);

                    // 새 마커 생성
                    const newMarker = new window.google.maps.Marker({
                        position: location,
                        map: map,
                        title: hotelName,
                        animation: window.google.maps.Animation.DROP,
                    });

                    // 정보창 생성
                    const infoWindow = new window.google.maps.InfoWindow({
                        content: `
              <div style="padding: 10px;">
                <h3 style="margin: 0 0 5px 0; color: #333;">${hotelName}</h3>
                <p style="margin: 0; color: #666; font-size: 14px;">${address}</p>
              </div>
            `,
                    });

                    // 마커 클릭 시 정보창 표시
                    newMarker.addListener('click', () => {
                        infoWindow.open(map, newMarker);
                    });

                    setMarker(newMarker);
                } else {
                    console.error('Geocoding failed:', status);
                }
            });
        }
    }, [map, address, hotelName, marker]);

    return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
};

// 로딩 및 에러 처리 컴포넌트
const render = (status) => {
    switch (status) {
        case Status.LOADING:
            return (
                <div
                    style={{
                        width: '100%',
                        height: '400px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#f5f5f5',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                    }}
                >
                    지도를 불러오는 중...
                </div>
            );
        case Status.FAILURE:
            return (
                <div
                    style={{
                        width: '100%',
                        height: '400px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#fee',
                        border: '1px solid #fcc',
                        borderRadius: '8px',
                        color: '#c66',
                    }}
                >
                    지도를 불러올 수 없습니다.
                </div>
            );
        default:
            return null;
    }
};

// 메인 GoogleMap 컴포넌트
const GoogleMap = ({ hotel }) => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
        return (
            <div
                style={{
                    width: '100%',
                    height: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#fff3cd',
                    border: '1px solid #ffeaa7',
                    borderRadius: '8px',
                    color: '#856404',
                }}
            >
                Google Maps API 키가 설정되지 않았습니다.
            </div>
        );
    }

    // 기본 중심점을 세계 지도 중심으로 설정 (초기 로딩용)
    const worldCenter = { lat: 20, lng: 0 };

    return (
        <div style={{ margin: '20px 0' }}>
            <h3 style={{ marginBottom: '10px', color: '#333' }}>🗺️ 호텔 위치</h3>
            <Wrapper apiKey={apiKey} render={render}>
                <MapComponent address={hotel.address} hotelName={hotel.name} />
            </Wrapper>
        </div>
    );
};

export default GoogleMap;
