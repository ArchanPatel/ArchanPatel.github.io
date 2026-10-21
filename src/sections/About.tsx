import { useMemo } from 'react';


export const About = () => {
  const skills = useMemo(() => [
    { category: 'Mobile', items: ['Kotlin', 'Java', 'Jetpack Compose', 'Android SDK', 'React Native'] },
    { category: 'Architecture', items: ['MVVM', 'Clean Architecture', 'Dependency Injection', 'Coroutines', 'Flow'] },
    { category: 'Backend', items: ['Python', 'Node.js', 'TypeScript', 'REST APIs', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'GCP', 'CI/CD', 'Fastlane'] }
  ], []);

  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-[#f7f6f2]">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-12 md:gap-20">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b45d38] mb-4">01 / About</p>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#242724]">A little about me</h2>
          </div>
          <div className="text-[#555b55] space-y-5 leading-8">
            <p className="text-base md:text-lg">
              I'm an Android Developer passionate about creating performant, user-friendly mobile applications.
              Currently working at <span className="text-[#242724] font-semibold">Konrad Group</span>, I specialize
              in building scalable and modern Android applications.
            </p>
            <p className="text-base md:text-lg">
              I'm pursuing my <span className="text-[#242724] font-semibold">Master's in Computer Science</span> with
              a specialization in <span className="text-[#242724] font-semibold">Artificial Intelligence</span> at Georgia Institute of Technology, building on my foundation 
              from the University of Waterloo.
            </p>
            <p className="text-base md:text-lg">
              With experience across Android, full-stack development, and CI/CD pipelines, I bring a comprehensive 
              approach to software engineering, always focusing on clean code, best practices, and delivering 
              exceptional user experiences.
            </p>
          </div>
          <div className="mt-2 md:mt-10 border-t border-[#242724]/15">
            {skills.map(({ category, items }) => (
              <div key={category} className="grid sm:grid-cols-[9rem_1fr] gap-2 sm:gap-6 py-4 border-b border-[#242724]/15">
                <h3 className="text-sm font-semibold text-[#242724]">{category}</h3>
                <p className="text-sm leading-6 text-[#656962]">{items.join('  /  ')}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};