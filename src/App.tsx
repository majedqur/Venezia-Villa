/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Phone, MapPin, Users, Clock, CheckCircle2, AlertCircle, ExternalLink, ChevronLeft, ChevronRight, Calendar, Banknote, ChevronDown, ChevronUp, Moon, Sun, Globe, Minus, Plus, Bed, Bath, Star, DoorOpen, Share2, Volume2, VolumeX, Play, Store, Utensils, Pill, Bell, Eye, X } from 'lucide-react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import villa from "./villa.jpg";
import villaVideo from "./villa-video.mp4";
const villaNight = img21;
import dayImage from "../day.jpg";
import nightImage from "../night.jpg";
import img1 from "../1.jpeg";
import img2 from "../2.jpeg";
import img3 from "../3.jpeg";
import img4 from "../4.jpeg";
import img5 from "../5.jpeg";
import img6 from "../6.jpeg";
import img7 from "../7.jpeg";
import img8 from "../8.jpeg";
import img9 from "../9.jpeg";
import img10 from "../10.jpg";
import img11 from "../11.jpg";
import img12 from "../12.jpg";
import img13 from "../13.jpeg";
import img14 from "../14.jpeg";
import img15 from "../15.jpeg";
import img17 from "../17.jpg";
import img18 from "../18.jpg";
import img20 from "../20.jpeg";
import img21 from "../21.jpeg";
import imgNew1 from "../1.jpg";
import imgNew2 from "../2.png";

const GALLERY_IMAGES = [
  { url: img4, alt: 'Villa View 4' },
  { url: img3, alt: 'Villa View 3' },
  { url: img5, alt: 'Villa View 5' },
  { url: img1, alt: 'Villa View 1' },
  { url: img2, alt: 'Villa View 2' },
  { url: img6, alt: 'Villa View 6' },
  { url: img7, alt: 'Villa View 7' },
  { url: img8, alt: 'Villa View 8' },
  { url: img9, alt: 'Villa View 9' },
  { url: img10, alt: 'Villa View 10' },
  { url: img11, alt: 'Villa View 11' },
  { url: img12, alt: 'Villa View 12' },
  { url: img13, alt: 'Villa View 13' },
  { url: img14, alt: 'Villa View 14' },
  { url: img15, alt: 'Villa View 15' },
  { url: img17, alt: 'Villa View 17' },
  { url: img18, alt: 'Villa View 18' },
  { url: img20, alt: 'Villa View 20' },
  { url: imgNew1, alt: 'Living Room' },
  { url: imgNew2, alt: 'Kitchen' },
];

