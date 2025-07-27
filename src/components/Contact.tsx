
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Download } from "lucide-react";

const Contact = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/4f3ea921-f585-4149-9c0f-e5ec33f69eaa.png';
    link.download = 'Jai_Surrya_J_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 gradient-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <Card className="shadow-elegant hover:shadow-glow transition-all duration-300 bg-card/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="text-center space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you have a project in mind, want to discuss data science opportunities, 
                  or just want to chat about machine learning, I'd love to hear from you.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  onClick={() => window.open('mailto:jaiganeshjaisurra@gmail.com', '_blank')}
                  className="gradient-primary hover:shadow-glow transition-all duration-300 text-white border-0"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Send Email
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={downloadResume}
                  className="hover:shadow-elegant transition-all duration-300"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Resume
                </Button>
              </div>

              <div className="flex justify-center space-x-8 pt-8">
                <a
                  href="mailto:jaiganeshjaisurra@gmail.com"
                  className="flex flex-col items-center text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110 transform group"
                >
                  <div className="p-4 rounded-full bg-accent group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Mail className="h-6 w-6" />
                  </div>
                  <span className="text-sm mt-2 font-medium">Email</span>
                </a>
                
                <a
                  href="https://linkedin.com/in/jaisurrya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110 transform group"
                >
                  <div className="p-4 rounded-full bg-accent group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <span className="text-sm mt-2 font-medium">LinkedIn</span>
                </a>
                
                <a
                  href="https://github.com/jaiganeshjaisurra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110 transform group"
                >
                  <div className="p-4 rounded-full bg-accent group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Github className="h-6 w-6" />
                  </div>
                  <span className="text-sm mt-2 font-medium">GitHub</span>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
