/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, 
  Sparkles, 
  Heart, 
  Globe, 
  Palette, 
  Music, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook,
  Menu,
  X,
  ArrowRight
} from "lucide-react";
import React, { useState, useRef } from "react";

import { InteractiveSchedule } from "./components/Schedule";
import { ChatBot } from "./components/ChatBot";

const WhatsAppButton = () => {
  const phoneNumber = "996551446688";
  const message = encodeURIComponent("Здравствуйте! Хочу узнать больше об Elite Kids Academy.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 left-6 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center z-[60] cursor-pointer"
    >
      <svg 
        viewBox="0 0 24 24" 
        width="32" 
        height="32" 
        fill="currentColor"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </motion.a>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-brand-cream/80 backdrop-blur-sm border-b border-brand-sage/10">
      <div className="flex items-center gap-2">
        <span className="font-serif text-2xl font-bold tracking-tighter text-brand-dark">ELITE<span className="text-brand-gold">KIDS</span></span>
      </div>
      
      <div className="hidden md:flex gap-8 items-center text-sm font-medium uppercase tracking-widest">
        <a href="#about" className="hover:text-brand-gold transition-colors">О нас</a>
        <a href="#programs" className="hover:text-brand-gold transition-colors">Программы</a>
        <a href="#schedule" className="hover:text-brand-gold transition-colors">Расписание</a>
        <a href="#gallery" className="hover:text-brand-gold transition-colors">Галерея</a>
        <a href="#amenities" className="hover:text-brand-gold transition-colors">Среда</a>
        <a href="#contact" className="hover:text-brand-gold transition-colors">Контакты</a>
        <button className="bg-brand-sage text-white px-6 py-2 rounded-full hover:bg-brand-dark transition-all duration-300 shadow-lg shadow-brand-sage/20">
          Записаться
        </button>
      </div>

      <button className="md:hidden text-brand-dark" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-cream border-b border-brand-sage/20 p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#about" onClick={() => setIsOpen(false)} className="text-lg font-serif">О нас</a>
            <a href="#programs" onClick={() => setIsOpen(false)} className="text-lg font-serif">Программы</a>
            <a href="#schedule" onClick={() => setIsOpen(false)} className="text-lg font-serif">Расписание</a>
            <a href="#gallery" onClick={() => setIsOpen(false)} className="text-lg font-serif">Галерея</a>
            <a href="#amenities" onClick={() => setIsOpen(false)} className="text-lg font-serif">Среда</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-lg font-serif">Контакты</a>
            <button className="bg-brand-sage text-white px-6 py-3 rounded-xl">Записаться</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Kindergarten Interior" 
          className="w-full h-full object-cover brightness-75"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-gold uppercase tracking-[0.3em] font-semibold text-sm mb-6 block">Академия Маленьких Исследователей</span>
          <h1 className="text-6xl md:text-8xl text-white font-serif mb-8 leading-[0.9] tracking-tight">
            Будущее начинается <br />
            <span className="italic font-light">в правильной среде</span>
          </h1>
          <p className="text-white/80 max-w-xl mx-auto text-lg mb-10 font-light leading-relaxed">
            Мы объединили классические традиции и современные методики развития, чтобы создать идеальное пространство для роста вашего ребенка.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-brand-dark px-10 py-4 rounded-full font-medium hover:bg-brand-gold hover:text-white transition-all transform hover:scale-105 shadow-xl">
              Познакомиться
            </button>
            <button className="border border-white/30 text-white backdrop-blur-md px-10 py-4 rounded-full font-medium hover:bg-white/10 transition-all">
              Наши программы
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
};

const StatItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-1">
    <span className="text-4xl font-serif text-brand-dark">{value}</span>
    <span className="text-[10px] uppercase tracking-widest text-brand-sage font-bold">{label}</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-row-2 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="aspect-[4/5] rounded-[100px] overflow-hidden shadow-2xl relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1000" 
              alt="Child Learning" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-cream rounded-full -z-10 animate-pulse" />
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="absolute -top-10 -left-10 bg-brand-sage text-white p-8 rounded-full z-20 shadow-xl"
          >
            <Sparkles size={40} />
          </motion.div>
        </div>

        <div className="order-1 lg:order-2 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">Наша философия</span>
            <h2 className="text-5xl md:text-6xl text-brand-dark leading-tight">Интеллектуальное <br />воспитание в духе <br /><span className="italic font-light text-brand-sage">гармонии</span></h2>
          </div>
          <p className="text-brand-dark/70 text-lg leading-relaxed">
            Elite Kids Academy — это не просто детский сад. Это закрытая экосистема, где ребенку прививают любовь к знаниям через игру, творчество и социальное взаимодействие. Наши педагоги — это наставники мирового уровня.
          </p>
          
          <div className="grid grid-cols-2 gap-8 my-4">
            <StatItem value="1:4" label="Воспитателей к детям" />
            <StatItem value="100%" label="Эко-материалы" />
            <StatItem value="5+" label="Программ развития" />
            <StatItem value="24/7" label="Безопасность" />
          </div>

          <button className="flex items-center gap-4 text-brand-dark font-semibold group w-fit">
            <span className="border-b border-brand-dark group-hover:text-brand-gold group-hover:border-brand-gold transition-all uppercase tracking-wider text-sm">Узнать больше о нас</span>
            <div className="p-3 rounded-full border border-brand-dark/20 group-hover:bg-brand-sage group-hover:border-brand-sage group-hover:text-white transition-all">
              <ArrowRight size={20} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

const ProgramCard = ({ title, age, desc, icon: Icon }: { title: string; age: string; desc: string; icon: any }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-brand-cream p-10 rounded-[40px] border border-brand-sage/10 hover:shadow-2xl hover:shadow-brand-sage/10 transition-all duration-500 group"
  >
    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-gold group-hover:text-white transition-colors">
      <Icon size={32} />
    </div>
    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold bg-white px-4 py-1 rounded-full mb-4 inline-block">{age}</span>
    <h3 className="text-3xl mb-4 text-brand-dark">{title}</h3>
    <p className="text-brand-dark/60 font-light leading-relaxed mb-6">{desc}</p>
    <button className="text-brand-dark font-medium underline underline-offset-8 decoration-brand-sage/30 hover:decoration-brand-gold transition-all text-sm uppercase tracking-wider">Подробнее</button>
  </motion.div>
);

const Programs = () => {
  return (
    <section id="programs" className="py-24 px-6 md:px-12 bg-brand-cream/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 max-w-2xl mx-auto flex flex-col gap-4">
          <span className="text-brand-sage font-bold uppercase tracking-widest text-xs">Образование</span>
          <h2 className="text-5xl text-brand-dark">Программы развития</h2>
          <p className="text-brand-dark/50">Каждая программа адаптирована под возрастные особенности и интересы ребенка, обеспечивая плавное погружение в мир знаний.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ProgramCard 
            icon={Heart}
            age="1.5 - 3 года"
            title="Первые шаги"
            desc="Мягкое погружение в социальную среду, развитие моторики и речевых навыков через сенсорные игры."
          />
          <ProgramCard 
            icon={Globe}
            age="3 - 5 лет"
            title="Юные Лидеры"
            desc="Упор на развитие эмоционального интеллекта, английский язык с носителями и первые творческие проекты."
          />
          <ProgramCard 
            icon={Sparkles}
            age="5 - 7 лет"
            title="School Ready"
            desc="Интенсивная подготовка к школе высокого уровня: логика, STEM, шахматы и основы финансовой грамотности."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ title, text, icon: Icon }: { title: string; text: string; icon: any }) => (
  <div className="flex gap-6 items-start">
    <div className="mt-1 bg-brand-cream p-4 rounded-xl text-brand-gold">
      <Icon size={24} />
    </div>
    <div className="flex flex-col gap-2">
      <h4 className="text-xl font-medium text-brand-dark">{title}</h4>
      <p className="text-brand-dark/50 text-sm leading-relaxed">{text}</p>
    </div>
  </div>
);

const Amenities = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section id="amenities" className="py-24 overflow-hidden bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-xl flex flex-col gap-4">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">Инфраструктура</span>
            <h2 className="text-5xl md:text-6xl text-white">Премиальная <br /><span className="italic font-light text-brand-gold/60">среда обитания</span></h2>
            <p className="text-white/50 text-lg">Мы верим, что окружение формирует сознание. Каждая деталь нашего пространства спроектирована архитекторами с учетом детской психологии.</p>
          </div>
          <div className="hidden md:flex gap-4">
             <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white hover:text-brand-dark transition-all">←</div>
             <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white hover:text-brand-dark transition-all">→</div>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="h-[200vh] relative">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-12 px-12">
            {[
              { img: "https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?auto=format&fit=crop&q=80&w=1200", title: "Соляная пещера", tag: "Здоровье" },
              { img: "https://images.unsplash.com/photo-1510531704581-5b2870972060?auto=format&fit=crop&q=80&w=1200", title: "Арт-студия", tag: "Творчество" },
              { img: "https://images.unsplash.com/photo-1541444191068-9993bdc7f21e?auto=format&fit=crop&q=80&w=1200", title: "Бассейн с озоном", tag: "Спорт" },
              { img: "https://images.unsplash.com/photo-1533221216134-c5a6cb607295?auto=format&fit=crop&q=80&w=1200", title: "Эко-кухня", tag: "Питание" },
              { img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200", title: "Театральный зал", tag: "Развитие" },
            ].map((item, i) => (
              <div key={i} className="flex-shrink-0 w-[450px]">
                <div className="aspect-[4/3] rounded-[40px] overflow-hidden mb-6 relative group">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <div className="absolute top-6 left-6">
                    <span className="bg-brand-gold text-white text-[10px] px-4 py-1.5 rounded-full uppercase tracking-widest font-bold">{item.tag}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-medium">{item.title}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <FeatureItem 
          icon={Palette} 
          title="Творчество" 
          text="Ежедневные занятия живописью, лепкой и дизайном в оборудованной студии." 
        />
        <FeatureItem 
          icon={Music} 
          title="Музыка" 
          text="Индивидуальные уроки фортепиано, вокала и классическое музыкальное воспитание." 
        />
        <FeatureItem 
          icon={ShieldCheck} 
          title="Безопасность" 
          text="Закрытая охраняемая территория, видеонаблюдение и контроль доступа." 
        />
        <FeatureItem 
          icon={Heart} 
          title="Питание" 
          text="5-разовое авторское меню от шеф-повара с учетом аллергий и предпочтений." 
        />
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">Контакты</span>
            <h2 className="text-5xl md:text-6xl text-brand-dark">Запишитесь на <br /><span className="italic font-light text-brand-gold">персональную экскурсию</span></h2>
            <p className="text-brand-dark/50 text-lg">Почувствуйте атмосферу лично. Мы проведем для вас презентацию академии и ответим на все вопросы.</p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex gap-6 items-center">
              <div className="w-14 h-14 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-gold">
                <MapPin size={28} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-brand-sage font-bold">Наш адрес</span>
                <span className="text-xl font-serif">г. Бишкек, ул. Карла Маркса, 64</span>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="w-14 h-14 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-gold">
                <Phone size={28} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-brand-sage font-bold">Телефон</span>
                <span className="text-xl font-serif">+996 551 44 66 88</span>
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="w-14 h-14 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-gold">
                <Mail size={28} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-brand-sage font-bold">Email</span>
                <span className="text-xl font-serif">hello@elitekids.academy</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all cursor-pointer">
              <Instagram size={20} />
            </div>
            <div className="w-12 h-12 rounded-full border border-brand-dark/10 flex items-center justify-center hover:bg-brand-dark hover:text-white transition-all cursor-pointer">
              <Facebook size={20} />
            </div>
          </div>
        </div>

        <div className="bg-brand-cream p-12 rounded-[50px] shadow-sm flex flex-col gap-8">
          <div className="w-full h-[300px] rounded-[30px] overflow-hidden border border-brand-sage/10 shadow-inner group relative">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" 
              alt="Map Location" 
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-dark/20 flex flex-col items-center justify-center gap-4">
              <div className="bg-white p-4 rounded-full shadow-2xl text-brand-gold animate-bounce">
                <MapPin size={32} />
              </div>
              <a 
                href="https://2gis.kg/bishkek/search/%D0%91%D0%B0%D0%B9%D1%82%D0%B8%D0%BA%20%D0%91%D0%B0%D0%B0%D1%82%D1%8B%D1%80%D0%B0%2064" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-brand-dark text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-brand-gold transition-all shadow-xl"
              >
                Открыть маршрут в 2GIS
              </a>
            </div>
          </div>

          <form className="flex flex-col gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-sage ml-4">Как вас зовут?</label>
                <input type="text" placeholder="Имя Фамилия" className="bg-white px-6 py-4 rounded-2xl border border-brand-sage/10 focus:outline-none focus:border-brand-gold transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-sage ml-4">Ваш телефон</label>
                <input type="tel" placeholder="+7 (___) ___-__-__" className="bg-white px-6 py-4 rounded-2xl border border-brand-sage/10 focus:outline-none focus:border-brand-gold transition-all" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-brand-sage ml-4">Возраст ребенка</label>
              <select className="bg-white px-6 py-4 rounded-2xl border border-brand-sage/10 focus:outline-none focus:border-brand-gold transition-all appearance-none cursor-pointer">
                <option>От 1.5 до 3 лет</option>
                <option>От 3 до 5 лет</option>
                <option>От 5 до 7 лет</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-brand-sage ml-4">Ваше сообщение</label>
              <textarea rows={4} placeholder="Расскажите немного о вашем ребенке..." className="bg-white px-6 py-4 rounded-2xl border border-brand-sage/10 focus:outline-none focus:border-brand-gold transition-all resize-none"></textarea>
            </div>
            <button className="bg-brand-dark text-white py-5 rounded-[20px] font-bold uppercase tracking-widest text-sm hover:bg-brand-sage transition-all mt-4">Отправить заявку</button>
            <p className="text-[10px] text-center text-brand-dark/40 px-10 leading-relaxed">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности и даете согласие на обработку персональных данных.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-cream border-t border-brand-sage/10 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col gap-4 text-center md:text-left">
           <span className="font-serif text-3xl font-bold tracking-tighter text-brand-dark">ELITE<span className="text-brand-gold">KIDS</span></span>
           <p className="text-brand-dark/40 text-xs max-w-xs ring-offset-teal-500">
             © 2024 Elite Kids Academy. <br />Все права защищены законом. Конфиденциальность гарантирована.
           </p>
        </div>

        <div className="flex gap-12 text-[10px] uppercase tracking-widest font-bold text-brand-dark/60">
          <a href="#" className="hover:text-brand-gold transition-colors">Об Академии</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Педагогика</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Карьера</a>
          <a href="#" className="hover:text-brand-gold transition-colors">СМИ о нас</a>
        </div>

        <div className="flex flex-col gap-2 items-center md:items-end">
           <span className="text-brand-gold font-serif text-lg italic">The Art of Growing Up</span>
           <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-sage/10 flex items-center justify-center hover:bg-brand-sage hover:text-white transition-all cursor-pointer">
                <Instagram size={14} />
              </div>
              <div className="w-8 h-8 rounded-full bg-brand-sage/10 flex items-center justify-center hover:bg-brand-sage hover:text-white transition-all cursor-pointer">
                <Facebook size={14} />
              </div>
           </div>
        </div>
      </div>
    </footer>
  );
};

const Gallery = () => {
  const [items, setItems] = useState([
    {
      url: "https://images.unsplash.com/photo-1545627725-d912440d9984?auto=format&fit=crop&q=80&w=1000",
      title: "Эко-площадка",
      desc: "Безопасное пространство для активных игр на свежей воздухе.",
      size: "large",
      type: "image"
    },
    {
      url: "https://images.unsplash.com/photo-1491415473234-1f45aa68cd47?auto=format&fit=crop&q=80&w=1000",
      title: "Чтение с наставником",
      desc: "Индивидуальный подход к развитию речи и воображения.",
      size: "small",
      type: "image"
    },
    {
      url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=1000",
      title: "Творческая мастерская",
      desc: "Развиваем таланты в атмосфере поддержки и вдохновения.",
      size: "small",
      type: "image"
    },
    {
      url: "https://images.unsplash.com/photo-1571210862729-78a52d3779a2?auto=format&fit=crop&q=80&w=1000",
      title: "Активные прогулки",
      desc: "Здоровье и радость движения каждый день.",
      size: "small",
      type: "image"
    },
    {
      url: "https://images.unsplash.com/photo-1510531704581-5b2870972060?auto=format&fit=crop&q=80&w=1000",
      title: "Урок искусства",
      desc: "Наши воспитатели помогают раскрыть художественный потенциал.",
      size: "large",
      type: "image"
    },
    {
      url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1000",
      title: "Библиотека академии",
      desc: "Свыше 500 книг на разных языках для юных читателей.",
      size: "small",
      type: "image"
    }
  ]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newItems = Array.from(files).map((file: File) => ({
        url: URL.createObjectURL(file),
        title: file.name.split(".")[0],
        desc: "Недавно загруженный материал",
        size: "small" as const,
        type: file.type.startsWith("video") ? "video" : "image"
      }));
      setItems((prev) => [...newItems, ...prev]);
    }
  };

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16">
          <div className="flex flex-col gap-4">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">Жизнь в Академии</span>
            <h2 className="text-5xl text-brand-dark">Портфолио <span className="italic font-light text-brand-sage">наших будней</span></h2>
          </div>
          
          <div className="flex gap-4">
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              multiple 
              accept="image/*,video/*"
              className="hidden" 
            />
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-3 bg-brand-sage text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-brand-dark transition-all shadow-lg shadow-brand-sage/20 group"
            >
              <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
              Добавить в портфолио
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {items.map((img, i) => (
              <motion.div
                key={img.url + i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={`relative overflow-hidden rounded-[40px] group cursor-pointer ${
                  img.size === "large" ? "md:row-span-2" : ""
                }`}
              >
                {img.type === "video" ? (
                  <video 
                    src={img.url} 
                    className="w-full h-full object-cover aspect-square md:aspect-auto" 
                    controls={false}
                    autoPlay
                    muted
                    loop
                  />
                ) : (
                  <img 
                    src={img.url} 
                    alt={img.title} 
                    className="w-full h-full object-cover aspect-square md:aspect-auto transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <h4 className="text-white text-2xl font-serif mb-2">{img.title}</h4>
                  <p className="text-white/70 text-sm font-light">{img.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <InteractiveSchedule />
      <Gallery />
      <Amenities />
      <Contact />
      <Footer />
      
      {/* Floating Elements */}
      <WhatsAppButton />
      <ChatBot />
    </div>
  );
}
