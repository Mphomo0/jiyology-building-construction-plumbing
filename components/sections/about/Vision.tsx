import React from 'react'
import { Eye, GraduationCap, Landmark } from 'lucide-react'

export default function Vision() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Our Objectives
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="hover:shadow-2xl hover:border-gray-400 transition-all duration-150 p-4 rounded-2xl">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#33b6db] text-white">
              <Landmark size={20} />
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-medium text-gray-900">Mission</h3>
              <p className="mt-2 text-base text-gray-500">
                To provide clients with the best quality products and excellent
                services which exceed customer expectations in the plumbing and
                business industry and to create a long term relationships with
                our clients.
              </p>
            </div>
          </div>
          <div className="hover:shadow-2xl hover:border-gray-400 transition-all duration-150 p-4 rounded-2xl">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#33b6db] text-white">
              <Eye size={20} />
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-medium text-gray-900">Vision</h3>
              <p className="mt-2 text-base text-gray-500">
                To provide clients with professional fast and reliable solutions
                that best suits their needs and their pocket. pressing issues
                facing humanity and improve people&lsquo;s lives.
              </p>
            </div>
          </div>
          <div className="hover:shadow-2xl hover:border-gray-400 transition-all duration-150 p-4 rounded-2xl">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#33b6db] text-white">
              <GraduationCap size={20} />
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-medium text-gray-900">Values</h3>
              <p className="mt-2 text-base text-gray-500">
                Our values are complemented by personal experiences, which is
                the core of the business delivery and reliable client service.
                We treat our clients as we would like to be treated; we provide
                value added services to each client by offering expert service
                and advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
