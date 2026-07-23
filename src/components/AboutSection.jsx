//import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring DevOps Engineer focused on building and managing scalable cloud infrastructure.
            </h3>

            <p className="text-muted-foreground">
              As a fresher learning cloud and DevOps, I’m building a strong foundation in Linux, 
              cloud computing, and infrastructure management using AWS.
            </p>

            <p className="text-muted-foreground">
            I’m passionate about understanding how modern applications are deployed and managed in the cloud,
             and I continuously explore DevOps tools and best practices to grow as a DevOps engineer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="https://www.linkedin.com/in/yogeshingavale1/" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
               <a href="./Yogesh-Resume-Cloud.pdf" target="_blank" rel="noopener noreferrer">
                 Download cv
               </a>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                {/* <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div> */}
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> DevOps & Cloud Engineering</h4>
                  <p className="text-muted-foreground">
                    Building scalable cloud infrastructure using Linux, AWS, GCP, 
                    Docker, Kubernetes, Terraform, Ansible, and Jenkins.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                {/* <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div> */}
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud Computing</h4>
                  <p className="text-muted-foreground">
                    Working with cloud platforms to design, deploy, 
                    and monitor reliable systems while following best practices for security, scalability, and performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                {/* <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div> */}

                <div className="text-left">
                  <h4 className="font-semibold text-lg">CI/CD & Automation</h4>
                  <p className="text-muted-foreground">
                    Implementing continuous integration and deployment pipelines using modern DevOps
                     tools to ensure faster, reliable, and efficient application delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
