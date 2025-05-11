
import { Download, FileText, BookText, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const MaterialsSection = () => {
  const materials = [
    {
      id: 1,
      title: "Презентация «Мир вокруг нас»",
      description: "Интерактивная презентация для 1-2 классов с заданиями на познание окружающего мира",
      category: "презентация",
      subject: "Окружающий мир",
      icon: <BookOpen className="h-5 w-5" />,
      color: "bg-soft-yellow",
    },
    {
      id: 2,
      title: "Карточки по русскому языку",
      description: "Набор заданий для отработки правил правописания и пунктуации",
      category: "карточки",
      subject: "Русский язык",
      icon: <FileText className="h-5 w-5" />,
      color: "bg-mint",
    },
    {
      id: 3,
      title: "Рабочая тетрадь «Весёлый счёт»",
      description: "Авторская рабочая тетрадь для изучения основ арифметики в игровой форме",
      category: "рабочая тетрадь",
      subject: "Математика",
      icon: <BookText className="h-5 w-5" />,
      color: "bg-soft-pink",
    },
  ];

  return (
    <section id="materials" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Методические материалы</h2>
          <div className="w-20 h-1 bg-primary rounded mb-6"></div>
          <p className="max-w-2xl text-muted-foreground">
            Подборка авторских разработок для использования на уроках и при выполнении домашних заданий
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((material) => (
            <Card key={material.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div className={`${material.color} p-2 rounded-lg mb-3`}>
                    {material.icon}
                  </div>
                  <Badge variant="outline" className="text-xs">{material.subject}</Badge>
                </div>
                <CardTitle className="text-xl">{material.title}</CardTitle>
                <CardDescription>{material.description}</CardDescription>
              </CardHeader>
              <CardContent className="pb-0">
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="capitalize">{material.category}</span>
                  <span className="inline-block mx-2">•</span>
                  <span>PDF, 1.5 MB</span>
                </div>
              </CardContent>
              <CardFooter className="pt-4 pb-6">
                <Button className="w-full gap-2">
                  <Download className="h-4 w-4" />
                  Скачать материал
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Button variant="outline" size="lg" className="rounded-full">
            Показать все материалы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
