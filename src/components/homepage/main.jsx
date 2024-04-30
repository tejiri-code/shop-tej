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
<div className='bg-[#fff]'>
<h1 className='text-4xl font-extrabold my-5 text-center'>NEW ARRIVALS</h1>
<div className='flex gap-8 m-auto'>
<div className='  m-auto'>
<img
          src={green}
          alt="Group 8"
          className=" rounded-lg "
        />
        <h1 className=' font-semibold'>T-SHIRT WITH TAPE DETAILS</h1>
</div>
<div className='  m-auto'>
<img
          src={jeans}
          alt="Group 8"
          className=" rounded-lg"
        />
        <h1 className=' font-semibold'>T-SHIRT WITH TAPE DETAILS</h1>
</div>
<div className='  m-auto'>
<img
          src={flannel}
          alt="Group 8"
          className=" rounded-lg"
        />
        <h1 className=' font-semibold'>T-SHIRT WITH TAPE DETAILS</h1>
</div>
<div className='  m-auto'>
<img
          src={orange}
          alt="Group 8"
          className=" rounded-lg"
        />
        <h1 className=' font-semibold'>T-SHIRT WITH TAPE DETAILS</h1>
</div>

</div>
</div>
    </div>
  )
}

export default main