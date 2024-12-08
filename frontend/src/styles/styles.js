const styles = {
  // Main Layout Components
  custom_container: "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden sm:block",
  section: "max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-gray-900 rounded-md",

  // Typography System
  heading: "text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent",
  productTitle: "text-2xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300",

  // Pricing Elements
  productDiscountPrice: "text-2xl font-extrabold text-teal-400",
  price: "text-lg font-medium text-gray-400 line-through decoration-red-500 decoration-2",

  // Shop Information
  shop_name: "text-base font-medium text-teal-400 hover:text-teal-600 transition-all duration-300 inline-flex items-center gap-2",

  // Interactive Indicators
  active_indicator: "absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-teal-400 to-cyan-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out",

  // Button System
  button: "group relative overflow-hidden px-6 py-3 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5",
  
  cart_button: "group flex items-center gap-2 px-6 py-2.5 rounded-full bg-teal-500 hover:bg-teal-600 transition-colors duration-300 shadow-lg hover:shadow-teal-200",
  cart_button_text: "text-white font-semibold tracking-wide group-hover:tracking-wider transition-all duration-300",

  // Form Components
  input: "block w-full px-4 py-3 rounded-xl border-2 border-gray-700 bg-gray-800 text-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/20 transition-all duration-300 outline-none",

  // Status Indicators
  activeStatus: "absolute top-1 right-1 w-3 h-3 rounded-full bg-green-500 ring-4 ring-green-500/30",

  // Utility Classes
  noramlFlex: "flex items-center gap-3",

  // Additional Interactive Elements
  hover_effect: "transform transition-transform hover:-translate-y-0.5 hover:shadow-lg",
  card: "group rounded-2xl bg-gray-800 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 text-white",

  // Badge & Tag Styles
  badge: "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-500 text-gray-900",
  tag: "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-700 text-white",

  // Grid Layouts
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",

  // Navigation
  nav_link: "relative font-medium text-white before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-full before:bg-teal-500 before:transition-all before:duration-200 hover:text-teal-500 hover:before:scale-x-100",

  // Animations
  shimmer: "animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent",

  // Overlays
  overlay: "absolute inset-0 bg-gray-800 bg-opacity-40 transition-opacity duration-300",

  // Special Effects
  glass_effect: "backdrop-blur-md bg-gray-800/80 supports-[backdrop-filter]:bg-gray-800/40",
};

export default styles;
