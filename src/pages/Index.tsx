import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const timelineEvents = [
    { year: 1891, title: "Рождение в Варшаве", icon: "Baby", color: "bg-secondary" },
    { year: 1910, title: "Первая публикация", icon: "Feather", color: "bg-primary" },
    { year: 1913, title: "Сборник «Камень»", icon: "Book", color: "bg-primary" },
    { year: 1922, title: "Сборник «Tristia»", icon: "BookOpen", color: "bg-primary" },
    { year: 1928, title: "«Стихотворения»", icon: "BookMarked", color: "bg-primary" },
    { year: 1933, title: "«Путешествие в Армению»", icon: "Map", color: "bg-secondary" },
    { year: 1934, title: "Первый арест", icon: "AlertCircle", color: "bg-destructive" },
    { year: 1938, title: "Гибель в лагере", icon: "X", color: "bg-destructive" }
  ];

  const works = [
    { title: "Камень", year: 1913, type: "Поэзия" },
    { title: "Tristia", year: 1922, type: "Поэзия" },
    { title: "Шум времени", year: 1925, type: "Мемуары" },
    { title: "Стихотворения", year: 1928, type: "Поэзия" },
    { title: "Четвертая проза", year: 1930, type: "Проза" },
    { title: "Путешествие в Армению", year: 1933, type: "Проза" },
    { title: "Новые стихи", year: "1930-1937", type: "Поэзия" }
  ];

  const geography = [
    { place: "Варшава", period: "1891", description: "Место рождения" },
    { place: "Петербург", period: "1900-е", description: "Лицей Тенишевской гимназии" },
    { place: "Париж", period: "1907-1908", description: "Сорбонна" },
    { place: "Гейдельберг", period: "1909-1910", description: "Университет" },
    { place: "Армения", period: "1930", description: "Творческая поездка" }
  ];

  const periods = [
    { 
      name: "Акмеизм", 
      years: "1910-1920", 
      description: "Материальность мира, ясность образов",
      works: 2 
    },
    { 
      name: "Зрелая поэзия", 
      years: "1920-е", 
      description: "Философские размышления, трагизм эпохи",
      works: 2 
    },
    { 
      name: "Советский период", 
      years: "1930-1938", 
      description: "Конфликт с властью, репрессии",
      works: 3 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <header className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
            <h1 className="font-cormorant text-6xl md:text-7xl font-bold text-primary mb-2">
              Осип Мандельштам
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
          </div>
          <p className="font-spectral text-xl text-muted-foreground italic">
            1891 — 1938
          </p>
          <p className="font-spectral text-lg text-secondary mt-4 max-w-2xl mx-auto">
            Один из величайших русских поэтов XX века, основатель акмеизма
          </p>
        </header>

        <section className="mb-20 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Card className="p-8 border-2 overflow-hidden bg-gradient-to-br from-card to-muted/20">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Image" className="text-primary" size={32} />
              <h2 className="font-cormorant text-4xl font-semibold text-primary">
                Инфографика
              </h2>
            </div>
            <div className="relative w-full rounded-lg overflow-hidden shadow-2xl bg-white">
              <img 
                src="https://cdn.poehali.dev/projects/5efee7ab-a856-4d18-a21b-9d2880e54dde/files/528431fe-275d-45d7-ac58-408a7889089a.jpg"
                alt="Инфографика: Жизнь и творчество Осипа Мандельштама"
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="mt-6 text-center">
              <a 
                href="https://cdn.poehali.dev/projects/5efee7ab-a856-4d18-a21b-9d2880e54dde/files/528431fe-275d-45d7-ac58-408a7889089a.jpg"
                download="mandelstam-infographic-ru.jpg"
                className="inline-flex items-center gap-2 font-spectral text-primary hover:text-accent transition-colors text-lg font-medium"
              >
                <Icon name="Download" size={20} />
                Скачать инфографику
              </a>
            </div>
          </Card>
        </section>

        <section className="mb-20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Clock" className="text-primary" size={32} />
            <h2 className="font-cormorant text-4xl font-semibold text-primary">
              Временная шкала жизни
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
            <div className="space-y-6">
              {timelineEvents.map((event, index) => (
                <div 
                  key={index} 
                  className="flex gap-6 items-start animate-slide-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className={`hidden md:flex w-16 h-16 ${event.color} rounded-full items-center justify-center flex-shrink-0 border-4 border-background shadow-lg relative z-10`}>
                    <Icon name={event.icon as any} className="text-white" size={24} />
                  </div>
                  <Card className="flex-1 p-6 hover:shadow-xl transition-shadow duration-300 border-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <Badge className={`${event.color} text-white mb-2 font-spectral`}>
                          {event.year}
                        </Badge>
                        <h3 className="font-cormorant text-2xl font-semibold text-foreground">
                          {event.title}
                        </h3>
                      </div>
                      <div className={`md:hidden w-12 h-12 ${event.color} rounded-full flex items-center justify-center`}>
                        <Icon name={event.icon as any} className="text-white" size={20} />
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Layers" className="text-primary" size={32} />
            <h2 className="font-cormorant text-4xl font-semibold text-primary">
              Творческие периоды
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {periods.map((period, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 animate-fade-in"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-cormorant text-2xl font-semibold text-primary">
                    {period.name}
                  </h3>
                  <Badge variant="outline" className="font-spectral text-xs">
                    {period.works} произв.
                  </Badge>
                </div>
                <p className="font-spectral text-sm text-accent font-medium mb-3">
                  {period.years}
                </p>
                <p className="font-spectral text-muted-foreground leading-relaxed">
                  {period.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-3 mb-8">
            <Icon name="MapPin" className="text-primary" size={32} />
            <h2 className="font-cormorant text-4xl font-semibold text-primary">
              География жизни
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {geography.map((item, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all duration-300 border-2 animate-slide-in"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-cormorant text-xl font-semibold text-foreground">
                      {item.place}
                    </h3>
                    <p className="font-spectral text-sm text-accent font-medium">
                      {item.period}
                    </p>
                  </div>
                </div>
                <p className="font-spectral text-muted-foreground">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="flex items-center gap-3 mb-8">
            <Icon name="Library" className="text-primary" size={32} />
            <h2 className="font-cormorant text-4xl font-semibold text-primary">
              Основные произведения
            </h2>
          </div>
          <Card className="p-8 border-2">
            <div className="space-y-4">
              {works.map((work, index) => (
                <div 
                  key={index} 
                  className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b last:border-b-0 hover:bg-muted/30 px-4 rounded transition-colors animate-slide-in"
                  style={{ animationDelay: `${0.9 + index * 0.05}s` }}
                >
                  <div className="flex items-center gap-4 mb-2 md:mb-0">
                    <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                      <Icon name="BookOpen" className="text-primary" size={16} />
                    </div>
                    <h3 className="font-cormorant text-xl font-medium text-foreground">
                      {work.title}
                    </h3>
                  </div>
                  <div className="flex gap-3 ml-12 md:ml-0">
                    <Badge variant="secondary" className="font-spectral">
                      {work.year}
                    </Badge>
                    <Badge variant="outline" className="font-spectral">
                      {work.type}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className="text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <Card className="p-10 bg-gradient-to-br from-primary/5 to-accent/5 border-2">
            <Icon name="Sparkles" className="text-accent mx-auto mb-4" size={48} />
            <h3 className="font-cormorant text-3xl font-semibold text-primary mb-4">
              Наследие
            </h3>
            <p className="font-spectral text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Несмотря на репрессии, творчество Мандельштама сохранилось благодаря усилиям друзей и близких, 
              оставаясь актуальным для последующих поколений читателей и литераторов. Его поэзия продолжает 
              вдохновлять и волновать сердца по всему миру.
            </p>
          </Card>
        </section>

        <footer className="mt-16 text-center">
          <div className="w-32 h-1 bg-accent mx-auto mb-4"></div>
          <p className="font-spectral text-sm text-muted-foreground italic">
            В память о великом поэте Серебряного века
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;