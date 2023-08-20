import React from 'react';
import BgInfoImg from '../../BgInfoImg/BgInfoImg';
import BgInfoDetails from '../../BgInfo/BgInfoDetails';
import ClientFeedBack from '../../ClientFeedBack/ClientFeedBack';
import AskQuestion from '../../AskQuestion/AskQuestion';
import BgBanner from '../../BgBanner/BgBanner';


const Home = () => {
    return (
        <div>
            <BgBanner/>
            <BgInfoImg />
            <BgInfoDetails />
            <ClientFeedBack/>
            <AskQuestion/>
        </div>
    );
};

export default Home;