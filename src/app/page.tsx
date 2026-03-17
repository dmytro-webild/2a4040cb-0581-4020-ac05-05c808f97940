"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitDualMedia from "@/components/sections/hero/HeroSplitDualMedia";
import TextAbout from "@/components/sections/about/TextAbout";
import FeatureCardSeven from "@/components/sections/feature/FeatureCardSeven";
import ProductCardThree from "@/components/sections/product/ProductCardThree";
import PricingCardNine from "@/components/sections/pricing/PricingCardNine";
import MetricCardTen from "@/components/sections/metrics/MetricCardTen";
import TestimonialCardTen from "@/components/sections/testimonial/TestimonialCardTen";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterBase from "@/components/sections/footer/FooterBase";
import { Star, Building2, Sparkles, Home, TrendingDown, Award, MessageCircle, HelpCircle, Phone } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="mediumLarge"
      sizing="mediumSizeLargeTitles"
      background="blurBottom"
      cardStyle="glass-depth"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="InterContinental Tashkent"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Rooms", id: "product" },
            { name: "Amenities", id: "feature" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Book Now", href: "#contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDualMedia
          title="Experience Elegance in the Heart of Tashkent"
          description="Welcome to InterContinental Tashkent, where luxury meets comfort. Enjoy world-class amenities, impeccable service, and unforgettable moments in Uzbekistan's most prestigious hotel."
          tag="5-Star Luxury Hotel"
          tagIcon={Star}
          tagAnimation="slide-up"
          rating={4.8}
          ratingText="4.8 ⭐ (507 Reviews)"
          background={{ variant: "plain" }}
          buttons={[
            { text: "Book Now", href: "#contact" },
            { text: "View Rooms", href: "#product" }
          ]}
          buttonAnimation="slide-up"
          mediaItems={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/abandoned-sanitarium_181624-18703.jpg?_wi=1",              imageAlt: "InterContinental Tashkent luxury hotel exterior and skyline"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-caucasian-female-with-long-blonde-hair-nice-face-bright-earrings-white-suit_132075-9621.jpg?_wi=1",              imageAlt: "Premium hotel bedroom with modern luxury design"
            }
          ]}
          mediaAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="About Our Hotel"
          tagIcon={Building2}
          tagAnimation="blur-reveal"
          title="Welcome to InterContinental Tashkent - Your Gateway to Luxury"
          useInvertedBackground={false}
          buttons={[{ text: "Discover Our Story", href: "#feature" }]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardSeven
          title="World-Class Amenities & Services"
          description="Discover the premium facilities and services that make InterContinental Tashkent the ideal choice for discerning travelers."
          tag="Premium Facilities"
          tagIcon={Sparkles}
          tagAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          features={[
            {
              id: 1,
              title: "High-Speed Wi-Fi",              description: "Stay connected with complimentary high-speed internet throughout the hotel and all rooms.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-asian-woman-relaxing-around-swimming-pool-resort-hotel-vacation_74190-16337.jpg?_wi=1",              imageAlt: "luxury hotel swimming pool resort spa"
            },
            {
              id: 2,
              title: "Gourmet Breakfast",              description: "Start your day with our international buffet breakfast featuring local and global cuisine.",              imageSrc: "http://img.b2bpic.net/free-photo/people-having-dinner-luxurious-restaurants_23-2151081876.jpg?_wi=1",              imageAlt: "luxury hotel restaurant elegant dining"
            },
            {
              id: 3,
              title: "Complimentary Parking",              description: "Secure underground parking available for all guests at no additional charge.",              imageSrc: "http://img.b2bpic.net/free-photo/spa-composition-with-towels-wooden-plate-blurred-background_169016-27521.jpg?_wi=1",              imageAlt: "luxury hotel spa wellness center"
            },
            {
              id: 4,
              title: "Olympic-Size Pool",              description: "Relax in our pristine swimming pool and spa facilities with premium amenities.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-asian-woman-relaxing-around-swimming-pool-resort-hotel-vacation_74190-16337.jpg?_wi=2",              imageAlt: "luxury hotel swimming pool resort spa"
            },
            {
              id: 5,
              title: "Climate Control",              description: "Individual air conditioning and heating systems in every room for ultimate comfort.",              imageSrc: "http://img.b2bpic.net/free-photo/people-having-dinner-luxurious-restaurants_23-2151081876.jpg?_wi=2",              imageAlt: "luxury hotel restaurant elegant dining"
            },
            {
              id: 6,
              title: "24/7 Concierge",              description: "Our dedicated concierge team is available round-the-clock to assist with all your needs.",              imageSrc: "http://img.b2bpic.net/free-photo/spa-composition-with-towels-wooden-plate-blurred-background_169016-27521.jpg?_wi=2",              imageAlt: "luxury hotel spa wellness center"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardThree
          title="Luxury Room Accommodations"
          description="Choose from our carefully curated selection of premium rooms, each designed to provide maximum comfort and elegance."
          tag="Premium Rooms"
          tagIcon={Home}
          tagAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          products={[
            {
              id: "deluxe",              name: "Deluxe Room",              price: "3,500,000 UZS",              imageSrc: "http://img.b2bpic.net/free-photo/pillow-bed-decoration-bedroom_1339-7403.jpg?_wi=1",              imageAlt: "Luxurious deluxe hotel room with king bed"
            },
            {
              id: "suite",              name: "Executive Suite",              price: "5,200,000 UZS",              imageSrc: "http://img.b2bpic.net/free-photo/full-length-stock-photo-attractive-blonde-caucasian-adult-woman-beige-heels-green-formal-dress-sitting-grey-modern-couch-table-with-red-roses_132075-8159.jpg",              imageAlt: "Spacious executive suite with living area"
            },
            {
              id: "standard",              name: "Standard Room",              price: "2,800,000 UZS",              imageSrc: "http://img.b2bpic.net/free-photo/lamp-comfort-bed-pillow-fabric_1203-4833.jpg",              imageAlt: "Comfortable standard room with modern amenities"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardNine
          title="Best Price Guarantee"
          description="We offer competitive rates across multiple platforms. Book directly with us for exclusive benefits and the best value."
          tag="Price Comparison"
          tagIcon={TrendingDown}
          tagAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          plans={[
            {
              id: "official",              title: "Official Website",              price: "3,500,000",              period: "UZS/Night",              features: ["Free Cancellation", "Complimentary Breakfast", "Late Checkout"],
              button: { text: "Book Now", href: "#contact" },
              imageSrc: "http://img.b2bpic.net/free-photo/abandoned-sanitarium_181624-18703.jpg?_wi=2",              imageAlt: "InterContinental Tashkent exterior"
            },
            {
              id: "tripcom",              title: "Trip.com",              price: "3,650,000",              period: "UZS/Night",              features: ["Standard Terms", "No Extras Included", "Platform Fees Apply"],
              button: { text: "View on Trip.com", href: "#" },
              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-caucasian-female-with-long-blonde-hair-nice-face-bright-earrings-white-suit_132075-9621.jpg?_wi=2",              imageAlt: "Hotel room preview"
            },
            {
              id: "booking",              title: "Booking.com",              price: "3,700,000",              period: "UZS/Night",              features: ["Flexible Cancellation", "No Breakfast Included", "Booking.com Fees"],
              button: { text: "View on Booking.com", href: "#" },
              imageSrc: "http://img.b2bpic.net/free-photo/pillow-bed-decoration-bedroom_1339-7403.jpg?_wi=2",              imageAlt: "Deluxe room"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTen
          title="Why Choose InterContinental Tashkent"
          description="Our commitment to excellence is reflected in every metric."
          tag="Our Excellence"
          tagIcon={Award}
          tagAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="scale-rotate"
          metrics={[
            {
              id: "guests",              title: "Satisfied Guests",              subtitle: "Since Opening",              category: "Travelers",              value: "50,000+"
            },
            {
              id: "rooms",              title: "Luxury Rooms",              subtitle: "Total Available",              category: "Accommodations",              value: "220"
            },
            {
              id: "rating",              title: "Average Rating",              subtitle: "Guest Reviews",              category: "Excellence",              value: "4.8★"
            },
            {
              id: "awards",              title: "International Awards",              subtitle: "Hotel Recognition",              category: "Honors",              value: "15+"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTen
          title="Guest Testimonials"
          description="Hear from our valued guests about their memorable experiences at InterContinental Tashkent."
          tag="Guest Reviews"
          tagIcon={MessageCircle}
          tagAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={true}
          testimonials={[
            {
              id: "1",              title: "Outstanding Service",              quote: "The staff at InterContinental Tashkent provided exceptional service throughout my stay. Every detail was perfectly attended to.",              name: "Ahmed Hassan",              role: "Business Executive",              imageSrc: "http://img.b2bpic.net/free-photo/senior-traveler_1098-14549.jpg",              imageAlt: "luxury hotel guest professional portrait"
            },
            {
              id: "2",              title: "Perfect for Families",              quote: "We had an amazing family vacation! The kids loved the pool, and the restaurant options were fantastic. Will definitely return.",              name: "Priya Sharma",              role: "Travel Enthusiast",              imageSrc: "http://img.b2bpic.net/free-photo/hotel-guest-using-modern-device_482257-81626.jpg",              imageAlt: "luxury hotel guest satisfied woman"
            },
            {
              id: "3",              title: "Luxury at Its Best",              quote: "Stayed in the Executive Suite and was blown away by the elegance and comfort. The views of Tashkent are breathtaking.",              name: "Michael Johnson",              role: "International Businessman",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-commuter-standing-counter-while-attendant-checking-his-passport_107420-95792.jpg",              imageAlt: "luxury hotel guest business professional"
            },
            {
              id: "4",              title: "Unforgettable Experience",              quote: "From check-in to check-out, everything was seamless and luxurious. The spa and pool are world-class facilities.",              name: "Elena Volkov",              role: "Luxury Travel Advisor",              imageSrc: "http://img.b2bpic.net/free-photo/three-friends-home_1098-12588.jpg",              imageAlt: "luxury hotel guest family vacation"
            },
            {
              id: "5",              title: "Best Hotel in Tashkent",              quote: "I've stayed at many luxury hotels worldwide, and InterContinental Tashkent stands among the finest. Highly recommended!",              name: "Sarah Mitchell",              role: "Hotel Critic",              imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-standing-airport-terminal_107420-85070.jpg",              imageAlt: "luxury hotel guest woman executive"
            },
            {
              id: "6",              title: "True Five-Star Excellence",              quote: "The attention to detail, premium amenities, and warm hospitality make this the perfect choice for any traveler.",              name: "David Chen",              role: "Corporate Travel Manager",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-woman-holding-passport_23-2149963921.jpg",              imageAlt: "luxury hotel guest businessman portrait"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our rooms, services, and booking policies."
          tag="Help & Support"
          tagIcon={HelpCircle}
          tagAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            {
              id: "1",              title: "What is the check-in and check-out time?",              content: "Standard check-in time is 3:00 PM and check-out is 11:00 AM. Early check-in and late check-out may be available upon request at no extra charge based on room availability."
            },
            {
              id: "2",              title: "Is breakfast included in all room rates?",              content: "Breakfast is complimentary for guests booking directly through our official website. Third-party bookings may have different terms. Please verify when making your reservation."
            },
            {
              id: "3",              title: "Do you offer airport transportation?",              content: "Yes, we provide airport shuttle service for all guests. Please inform us of your arrival details at least 24 hours in advance to arrange transportation."
            },
            {
              id: "4",              title: "What is your cancellation policy?",              content: "Cancellations made 48 hours before arrival are free of charge. Cancellations within 48 hours will incur the full first night's charge. Terms may vary based on booking rate."
            },
            {
              id: "5",              title: "Are pets allowed at the hotel?",              content: "Pets are welcome with prior notification and a one-time cleaning fee of $50 USD. Please inform our reservation team when booking."
            },
            {
              id: "6",              title: "Is there Wi-Fi available?",              content: "Complimentary high-speed Wi-Fi is available throughout the entire hotel, including all guest rooms, lobby, and public areas."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get in Touch"
          title="Ready to Book Your Stay?"
          description="Reserve your luxurious accommodation at InterContinental Tashkent today. Our team is ready to assist you with any inquiries or special requests."
          tagIcon={Phone}
          tagAnimation="blur-reveal"
          background={{ variant: "plain" }}
          useInvertedBackground={true}
          imageSrc="http://img.b2bpic.net/free-photo/mobile-phone-tourist-poland-maps_23-2148232473.jpg"
          imageAlt="InterContinental Tashkent hotel exterior"
          mediaAnimation="slide-up"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Book Now"
          termsText="By clicking Book Now, you agree to our Terms and Conditions and Privacy Policy."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="InterContinental Tashkent"
          copyrightText="© 2025 InterContinental Tashkent. All rights reserved."
          columns={[
            {
              title: "Quick Links",              items: [
                { label: "Home", href: "#hero" },
                { label: "Rooms", href: "#product" },
                { label: "Amenities", href: "#feature" },
                { label: "Reviews", href: "#testimonial" }
              ]
            },
            {
              title: "Hotel Info",              items: [
                { label: "About Us", href: "#about" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" }
              ]
            },
            {
              title: "Contact Details",              items: [
                { label: "Email: info@intercontinental-tashkent.uz", href: "mailto:info@intercontinental-tashkent.uz" },
                { label: "Phone: +998 71 123 4567", href: "tel:+998711234567" },
                { label: "Address: Amir Timur Square, Tashkent", href: "#" }
              ]
            },
            {
              title: "Follow Us",              items: [
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Twitter", href: "https://twitter.com" },
                { label: "LinkedIn", href: "https://linkedin.com" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}