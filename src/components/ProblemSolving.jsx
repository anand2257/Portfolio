import { motion } from 'framer-motion'
import { Code2, ExternalLink, Trophy, Flame, Star, Target, Calendar } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { leetcodeStats } from '../data/portfolio'

// Donut-style ring for difficulty breakdown
function DifficultyBar({ label, count, total, color }) {
  const pct = Math.round((count / total) * 100)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.8125rem', color: '#94a3b8', fontWeight: 500 }}>{label}</span>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8125rem', color, fontWeight: 700 }}>
          {count}
        </span>
      </div>
      <div style={{ height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          style={{ height: '100%', borderRadius: 3, background: color }}
        />
      </div>
    </div>
  )
}

const statItems = [
  { icon: Trophy, label: 'Contest Rating', value: leetcodeStats.contestRating, color: '#f59e0b' },
  { icon: Target, label: 'Global Rank', value: `#${leetcodeStats.globalRank}`, color: '#6366f1', mono: true },
  { icon: Flame, label: 'Max Streak', value: `${leetcodeStats.maxStreak} days`, color: '#f97316', mono: true },
  { icon: Star, label: 'Badges Earned', value: leetcodeStats.badges, color: '#a78bfa' },
  { icon: Calendar, label: 'Active Days', value: leetcodeStats.activeDays, color: '#2dd4bf' },
]

export default function ProblemSolving() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  return (
    <section
      id="problem-solving"
      className="problem-solving-section"
      aria-labelledby="problem-solving-title"
    >
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">Problem Solving</div>
          <h2 className="section-title" id="problem-solving-title">
            Competitive Programming
          </h2>
          <p className="section-subtitle">
            1,140+ problems solved on LeetCode with a contest rating of 1,763 — reflecting consistent
            algorithmic practice and deep problem-solving ability that underpins every system I build.
          </p>
        </motion.div>

        {/* Main grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20,
          marginBottom: 24,
        }}>
          {/* Featured card – total solved */}
          <motion.a
            href={leetcodeStats.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="problem-stat-card problem-stat-card--featured"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            aria-label="View LeetCode profile"
            style={{ gridColumn: 'span 1' }}
          >
            <div className="problem-stat-card__topline">
              <span className="problem-stat-card__icon"><Code2 size={18} /></span>
              <span className="problem-stat-card__platform">LeetCode</span>
              <ExternalLink size={15} className="problem-stat-card__external" aria-hidden="true" />
            </div>
            <span className="problem-stat-card__value">{leetcodeStats.totalSolved.toLocaleString()}</span>
            <span className="problem-stat-card__label">Problems Solved</span>

            {/* Difficulty breakdown bars */}
            <div style={{ width: '100%', marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <DifficultyBar
                label="Easy"
                count={leetcodeStats.easy}
                total={leetcodeStats.totalSolved}
                color="#22c55e"
              />
              <DifficultyBar
                label="Medium"
                count={leetcodeStats.medium}
                total={leetcodeStats.totalSolved}
                color="#f59e0b"
              />
              <DifficultyBar
                label="Hard"
                count={leetcodeStats.hard}
                total={leetcodeStats.totalSolved}
                color="#ef4444"
              />
            </div>

            <span className="problem-stat-card__link">View LeetCode profile →</span>
          </motion.a>

          {/* Stats grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {statItems.map(({ icon: Icon, label, value, color, mono }, index) => (
              <motion.a
                key={label}
                href={leetcodeStats.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="problem-stat-card"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.1 + index * 0.08 }}
                style={{
                  minHeight: 'auto',
                  padding: '18px 20px',
                  gridColumn: index === 4 ? 'span 2' : 'span 1',
                }}
              >
                <div className="problem-stat-card__topline" style={{ marginBottom: 10 }}>
                  <span className="problem-stat-card__icon" style={{ width: 30, height: 30, color }}>
                    <Icon size={15} />
                  </span>
                  <span className="problem-stat-card__platform" style={{ fontSize: '0.75rem', color: '#64748b' }}>
                    {label}
                  </span>
                  <ExternalLink size={12} className="problem-stat-card__external" aria-hidden="true" />
                </div>
                <span style={{
                  fontFamily: mono ? 'JetBrains Mono, monospace' : 'Inter, sans-serif',
                  fontSize: index === 4 ? '1.75rem' : 'clamp(1.4rem, 3vw, 2rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  color,
                  lineHeight: 1,
                }}>
                  {value}
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Difficulty badges row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}
        >
          {[
            { label: 'Easy', count: leetcodeStats.easy, color: '#22c55e', bg: 'rgba(34,197,94,0.1)', border: 'rgba(34,197,94,0.25)' },
            { label: 'Medium', count: leetcodeStats.medium, color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.25)' },
            { label: 'Hard', count: leetcodeStats.hard, color: '#ef4444', bg: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.25)' },
          ].map(({ label, count, color, bg, border }) => (
            <div
              key={label}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 16px',
                borderRadius: 10,
                background: bg,
                border: `1px solid ${border}`,
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.875rem',
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: color }} />
              <span style={{ color: '#94a3b8', fontWeight: 500 }}>{label}</span>
              <span style={{ color, fontWeight: 700 }}>{count}</span>
            </div>
          ))}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 16px',
            borderRadius: 10,
            background: 'rgba(99,102,241,0.08)',
            border: '1px solid rgba(99,102,241,0.2)',
            fontSize: '0.875rem',
            color: '#94a3b8',
          }}>
            <span style={{ color: '#818cf8', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>
              {leetcodeStats.activeDays}
            </span>
            active days · max streak{' '}
            <span style={{ color: '#f97316', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace' }}>
              {leetcodeStats.maxStreak}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
