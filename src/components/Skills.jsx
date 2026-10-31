import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { skills } from '../data/portfolio'

const categoryColors = {
  'Problem Solving': '#f59e0b',
  'Languages': '#6366f1',
  'Frontend': '#2dd4bf',
  'Backend': '#f59e0b',
  'AI / ML': '#a78bfa',
  'Databases': '#34d399',
  'Tools & Platforms': '#fb923c',
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section id="skills" style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">Skills</div>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies I work with across the full stack — from frontend interfaces to
            backend APIs, databases, and AI integrations.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {skills.map((category, catIdx) => {
            const color = categoryColors[category.category] || '#6366f1'
            return (
              <motion.div
                key={category.category}
                className="card"
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              >
                {/* Category header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: 8,
                    background: `rgba(${hexToRgb(color)}, 0.15)`,
                    border: `1px solid rgba(${hexToRgb(color)}, 0.3)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.875rem', color,
                    fontFamily: 'JetBrains Mono, monospace',
                  }}>
                    {category.icon}
                  </div>
                  <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#f1f5f9' }}>
                    {category.category}
                  </h3>
                </div>

                {/* Skill pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {category.items.map((skill, skillIdx) => (
                    <motion.span
                      key={skill}
                      className="skill-pill"
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.35, delay: catIdx * 0.08 + skillIdx * 0.05 }}
                      style={{
                        '--pill-color': color,
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = `rgba(${hexToRgb(color)}, 0.12)`
                        e.currentTarget.style.borderColor = `rgba(${hexToRgb(color)}, 0.35)`
                        e.currentTarget.style.color = color
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                        e.currentTarget.style.color = '#cbd5e1'
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Utility: hex → "r, g, b"
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r}, ${g}, ${b}`
}
