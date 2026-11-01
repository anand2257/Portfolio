import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Code2, Brain, Layers, Server } from 'lucide-react'

const pillars = [
  {
    icon: <Server size={20} />,
    label: 'Backend Engineering',
    desc: 'REST APIs, Node.js, FastAPI, Express — building robust, scalable server-side systems.',
    color: '#f59e0b',
  },
  {
    icon: <Layers size={20} />,
    label: 'Full-Stack Development',
    desc: 'End-to-end applications with React, Next.js frontends and production-ready backends.',
    color: '#2dd4bf',
  },
  {
    icon: <Brain size={20} />,
    label: 'Applied AI / RAG',
    desc: 'LangChain, LangGraph, Gemini — building LLM-powered pipelines grounded in real data.',
    color: '#a78bfa',
  },
  {
    icon: <Code2 size={20} />,
    label: 'Algorithmic Thinking',
    desc: '1,140+ LeetCode problems — DS&A rigor that informs how I architect and optimize systems.',
    color: '#6366f1',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
}

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1 })

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
          <h2 className="section-title">Building at the Intersection of<br />Backend, Full-Stack & AI</h2>
          <p className="section-subtitle">
            I'm a Computer Science engineer (AI & Data Science) at Vishnu Institute of Technology,
            currently working at The Ksquare Group as a Graduate Engineer Trainee in Forward Deployed Engineering.
          </p>
        </motion.div>

        {/* Bio + Quick Facts */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
          marginBottom: 28,
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
                width: 64, height: 64, borderRadius: 16,
                background: 'linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(45,212,191,0.15) 100%)',
                border: '1px solid rgba(99,102,241,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.75rem', marginBottom: 16,
              }}>
                👨‍💻
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#f1f5f9', marginBottom: 12 }}>
                Divya Anand
              </h3>
            </div>
            <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: 16, fontSize: '0.9375rem' }}>
              I build production-ready software at the intersection of backend engineering,
              full-stack development, and AI integration. My focus areas are REST API design,
              real-time systems with Socket.IO and Redis, and Retrieval-Augmented Generation
              pipelines using LangChain and LLM APIs.
            </p>
            <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '0.9375rem' }}>
              Currently a{' '}
              <span style={{ color: '#818cf8', fontWeight: 600 }}>Graduate Engineer Trainee</span>{' '}
              in Forward Deployed Engineering at{' '}
              <span style={{ color: '#2dd4bf', fontWeight: 600 }}>The Ksquare Group</span>,
              where I contribute to engineering initiatives and software development. I'm driven by
              building things that work at scale and solve real problems.
            </p>
          </motion.div>

          {/* Quick Facts */}
          <motion.div
            className="card"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={2}
            variants={fadeUp}
          >
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: 20 }}>
              Quick Facts
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { label: 'Role', value: 'Graduate Engineer Trainee' },
                { label: 'Company', value: 'The Ksquare Group' },
                { label: 'Degree', value: 'B.Tech CSE (AI & DS)' },
                { label: 'University', value: 'Vishnu Institute of Technology' },
                { label: 'Graduating', value: 'May 2027' },
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

        {/* 4 pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 16,
        }}>
          {pillars.map((p, i) => {
            const rgb = hexToRgb(p.color)
            return (
              <motion.div
                key={p.label}
                className="card"
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                custom={3 + i}
                variants={fadeUp}
                style={{ padding: '20px 22px' }}
              >
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: `rgba(${rgb}, 0.12)`,
                  border: `1px solid rgba(${rgb}, 0.25)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: p.color,
                  marginBottom: 14,
                }}>
                  {p.icon}
                </div>
                <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#f1f5f9', marginBottom: 8 }}>
                  {p.label}
                </h4>
                <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.7 }}>
                  {p.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r}, ${g}, ${b}`
}
