import React from 'react'
import {Link} from 'react-router-dom';
import Logo from '../../Logo';

const Footer = () => {
  return (
    <section className='realative overflow-hidden py-10 bg-gray-400 border border-t-2 border-t-black'>
      <div className='relative z-10 mx-auto max-w-7xl px-4'>
        <div className='flex flex-wrap'>
          <div className='w-full p-6 md:w-1/2 lg:w-5/12'>
            <div className='flex h-full flex-col justify-between'>
              <div className='mb-4 inline-flex iteam-center'>
                <Logo width="100px" />
                <div>
                  <p className='text-sm text-gray-600'>&copy; copyright 2023</p>
                </div>
              </div>
            </div>
            <div className='w-full p-6 md:w-1/2 lg:w-2/12'>
              <div className='h-full'>
                <h3 className='tracking-px mb-9 text-sm font-semibold uppwecase text-gray-500'>
                  Company
                </h3>
                <ul>
                  <li className='mb-4'>
                    <Link className='text-base font-medium text-gray-900 hover:text-gray-700'
                      to="/">
                      Features
                    </Link>
                  </li>
                  <li>

                    <Link className='text-base font-medium text-gray-900 hover:text-gray-700'
                      to="/">
                      Prising
                    </Link>
                  </li>
                  <li>
                    <Link className='text-base font-medium text-gray-900 hover:text-gray-700'
                      to="/">
                      Affilate Program
                    </Link>
                  </li>
                  <li>
                    <Link className='text-base font-medium text-gray-900 hover:text-gray-700'
                      to="/">
                      press kit
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='w-full p-6 md:w-1/2 lg:w-2/12'>
              <div className='h-full'>
                <h3 className='tracking-px mb-9 text-xs font-semibold uppercase text-gray-500'>
                  Support
                </h3>
                <ul>
                  <li>
                    <Link className='text-base font-medium text-gray-900 hover:text-gray-700'
                      to="/">
                      Account
                    </Link>
                  </li>
                  <li>
                    <Link className='text-base font-medium text-gray-900 hover:text-gray-700'
                      to="/">
                      help
                    </Link>
                  </li>
                  <li>
                    <Link className='text-base font-medium text-gray-900 hover:text-gray-700'
                      to="/">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link className='text-base font-medium text-gray-900 hover:text-gray-700'
                      to="/">
                      Custemer Suppoet
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='w-full p-6 md:w-1/2 lg:w-3/12'> 
               <div className='h-full'>
                <h3 className='tracking-px mb-9 text-xs font-semibold uppercase text-gray-500'>
                  Legals
                </h3>
                <ul>
                  <li>
                    <Link className='text-base font-medium text-gray-900 hover:text-gray-700'
                      to="/">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li>
                    <Link className='text-base font-medium text-gray-900 hover:text-gray-700'
                      to="/">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link className='text-base font-medium text-gray-900 hover:text-gray-700'
                      to="/">
                      Licensing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
