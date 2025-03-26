import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
export default function FooterCom() {
  return (
    <Footer container className="relative w-full flex items-end bg-[#2a4862] border-t border-teal-500 py-8">
        <div className="relative z-10 max-w-[1480px] w-full px-5 mx-auto">
            <div className="flex justify-between flex-wrap gap-6 lg:gap-8 xl:gap-10">
              <div>
                <Link to="/" className="flex items-center space-x-3 text-2xl font-bold text-white dark:text-white">
                  <img src="/logo3.jpg" alt="TechNova Logo" className="size-12 lg:size-14 xl:size-16 rounded-full"/>
                </Link>
                <p className="max-w-[330px] w-full text-sm md:text-base font-medium text-white montserrat mt-1.5 sm:mt-2 md:mt-2.5 lg:mt-3 xl:mt-4">Your hub for technology insights, tutorials, and updates. Join usin exploring the latest in tech!</p>
              </div>
              <div className="">
                <Footer.Title title="Explore" className="text-base md:text-lg font-medium fraunces text-white underline"/>
                <Footer.LinkGroup col>
                  <Footer.Link href="/feed" className="text-sm lg:text-base font-medium text-white montserrat hover:text-teal-500">My Feed</Footer.Link>
                  <Footer.Link href="/new-blog" className="text-sm lg:text-base font-medium text-white montserrat hover:text-teal-500">New Blog</Footer.Link>
                  <Footer.Link href="/official-blog" className="text-sm lg:text-base font-medium text-white montserrat hover:text-teal-500">Official Blog</Footer.Link>
                </Footer.LinkGroup>
              </div>

              {/* Follow Us Section */}
              <div className="">
                <Footer.Title title="Follow Us" className="text-base lg:text-lg font-medium fraunces text-white underline"/>
                <Footer.LinkGroup col>
                  <Footer.Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm lg:text-base font-medium text-white montserrat hover:text-teal-500">GitHub</Footer.Link>
                  <Footer.Link href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-sm lg:text-base font-medium text-white montserrat hover:text-teal-500">Discord</Footer.Link>
                  <Footer.Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm lg:text-base font-medium text-white montserrat hover:text-teal-500">Twitter</Footer.Link>
                </Footer.LinkGroup>
              </div>

              {/* Legal Section */}
              <div className="">
                <Footer.Title
                  title="Legal"
                  className="text-base md:text-lg font-medium fraunces text-white underline"
                />
                <Footer.LinkGroup col>
                  <Footer.Link href="#" className="text-sm lg:text-base font-medium text-white montserrat hover:text-teal-500">Privacy Policy</Footer.Link>
                  <Footer.Link href="#" className="text-sm lg:text-base font-medium text-white montserrat hover:text-teal-500">Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
            <Footer.Divider className="my-6 border-gray-300 dark:border-gray-700" />

          {/* Bottom Section */}
          <div className="flex flex-wrap justify-between items-center">
            <Footer.Copyright by="TechNova" year={new Date().getFullYear()} className="text-base font-medium poppins text-white dark:text-gray-400"
            />
            <div className="flex items-center gap-4 sm:mt-0">
              <Footer.Icon href="#" icon={BsFacebook} className="hover:text-teal-500"/>
              <Footer.Icon href="#" icon={BsInstagram} className="hover:text-teal-500"/>
              <Footer.Icon href="#" icon={BsTwitter} className="hover:text-teal-500"/>
              <Footer.Icon href="#" icon={BsGithub} className="hover:text-teal-500"/>
            </div>
          </div>
        </div>
    </Footer>
  );
}
