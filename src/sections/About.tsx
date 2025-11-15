import { useMemo } from 'react';


export const About = () => {
  const skills = useMemo(() => [
    { category: 'Mobile', items: ['Kotlin', 'Java', 'Jetpack Compose', 'Android SDK', 'React Native'] },
    { category: 'Architecture', items: ['MVVM', 'Clean Architecture', 'Dependency Injection', 'Coroutines', 'Flow'] },
    { category: 'Backend', items: ['Python', 'Node.js', 'TypeScript', 'REST APIs', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'GCP', 'CI/CD', 'Fastlane'] }
  ], []);

  return (
    <section id="about" className="py-20 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-gray-300 space-y-4">
            <p className="text-lg">
              I'm an Android Developer passionate about creating performant, user-friendly mobile applications.
              Currently working at <span className="text-blue-400 font-semibold">Konrad Group</span>, I specialize 
              in building scalable design systems and implementing modern Android architectures.
            </p>
            <p className="text-lg">
              I'm pursuing my <span className="text-blue-400 font-semibold">Master's in Computer Science</span> with 
              a specialization in Artificial Intelligence at Georgia Institute of Technology, building on my foundation 
              from the University of Waterloo.
            </p>
            <p className="text-lg">
              With experience across Android, full-stack development, and CI/CD pipelines, I bring a comprehensive 
              approach to software engineering, always focusing on clean code, best practices, and delivering 
              exceptional user experiences.
            </p>
          </div>
          <div className="space-y-6">
            {skills.map(({ category, items }) => (
              <div key={category}>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};