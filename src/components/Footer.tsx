
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                <span className="text-primary font-bold text-lg">ПС</span>
              </div>
              <h2 className="text-xl font-bold">Соколова П.А.</h2>
            </div>
            <p className="text-white/80">
              Учитель начальных классов, открывающий детям мир знаний и творчества. 
              Моя цель — воспитать любознательных, уверенных в себе и творческих личностей.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Разделы сайта</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-white/80 hover:text-white transition-colors">Главная</a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">Обо мне</a>
              </li>
              <li>
                <a href="#materials" className="text-white/80 hover:text-white transition-colors">Материалы</a>
              </li>
              <li>
                <a href="#parents" className="text-white/80 hover:text-white transition-colors">Для родителей</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-white/60" />
                <a href="mailto:sokolova.pa@school.ru" className="text-white/80 hover:text-white transition-colors">
                  sokolova.pa@school.ru
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-white/60" />
                <a href="tel:+71234567890" className="text-white/80 hover:text-white transition-colors">
                  +7 (123) 456-78-90
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-white/60 mt-1" />
                <span className="text-white/80">
                  Школа №234, г. Москва, ул. Школьная, д. 17
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Подписаться на новости</h3>
            <p className="text-white/80 mb-4">
              Получайте информацию о новых материалах и мероприятиях класса
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="w-full px-4 py-2 rounded-md text-foreground bg-white/10 border border-white/20 placeholder:text-white/50 focus:outline-none focus:border-white/50"
              />
              <Button className="w-full bg-white text-primary hover:bg-white/90">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} Соколова Полина Александровна. Все права защищены.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
