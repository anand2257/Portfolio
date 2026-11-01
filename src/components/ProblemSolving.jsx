import { motion } from 'framer-motion'
import { Code2, ExternalLink, Trophy, Flame, Star, Target, Calendar, Award, TrendingUp } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { leetcodeStats } from '../data/portfolio'

// Animated progress bar for difficulty breakdown
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
  { icon: Trophy,      label: 'Contest Rating',   value: leetcodeStats.contestRating,               color: '#f59e0b' },
  { icon: TrendingUp,  label: 'Top Percentile',   value: `Top ${leetcodeStats.topPercentage}%`,      color: '#22c55e', mono: true },
  { icon: Target,      label: 'Global Rank',       value: `#${leetcodeStats.globalRank}`,             color: '#6366f1', mono: true },
  { icon: Flame,       label: 'Max Streak',        value: `${leetcodeStats.maxStreak}d`,              color: '#f97316', mono: true },
  { icon: Star,        label: 'Contests Entered',  value: leetcodeStats.contestsAttended,            color: '#a78bfa' },
  { icon: Calendar,    label: 'Active Days',       value: leetcodeStats.activeDays,                  color: '#2dd4bf' },
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
            1,140+ problems solved on LeetCode — Top 10.13% globally, contest rating 1,763, and a
            500-day streak badge — reflecting the consistent algorithmic discipline behind every
            system I build.
          </p>
        </motion.div>

        {/* ── Main grid: featured card + stats grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20,
          marginBottom: 20,
        }}>
          {/* Featured card — total solved + difficulty bars */}
          <motion.a
            href={leetcodeStats.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="problem-stat-card problem-stat-card--featured"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            aria-label="View LeetCode profile"
          >
            <div className="problem-stat-card__topline">
              <span className="problem-stat-card__icon"><Code2 size={18} /></span>
              <span className="problem-stat-card__platform">LeetCode</span>
              <ExternalLink size={15} className="problem-stat-card__external" aria-hidden="true" />
            </div>

            <span className="problem-stat-card__value">
              {leetcodeStats.totalSolved.toLocaleString()}
            </span>
            <span className="problem-stat-card__label">Problems Solved</span>

            {/* Difficulty progress bars */}
            <div style={{ width: '100%', marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <DifficultyBar label="Easy"   count={leetcodeStats.easy}   total={leetcodeStats.totalSolved} color="#22c55e" />
              <DifficultyBar label="Medium" count={leetcodeStats.medium} total={leetcodeStats.totalSolved} color="#f59e0b" />
              <DifficultyBar label="Hard"   count={leetcodeStats.hard}   total={leetcodeStats.totalSolved} color="#ef4444" />
            </div>

            {/* Acceptance + yearly submissions */}
            <div style={{
              marginTop: 18,
              display: 'flex',
              gap: 16,
              flexWrap: 'wrap',
            }}>
              <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                Acceptance{' '}
                <span style={{ color: '#22c55e', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700 }}>
                  {leetcodeStats.acceptanceRate}%
                </span>
              </span>
              <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                <span style={{ color: '#818cf8', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700 }}>
                  {leetcodeStats.yearlySubmissions.toLocaleString()}
                </span>{' '}
                submissions / year
              </span>
            </div>

            <span className="problem-stat-card__link">View LeetCode profile →</span>
          </motion.a>

          {/* Stats grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {statItems.map(({ icon: Icon, label, value, color, mono }, index) => (
              <motion.a
                key={label}
                href={leetcodeStats.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="problem-stat-card"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.1 + index * 0.07 }}
                style={{
                  minHeight: 'auto',
                  padding: '16px 18px',
                }}
              >
                <div className="problem-stat-card__topline" style={{ marginBottom: 10 }}>
                  <span className="problem-stat-card__icon" style={{ width: 28, height: 28, color }}>
                    <Icon size={14} />
                  </span>
                  <span style={{ fontSize: '0.7rem', color: '#4b5563', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace' }}>
                    {label}
                  </span>
                  <ExternalLink size={11} className="problem-stat-card__external" aria-hidden="true" />
                </div>
                <span style={{
                  fontFamily: mono ? 'JetBrains Mono, monospace' : 'Inter, sans-serif',
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
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

        {/* ── Bottom row: difficulty badges + notable badges ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.65 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}
        >
          {/* Difficulty pills */}
          {[
            { label: 'Easy',   count: leetcodeStats.easy,   color: '#22c55e', bg: 'rgba(34,197,94,0.08)',  border: 'rgba(34,197,94,0.2)' },
            { label: 'Medium', count: leetcodeStats.medium, color: '#f59e0b', bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)' },
            { label: 'Hard',   count: leetcodeStats.hard,   color: '#ef4444', bg: 'rgba(239,68,68,0.08)',  border: 'rgba(239,68,68,0.2)' },
          ].map(({ label, count, color, bg, border }) => (
            <div key={label} style={{
              display: 'inline-flex', alignItems: 'center', gap: 7,
              padding: '6px 13px', borderRadius: 8, background: bg, border: `1px solid ${border}`,
              fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8125rem',
            }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: color }} />
              <span style={{ color: '#94a3b8', fontWeight: 500 }}>{label}</span>
              <span style={{ color, fontWeight: 700 }}>{count}</span>
            </div>
          ))}

          {/* Separator dot */}
          <span style={{ color: '#334155', fontSize: '1rem' }}>·</span>

          {/* Notable badges */}
          {leetcodeStats.notableBadges.map(badge => (
            <div key={badge} style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '6px 12px', borderRadius: 8,
              background: 'rgba(245,158,11,0.07)',
              border: '1px solid rgba(245,158,11,0.18)',
              fontSize: '0.78125rem', color: '#d97706', fontWeight: 600,
            }}>
              <Award size={12} style={{ color: '#f59e0b' }} />
              {badge}
            </div>
          ))}

          {/* Streak summary */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 13px', borderRadius: 8,
            background: 'rgba(249,115,22,0.07)',
            border: '1px solid rgba(249,115,22,0.18)',
            fontSize: '0.8125rem', color: '#64748b',
          }}>
            <Flame size={13} style={{ color: '#f97316' }} />
            <span>
              <span style={{ color: '#fb923c', fontFamily: 'JetBrains Mono, monospace', fontWeight: 700 }}>
                {leetcodeStats.maxStreak}
              </span>
              {' '}day max streak
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
