import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Brain, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Skills",
      icon: Brain,
      skills: ["Machine Learning", "Data Visualization", "Natural Language Processing"],
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "Java", "C", "C++", "JavaScript"],
    },
    {
      title: "Libraries & Frameworks",
      icon: Wrench,
      skills: ["NLTK", "Pandas", "NumPy", "Scikit-learn", "Seaborn", "Matplotlib", "Streamlit"],
    },
    {
      title: "Tools & Databases",
      icon: Database,
      skills: ["Git", "VS Code", "GitHub", "MongoDB", "MySQL", "Linux", "Windows"],
    },
  ];

  return (
    <section id="skills" className="py-20 gradient-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My technical expertise and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto p-3 gradient-primary rounded-lg w-fit mb-3">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;