import { Card } from "@/components/ui/card";

const Infographic = () => {
  return (
    <div 
      id="infographic-download" 
      className="relative w-full max-w-4xl mx-auto bg-gradient-to-br from-[#F5F1E8] to-[#E8DCC8] p-12 rounded-lg"
      style={{ aspectRatio: '3/4' }}
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-8 left-8 w-32 h-32 border-4 border-[#D4AF37] rounded-full"></div>
        <div className="absolute bottom-8 right-8 w-24 h-24 border-4 border-[#6B2C2C] rounded-full"></div>
        <div className="absolute top-1/2 right-12 w-16 h-16 border-2 border-[#8E7461]" style={{ transform: 'rotate(45deg)' }}></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-8 pb-6 border-b-4 border-[#6B2C2C]">
          <div className="inline-block">
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-3"></div>
            <h1 className="font-cormorant text-6xl font-bold text-[#6B2C2C] mb-2">
              ОСИП МАНДЕЛЬШТАМ
            </h1>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto mt-3"></div>
          </div>
          <p className="font-spectral text-2xl text-[#8E7461] mt-4 font-medium">
            1891 — 1938
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="font-cormorant text-2xl font-bold text-[#6B2C2C] mb-4 pb-2 border-b-2 border-[#D4AF37]">
              ЖИЗНЕННЫЙ ПУТЬ
            </h2>
            <div className="space-y-3 font-spectral text-sm">
              <div className="flex gap-3">
                <span className="text-[#D4AF37] font-bold min-w-[60px]">1891</span>
                <span className="text-[#8E7461]">Рождение в Варшаве</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#D4AF37] font-bold min-w-[60px]">1900-е</span>
                <span className="text-[#8E7461]">Учёба в Петербурге</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#D4AF37] font-bold min-w-[60px]">1907</span>
                <span className="text-[#8E7461]">Сорбонна, Париж</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#D4AF37] font-bold min-w-[60px]">1910</span>
                <span className="text-[#8E7461]">Первая публикация</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#D4AF37] font-bold min-w-[60px]">1913</span>
                <span className="text-[#8E7461]">Сборник «Камень»</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#D4AF37] font-bold min-w-[60px]">1922</span>
                <span className="text-[#8E7461]">Сборник «Tristia»</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#D4AF37] font-bold min-w-[60px]">1930</span>
                <span className="text-[#8E7461]">Поездка в Армению</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#6B2C2C] font-bold min-w-[60px]">1934</span>
                <span className="text-[#6B2C2C]">Первый арест</span>
              </div>
              <div className="flex gap-3">
                <span className="text-[#6B2C2C] font-bold min-w-[60px]">1938</span>
                <span className="text-[#6B2C2C]">Гибель в лагере</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-cormorant text-2xl font-bold text-[#6B2C2C] mb-4 pb-2 border-b-2 border-[#D4AF37]">
              ТВОРЧЕСКИЕ ПЕРИОДЫ
            </h2>
            <div className="space-y-4">
              <Card className="p-4 bg-white/80 border-2 border-[#8E7461]">
                <h3 className="font-cormorant text-lg font-bold text-[#6B2C2C] mb-1">
                  Акмеизм
                </h3>
                <p className="font-spectral text-xs text-[#D4AF37] font-semibold mb-2">
                  1910–1920
                </p>
                <p className="font-spectral text-xs text-[#8E7461] leading-relaxed">
                  Материальность мира, ясность образов
                </p>
              </Card>
              
              <Card className="p-4 bg-white/80 border-2 border-[#8E7461]">
                <h3 className="font-cormorant text-lg font-bold text-[#6B2C2C] mb-1">
                  Зрелая поэзия
                </h3>
                <p className="font-spectral text-xs text-[#D4AF37] font-semibold mb-2">
                  1920-е годы
                </p>
                <p className="font-spectral text-xs text-[#8E7461] leading-relaxed">
                  Философия, трагизм эпохи
                </p>
              </Card>
              
              <Card className="p-4 bg-white/80 border-2 border-[#8E7461]">
                <h3 className="font-cormorant text-lg font-bold text-[#6B2C2C] mb-1">
                  Советский период
                </h3>
                <p className="font-spectral text-xs text-[#D4AF37] font-semibold mb-2">
                  1930–1938
                </p>
                <p className="font-spectral text-xs text-[#8E7461] leading-relaxed">
                  Конфликт с властью
                </p>
              </Card>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t-2 border-[#6B2C2C]">
          <h2 className="font-cormorant text-2xl font-bold text-[#6B2C2C] mb-4 text-center">
            ОСНОВНЫЕ ПРОИЗВЕДЕНИЯ
          </h2>
          <div className="grid grid-cols-2 gap-3 font-spectral text-sm">
            <div className="flex justify-between px-3 py-2 bg-white/60 rounded">
              <span className="text-[#8E7461] font-medium">«Камень»</span>
              <span className="text-[#D4AF37] font-semibold">1913</span>
            </div>
            <div className="flex justify-between px-3 py-2 bg-white/60 rounded">
              <span className="text-[#8E7461] font-medium">«Tristia»</span>
              <span className="text-[#D4AF37] font-semibold">1922</span>
            </div>
            <div className="flex justify-between px-3 py-2 bg-white/60 rounded">
              <span className="text-[#8E7461] font-medium">«Шум времени»</span>
              <span className="text-[#D4AF37] font-semibold">1925</span>
            </div>
            <div className="flex justify-between px-3 py-2 bg-white/60 rounded">
              <span className="text-[#8E7461] font-medium">«Стихотворения»</span>
              <span className="text-[#D4AF37] font-semibold">1928</span>
            </div>
            <div className="flex justify-between px-3 py-2 bg-white/60 rounded">
              <span className="text-[#8E7461] font-medium">«Четвертая проза»</span>
              <span className="text-[#D4AF37] font-semibold">1930</span>
            </div>
            <div className="flex justify-between px-3 py-2 bg-white/60 rounded">
              <span className="text-[#8E7461] font-medium">«Путешествие в Армению»</span>
              <span className="text-[#D4AF37] font-semibold">1933</span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="font-spectral text-xs text-[#8E7461] italic">
            Поэт Серебряного века • Основатель акмеизма
          </p>
        </div>
      </div>
    </div>
  );
};

export default Infographic;
