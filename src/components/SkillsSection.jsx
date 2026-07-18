import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
 

  // Cloud
  { name: "AWS", level: 50, category: "Cloud" },
  { name: "GCP", level: 50, category: "Cloud" },
  { name: "Azure", level: 50, category: "Cloud" },

 // Operating System 
  { name: "Linux", level: 50, category: "operating-system" },
  { name: "Windows", level: 50, category: "operating-system" },

  //containers & Orchestration
  { name: "Docker", level: 50, category: "Containers & Orchestration" },
  { name: "Kubernetes", level: 50, category: "Containers & Orchestration" },
  
  // Infrastructure as Code (IaC)
  { name: "Terraform", level: 50, category: "IaC" },
  { name: "Ansible", level: 50, category: "IaC" },

  // CI/CD
  { name: "GitHub", level: 50, category: "CI/CD" },
  { name: "Jenkins", level: 50, category: "CI/CD" },
  { name: "GitHub Actions", level: 50, category: "CI/CD" },

  // Monitoring
  { name: "Prometheus", level: 50, category: "monitoring" },
  { name: "Grafana", level: 50, category: "monitoring" },
  { name: "CloudWatch", level: 50, category: "monitoring" },

  // Scripting Languages
  { name: "Python", level: 50, category: "Scripting" },
  { name: "Bash", level: 50, category: "Scripting" },

  //Networking
  { name: "TCP/IP", level: 50, category: "Networking" },
  { name: "DNS", level: 50, category: "Networking" },
  { name: "HTTP/HTTPS", level: 50, category: "Networking" },
  { name: "VPC", level: 50, category: "Networking" },
];

const categories = ["all", "Cloud", "operating-system", "Scripting", "IaC", "CI/CD","Containers & Orchestration","monitoring", "Networking"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
