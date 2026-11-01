import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { profile } from '../data/portfolio'
import { Mail, MessageSquare, Send, Code2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1 })

  const contactLinks = [
    {
      id: 'contact-email',
      icon: <Mail size={20} />,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      color: '#6366f1',
      description: 'Reach out directly for full-time roles, internships, or collaboration',
    },
    {
      id: 'contact-github',
      icon: <GithubIcon size={20} />,
      label: 'GitHub',
      value: 'github.com/anand2257',
      href: profile.github,
      color: '#94a3b8',
      description: 'Browse my code, projects, and open source contributions',
    },
    {
      id: 'contact-linkedin',
      icon: <LinkedinIcon size={20} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/anand2257',
      href: profile.linkedin,
      color: '#2dd4bf',
      description: 'Connect professionally and view my experience',
    },
    {
      id: 'contact-leetcode',
      icon: <Code2 size={20} />,
      label: 'LeetCode',
      value: 'leetcode.com/u/anand21314',
      href: profile.leetcode,
      color: '#f59e0b',
      description: '1,140+ problems · Rating 1,763 · Max streak 320 days',
    },
  ]

  return (
    <section id="contact" style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}>
      <div className="container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <div className="section-tag" style={{ margin: '0 auto 20px' }}>Contact</div>
          <h2 className="section-title">Let's Connect</h2>
          <p style={{ fontSize: '1.0625rem', color: '#94a3b8', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            I'm actively looking for full-time software engineering roles at product-based companies.
            Open to backend, full-stack, and applied AI positions — feel free to reach out.
          </p>
        </motion.div>


        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          {/* Contact links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 40 }}>
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.id}
                id={link.id}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="contact-link"
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                aria-label={`${link.label}: ${link.value}`}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `rgba(${hexToRgb(link.color)}, 0.12)`,
                  border: `1px solid rgba(${hexToRgb(link.color)}, 0.25)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: link.color, flexShrink: 0,
                }}>
                  {link.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.75rem', color: '#475569', fontWeight: 500, marginBottom: 2, fontFamily: 'JetBrains Mono, monospace', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {link.label}
                  </div>
                  <div style={{ fontSize: '0.9375rem', color: '#cbd5e1', fontWeight: 600 }}>
                    {link.value}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#475569', marginTop: 2 }}>
                    {link.description}
                  </div>
                </div>
                <Send size={15} style={{ color: '#334155', flexShrink: 0 }} />
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              textAlign: 'center',
              padding: '32px',
              borderRadius: 16,
              background: 'rgba(99,102,241,0.06)',
              border: '1px solid rgba(99,102,241,0.15)',
            }}
          >
            <MessageSquare size={28} style={{ color: '#6366f1', marginBottom: 14 }} />
            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#f1f5f9', marginBottom: 10 }}>
              Prefer email?
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: 20, lineHeight: 1.6 }}>
              Send me an email directly. I'm available for freelance work, internships,
              and full-time opportunities.
            </p>
            <a
              href={`mailto:${profile.email}`}
              id="contact-cta-email"
              className="btn-primary"
              style={{ display: 'inline-flex' }}
            >
              <Mail size={15} />
              Send Email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function hexToRgb(hex) {
  if (hex === '#94a3b8') return '148, 163, 184'
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r}, ${g}, ${b}`
}
