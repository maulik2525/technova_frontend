import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
export default function Home() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/search");
    }
    
  }, [currentUser]);
  return (
    <main className=" bg-white ">
      <section className="relative w-full py-24">
        <div className="relative z-10 max-w-[1480px] w-full px-5 mx-auto">
          <div className="flex items-center justify-center flex-wrap lg:flex-nowrap">
            <div className="w-auto lg:w-1/2">
              <div className="w-full rounded-3xl space-y-5">
                <div className="flex items-center space-x-2 zoom-in-zoom-out1">
                  <p className="bg-[#2aceb6] w-14 h-0.5"></p>
                  <span className="text-lg font-semibold text-[#2aceb6] tracking-wider montserrat">Welcome</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-black fraunces">I’m <span className="text-[#f65a8a]">Tech</span> <span className="text-[#2aceb6]">nova</span></h2>
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium lg:font-semibold text-black fraunces">Developer / Design / Blogger</h3>
                <p className="max-w[400px] lg:max-w-[450px] w-full text-sm lg:text-base font-normal lg:font-medium text-black montserrat">Would you like help structuring your blog categories, setting up a website, or writing a sample blog post</p>
                <Link to="/sign-in">
                  <button className="btn2 text-sm lg:text-base font-normal lg:font-medium hover:text-white text-[#2aceb6] hover:bg-gradient-to-r from-[#2aceb6] to-blue-400 bg-transparent border-2 border-[#2aceb6] rounded-3xl hover:rounded-3xl montserrat px-4 lg:px-5 py-1 lg:py-2 duration-700 transition-all overflow-hidden zoom-in-zoom-out" type="button">
                    <span className="absolute inset-0 text-sm lg:text-base font-normal lg:font-medium text-[#2aceb6] hover:text-black bg-gradient-to-r from-[#2aceb6] to-blue-400 hover:bg-transparent border-2 border-[#2aceb6] rounded-3xl hover:rounded-3xl montserrat px-4 lg:px-5 py-1 lg:py-2 duration-700 transition-all zoom-in-zoom-out"></span>
                    <span className="absolute inset-0 flex justify-center items-center font-semibold lg:font-bold"> 
                      Join Insider
                    </span>
                    Join Insider
                  </button>
                </Link>  
              </div>
            </div>
            <div className="relative w-auto lg:w-1/2 mx-auto md:mx-0 mt-5 sm:mt-7 lg:mt-0">
              <div className="relative w-fit p-5 xl:p-6 mx-auto ">
                <div className="relative p-5 xl:p-6">
                    <img src="/banner.png" alt=""className=" mx-auto"/>
                </div>
              </div>
              <img src="/banner-shape-1.png" alt="" className="absolute inset-0 w-full h-full object-cover" />  
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-black py-10 sm:py12 md:py-14 lg:py-16 xl:py-20 2xl:py-24">
        <div className="max-w-[1480px] w-full px-5 mx-auto">
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold lg:font-bold text-[#f65a8a] text-center">Featured Articles</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-9 2xl:gap-10 mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16">
            <div className="size-[300px] sm:size-[380px] md:size-[400px] xl:size-[420px] bg-blue-50 text-black text-center p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 2xl:p-12 mx-auto rainbow">
              <div className="space-y-3 lg:space-y-5">
                <img src="/icon_01.png" alt="" className="size-10 lg:size-12 mx-auto mb-3 sm:mb-3.5 md:mb-4 lg:mb-5"/>
                <span className="text-lg md:text-xl lg:text-2xl font-semibold lg:font-bold mt-5">SaaS Landing Page Analysis</span>
                <p className="text-sm md:text-base lg:text-lg font-medium">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</p>
              </div>   
            </div>
            <div className="size-[300px] sm:size-[380px] md:size-[400px] xl:size-[420px] bg-blue-50 text-black text-center p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 2xl:p-12 mx-auto rainbow">
              <div className="space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-5">
                <img src="/icon_01.png" alt="" className="size-10 lg:size-12 mx-auto mb-3 sm:mb-3.5 md:mb-4 lg:mb-5"/>
                <span className="text-lg md:text-xl lg:text-2xl font-semibold lg:font-bold mt-3 sm:mt-3.5 md:mt-4 lg:mt-5">Build Designs That Scale</span>
                <p className="text-sm md:text-base lg:text-lg font-medium">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</p>
              </div>
            </div>
            <div className="size-[300px] sm:size-[380px] md:size-[400px] xl:size-[420px] bg-blue-50 text-black text-center p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 2xl:p-12 mx-auto rainbow">
              <div className="space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-5">
                <img src="/icon_01.png" alt="" className="size-10 lg:size-12 mx-auto mb-3 sm:mb-3.5 md:mb-4 lg:mb-5"/>
                <span className="text-lg md:text-xl lg:text-2xl font-semibold lg:font-bold mt-3 sm:mt-3.5 md:mt-4 lg:mt-5">UI/UX Design Based App</span>
                <p className="text-sm md:text-base lg:text-lg font-medium">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</p>
              </div>
            </div>
            <div className="size-[300px] sm:size-[380px] md:size-[400px] xl:size-[420px] bg-blue-50 text-black text-center p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 2xl:p-12 mx-auto rainbow">
              <div className="space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-5">
                <img src="/icon_01.png" alt="" className="size-10 lg:size-12 mx-auto mb-3 sm:mb-3.5 md:mb-4 lg:mb-5"/>
                <span className="text-lg md:text-xl lg:text-2xl font-semibold lg:font-bold mt-3 sm:mt-3.5 md:mt-4 lg:mt-5">Customer Support 24/7 hour</span>
                <p className="text-sm md:text-base lg:text-lg font-medium">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</p>
              </div>
            </div>
            <div className="size-[300px] sm:size-[380px] md:size-[400px] xl:size-[420px] bg-blue-50 text-black text-center p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 2xl:p-12 mx-auto rainbow">
              <div className="space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-5">
                <img src="/icon_01.png" alt="" className="size-10 lg:size-12 mx-auto mb-3 sm:mb-3.5 md:mb-4 lg:mb-5"/>
                <span className="text-lg md:text-xl lg:text-2xl font-semibold lg:font-bold mt-3 sm:mt-3.5 md:mt-4 lg:mt-5">Best Online Security Services</span>
                <p className="text-sm md:text-base lg:text-lg font-medium">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</p>
              </div>
            </div>
            <div className="">
              <div className="size-[300px] sm:size-[380px] md:size-[400px] xl:size-[420px] bg-blue-50 text-black text-center p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 2xl:p-12 mx-auto rainbow">
                <div className="space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-5">
                  <img src="/icon_01.png" alt="" className="size-10 lg:size-12 mx-auto mb-3 sm:mb-3.5 md:mb-4 lg:mb-5"/>
                  <span className="text-lg md:text-xl lg:text-2xl font-semibold lg:font-bold mt-3 sm:mt-3.5 md:mt-4 lg:mt-5">Customise Your Workflow</span>
                  <p className="text-sm md:text-base lg:text-lg font-medium">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#2a4862] py-10 sm:py12 md:py-14 lg:py-16 xl:py-20 2xl:py-24">
        <div className="max-w-[1480px] w-full px-5 mx-auto">
            <div className="text-center">
              <span className="text-base lg:text-lg font-medium text-[#f65a8a] uppercase border-b-2 border-white ps-2 pe-2">How can help you</span>
              <h3 className="text-2xl md:text-3xl lg:ext-4xl xl:text-5xl font-bold text-white mt-5">We Provide Awesome Bloging</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-20">
              <div className="relative border-2 border-white pulse mx-auto" style={{clipPath: "polygon(75% 1%, 100% 25%, 100% 100%, 0 100%, 0 0)",}}>
               <div className="flex justify-center items-center bg-black">
                <img src="/maulik.jpg" alt="Clipped" className="w-fit object-cover bg-center"/>
                <span className="block absolute inset-0 border-white pulse"></span>
              </div>
                <div className="absolute bottom-0 right-0 group-hover:block w-full bg-white py-4 space-y-5">
                  <div className=" text-center">
                    <h4 className="text-xl font-medium">Maulik A. Kamani</h4>
                    <p className="text-base font-medium">Founder</p>
                  </div>
                  <div className="group hidden">
                    <div className="flex justify-center space-x-5">
                      <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.139 155.139" fill="currentColor" > <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" /> </svg>
                      <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.139 155.139" fill="currentColor" > <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" /> </svg>
                      <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.139 155.139" fill="currentColor" > <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" /> </svg>
                      <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.139 155.139" fill="currentColor" > <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" /> </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative border-2 border-white pulse mx-auto"  style={{clipPath: "polygon(75% 1%, 100% 25%, 100% 100%, 0 100%, 0 0)",}}>
              <div className="flex justify-center items-center bg-black">
                <img src="/vansh_co_founder.png" alt="Clipped" className="w-fit object-cover bg-center"/>
                <span className="block absolute inset-0 border-white pulse"></span>
              </div>       
                <div className="absolute bottom-0 right-0 group-hover:block w-full bg-white  py-4 space-y-5">
                  <div className="text-center">
                    <h4 className="text-xl font-medium">Vansh A. Sanklecha</h4>
                    <p className="text-base font-medium">co_Founder</p>
                  </div>
                  <div className=" group-hover:block cursor-pointer">
                    <div className="hidden group">
                      <div className="flex justify-center space-x-5">
                        <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.139 155.139" fill="currentColor" > <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" /> </svg>
                        <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.139 155.139" fill="currentColor" > <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" /> </svg>
                        <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.139 155.139" fill="currentColor" > <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" /> </svg>
                        <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.139 155.139" fill="currentColor" > <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" /> </svg>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="relative border-2 border-white pulse mx-auto" style={{clipPath: "polygon(75% 1%, 100% 25%, 100% 100%, 0 100%, 0 0)",}}>
                <div className="flex justify-center items-center bg-black">
                  <img src="/kenil_ceo.png" alt="Clipped" className="w-fit object-cover bg-center"/>
                  <span className="block absolute inset-0 border-white pulse"></span>
                </div>     
                <div className="absolute bottom-0 right-0 group-hover:block w-full bg-white py-4 space-y-5">
                  <div className=" text-center">
                    <h4 className="text-xl font-medium">Kenil S. Kakadiya</h4>
                    <p className="text-base font-medium">Business Manager</p>
                  </div>
                  <div className="group hidden">
                    <div className="flex justify-center space-x-5">
                      <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.139 155.139" fill="currentColor" > <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" /> </svg>
                      <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.139 155.139" fill="currentColor" > <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" /> </svg>
                      <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.139 155.139" fill="currentColor" > <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" /> </svg>
                      <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.139 155.139" fill="currentColor" > <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" /> </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative border-2 border-white pulse mx-auto"style={{clipPath: "polygon(75% 1%, 100% 25%, 100% 100%, 0 100%, 0 0)",}}>
                <div className="flex justify-center items-center bg-black">
                  <img src="/tm1.jpg"  alt="Clipped" className="w-fit object-cover bg-center"/>
                  <span className="block absolute inset-0 border-white pulse"></span>
                </div>
                <div className="absolute bottom-0 right-0 group-hover:block w-full bg-white py-4 space-y-5">
                  <div className=" text-center">
                    <h4 className="text-xl font-medium">Wallace S. Camacho</h4>
                    <p className="text-base font-medium">project Manager</p>
                  </div>
                  <div className="group hidden">
                    <div className="flex justify-center space-x-5">
                      <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.139 155.139" fill="currentColor" > <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" /> </svg>
                      <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.139 155.139" fill="currentColor" > <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" /> </svg>
                      <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.139 155.139" fill="currentColor" > <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" /> </svg>
                      <svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 155.139 155.139" fill="currentColor" > <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z" /> </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
      <section className="w-full bg-blue-100 py-10 sm:py12 md:py-14 lg:py-16 xl:py-20 2xl:py-24">
        <div className="max-w-[1480px] w-full mx-auto px-5 rounded-md text-center">
        <img src="/tittle.svg" alt="" className="mx-auto zoom-in-zoom-out"/>
          <p className="text-[#f65a8a] text-sm lg:text-base font-medium lg:font-semibold mt-2">Browse topics that suit your interests and learning goals.</p>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold lg:font-bold text-[#000] mt-2.5">Explore Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-7 xl:gap-8 2xl:gap-10 mt-8">
            {[
              "Web Development",
              "Software Engineering",
              "Programming Languages",
              "Cloud Computing",
            ].map((category) => (
              <Link
                key={category}
                className=" text-lg font-bold text-black hover:text-teal-800 bg-white  hover:bg-teal-200 rounded-2xl px-6 py-2.5 duration-700 transition-all"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-[#2a4862] py-10 sm:py12 md:py-14 lg:py-16 xl:py-20 2xl:py-24">
        <div className="relative max-w-[1480px] w-full px-5 mx-auto">
            <div className="relativ z-10 text-center">
                <div className="space-y-5 lg:space-y-6">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium md:font-semibold lg:font-bold text-white fraunces">Invite me to your. Get exposure of millions Information technologies.</h2>
                  <p className="max-w-[640px] w-full text-sm lg:text-base font-medium lg:font-semibold text-[#2aceb6] montserrat mx-auto">Lorem dui tincidunt nunc viverra morbi et maecenas quam adipiscing integer amet eget blandit phasellus est natoque blandit facilisi eleifend.</p>
                  <button type="button" className="text-sm lg:text-base font-medium lg:font-semibold text-white hover:text-[#2aceb6] bg-transparent hover:bg-white border-2 border-white rounded-md hover:rounded-full duration-700 transition-all px-10 py-2">Let's Talk</button>
              </div>
            </div>
        </div>
      </section>
      <section className="relative w-full bg-blue-100 py-10 sm:py12 md:py-14 lg:py-16 xl:py-20 2xl:py-24">
        <div className="relative z-10 max-w-[1480px] w-full px-5 mx-auto">
          <div className=" flex justify-between items-center flex-wrap md:flex-nowrap rounded-lg px-5 sm:px-7 md:px-8 lg:px-9 xl:px-10 2xl:px-12">
              <div className="">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium lg:font-semibold text-black">Ready To Get Free Consulations For <br />
                  Any Kind Of It Solutions ?</h3>
                  <p className="text-sm md:text-base lg:text-lg font-medium text-[#696969] mt-2 lg:mt-4">Sed ut perspiciatis unde omnis natus error voluptatems accusa ntium <br /> doloremque laudantium totam.</p>
              </div>
              <div className="">
                <button className="text-sm font-normal lg:font-medium text-black hover:text-[#e2dae8] border border-gray-400 bg-[#e2dae8] hover:bg-black rounded-md duration-500 transition-all montserrat px-7 sm:px-8 lg:px-10 py-2 md:py-3 lg:py-4 mt-3 lg:mt-4 md:mt-0">Get a quote </button>
              </div>
          </div>
        </div>
          <img src="/header_shape-2.svg" alt="" className="absolute top-0 left-0 w-full h-full object-cover border border-[#e8e8eb] rotate-180"/>
      </section>
    </main>
  );
}
