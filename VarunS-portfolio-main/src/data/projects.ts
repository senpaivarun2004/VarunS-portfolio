export interface Project {
  name: string;
  category: string;
  status: "COMPLETED" | "LEARNING / PRACTICE" | "CONCEPT";
  description: string;
  problem?: string;
  solution?: string;
  builtText: string;
  keyFeatures: string[];
  stack: string[];
  tag: string;
  github?: string;
  demo?: string;
  isFeatured?: boolean;
}

export const projects: Project[] = [
  {
    name: "Cybersafe Shield",
    category: "Cybersecurity + ML + NLP",
    status: "COMPLETED",
    description: "Built a machine-learning and NLP based cyberbullying detection system designed to identify abusive or harmful messages and promote safer online communication.",
    problem: "Rising cyberbullying, abusive language, and toxic messaging in modern online platforms and social communications.",
    solution: "Trained an SVM text classification pipeline on preprocessed datasets with a lightweight Flask backend and SQLite database to flag and log hazardous content in real time.",
    builtText: "Developed text preprocessing, SVM classification pipeline with Joblib serialization, Flask API server, and SQLite storage for flagged interactions.",
    keyFeatures: [
      "Text preprocessing & NLP cleaning pipeline",
      "SVM classification pipeline for toxicity detection",
      "Model serialization and fast inference via Joblib",
      "Flask REST API backend with SQLite message logging",
      "Real-time harmful message analysis concept"
    ],
    stack: ["Python", "Machine Learning", "NLP", "Scikit-learn", "SVM", "Flask", "SQLite", "Joblib"],
    tag: "ML & Security",
    isFeatured: true,
    github: "https://github.com/senpaivarun2004/Project-on-Prevent-Cyber-Bulling-in-social-media"
  },
  {
    name: "HR Store Sales Data Analysis",
    category: "Data Analytics / Business Intelligence",
    status: "COMPLETED",
    description: "Created an interactive Power BI dashboard integrating Excel data to analyze sales performance, revenue trends, products and business KPIs.",
    builtText: "Engineered comprehensive DAX metrics, cleaned transactional records with Power Query, and built executive drill-through sales dashboards.",
    keyFeatures: [
      "Interactive Power BI dashboard with KPI summary cards",
      "Sales performance & monthly revenue trend analysis",
      "Product categorization and regional performance metrics",
      "Advanced DAX measures and Power Query ETL pipeline",
      "Slicers, interactive cross-filtering, and drill-through views"
    ],
    stack: ["Power BI", "Excel", "DAX", "Power Query", "Data Analytics", "Data Visualization"],
    tag: "Business Intelligence",
    github: "https://github.com/senpaivarun2004/HR-Sales-Data-Analysis-"
  },
  {
    name: "Hospital Management Analytics Dashboard",
    category: "Healthcare Analytics",
    status: "COMPLETED",
    description: "Interactive healthcare analytics dashboard designed to analyze hospital operations, patients, appointments, and revenue streams.",
    builtText: "Modeled relational clinical & operational records, built DAX utilization formulas, and designed intuitive departmental analytics views.",
    keyFeatures: [
      "Patient demographics and visit reason breakdowns",
      "Appointment volume tracking and doctor availability trends",
      "Hospital department revenue and insurance claim metrics",
      "Power Query data transformation and relational data modeling",
      "Multi-dimensional slicers and executive KPI cards"
    ],
    stack: ["Power BI", "SQL", "DAX", "Power Query", "Excel", "Healthcare Analytics"],
    tag: "Healthcare BI"
  },
  {
    name: "Anime Dataset Analytics Dashboard",
    category: "Data Analytics / Visualization",
    status: "COMPLETED",
    description: "Interactive dashboard designed to analyze anime ratings, genres, popularity distributions, and audience engagement trends.",
    builtText: "Processed complex multi-genre tags in Power Query, calculated ranking percentiles in DAX, and built visual audience segmentations.",
    keyFeatures: [
      "Anime rating distributions across genres and studios",
      "Popularity trends and audience score correlations",
      "Power Query data cleansing and DAX ranking aggregations",
      "Dynamic visual filters for season, type, and demographic"
    ],
    stack: ["Power BI", "Excel", "DAX", "Power Query", "Data Analytics"],
    tag: "Data Visualization"
  },
  {
    name: "FinGuard-AI",
    category: "FinTech + AI + Cybersecurity",
    status: "CONCEPT",
    description: "Proposed intelligent financial fraud detection system designed to identify suspicious Credit Card and UPI transactions through anomaly scoring.",
    builtText: "Architectural blueprint combining transactional feature extraction with unsupervised anomaly detection and real-time risk indicators.",
    keyFeatures: [
      "Real-time transaction anomaly detection pipeline",
      "Machine learning risk scoring for UPI & Credit Card flow",
      "Risk classification and flagged suspicious behavior alerts",
      "Interactive monitoring dashboard concept for security analysts"
    ],
    stack: ["Python", "Machine Learning", "Anomaly Detection", "AI", "Cybersecurity", "Data Analytics"],
    tag: "Capstone Concept"
  },
  {
    name: "SQL Analytics Lab",
    category: "Data Analytics / SQL",
    status: "LEARNING / PRACTICE",
    description: "Practical business analytics problems and queries strengthening SQL data filtering, aggregation, and relational querying skills.",
    builtText: "Authored complex relational queries covering Window functions, Common Table Expressions (CTEs), and business KPI aggregations.",
    keyFeatures: [
      "Advanced JOINs, subqueries, and recursive CTEs",
      "Window functions: RANK, DENSE_RANK, and ROW_NUMBER",
      "Business performance, cohort grouping, and date analysis",
      "Structured exercises simulating real-world database audits"
    ],
    stack: ["SQL", "MySQL", "Relational Modeling", "Data Analysis"],
    tag: "Query Engineering"
  },
  {
    name: "Machine Learning Experiments",
    category: "Machine Learning",
    status: "LEARNING / PRACTICE",
    description: "Hands-on explorations in predictive analytics, model tuning, exploratory data analysis (EDA), and algorithm evaluations.",
    builtText: "Implemented end-to-end notebooks evaluating classification, regression, and clustering methods across Kaggle datasets.",
    keyFeatures: [
      "Exploratory Data Analysis (EDA) with Seaborn & Matplotlib",
      "Feature engineering and scaling pipelines",
      "Classification & regression: Decision Trees, Random Forest, SVM, KNN",
      "Unsupervised clustering (K-Means) & model evaluation matrices"
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    tag: "ML Exploration"
  },
  {
    name: "Personal Profile Website",
    category: "Web Development",
    status: "COMPLETED",
    description: "Responsive developer portfolio engineered to showcase data analytics, AI/ML models, and cybersecurity projects.",
    builtText: "Engineered with modern frontend components, dynamic GitHub fetching, interactive glassmorphism cards, and terminal-inspired animations.",
    keyFeatures: [
      "Responsive, mobile-friendly design with cyberpunk-inspired dark UI",
      "Dynamic GitHub REST API integration with real-time repo loading",
      "Interactive analytics workflow visualizer & security dashboard",
      "Accessible typography, smooth micro-interactions, and fast load speeds"
    ],
    stack: ["Astro", "React", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
    tag: "Web Engineering"
  }
];
