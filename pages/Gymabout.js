import React from 'react'
import Image from 'next/image'

function Gymabout() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-4">

<div className="container mx-auto 2xl:px-12">
        <Image className="w-full mt-6" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1695906358/gym%20template/aboutuss_ygtwny.png" alt="" width={1920} height={1920}></Image>
    </div>
    <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        

        <div className="flow-root mt-12 sm:mt-16">
            <div className="divide-y divide-gray--200 -my-9">
                <div className="py-9">
                    <p className="text-xl font-semibold text-black">How to create an account</p>
                    <p className="mt-3 text-base text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries</p>
                    <p className="mt-3 text-base text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries</p>
                </div>

                <div className="py-9">
                    <p className="text-xl font-semibold text-black">What fitness support?</p>
                    <p className="mt-3 text-base text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries</p>
                </div>

                <div className="py-9">
                    <p className="text-xl font-semibold text-black">How do you provide support?</p>
                    <p className="mt-3 text-base text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <div className="py-9">
                    <p className="text-xl font-semibold text-black">How do you provide support?</p>
                    <p className="mt-3 text-base text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <a href="#" title="" className="text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">support@Celebration.com</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Gymabout