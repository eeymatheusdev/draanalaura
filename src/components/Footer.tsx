export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Clínica Odontológica & Harmonização Facial. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
