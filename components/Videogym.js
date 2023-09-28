import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Videogym() {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
            <div>
                <Image className="w-full max-w-md mx-auto" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1693397925/gym%20template/whay_jbjrg0.png" alt="" width={1920} height={1920} />
            </div>

            <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Nutrabay Pure Whey Protein Concentrate</h2>
                <p className="mt-6 text-base text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys</p>

                <Link href="#" title="" className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-red-800 rounded-md mt-9 hover:bg-red-500 focus:bg-red-800" role="button"> Buy Now </Link>
            </div>
        </div>
    </div>
</section>

  )
}

export default Videogym