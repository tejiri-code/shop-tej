import React from 'react'
import Navbar from './navbar'
import girl from './images/boygirl.png'
import versace from './images/versace.png'
import gucci from './images/gucci.png'
import zara from './images/zara.png'
import prada from './images/prada.png'
import ck from './images/CK.png'
import green from './images/greenshirt.png'
import jeans from './images/bluejeans.png'
import flannel from './images/flannel.png'
import orange from './images/orangeshirt.png'
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import greenstriped from './images/greenstriped.png'
import courageorange from './images/courageorange.png'
import jorts from './images/jorts.png'
import blackjeans from './images/blackjeans.png'
import casual from './images/casual.png'
import formal from './images/formal.png'
import party from './images/party.png'
import gym from './images/gym.png'
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";


const main = () => {
  return (
    <div>

 <Navbar/>

 <div className='bg-[#F2F0F1] flex object-fill pt-5'>
    <div className='w-1/2 pl-5  m-auto gap-8'>
    <h1 className=" text-7xl font-extrabold text-left pb-6 ">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
    <p className="text-left text-black opacity-60  mt-2 pb-5">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
    <button className='border border-black px-8 text-white font-extralight bg-black py-2 rounded-3xl'>Shop Now</button>
    <div className='flex  my-auto mt-5'>
        <div className='flex'>
        <div>
        <h1 className='text-3xl font-bold pt-5'>200+</h1>
        <p className=' text-black opacity-60'> International Brands</p>
        </div>
        <div className=' gap-4 px-4 pt-5'>
            <div className='border  bg-center pt-5 border-black opacity-10 w-1/4 h-16  rounded-lg'>
        </div>
    </div>
    </div>

    <div className='flex'>
        <div>
        <h1 className='text-3xl font-bold pt-5'>2,000+</h1>
        <p className=' text-black opacity-60'> High-Quality Products</p>
        </div>
        <div className=' gap-4 px-4 pt-5'>
            <div className='border  bg-center pt-5 border-black opacity-10 w-1/4 h-16  rounded-lg'>
        </div>
    </div>
    </div>
    <div className='flex'>
        <div>
        <h1 className='text-3xl font-bold pt-5'>30,000+</h1>
        <p className=' text-black opacity-60'> Happy Customers</p>
        </div>
        <div className=' gap-4 px-4 pt-5'>
            <div className='border  bg-center pt-5 border-black opacity-10 w-1/4 h-16  rounded-lg'>
        </div>
    </div>
    </div>
    </div>
    </div>
    <div className='object-cover'>
    <img
          src={girl}
          alt="Group 8"
          className=""
        />
    </div>
 </div>

<div className='bg-black object-contain m-auto h-20 flex'>
    <div className='m-auto'>
  <img
          src={versace}
          alt="Group 8"
          className=""
        />
        </div>
        <div className='m-auto'>
         <img
          src={zara}
          alt="Group 8"
          className=""
        />
        </div>
        <div className='m-auto'>
         <img
          src={gucci}
          alt="Group 8"
          className=""
        />
        </div>
        <div className='m-auto'>
         <img
          src={prada}
          alt="Group 8"
          className=""
        />
        </div>
        <div className='m-auto'>
         <img
          src={ck}
          alt="Group 8"
          className=""
        />
    </div>
    

</div>

<div className='bg-[#fff] my-14'>
<h1 className='text-4xl font-extrabold my-5 text-center'>NEW ARRIVALS</h1>
<div className='flex gap-8 m-auto w-3/4'>
<div className='  m-auto'>
<img
          src={green}
          alt="Group 8"
          className=" rounded-lg "
        />
        <h1 className=' font-semibold'>T-SHIRT WITH TAPE DETAILS</h1>
        <div className='flex'>    <FaStar
             size={25} color='#FFC633' />  <FaStar
             size={25} color='#FFC633' /> <FaStar
             size={25} color='#FFC633' /> <FaStar
             size={25} color='#FFC633' /> <FaStarHalf  size={25} color='#FFC633' /> <h1 className=' font-thin'>4.5/5</h1></div>
     <h1 className=' font-bold'> $120</h1>
</div>

<div className='  m-auto'>
<img
          src={jeans}
          alt="Group 8"
          className=" rounded-lg"
        />
        <h1 className=' font-semibold'>SKINNY FIT JEANS</h1>
        <div className='flex'>    <FaStar
             size={25} color='#FFC633' /> <FaStar
             size={25} color='#FFC633' /> <FaStar
             size={25} color='#FFC633' /> <FaStarHalf  size={25} color='#FFC633' /> <h1 className=' font-thin'>3.5/5</h1></div>
             <div className='flex gap-3'>
      <h1 className=' font-bold'> $240</h1>
        <h1 className=' font-bold line-through text-black opacity-40'> $260</h1>
        <h1 className='border p-1 rounded-2xl  bg-red-100  text-[#ff3333] text-xs'> -20% </h1>
      </div>
</div>
<div className='  m-auto'>
<img
          src={flannel}
          alt="Group 8"
          className=" rounded-lg"
        />
        <h1 className=' font-semibold'>CHECKERED SHIRT</h1>
        <div className='flex'>    <FaStar
             size={25} color='#FFC633' />  <FaStar
             size={25} color='#FFC633' /> <FaStar
             size={25} color='#FFC633' /> <FaStar
             size={25} color='#FFC633' /> <FaStarHalf  size={25} color='#FFC633' /> <h1 className=' font-thin'>4.5/5</h1></div>
      <h1 className=' font-bold'> $180</h1>
</div>
<div className='  m-auto'>
<img
          src={orange}
          alt="Group 8"
          className=" rounded-lg"
        />
        <h1 className=' font-semibold'>SLEEVE STRIPED T-SHIRT</h1>
        <div className='flex'>    <FaStar
             size={25} color='#FFC633' />  <FaStar
             size={25} color='#FFC633' /> <FaStar
             size={25} color='#FFC633' /> <FaStar
             size={25} color='#FFC633' /> <FaStarHalf  size={25} color='#FFC633' /> <h1 className=' font-thin'>4.5/5</h1></div>
     <div className='flex gap-3'>
      <h1 className=' font-bold'> $130</h1>
        <h1 className=' font-bold line-through text-black opacity-40'> $160</h1>
        <h1 className='border p-1 rounded-2xl  bg-red-100  text-[#ff3333] text-xs'> -30% </h1>
      </div>
</div>

</div>
<div className='flex justify-center py-2'>
    <button className='border border-black-10 px-14 m-auto text-black font-normal bg-white py-2 rounded-3xl'>View All</button>
</div>
</div>

<hr className=' bg-black opacity-10 h-1 w-3/4 justify-center m-auto my-14'></hr>

<div className='bg-[#fff my-14]'>
<h1 className='text-4xl font-extrabold my-5 text-center'>TOP SELLERS</h1>
<div className='flex gap-8 m-auto w-3/4'>
<div className='  m-auto'>
<img
          src={greenstriped}
          alt="Group 8"
          className=" rounded-lg "
        />
        <h1 className=' font-semibold'>VERTICAL STRIPED SHIRT</h1>
        <div className='flex'>    <FaStar
             size={25} color='#FFC633' />  <FaStar
             size={25} color='#FFC633' /> <FaStar
             size={25} color='#FFC633' /> <FaStar
             size={25} color='#FFC633' /> <FaStar size={25} color='#FFC633' /> <h1 className='px-2  font-thin'>5/5</h1></div>
             <div className='flex gap-3'>
     <h1 className=' font-bold'> $212</h1>
     <h1 className=' font-bold line-through text-black opacity-40'> $232</h1>
        <h1 className='border p-1 rounded-2xl  bg-red-100  text-[#ff3333] text-xs'> -20% </h1>
        </div>
</div>

<div className='  m-auto'>
<img
          src={courageorange}
          alt="Group 8"
          className=" rounded-lg"
        />
        <h1 className=' font-semibold'>COURAGE GRAPHIC T-SHIRT</h1>
        <div className='flex'>    <FaStar
             size={25} color='#FFC633' /> <FaStar
             size={25} color='#FFC633' /> <FaStar
             size={25} color='#FFC633' /> <FaStar  size={25} color='#FFC633' /> <h1 className='px-2  font-thin'>4.0/5</h1></div>
             <div className='flex gap-3'>
      <h1 className=' font-bold'> $145</h1>
       
      </div>
</div>
<div className='  m-auto'>
<img
          src={jorts}
          alt="Group 8"
          className=" rounded-lg"
        />
        <h1 className=' font-semibold'>LOOSE FIT BERMUDA SHORTS</h1>
        <div className='flex'>    <FaStar
             size={25} color='#FFC633' />  <FaStar
             size={25} color='#FFC633' /> <FaStar
             size={25} color='#FFC633' />  <h1 className='px-2 font-thin'>3.0/5</h1></div>
      <h1 className=' font-bold'> $80</h1>
</div>
<div className='  m-auto'>
<img
          src={blackjeans}
          alt="Group 8"
          className=" rounded-lg"
        />
        <h1 className=' font-semibold'>FADED SKINNY JEANS</h1>
        <div className='flex'>    <FaStar
             size={25} color='#FFC633' />  <FaStar
             size={25} color='#FFC633' /> <FaStar
             size={25} color='#FFC633' /> <FaStar
             size={25} color='#FFC633' /> <FaStarHalf  size={25} color='#FFC633' /> <h1 className=' font-thin'>4.5/5</h1></div>
     <div className='flex gap-3'>
      <h1 className=' font-bold'> $210</h1>
       
      </div>
</div>

</div>
<div className='flex justify-center py-2'>
    <button className='border border-black-10 px-14 m-auto text-black font-normal bg-white py-2 rounded-3xl'>View All</button>
</div>
    </div>

    <div className='bg-[#F0F0F0] border rounded-lg w-fit justify-center my-14 mx-auto'>
    <h1 className='text-4xl font-extrabold my-5 text-center'>BROWSE BY DRESS STYLE</h1>
    <div className=' justify-center'>
    <div className='flex gap-5 px-10 py-5 '>
    <img
          src={casual}
          alt="Group 8"
          className=" rounded-lg "
        />
        <img
          src={formal}
          alt="Group 8"
          className=" rounded-lg "
        />
    </div>

    <div className='flex gap-5 px-10 py-5'>
    <img
          src={party}
          alt="Group 8"
          className=" rounded-lg "
        />
        <img
          src={gym}
          alt="Group 8"
          className=" rounded-lg "
        />
    </div>
</div>
    </div>


<div className=' '>
    <div className=' mx-32 justify-between flex'>
        <h1 className='text-4xl font-extrabold my-5 text-left'> OUR HAPPY CUSTOMERS</h1>
        <div className='flex gap-5 my-auto justify-end'>
            <IoArrowBack size={25} />
            <IoArrowForwardOutline size={25} />
        </div>
    </div>

    <div className='flex gap-8 m-auto w-3/4'>
<div className='  m-auto border border-black-10 p-4 rounded-lg'>

        
        <div className='flex'>    <FaStar
             size={20} color='#FFC633' />  <FaStar
             size={20} color='#FFC633' /> <FaStar
             size={20} color='#FFC633' /> <FaStar
             size={20} color='#FFC633' /> <FaStar size={20} color='#FFC633' /> </div>
             <h1 className=' font-semibold'>Sarah M.</h1>
             <div className='flex gap-3'>
                
     <h1 className=' font-thin'> "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</h1>
   
        </div>
</div>

<div className=' m-auto border border-black-10 p-4 rounded-lg'>

 
        <div className='flex'>    <FaStar
             size={20} color='#FFC633' /> <FaStar
             size={20} color='#FFC633' /> <FaStar
             size={20} color='#FFC633' /> <FaStar  size={20} color='#FFC633' /></div>
                    <h1 className=' font-semibold'>Alex K.</h1>
             <div className='flex gap-3'>

      <h1 className=' font-thin'> "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</h1>
       
      </div>
</div>
<div className=' m-auto border border-black-10 p-4 rounded-lg'>

  
        <div className='flex'>    <FaStar
             size={25} color='#FFC633' />  <FaStar
             size={25} color='#FFC633' /> <FaStar
             size={25} color='#FFC633' />  </div>
                   <h1 className=' font-semibold'>James L.</h1>
      <h1 className=' font-thin'>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.Tej. The selection of clothes is not only diverse but also on-point with the latest trends.”</h1>
</div>
{/* <div className='  m-auto border border-black-10 p-4 rounded-lg'>

        <h1 className=' font-semibold'>FADED SKINNY JEANS</h1>
        <div className='flex'>    <FaStar
             size={25} color='#FFC633' />  <FaStar
             size={25} color='#FFC633' /> <FaStar
             size={25} color='#FFC633' /> <FaStar
             size={25} color='#FFC633' /> <FaStarHalf  size={25} color='#FFC633' /> <h1 className=' font-thin'>4.5/5</h1></div>
     <div className='flex gap-3'>
      <h1 className=' font-bold'> $210</h1>
       
      </div>
</div> */}

</div>
</div>

<div className='bg-black rounded-lg '>
<div>
    <h1>
    STAY UPTO DATE ABOUT OUR LATEST OFFERS
    </h1>
</div>

</div>

    </div>
  )
}

export default main