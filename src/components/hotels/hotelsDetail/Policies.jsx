import '../style.scss'

const Policies = ({hotel}) => {
    const handleClick = () => {
        onSelect(roomData);
    };

    return (        
          <>
             <h2>숙소 규정</h2>
                <ul className="follows">
                    <li>{hotel.policies[0]}</li>
                    <li>{hotel.policies[1]}</li>
                    <li>{hotel.policies[2]}</li>
                    <li>{hotel.policies[3]}</li>
                    <li>{hotel.policies[4]}</li>
                </ul>
          </>
    );
};

export default Policies;