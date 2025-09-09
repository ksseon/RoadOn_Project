// IntroSlider.jsx
import React, { useRef, useState } from 'react';
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';
import './style.scss';

const slides = [
    {
        title: 'BILLY ELLIOT',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum...',
        image: 'https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg',
        release: 2019,
        genre: 'Horror/Mystery',
        duration: '2h 50m',
        rating: '8.0',
    },
    {
        title: 'BILLY ELLIOT',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum...Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum...',
        image: 'https://i.redd.it/tc0aqpv92pn21.jpg',
        release: 2019,
        genre: 'Horror/Mystery',
        duration: '2h 50m',
        rating: '8.0',
    },
    {
        title: 'The Gate Keeper',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum...',
        image: 'https://wharferj.files.wordpress.com/2015/11/bio_north.jpg',
        release: 2019,
        genre: 'Horror/Mystery',
        duration: '2h 50m',
        rating: '8.0',
    },
    {
        title: 'Last Trace Of Us',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum...',
        image: 'https://images7.alphacoders.com/878/878663.jpg',
        release: 2019,
        genre: 'Horror/Mystery',
        duration: '2h 50m',
        rating: '8.0',
    },
    {
        title: 'Urban Decay',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum...',
        image: 'https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg',
        release: 2019,
        genre: 'Horror/Mystery',
        duration: '2h 50m',
        rating: '8.0',
    },
    {
        title: 'The Migration',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum...',
        image: 'https://da.se/app/uploads/2015/09/simon-december1994.jpg',
        release: 2019,
        genre: 'Horror/Mystery',
        duration: '2h 50m',
        rating: '8.0',
    },
];

const OttMainVisual = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef(null);

    const handleClick = (direction) => {
        const slider = sliderRef.current;
        if (!slider) return;

        const items = slider.querySelectorAll('.item');
        if (direction === 'next') {
            slider.appendChild(items[0]);
        } else if (direction === 'prev') {
            slider.prepend(items[items.length - 1]);
        }
    };

    return (
        <main className="intro-slider">
            {/* {slides.map((slide, index) => (
                <div
                    key={index}
                    className="background-slide"
                    style={{ backgroundImage: `url(${slides[activeIndex].image})` }}
                />
            ))} */}

            <ul className="slider" ref={sliderRef}>
                {slides.map((slide, index) => (
                    <li
                        className="item"
                        key={index}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="content">
                            <h2 className="title">{slide.title}</h2>
                            <div className="texts">
                                <ul className="inform">
                                    <li>{slide.release}</li>
                                    <li>{slide.genre}</li>
                                    <li>{slide.duration}</li>
                                    <li>
                                        <strong>★ {slide.rating}</strong>
                                    </li>
                                </ul>
                                <p className="description">{slide.description}</p>
                                <button>MORE</button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <nav className="navBtn">
                {/* <IoArrowBackOutline className="btn prev" onClick={() => handleClick('prev')} /> */}
                <IoArrowForwardOutline className="btn next" onClick={() => handleClick('next')} />
            </nav>
        </main>
    );
};

export default OttMainVisual;
