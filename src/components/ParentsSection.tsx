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
                  <div className="w-10 h-10 rounded-full bg-lavender flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Расписание занятий</h4>
                    <p className="text-muted-foreground mb-2">
                      3 «А» класс, первая смена
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="font-medium">Понедельник - Пятница</p>
                        <p>8:30 - 13:10</p>
                      </div>
                      <div>
                        <p className="font-medium">Внеурочные занятия</p>
                        <p>Вторник, Четверг 14:00 - 15:30</p>
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
                      Каждая третья среда месяца
                    </p>
                    <p className="text-sm">
                      Ближайшее собрание: 15 мая 2025 г. в 18:00, кабинет 212
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-soft-pink flex items-center justify-center flex-shrink-0">
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
                      Вторник: 16:00 - 17:30, Четверг: 16:00 - 17:30
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-soft-blue flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Учебники и пособия</h4>
                    <p className="text-muted-foreground mb-2">
                      Список используемой литературы
                    </p>
                    <p className="text-sm">
                      УМК «Школа России», дополнительные материалы в разделе
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
                <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-lavender/10">
                  Как подготовить ребенка к первому классу?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-1">
                  Важно развивать усидчивость, внимание и мелкую моторику.
                  Рекомендую регулярно читать с ребенком, играть в настольные
                  игры, рисовать. Также полезно приучать к режиму дня, близкому
                  к школьному. Не фокусируйтесь только на знаниях – социальные
                  навыки и эмоциональная готовность не менее важны.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-lavender/10">
                  Что делать, если ребенок не хочет делать домашнее задание?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-1">
                  Создайте комфортную атмосферу для выполнения заданий:
                  организуйте рабочее место, установите регулярное время для
                  занятий. Разбивайте задания на небольшие части с перерывами.
                  Хвалите за усилия и прогресс, а не только за результат. Если
                  проблема сохраняется, обсудите ситуацию с учителем – возможно,
                  нужен индивидуальный подход.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-lavender/10">
                  Как помочь ребенку, если он отстает по некоторым предметам?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-1">
                  Первым шагом обсудите ситуацию с учителем, чтобы понять
                  конкретные трудности. Выделите дополнительное время для
                  занятий проблемными предметами. Используйте различные подходы
                  к обучению – визуальные материалы, игры, практические задания.
                  При необходимости рассмотрите возможность дополнительных
                  занятий или консультаций со специалистами.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-lavender/10">
                  Сколько времени ребенок должен тратить на домашние задания?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-1">
                  Согласно санитарным нормам, рекомендуемое время выполнения
                  домашних заданий: 1 класс — без домашних заданий, 2-3 классы —
                  до 1,5 часов, 4 класс — до 2 часов. Важно учитывать
                  индивидуальные особенности ребенка и делать небольшие перерывы
                  каждые 20-30 минут для поддержания концентрации внимания.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-lavender/10">
                  Какие навыки самые важные для успешной учебы в начальной
                  школе?
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-1">
                  Ключевые навыки включают: умение слушать и следовать
                  инструкциям, усидчивость, самоорганизацию, развитую мелкую
                  моторику, базовые навыки коммуникации и работы в коллективе.
                  Также важна любознательность и позитивное отношение к
                  обучению. Навыки чтения и письма развиваются в процессе
                  обучения, но предварительное знакомство с буквами и цифрами
                  может быть полезным.
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
