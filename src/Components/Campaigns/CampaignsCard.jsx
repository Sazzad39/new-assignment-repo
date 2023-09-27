import { Link } from "react-router-dom";

const CampaignsCard = ({campaign}) => {

    const {id, picture, title, category, category_bg_color, card_bg_color, text_button_bg_color} = campaign || {}


  return (
    <div>
      <Link to={`/campaigns/${id}`}>
      <div className="card card-compact w-[310px] h-[320px] bg-base-100 shadow-xl">
        <figure className="h-48">
          <img
            src={picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body" style={{ backgroundColor: card_bg_color}}>
          <h2 style={{ color: text_button_bg_color, backgroundColor: category_bg_color, height: "25px", textAlign: "center", borderRadius: "5px", width: "70px", padding: "4px"}}>{category}</h2>
          <p className="card-title" style={{ color: text_button_bg_color}}>{title}</p>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default CampaignsCard;
