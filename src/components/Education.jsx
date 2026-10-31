import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { education } from '../data/portfolio'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <section id="education" style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">Education</div>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">
            My undergraduate journey in Computer Science with a focus on AI and Data Science.
          </p>
        </motion.div>

        <div style={{ maxWidth: 760 }}>
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              className="card"
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ position: 'relative' }}
            >
              {/* Top accent */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: 3,
                background: 'linear-gradient(90deg, #6366f1, #2dd4bf, transparent)',
                borderRadius: '16px 16px 0 0',
              }} />

              {edu.current && (
                <div style={{
                  position: 'absolute',
                  top: 20, right: 20,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '3px 10px',
                  borderRadius: 100,
                  background: 'rgba(45,212,191,0.1)',
                  border: '1px solid rgba(45,212,191,0.25)',
                  fontSize: '0.75rem',
                  color: '#2dd4bf',
                  fontWeight: 600,
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2dd4bf' }} />
                  In Progress
                </div>
              )}

              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 20, marginTop: 8 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(45,212,191,0.1))',
                  border: '1px solid rgba(99,102,241,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <GraduationCap size={22} style={{ color: '#6366f1' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#f1f5f9', marginBottom: 4 }}>
                    {edu.degree}
                  </h3>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#6366f1', marginBottom: 2 }}>
                    {edu.specialization}
                  </p>
                  <p style={{ fontSize: '0.9375rem', color: '#cbd5e1', fontWeight: 500 }}>
                    {edu.institution}
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, marginBottom: 20 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8125rem', color: '#94a3b8' }}>
                  <Calendar size={13} style={{ color: '#475569' }} />
                  {edu.period}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8125rem', color: '#94a3b8' }}>
                  <MapPin size={13} style={{ color: '#475569' }} />
                  {edu.location}
                </span>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
