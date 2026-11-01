import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Terminal, Code2, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { profile, leetcodeStats } from '../data/portfolio'

const ROLES = [
  'Backend Developer',
  'Full-Stack Engineer',
  'Applied AI Engineer',
  'RAG & LLM Developer',
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
        <span style={{ color: '#94a3b8' }}>stack</span>: [<span style={{ color: '#a78bfa' }}>"FastAPI"</span>, <span style={{ color: '#a78bfa' }}>"React"</span>, <span style={{ color: '#a78bfa' }}>"LangChain"</span>],
      </div>
      <div style={{ paddingLeft: 20 }}>
        <span style={{ color: '#94a3b8' }}>leetcode</span>: <span style={{ color: '#f59e0b' }}>1140</span> <span style={{ color: '#475569' }}>/* problems */</span>,
      </div>
      <div style={{ paddingLeft: 20 }}>
        <span style={{ color: '#94a3b8' }}>openTo</span>: <span style={{ color: '#2dd4bf' }}>true</span>,
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

// Mini LeetCode highlight for hero
function LeetCodeHighlight() {
  return (
    <motion.a
      href={profile.leetcode}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 14,
        padding: '10px 16px',
        borderRadius: 12,
        background: 'rgba(245,158,11,0.06)',
        border: '1px solid rgba(245,158,11,0.18)',
        textDecoration: 'none',
        marginTop: 20,
        transition: 'border-color 0.2s, background 0.2s',
        flexWrap: 'wrap',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(245,158,11,0.4)'
        e.currentTarget.style.background = 'rgba(245,158,11,0.1)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(245,158,11,0.18)'
        e.currentTarget.style.background = 'rgba(245,158,11,0.06)'
      }}
      aria-label="View LeetCode profile"
    >
      <Code2 size={16} style={{ color: '#f59e0b', flexShrink: 0 }} />
      <span style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        {[
          { val: `${leetcodeStats.totalSolved.toLocaleString()} solved`, color: '#f59e0b' },
          { val: `Top ${leetcodeStats.topPercentage}%`, color: '#22c55e' },
          { val: `${leetcodeStats.contestRating} rating`, color: '#818cf8' },
        ].map(({ val, color }) => (
          <span key={val} style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.78125rem',
            color,
            fontWeight: 700,
          }}>
            {val}
          </span>
        ))}
        <span style={{ fontSize: '0.75rem', color: '#475569' }}>· LeetCode ↗</span>
      </span>
    </motion.a>
  )
}

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
              Graduate Engineer Trainee · The Ksquare Group
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
                marginBottom: 36,
              }}
            >
              {profile.tagline}
            </motion.p>

            {/* LeetCode Achievement highlight */}
            <LeetCodeHighlight />

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 32, marginBottom: 28 }}
            >
              <a href="#projects" className="btn-primary" id="hero-view-projects" onClick={e => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}>
                <Terminal size={16} />
                View Projects
              </a>
              <a href={`mailto:${profile.email}`} className="btn-secondary" id="hero-contact">
                <Mail size={16} />
                Get in Touch
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
            >
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-ghost" id="hero-github">
                <GithubIcon size={16} />
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost" id="hero-linkedin">
                <LinkedinIcon size={16} />
                LinkedIn
              </a>
              <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" className="btn-ghost" id="hero-leetcode">
                <Code2 size={16} />
                LeetCode
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
          onClick={() => document.getElementById('problem-solving')?.scrollIntoView({ behavior: 'smooth' })}
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
