const TrustedClients = () => {
  const clients = [
    "TechCorp Global",
    "RetailMax",
    "Global Ventures",
    "ManuFast Industries",
    "LogiPro Solutions",
    "Maritime Express",
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground mb-8 text-sm uppercase tracking-wider">
          Trusted by Industry Leaders
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 text-center"
            >
              <p className="text-primary font-semibold text-sm">{client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;
