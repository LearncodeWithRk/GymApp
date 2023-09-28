import React from 'react'
import Exercisefeature from './Exercisefeature'
import Callaction from '@/components/Callaction'
import Image from 'next/image'
import Link from 'next/link'

function Features() {
  return (

            
    <>
    
    <section className="bg-gray-50 2xl:py-24 2xl:bg-gray-50">
    <div className="px-4 mx-auto bg-gray-50 max-w-7xl sm:px-6 lg:px-8 2xl:rounded-xl">
        <div className="py-10 sm:py-16 lg:py-24 2xl:pl-24">
            <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-8 2xl:gap-x-20">
                <div className="lg:order-2 2xl:-mr-24">
                    <Image className="w-full shadow-xl rounded-xl" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695924933/gym%20template/gym_banner_zr8uwv.png" alt="" width={1920} height={1920} />
                </div>

                <div className="lg:order-1">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-snug">GYM FEATURE <br className="hidden xl:block" />OPEN GYM MEMBERSHIP</h2>

                    <ul className="grid grid-cols-1 mt-4 sm:mt-10 sm:grid-cols-2 gap-x-10 xl:gap-x-16 gap-y-4 xl:gap-y-6">
                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span className="ml-3 font-medium text-black"> Circuit Training Equipment </span>
                        </li>

                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span className="ml-3 font-medium text-black"> Mobility Equipment  </span>
                        </li>

                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span className="ml-3 font-medium text-black"> Clean and Hygienic </span>
                        </li>

                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span className="ml-3 font-medium text-black"> EStrongman Equipment </span>
                        </li>

                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span className="ml-3 font-medium text-black"> Powerlifting Equipment  </span>
                        </li>

                        <li className="flex items-center">
                            <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span className="ml-3 font-medium text-black"> 
Weightlifting Equipment</span>
                        </li>
                    </ul>

                    <div className="flex flex-col items-start mt-8 sm:space-x-4 sm:flex-row sm:items-center lg:mt-12">
                        <Link href="#" title="" className="inline-flex items-center justify-center px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-red-600 border border-transparent rounded-md hover:bg-red-700 focus:bg-red-700" role="button">
                            
                          Watch Video
                        </Link>

                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  <Exercisefeature />
  <Callaction />
    </>
        )
    
        
}

export default Features