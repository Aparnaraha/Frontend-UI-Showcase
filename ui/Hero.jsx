import React from "react";
// Assuming Link and useLocation are available via the environment's React Router setup.
// Since we are generating a single-file React component, we'll simulate these imports.

// Mocking React Router Hooks/Components for single-file environment
const Link = (props) => <a href={props.to} {...props}>{props.children}</a>;
const useLocation = () => ({ pathname: typeof window !== 'undefined' ? window.location.pathname : "/about-us/our-team" });


// 🎨 NEW COLOR SCHEME:
const COLORS = {
  primary: "#004B73",      // Dark Blue (Main background overlay)
  secondary: "#F36B21",    // Vibrant Orange (Main contrast accent)
  accentLight: "#F0F8FF",  // Very Light Blue/White (Text color)
  background: "#FFFFFF",
};

/**
 * Utility function to format path segments for display.
 */
const formatSegment = (segment) => {
  // Capitalize first letter & replace dashes
  return segment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

/**
 * A responsive, high-contrast Hero section with dynamic breadcrumbs.
 * @param {object} props
 * @param {string} props.title - The main title text for the hero.
 * @param {string} props.imageUrl - URL for the background image.
 */
const PageHero = ({ title, imageUrl }) => {
  const location = useLocation();
  // Using a placeholder with the primary brand color for clear visual identity
  const placeholderUrl =
    "https://placehold.co/1920x600/004B73/F0F8FF/png?text=PREMIUM+HERO";

  // Split path into segments
  const segments = location.pathname
    .split("/")
    .filter((seg) => seg && seg.trim() !== "");

  // Build breadcrumbs dynamically
  const breadcrumbs = [{ name: "Home", link: "/" }];

  segments.forEach((seg, index) => {
    const link = "/" + segments.slice(0, index + 1).join("/");
    breadcrumbs.push({
      name:
        // Use the explicit title prop or formatted segment for the last item
        index === segments.length - 1
          ? title || formatSegment(seg)
          : formatSegment(seg),
      // Don't link the current page
      link: index === segments.length - 1 ? null : link,
    });
  });

  return (
    <section className="relative w-full h-[55vh] min-h-[400px] overflow-hidden font-sans pt-24 sm:pt-28">
      {/* Background Image */}
      <img
        src={imageUrl || placeholderUrl}
        alt={`${title} Background`}
        className="absolute inset-0 w-full h-full object-cover brightness-[0.7]" // Darkened the image further
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = placeholderUrl;
        }}
      />

      {/* High-Contrast Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          // Deep Blue to Vibrant Orange transition for premium feel
          background: `linear-gradient(135deg, ${COLORS.primary}E0 10%, ${COLORS.secondary}99 90%)`,
        }}
      ></div>

      {/* Subtle Texture/Noise Layer */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 sm:px-12">
        {/* Title - Using accent light for a bright, clean look */}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight fade-up"
          style={{ 
            "--delay": "200ms",
            color: COLORS.accentLight 
          }}
        >
          {title || formatSegment(segments[segments.length - 1] || "Page Title")}
        </h1>

        {/* Animated Orange Accent Divider */}
        <div
          className="relative w-24 h-[2px] mt-2 mb-8 fade-up overflow-hidden rounded-full shadow-lg"
          style={{
            "--delay": "400ms",
            backgroundColor: COLORS.secondary, // Vibrant Orange
          }}
        >
          <span className="absolute inset-0 w-0 bg-white/70 animate-glowLine"></span>
        </div>

        {/* Breadcrumbs */}
        <nav
          className="text-base sm:text-lg flex flex-wrap justify-center gap-2 fade-up"
          style={{ 
            "--delay": "600ms",
            color: COLORS.accentLight // Light text for breadcrumbs
          }}
          aria-label="Breadcrumb"
        >
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={crumb.name}>
              {crumb.link ? (
                <Link
                  to={crumb.link}
                  className="hover:underline transition-all duration-300 font-medium"
                  style={{ 
                    color: COLORS.accentLight, 
                    // Hover uses the secondary orange accent
                    textShadow: '0 0 5px rgba(243, 107, 33, 0.5)' 
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = COLORS.secondary}
                  onMouseLeave={(e) => e.currentTarget.style.color = COLORS.accentLight}
                >
                  {crumb.name}
                </Link>
              ) : (
                <span className="font-semibold" style={{ color: COLORS.secondary }}>
                    {crumb.name}
                </span>
              )}
              {index < breadcrumbs.length - 1 && (
                <span className="text-xl mx-1" style={{ color: COLORS.accentLight }}>
                    /
                </span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>

      {/* Decorative Corner Glow (using primary color for depth) */}
      <div
        className="absolute bottom-0 left-0 w-40 h-40 opacity-20 hidden md:block"
        style={{
          background: `radial-gradient(circle at bottom left, ${COLORS.primary}EE, transparent 70%)`,
        }}
      ></div>
      {/* Decorative Corner Glow (using secondary color for emphasis) */}
      <div
        className="absolute top-0 right-0 w-40 h-40 opacity-30 hidden md:block"
        style={{
          background: `radial-gradient(circle at top right, ${COLORS.secondary}66, transparent 70%)`,
        }}
      ></div>

      {/* Animations */}
      <style jsx="true">{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-up {
          opacity: 0;
          animation: fadeUp 0.9s ease-out forwards;
          animation-delay: var(--delay, 0s);
        }

        @keyframes glowLine {
          0% {
            transform: translateX(-100%);
            opacity: 0.5;
          }
          50% {
            transform: translateX(0%);
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0.5;
          }
        }
        .animate-glowLine {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, ${COLORS.accentLight}, transparent);
          animation: glowLine 3s ease-in-out infinite;
        }
        
        /* Font Fallback for Inter - using sans */
        .font-sans {
          font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
        }
      `}</style>
    </section>
  );
};

export default PageHero;
  