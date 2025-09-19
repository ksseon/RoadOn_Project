import React, { useEffect, useRef } from 'react';

const KakaoMap = ({ address, hotelName, width = '100%', height = '400px' }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const marker = useRef(null);

    useEffect(() => {
        // 카카오맵 API가 로드되었는지 확인
        if (!window.kakao || !window.kakao.maps) {
            console.error('카카오맵 API가 로드되지 않았습니다.');
            return;
        }

        // 지도 초기화 함수
        const initializeMap = () => {
            const { kakao } = window;

            // 지도 옵션 설정
            const mapOption = {
                center: new kakao.maps.LatLng(37.5665, 126.978), // 서울시청 좌표 (기본값)
                level: 3, // 확대 레벨
            };

            // 지도 생성
            map.current = new kakao.maps.Map(mapContainer.current, mapOption);

            // 주소-좌표 변환 객체 생성
            const geocoder = new kakao.maps.services.Geocoder();

            // 주소로 좌표 검색
            if (address) {
                geocoder.addressSearch(address, (result, status) => {
                    if (status === kakao.maps.services.Status.OK) {
                        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                        // 기존 마커 제거
                        if (marker.current) {
                            marker.current.setMap(null);
                        }

                        // 마커 생성
                        marker.current = new kakao.maps.Marker({
                            map: map.current,
                            position: coords,
                        });

                        // 인포윈도우 생성 (호텔 이름 표시)
                        const infowindow = new kakao.maps.InfoWindow({
                            content: `<div style="width:150px;text-align:center;padding:6px 0;">${
                                hotelName || '호텔 위치'
                            }</div>`,
                        });

                        // 인포윈도우를 마커 위에 표시
                        infowindow.open(map.current, marker.current);

                        // 지도 중심을 마커 위치로 이동
                        map.current.setCenter(coords);
                    } else {
                        console.error('주소 검색에 실패했습니다:', address);
                    }
                });
            }
        };

        // 카카오맵 API 로드 대기
        if (window.kakao && window.kakao.maps) {
            // 이미 로드된 경우
            window.kakao.maps.load(initializeMap);
        } else {
            // 스크립트 로딩 대기
            const checkKakao = setInterval(() => {
                if (window.kakao && window.kakao.maps) {
                    clearInterval(checkKakao);
                    window.kakao.maps.load(initializeMap);
                }
            }, 100);

            // 10초 후 타임아웃
            setTimeout(() => {
                clearInterval(checkKakao);
                console.error('카카오맵 API 로딩 타임아웃');
            }, 10000);
        }

        // 컴포넌트 언마운트 시 정리
        return () => {
            if (marker.current) {
                marker.current.setMap(null);
            }
        };
    }, [address, hotelName]);

    return (
        <div
            ref={mapContainer}
            style={{
                width: width,
                height: height,
                borderRadius: '8px',
                border: '1px solid #ddd',
            }}
        />
    );
};

export default KakaoMap;
