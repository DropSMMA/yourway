import config from "@/config";

const Hero = () => {
  return (
    <section className="max-w-3xl mx-auto bg-base-100 px-8 py-16 lg:py-24 text-center flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-6">
        <a
          href="https://apps.apple.com/us/app/yourway-your-service-hub/id6744569494?itscg=30200&itsct=apps_box_artwork&mttnsubad=6744569494"
          style={{
            position: "relative",
            width: 170,
            height: 170,
            overflow: "hidden",
            display: "inline-block",
            verticalAlign: "middle",
            "--app-icon-mask":
              "url('data:image/svg+xml,%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xml%3Aspace%3D%22preserve%22%20viewBox%3D%220%200%20230.5%20230.5%22%3E%0A%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20stroke-linejoin%3D%22round%22%20stroke-miterlimit%3D%221.4%22%20clip-rule%3D%22evenodd%22%20d%3D%22M158.2%20230H64.1a320%20320%200%200%201-7-.1c-5%200-10-.5-15-1.3a50.8%2050.8%200%200%201-14.4-4.8%2048.2%2048.2%200%200%201-21-21%2050.9%2050.9%200%200%201-4.8-14.4%20100.7%20100.7%200%200%201-1.3-15v-7l-.1-8.2V64.1a320%20320%200%200%201%20.1-7c0-5%20.5-10%201.3-15a50.7%2050.7%200%200%201%204.8-14.4%2048.2%2048.2%200%200%201%2021-21%2051%2051%200%200%201%2014.4-4.8c5-.8%2010-1.2%2015-1.3a320%20320%200%200%201%207%200l8.2-.1h94.1a320%20320%200%200%201%207%20.1c5%200%2010%20.5%2015%201.3a52%2052%200%200%201%2014.4%204.8%2048.2%2048.2%200%200%201%2021%2021%2050.9%2050.9%200%200%201%204.8%2014.4c.8%205%201.2%2010%201.3%2015a320%20320%200%200%201%20.1%207v102.3l-.1%207c0%205-.5%2010-1.3%2015a50.7%2050.7%200%200%201-4.8%2014.4%2048.2%2048.2%200%200%201-21%2021%2050.8%2050.8%200%200%201-14.4%204.8c-5%20.8-10%201.2-15%201.3a320%20320%200%200%201-7%200l-8.2.1z%22%2F%3E%0A%3C%2Fsvg%3E%0A')",
          }}
        >
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/a7/f8/38/a7f83830-7d56-dc18-2551-4cef07df6cbb/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/540x540bb.jpg"
            alt="YourWay: Your Service Hub"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              maskImage: "var(--app-icon-mask)",
              WebkitMaskImage: "var(--app-icon-mask)",
            }}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 230.5 230.5"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              boxSizing: "border-box",
            }}
          >
            <path
              fill="none"
              stroke="#000"
              strokeLinejoin="round"
              strokeMiterlimit="1.4"
              strokeOpacity=".1"
              strokeWidth="1"
              d="M158.2 230H64.1a320 320 0 0 1-7-.1c-5 0-10-.5-15-1.3a50.8 50.8 0 0 1-14.4-4.8 48.2 48.2 0 0 1-21-21 50.9 50.9 0 0 1-4.8-14.4 100.7 100.7 0 0 1-1.3-15v-7l-.1-8.2V64.1a320 320 0 0 1 .1-7c0-5 .5-10 1.3-15a50.7 50.7 0 0 1 4.8-14.4 48.2 48.2 0 0 1 21-21 51 51 0 0 1 14.4-4.8c5-.8 10-1.2 15-1.3a320 320 0 0 1 7 0l8.2-.1h94.1a320 320 0 0 1 7 .1c5 0 10 .5 15 1.3a52 52 0 0 1 14.4 4.8 48.2 48.2 0 0 1 21 21 50.9 50.9 0 0 1 4.8 14.4c.8 5 1.2 10 1.3 15a320 320 0 0 1 .1 7v102.3l-.1 7c0 5-.5 10-1.3 15a50.7 50.7 0 0 1-4.8 14.4 48.2 48.2 0 0 1-21 21 50.8 50.8 0 0 1-14.4 4.8c-5 .8-10 1.2-15 1.3a320 320 0 0 1-7 0l-8.2.1z"
              clipRule="evenodd"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </a>
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight">
          Your perfect trip. In 30 seconds.
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Enter your budget and preferences. {config.appName} finds the 5 best
          complete trips — transport, hotel, food and activities — optimized for
          value.
        </p>
      </div>

      <div className="mt-4 w-full">
        <a
          href="https://apps.apple.com/us/app/yourway-your-service-hub/id6744569494?itscg=30200&itsct=apps_box_badge&mttnsubad=6744569494"
          style={{ display: "inline-block" }}
        >
          <img
            src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1744761600"
            alt="Download on the App Store"
            style={{
              width: 246,
              height: 82,
              verticalAlign: "middle",
              objectFit: "contain",
            }}
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
