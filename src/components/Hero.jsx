import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Terminal, Code2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { profile } from '../data/portfolio'

const ROLES = [
  'Full-Stack Engineer',
  'AI Engineer',
  'Backend Developer',
  'RAG Developer',
  'Problem Solver',
]

function useTypingCycle(words, typingSpeed = 80, deletingSpeed = 50, pauseMs = 1800) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [phase, setPhase] = useState('typing') // 'typing' | 'pause' | 'deleting'

  useEffect(() => {
    const current = words[wordIndex]
    let timeout

    if (phase === 'typing') {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed)
      } else {
        timeout = setTimeout(() => setPhase('pause'), pauseMs)
      }
    } else if (phase === 'pause') {
      setPhase('deleting')
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(t => t.slice(0, -1)), deletingSpeed)
      } else {
        setWordIndex(i => (i + 1) % words.length)
        setPhase('typing')
      }
    }
    return () => clearTimeout(timeout)
  }, [text, phase, wordIndex, words, typingSpeed, deletingSpeed, pauseMs])

  return text
}

const CodeIllustration = () => (
  <div className="code-block animate-float" style={{ maxWidth: 420, width: '100%' }}>
    <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
      {['#ff5f56', '#ffbd2e', '#27c93f'].map(c => (
        <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
      ))}
    </div>
    <div style={{ lineHeight: 1.8 }}>
      <div><span style={{ color: '#6366f1' }}>const</span> <span style={{ color: '#2dd4bf' }}>engineer</span> = {'{'}</div>
      <div style={{ paddingLeft: 20 }}>
        <span style={{ color: '#94a3b8' }}>name</span>: <span style={{ color: '#a78bfa' }}>"Divya Anand"</span>,
      </div>
      <div style={{ paddingLeft: 20 }}>
        <span style={{ color: '#94a3b8' }}>stack</span>: [<span style={{ color: '#a78bfa' }}>"React"</span>, <span style={{ color: '#a78bfa' }}>"FastAPI"</span>, <span style={{ color: '#a78bfa' }}>"AI"</span>],
      </div>
      <div style={{ paddingLeft: 20 }}>
        <span style={{ color: '#94a3b8' }}>passion</span>: <span style={{ color: '#a78bfa' }}>"Building with AI"</span>,
      </div>
      <div style={{ paddingLeft: 20 }}>
        <span style={{ color: '#94a3b8' }}>open</span>: <span style={{ color: '#2dd4bf' }}>true</span>,
      </div>
      <div>{'}'};</div>
      <br />
      <div>
        <span style={{ color: '#6366f1' }}>async function</span> <span style={{ color: '#f59e0b' }}>build</span>() {'{'}
      </div>
      <div style={{ paddingLeft: 20 }}>
        <span style={{ color: '#6366f1' }}>const</span> result = <span style={{ color: '#6366f1' }}>await</span> <span style={{ color: '#2dd4bf' }}>ship</span>(idea);
      </div>
      <div style={{ paddingLeft: 20 }}>
        <span style={{ color: '#6366f1' }}>return</span> <span style={{ color: '#a78bfa' }}>"impact"</span>;
      </div>
      <div>{'}'}</div>
    </div>
  </div>
)

export default function Hero() {
  const typedRole = useTypingCycle(ROLES)

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 100,
        paddingBottom: 60,
        position: 'relative',
      }}
    >
      {/* Radial spotlight */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'min(700px, calc(100vw - 48px))',
        height: '500px',
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 48,
          flexWrap: 'wrap',
        }}>
          {/* Left: text content */}
          <div style={{ flex: '1 1 480px', minWidth: 0 }}>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 14px',
                borderRadius: 100,
                background: 'rgba(45, 212, 191, 0.08)',
                border: '1px solid rgba(45, 212, 191, 0.2)',
                fontSize: '0.8125rem',
                color: '#2dd4bf',
                fontWeight: 500,
                marginBottom: 28,
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#2dd4bf', animation: 'pulse-glow 2s infinite' }} />
              Graduate Engineer Trainee · KSquare
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.25rem)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: '#f1f5f9',
                marginBottom: 16,
              }}
            >
              Hi, I'm{' '}
              <span className="glow-text">Divya Anand</span>
            </motion.h1>

            {/* Typed role */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: '#6366f1',
                marginBottom: 24,
                fontFamily: 'JetBrains Mono, monospace',
                minHeight: '2.2em',
              }}
            >
              &gt; {typedRole}
              <span className="cursor-blink" />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                fontSize: '1.0625rem',
                color: '#94a3b8',
                lineHeight: 1.75,
                maxWidth: 520,
                marginBottom: 40,
              }}
            >
              {profile.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 40 }}
            >
              <a href="#projects" className="btn-primary" id="hero-view-projects" onClick={e => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}>
                <Terminal size={16} />
                View Projects
              </a>
              <a
                href="https://leetcode.com/anand21314"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                id="hero-view-leetcode"
              >
                <Code2 size={16} />
                View LeetCode Profile
              </a>
              <a href={`mailto:${profile.email}`} className="btn-secondary" id="hero-contact">
                Contact Me
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              style={{ display: 'flex', gap: 14 }}
            >
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-ghost" id="hero-github">
                <GithubIcon size={16} />
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost" id="hero-linkedin">
                <LinkedinIcon size={16} />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Right: code illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ flex: '1 1 380px', display: 'flex', justifyContent: 'center' }}
          >
            <CodeIllustration />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            marginTop: 72,
            color: '#475569',
            fontSize: '0.75rem',
            fontFamily: 'JetBrains Mono, monospace',
            letterSpacing: '0.08em',
            cursor: 'pointer',
          }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span>scroll down</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
