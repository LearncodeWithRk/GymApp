import React from 'react'
import Image from 'next/image'

function Service() {
  return (
   
        <section className="py-12 bg-white sm:py-16 lg:py-20">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">Don Complain Just Work Harder</h2>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">Lorem ipsum dolor sit amet consectetur adipis elit</p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
            <div className="md:p-8 lg:p-14">
            <Image className="mx-auto" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1693396712/gym%20template/gain-weight_ayvlfy.png" alt="" width={60} height={60} />
                <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Gainer</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet consectetur adipis elit Sit enim nece proin faucibus nibh et sagittis a Lacinia purus ac amet</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <Image className="mx-auto" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1693396712/gym%20template/protein_aphlzh.png" alt="" width={60} height={60} />
                <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Protein</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet consectetur adipis elit Sit enim nec proin faucibus nibh et sagittis a Lacinia purus ac amet</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
            <Image className="mx-auto" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1693396712/gym%20template/amino-acids_ddy2zm.png" alt="" width={60} height={60} />
                <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Amino Acids</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet consectetur adipis elit. Sit enim nec proin faucibus nibh et sagittis a Lacinia purus ac amet</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
            <Image className="mx-auto" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1693396712/gym%20template/vitamins_yzvo8z.png" alt="" width={60} height={60} />
                <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Vitamins & Health</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet consectetur adipis elit Sit enim nec proin faucibus nibh et sagittis a Lacinia purus ac amet</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
            <Image className="mx-auto" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1693396711/gym%20template/body_nxwiet.png" alt="" width={60} height={60} />
                <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Fat Burner</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet consectetur adipis elit Sit enim nec proin faucibus nibh et sagittis a Lacinia purus ac amet</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
                <Image className="mx-auto" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1693396712/gym%20template/sport_gupoko.png" alt="" width={60} height={60} />
                <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Clothing & Accessories</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet consectetur adipis elit Sit enim nec proin faucibus nibh et sagittis a Lacinia purus ac amet</p>
            </div>
        </div>
    </div>
</section>

    )

}

export default Service