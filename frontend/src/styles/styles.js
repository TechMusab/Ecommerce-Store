const styles = {
  // Main Layout Components
  custom_container: "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden sm:block",
  section: "max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8",
  
  // Typography System
  heading: "text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",
  productTitle: "text-2xl font-bold text-slate-800 group-hover:text-purple-600 transition-colors duration-300",
  
  // Pricing Elements
  productDiscountPrice: "text-2xl font-extrabold text-purple-600",
  price: "text-lg font-medium text-slate-500 line-through decoration-red-500 decoration-2",
  
  // Shop Information
  shop_name: "text-base font-medium text-purple-600 hover:text-purple-800 transition-all duration-300 inline-flex items-center gap-2",
  
  // Interactive Indicators
  active_indicator: "absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-purple-600 to-pink-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out",
  
  // Button System
  button: "group relative overflow-hidden px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5",
  
  cart_button: "group flex items-center gap-2 px-6 py-2.5 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-purple-200",
  cart_button_text: "text-white font-semibold tracking-wide group-hover:tracking-wider transition-all duration-300",
  
  // Form Components
  input: "block w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 outline-none",
  
  // Status Indicators
  activeStatus: "absolute top-1 right-1 w-3 h-3 rounded-full bg-green-500 ring-4 ring-green-500/30",
  
  // Utility Classes
  noramlFlex: "flex items-center gap-3",

  // Additional Interactive Elements
  hover_effect: "transform transition-transform hover:-translate-y-0.5 hover:shadow-lg",
  card: "group rounded-2xl bg-white p-6 shadow-xl hover:shadow-2xl transition-all duration-300",
  
  // Badge & Tag Styles
  badge: "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800",
  tag: "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-800",
  
  // Grid Layouts
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
  
  // Navigation
  nav_link: "relative font-medium text-slate-600 before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:origin-left before:scale-x-0 before:transform before:rounded-full before:bg-purple-600 before:transition-all before:duration-200 hover:text-purple-600 hover:before:scale-x-100",
  
  // Animations
  shimmer: "animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent",
  
  // Overlays
  overlay: "absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300",
  
  // Special Effects
  glass_effect: "backdrop-blur-md bg-white/80 supports-[backdrop-filter]:bg-white/20"
};

export default styles;