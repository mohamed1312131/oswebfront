import { motion } from "motion/react";
import {
  Monitor,
  Smartphone,
  Users,
  BarChart2,
  ArrowRight,
  Target,
  Heart,
  Zap,
  Lock,
} from "lucide-react";

const apps = [
  {
    icon: Target,
    title: "Simplicité",
    description:
      "La gestion scolaire ne devrait pas être compliquée. OmniSchool est conçu pour être intuitif et facile à utiliser, afin que les enseignants et les administrateurs puissent se concentrer sur l'éducation plutôt que sur la technologie.",
  },
  {
    icon: Heart,
    title: "Transparence",
    description:
      "Une école moderne repose sur une communication claire. OmniSchool crée un lien direct entre l'école, les enseignants, les parents et les élèves.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "L'éducation doit évoluer avec la société. OmniSchool utilise des technologies modernes et l'intelligence artificielle pour automatiser des tâches comme la création des emplois du temps et la communication.",
  },
  {
    icon: Lock,
    title: "Confiance",
    description:
      "Les données scolaires sont sensibles. OmniSchool est construit avec un fort accent sur la sécurité, la stabilité et la fiabilité.",
  },
];

export function SolutionSection() {
  return (
    <section
      style={{ backgroundColor: "#2D472C" }}
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-4"
        >
          <span
            className="text-xs font-medium tracking-wide uppercase"
            style={{ color: "#C5A059" }}
          >
            NOS VALEURS
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: 0.1,
          }}
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: "40px",
            fontWeight: "700",
            color: "white",
            letterSpacing: "-0.02em",
          }}
          className="text-center mb-4"
        >
          Ce qui Nous Guide
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          style={{
            fontSize: "15px",
            color: "rgba(255, 255, 255, 0.7)",
            lineHeight: "1.6",
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto",
          }}
          className="mb-16"
        >
          OmniSchool est construit sur des valeurs fortes qui reflètent notre
          vision d'une école moderne, connectée et efficace.
        </motion.p>

        {/* App Cards - 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {apps.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.1 + index * 0.1,
              }}
              className="p-8 border transition-all duration-200"
              style={{
                backgroundColor: "#1E3318",
                borderColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "8px",
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <app.icon
                  size={24}
                  style={{ color: "#C5A059" }}
                />
                <ArrowRight
                  size={20}
                  style={{ color: "rgba(255, 255, 255, 0.3)" }}
                />
              </div>
              <h3
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "white",
                }}
                className="mb-3"
              >
                {app.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255, 255, 255, 0.6)",
                  lineHeight: "1.6",
                }}
              >
                {app.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}