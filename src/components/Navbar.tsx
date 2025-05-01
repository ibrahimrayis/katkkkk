
import { useState } from 'react';
import { ShoppingCart, User, Baby, Shirt } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
];

const Navbar = () => {
  const [currentLang, setCurrentLang] = useState('en');

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Shirt className="h-8 w-8 text-kidstore-blue" />
            <span className="text-2xl font-bold text-kidstore-pink animate-wiggle">Kiddie Carton Corner</span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-kidstore-blue font-medium transition-colors duration-300">Home</a>
            <a href="#" className="text-gray-700 hover:text-kidstore-blue font-medium transition-colors duration-300">Shop</a>
            <a href="#" className="text-gray-700 hover:text-kidstore-blue font-medium transition-colors duration-300">New Arrivals</a>
            <a href="#" className="text-gray-700 hover:text-kidstore-blue font-medium transition-colors duration-300">About</a>
            <a href="#" className="text-gray-700 hover:text-kidstore-blue font-medium transition-colors duration-300">Contact</a>
          </div>

          {/* Icons & Language */}
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="rounded-full p-2">
                  <span className="font-semibold">{currentLang.toUpperCase()}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white rounded-xl shadow-lg p-2">
                {languages.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code} 
                    onClick={() => setCurrentLang(lang.code)}
                    className="hover:bg-kidstore-green/20 rounded-lg cursor-pointer"
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5 text-gray-700" />
            </Button>
            
            <Button variant="ghost" size="icon" className="rounded-full relative">
              <ShoppingCart className="h-5 w-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-kidstore-pink text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
