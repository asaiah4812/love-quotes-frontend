import Image from 'next/image';
import React from 'react'
import logo from '/public/logo.png'
import Link from 'next/link';

type LinkProps = {
    id:number;
    name:string;
    url:string;
}

const Links:LinkProps[] = [
    {
        id:1,
        name:'Home',
        url: '/'
    },
    {
        id:2,
        name:'About',
        url: '/'
    },
    {
        id:3,
        name:'Test Api',
        url: '/'
    },
]

const Navbar = () => {
  return (
    <div className="flex justify-between items-center fixed top-0 left-0 right-0 px-1 sm:px-2 md:px-[10%] lg:px-[15%] mx-auto bg-white">
      <div className="">
        <Image src={logo} width={100} height={100} alt="logo" />
      </div>
      <div className="inline-flex gap-2">
        {Links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar