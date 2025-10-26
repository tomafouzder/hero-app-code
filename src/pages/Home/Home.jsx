import React from 'react';
import Banner from '../../components/Banner/Banner';
import Apps from '../Apps/Apps';
import useApps from '../../Hooks/useApps';


const Home = () => {
    // const data = useLoaderData();
    const {apps, loading, error} = useApps()

    const homeApps = apps.slice(0,8)
    

    return (
        <div>
            <Banner></Banner>
            <Apps homeApps ={homeApps}></Apps>
        </div>
    );
};

export default Home;