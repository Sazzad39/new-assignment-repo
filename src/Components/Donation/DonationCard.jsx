
const DonationCard = ({ campaign }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
    description,
    price,
  } = campaign || {};

  return (
    <div className="container mx-auto">
      <div className="flex md:w-[630px] h-[230px] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md my-4" style={{backgroundColor: card_bg_color}}>
        <div className=" m-0 w-2/5 ">
          <img
            src={picture}
            alt="image"
            className="h-[230px] w-full "
          />
        </div>
        <div className="p-6">
        <h2 className="px-2 py-1" style={{ color: text_button_bg_color, backgroundColor: category_bg_color, height: "full", textAlign: "center", borderRadius: "5px", width: "85px"}}>{category}</h2>
        <p className="card-title py-2 text-[#0B0B0B] text-2xl font-semibold ">{title}</p>
        <h2 className="font-semibold text-base" style={{ color: text_button_bg_color}}>${price}</h2>
        <button className=" text-white px-7 rounded-md  py-3 mt-3" style={{backgroundColor: text_button_bg_color}}>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
