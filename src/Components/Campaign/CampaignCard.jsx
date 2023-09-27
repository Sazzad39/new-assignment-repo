import Swal from "sweetalert2";

const CampaignCard = ({campaign}) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
    description,
    price
  } = campaign || {};

  const handleDonate = ()=>{
    
    const addedDonationArray = [];


    const totalDonation = JSON.parse(localStorage.getItem('donations'));
    
    if (!totalDonation){
        addedDonationArray.push(campaign);
        localStorage.setItem('donations', JSON.stringify(addedDonationArray));
        Swal.fire(
            'Good job!',
            'Successfully Donated',
            'success'
          )
    }
    else{
        addedDonationArray.push(...totalDonation, campaign);
        localStorage.setItem('donations', JSON.stringify(addedDonationArray));
        Swal.fire(
            'Good job!',
            'Successfully Donated',
            'success'
          )
    }


  }

  return (
    <div>
     <div className="relative">
     <img className="w-[100vw] h-[100vh] " src={picture} alt="" />
     
     <div className="w-full h-32 absolute  bg-[#0b0b0b80] -mt-32">
     <button onClick={handleDonate} className=" text-white px-7 rounded-md ml-10 mt-11 py-3" style={{backgroundColor: text_button_bg_color}}>Donate ${price}</button>
     </div>
     </div>
     <h1 className="text-[#0B0B0B] font-bold text-4xl pt-14 ">{title}</h1>
     <h3 className="text-[#0b0b0bb3] text-base font-normal py-12">{description}</h3>
    </div>
  );
};

export default CampaignCard;
