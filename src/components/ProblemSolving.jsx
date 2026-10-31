import { motion } from 'framer-motion'
import { Code2, ExternalLink, Trophy } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const platforms = [
  {
    name: 'LeetCode',
    label: 'Problems solved',
    value: '1,125+',
    href: 'https://leetcode.com/anand21314',
    linkLabel: 'View LeetCode profile',
    icon: Code2,
    featured: true,
  },
  {
    name: 'LeetCode',
    label: 'Contest rating',
    value: '1763',
    href: 'https://leetcode.com/anand21314',
    linkLabel: 'View LeetCode profile',
    icon: Trophy,
  },
  {
    name: 'CodeChef',
    label: 'Rating',
    value: '1550',
    href: 'https://www.codechef.com/users/anand9299',
    linkLabel: 'View CodeChef profile',
    icon: Trophy,
  },
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
            Problem Solving &amp; Competitive Programming
          </h2>
          <p className="section-subtitle">
            I bring algorithmic thinking, data structures, and consistent hands-on practice
            to complex problems — building the problem-solving foundation behind the products I create.
          </p>
        </motion.div>

        <div className="problem-solving-grid">
          {platforms.map(({ name, label, value, href, linkLabel, icon: Icon, featured }, index) => (
            <motion.a
              key={`${name}-${label}`}
              className={`problem-stat-card${featured ? ' problem-stat-card--featured' : ''}`}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="problem-stat-card__topline">
                <span className="problem-stat-card__icon"><Icon size={18} /></span>
                <span className="problem-stat-card__platform">{name}</span>
                <ExternalLink size={15} className="problem-stat-card__external" aria-hidden="true" />
              </div>
              <span className="problem-stat-card__value">{value}</span>
              <span className="problem-stat-card__label">{label}</span>
              <span className="problem-stat-card__link">{linkLabel}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
