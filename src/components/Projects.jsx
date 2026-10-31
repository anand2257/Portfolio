import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { projects } from '../data/portfolio'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05 })

  return (
    <section id="projects" style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">Projects</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of projects I've built — covering AI-powered applications,
            real-time systems, and full-stack web development. All code is verified against
            the actual repositories.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
        }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
