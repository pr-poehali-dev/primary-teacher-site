
import { Clock, Calendar, BookOpen, MessageSquare } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Card, CardContent } from "./ui/card";

const ParentsSection = () => {
  return (
    <section id="parents" className="py-16 bg-mint/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Для родителей
          </h2>
          <div className="w-20 h-1 bg-primary rounded mb-6"></div>
          <p className="max-w-2xl text-muted-foreground">
            Информация о расписании, домашних заданиях и советы по поддержке
            детей в обучении
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Schedule and info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">
              Расписание и консультации
            </h3>

            <Card className="bg-white border-none shadow-md">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-soft-pink flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Расписание занятий</h4>
                    <p className="text-muted-foreground mb-2">
                      2 «Б» класс, первая смена
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="font-medium">Понедельник - Пятница</p>
                        <p>8:30 - 13:10</p>
                      </div>
                      <div>
                        <p className="font-medium">Внеурочные занятия</p>
                        <p>Среда, Пятница 14:00 - 15:30</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-soft-yellow flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">
                      Родительские собрания
                    </h4>
                    <p className="text-muted-foreground mb-2">
                      Каждая последняя пятница месяца
                    </p>
                    <p className="text-sm">
                      Ближайшее собрание: 25 мая 2025 г. в 18:30, кабинет 105
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-soft-blue flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">
                      Индивидуальные консультации
                    </h4>
                    <p className="text-muted-foreground mb-2">
                      По предварительной записи
                    </p>
                    <p className="text-sm">
                      Понедельник: 14:30 - 15:30, Четверг: 14:30 - 15:30
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-mint flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Учебники и пособия</h4>
                    <p className="text-muted-foreground mb-2">
                      Список используемой литературы
                    </p>
                    <p className="text-sm">
                      УМК «Перспектива», дополнительные материалы в разделе
                      «Методические материалы»
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Accordion */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Часто задаваемые вопросы
            </h3>

            <Accordion
              type="single"
              collapsible
              className="bg-white shadow-md rounded-lg"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-soft-pink/10">
                  Как помочь ребенку адаптироваться к школе?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-1">
                  Создайте четкий распорядок дня, включающий достаточный сон и время для выполнения домашних заданий. Обсуждайте школьные события, помогайте организовать рабочее место. Важно хвалить за усилия, а не только за результат. Если заметили тревожные признаки, обязательно обсудите их со мной.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-soft-pink/10">
                  Как организовать выполнение домашних заданий?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-1">
                  Выделите спокойное место без отвлекающих факторов. Установите регулярное время для занятий, лучше через 1-1.5 часа после школы. Разбивайте задания на небольшие части с короткими перерывами. Поощряйте самостоятельность, но будьте готовы помочь. Проверяйте выполнение, но не делайте задания за ребенка.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-soft-pink/10">
                  Что делать, если ребенок не хочет читать?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-1">
                  Начните с коротких интересных текстов по темам, которые нравятся ребенку. Читайте вместе, по очереди. Используйте различные форматы: бумажные книги, аудиокниги, интерактивные приложения. Создайте уютную атмосферу для чтения. Обсуждайте прочитанное, задавайте вопросы. Будьте примером — пусть ребенок видит, что вы тоже читаете.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-soft-pink/10">
                  Сколько времени ребенок должен тратить на домашние задания?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-1">
                  Согласно санитарным нормам, во 2 классе оптимальное время выполнения домашних заданий — до 1,5 часов. Важно делать перерывы каждые 20-25 минут для поддержания концентрации. Если ребенок регулярно тратит значительно больше времени, обсудите это со мной — возможно, нужна дополнительная помощь или корректировка подхода.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-soft-pink/10">
                  Как мотивировать ребенка к учебе?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-1">
                  Показывайте практическое применение знаний в повседневной жизни. Отмечайте даже небольшие успехи. Поддерживайте интерес через дополнительные материалы: видео, игры, экскурсии по теме. Избегайте сравнения с другими детьми. Учитывайте индивидуальные особенности вашего ребенка и создавайте позитивную атмосферу вокруг процесса обучения.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentsSection;
