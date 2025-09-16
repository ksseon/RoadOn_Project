import "./style.scss";

const cardlist = [{ url: "./images/main/" }];
const CardItem = () => {
  return (
    <div>
      <div class="carousel-item">
        <div class="carousel-box">
          <div class="title">Paris</div>
          <div class="num">01</div>
          <img src="./images/main/stay1.png" />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
