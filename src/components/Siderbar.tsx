const navItems = [
  { href: "#inicio", color: "gold" },
  { href: "#sobre", color: "pink" },
  { href: "#agendamento", color: "gold" },
  { href: "#resultados", color: "pink" },
  { href: "#faq", color: "gold" },
  { href: "#clinica", color: "pink" },
] as const;

export default function Sidebar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-beige/90 backdrop-blur-sm flex justify-center items-center py-4 z-50 shadow-sm">
      <div className="flex flex-row gap-8">
        {navItems.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            aria-label={`Ir para ${item.href.replace("#", "")}`}
          >
            <span
              className={`w-4 h-4 rounded-full block transition-all duration-300 hover:scale-125 ${
                item.color === "gold" ? "bg-gold" : "bg-pink"
              }`}
            ></span>
          </a>
        ))}
      </div>
    </nav>
  );
}
