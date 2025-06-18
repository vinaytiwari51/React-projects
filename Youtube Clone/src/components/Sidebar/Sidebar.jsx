import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import subscribe from '../../assets/subscribe .png'
import shorts from '../../assets/short.png'
import next from '../../assets/next.png'
import like from '../../assets/like.png'
import playlist from '../../assets/playlist.png'
import history from '../../assets/history.png'
import watchLater from '../../assets/watchLater.png'
import video from '../../assets/video.png'
import trending from '../../assets/trending.png'
import fashion from '../../assets/fashion.png'
import help from '../../assets/help.png'
import learning from '../../assets/learning.png'
import podcast from '../../assets/podcast.png'
import setting from '../../assets/setting.png'
import feedback from '../../assets/feedback.png'
import report from '../../assets/report.png'
import film from '../../assets/film.png'
import live from '../../assets/live.png'
import news from '../../assets/news.png'
import game from '../../assets/game.png'
import sport from '../../assets/sport.png'
import music from '../../assets/music.png'
import kids from '../../assets/kids.png'
import logo from '../../assets/logo.png'
import bag from '../../assets/bag.png'
import premium from '../../assets/premium.png'
import ytmusic from '../../assets/yt-music.png'

const Sidebar = ({catogery, setCatogery}) => {
  return (
    <div className={` w-1/6 h-full m-2 sidebar `} >
      <div className="first">
        <div className={` flex gap-4 same p-2 rounded-xl `}>
          <img src={home} alt="Home" className='w-6 object-contain' />
          <span className='font-medium text-xl font-sans'>Home</span>
        </div>
        <div className={` flex gap-4 same p-2 rounded-xl ${catogery === 42 ? "active": ""}`} onClick={() => setCatogery(42)}>
          <img src={shorts}  className='w-6 object-contain' />
          <span className='font-medium text-xl font-sans'>Shorts</span>
        </div>
        <div className={` flex gap-4 same p-2 rounded-xl `}>
          <img src={subscribe} className='w-6 object-contain' />
          <span className='font-medium text-xl font-sans'>Subscription</span>
        </div>
        
      </div>
      <hr className='mt-6 border-gray-200 border-[1px]' />

      <div className="second">
      <div className="same rounded-xl flex p-2 gap-4 mt-3 mb-3 items-center ">
        <h2 className='font-medium font-sans text-2xl ml-2'>You </h2>
        <img src={next} className='w-3 object-contain' />
      </div>
      <div className=" flex gap-4 same p-2 rounded-xl">
          <img src={history} className='w-6 object-contain' />
          <span className='font-medium text-xl font-sans'>History</span>
        </div>
      <div className=" flex gap-4 same p-2 rounded-xl">
          <img src={playlist} className='w-6 object-contain' />
          <span className='font-medium text-xl font-sans'>Playlists</span>
        </div>
      <div className=" flex gap-4 same p-2 rounded-xl">
          <img src={video} className='w-6 object-contain' />
          <span className='font-medium text-xl font-sans'>Your videos</span>
        </div>
      <div className=" flex gap-4 same p-2 rounded-xl">
          <img src={watchLater} className='w-6 object-contain' />
          <span className='font-medium text-xl font-sans'>Watch later</span>
        </div>
      <div className=" flex gap-4 same p-2 rounded-xl">
          <img src={like} className='w-6 object-contain' />
          <span className='font-medium text-xl font-sans'>Liked videos</span>
        </div>
      </div>
      <hr className='mt-6 border-gray-200 border-[1px]' />

      <div className="third">
      <div className="same rounded-xl flex p-2 gap-4 mt-3 mb-3 items-center ">
        <h2 className='font-medium font-sans text-2xl ml-2'>Subscription </h2>
      </div>
     
      {/* <div className="bg-[#f2f2f2] rounded-xl flex p-2 gap-4 items-center ">
        <h2 className='font-light font-sans text-2xl ml-2'>Show more</h2>
        <img src={next} className='w-3 object-contain' />
      </div> */}
      </div>
      <hr className='mt-6 border-gray-200 border-[1px]' />

      <div className="forth  rounded-2xl">
          <div className=" rounded-xl flex same p-2 gap-4 mt-3 mb-3 items-center ">
            <h2 className='font-medium font-sans text-2xl ml-2'>Explore </h2>
          </div>

          <div className={` flex gap-4 same p-2 rounded-xl `} onClick={() => setCatogery(0)}>
          <img src={trending}  className='w-6 object-contain' />
          <span className='font-medium text-xl font-sans'>Trending</span>
        </div>
          <div className={` flex gap-4 same p-2 rounded-xl `} >
          <img src={bag}  className='w-6 object-contain' />
          <span className='font-medium text-xl font-sans'>Shopping</span>
        </div>
          <div className={` flex gap-4 same p-2 rounded-xl ${catogery === 10 ? "active" : ""}`} onClick={() => setCatogery(10)}>
          <img src={music}  className='w-6 object-contain' />
          <span className='font-medium text-xl font-sans'>Music</span>
        </div>
          <div className={` flex gap-4 same p-2 rounded-xl ${catogery === 1 ? "active" : ""}`} onClick={() => setCatogery(1)}>
          <img src={film}  className='w-6 object-contain' />
          <span className='font-medium text-xl font-sans'>Films</span>
        </div>
          <div className={` flex gap-4 same p-2 rounded-xl`} >
          <img src={live}  className='w-6 object-contain' />
          <span className='font-medium text-xl font-sans'>Live</span>
        </div>
          <div className={` flex gap-4 same p-2 rounded-xl ${catogery === 20 ? "active" : ""}`} onClick={() => setCatogery(20)}>
          <img src={game}  className='w-6 object-contain' />
          <span className='font-medium text-xl font-sans'>Gaming</span>
        </div>
          <div className={` flex gap-4 same p-2 rounded-xl ${catogery === 25 ? "active" : ""}`} onClick={() => setCatogery(25)}>
          <img src={news} className='w-6 object-contain' />
          <span className='font-medium text-xl font-sans'>News</span>
        </div>
          <div className={` flex gap-4 same p-2 rounded-xl ${catogery === 17 ? "active" : ""}`} onClick={() => setCatogery(17)}>
          <img src={sport} className='w-6 object-contain' />
          <span className='font-medium text-xl font-sans'>Sport</span>
        </div>
          <div className={` flex gap-4 same p-2 rounded-xl ${catogery === 27 ? "active" : ""}`} onClick={() => setCatogery(27)}>
          <img src={learning}  className='w-6 object-contain' />
          <span className='font-medium text-xl font-sans'>Courses</span>
        </div>
          <div className={` flex gap-4 same p-2 rounded-xl ${catogery === 26 ? "active" : ""}`} onClick={() => setCatogery(26)}>
          <img src={fashion} className='w-6 object-contain' />
          <span className='font-medium text-xl font-sans'>Fashion & beauty</span>
        </div>
          <div className={` flex gap-4 same p-2 rounded-xl ${catogery === 24 ? "active" : ""}`} onClick={() => (setCatogery(24) 
          )}>
          <img src={podcast}  className='w-6 object-contain' />
          <span className='font-medium text-xl font-sans'>Podcasts</span>
        </div>


      </div>

      <hr className='mt-6 border-gray-200 border-[1px]' />

      <div className="fifth">

      <div className=" rounded-xl flex same p-2 gap-4 mt-3 mb-3 items-center ">
            <h2 className='font-medium font-sans text-2xl ml-2'>More from YouTube</h2>
          </div>

      <div className=" flex gap-4 same p-2 rounded-xl">
          <img src={premium}  className='w-6 object-contain' />
          <span className='font-medium text-xl font-sans'>YouTube Premium</span>
        </div>
      <div className=" flex gap-4 same p-2 rounded-xl">
          <img src={logo}  className='w-6 object-contain' />
          <span className='font-medium text-xl font-sans'>YouTube Studio</span>
        </div>
      <div className=" flex gap-4 same p-2 rounded-xl">
          <img src={ytmusic}  className='w-6 object-contain' />
          <span className='font-medium text-xl font-sans'>YouTube Music</span>
        </div>
      <div className=" flex gap-4 same p-2 rounded-xl">
          <img src={kids}  className='w-6 object-contain' />
          <span className='font-medium text-xl font-sans'>YouTube Kids</span>
        </div>

      </div>

      <hr className='mt-6 border-gray-200 border-[1px] mb-2' />

      <div className=" flex gap-4 same p-2 rounded-xl">
          <img src={setting}  className='w-6 object-contain' />
          <span className='font-medium text-xl font-sans'>Setting </span>
        </div>
      <div className=" flex gap-4 same p-2 rounded-xl">
          <img src={report}  className='w-6 object-contain' />
          <span className='font-medium text-xl font-sans'>Report history</span>
        </div>
      <div className=" flex gap-4 same p-2 rounded-xl">
          <img src={help}  className='w-6 object-contain' />
          <span className='font-medium text-xl font-sans'>Help</span>
        </div>
      <div className=" flex gap-4 same p-2 rounded-xl">
          <img src={feedback}  className='w-6 object-contain' />
          <span className='font-medium text-xl font-sans'>Send feedback</span>
        </div>

        <hr className='mt-6 border-gray-200 border-[1px] mb-2' />
        <div className="footer">

        
        </div>
    </div>
  )
}

export default Sidebar
