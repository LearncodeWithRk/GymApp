import React from 'react'
import Image from 'next/image'

function Brand() {
  return (
    <section className="py-5 bg-white sm:py-10 lg:py-10">
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        

        <div className="grid items-center grid-cols-2 gap-5 mt-12 md:grid-cols-4 sm:gap-y-16">
            <div>
                <Image className="object-contain w-auto mx-auto h-14" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1693558527/gym%20template/logo-1_go2v8c.png" alt="" width={1920} height={1920} />
            </div>

            <div>
                <Image className="object-contain w-auto mx-auto h-14" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1693558651/gym%20template/logo-2_t9flah.png" alt="" width={1920} height={1920}/>
            </div>

            <div>
                <Image className="object-contain w-auto h-14 mx-auto" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1693558950/gym%20template/logo-3_ukdwgy.png" alt="" width={1920} height={1920}/>
            </div>

            <div>
                <Image className="object-contain w-auto mx-auto h-14" src="https://res.cloudinary.com/dysxcljt2/image/upload/v1693558782/gym%20template/logo-4_b7piqq.png" alt="" width={1920} height={1920}/>
            </div>
        </div>
    </div>
</section>

  )
}

export default Brand