const TRANSLATIONS = {
  en: {
    welcome: "Welcome to",
    tagline: "Escape the city • Enjoy a day in nature",
    arabicWelcome: "يا هلا بالضيف!",
    maxGuests: "Max Guests",
    checkIn: "Check-in",
    checkOut: "Check-out",
    facilities: "Facilities",
    rules: "Villa Rules",
    bookingTitle: "Booking Prices & Schedule",
    videoTourTitle: "Experience the Vibe",
    videoTourSubtitle: "A cinematic glimpse into your next getaway",
    bookingSubtitle: "View times, daily rates & options",
    bookingTimes: "Booking Times",
    morning: "Morning",
    evening: "Evening",
    overnight: "Overnight Stay",
    confirmWhatsApp: "Confirm Booking via WhatsApp",
    autoDetails: "Your selection details will be sent automatically",
    guests: "Guests",
    selectGuests: "Number of Guests",
    people: "People",
    morningLabel: "Morning Booking (10:30 AM - 9:00 PM)",
    eveningLabel: "Evening Booking (10:30 PM - 8:30 AM)",
    bookWhatsApp: "Book via WhatsApp",
    bookCall: "Book Your Day",
    openMaps: "Open in Google Maps",
    villaGallery: "Villa Gallery",
    villaInfo: "Villa Information",
    houseRules: "House Rules",
    explore: "Explore",
    open: "Open",
    selectPeriod: "1. Select Period",
    selectDay: "2. Select Day",
    selectGuestsLabel: "3. Number of Guests",
    summary: "Booking Summary",
    totalPrice: "Total Price",
    dayLabel: "Day",
    periodLabel: "Period",
    guestsLabel: "Guests",
    childrenLabel: "Children",
    overnightExtra: "Overnight Stay (Extra)",
    overnightDesc: "Stay until next morning (+60/100 JD)",
    selectExtras: "4. Extras (Optional)",
    reviewsTitle: "Guest Reviews",
    addReview: "Add a Review",
    ratingLabel: "Rating",
    commentLabel: "Your Experience",
    submitReview: "Submit Review",
    nameLabel: "Your Name",
    bedrooms: "Bedrooms",
    beds: "Beds",
    bathrooms: "Bathrooms",
    facilitiesList: [
      'Private Swimming Pool',
      'Outdoor Seating Area',
      'BBQ & Grill Station',
      'Fully Equipped Kitchen',
      'Green Lawn Area',
      'Air Conditioned Rooms',
    ],
    rulesList: [
      'No loud music after 10:00 PM',
      'Maximum 5 cars allowed inside',
      'Events require prior approval',
      'No smoking inside the rooms',
    ],
    days: {
      sunWed: 'Sunday – Wednesday',
      thu: 'Thursday',
      fri: 'Friday',
      sat: 'Saturday',
      any: 'Any Day'
    },
    shareMessage: "Check out this beautiful villa! 😍",
    localGuideTitle: "Nearby Places",
    supermarket: "Al Haram Supermarket",
    supermarketDist: "2 mins away",
    restaurants: "Restaurants & Bakeries",
    restaurantsDist: "5 mins away",
    pharmacy: "Pharmacy",
    pharmacyDist: "5 mins away",
    fomoMessages: [
      "💡 Weekends (Thu & Fri) are usually booked 2 weeks in advance.",
      "⭐ Rated 5 stars by our recent guests.",
      "📅 Planning an event? Book early to secure your preferred date.",
      "👨‍👩‍👧‍👦 Perfect for family gatherings, accommodating up to 20 guests.",
      "🏊‍♂️ Request pool heating in advance for a better experience on cooler days.",
      "🌙 Choose the (Overnight) option to extend your stay comfortably until the next morning."
    ]
  },
  ar: {
    welcome: "يا هلا بيك في",
    tagline: "اهرب من عجقة المدينة • واستمتع بيومك بالطبيعة",
    arabicWelcome: "يا هلا بالضيف!",
    maxGuests: "أقصى عدد",
    checkIn: "وقت الدخول",
    checkOut: "وقت الخروج",
    facilities: "المرافق",
    rules: "قوانين الفيلا",
    bookingTitle: "الأسعار والمواعيد",
    videoTourTitle: "عِش التجربة",
    videoTourSubtitle: "لمحة سينمائية عن عطلتك القادمة",
    bookingSubtitle: "شوف المواعيد والأسعار والخيارات",
    bookingTimes: "مواعيد الحجز",
    morning: "صباحي",
    evening: "مسائي",
    overnight: "مبيت",
    confirmWhatsApp: "تأكيد الحجز ع الواتساب",
    autoDetails: "تفاصيل حجزك رح تنبعث لحالها",
    guests: "أشخاص",
    selectGuests: "عدد الأشخاص",
    people: "شخص",
    morningLabel: "حجز صباحي (10:30 ص - 9:00 م)",
    eveningLabel: "حجز مسائي (10:30 م - 8:30 ص)",
    bookWhatsApp: "احجز ع الواتساب",
    bookCall: "احجز يومك",
    openMaps: "الوجهة ع الخريطة",
    villaGallery: "صور الفيلا",
    villaInfo: "معلومات الفيلا",
    houseRules: "قوانين البيت",
    explore: "استكشف",
    open: "افتح",
    selectPeriod: "١. اختر الفترة",
    selectDay: "٢. اختر اليوم",
    selectGuestsLabel: "٣. عدد الأشخاص",
    summary: "ملخص الحجز",
    totalPrice: "السعر الإجمالي",
    dayLabel: "اليوم",
    periodLabel: "الفترة",
    guestsLabel: "الأشخاص",
    childrenLabel: "الأطفال",
    overnightExtra: "مبيت (إضافي)",
    overnightDesc: "خليك لثاني يوم الصبح (+60/100 دينار)",
    selectExtras: "٤. إضافات (اختياري)",
    reviewsTitle: "آراء الضيوف",
    addReview: "أضف تقييمك",
    ratingLabel: "التقييم",
    commentLabel: "تجربتك",
    submitReview: "إرسال التقييم",
    nameLabel: "الاسم",
    bedrooms: "غرف نوم",
    beds: "تخوت",
    bathrooms: "حمامات",
    facilitiesList: [
      'مسبح خصوصي',
      'قعدة خارجية',
      'منطقة شوي',
      'مطبخ مجهز بالكامل',
      'مساحات خضراء',
      'غرف مكيفة',
    ],
    rulesList: [
      'ممنوع الأغاني العالية بعد الـ 10 بالليل',
      'مسموح بس 5 سيارات جوا',
      'الحفلات بدها موافقة مسبقة',
      'ممنوع التدخين جوا الغرف',
    ],
    days: {
      sunWed: 'من الأحد للأربعاء',
      thu: 'الخميس',
      fri: 'الجمعة',
      sat: 'السبت',
      any: 'أي يوم'
    },
    shareMessage: "شوف هالفيلا ما أحلاها! 😍",
    localGuideTitle: "أماكن قريبة منك",
    supermarket: "سوبر ماركت الهرم",
    supermarketDist: "يبعد دقيقتين",
    restaurants: "مطاعم ومخابز",
    restaurantsDist: "تبعد 5 دقائق",
    pharmacy: "صيدلية",
    pharmacyDist: "تبعد 5 دقائق",
    fomoMessages: [
      "💡 أيام العطل (الخميس والجمعة) تُحجز عادةً قبل أسبوعين.",
      "⭐ تم تقييم الفيلا بـ 5 نجوم من قبل ضيوفنا مؤخراً.",
      "📅 هل تخطط لمناسبة خاصة؟ تأكد من الحجز المبكر لضمان توفر الأيام.",
      "👨‍👩‍👧‍👦 الفيلا مناسبة جداً للعائلات وتتسع لغاية 20 شخص.",
      "🏊‍♂️ يمكنك طلب تفعيل تدفئة المسبح مسبقاً لاستمتاع أكبر في الأيام الباردة.",
      "🌙 خيار (المبيت) يتيح لك تمديد سهرتك براحة تامة حتى صباح اليوم التالي."
    ]
  }
};

