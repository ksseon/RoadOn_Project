// tourCon/TourCon1Item.jsx
import React from 'react';

const TourCon1Item = ({ item, style, onEnter }) => (
    <li
        className="img-wrap"
        onMouseEnter={onEnter}
        style={{
            transition: 'transform .35s cubic-bezier(.2,.7,.2,1), margin-left .35s, opacity .25s',
            ...style,
        }}
    >
        <img src={item.img} alt={item.alt} />
    </li>
);

export default React.memo(TourCon1Item);
