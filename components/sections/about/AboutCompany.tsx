'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function AboutCompany() {
  return (
    <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <h6 className="text-gray-400 text-base font-normal leading-relaxed">
                  About Us
                </h6>
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    Jiyology building construction & plumbing is a brainchild
                    and a long-time dream of Vusi Jiya and Lerato Jiya who are
                    very passionate about helping and dealing with customers and
                    that has brought about the need to realise the dream of one
                    day owning a business and a company that will a benchmark
                    and a leader in both the building construction and plumbing
                    industry.
                  </p>
                </div>
              </div>
              <div className="w-full flex-col justify-center items-start gap-6 flex">
                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                      SABS Approved Products
                    </h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      We only supply and utilise high quality products approved
                      by SABS, ensuring excellence in every project.
                    </p>
                  </div>
                  <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                      BEE Level One Compliant
                    </h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      We are a Level One 135% BEE compliant company, 50% black
                      woman owned and an equal opportunity employer.
                    </p>
                  </div>
                </div>
                <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                      Professional Team
                    </h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      We have a well-trained and competent team who continue
                      striving to learn and keep up with the changing world.
                    </p>
                  </div>
                  <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                      We Focus On You
                    </h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">
                      We treat our clients as we would like to be treated,
                      providing value-added services to each client.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button className="sm:w-fit w-full group px-3.5 py-2 bg-neutral-950 hover:bg-[#33b6db] rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
              <span className="px-1.5 text-white text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                Read More
              </span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-all duration-700 ease-in-out" />
            </button>
          </div>
          <div className="w-full lg:justify-start justify-center items-start flex">
            <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
              <Image
                className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                src="/images/demo.png"
                width={800}
                height={900}
                alt="about Us image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
