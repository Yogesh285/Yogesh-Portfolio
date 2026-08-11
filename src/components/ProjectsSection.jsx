import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CI/CD Automation with GitHub Actions and AWS S3",
    description: "Designed and implemented an end-to-end CI/CD pipeline using GitHub Actions to automate build and deployment to AWS S3.",
    image: "/projects/project11.png",
    tags: ["Git & GitHub", "GitHub Actions", "AWS S3", "yaml"],
    demoUrl: "#",
    githubUrl: "https://github.com/Yogesh285/personal-portfolio",
  },
  {
    id: 2,
    title: "AWS EC2 Linux Server Setup with NGINX",
    description:
      "Deployed a Linux-based web server on AWS using Amazon Linux and NGINX, securely hosted a website from GitHub, and performed basic monitoring and log analysis.",
    image: "/projects/project22.png",
    tags: ["AWS", "Amazon Linux", "Nginx", "Git & GitHub", "SSH & HTTP"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Static Portfolio Website Hosting Using AWS S3",
    description:
      "Deployed a cloud-based static portfolio website on AWS S3 by configuring static website hosting, bucket policies, and public access permissions for internet-facing content delivery.",
    image: "/projects/project33.png",
    tags: ["AWS", "AWS S3", "Bucket Policies" , "Static website hosting",],
    demoUrl: "#",
    githubUrl: "https://github.com/Yogesh285/aws-s3-portfolio",
  },

  {
    id: 4,
    title: "Image Resizing Project Using AWS Lambda",
    description:
      "Built a serverless image processing pipeline on AWS where uploaded images are automatically resized using AWS Lambda, stored in an S3 bucket, and email notifications are sent via SNS. Infrastructure was provisioned using Terraform.",
    image: "/projects/project4.png",
    tags: ["AWS", "AWS Lambda", "AWS S3", "SNS", "Terraform"],
    demoUrl: "#",
    githubUrl: "https://github.com/Yogesh285/Image-Resizing-Project-Using-AWS-Lambda",
  },

    {
    id: 5,
    title: "CI/CD Pipeline with Jenkins & Docker",
    description:
      "Designed and implemented an end-to-end CI/CD pipeline that automates source code integration, Docker image creation, image publishing to Docker Hub, and application deployment using Jenkins.",
    image: "/projects/project5.png",
    tags: ["GitHub", "Jenkins", "Docker", "Node.js", "Ubuntu", "CI/CD"],
    demoUrl: "#",
    githubUrl: "https://github.com/Yogesh285/cicd-project.git",
  },

   {
    id: 6,
    title: "End-to-End CI/CD project",
    description:
      "Built an end-to-end CI/CD pipeline to automate the build, code quality analysis, containerization, and deployment of a Java application using Jenkins, SonarQube, Maven, Docker, Docker Hub, and AWS EC2, enabling faster and reliable software delivery.",
    image: "/projects/project-6.png",
    tags: ["Git-Hub", "Jenkins", "SonarQube", "Maven", "Docker", "AWS EC2", "CI/CD"],
    demoUrl: "#",
    githubUrl: "https://github.com/Yogesh285/end-to-end-ci-cd-pipeline",
  },


    {
    id: 7,
    title: "Cloud-Native 3-Tier Application Deployment on Amazon EKS",
    description:
      "Designed and deployed a cloud-native 3-tier application on Amazon EKS using Docker and Kubernetes with .NET, Python, and MongoDB. Stored images in Amazon ECR, configured AWS ALB Ingress for external access, and integrated Prometheus & Grafana using Helm for real-time monitoring.",
    image: "/projects/project-7.png",
    tags: ["AWS EKS", "Docker", "Kubernetes", "Prometheus", "Grafana", "AWS ALB Ingress"],
    demoUrl: "#",
    githubUrl: "https://github.com/Yogesh285/3-tier-Application-AWS-EKS-",
  },


    {
    id: 8,
    title: "end-to-end DevSecOps project",
    description:
      "Built a secure DevSecOps CI/CD pipeline on AWS EC2 integrating Jenkins, SonarQube, Trivy, Docker, and Docker Hub to automate build, code quality analysis, security scanning, containerization, and deployment, following CI/CD and DevSecOps best practices.",
    image: "/projects/project-8.png",
    tags: ["AWS EC2", "Jenkins", "SonarQube", "Trivy", "Docker", "Docker Hub", "CI/CD", "DevSecOps"],
    demoUrl: "#",
    githubUrl: "https://github.com/Yogesh285/DevSecOps-project",
  },


  {
    id: 9,
    title: "Cloud-Native DevSecOps CI/CD Platform on Amazon EKS",
    description:
      "Deployed a three-tier application on Amazon EKS using Terraform, Docker, Kubernetes, and ECR. Implemented Jenkins CI, Argo CD GitOps CD, SonarQube, and Trivy for automated build, security scanning, and deployment, with AWS Load Balancer Controller for application access.",
    image: "/projects/project-9.png",
    tags: ["AWS", "Jenkins", "SonarQube", "Trivy", "Docker", "EKS", "ECR", "DevSecOps", "Terraform"],
    demoUrl: "#",
    githubUrl: "#",
  },

   {
    id: 10,
    title: "AIOps Log Monitoring & Anomaly Detection",
    description:
      "Built a Python-based AIOps solution that analyzes system logs, detects anomalies using Isolation Forest, and visualizes results through a Flask web dashboard. Includes severity analysis, log-level visualization, and downloadable CSV anomaly reports.",
    image: "/projects/project-10.png",
    tags: ["python", "Flask", "AIOps", "AWS EC2", "Log Analysis", "Anomaly Detection"],
    demoUrl: "#",
    githubUrl: "https://github.com/Yogesh285/aiops-log-monitoring-anomaly-detection.git",
  },


  
  // {
  //   id: 3,
  //   title: "E-commerce Platform",
  //   description:
  //     "Full-featured e-commerce platform with user authentication and payment processing.",
  //   image: "/projects/project3.png",
  //   tags: ["React", "Node.js", "Stripe"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },

];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Selected Cloud and DevOps projects showcasing automation,
          CI/CD pipelines, and cloud-based application deployment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    // eslint-disable-next-line react/jsx-key
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Yogesh285"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
