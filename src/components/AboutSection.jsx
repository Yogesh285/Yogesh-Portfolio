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
              Cloud & DevOps Engineer passionate about building scalable, automated, and reliable cloud solutions that simplify application deployment and operations.
            </h3>

            <p className="text-muted-foreground">
              I'm a Cloud & DevOps Engineer who enjoys solving infrastructure challenges and building applications that are secure, scalable, and easy to manage. 
              My focus is on automating deployments, improving reliability, and creating efficient cloud environments.
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
                    Designing cloud infrastructure that is secure, scalable, and optimized for reliable application deployment.
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
                    Deploying modern applications using containerization and orchestration while ensuring high availability, efficient networking, and seamless service communication.
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
                    Automating software delivery and implementing monitoring solutions to improve application reliability, visibility, and operational efficiency.
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
