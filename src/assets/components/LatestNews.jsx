import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
      <div className="flex items-center gap-3 bg-base-200 p-3">
        <h2 className="text-base-100 bg-secondary px-3 py-2">lasshjjsh</h2>
        <Marquee className='flex gap-5' pauseOnHover={true}>
          <p className="font-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora,
            accusantium.
          </p>
          <p className="font-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora,
            accusantium.
          </p>
          <p className="font-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora,
            accusantium.
          </p>
        </Marquee>
      </div>
    );
};

export default LatestNews;