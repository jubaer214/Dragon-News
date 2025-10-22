import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FaRegEye, FaShareAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details } = news;

  // Format published date
  const publishedDate = new Date(author.published_date).toLocaleDateString();

  return (
    <div className="card bg-base-100 shadow-md border border-base-200 rounded-md">
      {/* Header */}
      <div className="flex items-center justify-between bg-base-300 px-4 py-3">
        <div className="flex items-center gap-2 ">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{publishedDate}</p>
          </div>
        </div>
        <button className="flex items-center gap-4">
          <CiBookmark size={22} />
          <FaShareAlt size={22} />
        </button>
      </div>

      <div className="m-4">
        <h2 className="card-title text-gray-800 font-bold leading-tight">
          {title}
        </h2>
      </div>
      {/* Thumbnail */}
      <figure className="px-3 ">
        <img src={thumbnail_url} alt={title} className="w-full object-cover" />
      </figure>

      {/* Body */}
      <div className="card-body px-4 pt-3 pb-1">
        <p className="text-sm text-gray-600 line-clamp-3">
          {details.slice(0, 180)}...
        </p>
        <a className=" text-orange-600 font-bold hover:underline mt-1">
          Read More
        </a>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border border-base-300">
        <div className="flex items-center gap-1 text-orange-500">
          {[...Array(rating.number)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-1 text-sm font-semibold text-gray-700">
            {rating.number.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <FaRegEye className="text-lg" />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
