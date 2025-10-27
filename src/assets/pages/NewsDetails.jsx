import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../../components/homeLayout/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../components/NewsDetailsCard';

const NewsDetails = () => {
    const data = useLoaderData();
    const [news, setNews] = useState({})
    const { id } = useParams();
    // console.log(data, id, news);

    useEffect(() => {
        const newsDetails = data.find((singleNews) => singleNews.id == id);
        setNews(newsDetails)
    },[data, id])
    return (
      <div>
        <header>
          <Header></Header>
        </header>
        <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-10">
          <section className="col-span-9">
            <h2 className="font-bold mt-8 mb-5 text-lg">News Details</h2>
            <NewsDetailsCard news={news}></NewsDetailsCard>
          </section>
          <aside className="col-span-3 mt-8">
            <RightAside></RightAside>
          </aside>
        </main>
      </div>
    );
};

export default NewsDetails;