import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Code2, Brain, Layers, Zap } from 'lucide-react'

const interests = [
  { icon: <Layers size={18} />, label: 'Full-Stack Development' },
  { icon: <Brain size={18} />, label: 'Artificial Intelligence' },
  { icon: <Code2 size={18} />, label: 'Data Structures & Algorithms' },
  { icon: <Zap size={18} />, label: 'Retrieval-Augmented Generation' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
}

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15 })

  return (
    <section id="about" style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}>
      <div className="container" ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          custom={0}
          variants={fadeUp}
        >
          <div className="section-tag">About Me</div>
          <h2 className="section-title">Who I Am</h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 32,
          marginTop: 8,
        }}>
          {/* Bio card */}
          <motion.div
            className="card"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={1}
            variants={fadeUp}
            style={{ gridColumn: 'span 1' }}
          >
            <div style={{ marginBottom: 20 }}>
              <div style={{
                width: 72, height: 72, borderRadius: 18,
                background: 'linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(45,212,191,0.15) 100%)',
                border: '1px solid rgba(99,102,241,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '2rem', marginBottom: 16,
              }}>
                👨‍💻
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f1f5f9', marginBottom: 12 }}>
                Divya Anand
              </h3>
            </div>
            <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: 16 }}>
              I'm a Computer Science student specializing in AI & Data Science at Vishnu Institute
              of Technology. I'm passionate about building practical software — from AI-powered
              applications to real-time full-stack systems — and solving challenging problems
              through algorithms and data structures.
            </p>
            <p style={{ color: '#94a3b8', lineHeight: 1.8 }}>
              Currently working as a <span style={{ color: '#818cf8', fontWeight: 500 }}>Graduate Engineer Trainee</span> in
              Forward Deployed Engineering at KSquare, Hyderabad. I focus on shipping products that
              combine modern web technologies with AI integrations to address real-world problems.
            </p>
          </motion.div>

          {/* Interests card */}
          <motion.div
            className="card"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={2}
            variants={fadeUp}
          >
            <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#f1f5f9', marginBottom: 20 }}>
              Technical Interests
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {interests.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '12px 16px', borderRadius: 10,
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    color: '#cbd5e1', fontSize: '0.9375rem', fontWeight: 500,
                    transition: 'all 0.2s',
                  }}
                >
                  <span style={{ color: '#6366f1' }}>{item.icon}</span>
                  {item.label}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick facts */}
          <motion.div
            className="card"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={3}
            variants={fadeUp}
          >
            <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#f1f5f9', marginBottom: 20 }}>
              Quick Facts
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { label: 'Degree', value: 'B.Tech CSE (AI & DS)' },
                { label: 'University', value: 'Vishnu Institute of Technology' },
                { label: 'Graduation', value: '2027' },
                { label: 'Location', value: 'Hyderabad, India' },
                { label: 'Status', value: 'Open to opportunities' },
              ].map(({ label, value }) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
                  <span style={{ fontSize: '0.8125rem', color: '#475569', fontFamily: 'JetBrains Mono, monospace', flexShrink: 0 }}>
                    {label}
                  </span>
                  <span style={{
                    height: 1, flex: 1,
                    background: 'rgba(255,255,255,0.06)',
                    minWidth: 20,
                  }} />
                  <span style={{ fontSize: '0.875rem', color: '#cbd5e1', fontWeight: 500, textAlign: 'right' }}>
                    {value === 'Open to opportunities'
                      ? <span style={{ color: '#2dd4bf' }}>{value}</span>
                      : value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
