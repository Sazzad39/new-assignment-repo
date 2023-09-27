import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CampaignCard from "./CampaignCard";


const Campaign = () => {

    const [campaign, setCampaign] = useState();

    const {id} = useParams();
    const idInt = parseInt(id);

    const campaigns = useLoaderData();

    useEffect(()=> {

        const findCampaign = campaigns.find(campaign => campaign.id === idInt)

        setCampaign(findCampaign);

    },[idInt, campaigns])

    console.log(campaign);

    return (
        <div className="container mx-auto">
            <CampaignCard campaign={campaign}></CampaignCard>
        </div>
    );
};

export default Campaign;