import React, { useEffect, useState } from 'react'
import videos from '../../assets/videos.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import download from '../../assets/download.png'
import avtar from '../../assets/avtar.png'
import image from '../../assets/image.webp'
import { Link, useParams } from 'react-router-dom'
import { API_KEY } from '../..'
import { converter } from '../..'
import moment from 'moment'


function Video() {
  const {videoId, categoryId} = useParams();
  const [apiProperty, setApiProperty] = useState(null);
  const [channelProperty, setChannelProperty] = useState(null)
  const [commentProperty, setCommentProperty] = useState([])
  const [recommended, setRecommended] = useState([]);
  // console.log(videoId);

  const api_url = async () =>{
    const apiUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`

    
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      if (data.items && data.items.length > 0) {
        setApiProperty(data.items[0]);
        // console.log(data.items[0]);
      } else {
        console.log("No items found in API response");
      }
    } catch (error) {
      console.log("APIURL :: NOT VALID", error);
    }

// check the down function 

    //  fetch(apiUrl).then((res) => res.json()).then((data) => setApiProperty(data.items[0]))
    //  console.log(data.items[0]);
      
     
  }
  const channelData = async () => {
    const channel = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiProperty.snippet.channelId}&key=${API_KEY}`;

    try {

     const res = await fetch(channel)
     const data = await res.json()
     if (data.items && data.items.length > 0) {
      setChannelProperty(data.items[0])
     } else {
      console.log("No items found in API response");
     } 
      
    } catch (error) {
      console.log("CHANNEL URL :: INVALID", error);
      
    }
  } 

  const commentData = async () => {
      const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}` 

      try {
        
        const res = await fetch(comment_url)
        const data = await res.json()

        if (data.items) {
          setCommentProperty(data.items)
          console.log(data.items);
          
          
        } else {
          console.log("No items found in API response");
        }
      } catch (error) {
        console.log("COMMENTS URL :: INVALID", error);
      }
  }

  const recommendedData = async () => {
    const recommended_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;

    try {

     const res = await fetch(recommended_url)
     const data = await res.json()
     if (data.items ) {
      setRecommended(data.items)
      console.log(data.items);
      
     } else {
      console.log("No items found in API response");
     } 
      
    } catch (error) {
      console.log("CHANNEL URL :: INVALID", error);
      
    }
  } 

  useEffect(() => {
    if (videoId) {
      api_url();
    }
  }, [videoId]);


  useEffect(() => {
    
     channelData();
    
  }, [apiProperty]);
  
  useEffect(() => {
    
     commentData();
    
  }, [videoId]);
  useEffect(() => {
    
     recommendedData();
    
  }, [categoryId]);
  
  return (
    <>
    <div className='flex gap-2 mt-20'>
    <div className='left w-2/3 ml-30 mt-3 '>
      <div className="content pl-1.5">
        {/* <video src={videos} controls muted className='rounded-2xl w-full h-[524px] hover:cursor-pointer'></video> */}

        <iframe  src={`https://www.youtube.com/embed/${videoId}? autoplay = 1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen 
        className='rounded-2xl w-full h-[524px] hover:cursor-pointer'
        ></iframe>

        <h2 className='font-sans font-medium text-2xl mt-3 mb-1 pl-1.5'>{apiProperty?apiProperty.snippet.title : "Title"}</h2>
      </div>
      <div className="profile flex justify-between">
        <div className="first flex gap-3 pl-1.5 mt-1.5 items-center">
             <div className='rounded-full w-10'>
                <img src={channelProperty?channelProperty.snippet.thumbnails.default.url: "avtar"} className=' object-cover rounded-full' />                  
             </div>
              <div className=''>
                <p className='font-medium font-sans '>{apiProperty?apiProperty.snippet.channelTitle :""}</p>
                <p className='font-normal font-sans text-gray-500'>{channelProperty?converter(channelProperty.statistics.subscriberCount) : "100"} subscribers</p>
              </div>
              <div>
              <button className='rounded-full ml-3 pl-3 pr-3 p-1 bg-gray-200 hover:bg-gray-300 hover:cursor-pointer'>Join</button>
              <button className='rounded-full ml-3 pl-6 pr-6 p-2 bg-black hover:cursor-pointer hover:bg-[#343a40] text-white'>Subscribe</button>

              </div>

              
        </div>

        <div className="second flex items-center">
           <div className='flex bg-gray-200 hover:bg-gray-300 hover:cursor-pointer p-2 pr-4 pl-3 rounded-tl-4xl rounded-bl-4xl '>
           <img src={like} alt="" className='w-7 object-contain'/>
           <span>{apiProperty?converter(apiProperty.statistics.likeCount) : "100k"} </span>
           </div>
                    <div className='bg-gray-200 hover:bg-gray-300 hover:cursor-pointer p-2 rounded-tr-4xl rounded-br-4xl pl-4 pr-2'>
                    <span><img src={dislike} alt="" className='w-7'/></span>
                    </div>
           <div className='flex ml-3 p-2 pl-7 pr-7 rounded-full bg-gray-200 hover:bg-gray-300 hover:cursor-pointer '>
                    <img src={share} alt="" className='w-7'/>
                    <span>Share</span>
            </div>

            <div className='flex ml-3 p-2 pl-4 pr-4 rounded-full bg-gray-200 hover:bg-gray-300 hover:cursor-pointer'>
                    <img src={download} alt="" className='w-7'/>
                    <span>Download </span>
           </div>
        </div>
      </div>

      <div className="third ">
        <div className="description mt-3 w-full bg-gray-200 p-3 rounded-2xl ">
            <span className='font-sans font-medium pr-2'>{apiProperty?converter(apiProperty.statistics.viewCount) : "100"}</span>
            <span className='font-medium font-sans'>{apiProperty? moment(apiProperty.snippet.publishedAt).fromNow(): ""}</span>
            <p className='font-sans '>{apiProperty?apiProperty.snippet.description : "Description"}</p>
        </div>
      </div>

        <div className="forth">
          <div className='flex gap-2'>
          <span className='font-sans text-2xl font-bold pl-2 mt-2'>{apiProperty?converter(apiProperty.statistics.commentCount) : "100"} </span>
          <h2 className='font-sans text-2xl font-bold pl-2 mt-2'>Comments</h2>
          </div>

          {commentProperty && commentProperty.map((item, index) => (
            <div
              key={index}
              className="comments flex gap-4 pl-2 items-center mt-4"
            >
             <div className='rounded-full w-10'>
                     <img src={item?item.snippet.topLevelComment.snippet.authorProfileImageUrl :"avtar"} className='w-full object-contain rounded-full' />                  
                 </div> 
                 <div>
                 <span className='font-medium font-sans'>{item?item.snippet.topLevelComment.snippet.authorDisplayName :""} </span>
                 <span className='font-sans text-sm text-[#6c584c]'>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()} </span>
 
                 <p className='text-[#6c584c] font-sans mt-1'>{item.snippet.topLevelComment.snippet.textDisplay}</p>
 
                 <div className='flex gap-3 items-center mt-4'>
                     <div className='rounded-full hover:bg-gray-300 hover:cursor-pointer p-2 '>
                         <img src={like} alt="" className='w-6 ' />
                     </div>
                     <div className='font-medium text-[#6c584c]'>
                         <p>{item?item.snippet.topLevelComment.snippet.likeCount :"10"}</p>
                     </div>
                     <div className='rounded-full hover:bg-gray-300 hover:cursor-pointer p-2 '>
                         <img src={dislike} alt="" className='w-6 ' />
                     </div>
                     <button className='rounded-full hover:bg-gray-300 hover:cursor-pointer p-2 '>Reply </button>
                 </div>
                 
                 </div>
             </div>
          ))}

            
        </div>
    </div>

    <div className="right w-1/3 mt-1 ">

          {recommended && recommended.map((item,index) => (
              <Link 
                    to={`/play-video/${item.snippet.categoryId}/${item.id}`}
                    key={index}
                    className='flex gap-1.5 hover:cursor-pointer my-4'
                >
              <div className='w-[230px] rounded-2xl'>
                  <img src={item.snippet.thumbnails.medium.url} className=' w-full rounded-2xl pl-1'/>
              </div>

              <div>
                  <h2 className='font-sans font-medium text-lg pl-1'>
                      {item.snippet.title}
                  </h2>

                  <div>
                  <p className='font-sans text-sm text-gray-400 font-semibold pl-1'>{item.snippet.channelTitle}</p>
                  </div>
                  <div className='font-sans text-sm text-gray-400 font-semibold pl-1'>
                      <span>{converter(item.statistics.viewCount)}</span>
                      &bull;
                      <span>{moment(item.snippet.publishedAt).fromNow()}</span>
                  </div>
              </div>

              
      </Link >
          ))}
            
    </div>
    </div>
    </>
   

    
  )
}

export default Video
