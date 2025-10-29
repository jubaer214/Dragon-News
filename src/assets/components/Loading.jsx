import React from 'react';
import { Mosaic } from 'react-loading-indicators';

const Loading = () => {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Mosaic color="#32cd32" size="medium" text="" textColor="" />
      </div>
    );
};

export default Loading;