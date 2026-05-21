import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/01deeb9f-9512-4971-b2b9-1a5a489e2812/files/240f9ea0-2962-4561-8b06-b45cc616aa30.jpg";

const barbers = [
  {
    name: "Василий Бритва",
    role: "Премиум-барбер",
    exp: "8 лет опыта",
    img: HERO_IMG,
  },
  {
    name: "Рафаэль Бывалый",
    role: "Премиум-барбер",
    exp: "6 лет опыта",
    img: HERO_IMG,
  },
  {
    name: "Миша Голд",
    role: "Премиум-барбер",
    exp: "5 лет опыта",
    img: HERO_IMG,
  },
];

const services = [
  { name: "Мужская прическа", price: "1800" },
  { name: "Мужская прическа под машинку", price: "1000" },
  { name: "Моделирование усов и бороды", price: "1200" },
  { name: "Мужская прическа и королевское бритьё", price: "2400" },
  { name: "Детская стрижка", price: "1000" },
  { name: "Коррекция бороды", price: "1200" },
  { name: "СПА уход за лицом", price: "1200" },
  { name: "Работа премиум-барбера", price: "+200" },
];

const features = [
  {
    num: "01",
    title: "НАША ГЛАВНАЯ ЦЕННОСТЬ — ЛЮДИ",
    desc: "Погрузись в крутую атмосферу мужского клуба",
    active: false,
  },
  {
    num: "02",
    title: "НАСТОЯЩАЯ МУЖСКАЯ БЕРЛОГА ДЛЯ СВОИХ БРО",
    desc: "Не только стрижём и бреем, ещё наливаем и общаемся по душам!",
    active: true,
  },
  {
    num: "03",
    title: "ТОПОВАЯ СТРИЖКА ОТ МАСТЕРОВ С БОЛЬШОЙ БУКВЫ",
    desc: "Сделаем #точтонадо основываясь на твоём образе жизни",
    active: false,
  },
];

const navLinks = ["Адрес", "Услуги", "Сервис", "О нас", "Блог"];

