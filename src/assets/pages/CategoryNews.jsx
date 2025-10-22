import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCart from '../components/NewsCart';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    // console.log(data);

    const [categoryNews, setCategoryNews] = useState([])

    useEffect(() => {
        if (id == 0) {
            setCategoryNews(data);
            return
        } else if (id == "1") {
            const filterNews = data.filter(
                (news) => news.others.is_today_pick == true)
            setCategoryNews(filterNews)
            return
        } else {
            const filterNews = data.filter((news) => news.category_id == id);
            console.log(filterNews);
            setCategoryNews(filterNews);
            return
        }
        
    },[data, id])
    return (
      <div>
        <h2 className='text-xl font-bold text-center mb-5'>
          Total <span className='text-red-500'>{categoryNews.length}</span> news found
            </h2>
            <div className="grid grid-cols-1 gap-4">
                {
                    categoryNews.map(news => <NewsCart key={news.category_id} news={news}></NewsCart>)
                }
            </div>
      </div>
    );
};

export default CategoryNews;