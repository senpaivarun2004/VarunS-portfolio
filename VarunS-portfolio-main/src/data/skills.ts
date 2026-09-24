export interface Skill {
  name: string;
  category: string;
  level?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Data Analytics & BI",
    description: "Business intelligence, metric modeling, and interactive reporting",
    skills: [
      { name: "Power BI", category: "BI" },
      { name: "Advanced Excel", category: "Analytics" },
      { name: "Power Query", category: "BI" },
      { name: "DAX", category: "BI" },
      { name: "SQL", category: "Database" },
      { name: "Data Visualization", category: "Analytics" },
      { name: "Statistics", category: "Analytics" },
      { name: "EDA (Exploratory Data Analysis)", category: "Analytics" },
      { name: "Business Analytics", category: "Analytics" }
    ]
  },
  {
    title: "Data Science & AI / ML",
    description: "Machine learning algorithms, data engineering, and modern AI",
    skills: [
      { name: "Python", category: "Language" },
      { name: "Machine Learning", category: "ML" },
      { name: "Scikit-learn", category: "ML" },
      { name: "Pandas", category: "Data Science" },
      { name: "NumPy", category: "Data Science" },
      { name: "Matplotlib", category: "Visualization" },
      { name: "Seaborn", category: "Visualization" },
      { name: "NLP", category: "AI" },
      { name: "Applied AI", category: "AI" },
      { name: "Generative AI", category: "AI" },
      { name: "Prompt Engineering", category: "AI" }
    ]
  },
  {
    title: "Cybersecurity & Online Safety",
    description: "Digital threat analysis, defense concepts, and safety systems",
    skills: [
      { name: "Cybersecurity", category: "Security" },
      { name: "Ethical Hacking", category: "Security" },
      { name: "Online Safety", category: "Safety" },
      { name: "Cyberbullying Detection", category: "Safety" },
      { name: "Digital Threat Analysis", category: "Security" }
    ]
  },
  {
    title: "Programming & Web Frameworks",
    description: "Object-oriented programming, backend services, and web foundations",
    skills: [
      { name: "Java", category: "Language" },
      { name: "JavaScript", category: "Web" },
      { name: "HTML", category: "Web" },
      { name: "CSS", category: "Web" },
      { name: "Flask", category: "Backend" },
      { name: "SQLite", category: "Database" },
      { name: "MySQL", category: "Database" },
      { name: "MongoDB", category: "Database" }
    ]
  },
  {
    title: "Developer Tools & Platforms",
    description: "Workflow, version control, and data science environments",
    skills: [
      { name: "Git", category: "Tools" },
      { name: "GitHub", category: "Tools" },
      { name: "Jupyter", category: "Tools" },
      { name: "Google Colab", category: "Tools" },
      { name: "Kaggle", category: "Tools" },
      { name: "VS Code", category: "Tools" }
    ]
  }
];
