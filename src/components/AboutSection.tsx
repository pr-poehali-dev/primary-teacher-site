
import { Award, BookOpen, Calendar, GraduationCap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-lavender/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Обо мне</h2>
          <div className="w-20 h-1 bg-primary rounded mb-6"></div>
          <p className="max-w-2xl text-muted-foreground">
            Учитель начальных классов с многолетним опытом и любовью к своему делу
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              Меня зовут Анна Игоревна Белова, и я уже более 15 лет работаю учителем начальных классов. 
              Моя миссия — не просто дать детям знания, но и помочь им полюбить процесс обучения, 
              раскрыть их потенциал и подготовить к успешному будущему.
            </p>
            
            <p>
              Я постоянно совершенствую свои методики преподавания, внедряю интерактивные технологии 
              и индивидуальный подход к каждому ребенку. Верю, что начальная школа — это фундамент всего 
              образования, поэтому стремлюсь сделать его прочным и надежным.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card className="bg-white/50 border-none">
                <CardContent className="flex items-center p-4 space-x-3">
                  <div className="w-10 h-10 rounded-full bg-mint flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Опыт</h3>
                    <p className="text-sm text-muted-foreground">15+ лет</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/50 border-none">
                <CardContent className="flex items-center p-4 space-x-3">
                  <div className="w-10 h-10 rounded-full bg-soft-yellow flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Выпусков</h3>
                    <p className="text-sm text-muted-foreground">4 класса</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/50 border-none">
                <CardContent className="flex items-center p-4 space-x-3">
                  <div className="w-10 h-10 rounded-full bg-soft-pink flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Образование</h3>
                    <p className="text-sm text-muted-foreground">Магистр педагогики</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/50 border-none">
                <CardContent className="flex items-center p-4 space-x-3">
                  <div className="w-10 h-10 rounded-full bg-soft-blue flex items-center justify-center">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Категория</h3>
                    <p className="text-sm text-muted-foreground">Высшая</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-[320px] h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80" 
                alt="Анна Белова" 
                className="w-full h-full object-cover"
              />
              
              {/* Decorative overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary/30 to-transparent"></div>
              
              {/* Decorations */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-full"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-mint rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
