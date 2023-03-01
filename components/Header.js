import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
//import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;

    //if term is not empty
    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />

        <form
          className="flex flex-grow px-6 py-3 
      ml-10 mr-5 border-gray-200 
      rounded-full shadow-lg max-w-3xl 
      items-center"
        >
          <input
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
            type="text"
            defaultValue={router.query.term}
          />
          <XIcon
            className="h-7 text-gray-500 cursor-pointer transition-duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="mr-3 h-6 hiddden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-400" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button hidden type="submit" onClick={search}></button>
        </form>
        <p className="text-[2%] text-gray-600">MADE BY RONAK PATIL</p>

        {/* <Avatar className="ml-auto" 
      url="https://lh3.googleusercontent.com/a/AEdFTp7jD9N8vRjQbukqLyYAcTHzoJO6Iei5Ux_AqP7deu4=s371-p-rw-no"/>
       */}
      </div>

      {/*HEADER OPTIONS:*/}
      <HeaderOptions />
    </header>
  );
}

export default Header;
