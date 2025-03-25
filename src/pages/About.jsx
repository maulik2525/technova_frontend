import { Button} from "flowbite-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
     <main className="w-full bg-[#edf5ff]">
        <section className="relative w-full ">
          <div className="relative z-10 w-full bg-white pt-20 lg:pt-l24 xl:pt-28 2xl:pt-32">
              <div className="max-w-[1480px] w-full px-5 mx-auto">
                <div className="flex justify-between flex-wrap md:flex-nowrap">
                  <div className="text-black space-y-5  p-5 mx-auto sm:mx-0 h-auto">
                    <div className="flex items-center space-x-2 zoom-in-zoom-out1">
                      <p className="bg-[#2aceb6] w-14 h-0.5"></p>
                      <span className="text-sm md:text-base lg:text-lg font-medium lg:font-semibold text-[#2aceb6] tracking-wider montserrat">Ecommrce groth</span>
                    </div>
                    <h2 className= "max-w-[645px] w-full text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800 fraunces">Helping <span className="text-[#f65a8a] uppercase underline">blogging</span> in businesses double their conversion rate
                    <span className="block text-[#f65a8a] fraunces">(+ Conversion Secrets)</span></h2>
                    <div className="">
                      <p className="max-w-[500px] w-full text-base lg:text-lg font-normal text-gray-800 fraunces">We’ll have our conversion rate specialists analyze your website—and tell you what could be slowing down your conversions.</p>
                      <Link to="/search">
                        <button className="btn2 text-sm lg:text-base font-normal lg:font-medium hover:text-white text-[#2aceb6] hover:bg-gradient-to-r from-[#2aceb6] to-blue-400 bg-transparent border-2 border-[#2aceb6] rounded-2xl hover:rounded-2xl montserrat px-5 lg:px-7 py-1.5 lg:py-2 duration-700 transition-all overflow-hidden zoom-in-zoom-out mt-2.5" type="button">
                          <span className="absolute inset-0 text-sm lg:text-base font-normal lg:font-medium text-[#2aceb6] hover:text-white bg-[#2aceb6] hover:bg-transparent rounded-2xl hover:rounded-2xl montserrat px-5 lg:px-7 py-1.5 lg:py-2 duration-700 transition-all zoom-in-zoom-out"></span>
                          <span className="absolute inset-0 flex justify-center items-center font-bold"> 
                            See All
                          </span>
                          See All
                        </button>
                      </Link>   
                  </div> 
                </div>
                <div className="p-5">
                <video className="rounded" autoPlay loop muted > <source src="/herovedeo.mp4" type="video/mp4" /> </video>
                </div>
              </div>
            </div>
          </div>
            {/* <img src=".bannerimg.avif" alt="" className="absolute inset-0 object-cover opacity-50 w-full h-full"/> */}
        </section>
        <section className="w-full bg-[#edf5ff] py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 2xl:py-24">
            <div className="max-w-[1480px] w-full px-5 mx-auto">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium md:font-semibold lg:font-bold xl:font-extrabold text-[#2aceb6] overpass text-center mb-2 sm:mb-4 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-12">Results we’ve delivered for eCommerce businesses
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="border bg-white rounded-lg pt-5 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-12 px-2.5 md:px-3 lg:px-4 xl:px-5 pb-3 sm:pb-4 md:pb-5 lg:pb-6 xl:pb-7 space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-9 xl:space-y-10 h-auto">
                    <h3 className="text-base lg:text-lg xl:text-xl font-medium md:font-semibold xl:font-bold text-[#3f3f3f] text-center leading-6 poppins">
                        Tru Tech Tools drove <span className="text-[#f65a8a] underline py-0.5 px-3 montserrat">marketing RoIto</span> 23X
                    </h3>
                    <ul className="flex flex-col items-center text-base font-medium pl-5 space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6 fraunces">
                      <li className="list-disc text-xs md:text-sm xl:text-base font-normal md:font-medium xl:font-semibold text-[#3f3f3f] poppins ">Improved conversion rates with on-site A/B tests</li>
                      <li className="list-disc text-xs md:text-sm xl:text-base font-normal md:font-medium xl:font-semibold text-[#3f3f3f] poppins ">Improved checkout rate with personalization</li>
                    </ul>
                </div>
                <div className="border bg-white rounded-lg pt-5 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-12 px-2.5 md:px-3 lg:px-4 xl:px-5 pb-3 sm:pb-4 md:pb-5 lg:pb-6 xl:pb-7 space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-9 xl:space-y-10 h-auto mx-auto">
                    <h3 className="text-base lg:text-lg xl:text-xl font-medium md:font-semibold xl:font-bold text-[#3f3f3f] text-center leading-6 poppins">
                      Sebastian Cruz Couture increased by 127.63% <span className="text-[#f65a8a] underline py-0.5 px-3 montserrat">customer lifetime value</span> 23X
                    </h3>
                    <ul className="flex flex-col items-center text-base font-medium pl-5 space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6 fraunces">
                      <li className="list-disc text-xs md:text-sm xl:text-base font-normal md:font-medium xl:font-semibold text-[#3f3f3f] poppins">Improved conversion rates with on-site A/B tests</li>
                      <li className="list-disc text-xs md:text-sm xl:text-base font-normal md:font-medium xl:font-semibold text-[#3f3f3f] poppins">Improved checkout rate with personalization</li>
                    </ul>
                </div>
                <div className="border bg-white rounded-lg pt-5 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-12 px-2.5 md:px-3 lg:px-4 xl:px-5 pb-3 sm:pb-4 md:pb-5 lg:pb-6 xl:pb-7 space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-9 xl:space-y-10 h-auto">
                    <h3 className="text-base lg:text-lg xl:text-xl font-medium md:font-semibold xl:font-bold text-[#3f3f3f] text-center leading-6 poppins">
                        Tru Tech Tools drove <span className="text-[#f65a8a] underline py-0.5 px-3 montserrat">marketing RoIto</span> 23X
                    </h3>
                    <ul className="flex flex-col items-center text-base font-medium pl-5 space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6 fraunces">
                      <li className="list-disc text-xs md:text-sm xl:text-base font-normal md:font-medium xl:font-semibold text-[#3f3f3f] poppins">Improved conversion rates with on-site A/B tests</li>
                      <li className="list-disc text-xs md:text-sm xl:text-base font-normal md:font-medium xl:font-semibold text-[#3f3f3f] poppins">Improved checkout rate with personalization</li>
                    </ul>
                </div>
              </div>
            </div>
        </section>    
        <section className="w-full bg-[#222222] py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16">
          <div className="max-w-[1480px] w-full rounded-lg px-5 mx-auto">
            <div className="flex lg:flex-nowrap flex-wrap space-y-5 lg:space-y-0 space-x-0 xl:space-x-8 2xl:space-x-10">
              <div className="w-full lg:w-1/2 space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-5">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-1.5xl xl:text-2xl font-semibold text-white overpass">Get Fresh ideas to boost your conversion rate</h3>
                <span className="block text-sm lg:text-sm text-white font-normal overpass">(stuff that works for hundreds of stores)</span>
                <Link to="/create-post" className="text-blue-500 font-semibold">
                  <button type="button" className="text-xs md:text-sm lg:text-base font-light md:font-noraml lg:font-medium text-white hover:bg-gradient-to-r from-[#2aceb6] to-blue-400 bg-[#222222] rounded-lg lg:rounded-xl xl:rounded-2xl border border-[#2aceb6] poppins duration-500 transition-all py-1 md:py-2 lg:py-3 px-4 md:px-5 lg:px-6">Request a Free Site Audit</button>
                </Link>
              </div>
              <div className="w-full lg:w-1/2 space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-5">
                  <p className="text-xs sm:text-sm lg:text-base xl:text-lg font-medium text-white overpass">"Convertcarts Audit Report was deep and insightful. We never thought they would spend so much time in building and sharing such insightful content, free of cost."</p>
                  <div className="flex items-center space-x-3">
                    <img src="/image.webp" alt="" className="size-12 rounded-full"/>
                    <div className="">
                      <span className="text-xs md:text-sm lg:text-base xl:text-lg:font-normal md:font-medium lg:font-semibold text-[#f65a8a] overpass leading-none">Logan Christopher</span>
                      <span className="block text-xs md:text-sm lg:text-base xl:text-lg:font-normal md:font-medium lg:font-semibold text-white ">Lost Empire Herbs</span>
                    </div>
                  </div>
              </div>
            </div>
          </div>  
        </section>
     </main>
  );
}
