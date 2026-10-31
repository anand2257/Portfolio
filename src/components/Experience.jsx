import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { experience } from '../data/portfolio'
import { Briefcase, MapPin, Calendar } from 'lucide-react'

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <section id="experience" style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">Experience</div>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Professional experience in software engineering and forward-deployed roles.
          </p>
        </motion.div>

        <div style={{ maxWidth: 760, position: 'relative' }}>
          {/* Vertical timeline line */}
          <div style={{
            position: 'absolute',
            left: 24,
            top: 0,
            bottom: 0,
            width: 1,
            background: 'linear-gradient(to bottom, rgba(99,102,241,0.5), rgba(99,102,241,0.05))',
          }} />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ position: 'relative', paddingLeft: 64, marginBottom: i < experience.length - 1 ? 40 : 0 }}
            >
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: 19,
                top: 24,
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: exp.current ? '#6366f1' : '#334155',
                border: '2px solid #080b11',
                boxShadow: exp.current ? '0 0 0 4px rgba(99,102,241,0.2)' : 'none',
                animation: exp.current ? 'pulse-glow 2.5s infinite' : 'none',
              }} />

              <div className="card">
                {/* Current badge */}
                {exp.current && (
                  <div style={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
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
                    Current
                  </div>
                )}

                {/* Company & role */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 16 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(45,212,191,0.1))',
                    border: '1px solid rgba(99,102,241,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Briefcase size={18} style={{ color: '#6366f1' }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: '#f1f5f9', marginBottom: 2 }}>
                      {exp.role}
                    </h3>
                    <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#6366f1' }}>
                      {exp.company} · {exp.department}
                    </p>
                  </div>
                </div>

                {/* Meta info */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 16 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8125rem', color: '#94a3b8' }}>
                    <Calendar size={13} style={{ color: '#475569' }} />
                    {exp.period}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8125rem', color: '#94a3b8' }}>
                    <MapPin size={13} style={{ color: '#475569' }} />
                    {exp.location}
                  </span>
                  <span style={{
                    padding: '2px 8px', borderRadius: 5,
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
                    fontSize: '0.75rem', color: '#64748b', fontWeight: 500,
                  }}>
                    {exp.type}
                  </span>
                </div>

                <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.75 }}>
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
