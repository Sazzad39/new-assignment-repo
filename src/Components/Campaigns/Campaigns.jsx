import { key } from "localforage";
import CampaignsCard from "./CampaignsCard";


const Campaigns = ({campaigns}) => {
    console.log(campaigns);
    return (
        <div>
            

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-16">
                {
                    campaigns?.map(campaign => <CampaignsCard key={campaign.id} campaign={campaign}></CampaignsCard> )
                }
            </div>

        </div>
    );
};

export default Campaigns;