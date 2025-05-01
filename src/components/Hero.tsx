
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative bg-gradient-to-b from-kidstore-blue/30 to-kidstore-purple/30 py-16 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-kidstore-yellow rounded-full opacity-30" />
      <div className="absolute top-40 -right-10 w-32 h-32 bg-kidstore-orange rounded-full opacity-40" />
      <div className="absolute -bottom-10 left-1/3 w-24 h-24 bg-kidstore-green rounded-full opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
              <span className="text-kidstore-blue block animate-float">{t('hero.title1')}</span>
              <span className="text-kidstore-pink block mt-2 animate-float" style={{ animationDelay: "0.5s" }}>{t('hero.title2')}</span>
              <span className="text-kidstore-purple block mt-2 animate-float" style={{ animationDelay: "1s" }}>{t('hero.title3')}</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-kidstore-pink hover:bg-kidstore-pink/80 text-white kidstore-button px-8 py-6">
                {t('hero.shopNow')}
              </Button>
              <Button variant="outline" className="border-kidstore-blue text-kidstore-blue hover:bg-kidstore-blue/10 kidstore-button px-8 py-6">
                {t('hero.viewCollections')}
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-square rounded-full bg-kidstore-yellow/50 animate-pulse"></div>
              <img 
                src="https://cdn.pixabay.com/photo/2016/12/27/22/31/colorful-1935139_1280.png" 
                alt="Cartoon kids playing" 
                className="absolute inset-0 w-full h-full object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
