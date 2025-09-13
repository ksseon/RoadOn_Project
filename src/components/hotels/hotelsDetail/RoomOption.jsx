
const RoomOption = () => {
    return (        
            <div className="room-option-box">
                <div className="room-img">
                    <span className="heart"></span>
                </div>
            
                <div className="room-info">
                    <h3>룸 타입</h3>
                    <ul>
                        <li>
                            <img
                                src="/images/hotels/detail/info-people.svg"
                                alt="인원"
                            />
                            <span>기준 3인/최대 3인</span>
                        </li>
                        <li>
                            <img
                                src="/images/hotels/detail/info-beds-0.svg"
                                alt="침대"
                            />
                            <span>싱글 침대 2개</span>
                        </li>
                    </ul>
                </div>
            </div>
    );
};

export default RoomOption;