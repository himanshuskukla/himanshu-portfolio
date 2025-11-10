'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Award, Briefcase, GraduationCap, Globe, TrendingUp, Users, Target } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function AboutPage() {
  const expertise = [
    { icon: <Briefcase className="w-6 h-6" />, title: "Climate-Tech", color: "from-green-500 to-emerald-600" },
    { icon: <Target className="w-6 h-6" />, title: "FinTech", color: "from-blue-500 to-cyan-600" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "SaaS", color: "from-purple-500 to-pink-600" },
    { icon: <Globe className="w-6 h-6" />, title: "Banking", color: "from-orange-500 to-red-600" },
    { icon: <Users className="w-6 h-6" />, title: "Digital Twin", color: "from-indigo-500 to-purple-600" },
    { icon: <GraduationCap className="w-6 h-6" />, title: "Ed-Tech", color: "from-pink-500 to-rose-600" },
    { icon: <Award className="w-6 h-6" />, title: "Financial Services", color: "from-cyan-500 to-blue-600" }
  ]

  const experience = [
    {
      company: "Independent Consultant",
      role: "Strategic Project Management & Digital Transformation",
      period: "2020 - Present",
      highlights: [
        "Led $100M+ in project value across multiple industries",
        "Achieved 30% average efficiency improvements",
        "Served clients from startups to Fortune 500 companies",
        "Spearheaded digital transformation initiatives"
      ],
      color: "from-blue-500 to-purple-600"
    },
    {
      company: "WINNIIO AB",
      role: "Digital Twin & Smart Building Solutions",
      period: "2018 - 2020",
      highlights: [
        "Developed AI-powered building management platform",
        "Achieved 30% energy savings across managed properties",
        "Built self-learning optimization algorithms",
        "Managed 15+ commercial and residential buildings"
      ],
      color: "from-purple-500 to-pink-600"
    },
    {
      company: "DCarbon Solutions",
      role: "Clean Energy Platform Strategy",
      period: "2017 - 2019",
      highlights: [
        "Revolutionized residential solar REC marketplace",
        "Generated $5M+ in value for homeowners",
        "Connected 10,000+ homes to clean energy markets",
        "Implemented blockchain-based verification system"
      ],
      color: "from-green-500 to-emerald-600"
    },
    {
      company: "Manipal Business Solutions",
      role: "Financial Inclusion Initiatives",
      period: "2014 - 2017",
      highlights: [
        "Extended banking to 10,000+ unbanked villages",
        "Opened 50,000+ new accounts",
        "Trained 500+ local banking agents",
        "Disbursed $20M+ in microcredit"
      ],
      color: "from-orange-500 to-red-600"
    }
  ]

  const values = [
    {
      title: "Innovation-Driven",
      description: "Constantly seeking cutting-edge solutions that push boundaries and create competitive advantages.",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Results-Focused",
      description: "Every strategy is measured by tangible outcomes and measurable business impact.",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Collaborative Partnership",
      description: "Working alongside teams to build capabilities and foster lasting organizational change.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Global Perspective",
      description: "Bringing international best practices while respecting local contexts and challenges.",
      icon: <Globe className="w-8 h-8" />
    }
  ]


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-slate-600 hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </motion.button>
          </Link>

          <div className="grid md:grid-cols-3 gap-16 items-center mb-20">
            {/* Photo Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="md:col-span-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
                <div className="relative bg-gradient-to-br from-slate-100 to-blue-100 rounded-3xl p-8 aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold mb-4">
                      HS
                    </div>
                    <p className="text-slate-600 text-sm">Professional Photo</p>
                  </div>
                </div>
              </div>

              {/* Achievement Cards */}
              <div className="mt-6 space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-md border border-slate-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white font-bold text-lg">
                    50+
                  </div>
                  <div>
                    <div className="font-bold text-primary">Projects Delivered</div>
                    <div className="text-sm text-slate-600">Across 7 industries</div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-md border border-slate-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-lg">
                    98%
                  </div>
                  <div>
                    <div className="font-bold text-primary">Client Satisfaction</div>
                    <div className="text-sm text-slate-600">Long-term partnerships</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-2"
            >
              <h1 className="text-6xl md:text-7xl font-display font-bold mb-6 text-primary">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
              </h1>

              <p className="text-2xl text-accent font-medium mb-6">
                Strategic Partner for Transformative Growth
              </p>

              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  With <strong className="text-primary">14+ years</strong> of transformative leadership experience, I specialize in guiding organizations from ideation to execution, bridging the gap between vision and value to ensure every project delivers measurable impact.
                </p>

                <p>
                  My approach combines <strong className="text-primary">innovative strategies</strong> with practical solutions, helping businesses achieve operational excellence, drive digital transformation, and build resilient organizations that thrive in complex, rapidly evolving markets.
                </p>

                <p>
                  From <strong className="text-primary">startups to Fortune 500</strong> companies, I've influenced over <strong className="text-primary">$100M+ in project value</strong>, consistently delivering 30% average efficiency improvements across diverse sectors including Climate-Tech, FinTech, SaaS, Banking, Digital Twin, Ed-Tech, and Financial Services.
                </p>

                <p>
                  What sets my work apart is the focus on <strong className="text-primary">sustainable impact</strong>—not just implementing solutions, but building organizational capabilities that ensure long-term success and continuous innovation.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <Link href="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg"
                  >
                    View Projects
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-white text-primary border-2 border-primary rounded-full font-semibold"
                  >
                    Get in Touch
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-display font-bold text-primary mb-6">
              Industry Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Deep domain knowledge across multiple high-growth sectors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 shadow-md border border-slate-100 text-center"
              >
                <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-primary">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-display font-bold text-primary mb-6">
              Professional Journey
            </h2>
            <p className="text-xl text-slate-600">
              A track record of transformative impact across leading organizations
            </p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-elegant border border-slate-100">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-white font-bold flex-shrink-0`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-2xl font-bold text-primary">{exp.company}</h3>
                          <p className="text-lg text-accent font-medium">{exp.role}</p>
                        </div>
                        <span className="text-sm text-slate-600 font-medium bg-slate-100 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-600">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-display font-bold text-primary mb-6">
              Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Principles that guide every engagement and decision
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 shadow-md border border-slate-100"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white mb-4">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-display font-bold text-primary mb-6">
              Let's Create Impact Together
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Ready to transform your organization? Let's discuss how we can achieve your goals.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg shadow-2xl"
              >
                Start a Conversation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-display font-bold mb-4">Himanshu Shukla</h3>
              <p className="text-slate-400 leading-relaxed">
                Strategic Project Management Consulting & Digital Transformation Expert
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'Projects', 'Services', 'About', 'Blog', 'Contact'].map((item) => (
                  <Link key={item} href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}>
                    <div className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                      {item}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="space-y-2 text-slate-400">
                <div>LinkedIn</div>
                <div>Email</div>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Himanshu Shukla. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
