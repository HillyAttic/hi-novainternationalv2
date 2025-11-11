'use client';

interface ClientsMarqueeProps {
  className?: string;
}

const ClientsMarquee = ({ className = '' }: ClientsMarqueeProps) => {
  // Generate array of client image paths (1-30, skipping missing file 31)
  const clientImages = Array.from({ length: 30 }, (_, i) => i + 1);
  const firstHalf = clientImages.slice(0, 15);
  const secondHalf = clientImages.slice(15);

  return (
    <section className={`py-16 bg-secondary/30 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-cta text-3xl md:text-4xl text-foreground mb-4">
            Our Valued Clients
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by industry leaders across multiple sectors worldwide
          </p>
        </div>

        {/* First Marquee - Left to Right */}
        <div className="overflow-hidden mb-8">
          <div className="relative">
            <div className="flex animate-marquee-left-to-right space-x-8">
              {/* Create enough duplicates to fill screen and loop seamlessly */}
              {Array.from({ length: 6 }).map((_, repeatIndex) =>
                firstHalf.map((imageNum) => (
                  <div
                    key={`first-${imageNum}-${repeatIndex}`}
                    className="flex-shrink-0 w-32 h-20 md:w-40 md:h-24 bg-white rounded-lg p-4 precision-shadow hover:precision-shadow-md engineering-transition border border-border flex items-center justify-center group"
                  >
                    <img
                      src={`/assets/clients/${imageNum}.svg`}
                      alt={`Client ${imageNum}`}
                      className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 engineering-transition"
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Second Marquee - Right to Left */}
        <div className="overflow-hidden">
          <div className="relative">
            <div className="flex animate-marquee-right-to-left space-x-8">
              {/* Create enough duplicates to fill screen and loop seamlessly */}
              {Array.from({ length: 6 }).map((_, repeatIndex) =>
                secondHalf.map((imageNum) => (
                  <div
                    key={`second-${imageNum}-${repeatIndex}`}
                    className="flex-shrink-0 w-32 h-20 md:w-40 md:h-24 bg-white rounded-lg p-4 precision-shadow hover:precision-shadow-md engineering-transition border border-border flex items-center justify-center group"
                  >
                    <img
                      src={`/assets/clients/${imageNum}.svg`}
                      alt={`Client ${imageNum}`}
                      className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 engineering-transition"
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-left-to-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right-to-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee-left-to-right {
          animation: marquee-left-to-right 30s linear infinite;
          width: 200%;
        }

        .animate-marquee-right-to-left {
          animation: marquee-right-to-left 30s linear infinite;
          width: 200%;
        }

        /* Pause animation on hover */
        .animate-marquee-left-to-right:hover,
        .animate-marquee-right-to-left:hover {
          animation-play-state: paused;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .animate-marquee-left-to-right,
          .animate-marquee-right-to-left {
            animation-duration: 20s;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientsMarquee;