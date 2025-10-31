const LogoBanner = () => {
  const logos = [
    {
      name: "Skyscanner",
      logo: "https://logos-world.net/wp-content/uploads/2022/07/Skyscanner-Logo.png",
    },
    {
      name: "Viator",
      logo: "https://logos-world.net/wp-content/uploads/2022/01/Viator-Logo.png",
    },
    {
      name: "Booking.com",
      logo: "https://logos-world.net/wp-content/uploads/2020/09/Booking.com-Logo.png",
    },
    {
      name: "TripAdvisor",
      logo: "https://logos-world.net/wp-content/uploads/2023/02/Tripadvisor-Logo.png",
    },
    {
      name: "GetYourGuide",
      logo: "https://logos-world.net/wp-content/uploads/2022/05/GetYourGuide-Logo.png",
    },
  ];

  // Duplicate the logos array to create seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-12 bg-base-100 overflow-hidden">
      <div
        className="inline-flex"
        style={{ animation: "var(--animate-scroll)" }}
      >
        {duplicatedLogos.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center mx-8 shrink-0"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-12 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoBanner;
