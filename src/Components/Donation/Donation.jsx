import { useEffect } from "react";
import { useState } from "react";
import CampaignCard from "../Campaign/CampaignCard";
import DonationCard from "./DonationCard";

const Donation = () => {


    const [donations, setDonations] = useState([]);
    const [noData, setNoData] = useState(false);
    const [isShowAll, setIsShowAll] =useState(4);


    

    useEffect(()=>{

        const totalDonation = JSON.parse(localStorage.getItem('donations'));
        if(totalDonation){
            setDonations(totalDonation);
        }
        else{
            setNoData('No Data Found');
        }

    }, [])

    console.log(isShowAll);

    return (
        <div className="container mx-auto">
            {
            noData ? <div>
                <img className="items-center w-[30vw] h-[50vh] mx-auto" src={`https://i.ibb.co/3F6MTVv/clipart612017.png`} alt="" />
            </div> 
            : <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    {
                    
                    donations.slice(0,isShowAll).map((campaign) => (<DonationCard  key={campaign.id} campaign={campaign}></DonationCard>))
                    }
                </div>

                <div className={isShowAll === donations.length && 'hidden'}>
                <button id="seeAll" onClick={()=>setIsShowAll(donations.length)} className="bg-[#009444] px-7 py-3 text-white s rounded-lg mx-auto block text-base font-normal">See All</button>
                </div>
            </div> 

            }
            
        </div>
    );
};

export default Donation;