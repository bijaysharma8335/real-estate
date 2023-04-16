import React from "react";
import Banner from "./../Components/Banner";
import HouseList from "../Components/HouseList";

const Home = () => {
    return (
        <div className="min-h-[1800px]">
            <Banner />
            <HouseList />
        </div>
    );
};

export default Home;
