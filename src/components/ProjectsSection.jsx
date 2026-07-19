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
    githubUrl: "#",
  },

  {
    id: 4,
    title: "Image Resizing Project Using AWS Lambda",
    description:
      "Built a serverless image processing pipeline on AWS where uploaded images are automatically resized using AWS Lambda, stored in an S3 bucket, and email notifications are sent via SNS. Infrastructure was provisioned using Terraform.",
    image: "/projects/project44.png",
    tags: ["AWS", "AWS Lambda", "AWS S3", "SNS", "Terraform"],
    demoUrl: "#",
    githubUrl: "https://github.com/Yogesh285/Image-Resizing-Project-Using-AWS-Lambda",
  },

  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
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
