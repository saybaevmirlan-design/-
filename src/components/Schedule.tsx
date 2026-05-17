import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Clock, Info, ChevronRight, Filter } from "lucide-react";

interface ClassSession {
  id: string;
  title: string;
  time: string;
  description: string;
  ageGroup: "1.5-3" | "3-5" | "5-7";
  category: "Творчество" | "Спорт" | "Интеллект" | "Языки" | "Режим";
}

const scheduleData: Record<string, ClassSession[]> = {
  "Пн": [
    { id: "1", title: "Встреча гостей", time: "08:30 - 09:00", description: "Мягкое приветствие, свободные игры и настрой на день.", ageGroup: "1.5-3", category: "Режим" },
    { id: "2", title: "Арт-терапия", time: "10:00 - 10:45", description: "Рисование пальчиковыми красками, развитие тактильного восприятия.", ageGroup: "1.5-3", category: "Творчество" },
    { id: "3", title: "English Discovery", time: "11:00 - 11:45", description: "Погружение в языковую среду через песни и игры с носителем.", ageGroup: "3-5", category: "Языки" },
    { id: "4", title: "Занимательная логика", time: "12:00 - 12:45", description: "Основы математического мышления и решение первых задач.", ageGroup: "5-7", category: "Интеллект" },
    { id: "5", title: "Йога для детей", time: "16:00 - 16:45", description: "Укрепление осанки и упражнения на концентрацию внимания.", ageGroup: "3-5", category: "Спорт" },
  ],
  "Вт": [
    { id: "6", title: "Музыкальный мир", time: "10:00 - 10:45", description: "Знакомство с классическими инструментами и ритмика.", ageGroup: "3-5", category: "Творчество" },
    { id: "7", title: "STEM-лаборатория", time: "11:30 - 12:30", description: "Первые научные эксперименты и конструирование.", ageGroup: "5-7", category: "Интеллект" },
    { id: "8", title: "Сенсорное развитие", time: "10:15 - 11:00", description: "Игры с природными материалами для развития мелкой моторики.", ageGroup: "1.5-3", category: "Творчество" },
  ],
  "Ср": [
    { id: "9", title: "Шахматный клуб", time: "15:00 - 16:00", description: "Развитие стратегического мышления и усидчивости.", ageGroup: "5-7", category: "Интеллект" },
    { id: "10", title: "Плавание", time: "11:00 - 12:00", description: "Занятия в бассейне с озонированной водой под присмотром тренера.", ageGroup: "3-5", category: "Спорт" },
  ],
  "Чт": [
    { id: "11", title: "Юный кулинар", time: "15:30 - 16:30", description: "Приготовление полезных десертов вместе с шеф-поваром.", ageGroup: "3-5", category: "Творчество" },
  ],
  "Пт": [
    { id: "12", title: "Театральная студия", time: "16:30 - 17:30", description: "Постановка спектаклей, работа над дикцией и уверенностью.", ageGroup: "5-7", category: "Творчество" },
  ],
};

const days = ["Пн", "Вт", "Ср", "Чт", "Пт"];
const ageGroups = [
  { id: "all", label: "Все группы" },
  { id: "1.5-3", label: "1.5 - 3 года" },
  { id: "3-5", label: "3 - 5 лет" },
  { id: "5-7", label: "5 - 7 лет" },
];

