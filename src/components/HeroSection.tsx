import heroImage from "@/assets/hero-blockchain.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container px-4 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 animate-fade-in-up">
          Blockchain<br />
          <span className="text-primary">Charity Foundation</span>
        </h1>
        
        <p className="text-gold-light text-lg md:text-xl font-medium tracking-wider uppercase mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          The Ethereum<br />Foundation's Vision
        </p>
        
        <div className="relative w-full max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <img 
            src={heroImage} 
            alt="Blockchain Technology" 
            className="w-full h-auto animate-float glow-gold"
          />
        </div>
      </div>
      
      {/* Carousel dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className={`w-2 h-2 rounded-full transition-colors ${i === 4 ? 'bg-primary' : 'bg-muted'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