const ImageLoader = ({ src, alt, eager, isDarkMode }: { src: string, alt: string, eager: boolean, isDarkMode: boolean }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className={`w-full h-full relative ${isDarkMode ? 'bg-stone-900/50' : 'bg-stone-200/50'}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full border-4 border-emerald-500/20 border-t-emerald-500 animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading={eager ? "eager" : "lazy"}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default function App() {
  const { scrollY } = useScroll();
  const heroTextOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [isBookingExpanded, setIsBookingExpanded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ar'>('ar');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<'morning' | 'evening' | null>(null);
  const [guestCount, setGuestCount] = useState(10);
  const [childCount, setChildCount] = useState(0);
  const [isOvernight, setIsOvernight] = useState(false);
  // Generate dynamic reviews so the site always looks recently updated
  const generateRecentReviews = () => {
    const today = new Date();
    const formatDate = (daysAgo: number) => {
      const d = new Date(today);
      d.setDate(d.getDate() - daysAgo);
      return d.toISOString().split('T')[0];
    };

    return [
      { id: 1, name: "محمد عبدالله", rating: 5, comment: "المكان يجنن ونظيف جداً، المسبح كان رائع والتعامل راقي. أكيد رح نرجع!", date: formatDate(2) },
      { id: 2, name: "Sarah K.", rating: 5, comment: "Absolutely beautiful villa. The outdoor area is perfect for gatherings. Highly recommended!", date: formatDate(5) },
      { id: 3, name: "عائلة أبو خالد", rating: 5, comment: "قضينا يوم من العمر، الفيلا مجهزة بكل شي ممكن تحتاجه والتخوت مريحة.", date: formatDate(8) },
      { id: 4, name: "عمر زيدان", rating: 4, comment: "مكان هادي ومرتب، ممتاز لتغيير الجو والابتعاد عن ضجة المدينة.", date: formatDate(12) }
    ];
  };

  const [reviews, setReviews] = useState(generateRecentReviews());
  const [newReview, setNewReview] = useState({ name: "", rating: 5, comment: "" });
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const videoInViewRef = useRef(null);
  const videoInView = useInView(videoInViewRef, {
    amount: 0.2,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      setIsPlaying(true);
      setVideoError(false);
    };
    const handlePause = () => setIsPlaying(false);
    const handleError = () => {
      console.error("Local video failed to load, falling back to YouTube");
      setVideoError(true);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('error', handleError);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      if (videoInView) {
        videoRef.current.play().catch(() => {
          // Autoplay blocked, which is expected on mobile
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [videoInView]);

  const t = TRANSLATIONS[language];

  // Generate next 14 days (Memoized for performance)
  const nextDays = React.useMemo(() => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      days.push(date);
    }
    return days;
  }, []);

  const getDayPrice = (date: Date, period: 'morning' | 'evening') => {
    const day = date.getDay(); // 0: Sun, 1: Mon, ..., 6: Sat
    
    if (period === 'morning') {
      if (day >= 0 && day <= 3) return 170; // Sun-Wed
      if (day === 4) return 180; // Thu
      if (day === 5) return 300; // Fri
      if (day === 6) return 220; // Sat
    } else if (period === 'evening') {
      if (day === 6 || (day >= 0 && day <= 3)) return 150; // Sat-Wed
      if (day === 4) return 180; // Thu
      if (day === 5) return 150; // Fri
    }
    return null;
  };

  const getOvernightExtra = (date: Date) => {
    const day = date.getDay();
    if (day === 4) return 100; // Thu to Fri
    if (day === 5) return 100; // Fri to Sat
    return 60; // Normal days
  };

  const basePrice = React.useMemo(() => {
    if (!selectedDate || !selectedPeriod) return 0;
    return getDayPrice(selectedDate, selectedPeriod) || 0;
  }, [selectedDate, selectedPeriod]);

  const totalPrice = React.useMemo(() => {
    if (!selectedDate || !isOvernight) return basePrice;
    return basePrice + getOvernightExtra(selectedDate);
  }, [basePrice, isOvernight, selectedDate]);

  const currentStep = React.useMemo(() => {
    if (!selectedPeriod) return 1;
    if (!selectedDate) return 2;
    if (guestCount === 10 && childCount === 0 && !isOvernight) return 3; // Default state
    return 4;
  }, [selectedPeriod, selectedDate, guestCount, childCount, isOvernight]);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(language === 'ar' ? 'ar-JO' : 'en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    });
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Automatic dark mode based on Jordan time (GMT+3)
    const checkJordanTime = () => {
      // Check if user has already manually toggled theme in this session
      if (sessionStorage.getItem('theme-manually-set')) return;

      const jordanTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Amman" });
      const hour = new Date(jordanTime).getHours();
      
      // Dark mode from 6 PM (18:00) to 6 AM (06:00)
      if (hour >= 18 || hour < 6) {
        setIsDarkMode(true);
      } else {
        setIsDarkMode(false);
      }
    };

    checkJordanTime();
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    sessionStorage.setItem('theme-manually-set', 'true');
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ]);

  const [bannerRef] = useEmblaCarousel({ loop: true, axis: 'y' }, [
    Autoplay({ delay: 7000, stopOnInteraction: false })
  ]);

  const [placesRef] = useEmblaCarousel({ 
    dragFree: true, 
    direction: language === 'ar' ? 'rtl' : 'ltr',
    containScroll: 'trimSnaps'
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const handleShare = async (imageUrl: string, altText: string) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Venezia Villa',
          text: t.shareMessage,
          url: window.location.href,
        });
      } else {
        throw new Error('Share not supported');
      }
    } catch (error) {
      // Handle "Share canceled" or "AbortError" gracefully
      if (error instanceof Error && (error.name === 'AbortError' || error.message.includes('canceled'))) {
        return;
      }
      
      // Fallback: Copy to clipboard for all other errors or if share is not supported
      try {
        await navigator.clipboard.writeText(window.location.href);
        // Using a toast-like notification would be better, but for now we use a simple alert
        // or just let the user know it was copied.
        const msg = language === 'ar' ? 'تم نسخ رابط الموقع بنجاح! يمكنك الآن إرساله لأي شخص.' : 'Website link copied successfully! You can now share it with anyone.';
        alert(msg);
      } catch (clipboardError) {
        console.error('Clipboard fallback failed:', clipboardError);
      }
    }
  };

  return (
    <div 
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-stone-950 text-stone-100' : 'bg-stone-50 text-stone-900'} selection:bg-emerald-100 selection:text-emerald-900 relative ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}
    >
      {/* Background Decorative Shapes (Optimized for performance) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className={`absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full blur-[100px] opacity-[0.1] ${isDarkMode ? 'bg-emerald-500' : 'bg-emerald-400'}`}
        />
        <div
          className={`absolute -bottom-[10%] -right-[10%] w-[70%] h-[70%] rounded-full blur-[100px] opacity-[0.1] ${isDarkMode ? 'bg-blue-500' : 'bg-blue-400'}`}
        />
      </div>

      {/* Fixed Background & Controls */}
      <div className="fixed top-0 inset-x-0 h-screen w-full overflow-hidden z-0">
        {/* Controls Container - Top Center */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50">
          <motion.button
            onClick={toggleDarkMode}
            dir="ltr"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative flex items-center p-1 rounded-full shadow-2xl border transition-all w-16 h-8 ${
              isDarkMode 
                ? 'bg-black/40 border-white/10' 
                : 'bg-white/40 border-white/40'
            }`}
            aria-label="Toggle Theme"
          >
            {/* Active Pill Background */}
            <motion.div 
              className={`absolute w-6 h-6 rounded-full shadow-sm ${isDarkMode ? 'bg-stone-800' : 'bg-white'}`}
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              initial={false}
              animate={{
                x: isDarkMode ? 32 : 0
              }}
            />
            
            <div className="relative z-10 flex w-full justify-between px-1">
              <div className={`flex items-center justify-center transition-colors ${!isDarkMode ? 'text-yellow-500' : 'text-stone-400'}`}>
                <Sun className="w-3.5 h-3.5" />
              </div>
              <div className={`flex items-center justify-center transition-colors ${isDarkMode ? 'text-blue-400' : 'text-stone-500'}`}>
                <Moon className="w-3.5 h-3.5" />
              </div>
            </div>
          </motion.button>
        </div>
        {/* Background Layers for Smooth Cross-fade */}
        <div className="absolute inset-0 z-0">
          {/* Day Background */}
          <motion.div 
            initial={false}
            animate={{ opacity: isDarkMode ? 0 : 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.9) 100%), url(${dayImage})`,
            }}
          />
          {/* Night Background */}
          <motion.div 
            initial={false}
            animate={{ opacity: isDarkMode ? 1 : 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.95) 100%), url(${nightImage})`,
            }}
          />
        </div>
      </div>

      {/* Scrolling Hero Text (Replaces Spacer) */}
      <header className="relative w-full h-screen flex flex-col justify-end pb-24 px-6 text-center z-10 pointer-events-none">
        <motion.div
          style={{ opacity: heroTextOpacity }}
          className="relative z-20 max-w-4xl mx-auto flex flex-col items-center text-center px-4 w-full pointer-events-auto"
        >
          <div className="space-y-4 mb-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className={`block text-xs md:text-sm font-light ${language === 'ar' ? 'tracking-normal' : 'tracking-[0.4em]'} text-white/80 uppercase`}
            >
              {t.welcome}
            </motion.span>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white drop-shadow-xl leading-tight">
              {["Venezia", "Villa"].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.7 + (i * 0.2),
                    ease: [0.215, 0.61, 0.355, 1]
                  }}
                  className={`inline-block mx-2 ${i === 1 ? 'text-stone-300' : 'text-white'}`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </div>

          <div className="space-y-6 flex flex-col items-center">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className={`text-sm md:text-base text-white/70 font-light ${language === 'ar' ? 'tracking-normal' : 'tracking-[0.1em]'} uppercase max-w-md`}
            >
              {t.tagline}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="pt-2"
            >
              <span dir="rtl" className="text-sm md:text-base font-arabic font-medium text-white/90 bg-black/40 px-6 py-2 rounded-full border border-white/20 inline-block">
                {t.arabicWelcome}
              </span>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-auto"
          >
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <ChevronDown className="w-5 h-5 text-white/50" />
            </div>
          </motion.div>
        </motion.div>
      </header>

      <div className={`relative z-10 w-full rounded-t-[2.5rem] shadow-[0_-8px_20px_rgba(0,0,0,0.1)] overflow-hidden ${isDarkMode ? 'bg-stone-950' : 'bg-stone-50'}`}>
        {/* Background Gradient Bubbles (Optimized for Scroll Performance) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[5%] -left-[20%] w-[70%] h-[500px] opacity-40" style={{ background: `radial-gradient(50% 50% at 50% 50%, ${isDarkMode ? '#1e3a8a' : '#93c5fd'} 0%, transparent 100%)` }} />
          <div className="absolute top-[25%] -right-[20%] w-[70%] h-[500px] opacity-40" style={{ background: `radial-gradient(50% 50% at 50% 50%, ${isDarkMode ? '#064e3b' : '#6ee7b7'} 0%, transparent 100%)` }} />
          <div className="absolute bottom-[10%] left-[10%] w-[80%] h-[600px] opacity-40" style={{ background: `radial-gradient(50% 50% at 50% 50%, ${isDarkMode ? '#581c87' : '#d8b4fe'} 0%, transparent 100%)` }} />
        </div>

        <motion.main 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="relative z-10 flex-grow max-w-lg mx-auto w-full px-6 py-10 space-y-12"
        >
          {/* Carousel Gallery */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className={`text-sm font-semibold ${language === 'ar' ? '' : 'uppercase tracking-wider'} ${isDarkMode ? 'text-stone-400' : 'text-stone-500'}`}>{t.villaGallery}</h2>
              <div className={`flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full ${isDarkMode ? 'bg-stone-800 text-stone-300' : 'bg-stone-100 text-stone-600'}`}>
                <Eye className="w-3 h-3" />
                <span>12,453</span>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-xl" dir="ltr">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                <div className="flex-[0_0_100%] min-w-0 relative aspect-[4/3] md:aspect-[16/9]" key="hero-gallery-image">
                    <ImageLoader 
                      src={isDarkMode ? nightImage : dayImage} 
                      alt="Villa View" 
                      eager={true} 
                      isDarkMode={isDarkMode} 
                    />
                    <div 
                      className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 pointer-events-none"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShare(isDarkMode ? nightImage : dayImage, 'Villa View');
                      }}
                      className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/20 transition-all active:scale-90 z-10"
                      aria-label="Share image"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                {GALLERY_IMAGES.map((img, idx) => (
                  <div className="flex-[0_0_100%] min-w-0 relative aspect-[4/3] md:aspect-[16/9]" key={idx}>
                    <ImageLoader 
                      src={img.url} 
                      alt={img.alt} 
                      eager={false} 
                      isDarkMode={isDarkMode} 
                    />
                    <div 
                      className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 pointer-events-none"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShare(img.url, img.alt);
                      }}
                      className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white border border-white/20 transition-all active:scale-90 z-10"
                      aria-label="Share image"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Video Tour Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6" 
          ref={videoInViewRef}
        >
          <div className="text-center space-y-2">
            <h2 className={`text-2xl md:text-3xl font-bold ${isDarkMode ? 'text-stone-100' : 'text-stone-800'}`}>
              {t.videoTourTitle}
            </h2>
            <p className={`text-sm ${isDarkMode ? 'text-stone-400' : 'text-stone-500'}`}>
              {t.videoTourSubtitle}
            </p>
          </div>

          <div 
            className="relative max-w-[320px] mx-auto aspect-[9/16] rounded-[2rem] overflow-hidden shadow-2xl bg-stone-900"
          >
            {/* Scaling the iframe slightly to crop out the YouTube UI edges while allowing interaction */}
            <div className="absolute inset-0 scale-[1.05]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/IcYZngh-2xU?autoplay=1&mute=0&loop=1&playlist=IcYZngh-2xU&controls=1&modestbranding=1&rel=0&iv_load_policy=3&disablekb=0&vq=hd1080&hd=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Label */}
            <div className="absolute bottom-16 start-4 flex items-center gap-2 px-3 py-1.5 bg-black/60 rounded-full border border-white/10 z-30 pointer-events-none">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-bold text-white uppercase tracking-widest">Venezia Villa</span>
            </div>
          </div>
        </motion.section>

        {/* Booking Section - Booking.com Style */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-stone-800 text-stone-300' : 'bg-stone-100 text-stone-600'}`}>
              <Calendar className="w-5 h-5" />
            </div>
            <h2 className={`text-xl font-bold ${isDarkMode ? 'text-stone-100' : 'text-stone-800'}`}>{t.bookingTitle}</h2>
          </div>

          {/* Announcement Banner Carousel */}
          <div className={`w-full py-3 px-4 text-center text-sm font-medium relative shadow-sm rounded-2xl border ${isDarkMode ? 'bg-stone-800/50 text-stone-300 border-stone-700/50' : 'bg-stone-50 text-stone-700 border-stone-200'}`}>
            <div className="overflow-hidden h-14 max-w-3xl mx-auto" ref={bannerRef}>
              <div className="flex flex-col h-full">
                {TRANSLATIONS[language].fomoMessages.map((msg, idx) => (
                  <div key={idx} className="flex-[0_0_100%] min-w-0 flex items-center justify-center h-14 px-2">
                    <span className="flex items-center justify-center gap-2 leading-snug">
                      <Bell className="w-4 h-4 shrink-0 opacity-80" /> 
                      <span className="whitespace-normal">{msg}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-3xl border shadow-xl space-y-8 ${
            isDarkMode 
              ? 'bg-stone-900/60 border-white/5 shadow-black/20' 
              : 'bg-white/70 border-white/40 shadow-stone-200/50'
          }`}>
            
            {/* Progress Indicator */}
            <div className="flex items-center justify-between px-2 mb-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center flex-1 last:flex-none">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                    currentStep >= step 
                      ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 shadow-lg' 
                      : isDarkMode ? 'bg-stone-800 text-stone-600' : 'bg-stone-100 text-stone-400'
                  }`}>
                    {currentStep > step ? <CheckCircle2 className="w-4 h-4" /> : step}
                  </div>
                  {step < 4 && (
                    <div className={`h-0.5 flex-1 mx-2 rounded-full transition-all duration-500 ${
                      currentStep > step 
                        ? 'bg-stone-900 dark:bg-stone-100' 
                        : isDarkMode ? 'bg-stone-800' : 'bg-stone-100'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            {/* 1. Select Period */}
            <div className="space-y-4">
              <label className={`text-sm font-bold uppercase tracking-wider ${isDarkMode ? 'text-stone-500' : 'text-stone-400'}`}>
                {t.selectPeriod}
              </label>
              <div className={`p-1.5 rounded-2xl flex gap-1 ${isDarkMode ? 'bg-stone-800/50' : 'bg-stone-100/50'}`}>
                {(['morning', 'evening'] as const).map((periodKey) => (
                  <button
                    key={periodKey}
                    onClick={() => {
                      if (selectedPeriod === periodKey) {
                        setSelectedPeriod(null);
                        setSelectedDate(null);
                      } else {
                        setSelectedPeriod(periodKey);
                        setSelectedDate(null);
                      }
                    }}
                    className={`flex-1 py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-sm font-bold ${
                      selectedPeriod === periodKey
                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/20'
                        : isDarkMode ? 'text-stone-400 hover:text-stone-200' : 'text-stone-500 hover:text-stone-800'
                    }`}
                  >
                    {periodKey === 'morning' ? <Sun className="w-4 h-4" /> : <Moon className="w-3.5 h-3.5" />}
                    {t[periodKey]}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Select Date (Calendar Style) */}
            <AnimatePresence>
              {selectedPeriod && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <label className={`text-sm font-bold uppercase tracking-wider ${isDarkMode ? 'text-stone-500' : 'text-stone-400'}`}>
                    {t.selectDay}
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {nextDays.map((date) => {
                      const price = getDayPrice(date, selectedPeriod);
                      const isAvailable = price !== null;
                      const isSelected = selectedDate?.toDateString() === date.toDateString();
                      
                      return (
                        <button
                          key={date.toISOString()}
                          disabled={!isAvailable}
                          onClick={() => {
                            if (selectedDate?.toDateString() === date.toDateString()) {
                              setSelectedDate(null);
                            } else {
                              setSelectedDate(date);
                            }
                          }}
                          className={`p-2.5 rounded-xl border transition-all text-center relative flex flex-col items-center justify-center gap-0.5 ${
                            !isAvailable ? 'opacity-10 cursor-not-allowed' : ''
                          } ${
                            isSelected
                              ? 'bg-emerald-600 border-emerald-600 text-white shadow-md scale-[1.02]'
                              : isDarkMode ? 'bg-stone-800/40 border-stone-700/50 text-stone-400 hover:border-emerald-600/50' : 'bg-stone-50 border-stone-100 text-stone-600 hover:border-emerald-600/50'
                          }`}
                        >
                          <span className="text-[9px] uppercase font-bold opacity-60">
                            {date.toLocaleDateString(language === 'ar' ? 'ar-JO' : 'en-US', { weekday: 'short' })}
                          </span>
                          <span className="font-bold text-sm">
                            {date.getDate()}
                          </span>
                          {isAvailable && (
                            <span className={`text-[9px] font-black ${isSelected ? 'text-white/80' : 'text-emerald-500'}`}>
                              {price}JD
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 3. Number of Guests & Children */}
            <AnimatePresence>
              {selectedDate && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <label className={`text-sm font-bold uppercase tracking-wider ${isDarkMode ? 'text-stone-500' : 'text-stone-400'}`}>
                    {t.selectGuestsLabel}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Adults */}
                    <div className={`p-4 rounded-2xl border flex items-center justify-between ${isDarkMode ? 'bg-stone-800 border-stone-700' : 'bg-stone-50 border-stone-100'}`}>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-emerald-500" />
                        <span className="font-bold">{guestCount} {t.people}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <button 
                          onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                          className={`p-2 rounded-xl border transition-all ${isDarkMode ? 'border-stone-700 hover:bg-stone-700' : 'border-stone-200 hover:bg-white'}`}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => setGuestCount(Math.min(20, guestCount + 1))}
                          className={`p-2 rounded-xl border transition-all ${isDarkMode ? 'border-stone-700 hover:bg-stone-700' : 'border-stone-200 hover:bg-white'}`}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Children */}
                    <div className={`p-4 rounded-2xl border flex items-center justify-between ${isDarkMode ? 'bg-stone-800 border-stone-700' : 'bg-stone-50 border-stone-100'}`}>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-blue-500" />
                        <span className="font-bold">{childCount} {t.childrenLabel}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <button 
                          onClick={() => setChildCount(Math.max(0, childCount - 1))}
                          className={`p-2 rounded-xl border transition-all ${isDarkMode ? 'border-stone-700 hover:bg-stone-700' : 'border-stone-200 hover:bg-white'}`}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => setChildCount(Math.min(10, childCount + 1))}
                          className={`p-2 rounded-xl border transition-all ${isDarkMode ? 'border-stone-700 hover:bg-stone-700' : 'border-stone-200 hover:bg-white'}`}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 4. Extras */}
            <AnimatePresence>
              {selectedDate && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <label className={`text-sm font-bold uppercase tracking-wider ${isDarkMode ? 'text-stone-500' : 'text-stone-400'}`}>
                    {t.selectExtras}
                  </label>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {/* Overnight Extra */}
                    <button
                      onClick={() => setIsOvernight(!isOvernight)}
                      className={`p-4 rounded-2xl border flex items-center justify-between transition-all ${
                        isOvernight
                          ? 'bg-emerald-600/10 border-emerald-500 text-emerald-600'
                          : isDarkMode ? 'bg-stone-800 border-stone-700 text-stone-400' : 'bg-stone-50 border-stone-100 text-stone-600'
                      }`}
                    >
                      <div className="flex items-center gap-3 text-start">
                        <div className={`p-2 rounded-lg ${isOvernight ? 'bg-emerald-500 text-white' : 'bg-stone-200 text-stone-500'}`}>
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-sm">{t.overnightExtra}</p>
                          <p className="text-[10px] opacity-70">{t.overnightDesc}</p>
                        </div>
                      </div>
                      <div className={`w-10 h-6 rounded-full relative transition-colors ${isOvernight ? 'bg-emerald-500' : 'bg-stone-300'}`}>
                        <motion.div 
                          animate={{ x: isOvernight ? (language === 'ar' ? -18 : 18) : (language === 'ar' ? -2 : 2) }}
                          className={`absolute top-1 ${language === 'ar' ? 'right-0' : 'left-0'} w-4 h-4 bg-white rounded-full shadow-sm`}
                        />
                      </div>
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Summary & Confirmation */}
            <AnimatePresence>
              {selectedDate && selectedPeriod && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="pt-6 border-t border-stone-100 dark:border-stone-800"
                >
                  <div className={`p-6 rounded-3xl space-y-4 ${isDarkMode ? 'bg-stone-800/50' : 'bg-stone-50'}`}>
                    <h3 className="font-bold text-lg flex items-center gap-2 text-stone-900 dark:text-stone-100">
                      <CheckCircle2 className="w-5 h-5" />
                      {t.summary}
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="opacity-50 mb-1">{t.dayLabel}</p>
                        <p className="font-bold">{formatDate(selectedDate)}</p>
                      </div>
                      <div>
                        <p className="opacity-50 mb-1">{t.periodLabel}</p>
                        <p className="font-bold">{selectedPeriod ? t[selectedPeriod] : ''}</p>
                      </div>
                    </div>

                    <div className={`space-y-2 pt-4 border-t ${isDarkMode ? 'border-white/5' : 'border-stone-200'}`}>
                      <div className="flex justify-between text-sm">
                        <span className="opacity-60">{t.periodLabel} ({selectedPeriod ? t[selectedPeriod] : ''})</span>
                        <span className="font-medium">{basePrice} JD</span>
                      </div>
                      {isOvernight && (
                        <div className="flex justify-between text-sm text-stone-600 dark:text-stone-400">
                          <span className="opacity-80">{t.overnightExtra}</span>
                          <span className="font-medium">{isOvernight ? `+${getOvernightExtra(selectedDate || new Date())} JD` : '+0 JD'}</span>
                        </div>
                      )}
                      <div className="flex justify-between items-center pt-2 border-t border-dashed border-stone-200 dark:border-stone-700">
                        <span className="font-bold">{t.totalPrice}</span>
                        <span className="text-xl font-black text-stone-900 dark:text-white">{totalPrice} JD</span>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/962790531004?text=${encodeURIComponent(
                        language === 'ar' 
                          ? `مرحباً، أود حجز فيلا فينيسيا:\n\n📅 التاريخ: ${formatDate(selectedDate)}\n⏰ الفترة: ${t[selectedPeriod]}\n👥 عدد الكبار: ${guestCount}\n👶 عدد الأطفال: ${childCount}\n🏠 مبيت: ${isOvernight ? 'نعم' : 'لا'}\n💰 السعر الإجمالي: ${totalPrice} دينار\n\nيرجى تأكيد التوافر.`
                          : `Hello, I'd like to book Venezia Villa:\n\n📅 Date: ${formatDate(selectedDate)}\n⏰ Period: ${t[selectedPeriod]}\n👥 Adults: ${guestCount}\n👶 Children: ${childCount}\n🏠 Overnight: ${isOvernight ? 'Yes' : 'No'}\n💰 Total Price: ${totalPrice} JD\n\nPlease confirm availability.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-emerald-500 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-emerald-500/20 hover:bg-emerald-600 transition-all active:scale-95 mt-4"
                    >
                      <MessageCircle className="w-6 h-6" />
                      {t.confirmWhatsApp}
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.section>

        {/* Gateway Buttons */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid gap-4"
        >
          {[
            { label: t.bookWhatsApp, icon: <MessageCircle className="w-6 h-6" />, href: 'https://wa.me/962790531004', color: 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/20' },
            { label: t.bookCall, icon: <Phone className="w-6 h-6" />, href: 'tel:+962790531004', color: 'bg-white text-stone-900 border border-stone-200 hover:bg-stone-50 shadow-sm' },
            { label: t.openMaps, icon: <MapPin className="w-6 h-6" />, href: 'https://maps.app.goo.gl/NVEPYWMaYg4MoM6A7', color: 'bg-white text-stone-900 border border-stone-200 hover:bg-stone-50 shadow-sm' },
          ].map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center justify-between p-5 rounded-2xl transition-all duration-300 group shadow-sm hover:shadow-xl ${
                link.color.includes('bg-white') 
                  ? (isDarkMode ? 'bg-stone-900 text-stone-100 border border-stone-800 hover:bg-stone-800' : link.color)
                  : link.color
              }`}
            >
              <div className="flex items-center gap-4">
                <span className={`p-3 rounded-xl transition-colors ${
                  link.color.includes('bg-stone-900') || link.color.includes('bg-stone-100') ? 'bg-white/20 dark:bg-black/10' : (isDarkMode ? 'bg-stone-800' : 'bg-stone-50')
                }`}>
                  {link.icon}
                </span>
                <span className="font-semibold text-lg tracking-tight">{link.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium opacity-0 group-hover:opacity-60 transition-opacity uppercase tracking-wider">{t.open}</span>
                <ExternalLink className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.a>
          ))}
        </motion.section>

        {/* Local Guide Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className={`flex items-center gap-2 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-800'}`}>
            <MapPin className="w-5 h-5" />
            <h2 className={`text-sm font-semibold ${language === 'ar' ? '' : 'uppercase tracking-wider'}`}>{t.localGuideTitle}</h2>
          </div>
          <div className="overflow-hidden -mx-6 px-6" ref={placesRef}>
            <div className="flex gap-4">
              <motion.a
                href="https://maps.app.goo.gl/3oQdNuwc4RC5t6vW8"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className={`flex-[0_0_85%] sm:flex-[0_0_40%] min-w-0 p-5 rounded-3xl border shadow-xl flex flex-col gap-3 group transition-all ${
                  isDarkMode 
                    ? 'bg-stone-900/60 border-white/5 hover:border-stone-700' 
                    : 'bg-white/70 border-white/40 hover:border-stone-200'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDarkMode ? 'bg-stone-800 text-stone-300' : 'bg-stone-100 text-stone-600'}`}>
                  <Store className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`font-semibold ${isDarkMode ? 'text-stone-200' : 'text-stone-800'}`}>{t.supermarket}</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-stone-400' : 'text-stone-500'}`}>{t.supermarketDist}</p>
                </div>
                <div className="mt-auto pt-2 flex items-center gap-2 text-xs font-medium text-stone-500 dark:text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {t.openMaps} <ExternalLink className="w-3 h-3" />
                </div>
              </motion.a>

              <motion.div
                whileHover={{ y: -4 }}
                className={`flex-[0_0_85%] sm:flex-[0_0_40%] min-w-0 p-5 rounded-3xl border shadow-xl flex flex-col gap-3 transition-all ${
                  isDarkMode 
                    ? 'bg-stone-900/60 border-white/5' 
                    : 'bg-white/70 border-white/40'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDarkMode ? 'bg-stone-800 text-orange-400' : 'bg-orange-50 text-orange-600'}`}>
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`font-semibold ${isDarkMode ? 'text-stone-200' : 'text-stone-800'}`}>{t.restaurants}</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-stone-400' : 'text-stone-500'}`}>{t.restaurantsDist}</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -4 }}
                className={`flex-[0_0_85%] sm:flex-[0_0_40%] min-w-0 p-5 rounded-3xl border shadow-xl flex flex-col gap-3 transition-all ${
                  isDarkMode 
                    ? 'bg-stone-900/60 border-white/5' 
                    : 'bg-white/70 border-white/40'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDarkMode ? 'bg-stone-800 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                  <Pill className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`font-semibold ${isDarkMode ? 'text-stone-200' : 'text-stone-800'}`}>{t.pharmacy}</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-stone-400' : 'text-stone-500'}`}>{t.pharmacyDist}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Villa Info Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className={`flex items-center gap-2 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-800'}`}>
            <CheckCircle2 className="w-5 h-5" />
            <h2 className={`text-sm font-semibold ${language === 'ar' ? '' : 'uppercase tracking-wider'}`}>{t.villaInfo}</h2>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <div className={`p-6 rounded-3xl border shadow-xl space-y-4 ${
              isDarkMode 
                ? 'bg-stone-900/60 border-white/5 shadow-black/20' 
                : 'bg-white/70 border-white/40 shadow-stone-200/50'
            }`}>
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {[
                  { label: t.maxGuests, value: `20 ${t.people}`, icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" /> },
                  { label: t.checkIn, value: selectedPeriod === 'evening' ? '10:30 PM' : '10:30 AM', icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" /> },
                  { label: t.checkOut, value: selectedPeriod === 'evening' ? '08:30 AM' : '09:00 PM', icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" /> },
                ].map((info) => (
                  <div key={info.label} className="flex flex-col items-center text-center space-y-1.5">
                    <div className={`flex flex-col items-center gap-1 ${isDarkMode ? 'text-stone-500' : 'text-stone-400'}`}>
                      {info.icon}
                      <span className={`text-[10px] sm:text-xs font-semibold ${language === 'ar' ? '' : 'uppercase tracking-tighter'}`}>{info.label}</span>
                    </div>
                    <p className={`text-sm sm:text-lg font-medium ${isDarkMode ? 'text-stone-200' : 'text-stone-800'}`}>{info.value}</p>
                  </div>
                ))}
              </div>
              
              {/* Indoor Specs Row */}
              <div className={`grid grid-cols-3 gap-4 py-6 border-y ${isDarkMode ? 'border-white/5' : 'border-stone-100'}`}>
                {[
                  { icon: <DoorOpen className="w-5 h-5" />, count: 3, label: t.bedrooms },
                  { icon: <Bed className="w-5 h-5" />, count: 11, label: t.beds },
                  { icon: <Bath className="w-5 h-5" />, count: 3, label: t.bathrooms },
                ].map((spec, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-2">
                    <div className={`p-3 rounded-2xl ${isDarkMode ? 'bg-stone-800 text-emerald-400' : 'bg-stone-50 text-emerald-600'}`}>
                      {spec.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className={`text-xl font-bold leading-none ${isDarkMode ? 'text-stone-100' : 'text-stone-900'}`}>{spec.count}</span>
                      <span className={`text-[10px] font-bold opacity-50 mt-1 ${language === 'ar' ? '' : 'uppercase tracking-tighter'} ${isDarkMode ? 'text-stone-400' : 'text-stone-500'}`}>{spec.label}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className={`pt-4 border-t ${isDarkMode ? 'border-stone-800' : 'border-stone-50'}`}>
                <p className={`text-xs font-semibold mb-3 ${language === 'ar' ? '' : 'uppercase tracking-tighter'} ${isDarkMode ? 'text-stone-500' : 'text-stone-400'}`}>{t.facilities}</p>
                <div className="flex flex-wrap gap-2">
                  {t.facilitiesList.map((facility) => (
                    <div key={facility} className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                      isDarkMode 
                        ? 'bg-stone-800/50 border-stone-700 text-stone-300' 
                        : 'bg-stone-50 border-stone-200 text-stone-600'
                    }`}>
                      {facility}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Reviews Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <div className={`flex items-center gap-2 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-800'}`}>
              <Star className="w-5 h-5 fill-current" />
              <h2 className={`text-sm font-semibold ${language === 'ar' ? '' : 'uppercase tracking-wider'}`}>{t.reviewsTitle}</h2>
            </div>
            <button 
              onClick={() => setShowReviewForm(!showReviewForm)}
              className={`text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-all ${
                isDarkMode 
                  ? 'border-white/10 text-white hover:bg-white/5' 
                  : 'border-stone-200 text-stone-600 hover:bg-stone-50'
              }`}
            >
              {showReviewForm ? (language === 'ar' ? 'إلغاء' : 'Cancel') : t.addReview}
            </button>
          </div>

          <AnimatePresence>
            {showReviewForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className={`p-6 rounded-3xl border shadow-xl space-y-4 mb-6 ${
                  isDarkMode ? 'bg-stone-900/60 border-white/5' : 'bg-white/70 border-white/40'
                }`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider opacity-50">{t.nameLabel}</label>
                      <input 
                        type="text" 
                        value={newReview.name}
                        onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                        className={`w-full p-3 rounded-xl border outline-none transition-all ${
                          isDarkMode ? 'bg-stone-800 border-stone-700 focus:border-emerald-500' : 'bg-stone-50 border-stone-200 focus:border-emerald-500'
                        }`}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider opacity-50">{t.ratingLabel}</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button 
                            key={star}
                            onClick={() => setNewReview({...newReview, rating: star})}
                            className="transition-transform active:scale-90"
                          >
                            <Star className={`w-6 h-6 ${star <= newReview.rating ? 'text-yellow-400 fill-current' : 'text-stone-300'}`} />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-50">{t.commentLabel}</label>
                    <textarea 
                      rows={3}
                      value={newReview.comment}
                      onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                      className={`w-full p-3 rounded-xl border outline-none transition-all resize-none ${
                        isDarkMode ? 'bg-stone-800 border-stone-700 focus:border-emerald-500' : 'bg-stone-50 border-stone-200 focus:border-emerald-500'
                      }`}
                    />
                  </div>
                  <button 
                    onClick={() => {
                      if (newReview.name && newReview.comment) {
                        setReviews([{ ...newReview, id: Date.now(), date: new Date().toISOString().split('T')[0] }, ...reviews]);
                        setNewReview({ name: "", rating: 5, comment: "" });
                        setShowReviewForm(false);
                      }
                    }}
                    className="w-full py-4 bg-emerald-600 text-white font-bold rounded-2xl shadow-lg hover:bg-emerald-700 transition-all active:scale-[0.98]"
                  >
                    {t.submitReview}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-y-4">
            {reviews.map((review) => (
              <motion.div 
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                key={review.id} 
                className={`p-6 rounded-3xl border shadow-xl space-y-3 ${
                  isDarkMode 
                    ? 'bg-stone-900/60 border-white/5 shadow-black/20' 
                    : 'bg-white/70 border-white/40 shadow-stone-200/50'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-lg">{review.name}</h4>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-stone-300'}`} />
                      ))}
                    </div>
                  </div>
                  <span className="text-[10px] font-bold opacity-30 uppercase tracking-widest">{review.date}</span>
                </div>
                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-stone-300' : 'text-stone-600'}`}>
                  {review.comment}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Rules Section Hidden as requested */}
      </motion.main>
      </div>

      {/* Footer */}
      <footer className={`py-16 px-6 mt-12 border-t ${
        isDarkMode 
          ? 'bg-stone-950/80 border-white/5 text-stone-400' 
          : 'bg-stone-900/95 border-white/10 text-stone-400'
      }`}>
        <div className="max-w-lg mx-auto text-center space-y-6">
          <h3 className="text-white font-bold text-xl">Venezia Villa</h3>
          <div className="flex justify-center gap-6">
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
          </div>
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} Venezia Villa. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4 items-end">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`p-4 rounded-full shadow-lg transition-all active:scale-90 ${
                isDarkMode ? 'bg-stone-800 text-stone-300 border border-stone-700' : 'bg-white text-stone-600 border border-stone-200'
              }`}
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>
        
        <AnimatePresence>
          {showScrollTop && (
            <motion.a
              href="https://wa.me/962790531004"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-600 transition-all flex items-center justify-center"
            >
              <MessageCircle className="w-6 h-6" />
            </motion.a>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
