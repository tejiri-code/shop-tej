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
import { Link } from "react-router-dom";
import twitter from './images/twitter.png'
import facebook from './images/facebook.png'
import ig from './images/ig.png'
import git from './images/git.png'
import cards from './images/cards.png'
import { FaCheckCircle } from "react-icons/fa";


const main = () => {
  return (
    <div className=' overflow-x-hidden '>

      <Navbar />

      <div className='bg-[#F2F0F1] block lg:flex object-fill pt-5'>
        <div className='lg:w-1/2 w-fit px-2 lg:px-5 text-wrap m-auto gap-8'>
          <h1 className=" text-4xl lg:text-7xl font-extrabold text-left pb-6 ">FIND CLOTHES<br /> THAT MATCHES<br /> YOUR STYLE</h1>
          <p className="text-left text-black opacity-60 text-xs lg:text-xl  mt-2 pb-5">Browse through our diverse range of meticulously crafted<br /> garments, designed to bring out your individuality and<br /> cater to your sense of style.</p>
          <button className='border border-black w-full lg:w-fit px-8 text-white font-extralight bg-black py-2 rounded-3xl'>Shop Now</button>
          <div className='flex my-5  flex-wrap'>
            <div className='flex mx-auto lg:mx-0'>
              <div>
                <h1 className='lg:text-3xl text-xl font-bold pt-5'>200+</h1>
                <p className=' text-black font-thin opacity-60'> International Brands</p>
              </div>
              <div className=' gap-4 px-4 pt-5'>
                <div className='border  bg-center pt-5 border-black opacity-10 w-1/4 h-16  rounded-lg'>
                </div>
              </div>
            </div>

            <div className='flex '>
              <div>
                <h1 className='lg:text-3xl text-xl font-bold pt-5'>2,000+</h1>
                <p className=' text-black font-thin opacity-60'> High-Quality Products</p>
              </div>
              <div className='hidden lg:flex gap-4 px-4 pt-5'>
                <div className='border  bg-center pt-5 border-black opacity-10 w-1/4 h-16  rounded-lg'>
                </div>
              </div>
            </div>
            <div className='flex justify-center w-full lg:w-fit  lg:justify-start'>
              <div>
                <h1 className='lg:text-3xl text-xl  font-bold pt-5'>30,000+</h1>
                <p className=' font-thin text-black opacity-60'> Happy Customers</p>
              </div>
              <div className=' hidden lg:flex gap-4 px-4 pt-5'>
                <div className='border  bg-center pt-5 border-black opacity-10 w-1/4 h-16  rounded-lg'>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='object-cover flex '>
          <img
            src={girl}
            alt="Group 8"
            className=""
          />
        </div>
      </div>

      <div className='bg-black h-20 flex justify-center items-center overflow-x-scroll'>
        <div className='mx-2 lg:mx-auto'>
          <img
            src={versace}
            alt="Versace"
            className='h-full'
          />
        </div>
        <div className='mx-2 lg:mx-auto'>
          <img
            src={zara}
            alt="Zara"
            className='h-full'
          />
        </div>
        <div className='mx-2 lg:mx-auto'>
          <img
            src={gucci}
            alt="Gucci"
            className='h-full'
          />
        </div>
        <div className='mx-2 lg:mx-auto'>
          <img
            src={prada}
            alt="Prada"
            className='h-full'
          />
        </div>
        <div className='mx-2 lg:mx-auto'>
          <img
            src={ck}
            alt="Calvin Klein"
            className='h-full'
          />
        </div>
      </div>


      <div className='bg-[#fff] my-14 px-4'>
        <h1 className='text-4xl font-extrabold my-5 text-center'>NEW ARRIVALS</h1>
        <div className='flex  gap-4'>
          <div className='w-full md:w-1/2 lg:w-1/4 text-center mb-8'>
            <img
              src={green}
              alt="Green T-Shirt"
              className="rounded-lg mx-auto"
            />
            <h1 className='text-xs lg:text-base font-semibold'>T-SHIRT WITH TAPE DETAILS</h1>
            <div className='flex justify-center'>
              <FaStar size={25} color='#FFC633' />
              <FaStar size={25} color='#FFC633' />
              <FaStar size={25} color='#FFC633' />
              <FaStar size={25} color='#FFC633' />
              <FaStarHalf size={25} color='#FFC633' />
              <h1 className=' font-thin'>4.5/5</h1>
            </div>
            <h1 className='font-bold'>$120</h1>
          </div>

          <div className='w-full md:w-1/2 lg:w-1/4 text-center mb-8'>
            <img
              src={jeans}
              alt="Skinny Fit Jeans"
              className="rounded-lg mx-auto"
            />
            <h1 className='text-xs lg:text-base font-semibold'>SKINNY FIT JEANS</h1>
            <div className='flex justify-center'>
              <FaStar size={25} color='#FFC633' />
              <FaStar size={25} color='#FFC633' />
              <FaStar size={25} color='#FFC633' />
              <FaStarHalf size={25} color='#FFC633' />
              <h1 className='font-thin'>3.5/5</h1>
            </div>
            <div className='flex items-center justify-center gap-3'>
              <h1 className='font-bold'>$240</h1>
              <h1 className='font-bold line-through text-black opacity-40'>$260</h1>
              <h1 className='border p-1 rounded-2xl bg-red-100 text-[#ff3333] text-xs'>-20%</h1>
            </div>
          </div>

          <div className='hidden lg:block w-full md:w-1/2 lg:w-1/4 text-center mb-8'>
            <img
              src={flannel}
              alt="Checkered Shirt"
              className="rounded-lg mx-auto"
            />
            <h1 className='font-semibold'>CHECKERED SHIRT</h1>
            <div className='flex justify-center'>
              <FaStar size={25} color='#FFC633' />
              <FaStar size={25} color='#FFC633' />
              <FaStar size={25} color='#FFC633' />
              <FaStar size={25} color='#FFC633' />
              <FaStarHalf size={25} color='#FFC633' />
              <h1 className='font-thin'>4.5/5</h1>
            </div>
            <h1 className='font-bold'>$180</h1>
          </div>

          <div className=' hidden lg:block w-full md:w-1/2 lg:w-1/4 text-center mb-8'>
            <img
              src={orange}
              alt="Sleeve Striped T-Shirt"
              className="rounded-lg mx-auto"
            />
            <h1 className='font-semibold'>SLEEVE STRIPED T-SHIRT</h1>
            <div className='flex justify-center'>
              <FaStar size={25} color='#FFC633' />
              <FaStar size={25} color='#FFC633' />
              <FaStar size={25} color='#FFC633' />
              <FaStar size={25} color='#FFC633' />
              <FaStarHalf size={25} color='#FFC633' />
              <h1 className='font-thin'>4.5/5</h1>
            </div>
            <div className='flex items-center justify-center gap-3'>
              <h1 className='font-bold'>$130</h1>
              <h1 className='font-bold line-through text-black opacity-40'>$160</h1>
              <h1 className='border p-1 rounded-2xl bg-red-100 text-[#ff3333] text-xs'>-30%</h1>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <button className='border border-black-10 px-14 text-black font-normal bg-white py-2 rounded-3xl'>View All</button>
        </div>
      </div>


      <hr className=' bg-black opacity-10 h-1 w-3/4 justify-center m-auto my-14'></hr>

      <div className='bg-[#fff] my-14 px-4'>
        <h1 className='text-4xl font-extrabold my-5 text-center'>TOP SELLERS</h1>
        <div className='flex  gap-4'>
          <div className='w-full md:w-1/2 lg:w-1/4 text-center mb-8'>
            <img
              src={greenstriped}
              alt="Vertical Striped Shirt"
              className="rounded-lg mx-auto"
            />
            <h1 className='font-semibold text-xs lg:text-base'>VERTICAL STRIPED SHIRT</h1>
            <div className='flex justify-center'>
              <FaStar size={25} color='#FFC633' />
              <FaStar size={25} color='#FFC633' />
              <FaStar size={25} color='#FFC633' />
              <FaStar size={25} color='#FFC633' />
              <FaStar size={25} color='#FFC633' />
              <h1 className='px-2 font-thin'>5/5</h1>
            </div>
            <div className='flex items-center justify-center gap-3'>
              <h1 className='font-bold'>$212</h1>
              <h1 className='font-bold line-through text-black opacity-40'>$232</h1>
              <h1 className='border p-1 rounded-2xl bg-red-100 text-[#ff3333] text-xs'>-20%</h1>
            </div>
          </div>

          <div className='w-full md:w-1/2 lg:w-1/4 text-center mb-8'>
            <img
              src={courageorange}
              alt="Courage Graphic T-Shirt"
              className="rounded-lg mx-auto"
            />
            <h1 className='font-semibold text-xs lg:text-base'>COURAGE GRAPHIC T-SHIRT</h1>
            <div className='flex justify-center'>
              <FaStar size={25} color='#FFC633' />
              <FaStar size={25} color='#FFC633' />
              <FaStar size={25} color='#FFC633' />
              <FaStar size={25} color='#FFC633' />
              <h1 className='px-2 font-thin'>4.0/5</h1>
            </div>
            <div className='flex items-center justify-center gap-3'>
              <h1 className='font-bold'>$145</h1>
            </div>
          </div>

          <div className=' hidden lg:block w-full md:w-1/2 lg:w-1/4 text-center mb-8'>
            <img
              src={jorts}
              alt="Loose Fit Bermuda Shorts"
              className="rounded-lg mx-auto"
            />
            <h1 className='font-semibold'>LOOSE FIT BERMUDA SHORTS</h1>
            <div className='flex justify-center'>
              <FaStar size={25} color='#FFC633' />
              <FaStar size={25} color='#FFC633' />
              <FaStar size={25} color='#FFC633' />
              <h1 className='px-2 font-thin'>3.0/5</h1>
            </div>
            <h1 className='font-bold'>$80</h1>
          </div>

          <div className='hidden lg:block w-full md:w-1/2 lg:w-1/4 text-center mb-8'>
            <img
              src={blackjeans}
              alt="Faded Skinny Jeans"
              className="rounded-lg mx-auto"
            />
            <h1 className='font-semibold'>FADED SKINNY JEANS</h1>
            <div className='flex justify-center'>
              <FaStar size={25} color='#FFC633' />
              <FaStar size={25} color='#FFC633' />
              <FaStar size={25} color='#FFC633' />
              <FaStar size={25} color='#FFC633' />
              <FaStarHalf size={25} color='#FFC633' />
              <h1 className='font-thin'>4.5/5</h1>
            </div>
            <div className='flex items-center justify-center gap-3'>
              <h1 className='font-bold'>$210</h1>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <button className='border border-black-10 px-14 text-black font-normal bg-white py-2 rounded-3xl'>View All</button>
        </div>
      </div>


      <div className='bg-[#F0F0F0] border rounded-lg mx-auto my-14 px-4 py-8'>
        <h1 className='text-4xl font-extrabold my-5 text-center'>BROWSE BY DRESS STYLE</h1>
        <div className='flex flex-wrap justify-center gap-5'>
          <img
            src={casual}
            alt="Casual Dress"
            className="rounded-lg mb-5"
          />
          <img
            src={formal}
            alt="Formal Dress"
            className="rounded-lg mb-5"
          />
          <img
            src={party}
            alt="Party Dress"
            className="rounded-lg mb-5"
          />
          <img
            src={gym}
            alt="Gym Dress"
            className="rounded-lg mb-5"
          />
        </div>
      </div>

      <div className='my-14 px-4'>
        <div className='mx-2 flex justify-between items-center'>
          <h1 className='text-4xl font-extrabold my-5'>OUR HAPPY CUSTOMERS</h1>
          <div className='flex gap-5'>
            <IoArrowBack size={25} />
            <IoArrowForwardOutline size={25} />
          </div>
        </div>

        <div className='flex flex-row gap-8'>
          <div className='border border-black-10 p-4 rounded-lg'>
            <div className='flex items-center gap-1'>
              <FaStar size={20} color='#FFC633' />
              <FaStar size={20} color='#FFC633' />
              <FaStar size={20} color='#FFC633' />
              <FaStar size={20} color='#FFC633' />
              <FaStar size={20} color='#FFC633' />
            </div>
            <h1 className='font-semibold'>Sarah M. <FaCheckCircle color='green' className='inline-block' /></h1>
            <div className='flex gap-3'>
              <h1 className='font-thin'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."</h1>
            </div>
          </div>

          <div className='hidden lg:block border border-black-10 p-4 rounded-lg'>
            <div className='flex items-center gap-1'>
              <FaStar size={20} color='#FFC633' />
              <FaStar size={20} color='#FFC633' />
              <FaStar size={20} color='#FFC633' />
              <FaStar size={20} color='#FFC633' />
            </div>
            <h1 className='font-semibold'>Alex K. <FaCheckCircle color='green' className='inline-block' /></h1>
            <div className='flex gap-3'>
              <h1 className='font-thin'>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."</h1>
            </div>
          </div>

          <div className='hidden lg:block border border-black-10 p-4 rounded-lg'>
            <div className='flex items-center gap-1'>
              <FaStar size={25} color='#FFC633' />
              <FaStar size={25} color='#FFC633' />
              <FaStar size={25} color='#FFC633' />
            </div>
            <h1 className='font-semibold'>James L. <FaCheckCircle color='green' className='inline-block' /></h1>
            <div className='font-thin'>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.Tej. The selection of clothes is not only diverse but also on-point with the latest trends."</div>
          </div>
        </div>
      </div>


      <div className='bg-black rounded-lg flex lg:flex-row flex-col items-center mx-auto w-3/4 justify-center p-8 -mb-20 relative'>
        <h1 className='text-white text-2xl lg:text-4xl font-extrabold  mb-8'>
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className='grid grid-cols-1 gap-4'>
          <input type='email' className='bg-white rounded-3xl py-2 px-6 mb-2' placeholder='Enter your email address' />
          <button className='bg-white rounded-3xl py-2 px-6'>Subscribe to Newsletter</button>
        </div>
      </div>



      <footer id="contacts" className="bg-[#F0F0F0] text-black ">
        <div className="container mx-auto flex flex-col md:flex-row px-6 py-24 md:py-24">
          <div className="md:w-1/3 mb-6 md:mb-0 md:mr-8">
            <Link className="text-2xl  flex pb-5 font-semibold">
              <h1 className="font-extrabold">SHOP.TEJ</h1>{" "}
            </Link>
            <p className="text-sm text-black mb-6 opacity-60">
              We have clothes that suits your style and <br /> which you’re proud to wear. From <br />women to men.
            </p>
            <p className='flex gap-4'>
              <img
                src={twitter}
                alt="Group 8"
                className=" w-8 h-8"
              />
              <img
                src={facebook}
                alt="Group 8"
                className=" w-8 h-8"
              />
              <img
                src={ig}
                alt="Group 8"
                className=" w-8 h-8"
              />
              <img
                src={git}
                alt="Group 8"
                className="w-8 h-8"
              />

            </p>
          </div>
          <div className=' grid grid-cols-2 lg:flex gap-20'>
            <div className="md:w-1/4 ">
              <h1 className="text-xl font-light mb-4">COMPANY</h1>
              <ul className="text-sm">
                <li className="py-1 font-light text-[#000] opacity-60">About</li>
                <li className="py-1 font-light text-[#000] opacity-60">Features</li>
                <li className="py-1 font-light text-[#000] opacity-60">Works</li>
                <li className="py-1 font-light text-[#000] opacity-60">Career</li>

              </ul>
            </div>
            <div className="md:w-1/4 mx-auto">
              <h1 className="text-xl font-light mb-4">HELP</h1>
              <ul className="text-sm">
                <li className="py-1 font-light text-[#000] opacity-60">Account</li>
                <li className="py-1 font-light text-[#000] opacity-60">Delivery Details</li>
                <li className="py-1 font-light text-[#000] opacity-60">Terms & Conditions</li>
                <li className="py-1 font-light text-[#000] opacity-60">Privacy Policy</li>

              </ul>
            </div>
            <div className="md:w-1/4">
              <h1 className="text-xl font-light mb-4">FAQ</h1>
              <ul className="text-sm">
                <li className="py-1 font-light text-[#000] opacity-60">Account</li>
                <li className="py-1 font-light text-[#000] opacity-60">Manage Deliveries</li>
                <li className="py-1 font-light text-[#000] opacity-60">Orders</li>
                <li className="py-1 font-light text-[#000] opacity-60">Payments</li>

              </ul>
            </div>
            <div className="md:w-1/4">
              <h1 className="text-xl font-light mb-4">RESOURCES</h1>
              <ul className="text-sm">
                <li className="py-1 font-light text-[#000] opacity-60">Free eBooks</li>
                <li className="py-1 font-light text-[#000] opacity-60">Development Tutorial</li>
                <li className="py-1 font-light text-[#000] opacity-60">How to - Blog</li>
                <li className="py-1 font-light text-[#000] opacity-60">Youtube Playlist</li>

              </ul>
            </div>
          </div>
        </div>
        <hr className=' bg-black opacity-10 h-1 w-5/6 justify-center m-auto  '></hr>
        <div className='block lg:flex justify-between text-center mx-4 sm:mx-32 py-5'>
          <h1 className='text-black font-thin opacity-60'>Shop.tej © 2000-2021, All rights reserved</h1>
          <img src={cards} alt="Accepted Cards" className="h-16" />
        </div>


      </footer>

    </div>
  )
}

export default main