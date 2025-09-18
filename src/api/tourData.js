// src/api/tourData.js

// 삭제예정
export default [
    // 1) 윤식당 2
    {
        id: 'younskitchen2',
        tourId: 1,
        category: '예능',
        title: '《윤식당 2》',
        subtitle: '스페인 테네리페 패키지',
        description: '《윤식당 2》 속 스페인, 낭만의 섬 테네리페로',
        backgroundImg: '/images/tour/main/tenerife-bg.png',
        posterImg: '/images/tour/main/younskitchen2.png',
        images: [
            '/images/tour/main/younskitchen2-sub1.png',
            '/images/tour/main/younskitchen2-sub2.png',
        ],
        schedule: {
            date: '6박 8일 (매주 토요일 출발)',
            hotel: '이베로스타 헤리티지 그랜드 멘세이',
            itinerary: [
                '시내 야경 투어 & 타파스 바 체험',
                '바르셀로나 근교 투어, 가우디 투어',
                '스페인 전통 요리 클래스',
            ],
        },
        price: '₩2,600,000 (왕복 항공권 + 4성급 호텔 + 조식 + 주요 투어 + 차량 & 가이드 포함)',
        benefits: [
            { icon: 'calendar', text: '6박 8일' },
            { icon: 'airplane', text: '왕복 항공권' },
            { icon: 'hotel', text: '4성급 호텔' },
            { icon: 'food', text: '조식 포함' },
        ],
        slug: 'younskitchen2-tenerife',
    },

    // 2) 하얼빈
    {
        id: 'harbin',
        tourId: 2,
        category: '영화',
        title: '《하얼빈》',
        subtitle: '하얼빈 & 시티투어',
        description: '영화 속 무대를 따라가는 하얼빈 역사·감성 여행',
        backgroundImg: '/images/tour/main/harbin-bg.png',
        posterImg: '/images/tour/main/harbin.png',
        images: ['/images/tour/main/harbin-sub1.png', '/images/tour/main/harbin-sub2.png'],
        schedule: {
            date: '3박 4일 (매주 월요일 출발)',
            hotel: '하얼빈 시내 특급호텔',
            itinerary: [
                '영화 촬영지 투어 + 고비사막 낙타 체험',
                '독립군 테마 트레킹',
                '굿즈: <하얼빈> 한정판 기념품 증정',
            ],
        },
        price: '₩1,290,000 (항공+숙박+식사+입장료 포함)',
        benefits: [
            { icon: 'calendar', text: '3박 4일' },
            { icon: 'hotel', text: '특급호텔' },
            { icon: 'plane', text: '항공 포함' },
            { icon: 'gift', text: '기념품 증정' },
        ],
        slug: 'harbin-film-tour',
    },

    // 3) 서진이네
    {
        id: 'seojin',
        tourId: 3,
        category: '예능',
        title: '《서진이네》',
        subtitle: '멕시코 바칼라르 로컬 투어',
        description: '서진이네 촬영지에서 즐기는 라군&로컬푸드 체험',
        backgroundImg: '/images/tour/main/bacalar-bg.png',
        posterImg: '/images/tour/main/seojin.png',
        images: [],
        schedule: {
            date: '4박 6일 (매주 금요일 출발)',
            hotel: '바칼라르 시내 부티크호텔',
            itinerary: ['라군 보트 투어', '로컬 맛집 3회', '촬영 포인트 방문'],
        },
        price: '₩1,890,000 (왕복 항공권 + 호텔 + 조식 + 투어 포함)',
        benefits: [
            { icon: 'calendar', text: '4박 6일' },
            { icon: 'boat', text: '라군 보트 투어' },
            { icon: 'food', text: '로컬 맛집 3회' },
            { icon: 'camera', text: '촬영 포인트 방문' },
        ],
        slug: 'seojin-mexico-bacalar',
    },

    // 4) When Life Gives You Tangerines
    {
        id: 'tangerines',
        tourId: 4,
        category: '드라마',
        title: '《When Life Gives You Tangerines》',
        subtitle: '제주 로드 트립 패키지',
        description: '제주 감성 그대로, 동서남북 핵심 코스',
        backgroundImg: '/images/tour/main/jeju-bg.png',
        posterImg: '/images/tour/main/tangerines.png',
        images: ['/images/tour/main/tangerines-sub1.png', '/images/tour/main/tangerines-sub2.png'],
        schedule: {
            date: '1박 2일 (매주 금요일 출발)',
            hotel: '고창지역 부티크호텔',
            itinerary: ['청보리밭 투어', '교복체험', '학원농장', '선운사 동백숲', '구시포해변'],
        },
        price: '₩299,000 (숙박 + 조식 2회 + 교복 체험 + 입장권 포함, 교통비 불포함)',
        benefits: [
            { icon: 'calendar', text: '1박 2일' },
            { icon: 'hotel', text: '부티크호텔' },
            { icon: 'food', text: '조식 2회' },
            { icon: 'ticket', text: '입장권 포함' },
        ],
        slug: 'when-life-gives-you-tangerines',
    },

    // 5) 갯마을 차차차
    {
        id: 'hometown-chachacha',
        tourId: 5,
        category: '드라마',
        title: '《갯마을 차차차》',
        subtitle: '포항·구룡포 드라마 로케 투어',
        description: '두식이와 혜진처럼, 바닷마을 산책 & 카페 라운딩',
        backgroundImg: '/images/tour/main/guryongpo-bg.png',
        posterImg: '/images/tour/main/chachacha.png',
        images: [],
        schedule: {
            date: '2박 3일 (매주 토요일 출발)',
            hotel: '구룡포 바닷가 펜션',
            itinerary: ['바닷마을 산책', '핫플 카페 2곳', '드라마 촬영지 투어'],
        },
        price: '₩450,000 (숙박 + 조식 + 투어 포함)',
        benefits: [
            { icon: 'walk', text: '바닷마을 산책' },
            { icon: 'cafe', text: '핫플 카페 2곳' },
            { icon: 'map', text: '로케 지도 제공' },
            { icon: 'bus', text: '왕복 셔틀' },
        ],
        slug: 'hometown-chachacha-tour',
    },

    // 6) K-POP Demon Hunters
    {
        id: 'kpop-demonhunters',
        tourId: 6,
        category: '영화',
        title: '《K-POP Demon Hunters》',
        subtitle: '서울 K-컬처 테마 투어',
        description: 'K-POP 연습실 체험부터 한강 야경까지, 하루 몰아보기',
        backgroundImg: '/images/tour/main/seoul-kpop-bg.png',
        posterImg: '/images/tour/main/kpop-demonhunters.png',
        images: [],
        schedule: {
            date: '2박 3일 (매주 일요일 출발)',
            hotel: '서울 시내 특급호텔',
            itinerary: ['댄스/보컬 체험', '포토스팟 5곳', 'MD 스토어 방문', '한강 야경 코스'],
        },
        price: '₩890,000 (호텔 + 조식 + 투어 포함)',
        benefits: [
            { icon: 'music', text: '댄스/보컬 체험' },
            { icon: 'camera', text: '포토스팟 5곳' },
            { icon: 'shopping', text: 'MD 스토어 방문' },
            { icon: 'night', text: '한강 야경 코스' },
        ],
        slug: 'kpop-demon-hunters-tour',
    },

    // 7) 블랙핑크 콘서트 투어
    {
        id: 'blackpink-concert',
        tourId: 7,
        category: 'K-POP',
        title: 'BLACKPINK World Tour',
        subtitle: '서울 콘서트 & K-POP 성지 투어',
        description: '블랙핑크 공연과 함께 즐기는 서울 핫스팟 투어',
        backgroundImg: '/images/tour/main/blackpink-bg.png',
        posterImg: '/images/tour/main/blackpink.png',
        images: ['/images/tour/main/blackpink-sub1.png', '/images/tour/main/blackpink-sub2.png'],
        schedule: {
            date: '2박 3일 (매주 월요일 출발)',
            hotel: '포시즌스 호텔 서울',
            itinerary: [
                '하이브 인사이트 or K-POP 전시관',
                'K-팝 테마 레스토랑',
                '블랙핑크 다큐 감성 투어, 안무 직접 배워보기',
                'DDP 패션·뮤직비디오 촬영지',
                '명동 K-팝 굿즈샵 투어',
            ],
        },
        price: '₩950,000 (5성급 호텔 + 조식 + 주요 투어)',
        benefits: [
            { icon: 'calendar', text: '2박 3일' },
            { icon: 'hotel', text: '5성급 호텔' },
            { icon: 'ticket', text: '콘서트 티켓 포함' },
            { icon: 'shopping', text: '굿즈샵 투어' },
        ],
        slug: 'blackpink-worldtour-seoul',
    },
    // 8) BTS Yet To Come in Cinemas
    {
        id: 'bts-yet-to-come',
        tourId: 8,
        category: 'K-POP',
        title: '《BTS: Yet To Come in Cinemas》',
        subtitle: 'BTS 콘서트 특별 패키지',
        description: 'BTS의 특별한 무대를 극장과 함께, 성지 투어로 이어가는 경험',
        backgroundImg: '/images/tour/main/bts-bg.png', // 배경 (필요 시 포스터 색감 활용)
        posterImg: '/images/tour/main/bts-yet-to-come.png', // 포스터 이미지
        images: ['/images/tour/main/bts-sub1.png', '/images/tour/main/bts-sub2.png'],
        schedule: {
            date: '2박 3일 (매주 수요일 출발)',
            hotel: '서울 특급호텔',
            itinerary: [
                'CGV 특별 상영 관람',
                '하이브 인사이트 투어',
                'BTS 관련 명소 방문 (올림픽공원, 한강 공연장 등)',
                'K-POP 테마 카페 방문',
            ],
        },
        price: '₩1,200,000 (호텔 + 조식 + 영화 관람권 + 성지 투어 포함)',
        benefits: [
            { icon: 'calendar', text: '2박 3일' },
            { icon: 'ticket', text: '영화 관람 포함' },
            { icon: 'hotel', text: '특급호텔' },
            { icon: 'tourbus', text: 'BTS 성지 투어' },
        ],
        slug: 'bts-yet-to-come-tour',
    },
];
