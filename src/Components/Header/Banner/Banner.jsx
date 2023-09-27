

const Banner = () => {
    return (
        <div className="relative">
            <img className=" h-[80vh] w-full opacity-10 "  src={`https://i.ibb.co/68XVBZ2/Whats-App-Image-2023-09-26-at-19-31-47.jpg`} alt="" />
            <div className="absolute z-10 top-16 md:top-32 md:left-20 lg:top-44 lg:left-[350px] ">
                <h1 className="text-[#0B0B0B] text-4xl font-bold text-center ">I Grow By Helping People In Need</h1>
                <div className="flex justify-center mt-4">
                <input className="text-[#0b0b0b66] py-3 md:w-72   pl-2 border-solid border-2 rounded-l-md " type="Search" placeholder="Search here...." />
                <button className=" bg-[#FF444A] text-white text-base font-normal px-4 py-1 md:px-7 md:py-3 rounded-r-md ">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;