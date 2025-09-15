import '../style.scss';
import { HiOutlineClipboardDocument } from 'react-icons/hi2';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import GoogleMap from './GoogleMap';

const Location = ({ hotel }) => {
    const [copied, setCopied] = useState(false);

    const handleClick = () => {
        onSelect(roomData);
    };

    const handleCopySuccess = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // 2초 후 상태 초기화
    };

    return (
        <>
            <h2>위치</h2>
            <div className="hotel-map">
                {/* <iframe
                    width="100%"
                    height="400"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={`https://www.google.com/maps/embed/v1/place?key=&q=${encodeURIComponent(
                        hotel.address || hotel.location
                    )}`}
                    allowFullScreen
                /> */}
                <GoogleMap hotel={hotel} />
            </div>
            <p>
                {hotel.address}
                <CopyToClipboard text={hotel.address || hotel.location} onCopy={handleCopySuccess}>
                    <span className="copy-icon" style={{ cursor: 'pointer', marginLeft: '8px' }}>
                        <HiOutlineClipboardDocument />
                    </span>
                </CopyToClipboard>
                {copied && <span className="copy-feedback">복사되었습니다.</span>}
            </p>
            <ul className="landmarks">
                <li>{hotel.landmark[0]}</li>
                <li>{hotel.landmark[1]}</li>
                <li>{hotel.landmark[2]}</li>
            </ul>
        </>
    );
};

export default Location;
