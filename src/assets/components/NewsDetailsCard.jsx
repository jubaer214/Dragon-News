import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    console.log(news);
    return (
      <div className="card bg-base-100 shadow-sm">
        <figure className='pt-4'>
          <img className='w-full px-5' src={news.thumbnail_url} alt="image thumbnail" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{news.title}</h2>
          <p className='text-gray-500'>{news.details}</p>
          <div className="card-actions justify-start mt-4">
            <Link to={`/category/${news.category_id}`} className="bg-secondary px-4 py-2 font-bold text-white flex items-center gap-3">
              <FaArrowLeft size={18}></FaArrowLeft> Back to Category
            </Link>
          </div>
        </div>
      </div>
    );
};

export default NewsDetailsCard;