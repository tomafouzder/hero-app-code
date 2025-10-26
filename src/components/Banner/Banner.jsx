import React from 'react';
import navImg from '../../assets/hero.png'

const Banner = () => {
    return (
        <div className='bg-gray-100'>
            <div className=' text-center max-w-6xl mx-auto'>
                <div className='pt-20'>
                    <h1>We Build
                        Productive Apps</h1>
                    <p>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>
                <div>
                    <button className="btn">Google Play</button>
                    <button className="btn">App Store</button>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={navImg} alt="" />
                </div>
            </div>
            <section>
                <h1>Trusted by Millions, Built for You</h1>
                <div>
                    <div>
                        <p><small>Total Downloads</small></p>
                        <h3>29.6M</h3>
                        <p><small>21% more than last month</small></p>
                    </div>
                </div>
                <div>
                    <p><small>Total Reviews</small></p>
                    <h3>906K</h3>
                    <p><small>46% more than last month</small></p>
                </div>

                <div>
                    <p><small>Active Apps</small></p>
                    <h3>132+</h3>
                    <p><small>31 more will Launch</small></p>
                </div>
            </section>
        </div>


    );
};

export default Banner;