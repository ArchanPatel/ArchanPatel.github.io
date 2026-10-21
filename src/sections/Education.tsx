export const Education = () => (
  <section id="education" className="py-24 md:py-32 px-6 bg-[#eeede8]">
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-12 md:gap-20">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b45d38] mb-4">04 / Studies</p>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#242724]">Education</h2>
        </div>
        <div className="border-t border-[#242724]/20">
          <article className="py-7 border-b border-[#242724]/20">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-6">
              <div>
                <h3 className="text-lg font-semibold text-[#242724]">Master of Science in Computer Science</h3>
                <p className="mt-1 text-[#b45d38] font-medium">Georgia Institute of Technology</p>
                <p className="mt-1 text-sm text-[#656962]">Specialization in Artificial Intelligence</p>
              </div>
              <p className="mt-2 sm:mt-1 text-sm text-[#656962]">Jan 2025 – Present</p>
            </div>
          </article>
          <article className="py-7 border-b border-[#242724]/20">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-6">
              <div>
                <h3 className="text-lg font-semibold text-[#242724]">Bachelor of Applied Science</h3>
                <p className="mt-1 text-[#b45d38] font-medium">University of Waterloo</p>
                <p className="mt-1 text-sm text-[#656962]">Systems Design Engineering</p>
              </div>
              <p className="mt-2 sm:mt-1 text-sm text-[#656962]">Sept 2019 – April 2024</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
);
