
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-40 pencil-pattern"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
              Добро пожаловать в мир <span className="text-primary">начального образования</span>!
            </h1>
            <p className="text-lg text-muted-foreground">
              Здравствуйте! Я Соколова Полина Александровна, учитель начальных классов. 
              На этом сайте вы найдете полезные материалы для учеников и родителей, 
              а также информацию о моей педагогической деятельности.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="rounded-full">
                Методические материалы
              </Button>
              <Button variant="outline" size="lg" className="rounded-full">
                Для родителей
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px]">
              {/* Decorative elements */}
              <div className="absolute top-[15%] right-[5%] w-12 h-12 bg-soft-yellow rounded-full animate-float z-10" 
                   style={{animationDelay: "0.2s"}}></div>
              <div className="absolute bottom-[10%] left-[15%] w-16 h-16 bg-soft-pink rounded-full animate-float"
                   style={{animationDelay: "0.5s"}}></div>
              <div className="absolute top-[60%] right-[10%] w-10 h-10 bg-soft-orange rounded-full animate-float"
                   style={{animationDelay: "0.7s"}}></div>
              
              {/* Main blob */}
              <div className="absolute inset-0 m-auto w-[90%] h-[90%] bg-mint blob-shape animate-float shadow-lg"
                   style={{animationDelay: "0s"}}>
                <img 
                  src="https://images.unsplash.com/photo-1510832198440-a52376950479?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Учитель с детьми"
                  className="w-full h-full object-cover rounded-[inherit]"
                />
              </div>
              
              {/* School elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/90 rounded-2xl shadow-md flex items-center justify-center p-4 rotate-6 animate-float"
                   style={{animationDelay: "0.3s"}}>
                <span className="text-5xl">📚</span>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/90 rounded-2xl shadow-md flex items-center justify-center p-4 -rotate-6 animate-float"
                   style={{animationDelay: "0.6s"}}>
                <span className="text-4xl">✏️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
