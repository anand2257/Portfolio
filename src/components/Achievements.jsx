import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { achievements } from '../data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r}, ${g}, ${b}`
}

export default function Achievements() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section id="achievements" style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">Achievements</div>
          <h2 className="section-title">Recognition & Milestones</h2>
          <p className="section-subtitle">
            Competitions won, programs selected for, and open-source contributions that reflect
            my drive beyond coursework and professional work.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
        }}>
          {achievements.map((item, i) => {
            const rgb = hexToRgb(item.color)
            return (
              <motion.div
                key={item.id}
                className="card"
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                custom={i + 1}
                variants={fadeUp}
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                {/* Top accent bar */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0,
                  height: 3,
                  background: `linear-gradient(90deg, ${item.color}, transparent)`,
                  borderRadius: '16px 16px 0 0',
                }} />

                {/* Icon */}
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: `rgba(${rgb}, 0.12)`,
                  border: `1px solid rgba(${rgb}, 0.25)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem',
                  marginBottom: 16,
                  marginTop: 6,
                }}>
                  {item.icon}
                </div>

                {/* Badge */}
                <div style={{ marginBottom: 10 }}>
                  <span style={{
                    display: 'inline-block',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: item.color,
                    background: `rgba(${rgb}, 0.1)`,
                    border: `1px solid rgba(${rgb}, 0.25)`,
                    padding: '2px 9px',
                    borderRadius: 5,
                  }}>
                    {item.subtitle}
                  </span>
                </div>

                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: 800,
                  color: '#f1f5f9',
                  marginBottom: 10,
                  lineHeight: 1.4,
                  letterSpacing: '-0.01em',
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: '0.875rem',
                  color: '#64748b',
                  lineHeight: 1.75,
                }}>
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
