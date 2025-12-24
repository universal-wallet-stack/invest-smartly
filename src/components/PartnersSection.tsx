import { Smartphone, HardDrive, FileCode, MoreHorizontal } from "lucide-react";

const partnerCategories = [
  {
    title: "Mobile",
    icon: Smartphone,
    partners: [
      "Onchain", "MetaMask", "Huobi", "Coinbase", "imToken", "Trust",
      "Opera", "SafePal", "Enjin", "COIN98", "Status", "Pillar"
    ]
  },
  {
    title: "Hardware",
    icon: HardDrive,
    partners: ["Ledger", "Exodus", "Trezor"]
  },
  {
    title: "Smart contract",
    icon: FileCode,
    partners: ["Gnosis Safe", "Dapper", "Argent"]
  },
  {
    title: "Other",
    icon: MoreHorizontal,
    partners: ["Portis", "Fortmatic", "Mist", "MyEtherWallet", "MyCrypto"]
  }
];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-20 bg-navy-light">
      <div className="container px-4">
        {partnerCategories.map((category, catIndex) => {
          const Icon = category.icon;
          return (
            <div key={catIndex} className="mb-12 last:mb-0">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Icon className="w-5 h-5 text-primary" />
                <h3 className="text-primary text-lg font-medium">
                  {category.title}
                </h3>
              </div>
              <div className="border-t border-border/30 pt-6">
                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                  {category.partners.map((partner, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-navy-lighter/50 transition-colors cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-primary">{partner[0]}</span>
                      </div>
                      <span className="text-foreground text-sm font-medium">{partner}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PartnersSection;
