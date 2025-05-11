
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-soft-pink/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and site name */}
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-soft-pink flex items-center justify-center">
              <span className="text-white font-bold text-lg">ПС</span>
            </div>
            <h1 className="text-lg font-bold text-primary">
              <span className="hidden sm:inline">Учитель </span>
              <span>Соколова П.А.</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#hero" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">Обо мне</a>
            <a href="#materials" className="text-foreground hover:text-primary transition-colors">Материалы</a>
            <a href="#parents" className="text-foreground hover:text-primary transition-colors">Для родителей</a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-soft-pink/20 animate-fade-in">
          <div className="px-4 py-3 space-y-4">
            <a 
              href="#hero" 
              className="block py-2 px-3 rounded-md text-foreground hover:bg-soft-pink/20 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Главная
            </a>
            <a 
              href="#about" 
              className="block py-2 px-3 rounded-md text-foreground hover:bg-soft-pink/20 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Обо мне
            </a>
            <a 
              href="#materials" 
              className="block py-2 px-3 rounded-md text-foreground hover:bg-soft-pink/20 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Материалы
            </a>
            <a 
              href="#parents" 
              className="block py-2 px-3 rounded-md text-foreground hover:bg-soft-pink/20 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Для родителей
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
