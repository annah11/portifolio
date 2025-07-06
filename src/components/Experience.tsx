
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting solutions for enterprise clients.',
      achievements: [
        'Led a team of 5 developers in building a multi-tenant SaaS platform',
        'Improved application performance by 40% through optimization',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ],
      skills: ['React', 'Node.js', 'AWS', 'TypeScript', 'PostgreSQL']
    },
    {
      id: 2,
      type: 'work',
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2020 - 2022',
      description: 'Developed and maintained web applications for various clients. Worked closely with design teams to implement responsive and accessible user interfaces.',
      achievements: [
        'Built 10+ responsive web applications from scratch',
        'Integrated third-party APIs and payment gateways',
        'Collaborated with cross-functional teams in agile environment'
      ],
      skills: ['React', 'Vue.js', 'Python', 'Django', 'MongoDB']
    },
    {
      id: 3,
      type: 'work',
      title: 'Junior Web Developer',
      company: 'WebDev Agency',
      location: 'New York, NY',
      period: '2019 - 2020',
      description: 'Started my professional journey building websites and web applications. Gained experience in frontend and backend technologies.',
      achievements: [
        'Contributed to 20+ client projects',
        'Learned modern web development practices',
        'Participated in code reviews and team meetings'
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      location: 'California, USA',
      period: '2015 - 2019',
      description: 'Focused on software engineering, algorithms, and data structures. Graduated with honors.',
      achievements: [
        'Dean\'s List for 6 semesters',
        'President of Computer Science Club',
        'Capstone project: AI-powered recommendation system'
      ]
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023'
    },
    {
      name: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      year: '2022'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      year: '2021'
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Building className="mr-3 h-6 w-6 text-primary" />
              Work Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-lg" />
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <Badge variant="secondary" className="ml-4">
                          <Calendar className="mr-1 h-3 w-3" />
                          {exp.period}
                        </Badge>
                      </div>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Building className="mr-2 h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                        <MapPin className="ml-4 mr-2 h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{exp.description}</p>
                      <div>
                        <h4 className="font-semibold mb-2">Key Achievements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <GraduationCap className="mr-3 h-6 w-6 text-primary" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card>
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-lg">{edu.degree}</CardTitle>
                          <Badge variant="secondary">
                            <Calendar className="mr-1 h-3 w-3" />
                            {edu.period}
                          </Badge>
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Building className="mr-2 h-4 w-4" />
                          <span className="font-medium">{edu.school}</span>
                          <MapPin className="ml-4 mr-2 h-4 w-4" />
                          <span>{edu.location}</span>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground">{edu.description}</p>
                        <div>
                          <h4 className="font-semibold mb-2">Highlights:</h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            {edu.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold">{cert.name}</h4>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        </div>
                        <Badge variant="outline">{cert.year}</Badge>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
