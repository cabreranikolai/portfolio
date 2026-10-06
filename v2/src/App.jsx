import { useEffect, useState } from 'react'
import {
  ArrowRight,
  ExternalLink,
  MapPin,
  MoonStar,
  Send,
  Sparkles,
  SunMedium,
} from 'lucide-react'
import profileImage from './assets/profileimage2.jpg'
import {
  contactLinks,
  education,
  experience,
  location,
  navItems,
  projects,
  skills,
  stats,
} from './data/portfolio.js'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = navItems
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter((section) => section instanceof HTMLElement)

    let animationFrame = null

    const updateActiveSection = () => {
      animationFrame = null

      const headerBottom = document.querySelector('header')?.getBoundingClientRect().bottom ?? 0
      const activationLine = headerBottom + 16
      const isAtPageBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1
      const currentSection = isAtPageBottom
        ? sections[sections.length - 1]
        : [...sections]
            .reverse()
            .find((section) => section.getBoundingClientRect().top <= activationLine)

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    const handleScroll = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateActiveSection)
      }
    }

    updateActiveSection()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame)
      }
    }
  }, [])

  const shellClass = darkMode ? 'bg-[#101312] text-[#F5F6F3]' : 'bg-[#F5F6F3] text-[#171917]'
  const primaryText = darkMode ? 'text-[#F5F6F3]' : 'text-[#171917]'
  const mutedText = darkMode ? 'text-[#A1A7A2]' : 'text-[#737773]'
  const cardClass = darkMode ? 'border-[#1F2724] bg-[#171C1A]' : 'border-[#E7E9E5] bg-white'
  const sidebarClass = darkMode ? 'border-[#1F2724] bg-[#121715]' : 'border-[#E7E9E5] bg-[#F9FAF8]'
  const panelClass = darkMode ? 'border-[#1F2724] bg-[#171C1A]' : 'border-[#E7E9E5] bg-white'
  const secondaryButtonClass = darkMode ? 'border-[#2B3430] bg-[#111816] text-[#F5F6F3]' : 'border-[#E7E9E5] bg-white text-[#171917]'

  return (
    <div className={`${shellClass} min-h-screen transition-colors duration-300`}>
      <div className="mx-auto flex max-w-[1600px]">
        <aside className={`sticky top-0 hidden h-screen w-[240px] flex-col justify-between border-r px-5 py-7 md:flex ${sidebarClass}`}>
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A3F635] text-base font-semibold text-[#171917] shadow-sm shadow-[#A3F635]/30">
                N
              </div>
              <div>
                <div className="text-base font-semibold tracking-[-0.04em]">Nikolai Cabrera</div>
                <div className={`text-xs ${mutedText}`}>Portfolio</div>
              </div>
            </div>

            <nav className="space-y-2">
              {navItems.map(({ label, icon: Icon, href }) => {
                const isActive = activeSection === href.slice(1)

                return (
                  <a
                    key={label}
                    href={href}
                    aria-current={isActive ? 'location' : undefined}
                    onClick={() => setActiveSection(href.slice(1))}
                    className={`group flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-[#A3F635] text-[#171917] shadow-sm shadow-[#A3F635]/30'
                        : `${mutedText} hover:bg-[#EAF7CF]/60 hover:text-[#171917] ${darkMode ? 'hover:bg-[#1B241E]' : ''}`
                    }`}
                  >
                    <span className={`flex h-8 w-8 items-center justify-center rounded-xl ${isActive ? 'bg-white/70' : 'bg-transparent group-hover:bg-[#E7E9E5]'}`}>
                      <Icon size={16} />
                    </span>
                    {label}
                  </a>
                )
              })}
            </nav>
          </div>

          <div className="flex items-center justify-center gap-3">
            {contactLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={label}
                className={`group relative flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                  darkMode ? 'border-[#2B3430] bg-[#111816] text-[#F5F6F3] hover:bg-[#A3F635] hover:text-[#171917]' : 'border-[#E7E9E5] bg-white text-[#171917] hover:bg-[#A3F635]'
                }`}
                title={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </aside>

        <div className="flex-1">
          <header className={`sticky top-0 z-20 border-b px-4 py-4 backdrop-blur-md sm:px-6 xl:px-8 ${darkMode ? 'border-[#1F2724] bg-[#101312]/80' : 'border-[#E7E9E5] bg-[#F5F6F3]/80'}`}>
            <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border md:hidden ${darkMode ? 'border-[#2B3430] bg-[#111816] text-[#F5F6F3]' : 'border-[#E7E9E5] bg-white text-[#171917]'}`}
                  onClick={() => setMobileMenuOpen((open) => !open)}
                  aria-label="Toggle navigation"
                >
                  <span className="flex flex-col gap-1.5">
                    <span className="block h-0.5 w-4 rounded-full bg-current" />
                    <span className="block h-0.5 w-4 rounded-full bg-current" />
                    <span className="block h-0.5 w-4 rounded-full bg-current" />
                  </span>
                </button>

                <div>
                  <div className="text-lg font-semibold tracking-[-0.06em]">Good morning, I'm Nikolai.</div>
                  <div className={`text-sm ${mutedText}`}>Full-stack developer and graphic designer.</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className={`hidden items-center gap-2 rounded-2xl border px-3 py-2 md:flex ${darkMode ? 'border-[#2B3430] bg-[#111816]' : 'border-[#E7E9E5] bg-white'}`}>
                  <MapPin size={15} className={mutedText} />
                  <span className={`text-sm ${primaryText}`}>{location.label}</span>
                </div>

                <button
                  type="button"
                  className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${darkMode ? 'border-[#2B3430] bg-[#111816] text-[#F5F6F3]' : 'border-[#E7E9E5] bg-white text-[#171917]'}`}
                  onClick={() => setDarkMode((mode) => !mode)}
                  aria-label="Toggle theme"
                >
                  {darkMode ? <SunMedium size={16} /> : <MoonStar size={16} />}
                </button>

                <img src={profileImage} alt="Nikolai Cabrera" className="h-10 w-10 rounded-full object-cover shadow-sm shadow-[#A3F635]/30" />
              </div>
            </div>

            {mobileMenuOpen && (
              <div className={`mt-4 rounded-2xl border p-3 md:hidden ${darkMode ? 'border-[#1F2724] bg-[#111816]' : 'border-[#E7E9E5] bg-white'}`}>
                <nav className="space-y-2">
                  {navItems.map(({ label, icon: Icon, href }) => {
                    const isActive = activeSection === href.slice(1)

                    return (
                      <a
                        key={label}
                        href={href}
                        aria-current={isActive ? 'location' : undefined}
                        className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium ${isActive ? 'bg-[#A3F635] text-[#171917]' : mutedText}`}
                        onClick={() => {
                          setActiveSection(href.slice(1))
                          setMobileMenuOpen(false)
                        }}
                      >
                        <Icon size={16} />
                        {label}
                      </a>
                    )
                  })}
                </nav>
              </div>
            )}
          </header>

          <main className="mx-auto max-w-[1200px] px-4 py-6 sm:px-6 xl:px-8 xl:py-8">
            <section id="home" className="scroll-mt-24 grid gap-6 pb-8 pt-2 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8">
              <div className="space-y-7">
                <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm ${darkMode ? 'border-[#2B3430] bg-[#111816] text-[#F5F6F3]' : 'border-[#E7E9E5] bg-white text-[#171917]'}`}>
                  <span className="h-2 w-2 rounded-full bg-[#A3F635]" />
                  Available for opportunities
                </div>

                <div className="space-y-3">
                  <p className={`text-2xl font-medium tracking-[-0.08em] ${primaryText}`}>Hi, I'm Nikolai.</p>
                  <h1 className={`text-4xl font-semibold tracking-[-0.08em] ${primaryText} sm:text-5xl xl:text-[4.4rem] xl:leading-[0.95]`}>
                    Full-Stack Developer
                  </h1>
                </div>

                <p className={`max-w-xl text-base leading-7 ${mutedText}`}>
                  I build accessible, human-centered digital products, combining full-stack development with a background in graphic design.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-2xl bg-[#A3F635] px-5 py-3 text-sm font-semibold text-[#171917] shadow-sm shadow-[#A3F635]/40 transition-transform hover:-translate-y-0.5"
                  >
                    View My Work
                    <ArrowRight size={16} />
                  </a>
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold transition-colors ${secondaryButtonClass}`}
                  >
                    <Send size={15} />
                    Let&apos;s Connect
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-6 rounded-[2rem] bg-[#D8F8A5] blur-3xl opacity-60" />
                <div className={`relative overflow-hidden rounded-[2rem] border p-6 shadow-[0_20px_60px_rgba(23,25,23,0.08)] ${panelClass}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className={`text-[0.7rem] font-medium uppercase tracking-[0.22em] ${mutedText}`}>Profile</p>
                      <h2 className={`mt-2 text-2xl font-semibold tracking-[-0.06em] ${primaryText}`}>Nikolai Cabrera</h2>
                    </div>
                    <div className="rounded-full border border-[#A3F635] bg-[#F4FFD9] px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#171917]">
                      Active
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-4">
                    <img src={profileImage} alt="Nikolai Cabrera" className="h-16 w-16 rounded-2xl object-cover" />
                    <div>
                      <div className={`text-lg font-semibold ${primaryText}`}>Full-Stack Developer</div>
                      <div className={`text-sm ${mutedText}`}>Information Technology</div>
                    </div>
                  </div>

                  <div className={`mt-8 rounded-2xl border p-4 ${darkMode ? 'border-[#2B3430] bg-[#111816]' : 'border-[#E7E9E5] bg-[#F9FAF8]'}`}>
                    <div className={`flex items-center justify-between text-xs uppercase tracking-[0.2em] ${mutedText}`}>
                      <span>Focus</span>
                      <Sparkles size={14} className={primaryText} />
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                      <div className={`rounded-xl border px-3 py-2 ${darkMode ? 'border-[#2B3430] bg-[#151D1B]' : 'border-[#E7E9E5] bg-white'}`}>
                        Full-Stack Development
                      </div>
                      <div className={`rounded-xl border px-3 py-2 ${darkMode ? 'border-[#2B3430] bg-[#151D1B]' : 'border-[#E7E9E5] bg-white'}`}>
                        Data Visualization
                      </div>
                      <div className={`rounded-xl border px-3 py-2 ${darkMode ? 'border-[#2B3430] bg-[#151D1B]' : 'border-[#E7E9E5] bg-white'}`}>
                        System Automation
                      </div>
                      <div className={`rounded-xl border px-3 py-2 ${darkMode ? 'border-[#2B3430] bg-[#151D1B]' : 'border-[#E7E9E5] bg-white'}`}>
                        Graphic Design
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between rounded-2xl bg-[#171917] px-4 py-3 text-[#F5F6F3]">
                    <div>
                      <div className="text-[0.65rem] uppercase tracking-[0.22em] text-[#B6BAB5]">Current</div>
                      <div className="mt-1 text-sm font-medium">Open to opportunities</div>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#A3F635] text-[#171917]">
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="grid gap-4 pb-8 md:grid-cols-2 xl:grid-cols-4">
              {stats.map(({ value, label }) => (
                <div key={label} className={`rounded-2xl border p-5 ${cardClass}`}>
                  <div className={`text-3xl font-semibold tracking-[-0.07em] ${primaryText}`}>{value}</div>
                  <div className={`mt-2 text-sm ${mutedText}`}>{label}</div>
                </div>
              ))}
            </section>

            <section id="about" className={`scroll-mt-24 mb-8 grid gap-6 rounded-[2rem] border p-6 ${cardClass} lg:grid-cols-[0.9fr_1.1fr]`}>
              <div>
                <p className={`text-xs font-medium uppercase tracking-[0.2em] ${mutedText}`}>About</p>
                <h2 className={`mt-3 text-3xl font-semibold tracking-[-0.08em] ${primaryText}`}>Developer and designer based in La Union.</h2>
              </div>

              <div className={`space-y-4 text-base leading-7 ${mutedText}`}>
                <p>
                  I started coding around three years ago and grew interested in solving real-world problems through software. As an Information Technology student, I built web applications through academic projects and practical systems focused on usability and efficiency.
                </p>
                <p>
                  Alongside development, my graphic design experience informs how I approach visual communication and user-friendly interfaces. I focus on clean, maintainable code and accessible experiences.
                </p>
              </div>
            </section>

            <section id="projects" className="scroll-mt-24 pb-8">
              <div className="mb-5 flex items-end justify-between gap-3">
                <div>
                  <p className={`text-xs font-medium uppercase tracking-[0.2em] ${mutedText}`}>Selected work</p>
                  <h2 className={`mt-2 text-3xl font-semibold tracking-[-0.08em] ${primaryText}`}>Projects</h2>
                </div>
                <a href="#contact" className={`inline-flex items-center gap-2 text-sm font-medium ${primaryText}`}>
                  Get in touch
                  <ExternalLink size={15} />
                </a>
              </div>

              <div className="grid gap-5 lg:grid-cols-3">
                {projects.map(({ title, category, description, technologies, accent }) => (
                  <article key={title} className={`overflow-hidden rounded-[1.75rem] border ${cardClass}`}>
                    <div className={`h-44 p-5 ${accent}`}>
                      <div className="flex h-full items-start justify-between">
                        <div className="rounded-full border border-white/50 bg-white/30 px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-[#171917]">
                          {category}
                        </div>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#171917] text-[#F5F6F3]">
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3 p-5">
                      <h3 className={`text-xl font-semibold tracking-[-0.06em] ${primaryText}`}>{title}</h3>
                      <p className={`text-sm leading-6 ${mutedText}`}>{description}</p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {technologies.map((technology) => (
                          <span key={technology} className={`rounded-full border px-2.5 py-1 text-xs ${darkMode ? 'border-[#2B3430] bg-[#121817] text-[#F5F6F3]' : 'border-[#E7E9E5] bg-[#F7F8F7] text-[#171917]'}`}>
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section id="skills" className="scroll-mt-24 grid gap-6 pb-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className={`rounded-[2rem] border p-6 ${cardClass}`}>
                <p className={`text-xs font-medium uppercase tracking-[0.2em] ${mutedText}`}>Capabilities</p>
                <h2 className={`mt-3 text-3xl font-semibold tracking-[-0.08em] ${primaryText}`}>Skills</h2>
                <div className="mt-6 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className={`rounded-full border px-3 py-2 text-sm ${darkMode ? 'border-[#2B3430] bg-[#121817] text-[#F5F6F3]' : 'border-[#E7E9E5] bg-[#F7F8F7] text-[#171917]'}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`rounded-[2rem] border p-6 ${cardClass}`}>
                <p className={`text-xs font-medium uppercase tracking-[0.2em] ${mutedText}`}>Areas of focus</p>
                <h3 className={`mt-3 text-2xl font-semibold tracking-[-0.06em] ${primaryText}`}>Building useful systems</h3>
                <p className={`mt-4 text-base leading-7 ${mutedText}`}>
                  My project work includes full-stack web applications, data visualization, mapping, and system automation. I also bring hands-on experience in graphic design.
                </p>
              </div>
            </section>

            <section id="experience" className="scroll-mt-24 pb-8">
              <div className="mb-5">
                <p className={`text-xs font-medium uppercase tracking-[0.2em] ${mutedText}`}>Background</p>
                <h2 className={`mt-2 text-3xl font-semibold tracking-[-0.08em] ${primaryText}`}>Experience & education</h2>
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                <div className={`rounded-[1.75rem] border p-5 ${cardClass}`}>
                  <h3 className={`mb-4 text-lg font-semibold ${primaryText}`}>Work experience</h3>
                  <div className="space-y-4">
                    {experience.map(({ role, company, period, text }) => (
                      <div key={role}>
                        <div className={`font-semibold ${primaryText}`}>{role}</div>
                        <div className={`mt-1 text-sm ${mutedText}`}>{company} · {period}</div>
                        <p className={`mt-3 text-sm leading-6 ${mutedText}`}>{text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`rounded-[1.75rem] border p-5 ${cardClass}`}>
                  <h3 className={`mb-4 text-lg font-semibold ${primaryText}`}>Education</h3>
                  <div className="space-y-4">
                    {education.map(({ degree, school, period }) => (
                      <div key={degree}>
                        <div className={`font-semibold ${primaryText}`}>{degree}</div>
                        <div className={`mt-1 text-sm leading-6 ${mutedText}`}>{school}</div>
                        <div className={`mt-1 text-sm ${mutedText}`}>{period}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section id="contact" className={`scroll-mt-24 rounded-[2rem] border p-6 ${cardClass}`}>
              <div className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-center">
                <div>
                  <p className={`text-xs font-medium uppercase tracking-[0.2em] ${mutedText}`}>Connect</p>
                  <h2 className={`mt-2 text-3xl font-semibold tracking-[-0.08em] ${primaryText}`}>Let&apos;s build something useful.</h2>
                  <p className={`mt-3 max-w-lg text-base leading-7 ${mutedText}`}>
                    I&apos;m open to freelance opportunities and full-time roles. If you have a project in mind, feel free to reach out.
                  </p>
                  <p className={`mt-4 inline-flex items-center gap-2 text-sm ${mutedText}`}>
                    <location.icon size={16} />
                    {location.label}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  {contactLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noreferrer' : undefined}
                      className={`inline-flex items-center justify-between rounded-2xl border px-4 py-3 text-sm font-medium transition-colors ${darkMode ? 'border-[#2B3430] bg-[#111816] text-[#F5F6F3] hover:bg-[#1A241F]' : 'border-[#E7E9E5] bg-white text-[#171917] hover:bg-[#F5F6F3]'}`}
                    >
                      <span className="inline-flex items-center gap-3">
                        <Icon size={16} />
                        {label}
                      </span>
                      <ArrowRight size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
