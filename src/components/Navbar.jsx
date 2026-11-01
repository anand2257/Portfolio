import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'
import { profile } from '../data/portfolio'

const navLinks = [
  { href: '#problem-solving', label: 'Problem Solving' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track active section via IntersectionObserver
  useEffect(() => {
    const ids = navLinks.map(l => l.href.slice(1))
    const observers = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
          {/* Logo */}
          <a
            href="#"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
            aria-label="Divya Anand – Home"
          >
            <div style={{
              width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #6366f1, #818cf8)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 800, fontSize: 14, color: '#fff', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em'
            }}>
              DA
            </div>
            <span style={{ fontWeight: 700, fontSize: '1.0625rem', color: '#f1f5f9', letterSpacing: '-0.01em' }}>
              Divya Anand
            </span>
          </a>

          {/* Desktop nav links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hidden md:flex">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                style={{
                  padding: '6px 14px',
                  borderRadius: 8,
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: activeSection === link.href.slice(1) ? '#818cf8' : '#94a3b8',
                  background: activeSection === link.href.slice(1) ? 'rgba(99,102,241,0.1)' : 'transparent',
                  transition: 'color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => { if (activeSection !== link.href.slice(1)) e.target.style.color = '#f1f5f9' }}
                onMouseLeave={e => { if (activeSection !== link.href.slice(1)) e.target.style.color = '#94a3b8' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop social + CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }} className="hidden md:flex">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: '#94a3b8', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#f1f5f9'}
              onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}>
              <GithubIcon size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: '#94a3b8', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#f1f5f9'}
              onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}>
              <LinkedinIcon size={18} />
            </a>
            <a href={`mailto:${profile.email}`} className="btn-primary" style={{ padding: '8px 18px', fontSize: '0.8125rem' }}>
              <Mail size={14} />
              Contact
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-btn"
            className="md:hidden"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            style={{
              background: 'transparent', border: 'none', color: '#94a3b8',
              cursor: 'pointer', padding: 8, display: 'none'
            }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Hide mobile button via CSS override */}
        <style>{`
          @media (max-width: 767px) {
            .hidden.md\\:flex { display: none !important; }
            #mobile-menu-btn { display: flex !important; }
          }
        `}</style>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="mobile-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="mobile-menu open"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={e => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    style={{
                      padding: '12px 16px', borderRadius: 10, fontSize: '1rem', fontWeight: 600,
                      textDecoration: 'none', color: activeSection === link.href.slice(1) ? '#818cf8' : '#cbd5e1',
                      background: activeSection === link.href.slice(1) ? 'rgba(99,102,241,0.1)' : 'transparent',
                      transition: 'background 0.2s',
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <div style={{ marginTop: 'auto', display: 'flex', gap: 12, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ flex: 1, justifyContent: 'center' }}>
                  <GithubIcon size={16} /> GitHub
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ flex: 1, justifyContent: 'center' }}>
                  <LinkedinIcon size={16} /> LinkedIn
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
