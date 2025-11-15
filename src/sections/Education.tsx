import { GraduationCap } from 'lucide-react';

export const Education = () => (
  <section className="py-20 px-6 bg-gray-900">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">Education</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-start gap-3 mb-4">
            <GraduationCap className="text-blue-400 mt-1" size={28} />
            <div>
              <h3 className="text-xl font-bold text-white">Master of Science in Computer Science</h3>
              <p className="text-blue-400 font-semibold">Georgia Institute of Technology</p>
              <p className="text-gray-400">Specialization in Artificial Intelligence</p>
              <p className="text-gray-500 text-sm mt-2">Jan 2025 – Present</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-start gap-3 mb-4">
            <GraduationCap className="text-blue-400 mt-1" size={28} />
            <div>
              <h3 className="text-xl font-bold text-white">Bachelor of Applied Science</h3>
              <p className="text-blue-400 font-semibold">University of Waterloo</p>
              <p className="text-gray-400">Systems Design Engineering</p>
              <p className="text-gray-500 text-sm mt-2">Sept 2019 – April 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);