export const InteractiveSchedule = () => {
  const [activeDay, setActiveDay] = useState("Пн");
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredSessions = scheduleData[activeDay]?.filter(
    (session) => activeFilter === "all" || session.ageGroup === activeFilter
  ) || [];

  return (
    <section id="schedule" className="py-24 px-6 md:px-12 bg-white selection:bg-brand-sage/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16">
          <div className="max-w-2xl flex flex-col gap-4">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">Распорядок дня</span>
            <h2 className="text-5xl text-brand-dark">Интерактивное <span className="italic font-light text-brand-sage">расписание</span></h2>
            <p className="text-brand-dark/50">Выберите возрастную группу и день недели, чтобы увидеть программу занятий в нашей академии.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 p-1 bg-brand-cream rounded-2xl border border-brand-sage/10">
            {ageGroups.map((group) => (
              <button
                key={group.id}
                onClick={() => setActiveFilter(group.id)}
                className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  activeFilter === group.id 
                    ? "bg-brand-sage text-white shadow-lg" 
                    : "text-brand-dark/40 hover:text-brand-dark"
                }`}
              >
                {group.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[120px_1fr] gap-12">
          {/* Day Selector */}
          <div className="flex lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`flex-shrink-0 w-20 h-20 lg:w-full lg:aspect-square rounded-3xl flex flex-col items-center justify-center transition-all border ${
                  activeDay === day 
                    ? "bg-brand-dark text-white border-brand-dark shadow-xl" 
                    : "bg-white text-brand-dark border-brand-sage/10 hover:border-brand-gold"
                }`}
              >
                <span className="text-sm font-bold opacity-50 mb-1 uppercase tracking-tighter">День</span>
                <span className="text-2xl font-serif">{day}</span>
              </button>
            ))}
          </div>

          {/* Classes Grid */}
          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeDay}-${activeFilter}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid gap-6"
              >
                {filteredSessions.length > 0 ? (
                  filteredSessions.map((session) => (
                    <div 
                      key={session.id}
                      className="group bg-brand-cream/50 rounded-[32px] border border-brand-sage/10 overflow-hidden hover:bg-white hover:shadow-xl hover:shadow-brand-sage/5 transition-all duration-500"
                    >
                      <div className="p-8 flex flex-col md:flex-row md:items-center gap-8">
                        <div className="flex flex-col gap-2 min-w-[180px]">
                          <div className="flex items-center gap-2 text-brand-gold">
                            <Clock size={16} />
                            <span className="text-sm font-bold uppercase tracking-widest">{session.time}</span>
                          </div>
                          <span className="text-[10px] font-bold text-brand-sage uppercase tracking-[0.2em]">{session.category}</span>
                        </div>
                        
                        <div className="flex-1 flex flex-col gap-2">
                          <h3 className="text-2xl text-brand-dark flex items-center gap-3">
                            {session.title}
                            <span className="text-[10px] bg-white border border-brand-sage/20 px-3 py-1 rounded-full text-brand-dark/40 font-bold uppercase tracking-widest">
                              Группа {session.ageGroup}
                            </span>
                          </h3>
                          <p className={`text-brand-dark/50 text-sm leading-relaxed transition-all duration-500 overflow-hidden ${expandedId === session.id ? "max-h-40 mt-2" : "max-h-0"}`}>
                            {session.description}
                          </p>
                        </div>

                        <button 
                          onClick={() => setExpandedId(expandedId === session.id ? null : session.id)}
                          className={`p-4 rounded-2xl border border-brand-sage/20 text-brand-sage transition-all transform ${expandedId === session.id ? "bg-brand-sage text-white rotate-90" : "hover:border-brand-gold group-hover:bg-brand-gold group-hover:border-brand-gold group-hover:text-white"}`}
                        >
                          <ChevronRight size={20} />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="h-[400px] flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-brand-sage/20 rounded-[40px] bg-brand-cream/20">
                    <div className="w-20 h-20 bg-brand-cream rounded-full flex items-center justify-center text-brand-sage mb-6">
                      <Filter size={32} />
                    </div>
                    <h3 className="text-2xl text-brand-dark mb-2">Занятий не найдено</h3>
                    <p className="text-brand-dark/40 max-w-sm">На этот день или выбранную группу пока нет запланированных занятий в расписании.</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-20 p-12 bg-brand-dark rounded-[50px] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h3 className="text-3xl font-serif italic text-brand-gold">Хотите узнать больше?</h3>
            <p className="text-white/50">Скачайте полную версию учебного плана на весь академический год.</p>
          </div>
          <button className="bg-brand-gold text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-brand-dark transition-all shadow-xl shadow-brand-gold/20">
            Скачать учебный план (PDF)
          </button>
        </div>
      </div>
    </section>
  );
};
