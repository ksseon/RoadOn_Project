export default [
    {
        id: 1,
        name: '그랜드 하얏트 제주',
        engName: 'Grand Hyatt Jeju',
        slug: 'grand-hyatt-jeju',
        type: 'hotel', // hotel, pension, guesthouse, resort, motel, camping
        star: 3,
        location: '서귀포시, 제주',
        price: 326480,
        rate: 4.8, // 이거 숫자말고 평균 계산 함수..? - 평점 따라서 해당하는 0.5~5.0 별 이미지
        // 0~0.9 -> 0
        // 1.0~1.4 -> 1
        // 1.5~1.9 -> 1.5
        // 2.0~2.4 -> 2 ...
        reviewCount: 256, // 개수 세는 함수..?
        about: '어쩌구',// 숙소 설명
        phone: '06060606',// 숙소 전화번호,
        mail: '@naver.com',// 숙소 이메일
        policies: '어쩌구',// 숙소 정책 - 숙소 타입별로 다르게?
        cancellation: '어쩌구',// 취소 정책 - 숙소 타입별로 다르게?
        address: '제주특별자치도 서귀포시 중문관광로 116',
        landmark: ['어쩌구', '어쩌구'], 
        service: ['무료 와이파이', '조식제공', '짐보관', '수영장', '레스토랑', '반려동물', '주차', '오션뷰', '바베큐', '스파', '금연실'], 
        image: ['hotel1.jpg', ]
        // 박 수, 인원은 검색창에서 데이터 받아와야함
        // 이 배열?안에 리뷰 데이터도 있어야 아니다 리뷰 데이터는 따로 관리하고 id로 연결
        // 객실 선택 데이터 따로 만들기 - 숙소 타입별로 분류?
        // 

    },
];
