'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { servicesMegaMenu } from '@/data/servicesMegaMenu';

import Drawer from '@mui/material/Drawer';
import Collapse from '@mui/material/Collapse';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeMenu, setActiveMenu] = useState<null | 'services' | 'resources' | 'industry'>(null);

  const pathname = usePathname();

  // Scroll state
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // route change hote hi mega menu close
    setActiveMenu(null);
  }, [pathname]);

  // Detect screen width (mobile only)
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreen();

    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // Detect scroll
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleDrawer = (open: boolean) => {
    if (isMobile) setOpenDrawer(open);
  };

  const toggleAccordion = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header
      className={`
        tw:fixed tw:top-0 tw:left-0 tw:w-full tw:z-50 tw:transition-all tw:duration-300
        ${
          isScrolled
            ? 'tw:bg-white/40 tw:backdrop-blur-sm tw:shadow-md'
            : 'tw:bg-transparent tw:backdrop-blur-0'
        }
      `}
    >
      <div className="tw:mx-auto tw:px-4 tw:h-20 tw:flex tw:items-center tw:justify-between">
        {/* Logo */}
        <Link href="/" className="tw:flex tw:items-center tw:gap-2">
          <img src="/logo/logo.svg" className="tw:h-10 tw:w-auto" />
        </Link>

        {/* Desktop Menu */}
        <nav className="tw:hidden tw:lg:flex tw:items-center tw:lg:gap-4 tw:xl:gap-8 tw:text-[15px] tw:font-bold tw:text-black tw:ml-4 tw:xl:ml-10">
          {/* <Link href="/" className={`${pathname === '/' ? 'tw:font-[900] tw:text-[#FF6A00]' : ''}`}> */}
          <Link
            href="/"
            className={`
              tw:relative tw:inline-block
              tw:after:absolute tw:after:left-0 tw:after:-bottom-1
              tw:after:h-[2px] tw:after:w-0 tw:after:bg-black
              tw:after:transition-all tw:after:duration-300
              tw:hover:after:w-full
              ${pathname === '/' ? 'tw:text-[#FF6A00] tw:font-[900] after:tw:w-full after:tw:bg-[#FF6A00]' : ''}
            `}
          >
            Home
          </Link>

          {/* Home
          </Link> */}
          <Link
            href="/about"
            className={`
            tw:relative tw:inline-block
            tw:after:absolute tw:after:left-0 tw:after:-bottom-1
            tw:after:h-[2px] tw:after:w-0 tw:after:bg-black
            tw:after:transition-all tw:after:duration-300
            tw:hover:after:w-full
            ${pathname === '/about/' ? 'tw:text-[#FF6A00] tw:font-[900] after:tw:w-full after:tw:bg-[#FF6A00]' : ''}
          `}
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div
            className="tw:relative tw:group tw:flex tw:items-center tw:gap-1 tw:cursor-pointer"
            onMouseEnter={() => setActiveMenu('services')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link
              href="/service"
              onClick={() => setActiveMenu(null)}
              className={`
              tw:relative tw:inline-block
              tw:after:absolute tw:after:left-0 tw:after:-bottom-1
              tw:after:h-[2px] tw:after:w-0 tw:after:bg-black
              tw:after:transition-all tw:after:duration-300
              tw:hover:after:w-full
              ${pathname === '/service/' ? 'tw:text-[#FF6A00] tw:font-[900] after:tw:w-full after:tw:bg-[#FF6A00]' : ''}
            `}
            >
              Services
            </Link>
            <ExpandMoreIcon
              fontSize="small"
              className="
                  tw:transition-transform
                  tw:duration-300
                  tw:ease-in-out
                  tw:group-hover:rotate-180
                "
            />
            
              <div
                className={`tw:fixed tw:left-0 tw:top-16 tw:w-screen tw:bg-[#FBFCFF]
              tw:transition-all tw:duration-300 tw:shadow-lg tw:h-[calc(100vh-64px)] tw:overflow-y-auto
              ${activeMenu === 'services' ? 'tw:opacity-100 tw:visible' : 'tw:opacity-0 tw:invisible'}`}
              >
                <div className="tw:flex tw:w-full ">                
                  <div
                    className="tw:flex-1"
                    aria-hidden="true"
                    onMouseEnter={() => setActiveMenu(null)}
                  />

                  <div
                    className="tw:max-w-[900px] tw:xl:max-w-7xl tw:w-full tw:h-fit  tw:pt-14 tw:scrollbar-thin tw:scrollbar-thumb-gray-300 tw:scrollbar-track-transparent"
                  >
                    <div className="tw:grid tw:md:grid-cols-2 tw:xl:grid-cols-4 tw:px-10 tw:gap-x-10 tw:gap-y-6 tw:xl:gap-y-12">
                      {servicesMegaMenu.map((section) => (
                        <div key={section.title}>
                          <Link
                            href={section.href}
                            onClick={() => setActiveMenu(null)}
                            className="tw:inline-block tw:text-[15.5px] tw:font-bold tw:text-[#FF6A00] tw:pb-2 tw:mb-4 tw:transition-all tw:duration-300 tw:hover:scale-104"
                          >
                            {section.title}
                            <hr className="tw:mt-4 tw:border-0 tw:h-[1px] tw:bg-[#E5E7EB] tw:w-[230px]" />
                          </Link>

                          <ul className="tw:space-y-2 tw:text-[14px] tw:text-[#4B5563] tw:font-medium">
                            {section.items.map((item) => (
                              <li key={item} className="tw:flex tw:gap-2">
                                <span className="tw:text-[#9CA3AF]">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div
                      className="tw:h-[100px]"
                      onMouseEnter={() => setActiveMenu(null)}
                    />
                  </div>

                  <div
                    className="tw:flex-1"
                    onMouseEnter={() => setActiveMenu(null)}
                  />
                </div>
              </div>
          </div>

          {/* <Link
            href="/industry"
            className={`
            tw:relative tw:inline-block
            tw:after:absolute tw:after:left-0 tw:after:-bottom-1
            tw:after:h-[2px] tw:after:w-0 tw:after:bg-black
            tw:after:transition-all tw:after:duration-300
            tw:hover:after:w-full
            ${pathname === '/industry/' ? 'tw:text-[#FF6A00] after:tw:w-full after:tw:bg-[#FF6A00]' : ''}
          `}
          >
            Industry
          </Link> */}
          <div
            className="tw:relative tw:group tw:flex tw:items-center tw:gap-1 tw:cursor-pointer"
            onMouseEnter={() => setActiveMenu('industry')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link
              href="/industry"
              className={`
              tw:relative tw:inline-block
              tw:after:absolute tw:after:left-0 tw:after:-bottom-1
              tw:after:h-[2px] tw:after:w-0 tw:after:bg-black
              tw:after:transition-all tw:after:duration-300
              tw:hover:after:w-full
              ${pathname === '/industry/' ? 'tw:text-[#FF6A00] tw:font-[900] after:tw:w-full after:tw:bg-[#FF6A00]' : ''}
            `}
            >
              Industry
            </Link>
            <ExpandMoreIcon
              fontSize="small"
              className="
                tw:transition-transform
                tw:duration-300
                tw:ease-in-out
                tw:group-hover:rotate-180
              "
            />
            <div
              className={`tw:fixed tw:left-0 tw:top-16 tw:w-screen tw:bg-[#FBFCFF]
              tw:transition-all tw:duration-300 tw:shadow-lg tw:text-[18px]
              ${activeMenu === 'industry' ? 'tw:opacity-100 tw:visible' : 'tw:opacity-0 tw:invisible'}`}
            >
              <div className="tw:max-w-3xl tw:mx-auto tw:text-[15.5px] tw:font-bold tw:px-10 tw:py-12  tw:flex tw:flex-row tw:gap-20">
                <div>
                  <Link
                    href="/industry#smb"
                    className="tw:block tw:mb-2
                    tw:transition-all tw:duration-300 tw:ease-out
                        tw:text-[#FF6A00]
                        tw:hover:scale-104
                    "
                    onClick={() => setActiveMenu(null)}
                  >
                    SMBs
                  </Link>
                </div>

                <div>
                  <Link
                    href="/industry#finance"
                    className="tw:block tw:mb-2
                    tw:transition-all tw:duration-300 tw:ease-out
                        tw:text-[#FF6A00]
                        tw:hover:scale-104
                    "
                    onClick={() => setActiveMenu(null)}
                  >
                    Finance
                  </Link>
                </div>

                <div>
                  <Link
                    href="/industry#retail-ecommerce"
                    className="tw:block tw:mb-2
                    tw:transition-all tw:duration-300 tw:ease-out
                        tw:text-[#FF6A00]
                        tw:hover:scale-104
                    "
                    onClick={() => setActiveMenu(null)}
                  >
                    Retail & E-commerce
                  </Link>
                </div>

                <div>
                  <Link
                    href="/industry#manufacturing"
                    className="tw:block tw:mb-2
                    tw:transition-all tw:duration-300 tw:ease-out
                        tw:text-[#FF6A00]
                        tw:hover:scale-104
                    "
                    onClick={() => setActiveMenu(null)}
                  >
                    Manufacturing
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link
            href="/contact"
            className={`
            tw:relative tw:inline-block
            tw:after:absolute tw:after:left-0 tw:after:-bottom-1
            tw:after:h-[2px] tw:after:w-0 tw:after:bg-black
            tw:after:transition-all tw:after:duration-300
            tw:hover:after:w-full
            ${pathname === '/contact/' ? 'tw:text-[#FF6A00] tw:font-[900] after:tw:w-full after:tw:bg-[#FF6A00]' : ''}
          `}
          >
            Contact Us
          </Link>
          {/* <Link href="/case-studies" className={`${pathname === "/case-studies/" ? "tw:font-extrabold tw:text-black" : ""}`}>Case Studies</Link> */}

          {/* Resources Dropdown */}
          <div
            className="tw:relative tw:group tw:flex tw:items-center tw:gap-1 tw:cursor-pointer"
            onMouseEnter={() => setActiveMenu('resources')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <span
              // className={`${pathname.startsWith('/resources') ? 'tw:font-[900] tw:text-[#FF6A00]' : ''}`}
              className={`
              tw:relative tw:inline-block
              tw:after:absolute tw:after:left-0 tw:after:-bottom-1
              tw:after:h-[2px] tw:after:w-0 tw:after:bg-black
              tw:after:transition-all tw:after:duration-300

              tw:group-hover:after:w-full

              ${
                pathname.startsWith('/resources')
                  ? 'tw:font-[900] tw:text-[#FF6A00] after:tw:w-full after:tw:bg-[#FF6A00]'
                  : ''
              }
            `}
            >
              Resources
            </span>
            <ExpandMoreIcon
              fontSize="small"
              className="
                tw:transition-transform
                tw:duration-300
                tw:ease-in-out
                tw:group-hover:rotate-180
              "
            />
            <div
              className={`tw:fixed tw:left-0 tw:top-16 tw:w-screen tw:bg-[#FBFCFF]
              tw:transition-all tw:duration-300 tw:shadow-lg tw:text-[20px]
              ${activeMenu === 'resources' ? 'tw:opacity-100 tw:visible' : 'tw:opacity-0 tw:invisible'}`}
            >
              <div className="tw:max-w-3xl tw:mx-auto tw:px-20 tw:py-12 tw:text-[15.5px] tw:font-bold  tw:flex tw:flex-row tw:gap-20">
                <div>
                  {/* <Link href="/resources/blogs" className="tw:block tw:mb-2" onClick={() => setActiveMenu(null)}>Blog</Link> */}
                  {/* <Link
                    href="/resources/blogs"
                    onClick={() => setActiveMenu(null)}
                    className="
                        tw:block tw:mb-2
                        tw:transition-all tw:duration-300 tw:ease-out
                        tw:hover:text-[#FF6A00]
                        tw:hover:scale-104
                      "
                  >
                    Blog
                  </Link> */}
                </div>

                <div>
                  {/* <Link
                    href="/resources/case-studies"
                    className="tw:block tw:mb-2
                        tw:transition-all tw:duration-300 tw:ease-out
                        tw:hover:text-[#FF6A00]
                        tw:hover:scale-104
                    "
                    onClick={() => setActiveMenu(null)}
                  >
                    Case Studies
                  </Link> */}
                </div>

                <div>
                  <Link
                    href="/resources/career"
                    className="tw:block tw:mb-2
                    tw:transition-all tw:duration-300 tw:ease-out
                        tw:text-[#FF6A00]
                        tw:hover:scale-104
                    "
                    onClick={() => setActiveMenu(null)}
                  >
                    Career
                  </Link>
                </div>

                <div>
                  <Link
                    href="/resources/customer-support"
                    className="tw:block tw:mb-2
                    tw:transition-all tw:duration-300 tw:ease-out
                        tw:text-[#FF6A00]
                        tw:hover:scale-104
                    "
                    onClick={() => setActiveMenu(null)}
                  >
                    Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* CTA - Desktop only */}
        <div className="tw:hidden tw:lg:flex">
          <Link
            href="/contact"
            className="tw:xl:w-full tw:whitespace-nowrap tw:lg:px-4 tw:lg:py-3 tw:xl:px-6 tw:xl:py-3 tw:text-[10px] tw:lg:text-[14px] tw:xl:text-[16px] tw:rounded-full tw:bg-primary tw:text-white tw:font-medium tw:hover:bg-[#1d8ae0] tw:transition-all tw:shadow-sm tw:text-center"
          >
            Get a Free Consultation
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        {isMobile && (
          <IconButton onClick={() => toggleDrawer(true)} className="tw:md:hidden">
            <MenuIcon fontSize="large" />
          </IconButton>
        )}
      </div>

      {/* MOBILE DRAWER */}
      <Drawer anchor="left" open={openDrawer} onClose={() => toggleDrawer(false)}>
        <div className="tw:w-72 tw:p-5 tw:flex tw:flex-col tw:gap-5 tw:text-[black]">
          <div className="tw:flex tw:justify-end">
            <IconButton onClick={() => toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </div>

          <Link
            href="/"
            onClick={() => toggleDrawer(false)}
            className={`tw:text-lg ${pathname === '/' ? 'tw:font-bold tw:text-[#FF6A00]' : ''}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => toggleDrawer(false)}
            className={`tw:text-lg ${pathname === '/about/' ? 'tw:font-bold tw:text-[#FF6A00]' : ''}`}
          >
            About Us
          </Link>

          {/* Accordion Services */}
          <div>
            <button
              className="tw:flex tw:items-center tw:justify-between tw:w-full tw:text-lg"
              onClick={() => toggleAccordion('services')}
            >
              <Link
                href="/service"
                onClick={() => toggleDrawer(false)}
                className={`${pathname === '/service/' ? 'tw:font-bold tw:text-[#FF6A00]' : ''}`}
              >
                Services
              </Link>
              <ExpandMoreIcon
                className={`${openDropdown === 'services' ? 'tw:rotate-180' : ''} tw:transition`}
              />
            </button>

            <Collapse in={openDropdown === 'services'} timeout="auto" unmountOnExit>
              <div className="tw:pl-4 tw:pt-2 tw:flex tw:flex-col tw:gap-2 ">
                <Link
                  href="/service#managed-it"
                  onClick={() => toggleDrawer(false)}
                  className="tw:border-b tw:border-gray-300"
                >
                  Managed IT Services
                </Link>

                <Link
                  href="/service#cloud-solutions"
                  onClick={() => toggleDrawer(false)}
                  className="tw:border-b tw:border-gray-300"
                >
                  Cloud Solutions
                </Link>
                <Link
                  href="/service#cybersecurity"
                  onClick={() => toggleDrawer(false)}
                  className="tw:border-b tw:border-gray-300"
                >
                  Cybersecurity
                </Link>

                <Link
                  href="/service#it-consulting"
                  onClick={() => toggleDrawer(false)}
                  className="tw:border-b tw:border-gray-300"
                >
                  IT Consulting
                </Link>

                <Link
                  href="/service#software-development"
                  onClick={() => toggleDrawer(false)}
                  className="tw:border-b tw:border-gray-300"
                >
                  Software Development
                </Link>

                <Link
                  href="/service#data-analytics"
                  onClick={() => toggleDrawer(false)}
                  className="tw:border-b tw:border-gray-300"
                >
                  Data Management & Analytics
                </Link>

                <Link
                  href="/service#ai-automation"
                  onClick={() => toggleDrawer(false)}
                  className="tw:border-b tw:border-gray-300"
                >
                  AI & Automation
                </Link>
              </div>
            </Collapse>
          </div>

          {/* <Link
            href="/industry"
            onClick={() => toggleDrawer(false)}
            className={`tw:text-lg ${pathname === '/industry/' ? 'tw:font-bold tw:text-[#FF6A00]' : ''}`}
          >
            Industry
          </Link> */}
          <div>
            <button
              className="tw:flex tw:items-center tw:justify-between tw:w-full tw:text-lg"
              onClick={() => toggleAccordion('industry')}
            >
              <Link
                href="/industry"
                onClick={() => toggleDrawer(false)}
                className={`${pathname === '/industry/' ? 'tw:font-bold tw:text-[#FF6A00]' : ''}`}
              >
                Industry
              </Link>
              <ExpandMoreIcon
                className={`${openDropdown === 'industry' ? 'tw:rotate-180' : ''} tw:transition`}
              />
            </button>

            <Collapse in={openDropdown === 'industry'} timeout="auto" unmountOnExit>
              <div className="tw:pl-4 tw:pt-2 tw:flex tw:flex-col tw:gap-2 ">
                <Link
                  href="/industry#smb"
                  onClick={() => toggleDrawer(false)}
                  className="tw:border-b tw:border-gray-300"
                >
                  SMBs
                </Link>

                <Link
                  href="/industry#finance"
                  onClick={() => toggleDrawer(false)}
                  className="tw:border-b tw:border-gray-300"
                >
                  Finance
                </Link>

                <Link
                  href="/industry#retail-ecommerce"
                  onClick={() => toggleDrawer(false)}
                  className="tw:border-b tw:border-gray-300"
                >
                  Retail & E-commerce
                </Link>

                <Link
                  href="/industry#manufacturing"
                  onClick={() => toggleDrawer(false)}
                  className="tw:border-b tw:border-gray-300"
                >
                  Manufacturing
                </Link>
              </div>
            </Collapse>
          </div>
          <Link
            href="/contact"
            onClick={() => toggleDrawer(false)}
            className={`tw:text-lg ${pathname === '/contact/' ? 'tw:font-bold tw:text-[#FF6A00]' : ''}`}
          >
            Contact Us
          </Link>

          {/* Accordion Resources */}
          <div>
            <button
              className={`tw:flex tw:items-center tw:justify-between tw:w-full tw:text-lg 
              ${pathname.startsWith('/resources') ? 'tw:font-bold tw:text-[#FF6A00]' : ''}`}
              onClick={() => toggleAccordion('resources')}
            >
              Resources
              <span className="tw:text-black">
                <ExpandMoreIcon
                  className={`${openDropdown === 'resources' ? 'tw:rotate-180' : ''} tw:transition`}
                />
              </span>
            </button>

            <Collapse in={openDropdown === 'resources'} timeout="auto" unmountOnExit>
              <div className="tw:pl-4 tw:pt-2 tw:flex tw:flex-col tw:gap-2">
                {/* <Link
                  href="/resources/blogs"
                  onClick={() => toggleDrawer(false)}
                  className="tw:border-b tw:border-gray-300"
                >
                  Blog
                </Link> */}
                {/* <Link
                  href="/resources/case-studies"
                  onClick={() => toggleDrawer(false)}
                  className="tw:block tw:border-b tw:border-gray-300"
                >
                  Case Studies
                </Link> */}
                <Link
                  href="/resources/career"
                  onClick={() => toggleDrawer(false)}
                  className="tw:border-b tw:border-gray-300"
                >
                  Career
                </Link>
                <Link
                  href="/resources/customer-support"
                  onClick={() => toggleDrawer(false)}
                  className="tw:border-b tw:border-gray-300"
                >
                  Support
                </Link>
              </div>
            </Collapse>
          </div>

          <Link
            href="/contact"
            onClick={() => toggleDrawer(false)}
            className="tw:mt-5 tw:w-full tw:text-center tw:px-5 tw:py-3 tw:rounded-full tw:bg-primary tw:text-white tw:font-medium tw:hover:bg-blue-600 tw:transition"
          >
            Get a Free Consultation
          </Link>
        </div>
      </Drawer>
    </header>
  );
}



//best
// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import React, { useState, useEffect } from 'react';

// import Drawer from '@mui/material/Drawer';
// import Collapse from '@mui/material/Collapse';
// import MenuIcon from '@mui/icons-material/Menu';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// export default function Navbar() {
//   const [openDrawer, setOpenDrawer] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const [activeMenu, setActiveMenu] = useState<null | 'services' | 'resources' | 'industry'>(null); // desktop

//   const pathname = usePathname();

//   // Scroll state
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Detect screen width (mobile only)
//   useEffect(() => {
//     const checkScreen = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };
//     checkScreen();

//     window.addEventListener('resize', checkScreen);
//     return () => window.removeEventListener('resize', checkScreen);
//   }, []);

//   // Detect scroll
//   useEffect(() => {
//     const onScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   const toggleDrawer = (open: boolean) => {
//     if (isMobile) setOpenDrawer(open);
//   };

//   const toggleAccordion = (name: string) => {
//     setOpenDropdown(openDropdown === name ? null : name);
//   };

//   return (
//     <header
//       className={`
//         tw:fixed tw:top-0 tw:left-0 tw:w-full tw:z-50 tw:transition-all tw:duration-300
//         ${
//           isScrolled
//             ? 'tw:bg-white/40 tw:backdrop-blur-sm tw:shadow-md'
//             : 'tw:bg-transparent tw:backdrop-blur-0'
//         }
//       `}
//     >
//       <div className="tw:mx-auto tw:px-4 tw:h-20 tw:flex tw:items-center tw:justify-between">
//         {/* Logo */}
//         <Link href="/" className="tw:flex tw:items-center tw:gap-2">
//           <img src="/logo/logo.svg" className="tw:h-10 tw:w-auto" />
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="tw:hidden tw:lg:flex tw:items-center tw:lg:gap-4 tw:xl:gap-8 tw:text-[15px] tw:font-bold tw:text-black tw:ml-4 tw:xl:ml-10">
//           {/* <Link href="/" className={`${pathname === '/' ? 'tw:font-[900] tw:text-[#FF6A00]' : ''}`}> */}
//           <Link
//             href="/"
//             className={`
//               tw:relative tw:inline-block
//               tw:after:absolute tw:after:left-0 tw:after:-bottom-1
//               tw:after:h-[2px] tw:after:w-0 tw:after:bg-black
//               tw:after:transition-all tw:after:duration-300
//               tw:hover:after:w-full
//               ${pathname === '/' ? 'tw:text-[#FF6A00] tw:font-[900] after:tw:w-full after:tw:bg-[#FF6A00]' : ''}
//             `}
//           >
//             Home
//           </Link>

//           {/* Home
//           </Link> */}
//           <Link
//             href="/about"
//             className={`
//             tw:relative tw:inline-block
//             tw:after:absolute tw:after:left-0 tw:after:-bottom-1
//             tw:after:h-[2px] tw:after:w-0 tw:after:bg-black
//             tw:after:transition-all tw:after:duration-300
//             tw:hover:after:w-full
//             ${pathname === '/about/' ? 'tw:text-[#FF6A00] tw:font-[900] after:tw:w-full after:tw:bg-[#FF6A00]' : ''}
//           `}
//           >
//             About Us
//           </Link>

//           {/* Services Dropdown */}
//           <div
//             className="tw:relative tw:group tw:flex tw:items-center tw:gap-1 tw:cursor-pointer"
//             onMouseEnter={() => setActiveMenu('services')}
//             onMouseLeave={() => setActiveMenu(null)}
//           >
//             <Link
//               href="/service"
//               className={`
//               tw:relative tw:inline-block
//               tw:after:absolute tw:after:left-0 tw:after:-bottom-1
//               tw:after:h-[2px] tw:after:w-0 tw:after:bg-black
//               tw:after:transition-all tw:after:duration-300
//               tw:hover:after:w-full
//               ${pathname === '/service/' ? 'tw:text-[#FF6A00] tw:font-[900] after:tw:w-full after:tw:bg-[#FF6A00]' : ''}
//             `}
//             >
//               Services
//             </Link>
//             <ExpandMoreIcon fontSize="small" />
//             <div
//               className={`tw:fixed tw:left-0 tw:top-16 tw:w-screen tw:bg-[#FBFCFF]
//               tw:transition-all tw:duration-300 tw:shadow-lg tw:text-[18px]
//               ${activeMenu === 'services' ? 'tw:opacity-100 tw:visible' : 'tw:opacity-0 tw:invisible'}`}
//             >
//               <div className="tw:max-w-6xl tw:mx-auto tw:px-1 tw:py-12  tw:flex tw:flex-row tw:gap-20">
//                 <div>
//                   <Link
//                     href="/service#managed-it"
//                     className="tw:block tw:mb-2
//                     tw:transition-all tw:duration-300 tw:ease-out
//                         tw:hover:text-[#FF6A00]
//                         tw:hover:scale-104
//                     "
//                     onClick={() => setActiveMenu(null)}
//                   >
//                     Managed IT Services
//                   </Link>
//                 </div>

//                 <div>
//                   <Link
//                     href="/service#cloud-solutions"
//                     className="tw:block tw:mb-2
//                     tw:transition-all tw:duration-300 tw:ease-out
//                         tw:hover:text-[#FF6A00]
//                         tw:hover:scale-104
//                     "
//                     onClick={() => setActiveMenu(null)}
//                   >
//                     Cloud Solutions
//                   </Link>
//                 </div>

//                 <div>
//                   <Link
//                     href="/service#it-consulting"
//                     className="tw:block tw:mb-2
//                     tw:transition-all tw:duration-300 tw:ease-out
//                         tw:hover:text-[#FF6A00]
//                         tw:hover:scale-104
//                     "
//                     onClick={() => setActiveMenu(null)}
//                   >
//                     IT Consulting
//                   </Link>
//                 </div>

//                 <div>
//                   <Link
//                     href="/service#software-development"
//                     className="tw:block tw:mb-2
//                     tw:transition-all tw:duration-300 tw:ease-out
//                         tw:hover:text-[#FF6A00]
//                         tw:hover:scale-104
//                     "
//                     onClick={() => setActiveMenu(null)}
//                   >
//                     Software Development
//                   </Link>
//                 </div>

//                 <div>
//                   <Link
//                     href="/service#data-analytics"
//                     className="tw:block tw:mb-2
//                     tw:transition-all tw:duration-300 tw:ease-out
//                         tw:hover:text-[#FF6A00]
//                         tw:hover:scale-104
//                     "
//                     onClick={() => setActiveMenu(null)}
//                   >
//                     Data Management & Analytics
//                   </Link>
//                 </div>

//                 <div>
//                   <Link
//                     href="/service#cybersecurity"
//                     className="tw:block tw:mb-2
//                     tw:transition-all tw:duration-300 tw:ease-out
//                         tw:hover:text-[#FF6A00]
//                         tw:hover:scale-104
//                     "
//                     onClick={() => setActiveMenu(null)}
//                   >
//                     Cybersecurity
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* <Link
//             href="/industry"
//             className={`
//             tw:relative tw:inline-block
//             tw:after:absolute tw:after:left-0 tw:after:-bottom-1
//             tw:after:h-[2px] tw:after:w-0 tw:after:bg-black
//             tw:after:transition-all tw:after:duration-300
//             tw:hover:after:w-full
//             ${pathname === '/industry/' ? 'tw:text-[#FF6A00] after:tw:w-full after:tw:bg-[#FF6A00]' : ''}
//           `}
//           >
//             Industry
//           </Link> */}
//            <div
//             className="tw:relative tw:group tw:flex tw:items-center tw:gap-1 tw:cursor-pointer"
//             onMouseEnter={() => setActiveMenu('industry')}
//             onMouseLeave={() => setActiveMenu(null)}
//           >
//             <Link
//               href="/industry"
//               className={`
//               tw:relative tw:inline-block
//               tw:after:absolute tw:after:left-0 tw:after:-bottom-1
//               tw:after:h-[2px] tw:after:w-0 tw:after:bg-black
//               tw:after:transition-all tw:after:duration-300
//               tw:hover:after:w-full
//               ${pathname === '/industry/' ? 'tw:text-[#FF6A00] tw:font-[900] after:tw:w-full after:tw:bg-[#FF6A00]' : ''}
//             `}
//             >
//               Industry
//             </Link>
//             <ExpandMoreIcon fontSize="small" />
//             <div
//               className={`tw:fixed tw:left-0 tw:top-16 tw:w-screen tw:bg-[#FBFCFF]
//               tw:transition-all tw:duration-300 tw:shadow-lg tw:text-[18px]
//               ${activeMenu === 'industry' ? 'tw:opacity-100 tw:visible' : 'tw:opacity-0 tw:invisible'}`}
//             >
//               <div className="tw:max-w-3xl tw:mx-auto tw:px-10 tw:py-12  tw:flex tw:flex-row tw:gap-20">
//                 <div>
//                   <Link
//                     href="/industry#smb"
//                     className="tw:block tw:mb-2
//                     tw:transition-all tw:duration-300 tw:ease-out
//                         tw:hover:text-[#FF6A00]
//                         tw:hover:scale-104
//                     "
//                     onClick={() => setActiveMenu(null)}
//                   >
//                     SMB
//                   </Link>
//                 </div>

//                 <div>
//                   <Link
//                     href="/industry#finance"
//                     className="tw:block tw:mb-2
//                     tw:transition-all tw:duration-300 tw:ease-out
//                         tw:hover:text-[#FF6A00]
//                         tw:hover:scale-104
//                     "
//                     onClick={() => setActiveMenu(null)}
//                   >
//                     Finance
//                   </Link>
//                 </div>

//                 <div>
//                   <Link
//                     href="/industry#retail-ecommerce"
//                     className="tw:block tw:mb-2
//                     tw:transition-all tw:duration-300 tw:ease-out
//                         tw:hover:text-[#FF6A00]
//                         tw:hover:scale-104
//                     "
//                     onClick={() => setActiveMenu(null)}
//                   >
//                     Retail & E-commerce
//                   </Link>
//                 </div>

//                 <div>
//                   <Link
//                     href="/industry#manufacturing"
//                     className="tw:block tw:mb-2
//                     tw:transition-all tw:duration-300 tw:ease-out
//                         tw:hover:text-[#FF6A00]
//                         tw:hover:scale-104
//                     "
//                     onClick={() => setActiveMenu(null)}
//                   >
//                     Manufacturing
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <Link
//             href="/contact"
//             className={`
//             tw:relative tw:inline-block
//             tw:after:absolute tw:after:left-0 tw:after:-bottom-1
//             tw:after:h-[2px] tw:after:w-0 tw:after:bg-black
//             tw:after:transition-all tw:after:duration-300
//             tw:hover:after:w-full
//             ${pathname === '/contact/' ? 'tw:text-[#FF6A00] tw:font-[900] after:tw:w-full after:tw:bg-[#FF6A00]' : ''}
//           `}
//           >
//             Contact Us
//           </Link>
//           {/* <Link href="/case-studies" className={`${pathname === "/case-studies/" ? "tw:font-extrabold tw:text-black" : ""}`}>Case Studies</Link> */}

//           {/* Resources Dropdown */}
//           <div
//             className="tw:relative tw:group tw:flex tw:items-center tw:gap-1 tw:cursor-pointer"
//             onMouseEnter={() => setActiveMenu('resources')}
//             onMouseLeave={() => setActiveMenu(null)}
//           >
//             <span
//               // className={`${pathname.startsWith('/resources') ? 'tw:font-[900] tw:text-[#FF6A00]' : ''}`}
//               className={`
//               tw:relative tw:inline-block
//               tw:after:absolute tw:after:left-0 tw:after:-bottom-1
//               tw:after:h-[2px] tw:after:w-0 tw:after:bg-black
//               tw:after:transition-all tw:after:duration-300

//               tw:group-hover:after:w-full

//               ${
//                 pathname.startsWith('/resources')
//                   ? 'tw:font-[900] tw:text-[#FF6A00] after:tw:w-full after:tw:bg-[#FF6A00]'
//                   : ''
//               }
//             `}
//             >
//               Resources
//             </span>
//             <ExpandMoreIcon fontSize="small" />
//             <div
//               className={`tw:fixed tw:left-0 tw:top-16 tw:w-screen tw:bg-[#FBFCFF]
//               tw:transition-all tw:duration-300 tw:shadow-lg tw:text-[20px]
//               ${activeMenu === 'resources' ? 'tw:opacity-100 tw:visible' : 'tw:opacity-0 tw:invisible'}`}
//             >
//               <div className="tw:max-w-3xl tw:mx-auto tw:px-20 tw:py-12  tw:flex tw:flex-row tw:gap-20">
//                 <div>
//                   {/* <Link href="/resources/blogs" className="tw:block tw:mb-2" onClick={() => setActiveMenu(null)}>Blog</Link> */}
//                   {/* <Link
//                     href="/resources/blogs"
//                     onClick={() => setActiveMenu(null)}
//                     className="
//                         tw:block tw:mb-2
//                         tw:transition-all tw:duration-300 tw:ease-out
//                         tw:hover:text-[#FF6A00]
//                         tw:hover:scale-104
//                       "
//                   >
//                     Blog
//                   </Link> */}
//                 </div>

//                 <div>
//                   {/* <Link
//                     href="/resources/case-studies"
//                     className="tw:block tw:mb-2
//                         tw:transition-all tw:duration-300 tw:ease-out
//                         tw:hover:text-[#FF6A00]
//                         tw:hover:scale-104
//                     "
//                     onClick={() => setActiveMenu(null)}
//                   >
//                     Case Studies
//                   </Link> */}
//                 </div>

//                 <div>
//                   <Link
//                     href="/resources/career"
//                     className="tw:block tw:mb-2
//                     tw:transition-all tw:duration-300 tw:ease-out
//                         tw:hover:text-[#FF6A00]
//                         tw:hover:scale-104
//                     "
//                     onClick={() => setActiveMenu(null)}
//                   >
//                     Career
//                   </Link>
//                 </div>

//                 <div>
//                   <Link
//                     href="/resources/customer-support"
//                     className="tw:block tw:mb-2
//                     tw:transition-all tw:duration-300 tw:ease-out
//                         tw:hover:text-[#FF6A00]
//                         tw:hover:scale-104
//                     "
//                     onClick={() => setActiveMenu(null)}
//                   >
//                     Support
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>

//         {/* CTA - Desktop only */}
//         <div className="tw:hidden tw:lg:flex">
//           <Link
//             href="/contact"
//             className="tw:xl:w-full tw:whitespace-nowrap tw:lg:px-4 tw:lg:py-3 tw:xl:px-6 tw:xl:py-3 tw:text-[10px] tw:lg:text-[14px] tw:xl:text-[16px] tw:rounded-full tw:bg-primary tw:text-white tw:font-medium tw:hover:bg-[#1d8ae0] tw:transition-all tw:shadow-sm tw:text-center"
//           >
//             Get a Free Consultation
//           </Link>
//         </div>

//         {/* MOBILE MENU BUTTON */}
//         {isMobile && (
//           <IconButton onClick={() => toggleDrawer(true)} className="tw:md:hidden">
//             <MenuIcon fontSize="large" />
//           </IconButton>
//         )}
//       </div>

//       {/* MOBILE DRAWER */}
//       <Drawer anchor="left" open={openDrawer} onClose={() => toggleDrawer(false)}>
//         <div className="tw:w-72 tw:p-5 tw:flex tw:flex-col tw:gap-5 tw:text-[black]">
//           <div className="tw:flex tw:justify-end">
//             <IconButton onClick={() => toggleDrawer(false)}>
//               <CloseIcon />
//             </IconButton>
//           </div>

//           <Link
//             href="/"
//             onClick={() => toggleDrawer(false)}
//             className={`tw:text-lg ${pathname === '/' ? 'tw:font-bold tw:text-[#FF6A00]' : ''}`}
//           >
//             Home
//           </Link>
//           <Link
//             href="/about"
//             onClick={() => toggleDrawer(false)}
//             className={`tw:text-lg ${pathname === '/about/' ? 'tw:font-bold tw:text-[#FF6A00]' : ''}`}
//           >
//             About Us
//           </Link>

//           {/* Accordion Services */}
//           <div>
//             <button
//               className="tw:flex tw:items-center tw:justify-between tw:w-full tw:text-lg"
//               onClick={() => toggleAccordion('services')}
//             >
//               <Link
//                 href="/service"
//                 onClick={() => toggleDrawer(false)}
//                 className={`${pathname === '/service/' ? 'tw:font-bold tw:text-[#FF6A00]' : ''}`}
//               >
//                 Services
//               </Link>
//               <ExpandMoreIcon
//                 className={`${openDropdown === 'services' ? 'tw:rotate-180' : ''} tw:transition`}
//               />
//             </button>

//             <Collapse in={openDropdown === 'services'} timeout="auto" unmountOnExit>
//               <div className="tw:pl-4 tw:pt-2 tw:flex tw:flex-col tw:gap-2 ">
//                 <Link
//                   href="/service#managed-it"
//                   onClick={() => toggleDrawer(false)}
//                   className="tw:border-b tw:border-gray-300"
//                 >
//                   Managed IT Services
//                 </Link>

//                 <Link
//                   href="/service#cloud-solutions"
//                   onClick={() => toggleDrawer(false)}
//                   className="tw:border-b tw:border-gray-300"
//                 >
//                   Cloud Solutions
//                 </Link>

//                 <Link
//                   href="/service#it-consulting"
//                   onClick={() => toggleDrawer(false)}
//                   className="tw:border-b tw:border-gray-300"
//                 >
//                   IT Consulting
//                 </Link>

//                 <Link
//                   href="/service#software-development"
//                   onClick={() => toggleDrawer(false)}
//                   className="tw:border-b tw:border-gray-300"
//                 >
//                   Software Development
//                 </Link>

//                 <Link
//                   href="/service#data-analytics"
//                   onClick={() => toggleDrawer(false)}
//                   className="tw:border-b tw:border-gray-300"
//                 >
//                   Data Management & Analytics
//                 </Link>

//                 <Link
//                   href="/service#cybersecurity"
//                   onClick={() => toggleDrawer(false)}
//                   className="tw:border-b tw:border-gray-300"
//                 >
//                   Cybersecurity
//                 </Link>

//               </div>
//             </Collapse>
//           </div>

//           {/* <Link
//             href="/industry"
//             onClick={() => toggleDrawer(false)}
//             className={`tw:text-lg ${pathname === '/industry/' ? 'tw:font-bold tw:text-[#FF6A00]' : ''}`}
//           >
//             Industry
//           </Link> */}
//           <div>
//             <button
//               className="tw:flex tw:items-center tw:justify-between tw:w-full tw:text-lg"
//               onClick={() => toggleAccordion('industry')}
//             >
//               <Link
//                 href="/industry"
//                 onClick={() => toggleDrawer(false)}
//                 className={`${pathname === '/industry/' ? 'tw:font-bold tw:text-[#FF6A00]' : ''}`}
//               >
//                 Industry
//               </Link>
//               <ExpandMoreIcon
//                 className={`${openDropdown === 'industry' ? 'tw:rotate-180' : ''} tw:transition`}
//               />
//             </button>

//             <Collapse in={openDropdown === 'industry'} timeout="auto" unmountOnExit>
//               <div className="tw:pl-4 tw:pt-2 tw:flex tw:flex-col tw:gap-2 ">
//                 <Link
//                   href="/industry#smb"
//                   onClick={() => toggleDrawer(false)}
//                   className="tw:border-b tw:border-gray-300"
//                 >
//                   SMB
//                 </Link>

//                 <Link
//                   href="/industry#finance"
//                   onClick={() => toggleDrawer(false)}
//                   className="tw:border-b tw:border-gray-300"
//                 >
//                   Finance
//                 </Link>

//                 <Link
//                   href="/industry#retail-ecommerce"
//                   onClick={() => toggleDrawer(false)}
//                   className="tw:border-b tw:border-gray-300"
//                 >
//                   Retail & E-commerce
//                 </Link>

//                 <Link
//                   href="/industry#manufacturing"
//                   onClick={() => toggleDrawer(false)}
//                   className="tw:border-b tw:border-gray-300"
//                 >
//                   Manufacturing
//                 </Link>

//               </div>
//             </Collapse>
//           </div>
//           <Link
//             href="/contact"
//             onClick={() => toggleDrawer(false)}
//             className={`tw:text-lg ${pathname === '/contact/' ? 'tw:font-bold tw:text-[#FF6A00]' : ''}`}
//           >
//             Contact Us
//           </Link>

//           {/* Accordion Resources */}
//           <div>
//             <button
//               className={`tw:flex tw:items-center tw:justify-between tw:w-full tw:text-lg
//               ${pathname.startsWith('/resources') ? 'tw:font-bold tw:text-[#FF6A00]' : ''}`}
//               onClick={() => toggleAccordion('resources')}
//             >
//               Resources
//               <span className='tw:text-black'>
//               <ExpandMoreIcon
//                 className={`${openDropdown === 'resources' ? 'tw:rotate-180' : ''} tw:transition`}
//               /></span>
//             </button>

//             <Collapse in={openDropdown === 'resources'} timeout="auto" unmountOnExit>
//               <div className="tw:pl-4 tw:pt-2 tw:flex tw:flex-col tw:gap-2">
//                 {/* <Link
//                   href="/resources/blogs"
//                   onClick={() => toggleDrawer(false)}
//                   className="tw:border-b tw:border-gray-300"
//                 >
//                   Blog
//                 </Link> */}
//                 {/* <Link
//                   href="/resources/case-studies"
//                   onClick={() => toggleDrawer(false)}
//                   className="tw:block tw:border-b tw:border-gray-300"
//                 >
//                   Case Studies
//                 </Link> */}
//                 <Link
//                   href="/resources/career"
//                   onClick={() => toggleDrawer(false)}
//                   className="tw:border-b tw:border-gray-300"
//                 >
//                   Career
//                 </Link>
//                 <Link
//                   href="/resources/customer-support"
//                   onClick={() => toggleDrawer(false)}
//                   className="tw:border-b tw:border-gray-300"
//                 >
//                   Support
//                 </Link>
//               </div>
//             </Collapse>
//           </div>

//           <Link
//             href="/contact"
//             onClick={() => toggleDrawer(false)}
//             className="tw:mt-5 tw:w-full tw:text-center tw:px-5 tw:py-3 tw:rounded-full tw:bg-primary tw:text-white tw:font-medium tw:hover:bg-blue-600 tw:transition"
//           >
//             Get a Free Consultation
//           </Link>
//         </div>
//       </Drawer>
//     </header>
//   );
// }

//final 3
// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import React, { useState, useEffect } from 'react';

// import Drawer from '@mui/material/Drawer';
// import Collapse from '@mui/material/Collapse';
// import MenuIcon from '@mui/icons-material/Menu';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// export default function Navbar() {
//   const [openDrawer, setOpenDrawer] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const [activeMenu, setActiveMenu] = useState<null | 'services' | 'resources'>(null); // desktop

//   const pathname = usePathname();

//   // Scroll state
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Detect screen width (mobile only)
//   useEffect(() => {
//     const checkScreen = () => {
//       setIsMobile(window.innerWidth < 1024);
//     };
//     checkScreen();

//     window.addEventListener('resize', checkScreen);
//     return () => window.removeEventListener('resize', checkScreen);
//   }, []);

//   // Detect scroll
//   useEffect(() => {
//     const onScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   const toggleDrawer = (open: boolean) => {
//     if (isMobile) setOpenDrawer(open);
//   };

//   const toggleAccordion = (name: string) => {
//     setOpenDropdown(openDropdown === name ? null : name);
//   };

//   return (
//     <header
//       className={`
//         tw:fixed tw:top-0 tw:left-0 tw:w-full tw:z-50 tw:transition-all tw:duration-300
//         ${
//           isScrolled
//             ? 'tw:bg-white/40 tw:backdrop-blur-sm tw:shadow-md'
//             : 'tw:bg-transparent tw:backdrop-blur-0'
//         }
//       `}
//     >
//       <div className="tw:mx-auto tw:px-4 tw:h-20 tw:flex tw:items-center tw:justify-between">
//         {/* Logo */}
//         <Link href="/" className="tw:flex tw:items-center tw:gap-2">
//           <img src="/logo/logo.svg" className="tw:h-10 tw:w-auto" />
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="tw:hidden tw:lg:flex tw:items-center tw:lg:gap-4 tw:xl:gap-8 tw:text-[15px] tw:font-bold tw:text-black tw:ml-4 tw:xl:ml-10">
//           {/* <Link href="/" className={`${pathname === '/' ? 'tw:font-[900] tw:text-[#FF6A00]' : ''}`}> */}
//           <Link
//             href="/"
//             className={`
//               tw:relative tw:inline-block
//               tw:after:absolute tw:after:left-0 tw:after:-bottom-1
//               tw:after:h-[2px] tw:after:w-0 tw:after:bg-black
//               tw:after:transition-all tw:after:duration-300
//               tw:hover:after:w-full
//               ${pathname === '/' ? 'tw:text-[#FF6A00] after:tw:w-full after:tw:bg-[#FF6A00]' : ''}
//             `}
//           >
//             Home
//           </Link>

//           {/* Home
//           </Link> */}
//           <Link
//             href="/about"
//             className={`
//             tw:relative tw:inline-block
//             tw:after:absolute tw:after:left-0 tw:after:-bottom-1
//             tw:after:h-[2px] tw:after:w-0 tw:after:bg-black
//             tw:after:transition-all tw:after:duration-300
//             tw:hover:after:w-full
//             ${pathname === '/about/' ? 'tw:text-[#FF6A00] after:tw:w-full after:tw:bg-[#FF6A00]' : ''}
//           `}
//           >
//             About Us
//           </Link>

//           {/* Services Dropdown */}
//           <div
//             className="tw:relative tw:group tw:flex tw:items-center tw:gap-1 tw:cursor-pointer"
//             onMouseEnter={() => setActiveMenu('services')}
//             onMouseLeave={() => setActiveMenu(null)}
//           >
//             <Link
//               href="/service"
//               className={`
//               tw:relative tw:inline-block
//               tw:after:absolute tw:after:left-0 tw:after:-bottom-1
//               tw:after:h-[2px] tw:after:w-0 tw:after:bg-black
//               tw:after:transition-all tw:after:duration-300
//               tw:hover:after:w-full
//               ${pathname === '/service/' ? 'tw:text-[#FF6A00] after:tw:w-full after:tw:bg-[#FF6A00]' : ''}
//             `}
//             >
//               Services
//             </Link>
//             <ExpandMoreIcon fontSize="small" />
//             <div
//               className={`tw:fixed tw:left-0 tw:top-15 tw:w-screen tw:bg-[#FBFCFF]
//               tw:transition-all tw:duration-300 tw:shadow-lg tw:text-[18px]
//               ${activeMenu === 'services' ? 'tw:opacity-100 tw:visible' : 'tw:opacity-0 tw:invisible'}`}
//             >
//               <div className="tw:max-w-3xl tw:mx-auto tw:px-10 tw:py-12  tw:flex tw:flex-row tw:gap-20">
//                 <div>
//                   <Link
//                     href="/service#managed-it"
//                     className="tw:block tw:mb-2
//                     tw:transition-all tw:duration-300 tw:ease-out
//                         tw:hover:text-[#FF6A00]
//                         tw:hover:scale-115
//                     "
//                     onClick={() => setActiveMenu(null)}
//                   >
//                     Managed IT Services
//                   </Link>
//                 </div>

//                 <div>
//                   <Link
//                     href="/service#cloud-solutions"
//                     className="tw:block tw:mb-2
//                     tw:transition-all tw:duration-300 tw:ease-out
//                         tw:hover:text-[#FF6A00]
//                         tw:hover:scale-115
//                     "
//                     onClick={() => setActiveMenu(null)}
//                   >
//                     Cloud Solutions
//                   </Link>
//                 </div>

//                 <div>
//                   <Link
//                     href="/service#software-development"
//                     className="tw:block tw:mb-2
//                     tw:transition-all tw:duration-300 tw:ease-out
//                         tw:hover:text-[#FF6A00]
//                         tw:hover:scale-115
//                     "
//                     onClick={() => setActiveMenu(null)}
//                   >
//                     Software Development
//                   </Link>
//                 </div>

//                 <div>
//                   <Link
//                     href="/service#cybersecurity"
//                     className="tw:block tw:mb-2
//                     tw:transition-all tw:duration-300 tw:ease-out
//                         tw:hover:text-[#FF6A00]
//                         tw:hover:scale-115
//                     "
//                     onClick={() => setActiveMenu(null)}
//                   >
//                     Cybersecurity
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <Link
//             href="/industry"
//             className={`
//             tw:relative tw:inline-block
//             tw:after:absolute tw:after:left-0 tw:after:-bottom-1
//             tw:after:h-[2px] tw:after:w-0 tw:after:bg-black
//             tw:after:transition-all tw:after:duration-300
//             tw:hover:after:w-full
//             ${pathname === '/industry/' ? 'tw:text-[#FF6A00] after:tw:w-full after:tw:bg-[#FF6A00]' : ''}
//           `}
//           >
//             Industry
//           </Link>
//           <Link
//             href="/contact"
//             className={`
//             tw:relative tw:inline-block
//             tw:after:absolute tw:after:left-0 tw:after:-bottom-1
//             tw:after:h-[2px] tw:after:w-0 tw:after:bg-black
//             tw:after:transition-all tw:after:duration-300
//             tw:hover:after:w-full
//             ${pathname === '/contact/' ? 'tw:text-[#FF6A00] after:tw:w-full after:tw:bg-[#FF6A00]' : ''}
//           `}
//           >
//             Contact Us
//           </Link>
//           {/* <Link href="/case-studies" className={`${pathname === "/case-studies/" ? "tw:font-extrabold tw:text-black" : ""}`}>Case Studies</Link> */}

//           {/* Resources Dropdown */}
//           <div
//             className="tw:relative tw:group tw:flex tw:items-center tw:gap-1 tw:cursor-pointer"
//             onMouseEnter={() => setActiveMenu('resources')}
//             onMouseLeave={() => setActiveMenu(null)}
//           >
//             <span
//               // className={`${pathname.startsWith('/resources') ? 'tw:font-[900] tw:text-[#FF6A00]' : ''}`}
//               className={`
//               tw:relative tw:inline-block
//               tw:after:absolute tw:after:left-0 tw:after:-bottom-1
//               tw:after:h-[2px] tw:after:w-0 tw:after:bg-black
//               tw:after:transition-all tw:after:duration-300

//               tw:group-hover:after:w-full

//               ${
//                 pathname.startsWith('/resources')
//                   ? 'tw:font-[900] tw:text-[#FF6A00] after:tw:w-full after:tw:bg-[#FF6A00]'
//                   : ''
//               }
//             `}
//             >
//               Resources
//             </span>
//             <ExpandMoreIcon fontSize="small" />
//             <div
//               className={`tw:fixed tw:left-0 tw:top-15 tw:w-screen tw:bg-[#FBFCFF]
//               tw:transition-all tw:duration-300 tw:shadow-lg tw:text-[20px]
//               ${activeMenu === 'resources' ? 'tw:opacity-100 tw:visible' : 'tw:opacity-0 tw:invisible'}`}
//             >
//               <div className="tw:max-w-3xl tw:mx-auto tw:px-20 tw:py-12  tw:flex tw:flex-row tw:gap-20">
//                 <div>
//                   {/* <Link href="/resources/blogs" className="tw:block tw:mb-2" onClick={() => setActiveMenu(null)}>Blog</Link> */}
//                   <Link
//                     href="/resources/blogs"
//                     onClick={() => setActiveMenu(null)}
//                     className="
//                         tw:block tw:mb-2
//                         tw:transition-all tw:duration-300 tw:ease-out
//                         tw:hover:text-[#FF6A00]
//                         tw:hover:scale-115
//                       "
//                   >
//                     Blog
//                   </Link>
//                 </div>

//                 <div>
//                   <Link
//                     href="/resources/case-studies"
//                     className="tw:block tw:mb-2
//                         tw:transition-all tw:duration-300 tw:ease-out
//                         tw:hover:text-[#FF6A00]
//                         tw:hover:scale-115
//                     "
//                     onClick={() => setActiveMenu(null)}
//                   >
//                     Case Studies
//                   </Link>
//                 </div>

//                 <div>
//                   <Link
//                     href="/resources/career"
//                     className="tw:block tw:mb-2
//                     tw:transition-all tw:duration-300 tw:ease-out
//                         tw:hover:text-[#FF6A00]
//                         tw:hover:scale-115
//                     "
//                     onClick={() => setActiveMenu(null)}
//                   >
//                     Career
//                   </Link>
//                 </div>

//                 <div>
//                   <Link
//                     href="/resources/customer-support"
//                     className="tw:block tw:mb-2
//                     tw:transition-all tw:duration-300 tw:ease-out
//                         tw:hover:text-[#FF6A00]
//                         tw:hover:scale-115
//                     "
//                     onClick={() => setActiveMenu(null)}
//                   >
//                     Support
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>

//         {/* CTA - Desktop only */}
//         <div className="tw:hidden tw:lg:flex">
//           <Link
//             href="/contact"
//             className="tw:xl:w-full tw:whitespace-nowrap tw:lg:px-4 tw:lg:py-3 tw:xl:px-6 tw:xl:py-3 tw:text-[10px] tw:lg:text-[14px] tw:xl:text-[16px] tw:rounded-full tw:bg-primary tw:text-white tw:font-medium tw:hover:bg-[#1d8ae0] tw:transition-all tw:shadow-sm tw:text-center"
//           >
//             Get a Free Consultation
//           </Link>
//         </div>

//         {/* MOBILE MENU BUTTON */}
//         {isMobile && (
//           <IconButton onClick={() => toggleDrawer(true)} className="tw:md:hidden">
//             <MenuIcon fontSize="large" />
//           </IconButton>
//         )}
//       </div>

//       {/* MOBILE DRAWER */}
//       <Drawer anchor="left" open={openDrawer} onClose={() => toggleDrawer(false)}>
//         <div className="tw:w-72 tw:p-5 tw:flex tw:flex-col tw:gap-5 tw:text-[black]">
//           <div className="tw:flex tw:justify-end">
//             <IconButton onClick={() => toggleDrawer(false)}>
//               <CloseIcon />
//             </IconButton>
//           </div>

//           <Link
//             href="/"
//             onClick={() => toggleDrawer(false)}
//             className={`tw:text-lg ${pathname === '/' ? 'tw:font-bold tw:text-[#FF6A00]' : ''}`}
//           >
//             Home
//           </Link>
//           <Link
//             href="/about"
//             onClick={() => toggleDrawer(false)}
//             className={`tw:text-lg ${pathname === '/about/' ? 'tw:font-bold tw:text-[#FF6A00]' : ''}`}
//           >
//             About Us
//           </Link>

//           {/* Accordion Services */}
//           <div>
//             <button
//               className="tw:flex tw:items-center tw:justify-between tw:w-full tw:text-lg"
//               onClick={() => toggleAccordion('services')}
//             >
//               <Link
//                 href="/service"
//                 onClick={() => toggleDrawer(false)}
//                 className={`${pathname === '/service/' ? 'tw:font-bold tw:text-[#FF6A00]' : ''}`}
//               >
//                 Services
//               </Link>
//               <ExpandMoreIcon
//                 className={`${openDropdown === 'services' ? 'tw:rotate-180' : ''} tw:transition`}
//               />
//             </button>

//             <Collapse in={openDropdown === 'services'} timeout="auto" unmountOnExit>
//               <div className="tw:pl-4 tw:pt-2 tw:flex tw:flex-col tw:gap-2 ">
//                 <Link
//                   href="/services/design"
//                   onClick={() => toggleDrawer(false)}
//                   className="tw:border-b tw:border-gray-300"
//                 >
//                   Managed IT Services
//                 </Link>
//                 <Link
//                   href="/services/development"
//                   onClick={() => toggleDrawer(false)}
//                   className="tw:border-b tw:border-gray-300"
//                 >
//                   Cloud Solutions
//                 </Link>
//                 <Link
//                   href="/services/marketing"
//                   onClick={() => toggleDrawer(false)}
//                   className="tw:border-b tw:border-gray-300"
//                 >
//                   Software Development
//                 </Link>
//                 <Link
//                   href="/services/marketing"
//                   onClick={() => toggleDrawer(false)}
//                   className="tw:border-b tw:border-gray-300"
//                 >
//                   Cybersecurity
//                 </Link>
//               </div>
//             </Collapse>
//           </div>

//           <Link
//             href="/industry"
//             onClick={() => toggleDrawer(false)}
//             className={`tw:text-lg ${pathname === '/industry/' ? 'tw:font-bold tw:text-[#FF6A00]' : ''}`}
//           >
//             Industry
//           </Link>
//           <Link
//             href="/contact"
//             onClick={() => toggleDrawer(false)}
//             className={`tw:text-lg ${pathname === '/contact/' ? 'tw:font-bold tw:text-[#FF6A00]' : ''}`}
//           >
//             Contact Us
//           </Link>

//           {/* Accordion Resources */}
//           <div>
//             <button
//               className={`tw:flex tw:items-center tw:justify-between tw:w-full tw:text-lg
//               ${pathname.startsWith('/resources') ? 'tw:font-bold tw:text-[#FF6A00]' : ''}`}
//               onClick={() => toggleAccordion('resources')}
//             >
//               Resources
//               <span className='tw:text-black'>
//               <ExpandMoreIcon
//                 className={`${openDropdown === 'resources' ? 'tw:rotate-180' : ''} tw:transition`}
//               /></span>
//             </button>

//             <Collapse in={openDropdown === 'resources'} timeout="auto" unmountOnExit>
//               <div className="tw:pl-4 tw:pt-2 tw:flex tw:flex-col tw:gap-2">
//                 <Link
//                   href="/resources/blogs"
//                   onClick={() => toggleDrawer(false)}
//                   className="tw:border-b tw:border-gray-300"
//                 >
//                   Blog
//                 </Link>
//                 <Link
//                   href="/resources/case-studies"
//                   onClick={() => toggleDrawer(false)}
//                   className="tw:block tw:border-b tw:border-gray-300"
//                 >
//                   Case Studies
//                 </Link>
//                 <Link
//                   href="/resources/career"
//                   onClick={() => toggleDrawer(false)}
//                   className="tw:border-b tw:border-gray-300"
//                 >
//                   Career
//                 </Link>
//                 <Link
//                   href="/resources/customer-support"
//                   onClick={() => toggleDrawer(false)}
//                   className="tw:border-b tw:border-gray-300"
//                 >
//                   Support
//                 </Link>
//               </div>
//             </Collapse>
//           </div>

//           <Link
//             href="/contact"
//             onClick={() => toggleDrawer(false)}
//             className="tw:mt-5 tw:w-full tw:text-center tw:px-5 tw:py-3 tw:rounded-full tw:bg-primary tw:text-white tw:font-medium tw:hover:bg-blue-600 tw:transition"
//           >
//             Get a Free Consultation
//           </Link>
//         </div>
//       </Drawer>
//     </header>
//   );
// }
