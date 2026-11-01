import { Mail, Heart } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { profile } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      borderTop: '1px solid rgba(99,102,241,0.1)',
      padding: '48px 0 32px',
      position: 'relative',
      zIndex: 1,
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          marginBottom: 32,
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: 'linear-gradient(135deg, #6366f1, #818cf8)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 800, fontSize: 12, color: '#fff',
            }}>
              DA
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#f1f5f9' }}>Divya Anand</div>
              <div style={{ fontSize: '0.75rem', color: '#475569', fontFamily: 'JetBrains Mono, monospace' }}>
                Software Engineer
              </div>
            </div>
          </div>

          {/* Nav quick links */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Problem Solving', 'About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Education', 'Contact'].map(label => (
              <a
                key={label}
                href={`#${label.toLowerCase().replaceAll(' ', '-')}`}
                onClick={e => {
                  e.preventDefault()
                  document.getElementById(label.toLowerCase().replaceAll(' ', '-'))?.scrollIntoView({ behavior: 'smooth' })
                }}
                style={{
                  fontSize: '0.8125rem',
                  color: '#94a3b8',
                  textDecoration: 'none',
                  padding: '4px 10px',
                  borderRadius: 6,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = '#f1f5f9'}
                onMouseLeave={e => e.target.style.color = '#94a3b8'}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: 10 }}>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-ghost" aria-label="GitHub" style={{ padding: '8px 12px' }}>
              <GithubIcon size={16} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost" aria-label="LinkedIn" style={{ padding: '8px 12px' }}>
              <LinkedinIcon size={16} />
            </a>
            <a href={`mailto:${profile.email}`} className="btn-ghost" aria-label="Email" style={{ padding: '8px 12px' }}>
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Bottom divider + copyright */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: 24,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
        }}>
          <p style={{ fontSize: '0.8125rem', color: '#475569' }}>
            © {year} Divya Anand. All rights reserved.
          </p>
          <p style={{
            fontSize: '0.8125rem',
            color: '#475569',
            display: 'flex',
            alignItems: 'center',
            gap: 5,
          }}>
            Built with
            <Heart size={12} style={{ color: '#6366f1' }} />
            using React, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
