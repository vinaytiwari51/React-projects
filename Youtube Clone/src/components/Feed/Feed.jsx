import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Feed.css'
import { API_KEY } from '../../index'
import { converter } from '../../index'
import moment from 'moment'




function Feed({catogery}) {
  
    // const userId = category;
    const [data, setData] = useState([]);
   const fetchData = async () => {
    const videoList = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${catogery}&key=${API_KEY}`;
    const res=  await fetch(videoList)
    const json = await res.json();
    setData(json.items); // json.items is an array
    console.log(json.items);
          
          // await fetch(videoList).then(res => res.json()).then(data => setData(data.items))

          
     
   }

   useEffect(() =>{
    fetchData();
   },[catogery])

   
  return (

 
    <div className='w-[98%] feed mt-2 basis-auto pl-72 '>
       {data.map((item, index) => (

        <div key={index}>
                 <Link to={`/play-video/${item.snippet.categoryId}/${item.id}`}>
            <div className="card mt-2 w-[370px] pl-1 cursor-pointer" >
                 <img src={item.snippet.thumbnails.medium.url} alt="image" className='w-96 rounded-2xl hover:rounded-[0]'/>
               <div className='flex gap-2 items-center'>
                {/* <div className="logo rounded-full  p-3 cursor-pointer">
                     <img src={avtar} alt="logo" className='w-20 object-contain '/>
                </div> */}
                     <h1 className='font-sans font-semibold text-lg cursor-pointer'>{item.snippet.title} </h1>
                
               </div>
               <div className='mt-1'>
                     <h3 className='text-gray-600 pl-1.5 font-sans font-[500]'>{item.snippet.channelTitle}</h3>
                     <span className='text-gray-600 pl-1.5 font-sans font-[500]'>{converter(item.statistics.viewCount)} </span>
                     &bull;
                     <span className='text-gray-600 font-sans font-[500]'> {moment(item.snippet.publishedAt).fromNow()}</span>
               </div>
                 
             </div>
             </Link>
        </div>
           
       ))}


        
    </div>
  )
}

export default Feed
