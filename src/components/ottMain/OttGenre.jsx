import React, { useEffect, useRef, useState } from 'react';
import { IoPlay, IoPause } from 'react-icons/io5';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const slides = [
    {
        name: 'The Avenger',
        release: 2012,
        from: 'America',
        img: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c91f906b-5881-47b1-89e4-e4a69c1961a7',
    },
    {
        name: '릴리슈슈의 모든 것',
        release: 2012,
        from: 'America',
        img: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/5bc859f0-db4f-4ab4-8f5f-e55977c33eb1',
    },
    {
        name: 'K-POP Demon Hunters',
        release: 2012,
        from: 'America',
        img: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/d239a63a-a0f8-4213-82dc-bb8d3f0806db',
    },
    {
        name: '폭싹 속았수다',
        release: 2012,
        from: 'America',
        img: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/9c0637aa-b440-4aef-93f3-ea20cf19f42c',
    },
    {
        name: 'Harry Potter',
        release: 2012,
        from: 'America',
        img: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/6a90b5ba-9f3e-4cb3-a8e2-3ae19b2aa443',
    },
    {
        name: 'About Time',
        release: 2012,
        from: 'America',
        img: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/fe05145f-c9ab-457f-a91b-92a4c1bd633c',
    },
    {
        name: 'Heart Break High',
        release: 2012,
        from: 'America',
        img: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/1158c3d4-81d5-4dfc-bb42-863f357ecdb5',
    },
    {
        name: 'Billy Elliot',
        release: 2012,
        from: 'America',
        img: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c8ef23d2-37ee-4473-ad86-d9c9911be3bb',
    },
    {
        name: 'Frozen',
        release: 2012,
        from: 'America',
        img: 'https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/29eff421-1087-4b51-92a2-a7f204098187',
    },
];

const OttGenre = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const swiperRef = useRef(null);

    // toggle play/pause
    const togglePlayPause = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    // audio ended event - loop manually
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const onEnded = () => {
            audio.currentTime = 0;
            audio.play();
        };
        audio.addEventListener('ended', onEnded);
        return () => {
            audio.removeEventListener('ended', onEnded);
        };
    }, []);

    // init Swiper
    useEffect(() => {
        swiperRef.current = new Swiper('.swiper', {
            grabCursor: true,
            initialSlide: 4,
            centeredSlides: true,
            slidesPerView: 'auto',
            spaceBetween: 10,
            speed: 1000,
            freeMode: false,
            mousewheel: {
                thresholdDelta: 30,
            },
            pagination: {
                el: '.swiper-pagination',
            },
            on: {
                click() {
                    swiperRef.current.slideTo(this.clickedIndex);
                },
            },
        });
    }, []);

    // init particles.js (particles.js script should be loaded in public/index.html)
    useEffect(() => {
        if (window.particlesJS) {
            window.particlesJS('particles-js', {
                particles: {
                    number: { value: 180, density: { enable: true, value_area: 800 } },
                    color: { value: '#fff' },
                    shape: { type: 'circle' },
                    opacity: { value: 0.3, anim: { enable: false } },
                    size: {
                        value: 4,
                        random: true,
                        anim: { enable: true, speed: 2, size_min: 0.1 },
                    },
                    line_linked: { enable: false },
                    move: {
                        enable: true,
                        speed: 0.4,
                        direction: 'right',
                        random: true,
                        straight: false,
                    },
                },
                retina_detect: true,
            });
        }
    }, []);

    return (
        <div className="cardWrap">
            {/* <div
                id="particles-js"
                className="particles"
                style={{ position: 'fixed', width: '100%', height: '100%', zIndex: -1 }}
            ></div> */}

            <div className="container">
                <h3>
                    매력있는 <strong>배경</strong>의 영화/드라마
                </h3>
                <div className="swiper">
                    <div className="swiper-wrapper">
                        {slides.map(({ name, img, from, release }, idx) => (
                            <div className="swiper-slide" key={idx}>
                                <img src={img} alt={name} />
                                <p>
                                    {name} <strong>({release})</strong>
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </div>
    );
};

export default OttGenre;
