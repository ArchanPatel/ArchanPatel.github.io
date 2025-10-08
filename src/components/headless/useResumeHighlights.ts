import { useMemo } from 'react';

export function useResumeHighlights() {
  const highlights = useMemo(() => {
    return {
      name: "Archan Patel",
      title: "Android Developer / Software Engineer",
      contact: {
        email: "archanmehulpatel@gmail.com",
        github: "https://github.com/ArchanPatel",
        linkedin: "https://linkedin.com/in/archanpatel1"
      },
      topSkills: [
        "Kotlin, Java, Jetpack Compose",
        "MVVM, Clean Architecture, Dependency Injection (Hilt)",
        "Retrofit, Room, Kotlin Coroutines, Flow",
        "React Native, Node.js, Docker, AWS"
      ],
      topExperienceBullets: [
        "Led Android design system using Material Design 3; reusable Compose components (Konrad Group).",
        "Implemented async API layer (Coroutines + Flow + Retrofit) — improved perceived latency by ~25%.",
        "Refactored MFA flow & added biometric authentication using BiometricPrompt.",
        "Built offline-first Pokedex app with Room and CI/CD via GitHub Actions + Fastlane."
      ],
      education: [
        "MSc Computer Science (AI) — Georgia Tech (Remote) — Jan 2025 – Present",
        "BASc Systems Design Engineering — University of Waterloo — Sept 2019 – Apr 2024"
      ]
    };
  }, []);

  return highlights;
}
