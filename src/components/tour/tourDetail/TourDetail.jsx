import DetailBody from './DetailBody';
import './style.scss';

const TourDetail = () => {
    return (
        <main id="TourDetail">
            {/* <div className="searchBar-BG">
                <SearchBar
                    size="web"
                    defaultQuery=""
                    defaultDateText=""
                    defaultGuestsText=""
                    inputPlaceholder="패키지 검색"
                    chipDatePlaceholder="날짜"
                    chipGuestsPlaceholder="인원 선택"
                    searchLabel="검색"
                    className="transparent"
                    onSearch={(p) => console.log('SEARCH', p)}
                />
            </div> */}
            <div className="inner">
                <DetailBody />
                {/* <DetailBottom /> */}
            </div>
        </main>
    );
};

export default TourDetail;
