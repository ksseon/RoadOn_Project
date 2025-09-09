import './style.scss'; // 여기에 스와이퍼 스타일도 포함될 수 있음
import OttHorizonItem from './OttHorizonItem';

const OttSection = ({ title, books }) => (
    <>
        <h1>{title}</h1>
        <section style={{ marginBottom: '2rem' }}>
            {books.map((book, idx) => (
                <OttHorizonItem
                    key={idx}
                    color={book.color}
                    img={book.img}
                    caption={book.caption}
                />
            ))}
        </section>
    </>
);

export default OttSection;

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import './style.scss';
// import OttHorizonItem from './OttHorizonItem';

// const OttSection = ({ title, books }) => (
//     <>
//         <h1>{title}</h1>
//         <section style={{ marginBottom: '3rem' }}>
//             <Swiper
//                 modules={[Navigation]}
//                 slidesPerView={5}
//                 slidesPerGroup={5}
//                 spaceBetween={30}
//                 navigation
//                 loop={true}
//                 loopFillGroupWithBlank={false}
//                 speed={500}
//                 className="my-swiper"
//             >
//                 {books.map((book, idx) => (
//                     <SwiperSlide key={idx} className="my-swiper-slide">
//                         <OttHorizonItem color={book.color} img={book.img} caption={book.caption} />
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </section>
//     </>
// );

// export default OttSection;