export default function Index() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0d0d0d", color: "#fff", fontFamily: "Roboto, sans-serif" }}>

      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ backgroundColor: "rgba(13,13,13,0.95)", borderBottom: "1px solid #1a1a1a", backdropFilter: "blur(10px)" }}
      >
        <div style={{ fontFamily: "Oswald, sans-serif", fontSize: "1.25rem", fontWeight: 700, letterSpacing: "0.1em", color: "#c8ff00" }}>
          BarberPlus
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l}
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors"
              style={{ letterSpacing: "0.05em" }}
            >
              {l}
            </a>
          ))}
        </div>

        <button
          className="hidden md:block px-5 py-2 text-sm rounded"
          style={{ backgroundColor: "#c8ff00", color: "#0d0d0d", fontFamily: "Oswald, sans-serif", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}
        >
          Записаться
        </button>

        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ backgroundColor: "#0d0d0d" }}
        >
          {navLinks.map((l) => (
            <a
              key={l}
              href="#"
              className="text-white text-2xl uppercase tracking-widest"
              style={{ fontFamily: "Oswald, sans-serif" }}
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
          <button
            className="px-8 py-3 text-base rounded mt-4"
            style={{ backgroundColor: "#c8ff00", color: "#0d0d0d", fontFamily: "Oswald, sans-serif", fontWeight: 600, textTransform: "uppercase" }}
          >
            Записаться
          </button>
        </div>
      )}

      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${HERO_IMG})`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
            filter: "grayscale(20%) brightness(0.4)",
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, #0d0d0d 55%, rgba(13,13,13,0.4) 100%)" }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-24">
          <p
            className="text-xs uppercase mb-5"
            style={{ color: "#c8ff00", letterSpacing: "0.3em", animation: "fadeIn 0.6s 0.1s ease-out forwards", opacity: 0 }}
          >
            ! Не порти свою внешность
          </p>
          <h1
            className="font-bold uppercase leading-none mb-6"
            style={{
              fontFamily: "Oswald, sans-serif",
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              animation: "slideLeft 0.7s 0.2s ease-out forwards",
              opacity: 0,
            }}
          >
            ПРОФЕССИОНАЛЬНЫЙ<br />
            <span style={{ color: "#c8ff00" }}>БАРБЕРШОП</span><br />
            В ЕКАТЕРИНБУРГЕ
          </h1>
          <p
            className="text-sm uppercase text-gray-400 mb-10"
            style={{ letterSpacing: "0.2em", animation: "fadeIn 0.6s 0.4s ease-out forwards", opacity: 0 }}
          >
            Более 500 довольных и постоянных клиентов
          </p>
          <button
            className="px-8 py-4 text-sm rounded"
            style={{
              backgroundColor: "#c8ff00",
              color: "#0d0d0d",
              fontFamily: "Oswald, sans-serif",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              animation: "fadeIn 0.6s 0.6s ease-out forwards",
              opacity: 0,
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => { (e.target as HTMLElement).style.boxShadow = "0 0 25px rgba(200,255,0,0.4)"; (e.target as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.boxShadow = "none"; (e.target as HTMLElement).style.transform = "translateY(0)"; }}
          >
            Записаться
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 max-w-6xl mx-auto px-6 md:px-12">
        <h2
          className="text-center text-3xl md:text-4xl mb-16 uppercase font-bold"
          style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.05em" }}
        >
          Наши особенности
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.num}
              className="p-8 rounded-lg transition-all duration-300"
              style={{
                backgroundColor: f.active ? "#c8ff00" : "#181818",
                border: f.active ? "none" : "1px solid #2a2a2a",
              }}
            >
              <div
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "Oswald, sans-serif", color: f.active ? "#0d0d0d" : "#c8ff00" }}
              >
                {f.num}.
              </div>
              <h3
                className="font-bold text-lg uppercase leading-tight mb-3"
                style={{ fontFamily: "Oswald, sans-serif", color: f.active ? "#0d0d0d" : "#fff" }}
              >
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: f.active ? "#1a1a1a" : "#888" }}>
                {f.desc}
              </p>
              {f.active && (
                <button
                  className="mt-5 px-5 py-2 text-xs font-bold uppercase tracking-wider rounded"
                  style={{ fontFamily: "Oswald, sans-serif", backgroundColor: "#0d0d0d", color: "#c8ff00" }}
                >
                  Подробнее
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* BARBERS */}
      <section className="py-24" style={{ backgroundColor: "#111" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2
            className="text-center text-3xl md:text-4xl mb-16 uppercase font-bold"
            style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.05em" }}
          >
            Наши барберы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {barbers.map((b) => (
              <div key={b.name} className="group text-center">
                <div
                  className="relative overflow-hidden rounded-lg mb-5"
                  style={{ aspectRatio: "3/4" }}
                >
                  <img
                    src={b.img}
                    alt={b.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: "grayscale(15%)" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(0deg, rgba(13,13,13,0.8) 0%, transparent 60%)" }}
                  />
                </div>
                <h3 className="text-xl font-bold uppercase" style={{ fontFamily: "Oswald, sans-serif" }}>{b.name}</h3>
                <p className="text-sm mt-1" style={{ color: "#c8ff00" }}>{b.role}</p>
                <p className="text-xs mt-1" style={{ color: "#555" }}>{b.exp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 max-w-6xl mx-auto px-6 md:px-12">
        <h2
          className="text-center text-3xl md:text-4xl mb-4 uppercase font-bold"
          style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.05em" }}
        >
          Услуги и цены
        </h2>
        <p
          className="text-center text-sm uppercase mb-12"
          style={{ color: "#c8ff00", fontFamily: "Oswald, sans-serif", letterSpacing: "0.2em" }}
        >
          Первое посещение 20% скидка
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {services.map((s, i) => (
            <div
              key={s.name}
              className="flex items-center justify-between py-4 px-3 cursor-default"
              style={{
                borderBottom: "1px solid #2a2a2a",
                borderTop: i === 0 || i === 4 ? "1px solid #2a2a2a" : "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.03)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
            >
              <span className="text-sm" style={{ color: "#bbb" }}>{s.name}</span>
              <span className="font-bold text-lg ml-4" style={{ fontFamily: "Oswald, sans-serif", color: "#c8ff00" }}>
                {s.price}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* APP PROMO */}
      <section className="py-20 mx-4 md:mx-12 rounded-xl mb-20" style={{ backgroundColor: "#181818", border: "1px solid #2a2a2a" }}>
        <div className="max-w-5xl mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2
              className="font-bold text-2xl md:text-3xl mb-4"
              style={{ fontFamily: "Oswald, sans-serif", color: "#c8ff00" }}
            >
              Записывайся к нам через приложение
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "#888" }}>
              Через удобное мобильное приложение можно посмотреть загрузку мастеров, выбрать свободное время и быстро записаться в барбершоп на визит. А так же посмотреть фотографии, адрес на карте и почитать полезную информацию.
            </p>
            <div className="flex gap-3 mt-6">
              <button
                className="flex items-center gap-2 px-4 py-3 rounded text-sm"
                style={{ backgroundColor: "#0d0d0d", border: "1px solid #2a2a2a", color: "#fff" }}
              >
                <Icon name="Smartphone" size={16} />
                App Store
              </button>
              <button
                className="flex items-center gap-2 px-4 py-3 rounded text-sm"
                style={{ backgroundColor: "#0d0d0d", border: "1px solid #2a2a2a", color: "#fff" }}
              >
                <Icon name="Play" size={16} />
                Google Play
              </button>
            </div>
          </div>
          <div
            className="w-40 h-72 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: "#0d0d0d", border: "2px solid #2a2a2a" }}
          >
            <Icon name="Smartphone" size={48} color="#c8ff00" />
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="booking" className="py-24 max-w-6xl mx-auto px-6 md:px-12 text-center">
        <h2
          className="text-3xl md:text-4xl mb-12 uppercase font-bold"
          style={{ fontFamily: "Oswald, sans-serif", letterSpacing: "0.05em" }}
        >
          Запишись прямо сейчас
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 w-full md:w-auto px-5 py-4 rounded text-sm text-white placeholder-gray-600 focus:outline-none bg-transparent"
            style={{ border: "1px solid #2a2a2a", transition: "border-color 0.2s" }}
            onFocus={e => { (e.target as HTMLElement).style.borderColor = "#c8ff00"; }}
            onBlur={e => { (e.target as HTMLElement).style.borderColor = "#2a2a2a"; }}
          />
          <input
            type="tel"
            placeholder="Номер телефона"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex-1 w-full md:w-auto px-5 py-4 rounded text-sm text-white placeholder-gray-600 focus:outline-none bg-transparent"
            style={{ border: "1px solid #2a2a2a", transition: "border-color 0.2s" }}
            onFocus={e => { (e.target as HTMLElement).style.borderColor = "#c8ff00"; }}
            onBlur={e => { (e.target as HTMLElement).style.borderColor = "#2a2a2a"; }}
          />
          <button
            className="px-8 py-4 text-sm rounded w-full md:w-auto"
            style={{
              backgroundColor: "#c8ff00",
              color: "#0d0d0d",
              fontFamily: "Oswald, sans-serif",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => { (e.target as HTMLElement).style.boxShadow = "0 0 25px rgba(200,255,0,0.4)"; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.boxShadow = "none"; }}
          >
            Записаться
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contacts" style={{ backgroundColor: "#111", borderTop: "1px solid #1a1a1a" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "Oswald, sans-serif", color: "#c8ff00" }}
            >
              BarberPlus
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
              Профессиональный барбершоп в Екатеринбурге. Более 500 довольных клиентов.
            </p>
          </div>

          <div>
            <h4
              className="text-xs uppercase tracking-widest mb-4"
              style={{ fontFamily: "Oswald, sans-serif", color: "#555" }}
            >
              Адрес
            </h4>
            <div className="flex items-start gap-3 text-sm mb-3" style={{ color: "#bbb" }}>
              <Icon name="MapPin" size={16} color="#c8ff00" className="mt-0.5 flex-shrink-0" />
              <span>г. Екатеринбург,<br />ул. Ленина, д. 1</span>
            </div>
            <div className="flex items-center gap-3 text-sm" style={{ color: "#bbb" }}>
              <Icon name="Clock" size={16} color="#c8ff00" />
              <span>Пн–Вс: 10:00 – 21:00</span>
            </div>
          </div>

          <div>
            <h4
              className="text-xs uppercase tracking-widest mb-4"
              style={{ fontFamily: "Oswald, sans-serif", color: "#555" }}
            >
              Контакты
            </h4>
            <div className="flex items-center gap-3 text-sm mb-3" style={{ color: "#bbb" }}>
              <Icon name="Phone" size={16} color="#c8ff00" />
              <a href="tel:+79001234567" className="hover:text-white transition-colors">+7 (900) 123-45-67</a>
            </div>
            <div className="flex items-center gap-3 text-sm mb-3" style={{ color: "#bbb" }}>
              <Icon name="Camera" size={16} color="#c8ff00" />
              <a href="#" className="hover:text-white transition-colors">@barberplus_ekb</a>
            </div>
            <div className="flex items-center gap-3 text-sm" style={{ color: "#bbb" }}>
              <Icon name="MessageCircle" size={16} color="#c8ff00" />
              <a href="#" className="hover:text-white transition-colors">Telegram</a>
            </div>
          </div>
        </div>

        <div
          className="text-center py-6 text-xs"
          style={{ borderTop: "1px solid #1a1a1a", color: "#333" }}
        >
          © 2024 BarberPlus. Все права защищены.
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
