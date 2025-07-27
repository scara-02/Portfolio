
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold gradient-primary bg-clip-text text-transparent">
              Jai Surrya J
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              Data Science Enthusiast
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a Data Science enthusiast who loves exploring data, building machine learning models, 
            and solving real-world problems using Python. I'm passionate about data preprocessing, 
            feature engineering, predictive modeling, and also enjoy designing and developing scalable 
            software solutions and deploying end-to-end ML systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="gradient-primary hover:shadow-glow transition-all duration-300 text-white border-0"
            >
              View My Work
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="mailto:jaiganeshjaisurra@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/jaisurrya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/jaiganeshjaisurra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
