import { useLoaderData } from "react-router-dom";
import Campaigns from "../Campaigns/Campaigns";
import Banner from "../Header/Banner/Banner";


const Home = () => {

    const campaigns = useLoaderData();
    console.log(campaigns);


    return (
        <div>

            <Banner></Banner>

            <section className="container mx-auto">
                <Campaigns campaigns={campaigns}></Campaigns>
            </section>
            <div >
        
    </div>
        </div>
    );
};

export default Home;