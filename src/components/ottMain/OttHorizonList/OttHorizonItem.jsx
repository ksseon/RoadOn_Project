import React from 'react';
import './style.scss';

const OttHorizonItem = ({ color, img, caption }) => {
    return (
        <article>
            <figure>
                <img src={img} alt={caption} style={{ width: '100%', borderRadius: '6px' }} />
                {/* <figcaption></figcaption> */}
            </figure>
        </article>
    );
};
//style={{ margin: 0 }} figure
//  style={{ textAlign: 'center', marginTop: '6px', color: '#333' figcaption
// style={{  backgroundColor: color,   padding: '10px',    borderRadius: '8px',    marginBottom: '12px',}}

export default OttHorizonItem;
