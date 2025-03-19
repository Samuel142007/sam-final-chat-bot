import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaFacebook, FaStar, FaPodcast, FaToggleOff, FaGift, FaDonate, FaNewspaper, FaAlignCenter, FaChurch } from 'react-icons/fa'
import { FaNairaSign, FaPeopleGroup, FaRegHandSpock } from 'react-icons/fa6'
import { TbFaceIdError } from 'react-icons/tb'
function App() {
  const [c] = useState(0)

  return (
    <>
    <div className="h-150 sm:h-120 bg-black/70 bg-[url('/brown.jpg')] bg-blend-darken bg-cover">
    <nav className="flex justify-between">
    <img className="h-20 w-30 pl-5 pt-2" src="/cac logo.png" alt="cac logo" />
    <div className="">
      <ul className=" flex pt-5 text-[15px] text-white">
        <li className="pl-8 hover:text-orange-600 transition-all duration-400 font-sans-serif ">HOME</li>
        <li className="pl-8 hover:text-orange-600 transition-all duration-400 ">WHO WE ARE</li>
        <li className="pl-8 hover:text-orange-600 transition-all duration-400 ">WHAT WE DO</li>
        <li className="pl-8 hover:text-orange-600 transition-all duration-400 ">SERVICES</li>
        <li className="pl-8 hover:text-orange-600 transition-all duration-400 ">RESOURCES</li>
      </ul>
    </div>
    <div>
      <button className="h-10 w-40 text-white font-bold  hover:bg-orange-400 transition-all duration-500 rounded-[5px] relative right-10 mt-3 bg-orange-600">CONTACT US</button>
    </div>
    </nav>
    <div className="text-center justify-center">
      <h1 className="text-[30px] text-white pt-20">You are welcome to</h1>
      <h2 className="text-[55px] font-bold text-white">CHRIST APOSTOLIC CHURCH</h2>
      <h5 className="text-white">Calvary Cry and Miracle Church</h5>
      <button className="bg-orange-600 w-30 h-10 hover:bg-orange-400 transition-all duration-500 rounded-[5px] text-white font-bold m-5">Join Us</button>
      <h6 className="text-white text-[11px]">Official Website for the Christ Apostolic Church (CCMC )</h6>
    </div>
    </div>
    <div className="text-center p-10 sm:p-20">
      <h1 className="text-3xl sm:text-5xl font-bold">BECOME PART OF OUR COMMUNITY</h1>
    </div>
    <div className="flex flex-col sm:flex-row justify-center sm:justify-center gap-2 ">
      <div className="h-73 w-[330px] sm:w-[300px] ml-7 m-auto sm:m-0 text-center bg-orange-200 rounded-[7px] sm:ml-0  p-5">
        <FaPodcast className="m-auto mt-5 text-3xl"/>
        
        <h1 className="text-3xl font-bold">Prophet Isedowo's Podcasts</h1>
        <p>Click the button below to listen to the Prophet's podcasts.</p>
        <button className="bg-orange-600 w-40 h-10 hover:bg-orange-800 duration-300 transition-all rounded-[7px] text-white mt-2">Click Here</button>
      </div>
      <div className="h-73 w-[330px] sm:w-[300px] ml-7 m-auto sm:m-0 text-center bg-orange-200 rounded-[7px]  sm:ml-0  p-5">
        <FaGift className="m-auto mt-5 text-3xl"/>
        <h1 className="text-3xl  font-bold">ONLINE GIVING</h1>
        <p>Do you want to give to the church? <br /> click the button below to view the Account details.</p>
        <button className="bg-orange-600 w-40 h-10 hover:bg-orange-800 duration-300 transition-all rounded-[7px] text-white mt-2">Click Here</button>
      </div>
      <div className="h-73 w-[330px] sm:w-[300px] ml-7 m-auto sm:m-0 text-center bg-orange-200 rounded-[7px] sm:ml-0   p-5">
        <FaDonate className="m-auto mt-5 text-3xl"/>
        <h1 className="text-3xl font-bold">OFFERINGS</h1>
        <p>Click the button below to pay for your Tithes, Offerings and Vows. God bless you as you do so.</p>
        <button className="bg-orange-600 w-40 h-10 hover:bg-orange-800 duration-300 transition-all rounded-[7px] text-white mt-2">Click Here</button>
      </div>
    </div>
     {/* second div of boxes */}
     <div className="text-center p-5 sm:p-15">
      <h1 className="text-3xl sm:text-5xl font-bold">BECOME PART OF OUR COMMUNITY</h1>
    </div>
    <div className="flex flex-col sm:flex-row justify-center gap-2 ">
      <div className="h-73 w-[330px] sm:w-[300px] ml-7 m-auto sm:m-0 bg-orange-200 text-center rounded-[7px] sm:ml-0  p-5">
      <TbFaceIdError  className="m-auto mt-5 text-3xl"/>
        <h1 className="text-3xl font-bold">Responsibility</h1>
        <p>Will be available soon</p>
        <button className="bg-orange-600 w-40 h-10 hover:bg-orange-800 duration-300 transition-all rounded-[7px] text-white mt-2">Click Here</button>
      </div>
      <div className="h-73 w-[330px] sm:w-[300px] ml-7 m-auto sm:m-0 text-center bg-orange-200 rounded-[7px]  sm:ml-0   p-5">
        <FaChurch className="m-auto mt-5 text-3xl"/>
        <h1 className="text-3xl font-bold">Worship Centers/ Branches</h1>
        <p>Do you want to worship with us?  click the button below to view our branches.</p>
        <button className="bg-orange-600 w-40 h-10 hover:bg-orange-800 duration-300 transition-all rounded-[7px] text-white mt-2">Click Here</button>
      </div>
      <div className="h-73 w-[330px] sm:w-[300px] ml-7 m-auto sm:m-0 text-center bg-orange-200 rounded-[7px]  sm:ml-0   p-5">
        <FaPeopleGroup className="m-auto mt-5 text-3xl"/>
        <h1 className="text-3xl font-bold">House Fellowship Program</h1>
        <p>Click the button below to view our House fellowship centers close to you.</p>
        <button className="bg-orange-600 w-40 h-10 hover:bg-orange-800 duration-300 transition-all rounded-[7px] text-white mt-2">Click Here</button>
      </div>
    </div>
    <div className="text-center">
      <h1 className=" text-3xl sm:text-5xl p-6 sm:p-5 font-bold">BENEFITS OF GIVING YOUR LIFE TO CHRIST</h1>
    </div>
    <div className="flex flex-col  sm:flex-row sm:pl-0 pl-7 justify-center gap-2">
      <div className="h-80 bg-[url('/hand.jpg')] bg-cover w-80 p-5 bg-orange-600 rounded-[7px]">
        <h1 className="font-bold text-[20px] text-center text-white relative top-10 ">Eternal Life</h1>
        <p className="text-white relative top-10">"Whoever believes in the son has eternal life, but whoever rejects the son will not see life, for God's wrath remains on them." -John 3:36</p>
      </div>
      <div className="h-80 w-80 bg-[url('/save.jpg')] bg-cover p-5 bg-orange-600 rounded-[7px]">
        <h1 className="font-bold text-[20px] text-center text-white relative top-10">Forgiveness and Redemption</h1>
        <p className="text-white relative top-10">"If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness." -1 John 1:9</p>
      </div>
      <div className="h-80 w-80 p-5 bg-[url(/et1.jpg)] bg-cover bg-orange-600 rounded-[7px]">
        <h1 className="font-bold text-[20px] text-center text-white relative top-10">Peace and Joy</h1>
        <p className="text-white relative top-10">"i have told you these things, so that in me you may have peace. In this world yo will have trouble, but take heart! I have overcome this world." <br /> -john 16:33</p>
      </div>
      <div className="h-80 w-80 p-5 bg-[url(/et2.jpg)] bg-cover bg-orange-600 rounded-[7px]">
        <h1 className="font-bold text-[20px] text-center text-white relative top-10 ">Guidance and purpose</h1>
        <p className="text-white relative top-10">"I will instruct you and  teach you in the way you should go; <br/>i will counsel you with my loving eye on you." -Psalm 32:8</p>
      </div>
    </div>
    <a hrrf="#">
    <div className="h-50 w-[70vw] hover:w-[71vw] bg-[url('/church.jpeg')] text-center bg-cover transition-all duration-600 justify-center m-auto bg-black/80 bg-blend-darken mt-10 rounded-[10px] sm:pt-5 pt-2">
    <h1 className="text-white font-bold text-[17px] underline sm:text-[25px]">ONLINE GIVING AND DONATIONS</h1>
    <p className="text-white pt-5">Do you want to give or donate to the church? <br />Click the environment or the <span className="text-orange-600"><a href="#">"pay now"</a></span> button</p>
    <button className="bg-amber-600 hover:bg-orange-700 transition-all du h-10 w-[100px] rounded-[7px] cursor-pointer">Pay Now</button>
    </div>
    </a>
    </> 
  )
}

export default App
