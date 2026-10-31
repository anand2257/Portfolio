import { motion } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './SocialIcons'

export default function ProjectCard({ project, index, inView }) {
  const colorMap = {
    '#6366f1': '99, 102, 241',
    '#2dd4bf': '45, 212, 191',
    '#a78bfa': '167, 139, 250',
    '#f59e0b': '245, 158, 11',
  }
  const rgb = colorMap[project.color] || '99, 102, 241'

  return (
    <motion.article
      className="card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label={`Project: ${project.title}`}
    >
      {/* Top accent bar */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0,
        height: 3,
        background: `linear-gradient(90deg, ${project.color}, transparent)`,
        borderRadius: '16px 16px 0 0',
      }} />

      {/* Category badge */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 8,
      }}>
        <span style={{
          fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em',
          color: project.color,
          background: `rgba(${rgb}, 0.1)`,
          border: `1px solid rgba(${rgb}, 0.25)`,
          padding: '3px 10px', borderRadius: 6,
          fontFamily: 'JetBrains Mono, monospace',
          textTransform: 'uppercase',
        }}>
          {project.category}
        </span>
        <span style={{ fontSize: '1.5rem' }}>{project.icon}</span>
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: '1.1875rem',
        fontWeight: 800,
        color: '#f1f5f9',
        marginBottom: 6,
        letterSpacing: '-0.01em',
      }}>
        {project.title}
      </h3>
      <p style={{
        fontSize: '0.8125rem',
        color: project.color,
        fontWeight: 600,
        marginBottom: 14,
        opacity: 0.85,
      }}>
        {project.subtitle}
      </p>

      {/* Description */}
      <p style={{
        fontSize: '0.9rem',
        color: '#94a3b8',
        lineHeight: 1.75,
        marginBottom: 20,
        flex: 1,
      }}>
        {project.description}
      </p>

      {/* Tech stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
        {project.tech.map(t => (
          <span
            key={t}
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.72rem',
              fontWeight: 500,
              padding: '3px 9px',
              borderRadius: 5,
              background: `rgba(${rgb}, 0.08)`,
              color: project.color,
              border: `1px solid rgba(${rgb}, 0.2)`,
              opacity: 0.9,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: 10, marginTop: 'auto' }}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
          id={`project-github-${project.id}`}
          style={{ flex: 1, justifyContent: 'center' }}
          aria-label={`View ${project.title} on GitHub`}
        >
          <GithubIcon size={15} />
          Code
        </a>
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            id={`project-demo-${project.id}`}
            aria-label={`View ${project.title} live demo`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              flex: 1,
              justifyContent: 'center',
              padding: '8px 14px',
              borderRadius: 8,
              fontSize: '0.875rem',
              fontWeight: 600,
              textDecoration: 'none',
              background: `rgba(${rgb}, 0.12)`,
              color: project.color,
              border: `1px solid rgba(${rgb}, 0.3)`,
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = `rgba(${rgb}, 0.2)`
              e.currentTarget.style.borderColor = `rgba(${rgb}, 0.5)`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = `rgba(${rgb}, 0.12)`
              e.currentTarget.style.borderColor = `rgba(${rgb}, 0.3)`
            }}
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        ) : (
          <span style={{
            flex: 1,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '8px 14px',
            borderRadius: 8,
            fontSize: '0.8125rem',
            color: '#475569',
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.05)',
          }}>
            No live demo
          </span>
        )}
      </div>
    </motion.article>
  )
}
