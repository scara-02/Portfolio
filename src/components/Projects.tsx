
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Kindle Review Sentiment Analysis",
      description: "A Natural Language Processing (NLP) project that classifies Amazon Kindle product reviews as positive or negative using machine learning. The Logistic Regression classifier achieved an accuracy of 82% on the test dataset.",
      technologies: ["NLTK", "Scikit-learn", "Pandas", "NumPy"],
      features: [
        "Implemented text preprocessing techniques including tokenization, lemmatization, and stopword removal using NLTK",
        "Applied Word2Vec for feature vectorization",
        "Performed model evaluation using precision, recall, and F1-score metrics",
        "Visualized insights with Matplotlib and Seaborn"
      ],
      githubUrl: "https://github.com/jaiganeshjaisurra/kindle-sentiment-analysis"
    },
    {
      title: "AutoML Dashboard",
      description: "A powerful no-code machine learning dashboard built using Streamlit that allows users to upload CSV datasets and perform Classification or Clustering tasks with just a few clicks — no programming required!",
      technologies: ["Pandas", "Scikit-learn", "Streamlit", "Seaborn"],
      features: [
        "Visualizes confusion matrix, ROC curve, classification report, and feature importance",
        "Interactive dashboard with easy-to-use interface",
        "Supports multiple ML algorithms",
        "Real-time model performance metrics"
      ],
      githubUrl: "https://github.com/jaiganeshjaisurra/automl-dashboard"
    },
    {
      title: "Airbnb Price Prediction System",
      description: "This project aims to build a robust machine learning model that predicts Airbnb listing prices based on features like room type, property type, number of bedrooms, amenities, and more. The system achieves 98% accuracy on the test set, showcasing strong predictive performance.",
      technologies: ["Pandas", "Scikit-learn", "Seaborn", "XGBoost"],
      features: [
        "Conducted exploratory data analysis (EDA) to extract insights and visualize feature correlations with price",
        "Handled missing values, encoded categorical variables, applied Box-Cox transformation to normalize skewed features",
        "Implemented various ML algorithms and selected best performing model",
        "Comprehensive feature engineering and data preprocessing pipeline"
      ],
      githubUrl: "https://github.com/jaiganeshjaisurra/airbnb-price-prediction"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
            Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in data science and machine learning
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-[1.02] bg-card/80 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <CardTitle className="text-2xl font-bold text-primary">
                    {project.title}
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="hover:shadow-elegant transition-all duration-300"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
