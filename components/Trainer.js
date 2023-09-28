import React from 'react'
import Image from 'next/image'

function Trainer() {
  return (
<section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">Experienced Fitness Coach</h2>
            <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys</p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
            <div>
                <Image className="w-full" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1693397618/gym%20template/team-member-1_hteygs.png" alt="" width={1920} height={1920} />
            </div>

            <div>
                <Image className="w-full" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1693397618/gym%20template/team-member-2_zxtvud.png" alt="" width={1920} height={1920} />
            </div>

            <div>
                <Image className="w-full" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1693397618/gym%20template/team-member-3_glpopf.png" alt="" width={1920} height={1920} />
            </div>
        </div>

        <div className="mt-8 text-center md:mt-16">
            <a href="#" title="" className="inline-flex items-center justify-center py-4 font-semibold text-white transition-all duration-200 bg-red-800 border border-transparent rounded-md px-14 hover:bg-red-500 focus:bg-red-500" role="button"> Your Trainer </a>
        </div>
    </div>
</section>

  )
}

export default Trainer