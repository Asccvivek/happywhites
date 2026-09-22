// ==========================================
// Happy Whites Dental — Main JavaScript
// ==========================================

// ==========================================
// Dynamic Offer Text (Month-Based)
// ==========================================
function updateOfferText() {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const now = new Date();
  const monthName = months[now.getMonth()];
  const offerMonthEl = document.getElementById('offer-month');
  const limitedTextEl = document.getElementById('limited-offer-text');
  const validityEl = document.getElementById('offer-validity');
  
  if (offerMonthEl) offerMonthEl.textContent = `${monthName} Exclusive`;
  if (limitedTextEl) limitedTextEl.textContent = `${monthName.toUpperCase()} SPECIAL`;
  if (validityEl) validityEl.textContent = `Valid throughout ${monthName} 2026.`;
}
updateOfferText();

// ==========================================
// Toast Notification System
// ==========================================
function showToast(message, type = 'error') {
  const toast = document.getElementById('hw-toast');
  if (!toast) return;
  
  const icon = type === 'error' ? 
    '<svg class="w-4 h-4 text-rose-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>' :
    '<svg class="w-4 h-4 text-emerald-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>';
  
  toast.className = `hw-toast ${type}`;
  toast.innerHTML = `${icon}<span>${message}</span>`;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// ==========================================
// Comprehensive Bilingual Translation Engine (English & Authentic Hindi)
// ==========================================
const PROCEDURE_HI_MAP = {
  'In-House TruAlign Clear Aligners': 'इन-हाउस ट्रूअलाइन अदृश्य अलाइनर',
  'FREE 3D Digital Dental Scan': 'फ्री 3D डिजिटल डेंटल स्कैन',
  'Single-Sitting Painless Rotary RCT': 'सिंगल-सिटिंग दर्द-मुक्त रोटरी आरसीटी',
  'Permanent Dental Implants & Crown': 'परमानेंट डेंटल इम्प्लांट्स और क्राउन',
  'Permanent Dental Implants & Zirconia Crown': 'परमानेंट डेंटल इम्प्लांट्स और ज़िरकोनिया क्राउन',
  'Laser Teeth Whitening': 'लेज़र टीथ व्हाइटनिंग',
  'Ultrasonic Dental Scaling & Polishing': 'अल्ट्रासोनिक स्केलिंग और पॉलिशिंग',
  'Wisdom Tooth Pain / Extraction': 'अक्ल दाढ़ दर्द निवारण व निष्कर्षण'
};

const translations = {
  en: {
    // Nav & Header
    announcement_offer: 'FREE 3D Scan worth ₹5,000 — <span id="offer-month">Limited Period Offer</span>',
    announcement_timings: '<i data-lucide="clock" class="w-3.5 h-3.5 text-teal-400"></i> Mon–Sat: 10 AM–2 PM & 5 PM–9 PM',
    nav_booking: 'Live Booking',
    nav_cases: 'Cases',
    nav_smile: 'Smile',
    nav_treatments: 'Treatments',
    nav_reviews: 'Reviews',
    nav_faq: 'FAQ',
    nav_tips: 'Tips',
    nav_location: 'Location',
    header_whatsapp: 'WhatsApp Doctor',
    header_whatsapp_short: 'Chat',
    header_book: 'Book Appointment',
    header_book_short: 'Book',
    mobile_lang_select: 'Language:',
    announcement_special: '✨ SPECIAL',
    announcement_call_mob: 'Call',
    reviews_see_all: 'See All 58+ Reviews on Google',
    faq_ask_whatsapp: 'Have More Questions? Ask Dr. Vaibhav on WhatsApp',
    float_ai_label: 'Ask AI Assistant',
    float_whatsapp_label: 'Chat on WhatsApp',

    // Hero Section
    hero_badge: '<span class="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span> ⭐ 4.9 Verified Google Rating (61+ Reviews) • Bawadiya Kalan, Bhopal',
    hero_title: 'Bhopal\'s Trusted Centre for <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-sky-400">Painless & Digital</span> Dentistry.',
    hero_desc: 'Specialized in <strong class="text-white font-bold">In-House TruAlign Clear Aligners</strong>, <strong class="text-white font-bold">Single-Sitting Rotary RCT</strong>, and <strong class="text-white font-bold">Permanent Dental Implants</strong> by <strong class="text-sky-300 font-bold">Dr. Vaibhav Shrivastav</strong> at Mahendra Medisquare (near ApolloSAGE Hospital).',
    hero_cta_booking: 'Launch Smart Booking Wizard',
    hero_cta_scan: 'Claim Free 3D Scan on WhatsApp',
    hero_cta_video: 'Watch Video Tour',
    hero_feat_1: 'In-House 3D Scan',
    hero_feat_2: '6-Step Sterile Lab',
    hero_feat_3: 'Zero Wait Time',

    // Section Titles
    cases_badge: 'CLINICAL SMILE GALLERY',
    cases_title: 'Real Patient Smile Transformations',
    cases_desc: 'Authentic clinical outcomes photographed in our Bhopal clinic. No stock photos, no digital altering.',

    trans_badge: 'INTERACTIVE DEMO',
    trans_title: 'Interactive Smile Transformation',
    trans_desc: 'Drag the slider to preview the dramatic aesthetic change achieved through our cosmetic dentistry procedures.',

    aligner_badge: 'ORTHODONTIC REVOLUTION',
    aligner_title: 'How In-House TruAlign® Clear Aligners Work',
    aligner_desc: 'Unlike outsourced brands that take weeks, our in-house digital workflow delivers custom aligners within 48 hours.',

    treatments_badge: 'VERIFIED CLINICAL SPECIALTIES IN BHOPAL',
    treatments_title: 'Full Spectrum Dental Treatments in Bhopal',
    treatments_desc: 'Every procedure is backed by digital diagnostics, painless computerized anesthesia, and lifetime warranty restorations by Dr. Vaibhav Shrivastav.',

    tour_badge: 'LIVE CLINICAL INFRASTRUCTURE',
    tour_title: 'Our Facility at Mahendra Medisquare',
    tour_desc: 'Take a virtual tour through our state-of-the-art dental suites, in-house CAD/CAM lab, and advanced sterilization setup.',

    testimonials_badge: 'PATIENT EXPERIENCES',
    testimonials_title: 'What Our Patients Say on Google',
    testimonials_desc: 'Read genuine verified reviews from patients who experienced gentle, transformative dental care at Happy Whites.',

    faq_badge: 'FREQUENTLY ASKED QUESTIONS',
    faq_title: 'Patient Questions & Answers',
    faq_desc: 'Common queries from patients about treatments, pricing, and clinic procedures at Happy Whites Dental Clinic.',

    doctor_badge: 'MEDICAL LEADERSHIP',
    doctor_title: 'Meet the Dedicated Team at Happy Whites',
    doctor_desc: 'Led by Dr. Vaibhav Shrivastav with a compassionate team committed to making every visit comfortable and painless.',

    location_badge: 'VISIT OUR CLINIC',
    location_title: 'Visit Happy Whites Dental Clinic',
    location_desc: 'Centrally located at Bawadiya Kalan Main Road, Arera Colony, Bhopal with convenient parking and accessibility.',

    blog_badge: 'ORAL HEALTH EDUCATION',
    blog_title: 'Expert Dental Care Advice',
    blog_desc: 'Clinical guides written by our dental team to help you make informed decisions about your oral hygiene and treatments.',

    footer_desc: 'Happy Whites Dental Clinic is Bhopal\'s premier center for painless digital dentistry, specialized in in-house TruAlign Clear Aligners, Single-Sitting RCT, and German Titanium Implants.',
    footer_hours_title: 'Clinic Timings',
    footer_hours_val: 'Mon – Sat: 10:00 AM – 2:00 PM & 5:00 PM – 9:00 PM<br>Sunday: Prior Appointment Only',
    footer_quick_links: 'Quick Links',
    footer_treatments: 'Specialties',
    footer_rights: '© 2026 Happy Whites Dental Clinic. All rights reserved.'
  },
  hi: {
    // Nav & Header
    announcement_offer: '✨ ₹5,000 मूल्य का 3D डिजिटल स्कैन बिल्कुल फ्री — <span id="offer-month">सीमित समय का ऑफर</span>',
    announcement_timings: '<i data-lucide="clock" class="w-3.5 h-3.5 text-teal-400"></i> सोम–शनि: सुबह 10–2 व शाम 5–9',
    nav_booking: 'अपॉइंटमेंट',
    nav_cases: 'केस परिणाम',
    nav_smile: 'मुस्कान बदलाव',
    nav_treatments: 'उपचार',
    nav_reviews: 'समीक्षाएं',
    nav_faq: 'सवाल-जवाब',
    nav_tips: 'डेंटल टिप्स',
    nav_location: 'क्लिनिक पता',
    header_whatsapp: 'डॉक्टर से बात करें',
    header_whatsapp_short: 'व्हाट्सएप',
    header_book: 'अपॉइंटमेंट बुक करें',
    header_book_short: 'बुक करें',
    mobile_lang_select: 'भाषा चुनें:',
    announcement_special: '✨ विशेष ऑफ़र',
    announcement_call_mob: 'कॉल',
    reviews_see_all: 'गूगल पर सभी 58+ समीक्षाएं देखें',
    faq_ask_whatsapp: 'कोई अन्य सवाल है? व्हाट्सएप पर डॉ. वैभव से पूछें',
    float_ai_label: 'AI से पूछें',
    float_whatsapp_label: 'व्हाट्सएप चैट',

    // Hero Section
    hero_badge: '<span class="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span> ⭐ 4.9 गूगल रेटिंग (61+ संतुष्ट मरीज) • बावड़िया कलां, भोपाल',
    hero_title: 'पेनलेस और आधुनिक <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-sky-400">डिजिटल डेंटिस्ट्री</span> में भोपाल का सबसे भरोसेमंद क्लिनिक।',
    hero_desc: '<strong class="text-white font-bold">इन-हाउस ट्रूअलाइन अदृश्य अलाइनर</strong>, <strong class="text-white font-bold">सिंगल-सिटिंग रोटरी आरसीटी</strong>, एवं <strong class="text-white font-bold">परमानेंट डेंटल इम्प्लांट्स</strong> के विशेषज्ञ — <strong class="text-sky-300 font-bold">डॉ. वैभव श्रीवास्तव</strong> (महेंद्रा मेडिस्क्वेयर, अपोलो सेज अस्पताल के पास)।',
    hero_cta_booking: 'स्मार्ट बुकिंग टूल शुरू करें',
    hero_cta_scan: 'व्हाट्सएप पर फ्री 3D स्कैन पाएं',
    hero_cta_video: 'क्लिनिक वीडियो टूर देखें',
    hero_feat_1: 'इन-हाउस 3D स्कैन',
    hero_feat_2: '6-स्तरीय स्टेरिलाइजेशन',
    hero_feat_3: 'बिना वेटिंग तुरंत इलाज',

    // Section Titles
    cases_badge: 'क्लिनिकल स्माइल गैलरी',
    cases_title: 'मरीजों की मुस्कान में असली बदलाव',
    cases_desc: 'भोपाल क्लिनिक में किए गए वास्तविक उपचार परिणाम। कोई बनावटी या स्टॉक फोटो नहीं।',

    trans_badge: 'इंटरैक्टिव डेमो',
    trans_title: 'स्माइल ट्रांसफॉर्मेशन अनुभव',
    trans_desc: 'स्लाइडर को ड्रैग करें और देखें कि हमारे आधुनिक कॉस्मेटिक डेंटल उपचार से मुस्कान कैसे बदलती है।',

    aligner_badge: 'आधुनिक ऑर्थोडॉन्टिक्स',
    aligner_title: 'इन-हाउस ट्रूअलाइन® क्लियर अलाइनर कैसे काम करता है',
    aligner_desc: 'बाहरी लैब पर निर्भर रहने के बजाय, हमारा इन-हाउस डिजिटल सेटअप मात्र 48 घंटों में कस्टम अलाइनर तैयार करता है।',

    treatments_badge: 'हमारी सत्यापित विशेषज्ञताएं',
    treatments_title: 'भोपाल में संपूर्ण डेंटल उपचार सेवाएं',
    treatments_desc: 'प्रत्येक प्रक्रिया डिजिटल डायग्नोस्टिक्स, दर्द-मुक्त कंप्यूटर आधारित एनेस्थीसिया और डॉ. वैभव श्रीवास्तव द्वारा लाइफटाइम वारंटी से समर्थित है।',

    tour_badge: 'आधुनिक इंफ्रास्ट्रक्चर',
    tour_title: 'महेंद्रा मेडिस्क्वेयर स्थित हमारा आधुनिक क्लिनिक',
    tour_desc: 'हमारे आधुनिक डेंटल सुइट्स, इन-हाउस सीएडी/कैम लैब और क्लास-बी स्टेरिलाइजेशन सेटअप का वर्चुअल टूर करें।',

    testimonials_badge: 'मरीजों के अनुभव',
    testimonials_title: 'गूगल पर हमारे मरीजों की राय',
    testimonials_desc: 'हैप्पी व्हाइट्स पर कोमल और सुखद डेंटल उपचार का अनुभव करने वाले मरीजों की वास्तविक सत्यापित समीक्षाएं पढ़ें।',

    faq_badge: 'अक्सर पूछे जाने वाले सवाल',
    faq_title: 'मरीजों के सामान्य प्रश्न व उत्तर',
    faq_desc: 'हैप्पी व्हाइट्स डेंटल क्लिनिक में उपचार, खर्च और प्रक्रियाओं से जुड़े सामान्य प्रश्नों के स्पष्ट जवाब।',

    doctor_badge: 'अनुभवी डॉक्टर टीम',
    doctor_title: 'हैप्पी व्हाइट्स की समर्पित विशेषज्ञ टीम',
    doctor_desc: 'डॉ. वैभव श्रीवास्तव के नेतृत्व में मरीजों के आराम और दर्द-मुक्त उपचार के लिए समर्पित टीम।',

    location_badge: 'आसान लोकेशन',
    location_title: 'हैप्पी व्हाइट्स डेंटल क्लिनिक पधारें',
    location_desc: 'बावड़िया कलां मेन रोड, अरेरा कॉलोनी, भोपाल में सुविधाजनक पार्किंग और आसान पहुंच के साथ स्थित।',

    blog_badge: 'ओरल हेल्थ गाइड',
    blog_title: 'विशेषज्ञों की डेंटल सलाह व लेख',
    blog_desc: 'ओरल हाइजीन और उपचार के सही चुनाव में आपकी मदद के लिए हमारे डॉक्टरों द्वारा लिखे गए प्रमाणित लेख।',

    footer_desc: 'हैप्पी व्हाइट्स डेंटल क्लिनिक भोपाल में दर्द-मुक्त और आधुनिक डिजिटल डेंटिस्ट्री का अग्रणी केंद्र है, जो इन-हाउस ट्रूअलाइन अलाइनर, सिंगल-सिटिंग आरसीटी और जर्मन टाइटेनियम इम्प्लांट्स में विशेषज्ञ है।',
    footer_hours_title: 'क्लिनिक समय',
    footer_hours_val: 'सोम – शनि: सुबह 10:00 – 2:00 व शाम 5:00 – रात 9:00<br>रविवार: केवल पूर्व अपॉइंटमेंट पर',
    footer_quick_links: 'महत्वपूर्ण लिंक्स',
    footer_treatments: 'प्रमुख उपचार',
    footer_rights: '© 2026 हैप्पी व्हाइट्स डेंटल क्लिनिक। सर्वाधिकार सुरक्षित।'
  }
};

let currentLang = 'en';
let currentWizardStep = 1;

const faqTranslations = [
  {
    en: {
      q: 'How much do clear aligners (invisible braces) cost at Happy Whites?',
      a: 'TruAlign clear aligners at Happy Whites Dental Clinic start from ₹45,000 depending on the complexity of your case. Since we have an in-house aligner lab, we offer competitive pricing without third-party markups. A free 3D dental scan (worth ₹5,000) is included to assess your case. Visit us for a personalized treatment plan and cost breakdown.'
    },
    hi: {
      q: 'हैप्पी व्हाइट्स में क्लियर अलाइनर (अदृश्य ब्रेसेस) का खर्च कितना आता है?',
      a: 'हैप्पी व्हाइट्स डेंटल क्लिनिक में ट्रूअलाइन क्लियर अलाइनर का खर्च ₹45,000 से शुरू होता है। इन-हाउस लैब होने के कारण हम बिना किसी अतिरिक्त थर्ड-पार्टी मार्जिन के बेहद किफायती दरें प्रदान करते हैं। केस के सटीक विश्लेषण के लिए ₹5,000 मूल्य का 3D डिजिटल स्कैन बिल्कुल फ्री शामिल है।'
    }
  },
  {
    en: {
      q: 'Is root canal treatment (RCT) really painless at your clinic?',
      a: 'Yes, absolutely. Dr. Vaibhav uses computerized painless anesthesia delivery combined with digital rotary endodontics. Most single-sitting RCT procedures are completed in just 45 minutes with zero discomfort. Our patients consistently report that the procedure is far less painful than they expected.'
    },
    hi: {
      q: 'क्या आपके क्लिनिक में रूट कैनाल (आरसीटी) सचमुच दर्द-मुक्त होता है?',
      a: 'जी हाँ, बिल्कुल। डॉ. वैभव कम्प्यूटराइज्ड दर्द-मुक्त एनेस्थीसिया और डिजिटल रोटरी एंडोडॉन्टिक्स का उपयोग करते हैं। अधिकांश सिंगल-सिटिंग आरसीटी प्रक्रियाएं बिना किसी दर्द या परेशानी के मात्र 45 मिनट में पूरी हो जाती हैं।'
    }
  },
  {
    en: {
      q: 'What are your clinic timings and OPD schedule?',
      a: 'Happy Whites Dental Clinic is open Monday to Saturday with continuous hours from 10:00 AM to 09:00 PM (OPD Shifts: Morning 10:00 AM – 2:00 PM and Evening 5:00 PM – 9:00 PM). Sunday visits are available by prior appointment.'
    },
    hi: {
      q: 'क्लिनिक का समय और ओपीडी शेड्यूल क्या है?',
      a: 'हैप्पी व्हाइट्स डेंटल क्लिनिक सोमवार से शनिवार सुबह 10:00 बजे से रात 09:00 बजे तक लगातार खुला रहता है (ओपीडी परामर्श: सुबह 10:00 – दोपहर 2:00 एवं शाम 5:00 – रात 9:00)। रविवार को पूर्व अपॉइंटमेंट पर परामर्श उपलब्ध है।'
    }
  },
  {
    en: {
      q: 'Do you offer dental implants? What is the cost?',
      a: 'Yes, we specialize in permanent dental implants using German titanium posts with CAD/CAM milled Zirconia crowns. They look, feel, and function just like natural teeth with a lifetime warranty.'
    },
    hi: {
      q: 'क्या आप डेंटल इम्प्लांट्स करते हैं? इसका खर्च क्या है?',
      a: 'जी हाँ, हम जर्मन टाइटेनियम पोस्ट और सीएडी/कैम मिल्ड ज़िरकोनिया क्राउन के साथ स्थायी डेंटल इम्प्लांट्स के विशेषज्ञ हैं। यह प्राकृतिक दांतों की तरह मजबूत और लाइफटाइम वारंटी के साथ आते हैं।'
    }
  },
  {
    en: {
      q: 'How long does laser teeth whitening take and how long do results last?',
      a: 'Our cold laser enamel bleaching procedure takes approximately 45 minutes in-office and brightens your teeth up to 8 shades instantly without sensitivity. Results typically last 18–24 months with regular oral care.'
    },
    hi: {
      q: 'लेज़र टीथ व्हाइटनिंग में कितना समय लगता है और परिणाम कितने समय तक रहते हैं?',
      a: 'हमारी आधुनिक कोल्ड लेज़र ब्लीचिंग प्रक्रिया में क्लिनिक में लगभग 45 मिनट का समय लगता है और बिना किसी झनझनाहट के दांत 8 शेड तक चमकदार हो जाते हैं। उचित देखभाल के साथ इसके परिणाम 18 से 24 महीने तक बने रहते हैं।'
    }
  },
  {
    en: {
      q: 'Is the FREE 3D dental scan really free? Any hidden charges?',
      a: 'Yes, the 3D intraoral digital scan is completely FREE with zero hidden charges. It includes a comprehensive 3D scan (worth ₹5,000) and personalized consultation with Dr. Vaibhav Shrivastav.'
    },
    hi: {
      q: 'क्या 3D डिजिटल डेंटल स्कैन सचमुच फ्री है? कोई छुपा हुआ शुल्क तो नहीं?',
      a: 'जी हाँ, 3D डिजिटल ओरल स्कैन ₹0 में बिल्कुल फ्री है और इसमें कोई छुपा हुआ शुल्क नहीं है। इसमें ₹5,000 मूल्य का पूरा डिजिटल स्कैन और डॉ. वैभव श्रीवास्तव के साथ व्यक्तिगत परामर्श शामिल है।'
    }
  }
];

const treatmentCardTranslations = [
  {
    en: {
      title: 'TruAlign® Clear Aligners',
      desc: 'Invisible, custom-milled thermoformed aligners crafted in our in-house lab. Straighten teeth discreetly in 4–8 months without metal brackets.',
      badge1: 'In-House Lab',
      badge2: '₹0 Free Scan',
      footer1: '4–8 Months Avg.',
      footer2: 'Zero Metal'
    },
    hi: {
      title: 'ट्रूअलाइन® क्लियर अलाइनर',
      desc: 'हमारी इन-हाउस लैब में निर्मित कस्टम अदृश्य अलाइनर। बिना किसी मेटल वायर के मात्र 4 से 8 महीनों में दांतों को सही आकार में लाएं।',
      badge1: 'इन-हाउस लैब',
      badge2: '₹0 फ्री स्कैन',
      footer1: '4–8 माह में परिणाम',
      footer2: 'बिना मेटल वायर'
    }
  },
  {
    en: {
      title: 'Single-Sitting Painless RCT',
      desc: 'Save your natural tooth in a single 45-minute sitting using digital apex locators and computerized rotary endodontics with zero pain.',
      badge1: 'Single Visit',
      badge2: '45 Minutes',
      footer1: '99% Success Rate',
      footer2: 'Painless Tech'
    },
    hi: {
      title: 'सिंगल-सिटिंग दर्द-मुक्त आरसीटी',
      desc: 'कम्प्यूटरीकृत रोटरी एंडोडॉन्टिक्स और डिजिटल एपेक्स लोकेटर के साथ मात्र 45 मिनट में अपने प्राकृतिक दांत को दर्द-मुक्त सुरक्षित करें।',
      badge1: 'एक ही सिटिंग',
      badge2: '45 मिनट',
      footer1: '99% सफलता दर',
      footer2: 'दर्द-मुक्त तकनीक'
    }
  },
  {
    en: {
      title: 'Dental Implants & Crowns',
      desc: 'Permanent missing tooth replacement with German Grade-5 titanium posts and unbreakable Zirconia crowns with lifetime structural warranty.',
      badge1: 'German Titanium',
      badge2: 'Lifetime Warranty',
      footer1: 'Natural Chewing',
      footer2: 'CAD/CAM Milled'
    },
    hi: {
      title: 'डेंटल इम्प्लांट्स और क्राउन',
      desc: 'जर्मन ग्रेड-5 टाइटेनियम पोस्ट और अटूट ज़िरकोनिया क्राउन के साथ खोए हुए दांत का स्थायी इलाज, लाइफटाइम स्ट्रक्चरल वारंटी के साथ।',
      badge1: 'जर्मन टाइटेनियम',
      badge2: 'लाइफटाइम वारंटी',
      footer1: 'प्राकृतिक चबाने की क्षमता',
      footer2: 'सीएडी/कैम निर्मित'
    }
  },
  {
    en: {
      title: 'Ultrasonic Scaling & Polishing',
      desc: 'Remove stubborn tobacco stains, tea tartar, and harmful sub-gingival calculus using gentle ultrasonic vibrations without enamel damage.',
      badge1: 'Deep Hygiene',
      badge2: 'Painless Polish',
      footer1: '30 Min Session',
      footer2: 'Enamel Safe'
    },
    hi: {
      title: 'अल्ट्रासोनिक स्केलिंग व पॉलिशिंग',
      desc: 'इनेमल को नुकसान पहुंचाए बिना अल्ट्रासोनिक तरंगों द्वारा चाय, कॉफी और तंबाकू के जिद्दी दाग और टार्टर की सुरक्षित सफाई।',
      badge1: 'गहन सफाई',
      badge2: 'कोमल पॉलिश',
      footer1: '30 मिनट सत्र',
      footer2: 'इनेमल सुरक्षित'
    }
  },
  {
    en: {
      title: 'Laser Teeth Whitening',
      desc: 'Achieve a red-carpet bright smile in 45 minutes using cold blue laser activation. 100% painless with zero post-treatment sensitivity.',
      badge1: '8 Shades Brighter',
      badge2: 'Cold Laser',
      footer1: '45 Min Session',
      footer2: 'Zero Sensitivity'
    },
    hi: {
      title: 'लेज़र टीथ व्हाइटनिंग',
      desc: 'कोल्ड ब्लू लेज़र तकनीक द्वारा मात्र 45 मिनट में अपनी मुस्कान को 8 शेड तक अधिक चमकदार बनाएं, बिना किसी झनझनाहट के।',
      badge1: '8 शेड चमकदार',
      badge2: 'कोल्ड लेज़र',
      footer1: '45 मिनट सत्र',
      footer2: 'शून्य झनझनाहट'
    }
  },
  {
    en: {
      title: 'Wisdom Tooth & Surgery',
      desc: 'Minimally invasive, painless surgical extraction of impacted third molars using atraumatic instruments and precision piezo surgery.',
      badge1: 'Atraumatic Surgery',
      badge2: 'Quick Healing',
      footer1: 'Local Anesthesia',
      footer2: 'Day Care'
    },
    hi: {
      title: 'अक्ल दाढ़ दर्द निवारण व सर्जरी',
      desc: 'अक्ल दाढ़ के असहनीय दर्द का आधुनिक दर्द-मुक्त सर्जिकल समाधान, जिससे आसपास के मसूड़ों और जबड़े को कोई नुकसान न पहुंचे।',
      badge1: 'सुरक्षित सर्जरी',
      badge2: 'शीघ्र रिकवरी',
      footer1: 'लोकल एनेस्थीसिया',
      footer2: 'डे-केयर सुविधा'
    }
  }
];

function translateCases(lang) {
  const isHi = lang === 'hi';
  const casesData = [
    {
      badge: isHi ? 'केस स्टडी 01' : 'Case Study 01',
      time: isHi ? '⏱️ 35 मिनट (एक सिटिंग)' : '⏱️ 35 Mins Single Visit',
      title: isHi ? 'चाय, कॉफी व गुटखा के दाग हटाना' : 'Tea, Coffee & Nicotine Stain Removal',
      desc: isHi ? 'मरीज के दांतों और मसूड़ों के पास सालों से जमे कड़े टार्टर और गहरे निकोटीन के दाग थे।' : 'Patient presented with deep extrinsic tobacco stains and tartar calculus along the gumline.',
      procLabel: isHi ? 'उपचार:' : 'Procedure:',
      procVal: isHi ? 'अल्ट्रासोनिक पिज़ो स्केलिंग एवं एयर-फ्लो पॉलिशिंग' : 'Ultrasonic Piezo Scaling & Air-Flow Polish',
      outLabel: isHi ? 'परिणाम:' : 'Outcome:',
      outVal: isHi ? '100% दाग साफ • स्वस्थ व मजबूत मसूड़े' : '100% Stains Cleared • Healthy Gums',
      sensLabel: isHi ? 'सेंसिटिविटी:' : 'Sensitivity:',
      sensVal: isHi ? 'उपचार के बाद शून्य झनझनाहट' : 'Zero Post-Op Sensitivity',
      btn: isHi ? 'दाग हटाने का स्लॉट बुक करें →' : 'Book Stain Removal Slot →'
    },
    {
      badge: isHi ? 'केस स्टडी 02' : 'Case Study 02',
      time: isHi ? '⏱️ 45 मिनट क्लिनिक में' : '⏱️ 45 Mins In-Office',
      title: isHi ? 'शादी से पहले लेज़र टीथ व्हाइटनिंग' : 'Pre-Wedding Laser Teeth Whitening',
      desc: isHi ? 'शादी की फोटोग्राफी से पहले मरीज ने दांतों की प्राकृतिक चमक और सफेदी बढ़ाने का अनुरोध किया।' : 'Patient requested rapid smile brightening for upcoming wedding photography (VITA Shade A4).',
      procLabel: isHi ? 'उपचार:' : 'Procedure:',
      procVal: isHi ? 'कोल्ड लेज़र इनेमल ब्लीचिंग (3 साइकल)' : 'Cold Laser Enamel Bleaching (3 Cycles)',
      outLabel: isHi ? 'परिणाम:' : 'Outcome:',
      outVal: isHi ? '8 शेड ज्यादा चमकदार (शेड B1 फिनिश)' : '8 Shades Brighter (Shade B1 Finish)',
      sensLabel: isHi ? 'सुरक्षा:' : 'Safety:',
      sensVal: isHi ? 'इनेमल-सुरक्षित और माइक्रो-पॉलिश्ड' : 'Enamel-Safe & Micro-Polished',
      btn: isHi ? 'लेज़र व्हाइटनिंग बुक करें →' : 'Book Laser Whitening →'
    },
    {
      badge: isHi ? 'केस स्टडी 03' : 'Case Study 03',
      time: isHi ? '⏱️ कुल 6.5 महीने' : '⏱️ 6.5 Months Total',
      title: isHi ? 'टेढ़े-मेढ़े दांत व ओवरलैपिंग का इलाज' : 'Crooked Front Teeth & Crowding',
      desc: isHi ? 'मरीज के निचले सामने के दांत काफी टेढ़े थे और वे पुराने दर्दनाक तार (मेटल ब्रेसेस) नहीं लगवाना चाहते थे।' : 'Patient had severe lower front crowding and avoided traditional painful metal brackets.',
      procLabel: isHi ? 'उपचार:' : 'Procedure:',
      procVal: isHi ? '16 कस्टम इन-हाउस ट्रूअलाइन ट्रे' : '16 Custom In-House TruAlign Trays',
      outLabel: isHi ? 'परिणाम:' : 'Outcome:',
      outVal: isHi ? 'परफेक्ट अलाइनमेंट व सीधी सुंदर मुस्कान' : 'Perfect Dental Arch Alignment',
      sensLabel: isHi ? 'सुविधा:' : 'Lifestyle:',
      sensVal: isHi ? '100% अदृश्य • खान-पान में कोई पाबंदी नहीं' : '100% Invisible • No Diet Limits',
      btn: isHi ? 'फ्री अलाइनर स्कैन बुक करें →' : 'Book Free Aligner Scan →'
    }
  ];

  const cards = document.querySelectorAll('#cases .grid > div.tilt-card');
  cards.forEach((card, idx) => {
    const d = casesData[idx];
    if (!d) return;
    const badgeSpan = card.querySelector('.text-\\[10px\\].font-black');
    if (badgeSpan) badgeSpan.textContent = d.badge;
    const timeSpan = card.querySelector('.text-xs.font-bold.text-slate-500');
    if (timeSpan) timeSpan.textContent = d.time;
    const h3 = card.querySelector('h3');
    if (h3) h3.textContent = d.title;
    const p = card.querySelector('p.text-xs');
    if (p) p.textContent = d.desc;

    const rows = card.querySelectorAll('.border-y > div');
    if (rows.length >= 1) {
      const lbl = rows[0].querySelector('span.w-20');
      const val = rows[0].querySelector('span.text-slate-600');
      if (lbl) lbl.textContent = d.procLabel;
      if (val) val.textContent = d.procVal;
    }
    if (rows.length >= 2) {
      const lbl = rows[1].querySelector('span.w-20');
      const val = rows[1].querySelector('span.font-extrabold:last-child');
      if (lbl) lbl.textContent = d.outLabel;
      if (val) val.textContent = d.outVal;
    }
    if (rows.length >= 3) {
      const lbl = rows[2].querySelector('span.w-20');
      const val = rows[2].querySelector('span.text-slate-600');
      if (lbl) lbl.textContent = d.sensLabel;
      if (val) val.textContent = d.sensVal;
    }

    const btn = card.querySelector('button.magnetic-btn');
    if (btn) btn.textContent = d.btn;
  });
}

function translateAlignerSteps(lang) {
  const isHi = lang === 'hi';
  
  const topPill = document.querySelector('#aligner-journey .inline-flex span');
  if (topPill) {
    topPill.textContent = isHi ? "भोपाल की एकमात्र इन-हाउस क्लियर अलाइनर लैब" : "BHOPAL'S ONLY IN-HOUSE CLEAR ALIGNER LAB";
  }

  const steps = [
    {
      stepBadge: isHi ? 'चरण 01' : 'Step 01',
      offerBadge: isHi ? '₹0 फ्री ऑफर' : '₹0 Free Offer',
      title: isHi ? '3D डिजिटल इंट्राओरल स्कैन' : '3D Digital Intraoral Scan',
      desc: isHi ? 'बिना किसी गंदे पेस्ट या उल्टी के अहसास के, हाई-प्रिसिजन लेज़र स्कैनर मात्र 3 मिनट में आपके दांतों का 100% सटीक 3D मॉडल तैयार करता है।' : 'No messy impression pastes or gag reflex. High-precision optical laser scanner captures 100,000+ data points of your bite in under 3 minutes.',
      tag: isHi ? '100% दर्द-मुक्त' : '100% Painless',
      btn: isHi ? 'फ्री स्कैन' : 'Scan Free'
    },
    {
      stepBadge: isHi ? 'चरण 02' : 'Step 02',
      offerBadge: isHi ? '3D सिमुलेशन' : 'CAD Simulation',
      title: isHi ? '3D स्माइल सिमुलेशन' : 'Projected Smile Simulation',
      desc: isHi ? 'डॉ. वैभव 3D सॉफ्टवेयर पर दांतों के मूवमेंट की योजना बनाते हैं। इलाज शुरू होने से पहले ही स्क्रीन पर अपनी फाइनल मुस्कान देखें।' : 'Dr. Vaibhav designs your step-by-step tooth movements on 3D orthodontic software. Preview your exact final smile before treatment starts.',
      tag: isHi ? 'बायोमैकेनिकल प्लानिंग' : 'Biomechanical Plan',
      btn: isHi ? 'सिमुलेशन देखें' : 'View CAD'
    },
    {
      stepBadge: isHi ? 'चरण 03' : 'Step 03',
      offerBadge: isHi ? 'इन-हाउस लैब' : 'In-House Lab',
      title: isHi ? 'इन-हाउस लैब निर्माण' : 'Precision In-House Lab Crafting',
      desc: isHi ? 'भोपाल स्थित हमारी लैब में उच्चतम मेडिकल-ग्रेड क्रिस्टल पॉलीमर से अलाइनर ट्रे तैयार की जाती हैं, जिससे परफेक्ट फिटिंग मिलती है।' : 'Thermoformed directly in our Bhopal aligner lab using FDA-approved medical-grade crystal polymers for ultra-snug fit and invisible comfort.',
      tag: isHi ? 'डॉक्टर द्वारा जांची गई गुणवत्ता' : 'Doctor QA Checked',
      btn: isHi ? 'लैब टूर' : 'Lab Tour'
    },
    {
      stepBadge: isHi ? 'चरण 04' : 'Step 04',
      offerBadge: isHi ? '100% सुविधाजनक' : 'Zero Disruption',
      title: isHi ? 'अदृश्य दैनिक बदलाव' : 'Discreet Daily Transformation',
      desc: isHi ? 'खाना खाते समय आसानी से निकालें। हर 10–14 दिन में नई ट्रे बदलें और 6 से 12 महीनों में बिना किसी को पता चले सीधी मुस्कान पाएं।' : 'Removable for dining, meetings, and photos. Switch trays every 10–14 days. Complete teeth alignment in 6 to 12 months discreetly.',
      tag: isHi ? '100% अदृश्य' : '100% Invisible',
      btn: isHi ? 'अभी शुरू करें' : 'Start Now'
    }
  ];

  const cards = document.querySelectorAll('#aligner-journey .framer-card');
  cards.forEach((card, idx) => {
    const s = steps[idx];
    if (!s) return;
    
    const stepSpan = card.querySelector('.absolute.top-3.left-3 span.font-black');
    if (stepSpan) {
      stepSpan.innerHTML = `<span class="w-2 h-2 rounded-full ${idx === 0 ? 'bg-teal-500 animate-pulse' : idx === 1 ? 'bg-sky-500' : idx === 2 ? 'bg-amber-500' : 'bg-emerald-500'}"></span> ${s.stepBadge}`;
    }

    const offerSpan = card.querySelector('.absolute.top-3.right-3 span');
    if (offerSpan) {
      const icon = offerSpan.querySelector('i');
      const iconHtml = icon ? icon.outerHTML : '';
      offerSpan.innerHTML = `${iconHtml} ${s.offerBadge}`;
    }

    const h3 = card.querySelector('h3');
    if (h3) h3.textContent = s.title;

    const p = card.querySelector('p');
    if (p) p.textContent = s.desc;

    const tagSpan = card.querySelector('.border-t span.text-\\[11px\\]');
    if (tagSpan) {
      const icon = tagSpan.querySelector('i');
      const iconHtml = icon ? icon.outerHTML : '';
      tagSpan.innerHTML = `${iconHtml} ${s.tag}`;
    }

    const btnSpan = card.querySelector('.framer-motion-btn span');
    if (btnSpan) btnSpan.textContent = s.btn;
  });

  const offerBadge = document.getElementById('limited-offer-text');
  if (offerBadge) {
    offerBadge.textContent = isHi ? 'सीमित समय का विशेष ऑफर' : 'LIMITED PERIOD OFFER';
  }
  const offerHeading = document.querySelector('#aligner-journey .bg-gradient-to-r h4');
  if (offerHeading) {
    offerHeading.textContent = isHi ? 'अपना फ्री 3D अलाइनर स्कैन पाएं (मूल्य ₹5,000)' : 'Claim Your FREE 3D Aligner Scan (Worth ₹5,000)';
  }
  const offerSub = document.querySelector('#aligner-journey .bg-gradient-to-r p');
  if (offerSub) {
    offerSub.innerHTML = isHi 
      ? 'चैंबर 4, महेंद्रा मेडिस्क्वेयर, बावड़िया कलां में पधारें। <span id="offer-validity">सीमित समय के लिए मान्य।</span>' 
      : 'Visit Chamber 4, Mahendra Medisquare, Bawadiya Kalan. <span id="offer-validity">Valid for a limited time only.</span>';
  }
  const offerCtaBtn = document.querySelector('#aligner-journey .framer-cta-btn');
  if (offerCtaBtn) {
    offerCtaBtn.textContent = isHi ? 'फ्री अलाइनर स्कैन बुक करें →' : 'Claim Free Aligner Scan →';
  }
}

function translateTreatments(lang) {
  const isHi = lang === 'hi';
  
  const topBadge = document.querySelector('#specialties .inline-flex span');
  if (topBadge) {
    topBadge.textContent = isHi ? 'भोपाल में प्रमाणित विशेषज्ञ उपचार' : 'VERIFIED CLINICAL SPECIALTIES IN BHOPAL';
  }

  const treatmentData = [
    {
      badge1: isHi ? 'इन-हाउस लैब' : 'In-House Lab',
      badge2: isHi ? '₹0 फ्री स्कैन' : '₹0 Free Scan',
      title: isHi ? 'ट्रूअलाइन® क्लियर अलाइनर' : 'TruAlign® Clear Aligners',
      desc: isHi ? 'हमारी इन-हाउस लैब में निर्मित कस्टम अदृश्य अलाइनर। बिना किसी मेटल वायर के मात्र 4 से 8 महीनों में दांतों को सही आकार में लाएं।' : 'Invisible, custom-milled thermoformed aligners crafted in our in-house lab. Straighten teeth discreetly in 4–8 months without metal brackets.',
      footerTag: isHi ? 'डॉक्टर द्वारा जांच' : 'Direct Doctor QC',
      btn: isHi ? 'अलाइनर बुक करें' : 'Book Scan'
    },
    {
      badge1: isHi ? '1-सिटिंग (45 मिनट)' : '1-Visit (45 Min)',
      badge2: isHi ? 'एपेक्स लोकेटर' : 'Apex Locator',
      title: isHi ? 'सिंगल-सिटिंग दर्द-मुक्त आरसीटी' : 'Single-Sitting Painless RCT',
      desc: isHi ? 'कम्प्यूटरीकृत रोटरी एंडोडॉन्टिक्स और डिजिटल एपेक्स लोकेटर के साथ मात्र 45 मिनट में अपने प्राकृतिक दांत को दर्द-मुक्त सुरक्षित करें।' : 'Save your natural tooth in a single 45-minute sitting using digital apex locators and computerized rotary endodontics with zero pain.',
      footerTag: isHi ? 'दर्द-मुक्त एनेस्थीसिया' : 'Painless Anesthesia',
      btn: isHi ? 'आरसीटी बुक करें' : 'Book RCT'
    },
    {
      badge1: isHi ? 'जर्मन टाइटेनियम' : 'German Titanium',
      badge2: isHi ? 'आजीवन वारंटी' : 'Lifetime Warranty',
      title: isHi ? 'डेंटल इम्प्लांट्स और क्राउन' : 'Dental Implants & Crowns',
      desc: isHi ? 'जर्मन ग्रेड-5 टाइटेनियम पोस्ट और अटूट ज़िरकोनिया क्राउन के साथ खोए हुए दांत का स्थायी इलाज, लाइफटाइम स्ट्रक्चरल वारंटी के साथ।' : 'Permanent missing tooth replacement with German Grade-5 titanium posts and unbreakable Zirconia crowns with lifetime structural warranty.',
      footerTag: isHi ? 'मोनोलिथिक ज़िरकोनिया' : 'Monolithic Zirconia',
      btn: isHi ? 'इम्प्लांट बुक करें' : 'Book Implant'
    },
    {
      badge1: isHi ? 'पिज़ो अल्ट्रासोनिक' : 'Piezo Ultrasonic',
      badge2: isHi ? 'डीप क्लीन' : 'Deep Clean',
      title: isHi ? 'अल्ट्रासोनिक स्केलिंग व पॉलिशिंग' : 'Ultrasonic Scaling & Polishing',
      desc: isHi ? 'इनेमल को नुकसान पहुंचाए बिना अल्ट्रासोनिक तरंगों द्वारा चाय, कॉफी और तंबाकू के जिद्दी दाग और टार्टर की सुरक्षित सफाई।' : 'Remove stubborn tobacco stains, tea tartar, and harmful sub-gingival calculus using gentle ultrasonic vibrations without enamel damage.',
      footerTag: isHi ? 'शून्य इनेमल नुकसान' : 'Zero Enamel Damage',
      btn: isHi ? 'स्केलिंग बुक करें' : 'Book Scaling'
    },
    {
      badge1: isHi ? 'वीटा शेड गाइड' : 'Vita Shade Guide',
      badge2: isHi ? '8 शेड ज्यादा सफेद' : '8 Shades Whiter',
      title: isHi ? 'लेज़र टीथ व्हाइटनिंग' : 'Laser Teeth Whitening',
      desc: isHi ? 'कोल्ड ब्लू लेज़र तकनीक द्वारा मात्र 45 मिनट में अपनी मुस्कान को 8 शेड तक अधिक चमकदार बनाएं, बिना किसी झनझनाहट के।' : 'Achieve a red-carpet bright smile in 45 minutes using cold blue laser activation. 100% painless with zero post-treatment sensitivity.',
      footerTag: isHi ? 'उसी दिन परिणाम' : 'Same-Day Results',
      btn: isHi ? 'व्हाइटनिंग बुक करें' : 'Book Whitening'
    },
    {
      badge1: isHi ? 'डिजिटल ओपीजी स्कैन' : 'Digital OPG Scan',
      badge2: isHi ? 'माइक्रो-सर्जिकल' : 'Micro-Surgical',
      title: isHi ? 'अक्ल दाढ़ दर्द व सर्जरी' : 'Wisdom Tooth & Surgery',
      desc: isHi ? 'अक्ल दाढ़ के असहनीय दर्द का आधुनिक दर्द-मुक्त सर्जिकल समाधान, जिससे आसपास के मसूड़ों और जबड़े को कोई नुकसान न पहुंचे।' : 'Minimally invasive, painless surgical extraction of impacted third molars using atraumatic instruments and precision piezo surgery.',
      footerTag: isHi ? 'दर्द-मुक्त निष्कर्षण' : 'Painless Removal',
      btn: isHi ? 'सर्जन से परामर्श लें' : 'Consult Surgeon'
    }
  ];

  const cards = document.querySelectorAll('#specialties .framer-treatment-card');
  cards.forEach((card, idx) => {
    const d = treatmentData[idx];
    if (!d) return;

    const b1 = card.querySelector('.absolute.top-3.left-3 span.font-black');
    if (b1) {
      const dot = b1.querySelector('.rounded-full');
      const dotHtml = dot ? dot.outerHTML : '';
      b1.innerHTML = `${dotHtml} ${d.badge1}`;
    }

    const b2 = card.querySelector('.absolute.top-3.right-3 span');
    if (b2) {
      const icon = b2.querySelector('i');
      const iconHtml = icon ? icon.outerHTML : '';
      b2.innerHTML = `${iconHtml} ${d.badge2}`;
    }

    const h3 = card.querySelector('h3');
    if (h3) h3.textContent = d.title;

    const p = card.querySelector('p');
    if (p) p.textContent = d.desc;

    const fTag = card.querySelector('.border-t span.text-\\[11px\\]');
    if (fTag) {
      const icon = fTag.querySelector('i');
      const iconHtml = icon ? icon.outerHTML : '';
      fTag.innerHTML = `${iconHtml} ${d.footerTag}`;
    }

    const btnSpan = card.querySelector('.framer-motion-btn span');
    if (btnSpan) btnSpan.textContent = d.btn;
  });
}

function translateTechTour(lang) {
  const isHi = lang === 'hi';
  const tourSection = document.getElementById('clinic-tour');
  if (!tourSection) return;

  const topBadge = tourSection.querySelector('.inline-flex span, span.text-xs.font-extrabold');
  if (topBadge) topBadge.textContent = isHi ? 'आधुनिक क्लिनिकल इंफ्रास्ट्रक्चर' : 'LIVE CLINICAL INFRASTRUCTURE';

  const subP = tourSection.querySelector('.text-center p');
  if (subP) subP.textContent = isHi ? 'बावड़िया कलां, भोपाल स्थित हमारे क्लिनिक की वास्तविक तस्वीरें।' : 'Authentic clinic photos from our chamber in Bawadiya Kalan, Bhopal.';

  const cards = tourSection.querySelectorAll('.tilt-card');
  if (cards.length >= 1) {
    const c1 = cards[0];
    const b1 = c1.querySelector('.absolute.top-3.left-3 span:first-child');
    if (b1) b1.innerHTML = isHi ? '<i data-lucide="building" class="w-3.5 h-3.5"></i> मुख्य क्लिनिक प्रवेश' : '<i data-lucide="building" class="w-3.5 h-3.5"></i> Real Building Facade';
    const b2 = c1.querySelector('.absolute.top-3.left-3 span:last-child');
    if (b2) b2.innerHTML = isHi ? '<i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-teal-400"></i> क्लिनिक बोर्ड' : '<i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-teal-400"></i> Full Facility Board';
    const tap = c1.querySelector('.absolute.bottom-3.right-3');
    if (tap) tap.innerHTML = isHi ? '<i data-lucide="zoom-in" class="w-3 h-3 text-teal-400"></i> बड़ा करके देखें' : '<i data-lucide="zoom-in" class="w-3 h-3 text-teal-400"></i> Tap to Inspect';
    const h4 = c1.querySelector('h4');
    if (h4) h4.textContent = isHi ? 'दूसरी मंजिल, महेंद्रा मेडिस्क्वेयर' : '2nd Floor, Mahendra Medisquare';
    const badge1 = c1.querySelector('span.text-\\[10px\\].font-extrabold');
    if (badge1) badge1.textContent = isHi ? 'बावड़िया कलां' : 'Bawadiya Kalan';
    const p = c1.querySelector('p');
    if (p) p.textContent = isHi ? 'बावड़िया कलां मेन रोड, अरेरा कॉलोनी, भोपाल में मुख्य प्राइम लोकेशन (अपोलो सेज अस्पताल के पास)।' : 'Prime corner facility on Bawadiya Kalan Main Road, Arera Colony, Bhopal (Near ApolloSAGE Hospital).';
    const tagSpans = c1.querySelectorAll('.border-t span');
    if (tagSpans.length >= 5) {
      tagSpans[0].textContent = isHi ? 'ट्रूअलाइन अलाइनर्स' : 'TruAlign Aligners';
      tagSpans[1].textContent = isHi ? 'इनविज़ालाइन' : 'Invisalign';
      tagSpans[2].textContent = isHi ? 'डेंटल इम्प्लांट्स' : 'Dental Implants';
      tagSpans[3].textContent = isHi ? 'लेज़र आरसीटी' : 'Laser RCT';
      tagSpans[4].textContent = isHi ? 'ज़िरकोनिया क्राउन्स' : 'Zirconia Crowns';
    }
  }
  if (cards.length >= 2) {
    const c2 = cards[1];
    const b1 = c2.querySelector('.absolute.top-3.left-3 span:first-child');
    if (b1) b1.innerHTML = isHi ? '<i data-lucide="shield-check" class="w-3.5 h-3.5"></i> स्टेरिलाइज्ड डेंटल सुइट' : '<i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Sterile Operatory Suite';
    const b2 = c2.querySelector('.absolute.top-3.left-3 span:last-child');
    if (b2) b2.innerHTML = isHi ? '<i data-lucide="sparkles" class="w-3.5 h-3.5 text-brand-400"></i> क्लास-बी ऑटोक्लेव' : '<i data-lucide="sparkles" class="w-3.5 h-3.5 text-brand-400"></i> Class-B Autoclave';
    const tap = c2.querySelector('.absolute.bottom-3.right-3');
    if (tap) tap.innerHTML = isHi ? '<i data-lucide="zoom-in" class="w-3 h-3 text-teal-400"></i> बड़ा करके देखें' : '<i data-lucide="zoom-in" class="w-3 h-3 text-teal-400"></i> Tap to Inspect';
    const h4 = c2.querySelector('h4');
    if (h4) h4.textContent = isHi ? 'डिजिटल स्कैनिंग एवं रोटरी सुइट' : 'Digital Scanning & Rotary Suite';
    const badge2 = c2.querySelector('span.text-\\[10px\\].font-extrabold');
    if (badge2) badge2.textContent = isHi ? 'स्कैन सुइट' : 'Scan Suite';
    const p = c2.querySelector('p');
    if (p) p.textContent = isHi ? '3D ओरल स्कैनर, माइक्रो-रोटरी एंडोडॉन्टिक्स मोटर्स एवं एरोसोल इवैक्युएशन से सुसज्जित आधुनिक चैंबर।' : 'Equipped with 3D intraoral scanner, micro-rotary endodontic motors & aerosol evacuation.';
    const tagSpans2 = c2.querySelectorAll('.border-t span');
    if (tagSpans2.length >= 4) {
      tagSpans2[0].textContent = isHi ? '3D इंट्राओरल स्कैनर' : '3D Intraoral Scanner';
      tagSpans2[1].textContent = isHi ? 'डिजिटल ओपीजी' : 'Digital OPG';
      tagSpans2[2].textContent = isHi ? 'एपेक्स लोकेटर' : 'Apex Locator';
      tagSpans2[3].textContent = isHi ? 'दर्द-मुक्त एनेस्थीसिया' : 'Painless Anesthesia';
    }
  }
}

function translateDoctorSection(lang) {
  const isHi = lang === 'hi';
  const docSec = document.getElementById('doctor');
  if (!docSec) return;

  const topBadge = docSec.querySelector('.inline-flex span, span.text-xs.font-extrabold');
  if (topBadge) topBadge.textContent = isHi ? 'क्लिनिक नेतृत्व एवं रोगी देखभाल' : 'Clinic Leadership & Patient Care';

  const cards = docSec.querySelectorAll('.tilt-card');
  if (cards.length >= 1) {
    const c1 = cards[0];
    const role = c1.querySelector('.text-\\[10px\\].font-black');
    if (role) role.textContent = isHi ? 'क्लिनिकल डायरेक्टर एवं मुख्य सर्जन' : 'Clinical Director & Surgeon';
    const spec = c1.querySelector('.text-xs.font-semibold');
    if (spec) spec.textContent = isHi ? 'BDS, MDS • वरिष्ठ ऑर्थोडॉन्टिस्ट' : 'BDS, MDS • Lead Orthodontist';
    const stats = c1.querySelectorAll('.text-\\[11px\\].text-slate-400 span');
    if (stats.length >= 1) stats[0].textContent = isHi ? '🏆 10+ वर्ष का अनुभव' : '🏆 10+ Yrs Exp.';
    if (stats.length >= 3) stats[2].textContent = isHi ? '2,500+ मुस्कान संवारीं' : '2,500+ Smiles';
    const allP = c1.querySelectorAll('p');
    const bio = c1.querySelector('p.font-normal, p.leading-relaxed') || (allP.length > 1 ? allP[1] : null);
    if (bio) bio.textContent = isHi ? 'दर्द-मुक्त डिजिटल रोटरी एंडोडॉन्टिक्स, डेंटल इम्प्लांट्स और इन-हाउस ट्रूअलाइन अलाइनर के विशेषज्ञ।' : 'Specialized in painless digital rotary endodontics, dental implants, and precision biomechanical planning for In-House TruAlign clear aligners.';
    const btn = c1.querySelector('a.magnetic-btn');
    if (btn) btn.innerHTML = isHi ? '<i data-lucide="message-circle" class="w-4 h-4"></i> डॉ. वैभव से व्हाट्सएप पर परामर्श लें' : '<i data-lucide="message-circle" class="w-4 h-4"></i> Consult Dr. Vaibhav on WhatsApp';
  }

  if (cards.length >= 2) {
    const c2 = cards[1];
    const role = c2.querySelector('.text-\\[10px\\].font-black');
    if (role) role.textContent = isHi ? 'हेड ऑफ ऑपरेशन्स एवं पेशेंट केयर' : 'Operations & Patient Care';
    const spec = c2.querySelector('.text-xs.font-semibold');
    if (spec) spec.textContent = isHi ? 'ऑपरेशन्स एवं लैब संबंध प्रमुख' : 'Head of Operations & Lab Relations';
    const stats = c2.querySelectorAll('.text-\\[11px\\].text-slate-400 span');
    if (stats.length >= 1) stats[0].textContent = isHi ? '⚡ जीरो-वेटिंग ओपीडी' : '⚡ Zero-Wait OPD';
    if (stats.length >= 3) stats[2].textContent = isHi ? 'केयर कोऑर्डिनेटर' : 'Care Coordinator';
    const allP = c2.querySelectorAll('p');
    const bio = c2.querySelector('p.font-normal, p.leading-relaxed') || (allP.length > 1 ? allP[1] : null);
    if (bio) bio.textContent = isHi ? 'सुगम ओपीडी प्रबंधन, ट्रूअलाइन डिजिटल लैब समन्वय, अपॉइंटमेंट और पारदर्शी उपचार योजना सुनिश्चित करते हैं।' : 'Oversees seamless patient concierge services, TruAlign digital lab order dispatching, appointment scheduling, and transparent treatment plan coordination.';
    const btn = c2.querySelector('a.magnetic-btn');
    if (btn) btn.innerHTML = isHi ? '<i data-lucide="message-circle" class="w-4 h-4 text-brand-950"></i> आकाश जी से चैट करें (पेशेंट केयर)' : '<i data-lucide="message-circle" class="w-4 h-4 text-brand-950"></i> Chat with Akash (Patient Care Desk)';
  }
}

function translateReviews(lang) {
  const isHi = lang === 'hi';
  const sec = document.getElementById('testimonials');
  if (!sec) return;

  const topBadge = sec.querySelector('.inline-flex span');
  if (topBadge) topBadge.textContent = isHi ? 'गूगल समीक्षाएं' : 'GOOGLE REVIEWS';

  const summaryBox = sec.querySelector('.max-w-md');
  if (summaryBox) {
    const basedOn = summaryBox.querySelector('p.text-sm');
    if (basedOn) {
      basedOn.innerHTML = isHi 
        ? 'आधारित है <span class="text-slate-900">58+ सत्यापित समीक्षाओं</span> पर' 
        : 'Based on <span class="text-slate-900">58+ Verified Reviews</span>';
    }
    const writeBtn = summaryBox.querySelector('a');
    if (writeBtn) {
      const svg = writeBtn.querySelector('svg');
      const svgHtml = svg ? svg.outerHTML : '';
      writeBtn.innerHTML = `${svgHtml} ${isHi ? 'गूगल पर समीक्षा लिखें' : 'Write a Review on Google'}`;
    }
  }

  const reviewsData = [
    {
      avatar: isHi ? 'वि.मि.' : 'VM',
      name: isHi ? 'विश्वेश्वर मिश्रा' : 'Vishveshwar Mishra',
      text: isHi 
        ? '"क्लिनिक का स्टाफ बहुत विनम्र है और माहौल बेहद साफ-सुथरा व सुरक्षित है। मेरे फुल-माउथ रिहैबिलिटेशन के दौरान डॉक्टर साहब का ध्यान सटीकता और लंबे समय तक चलने वाले परिणामों पर था। अगर आप भोपाल में स्माइल डिजाइनिंग या अलाइनर के लिए एक उच्च गुणवत्ता वाला डेंटिस्ट खोज रहे हैं, तो मैं हैप्पी व्हाइट्स की पुरजोर सिफारिश करता हूँ!"'
        : '"The staff is professional, and the environment is very clean and welcoming. I especially appreciated their focus on long-term results and precision during my full-mouth rehabilitation. If you\'re looking for a high-quality, patient-focused dentist in Bhopal, especially for smile designing or aligners, I highly recommend this place!"',
      tag: isHi ? 'फुल-माउथ रिहैबिलिटेशन' : 'Full-Mouth Rehabilitation'
    },
    {
      avatar: isHi ? 'ह.ल.' : 'HL',
      name: isHi ? 'हरकरन लबाना' : 'Harkaran Labana',
      text: isHi
        ? '"हैप्पी व्हाइट्स डेंटल क्लिनिक में मेरा अनुभव उत्कृष्ट रहा। क्लिनिक बेहद आधुनिक और सुव्यवस्थित है। डॉक्टर ने इलाज का हर चरण विस्तार से समझाया और पूरे समय मेरा आराम सुनिश्चित किया। सबसे ज्यादा मुझे उनके आधुनिक उपकरणों और साफ-सफाई ने प्रभावित किया। यह एक सामान्य डेंटल क्लिनिक से कहीं बेहतर है।"'
        : '"I had an excellent experience at Happy Whites Dental Clinic. The clinic is extremely clean, modern, and well organized. The dentist took time to explain every step of the treatment and made sure I was comfortable throughout. What impressed me most was the attention to detail and the use of advanced equipment. It feels more like a premium healthcare experience than a typical dental visit."',
      tag: isHi ? 'सामान्य डेंटल केयर' : 'General Dental Care'
    },
    {
      avatar: isHi ? 'नि.गो.' : 'NG',
      name: isHi ? 'निमिषा गोयल' : 'Nimisha Goyal',
      text: isHi
        ? '"इस डेंटल क्लिनिक में मेरा अनुभव बहुत शानदार रहा। जब मैं क्लिनिक पहुंची तो स्टाफ ने बहुत अच्छे से स्वागत किया जिससे मेरा डर दूर हो गया। डॉक्टर ने इलाज शुरू करने से पहले सब कुछ बहुत स्पष्टता से समझाया। क्लिनिक बहुत साफ है और मेरा इलाज पूरी तरह से दर्द-मुक्त रहा!"'
        : '"I had a really great experience at this dental clinic. The staff was very friendly and made me feel comfortable from the moment I walked in. The dentist explained everything clearly before starting the treatment, which helped ease my anxiety. The clinic is very clean, well maintained, and uses modern equipment. My treatment was completely painless!"',
      tag: isHi ? 'दर्द-मुक्त डेंटल उपचार' : 'Painless Dental Treatment'
    },
    {
      avatar: isHi ? 'नि.सू.' : 'NS',
      name: isHi ? 'नितिन सूद' : 'Nitin Sood',
      text: isHi
        ? '"क्लिनिक में बहुत ही बेहतरीन अनुभव मिला। डॉक्टर बहुत ही पेशेवर हैं, उन्होंने रूट कैनाल प्रक्रिया को बहुत अच्छी तरह समझाया और यह सुनिश्चित किया कि मुझे कोई दर्द न हो। स्टाफ बहुत विनम्र था और क्लिनिक की साफ-सफाई लाजवाब है।"'
        : '"Excellent experience at the clinic. The doctor was very professional, explained the root canal procedure clearly, and made sure I was comfortable throughout the treatment. The staff was polite and the clinic was very clean and well maintained."',
      tag: isHi ? 'रूट कैनाल ट्रीटमेंट' : 'Root Canal Treatment'
    },
    {
      avatar: isHi ? 'गो.चं.' : 'GC',
      name: isHi ? 'गोकुल चंद्रन' : 'Gokul Chandran',
      text: isHi
        ? '"मैंने शादी से पहले लेज़र टीथ व्हाइटनिंग कराई। केवल 45 मिनट में दांतों का रंग आश्चर्यजनक रूप से साफ और सफेद हो गया। सबसे अच्छी बात यह रही कि इसके बाद दांतों में कोई ठंडे-गर्म की झनझनाहट नहीं हुई। डॉ. वैभव और उनकी टीम का बहुत-बहुत धन्यवाद!"'
        : '"I got laser teeth whitening done before my wedding. In just 45 minutes, my teeth became noticeably brighter and whiter. The best part was zero post-treatment sensitivity. Thanks to Dr. Vaibhav and his team!"',
      tag: isHi ? 'लेज़र टीथ व्हाइटनिंग' : 'Laser Teeth Whitening'
    },
    {
      avatar: isHi ? 'आ.अ.' : 'AA',
      name: isHi ? 'आयशा अजहर' : 'Aysha Azhar',
      text: isHi
        ? '"मेरे सामने के दांतों के गैप के लिए मैंने ट्रूअलाइन अदृश्य अलाइनर लिया। किसी को पता भी नहीं चला कि मैं ब्रेसेस पहन रही हूँ और 6 महीने में मेरे दांत बिल्कुल सीधे हो गए। भोपाल में अलाइनर के लिए यह सबसे बेहतरीन क्लिनिक है।"'
        : '"I chose TruAlign clear aligners for my front teeth spacing. Nobody even noticed I was wearing aligners, and my teeth straightened completely in 6 months. Best dental clinic in Bhopal for clear aligners."',
      tag: isHi ? 'ट्रूअलाइन क्लियर अलाइनर' : 'TruAlign Clear Aligners'
    }
  ];

  const reviewCards = sec.querySelectorAll('.grid > div.bg-white');
  reviewCards.forEach((card, idx) => {
    const d = reviewsData[idx];
    if (!d) return;
    const p = card.querySelector('p.text-sm');
    if (p) p.textContent = d.text;
    const tag = card.querySelector('p.text-\\[11px\\]');
    if (tag) tag.textContent = d.tag;
    const authorP = card.querySelector('.font-bold.text-slate-900, p.font-bold');
    if (authorP && d.name) authorP.textContent = d.name;
    const avatar = card.querySelector('.w-10.h-10');
    if (avatar && d.avatar) avatar.textContent = d.avatar;
  });

  const bottomLink = sec.querySelector('.mt-10 a span');
  if (bottomLink) {
    bottomLink.textContent = isHi ? 'गूगल पर सभी 58+ समीक्षाएं देखें' : 'See All 58+ Reviews on Google';
  }
}

function translateFaq(lang) {
  const isHi = lang === 'hi';
  const faqItems = document.querySelectorAll('#faq .faq-item');
  faqItems.forEach((item, index) => {
    if (faqTranslations[index]) {
      const trans = faqTranslations[index][lang];
      const qSpan = item.querySelector('.faq-question span');
      if (qSpan && trans.q) qSpan.textContent = trans.q;
      const aP = item.querySelector('.faq-answer p');
      if (aP && trans.a) aP.innerHTML = trans.a;
    }
  });

  const bottomFaqBtn = document.querySelector('#faq .mt-8 a');
  if (bottomFaqBtn) {
    const span = bottomFaqBtn.querySelector('span');
    if (span) {
      span.textContent = isHi ? 'कोई अन्य सवाल है? व्हाट्सएप पर डॉ. वैभव से पूछें' : 'Have More Questions? Ask Dr. Vaibhav on WhatsApp';
    }
  }
}

function translateBlog(lang) {
  const isHi = lang === 'hi';
  const blogSec = document.getElementById('blog');
  if (!blogSec) return;

  const topBadge = blogSec.querySelector('.inline-flex span');
  if (topBadge) topBadge.textContent = isHi ? 'दांतों की देखभाल के टिप्स' : 'DENTAL HEALTH TIPS & ARTICLES';

  const blogData = [
    {
      cat: isHi ? 'डिजिटल डेंटिस्ट्री' : 'Digital Dentistry',
      title: isHi ? 'पारंपरिक पेस्ट की जगह 3D डिजिटल स्कैन क्यों बेहतर हैं' : 'Why 3D Digital Scans Are Replacing Traditional Dental Impressions',
      desc: isHi ? 'पुराने इंप्रेशन पेस्ट से उल्टी और असहजता होती है। जानें कैसे ऑप्टिकल 3D लेज़र स्कैनर मात्र 3 मिनट में दर्द-मुक्त सटीक माप लेता है।' : 'Traditional impression trays cause gagging and discomfort. Learn how optical 3D intraoral scanners capture 100,000+ data points in under 3 minutes — painlessly.',
      time: isHi ? '5 मिनट में पढ़ें' : '5 Min Read',
      btn: isHi ? 'डॉक्टर से पूछें' : 'Ask Doctor'
    },
    {
      cat: isHi ? 'अदृश्य अलाइनर' : 'Aligners',
      title: isHi ? 'अदृश्य अलाइनर बनाम मेटल तार: आपके लिए क्या सही है?' : 'Clear Aligners vs Metal Braces: Which Is Right for You?',
      desc: isHi ? 'सीधे दांत पाने के लिए अदृश्य अलाइनर और पुराने मेटल ब्रेसेस के आराम, दृश्यता, समय और खर्च की निष्पक्ष तुलना।' : 'Comparing comfort, visibility, treatment time, and cost between invisible clear aligners and traditional metal brackets for teeth straightening.',
      time: isHi ? '7 मिनट में पढ़ें' : '7 Min Read',
      btn: isHi ? 'डॉक्टर से पूछें' : 'Ask Doctor'
    },
    {
      cat: isHi ? 'रूट कैनाल' : 'Root Canal',
      title: isHi ? 'सिंगल-सिटिंग दर्द-मुक्त रूट कैनाल: 45 मिनट में क्या होता है' : 'Painless Single-Visit Root Canal: What to Expect in 45 Minutes',
      desc: isHi ? 'आधुनिक रोटरी एंडोडॉन्टिक्स और कम्प्यूटराइज्ड एनेस्थीसिया से आरसीटी पूरी तरह से दर्द-मुक्त हो गई है। जानें 1 सिटिंग प्रक्रिया।' : 'Modern rotary endodontics and computerized anesthesia make root canal treatment virtually painless. Here\'s what happens during a single-visit RCT.',
      time: isHi ? '6 मिनट में पढ़ें' : '6 Min Read',
      btn: isHi ? 'डॉक्टर से पूछें' : 'Ask Doctor'
    }
  ];

  const articles = blogSec.querySelectorAll('article');
  articles.forEach((art, idx) => {
    const d = blogData[idx];
    if (!d) return;
    const catSpan = art.querySelector('.absolute.top-3.left-3 span');
    if (catSpan) catSpan.textContent = d.cat;
    const h3 = art.querySelector('h3');
    if (h3) h3.textContent = d.title;
    const p = art.querySelector('p');
    if (p) p.textContent = d.desc;
    const timeSpan = art.querySelector('.p-5 span.text-\\[11px\\]');
    if (timeSpan) timeSpan.textContent = d.time;
    const a = art.querySelector('.p-5 a');
    if (a) a.innerHTML = `${d.btn} <i data-lucide="arrow-right" class="w-3 h-3"></i>`;
  });
}

function translateLocationSection(lang) {
  const isHi = lang === 'hi';
  const loc = document.getElementById('location');
  if (!loc) return;

  const topBadge = loc.querySelector('.inline-flex span, span.text-xs.font-extrabold');
  if (topBadge) topBadge.textContent = isHi ? 'क्लिनिक पता एवं संपर्क' : 'Location & Accessibility';

  const h3 = loc.querySelector('h3');
  if (h3) h3.textContent = isHi ? 'हैप्पी व्हाइट्स डेंटल क्लिनिक पधारें' : 'Visit Happy Whites Dental Clinic';

  const cards = loc.querySelectorAll('.flex.items-start');
  if (cards.length >= 1) {
    const h4 = cards[0].querySelector('h4');
    if (h4) h4.textContent = isHi ? 'क्लिनिक का पता' : 'Clinic Address';
    const p = cards[0].querySelector('p');
    if (p) p.innerHTML = isHi 
      ? 'चैंबर नं. 4, दूसरी मंजिल, महेंद्रा मेडिस्क्वेयर,<br>बावड़िया कलां मेन रोड, अरेरा कॉलोनी,<br>भोपाल, मध्य प्रदेश 462039 <span class="text-teal-700 font-bold">(अपोलो सेज अस्पताल के पास)</span>'
      : 'Chamber No. 4, 2nd Floor, Mahendra Medisquare,<br>Bawadiya Kalan Main Rd, Arera Colony,<br>Bhopal, Madhya Pradesh 462039 <span class="text-teal-700 font-bold">(Near ApolloSAGE Hospital)</span>';
  }
  if (cards.length >= 2) {
    const h4 = cards[1].querySelector('h4');
    if (h4) h4.textContent = isHi ? 'ओपीडी का समय' : 'OPD Timings';
    const p = cards[1].querySelector('p');
    if (p) p.innerHTML = isHi
      ? '<strong class="text-slate-800 font-bold">सुबह:</strong> 10:00 AM – 02:00 PM<br><strong class="text-slate-800 font-bold">शाम:</strong> 05:00 PM – 09:00 PM<br><span class="text-emerald-600 font-bold">सोमवार से शनिवार खुला (रविवार केवल पूर्व अपॉइंटमेंट से)</span>'
      : '<strong class="text-slate-800 font-bold">Morning:</strong> 10:00 AM – 02:00 PM<br><strong class="text-slate-800 font-bold">Evening:</strong> 05:00 PM – 09:00 PM<br><span class="text-emerald-600 font-bold">Open Monday to Saturday (Sunday by Prior Appointment)</span>';
  }
  if (cards.length >= 3) {
    const h4 = cards[2].querySelector('h4');
    if (h4) h4.textContent = isHi ? 'डॉक्टर एवं क्लिनिक हेल्पलाइन' : 'Direct Doctor & Clinic Line';
  }

  // Bottom action buttons in Card 1
  const mapBtn = loc.querySelector('a[href*="maps.google.com"]');
  if (mapBtn) {
    mapBtn.innerHTML = isHi 
      ? '<i data-lucide="navigation" class="w-4 h-4 text-teal-600"></i> गूगल मैप्स रूट खोलें' 
      : '<i data-lucide="navigation" class="w-4 h-4 text-teal-600"></i> Open Google Maps Route';
  }
  const opdBtn = loc.querySelector('button[onclick*="openServiceBookingModal"]');
  if (opdBtn) {
    opdBtn.innerHTML = isHi
      ? '<i data-lucide="calendar-plus" class="w-4 h-4"></i> ओपीडी विज़िट शेड्यूल करें'
      : '<i data-lucide="calendar-plus" class="w-4 h-4"></i> Schedule OPD Visit';
  }

  // Card 2 (Neighborhood Proximity Card)
  const proximityCard = loc.querySelectorAll('.lg\\:col-span-6')[1];
  if (proximityCard) {
    const proxH3 = proximityCard.querySelector('h3');
    if (proxH3) proxH3.textContent = isHi ? 'महेंद्रा मेडिस्क्वेयर में प्राइम लोकेशन' : 'Prime Location at Mahendra Medisquare';
    const proxP = proximityCard.querySelector('p.text-xs');
    if (proxP) proxP.textContent = isHi 
      ? 'बावड़िया कलां मेन रोड पर स्थित, बेसमेंट पार्किंग, लिफ्ट सुविधा और दक्षिण भोपाल के सभी प्रमुख इलाकों से सीधी कनेक्टिविटी।' 
      : 'Conveniently located on Bawadiya Kalan Main Road with dedicated basement parking, lift access, and central accessibility across South Bhopal.';
    
    const rows = proximityCard.querySelectorAll('.space-y-2\\.5 > div');
    if (rows.length >= 1) {
      const spans = rows[0].querySelectorAll('span');
      if (spans.length >= 1) spans[0].textContent = isHi ? '📍 10 नंबर मार्केट / अरेरा कॉलोनी से:' : '📍 From 10 No. Market / Arera Colony:';
      if (spans.length >= 2) spans[1].textContent = isHi ? '5 मिनट की दूरी' : '5 Mins Drive';
    }
    if (rows.length >= 2) {
      const spans = rows[1].querySelectorAll('span');
      if (spans.length >= 1) spans[0].textContent = isHi ? '📍 गुलमोहर कॉलोनी / त्रिलंगा से:' : '📍 From Gulmohar Colony / Trilanga:';
      if (spans.length >= 2) spans[1].textContent = isHi ? '3 मिनट की दूरी' : '3 Mins Drive';
    }
    if (rows.length >= 3) {
      const spans = rows[2].querySelectorAll('span');
      if (spans.length >= 1) spans[0].textContent = isHi ? '📍 शाहपुरा / रोहित नगर से:' : '📍 From Shahpura / Rohit Nagar:';
      if (spans.length >= 2) spans[1].textContent = isHi ? '7 मिनट की दूरी' : '7 Mins Drive';
    }

    const waLocBtn = proximityCard.querySelector('a[href*="wa.me"]');
    if (waLocBtn) {
      waLocBtn.innerHTML = isHi
        ? '<i data-lucide="message-circle" class="w-4 h-4 text-emerald-600"></i> व्हाट्सएप पर लोकेशन पिन मंगवाएं'
        : '<i data-lucide="message-circle" class="w-4 h-4 text-emerald-600"></i> Request WhatsApp Location Pin';
    }
  }
}

function translateFooter(lang) {
  const isHi = lang === 'hi';
  const footer = document.querySelector('footer');
  if (!footer) return;

  const desc = footer.querySelector('p.text-xs');
  if (desc) desc.textContent = isHi ? 'हैप्पी व्हाइट्स डेंटल क्लिनिक भोपाल में दर्द-मुक्त और आधुनिक डिजिटल डेंटिस्ट्री का अग्रणी केंद्र है, जो डॉ. वैभव श्रीवास्तव द्वारा संचालित है।' : "Bhopal's trusted centre for painless & digital dentistry by Dr. Vaibhav Shrivastav.";

  const h4s = footer.querySelectorAll('h4');
  if (h4s.length >= 1) h4s[0].textContent = isHi ? 'मुख्य लिंक्स' : 'Quick Links';
  if (h4s.length >= 2) h4s[1].textContent = isHi ? 'संपर्क' : 'Contact';
  if (h4s.length >= 3) h4s[2].textContent = isHi ? 'क्लिनिक समय' : 'OPD Timings';

  const links = footer.querySelectorAll('a');
  links.forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === '#cases') a.textContent = isHi ? 'केस परिणाम' : 'Cases';
    else if (href === '#specialties') a.textContent = isHi ? 'उपचार सेवाएं' : 'Treatments';
    else if (href === '#testimonials') a.textContent = isHi ? 'मरीजों की राय' : 'Reviews';
    else if (href === '#faq') a.textContent = isHi ? 'सवाल-जवाब' : 'FAQ';
    else if (href === '#location') a.textContent = isHi ? 'क्लिनिक पता' : 'Location';
  });

  const cols = footer.querySelectorAll('.grid > div');
  if (cols.length >= 3) {
    const contactPs = cols[2].querySelectorAll('p');
    if (contactPs.length >= 1) contactPs[0].textContent = isHi ? 'चैंबर नंबर 4, दूसरी मंजिल' : 'Chamber No. 4, 2nd Floor';
    if (contactPs.length >= 2) contactPs[1].textContent = isHi ? 'महेंद्रा मेडिस्क्वेयर, भोपाल' : 'Mahendra Medisquare, Bhopal';
  }
  if (cols.length >= 4) {
    const timingPs = cols[3].querySelectorAll('p');
    if (timingPs.length >= 1) timingPs[0].textContent = isHi ? 'सोम–शनि: सुबह 10 – दोपहर 2 बजे' : 'Mon–Sat: 10 AM – 2 PM';
    if (timingPs.length >= 2) timingPs[1].textContent = isHi ? 'सोम–शनि: शाम 5 – रात 9 बजे' : 'Mon–Sat: 5 PM – 9 PM';
    if (timingPs.length >= 3) timingPs[2].textContent = isHi ? 'रविवार: केवल अपॉइंटमेंट द्वारा' : 'Sunday: By Appointment';
  }

  const allFooterPs = footer.querySelectorAll('p');
  if (allFooterPs.length > 0) {
    allFooterPs[0].textContent = isHi 
      ? 'हैप्पी व्हाइट्स डेंटल क्लिनिक भोपाल में दर्द-मुक्त और आधुनिक डिजिटल डेंटिस्ट्री का अग्रणी केंद्र है, जो डॉ. वैभव श्रीवास्तव द्वारा संचालित है।' 
      : "Bhopal's trusted centre for painless & digital dentistry by Dr. Vaibhav Shrivastav.";
    allFooterPs[allFooterPs.length - 1].textContent = isHi 
      ? '© 2026 हैप्पी व्हाइट्स डेंटल क्लिनिक। सर्वाधिकार सुरक्षित।' 
      : '© 2026 Happy Whites Dental Clinic. All rights reserved.';
  }
}

function translateChatbot(lang) {
  const isHi = lang === 'hi';
  
  // Trigger button text
  const triggerText = document.querySelector('#ai-chatbot-trigger span');
  if (triggerText) {
    triggerText.textContent = isHi ? 'एआई से पूछें' : 'Ask AI Assistant';
  }

  // Float whatsapp text
  const waFloatText = document.querySelector('#whatsapp-float span');
  if (waFloatText) {
    waFloatText.textContent = isHi ? 'व्हाट्सएप चैट' : 'Chat on WhatsApp';
  }

  // Chat window header
  const chatHeaderTitle = document.querySelector('.ai-chatbot-header .font-bold');
  if (chatHeaderTitle) {
    chatHeaderTitle.textContent = isHi ? 'हैप्पी व्हाइट्स डेंटल एआई असिस्टेंट' : 'Happy Whites AI Assistant';
  }
  const chatHeaderSub = document.querySelector('.ai-chatbot-header .text-\\[11px\\]');
  if (chatHeaderSub) {
    chatHeaderSub.textContent = isHi ? 'उपचार, शुल्क और बुकिंग के बारे में पूछें' : 'Ask about treatments, pricing, bookings';
  }

  // Chat input
  const chatInput = document.getElementById('ai-chatbot-input');
  if (chatInput) {
    chatInput.placeholder = isHi ? 'अपना सवाल यहाँ लिखें...' : 'Type your question...';
  }

  // Quick reply buttons
  const quickReplies = document.querySelectorAll('.ai-quick-reply');
  if (quickReplies.length >= 5) {
    quickReplies[0].textContent = isHi ? '🦷 उपचार' : '🦷 Treatments';
    quickReplies[1].textContent = isHi ? '📅 अपॉइंटमेंट बुक करें' : '📅 Book Now';
    quickReplies[2].textContent = isHi ? '🕐 क्लिनिक समय' : '🕐 Timings';
    quickReplies[3].textContent = isHi ? '📍 क्लिनिक पता' : '📍 Location';
    quickReplies[4].textContent = isHi ? '💰 खर्च व फीस' : '💰 Pricing';
  }

  // Initial bot message if default
  const firstBotMsg = document.querySelector('#ai-chatbot-messages .ai-msg-bot');
  if (firstBotMsg && (!firstBotMsg.dataset.customMessage || firstBotMsg.dataset.customMessage === 'default')) {
    firstBotMsg.dataset.customMessage = 'default';
    firstBotMsg.innerHTML = isHi
      ? 'नमस्ते! 🙏 मैं हैप्पी व्हाइट्स डेंटल एआई असिस्टेंट हूँ। मैं आपकी सहायता कर सकता हूँ:<br><br>• उपचार और शुल्क की जानकारी<br>• अपॉइंटमेंट बुकिंग<br>• क्लिनिक समय और स्थान<br>• दांतों की देखभाल के टिप्स<br><br>आज मैं आपकी क्या मदद करूँ?'
      : 'Namaste! 🙏 I\'m the Happy Whites AI Assistant. I can help you with:<br><br>• Treatment information & pricing<br>• Booking appointments<br>• Clinic timings & location<br>• Dental health tips<br><br>How can I help you today?';
  }
}

function translateBookingWizard(lang) {
  const isHi = lang === 'hi';
  
  // 1. Wizard Headings and Hints
  document.querySelectorAll('.wizard-step-1').forEach(step => {
    const lbl = step.querySelector('label');
    if (lbl) lbl.textContent = isHi ? '1. उपचार चुनें' : '1. Select Procedure';
    const hint = step.querySelector('span.text-sky-300');
    if (hint) hint.textContent = isHi ? 'चुनने के लिए टैप करें' : 'Tap to choose';
    const btn = step.querySelector('button.magnetic-btn');
    if (btn) btn.innerHTML = isHi ? 'तारीख और स्लॉट चुनें →' : 'Continue to Date & Slot →';
  });

  // 2. Procedure Chips Text and Subtitles
  const chips = document.querySelectorAll('.proc-chip');
  chips.forEach(chip => {
    const proc = chip.dataset.proc || '';
    const spans = chip.querySelectorAll('span');
    const nameEl = spans.length >= 2 ? spans[spans.length - 2] : null;
    const subEl = spans.length >= 1 ? spans[spans.length - 1] : null;
    const badgeEl = chip.querySelector('div > span');
    
    if (proc.includes('TruAlign')) {
      if (nameEl) nameEl.textContent = isHi ? 'ट्रूअलाइन अलाइनर' : 'TruAlign Aligners';
      if (subEl) subEl.textContent = isHi ? 'अदृश्य ब्रेसेस' : 'Invisible Braces';
      if (badgeEl) badgeEl.textContent = isHi ? 'लोकप्रिय' : 'Popular';
    } else if (proc.includes('3D Digital')) {
      if (nameEl) nameEl.textContent = isHi ? '3D डिजिटल स्कैन' : '3D Digital Scan';
      if (subEl) subEl.textContent = isHi ? '₹0 फ्री (मूल्य ₹5,000)' : '₹0 Worth ₹5,000';
      if (badgeEl) badgeEl.textContent = isHi ? 'फ्री' : 'FREE';
    } else if (proc.includes('RCT')) {
      if (nameEl) nameEl.textContent = isHi ? 'सिंगल-सिटिंग आरसीटी' : 'Single-Visit RCT';
      if (subEl) subEl.textContent = isHi ? 'दर्द-मुक्त रोटरी' : 'Rotary Painless';
      if (badgeEl) badgeEl.textContent = isHi ? '45 मिनट' : '45 Min';
    } else if (proc.includes('Implants')) {
      if (nameEl) nameEl.textContent = isHi ? 'डेंटल इम्प्लांट्स' : 'Dental Implants';
      if (subEl) subEl.textContent = isHi ? 'ज़िरकोनिया क्राउन' : 'Zirconia Crown';
      if (badgeEl) badgeEl.textContent = isHi ? 'आजीवन' : 'Lifetime';
    }
  });

  // 3. Step 2 Elements
  document.querySelectorAll('.wizard-step-2').forEach(step => {
    const labels = step.querySelectorAll('label');
    if (labels.length >= 1) {
      labels[0].textContent = isHi ? '2. अपनी पसंद का स्लॉट चुनें' : '2. Choose Preferred Slot';
    }
    if (labels.length >= 2) {
      labels[1].textContent = isHi ? 'अपॉइंटमेंट की तारीख' : 'Appointment Date';
    }
    if (labels.length >= 3) {
      labels[2].textContent = isHi ? '1 घंटे का समय स्लॉट चुनें' : 'Choose 1-Hour Time Slot';
    }

    const backBtn = step.querySelector('button[onclick="goToStep(1)"]');
    if (backBtn) backBtn.innerHTML = isHi ? '<i data-lucide="arrow-left" class="w-3 h-3"></i> वापस' : '<i data-lucide="arrow-left" class="w-3 h-3"></i> Back';

    // Clinic Hours banner
    const hoursRow = step.querySelector('.clinic-hours-banner') || step.querySelector('div.flex.items-center.justify-between.text-xs');
    if (hoursRow) {
      const spans = hoursRow.querySelectorAll('span');
      if (spans.length >= 1) spans[0].textContent = isHi ? 'क्लिनिक समय:' : 'Clinic Hours:';
      if (spans.length >= 2) spans[1].textContent = isHi ? 'सुबह 10:00 – रात 09:00' : '10:00 AM – 09:00 PM';
      if (spans.length >= 3) spans[2].textContent = isHi ? 'सातों दिन खुला' : 'Open 7 Days';
    }

    const availHint = step.querySelector('span.text-emerald-400.font-bold.flex');
    if (availHint) {
      availHint.innerHTML = isHi 
        ? '<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> हरा = उपलब्ध'
        : '<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Green = Available';
    }

    // Exact slot banner
    const exactSlotBox = step.querySelector('.exact-slot-banner') || step.querySelector('div.text-\\[11px\\].text-teal-300');
    if (exactSlotBox) {
      const exactLbl = exactSlotBox.querySelector('span.flex.items-center > span');
      if (exactLbl) exactLbl.textContent = isHi ? 'निश्चित स्लॉट:' : 'Exact Slot:';
      const confirmedBadge = exactSlotBox.querySelector('.uppercase');
      if (confirmedBadge) confirmedBadge.textContent = isHi ? 'कन्फर्म' : 'Confirmed';
    }

    // Continue to Step 3
    const btn = step.querySelector('button.magnetic-btn');
    if (btn) btn.innerHTML = isHi ? 'मरीज की जानकारी दर्ज करें →' : 'Continue to Patient Details →';
  });

  // Filter Buttons
  document.querySelectorAll('.time-filter-all').forEach(b => b.textContent = isHi ? 'सभी समय' : 'All Hours');
  document.querySelectorAll('.time-filter-morning').forEach(b => b.textContent = isHi ? 'सुबह' : 'Morning');
  document.querySelectorAll('.time-filter-afternoon').forEach(b => b.textContent = isHi ? 'दोपहर' : 'Afternoon');
  document.querySelectorAll('.time-filter-evening').forEach(b => b.textContent = isHi ? 'शाम' : 'Evening');

  // 4. Step 3 Elements
  document.querySelectorAll('.wizard-step-3').forEach(step => {
    const lbl = step.querySelector('label.uppercase');
    if (lbl) lbl.textContent = isHi ? '3. मरीज की जानकारी' : '3. Patient Information';
    const backBtn = step.querySelector('button[onclick="goToStep(2)"]');
    if (backBtn) backBtn.textContent = isHi ? '← वापस' : '← Back';
    const changeBtn = step.querySelector('button[onclick="goToStep(1)"]');
    if (changeBtn) changeBtn.textContent = isHi ? 'बदलें' : 'Change';

    const summaryProc = step.querySelector('.summary-proc');
    if (summaryProc) {
      summaryProc.textContent = isHi ? (PROCEDURE_HI_MAP[bookingData.procedure] || bookingData.procedure) : bookingData.procedure;
    }

    const summarySlot = step.querySelector('.summary-slot');
    if (summarySlot) {
      if (bookingData.time) {
        summarySlot.textContent = isHi ? `${bookingData.time} (कन्फर्म स्लॉट)` : `${bookingData.time} (Confirmed Slot)`;
      } else {
        summarySlot.textContent = isHi ? 'शाम का स्लॉट (05:00 PM)' : 'Evening Slot (05:00 PM)';
      }
    }

    const labels = step.querySelectorAll('label');
    if (labels.length >= 2) {
      labels[1].textContent = isHi ? 'मरीज का पूरा नाम' : 'Patient Full Name';
    }
    if (labels.length >= 3) {
      labels[2].textContent = isHi ? 'मोबाइल नंबर' : 'Mobile Number';
    }

    const nameInput = step.querySelector('.wizard-name-input');
    if (nameInput) nameInput.placeholder = isHi ? 'मरीज का पूरा नाम दर्ज करें' : 'Enter patient name';

    const counter = step.querySelector('.phone-digit-counter');
    if (counter) {
      const len = bookingData.phone ? bookingData.phone.replace(/\D/g, '').length : 0;
      counter.textContent = isHi ? `${len}/10 अंक` : `${len}/10 Digits`;
    }

    const submitBtn = step.querySelector('button.magnetic-btn');
    if (submitBtn) {
      submitBtn.innerHTML = isHi
        ? '<i data-lucide="check-circle" class="w-4 h-4"></i> व्हाट्सएप पर बुकिंग पक्की करें'
        : '<i data-lucide="check-circle" class="w-4 h-4"></i> Confirm Booking on WhatsApp';
    }
  });

  // Modal Title and Subtitle
  const modalHeader = document.querySelector('#booking-modal .px-5 h3');
  if (modalHeader) modalHeader.textContent = isHi ? 'स्मार्ट ओपीडी बुकिंग टूल' : 'Smart OPD Booking Tool';
  const modalSub = document.querySelector('#booking-modal .px-5 p');
  if (modalSub) modalSub.textContent = isHi ? 'हैप्पी व्हाइट्स डेंटल क्लिनिक, भोपाल' : 'Happy Whites Dental Clinic, Bhopal';

  const heroHeader = document.querySelector('#booking-tool h3');
  if (heroHeader) heroHeader.textContent = isHi ? 'स्मार्ट ओपीडी बुकिंग टूल' : 'Smart OPD Booking Tool';
  const heroSub = document.querySelector('#booking-tool p');
  if (heroSub) heroSub.textContent = isHi ? 'हैप्पी व्हाइट्स डेंटल क्लिनिक, भोपाल' : 'Happy Whites Dental Clinic, Bhopal';

  document.querySelectorAll('.step-badge').forEach(badge => {
    badge.innerText = isHi ? `चरण ${currentWizardStep} / 3` : `Step ${currentWizardStep} of 3`;
  });
}

function translateSliderAndBeforeAfter(lang) {
  const isHi = lang === 'hi';
  
  // Section top badge
  const topBadge = document.querySelector('#transformation .inline-flex span:last-child');
  if (topBadge) topBadge.textContent = isHi ? 'लाइव क्लिनिकल कॉन्ट्रास्ट प्रीव्यू' : 'Live Clinical Contrast Preview';

  // Before badge
  const bBadge = document.querySelector('#before-badge span.whitespace-nowrap');
  if (bBadge) {
    bBadge.textContent = isHi 
      ? '🔍 पहले: दांतों का पीलापन व दाग-धब्बे' 
      : '🔍 BEFORE: Natural Tooth Shade & Coffee Staining';
  }

  // After badge
  const aBadge = document.querySelector('#after-badge span.whitespace-nowrap');
  if (aBadge) {
    aBadge.textContent = isHi 
      ? '✨ बाद: 8 शेड चमकदार व सफेद मुस्कान' 
      : '✨ AFTER: TruAlign & Laser Whitening (8 Shades Brightened)';
  }

  // Presets
  const p0 = document.querySelector('#preset-0 span:last-child');
  if (p0) p0.textContent = isHi ? '१००% पुराना शेड (पहले)' : '100% Stained (Before)';
  
  const p50 = document.querySelector('#preset-50 span:last-child');
  if (p50) p50.textContent = isHi ? 'तुलना करें (50/50)' : '50/50 Compare';

  const p100 = document.querySelector('#preset-100 span:last-child');
  if (p100) p100.textContent = isHi ? '१००% सफेद दांत (बाद)' : '100% Whitened (After)';

  // Slider bottom bar text
  const sliderBar = document.querySelector('#transformation .border-t.border-slate-800\\/80');
  if (sliderBar) {
    const textSpan = sliderBar.querySelector('.text-xs span');
    if (textSpan) {
      textSpan.textContent = isHi
        ? 'इलाज से पहले और बाद की चमक देखने के लिए स्लाइडर को बाएं या दाएं खींचें।'
        : 'Drag the central divider left or right to inspect before and after enamel brightness.';
    }
    const centerBtn = sliderBar.querySelector('button');
    if (centerBtn) centerBtn.textContent = isHi ? 'बीच में' : 'Center';
  }

  const sliderReadout = document.getElementById('slider-readout');
  if (sliderReadout) {
    if (sliderReadout.innerText.includes('50%')) {
      sliderReadout.innerText = isHi ? 'विभाजन: 50% / 50%' : 'Split: 50% / 50%';
    }
  }
}

function translateServiceModal(lang) {
  const isHi = lang === 'hi';
  const modal = document.getElementById('service-booking-modal');
  if (!modal) return;

  const headerTitle = modal.querySelector('h3');
  if (headerTitle) headerTitle.textContent = isHi ? 'अपॉइंटमेंट बुक करें' : 'Book Appointment';

  const opdBadge = modal.querySelector('span.bg-emerald-950');
  if (opdBadge) opdBadge.textContent = isHi ? 'सीधी ओपीडी' : 'Direct OPD';

  const subtitle = modal.querySelector('.text-\\[11px\\].font-semibold.text-slate-400');
  if (subtitle) subtitle.textContent = isHi ? 'हैप्पी व्हाइट्स डेंटल • डॉ. वैभव श्रीवास्तव' : 'Happy Whites Dental • Dr. Vaibhav Shrivastav';

  const selectedServiceLabel = modal.querySelector('.text-\\[10px\\].font-extrabold.uppercase.tracking-widest');
  if (selectedServiceLabel) selectedServiceLabel.textContent = isHi ? 'चुनी गई डेंटल सेवा' : 'Selected Dental Service';

  const locationText = modal.querySelector('.mt-2\\.5 span:first-child');
  if (locationText) {
    locationText.innerHTML = isHi
      ? '<i data-lucide="map-pin" class="w-3.5 h-3.5 text-amber-400"></i> बावड़िया कलां, भोपाल'
      : '<i data-lucide="map-pin" class="w-3.5 h-3.5 text-amber-400"></i> Bawadiya Kalan, Bhopal';
  }

  const zeroFeeText = modal.querySelector('.mt-2\\.5 span:last-child');
  if (zeroFeeText) {
    zeroFeeText.innerHTML = isHi
      ? '<i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-400"></i> शून्य रजिस्ट्रेशन शुल्क'
      : '<i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-400"></i> Zero Registration Fee';
  }

  const labels = modal.querySelectorAll('label');
  labels.forEach(lbl => {
    const txt = lbl.textContent;
    if (txt.includes('Procedure') || txt.includes('उपचार')) {
      lbl.textContent = isHi ? 'उपचार / प्रक्रिया' : 'Procedure / Treatment';
    } else if (txt.includes('Patient Full Name') || txt.includes('मरीज का पूरा नाम')) {
      lbl.innerHTML = isHi ? 'मरीज का पूरा नाम <span class="text-rose-400">*</span>' : 'Patient Full Name <span class="text-rose-400">*</span>';
    } else if (txt.includes('WhatsApp Mobile Number') || txt.includes('व्हाट्सएप मोबाइल नंबर')) {
      lbl.innerHTML = isHi ? 'व्हाट्सएप मोबाइल नंबर <span class="text-rose-400">*</span>' : 'WhatsApp Mobile Number <span class="text-rose-400">*</span>';
    } else if (txt.includes('Preferred Date') || txt.includes('पसंदीदा तारीख')) {
      lbl.textContent = isHi ? 'पसंदीदा तारीख' : 'Preferred Date';
    } else if (txt.includes('Preferred OPD Shift') || txt.includes('पसंदीदा ओपीडी शिफ्ट')) {
      lbl.textContent = isHi ? 'पसंदीदा ओपीडी शिफ्ट' : 'Preferred OPD Shift';
    }
  });

  const patientNameInput = document.getElementById('modal_patient_name');
  if (patientNameInput) {
    patientNameInput.placeholder = isHi ? 'मरीज का पूरा नाम दर्ज करें' : 'Enter patient full name';
  }

  const shiftSelect = document.getElementById('modal_appointment_slot');
  if (shiftSelect && shiftSelect.options.length >= 3) {
    shiftSelect.options[0].text = isHi ? 'सुबह (10:00 AM – 02:00 PM)' : 'Morning (10 AM – 2 PM)';
    shiftSelect.options[1].text = isHi ? 'शाम (05:00 PM – 09:00 PM)' : 'Evening (5 PM – 9 PM)';
    shiftSelect.options[2].text = isHi ? 'फ्लेक्सिबल / व्हाट्सएप पर कन्फर्म करें' : 'Flexible / Confirm on WhatsApp';
  }

  const serviceSelect = document.getElementById('modal_service_select');
  if (serviceSelect) {
    const serviceOptionsMap = {
      'In-House TruAlign Clear Aligners (Invisible Braces)': isHi ? 'इन-हाउस ट्रूअलाइन अलाइनर (अदृश्य ब्रेसेस)' : 'In-House TruAlign Clear Aligners (Invisible Braces)',
      'Single-Sitting Painless Rotary RCT': isHi ? 'सिंगल-सिटिंग दर्द-मुक्त रोटरी आरसीटी' : 'Single-Sitting Painless Rotary RCT',
      'Permanent Dental Implants & Zirconia Crown': isHi ? 'स्थायी डेंटल इम्प्लांट्स एवं ज़िरकोनिया क्राउन' : 'Permanent Dental Implants & Zirconia Crown',
      'Laser Teeth Whitening (8 Shades Brighter)': isHi ? 'लेज़र टीथ व्हाइटनिंग (8 शेड चमकदार)' : 'Laser Teeth Whitening (8 Shades Brighter)',
      'Ultrasonic Dental Scaling & Deep Polishing': isHi ? 'अल्ट्रासोनिक स्केलिंग एवं डीप पॉलिशिंग' : 'Ultrasonic Dental Scaling & Deep Polishing',
      'Wisdom Tooth Pain / Extraction': isHi ? 'अक्ल दाढ़ का दर्द / निष्कासन' : 'Wisdom Tooth Pain / Extraction',
      'FREE 3D Digital Dental Scan & Consultation': isHi ? 'मुफ़्त 3D डिजिटल स्कैन एवं परामर्श' : 'FREE 3D Digital Dental Scan & Consultation'
    };
    Array.from(serviceSelect.options).forEach(opt => {
      for (const [enKey, hiVal] of Object.entries(serviceOptionsMap)) {
        if (opt.value === enKey || opt.text === enKey || opt.text === hiVal) {
          opt.text = isHi ? hiVal : enKey;
          break;
        }
      }
    });
  }

  const cardTitle = modal.querySelector('#modal-proc-title, #modal_service_name');
  if (cardTitle) {
    const raw = cardTitle.textContent.trim();
    if (isHi) {
      if (raw.includes('TruAlign') || raw.includes('Aligners')) cardTitle.textContent = 'इन-हाउस ट्रूअलाइन क्लियर अलाइनर';
      else if (raw.includes('RCT')) cardTitle.textContent = 'सिंगल-सिटिंग दर्द-मुक्त रोटरी आरसीटी';
      else if (raw.includes('Implant')) cardTitle.textContent = 'स्थायी डेंटल इम्प्लांट्स एवं क्राउन';
      else if (raw.includes('Whitening')) cardTitle.textContent = 'लेज़र टीथ व्हाइटनिंग';
      else if (raw.includes('Scan')) cardTitle.textContent = 'मुफ़्त 3D डिजिटल स्कैन';
    } else {
      if (raw.includes('ट्रूअलाइन')) cardTitle.textContent = 'In-House TruAlign Clear Aligners';
      else if (raw.includes('आरसीटी')) cardTitle.textContent = 'Single-Sitting Painless Rotary RCT';
      else if (raw.includes('इम्प्लांट्स')) cardTitle.textContent = 'Permanent Dental Implants & Zirconia Crown';
      else if (raw.includes('व्हाइटनिंग')) cardTitle.textContent = 'Laser Teeth Whitening';
      else if (raw.includes('डिजिटल स्कैन')) cardTitle.textContent = 'FREE 3D Digital Dental Scan';
    }
  }

  const specBadge = modal.querySelector('#modal-proc-badge, .text-amber-400.bg-amber-400\\/10');
  if (specBadge) specBadge.textContent = isHi ? 'विशेषज्ञ उपचार' : 'Specialty';

  const digitCounter = modal.querySelector('#modal-phone-digit-counter, .phone-digit-counter');
  if (digitCounter) {
    const val = (document.getElementById('modal_patient_phone')?.value || '').replace(/\D/g, '').length;
    digitCounter.textContent = isHi ? `${val}/10 अंक` : `${val}/10 Digits`;
  }

  const submitBtn = modal.querySelector('button[onclick="submitModalWhatsAppBooking()"]');
  if (submitBtn) {
    submitBtn.innerHTML = isHi
      ? '<i data-lucide="message-circle" class="w-4 h-4 sm:w-5 sm:h-5 text-emerald-300"></i> <span>डॉ. वैभव के साथ बुकिंग पक्की करें</span>'
      : '<i data-lucide="message-circle" class="w-4 h-4 sm:w-5 sm:h-5 text-emerald-300"></i> <span>Confirm Booking with Dr. Vaibhav</span>';
  }

  const trustDiv = modal.querySelector('.text-\\[10px\\].font-bold.text-slate-400.pt-1');
  if (trustDiv) {
    trustDiv.innerHTML = isHi
      ? '<span class="flex items-center gap-1"><i data-lucide="clock" class="w-3 h-3 text-teal-400"></i> 15 मिनट में कन्फर्मेशन</span><span>•</span><span class="flex items-center gap-1"><i data-lucide="shield" class="w-3 h-3 text-emerald-400"></i> कोई स्पैम नहीं</span>'
      : '<span class="flex items-center gap-1"><i data-lucide="clock" class="w-3 h-3 text-teal-400"></i> Fast 15-Min Confirmation</span><span>•</span><span class="flex items-center gap-1"><i data-lucide="shield" class="w-3 h-3 text-emerald-400"></i> No Spam Guarantee</span>';
  }
}

function translateModals(lang) {
  const isHi = lang === 'hi';

  // 1. Lightbox modal
  const lightbox = document.getElementById('clinic-lightbox');
  if (lightbox) {
    const title = lightbox.querySelector('#lightbox-title');
    if (title && (title.textContent.includes('Infrastructure') || title.textContent.includes('इंफ्रास्ट्रक्चर'))) {
      title.textContent = isHi ? 'आधुनिक क्लिनिकल इंफ्रास्ट्रक्चर' : 'Live Clinical Infrastructure';
    }
    const cBtn = lightbox.querySelector('a[href*="wa.me"]');
    if (cBtn) {
      cBtn.innerHTML = isHi 
        ? '<i data-lucide="message-circle" class="w-3.5 h-3.5"></i> व्हाट्सएप पर परामर्श लें' 
        : '<i data-lucide="message-circle" class="w-3.5 h-3.5"></i> Consult on WhatsApp';
    }
  }

  // 2. Video modal
  const videoModal = document.getElementById('clinic-video-modal');
  if (videoModal) {
    const h3 = videoModal.querySelector('h3');
    if (h3) {
      h3.innerHTML = isHi 
        ? 'वर्चुअल क्लिनिक टूर एवं पेशेंट अनुभव <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">सत्यापित भोपाल</span>' 
        : 'Virtual Clinic Tour & Patient Stories <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Verified Bhopal</span>';
    }
    const subP = videoModal.querySelector('.px-5 p');
    if (subP) {
      subP.textContent = isHi ? 'हैप्पी व्हाइट्स डेंटल क्लिनिक के अंदर • महेंद्रा मेडिस्क्वेयर' : 'Inside Happy Whites Dental Clinic • Mahendra Medisquare';
    }

    const walkTag = videoModal.querySelector('.aspect-video span.uppercase');
    if (walkTag) walkTag.textContent = isHi ? 'क्लिनिकल वॉकथ्रू' : 'Clinical Walkthrough';

    const walkH4 = videoModal.querySelector('.aspect-video h4');
    if (walkH4) walkH4.textContent = isHi ? 'अत्याधुनिक डिजिटल ऑपरेटरी टूर' : 'State-of-the-Art Digital Operatory Tour';

    const walkP = videoModal.querySelector('.aspect-video p');
    if (walkP) walkP.textContent = isHi ? '3D इंट्राओरल स्कैनर • क्लास-बी ऑटोक्लेव • सिंगल-सिटिंग आरसीटी सेटअप' : '3D Intraoral Scanners • Class-B Autoclave • Single-Sitting RCT Setup';

    const uhdBadge = videoModal.querySelector('.aspect-video .absolute.top-3.right-3');
    if (uhdBadge) {
      uhdBadge.innerHTML = isHi 
        ? '<span class="w-2 h-2 rounded-full bg-red-500 animate-ping"></span> 4K अल्ट्रा एचडी सुविधा' 
        : '<span class="w-2 h-2 rounded-full bg-red-500 animate-ping"></span> 4K Ultra HD Facility';
    }

    const reelSub = videoModal.querySelector('.bg-pink-500\\/20 + div div:last-child');
    if (reelSub) reelSub.textContent = isHi ? 'डॉ. वैभव के दैनिक पेशेंट टिप्स एवं रील्स' : "Dr. Vaibhav's Daily Patient Tips & Reels";

    const followBtn = videoModal.querySelector('a[href*="instagram.com"]');
    if (followBtn) followBtn.textContent = isHi ? 'फॉलो करें' : 'Follow';

    const dirSub = videoModal.querySelector('.bg-emerald-500\\/20 + div div:last-child');
    if (dirSub) dirSub.textContent = isHi ? 'दूसरी मंजिल, महेंद्रा मेडिस्क्वेयर' : '2nd Floor, Mahendra Medisquare';

    const dirBtn = videoModal.querySelector('a[href="#location"]');
    if (dirBtn) dirBtn.textContent = isHi ? 'दिशा-निर्देश' : 'Directions';

    const sterileRow = videoModal.querySelector('.border-t .text-xs span');
    if (sterileRow) sterileRow.textContent = isHi ? '100% स्टेरिलाइज्ड प्रोटोकॉल • दर्द-मुक्त डिजिटल डेंटिस्ट्री' : '100% Sterile Protocol • Pain-Free Digital Dentistry';

    const bookBtn = videoModal.querySelector('.border-t button');
    if (bookBtn) {
      bookBtn.innerHTML = isHi 
        ? '<i data-lucide="calendar-plus" class="w-4 h-4"></i> अपॉइंटमेंट बुक करें' 
        : '<i data-lucide="calendar-plus" class="w-4 h-4"></i> Book Appointment';
    }
  }
}

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang] || translations.en;
  const isHi = lang === 'hi';
  
  // Set html lang and body styling
  document.documentElement.lang = lang;
  document.body.classList.toggle('lang-hi', isHi);

  // 1. Update active states on all language toggle buttons (desktop + mobile)
  document.querySelectorAll('[data-lang-btn="en"]').forEach(btn => btn.classList.toggle('active', !isHi));
  document.querySelectorAll('[data-lang-btn="hi"]').forEach(btn => btn.classList.toggle('active', isHi));
  
  // Button IDs fallback
  const langEn = document.getElementById('lang-en');
  const langHi = document.getElementById('lang-hi');
  if (langEn) langEn.classList.toggle('active', !isHi);
  if (langHi) langHi.classList.toggle('active', isHi);
  const langEnM = document.getElementById('lang-en-m');
  const langHiM = document.getElementById('lang-hi-m');
  if (langEnM) langEnM.classList.toggle('active', !isHi);
  if (langHiM) langHiM.classList.toggle('active', isHi);
  const langEnMob = document.getElementById('lang-en-mob');
  const langHiMob = document.getElementById('lang-hi-mob');
  if (langEnMob) langEnMob.classList.toggle('active', !isHi);
  if (langHiMob) langHiMob.classList.toggle('active', isHi);

  // 2. Scan all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });

  // 3. Scan all data-i18n-placeholder elements
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key]) {
      el.placeholder = t[key];
    }
  });

  // 4. Update section headers (H2, descriptions, and top badges)
  const sectionMapping = {
    'cases': { title: t.cases_title, desc: t.cases_desc, badge: t.cases_badge },
    'transformation': { title: t.trans_title, desc: t.trans_desc, badge: t.trans_badge },
    'aligner-journey': { title: t.aligner_title, desc: t.aligner_desc, badge: t.aligner_badge },
    'specialties': { title: t.treatments_title, desc: t.treatments_desc, badge: t.treatments_badge },
    'clinic-tour': { title: t.tour_title, desc: t.tour_desc, badge: t.tour_badge },
    'testimonials': { title: t.testimonials_title, desc: t.testimonials_desc, badge: t.testimonials_badge },
    'faq': { title: t.faq_title, desc: t.faq_desc, badge: t.faq_badge },
    'doctor': { title: t.doctor_title, desc: t.doctor_desc, badge: t.doctor_badge },
    'location': { title: t.location_title, desc: t.location_desc, badge: t.location_badge },
    'blog': { title: t.blog_title, desc: t.blog_desc, badge: t.blog_badge }
  };

  Object.entries(sectionMapping).forEach(([secId, data]) => {
    const sec = document.getElementById(secId);
    if (!sec) return;
    const h2 = sec.querySelector('h2, h3.section-heading');
    if (h2 && data.title) h2.textContent = data.title;
    const p = sec.querySelector('.text-center p, p.text-sm, p.text-base, p.text-xs, p.section-subheading');
    if (p && data.desc) p.textContent = data.desc;
    const badge = sec.querySelector('span.uppercase, span.text-xs.font-extrabold, div.inline-flex span');
    if (badge && data.badge) badge.textContent = data.badge;
  });

  // 5. Run specialized component translators
  translateCases(lang);
  translateSliderAndBeforeAfter(lang);
  translateAlignerSteps(lang);
  translateTreatments(lang);
  translateTechTour(lang);
  translateDoctorSection(lang);
  translateReviews(lang);
  translateFaq(lang);
  translateLocationSection(lang);
  translateBlog(lang);
  translateBookingWizard(lang);
  translateServiceModal(lang);
  translateModals(lang);
  translateChatbot(lang);
  translateFooter(lang);

  // 6. Update hourly slot cards & clinic banners
  renderHourlySlots();

  // 7. Save choice & set HTML lang attribute
  try {
    localStorage.setItem('happy_whites_lang', lang);
  } catch (e) {}

  // 8. Refresh Lucide Icons
  if (window.lucide) lucide.createIcons();
}

// ==========================================
// FAQ Accordion Toggle
// ==========================================
function toggleFaq(button) {
  const item = button.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  
  document.querySelectorAll('.faq-item').forEach(faq => {
    faq.classList.remove('open');
    faq.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
  });
  
  if (!isOpen) {
    item.classList.add('open');
    button.setAttribute('aria-expanded', 'true');
  }
}

// ==========================================
// Booking Modal Functions
// ==========================================
function openBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (!modal) return;
  
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  
  // Ensure date is set across all date inputs
  const todayIso = new Date().toISOString().split('T')[0];
  if (!bookingData.date) bookingData.date = todayIso;
  document.querySelectorAll('.wizard-date-input').forEach(el => {
    if (!el.value) el.value = bookingData.date;
    el.min = todayIso;
  });

  // Start modal on step 1
  goToStep(1);

  // Sync procedure selection
  selectProcedureChip(null, bookingData.procedure || "In-House TruAlign Clear Aligners");

  // Render hourly slots
  renderHourlySlots();
  
  // Re-initialize icons in modal
  if (window.lucide) lucide.createIcons();
}

function closeBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

// ==========================================
// Conversion Tracking (GA4 Events)
// ==========================================
function trackConversion(eventName, params = {}) {
  if (typeof gtag === 'function') {
    gtag('event', eventName, params);
  }
}

// Initialize Lucide Icons
lucide.createIcons();

// Initialize VanillaTilt for 3D Cards
VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
  max: 8,
  speed: 400,
  glare: true,
  "max-glare": 0.15,
  perspective: 1000
});

// =========================================================================
// Dynamic Real-Time Slot Availability & Granular Hourly Engine
// =========================================================================
const ALL_CLINIC_SLOTS = [
  { id: 'h10', time: '10:00 AM', end: '11:00 AM', range: '10:00 AM – 11:00 AM', period: 'Morning', shift: 'morning' },
  { id: 'h11', time: '11:00 AM', end: '12:00 PM', range: '11:00 AM – 12:00 PM', period: 'Morning', shift: 'morning' },
  { id: 'h12', time: '12:00 PM', end: '01:00 PM', range: '12:00 PM – 01:00 PM', period: 'Morning', shift: 'morning' },
  { id: 'h01', time: '01:00 PM', end: '02:00 PM', range: '01:00 PM – 02:00 PM', period: 'Afternoon', shift: 'afternoon' },
  { id: 'h02', time: '02:00 PM', end: '03:00 PM', range: '02:00 PM – 03:00 PM', period: 'Afternoon', shift: 'afternoon' },
  { id: 'h03', time: '03:00 PM', end: '04:00 PM', range: '03:00 PM – 04:00 PM', period: 'Afternoon', shift: 'afternoon' },
  { id: 'h04', time: '04:00 PM', end: '05:00 PM', range: '04:00 PM – 05:00 PM', period: 'Afternoon', shift: 'afternoon' },
  { id: 'h05', time: '05:00 PM', end: '06:00 PM', range: '05:00 PM – 06:00 PM', period: 'Evening', shift: 'evening' },
  { id: 'h06', time: '06:00 PM', end: '07:00 PM', range: '06:00 PM – 07:00 PM', period: 'Evening', shift: 'evening' },
  { id: 'h07', time: '07:00 PM', end: '08:00 PM', range: '07:00 PM – 08:00 PM', period: 'Evening', shift: 'evening' },
  { id: 'h08', time: '08:00 PM', end: '09:00 PM', range: '08:00 PM – 09:00 PM', period: 'Evening', shift: 'evening' }
];

let currentActiveShift = 'all';

function getSlotsForDate(dateString) {
  let hash = 0;
  for (let i = 0; i < dateString.length; i++) {
    hash = (hash << 5) - hash + dateString.charCodeAt(i);
    hash |= 0;
  }
  
  return ALL_CLINIC_SLOTS.map((slot, index) => {
    const slotHash = Math.abs(Math.sin(hash + index * 997) * 10000);
    const rand = slotHash - Math.floor(slotHash);
    const isAvailable = rand > 0.20;
    return { ...slot, isAvailable: isAvailable };
  });
}

let bookingData = {
  procedure: "In-House TruAlign Clear Aligners",
  date: new Date().toISOString().split('T')[0],
  slot: "10:00 AM (10:00 AM – 11:00 AM)",
  time: "10:00 AM",
  range: "10:00 AM – 11:00 AM",
  shift: "all",
  name: "",
  phone: ""
};

// Initialize all wizard date inputs to today
(function initBookingDates() {
  const todayIso = new Date().toISOString().split('T')[0];
  bookingData.date = todayIso;
  document.querySelectorAll('.wizard-date-input').forEach(el => {
    el.value = todayIso;
    el.min = todayIso;
  });
})();

function renderHourlySlots() {
  const dateInput = document.querySelector('.wizard-date-input');
  const dateVal = (dateInput && dateInput.value) || bookingData.date;
  const slots = getSlotsForDate(dateVal);
  
  const totalAvailable = slots.filter(s => s.isAvailable);

  document.querySelectorAll('.date-slots-count').forEach(dateSlotsCount => {
    if (totalAvailable.length === 0) {
      dateSlotsCount.innerText = currentLang === 'hi' ? 'कोई स्लॉट उपलब्ध नहीं' : 'No Slots Available';
      dateSlotsCount.className = "date-slots-count text-[10px] font-bold text-rose-400 bg-rose-950/80 px-2 py-0.5 rounded border border-rose-500/30";
    } else {
      dateSlotsCount.innerText = currentLang === 'hi'
        ? `${totalAvailable.length} स्लॉट उपलब्ध (सुबह 10 – रात 9)`
        : `${totalAvailable.length} Slots Open (10 AM – 9 PM)`;
      dateSlotsCount.className = "date-slots-count text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30";
    }
  });

  document.querySelectorAll('#live-slots-text, .live-slots-text').forEach(liveBadge => {
    if (totalAvailable.length === 0) {
      liveBadge.innerText = currentLang === 'hi' ? 'कोई स्लॉट उपलब्ध नहीं — दूसरी तारीख चुनें' : 'No slots open — try another date';
    } else {
      liveBadge.innerText = currentLang === 'hi'
        ? `⚡ आज ${totalAvailable.length} स्लॉट उपलब्ध (सुबह 10 – रात 9)`
        : `⚡ ${totalAvailable.length} Slots Open Today (10 AM – 9 PM)`;
    }
  });

  const filteredSlots = currentActiveShift === 'all' 
    ? slots 
    : slots.filter(s => s.shift === currentActiveShift);
  const currentAvailable = filteredSlots.filter(s => s.isAvailable);

  // Auto-select valid slot if current choice is not in view or booked
  let hasSelected = filteredSlots.some(s => s.time === bookingData.time && s.isAvailable);
  if (!hasSelected && currentAvailable.length > 0) {
    bookingData.time = currentAvailable[0].time;
    bookingData.range = currentAvailable[0].range;
    bookingData.slot = `${currentAvailable[0].time} (${currentAvailable[0].range})`;
    document.querySelectorAll('.selected-slot-display').forEach(el => {
      el.innerText = `${currentAvailable[0].time} (${currentAvailable[0].range})`;
    });
  }

  const grids = document.querySelectorAll('.hourly-slots-grid');
  grids.forEach(grid => {
    grid.innerHTML = '';

    if (currentAvailable.length === 0) {
      const emptyDiv = document.createElement('div');
      emptyDiv.className = 'slots-empty-state col-span-2 text-center py-6 px-4 bg-slate-950/60 rounded-2xl border border-slate-800';
      const label = currentActiveShift === 'all' ? 'All day' : `${currentActiveShift.charAt(0).toUpperCase() + currentActiveShift.slice(1)}`;
      const hiShiftLabels = { all: 'पूरे दिन में', morning: 'सुबह में', afternoon: 'दोपहर में', evening: 'शाम में' };
      emptyDiv.innerHTML = `
        <div class="slots-empty-icon w-10 h-10 mx-auto rounded-full bg-slate-800 flex items-center justify-center text-slate-400 mb-2">
          <i data-lucide="calendar-x" class="w-5 h-5 text-amber-400"></i>
        </div>
        <div class="slots-empty-title text-xs font-bold text-slate-200">${currentLang === 'hi' ? `${hiShiftLabels[currentActiveShift] || ''} कोई स्लॉट उपलब्ध नहीं` : `No ${label} slots open`}</div>
        <div class="slots-empty-desc text-[11px] text-slate-400 mt-1">${currentLang === 'hi' ? "'सभी समय' पर टैप करें या दूसरी तारीख चुनें।" : "Tap 'All Hours' or pick a different date to view more availability."}</div>
      `;
      grid.appendChild(emptyDiv);
    } else {
      filteredSlots.forEach(slot => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.setAttribute('data-slot-id', slot.id);
        btn.setAttribute('data-time', slot.time);

        if (slot.isAvailable) {
          const isSelected = bookingData.time === slot.time;

          btn.className = isSelected
            ? "hourly-slot-btn p-2.5 rounded-xl border border-teal-400 bg-teal-950 text-white font-extrabold text-left transition-all shadow-md shadow-teal-500/20 flex items-center justify-between group cursor-pointer"
            : "hourly-slot-btn p-2.5 rounded-xl border border-slate-700 bg-slate-800/90 hover:border-sky-400/80 hover:bg-slate-800 text-slate-100 text-left transition-all flex items-center justify-between group cursor-pointer";

          btn.onclick = () => selectHourlySlot(slot.time, slot.range, slot.period);
          btn.innerHTML = `
            <div>
              <div class="text-xs font-black text-white flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full ${isSelected ? 'bg-emerald-400 animate-pulse' : 'bg-teal-400'}"></span>
                ${slot.time}
              </div>
              <div class="text-[9px] ${isSelected ? 'text-teal-200 font-bold' : 'text-slate-400'} mt-0.5">${slot.range}</div>
            </div>
            <span class="text-[9px] font-black ${isSelected ? 'bg-emerald-500 text-slate-950' : 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/30'} px-2 py-0.5 rounded-full">
              ${isSelected ? (currentLang === 'hi' ? 'चुना गया' : 'Selected') : (currentLang === 'hi' ? 'उपलब्ध' : 'Open')}
            </span>
          `;
        } else {
          btn.disabled = true;
          btn.className = "p-2.5 rounded-xl border border-slate-800/80 bg-slate-900/50 text-slate-500 text-left opacity-60 cursor-not-allowed flex items-center justify-between";
          btn.innerHTML = `
            <div>
              <div class="text-xs font-bold line-through text-slate-500 flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                ${slot.time}
              </div>
              <div class="text-[9px] text-rose-400/80 mt-0.5">${slot.range} • ${currentLang === 'hi' ? 'बुक हो चुका' : 'Booked'}</div>
            </div>
            <span class="text-[9px] font-bold bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">${currentLang === 'hi' ? 'फुल' : 'Full'}</span>
          `;
        }

        grid.appendChild(btn);
      });
    }
  });

  if (window.lucide) lucide.createIcons();
}

function filterShift(shiftName) {
  currentActiveShift = shiftName;
  
  const activeClass = "time-filter-btn text-[10px] font-black py-1.5 px-1 rounded-lg border border-sky-400 bg-blue-950 text-white shadow-sm text-center transition-all cursor-pointer";
  const inactiveClass = "time-filter-btn text-[10px] font-bold py-1.5 px-1 rounded-lg border border-slate-700 bg-slate-800/80 hover:border-sky-400 text-slate-300 text-center transition-all cursor-pointer";

  ['all', 'morning', 'afternoon', 'evening'].forEach(key => {
    document.querySelectorAll(`.time-filter-${key}`).forEach(btn => {
      btn.className = `${activeClass.replace('time-filter-btn', `time-filter-btn time-filter-${key}`)}`;
      if (key !== shiftName) {
        btn.className = `${inactiveClass.replace('time-filter-btn', `time-filter-btn time-filter-${key}`)}`;
      }
    });
  });

  renderHourlySlots();
}

function selectHourlySlot(timeStr, rangeStr, periodStr) {
  bookingData.time = timeStr;
  bookingData.range = rangeStr || `${timeStr}`;
  bookingData.slot = `${timeStr} (${bookingData.range})`;
  
  document.querySelectorAll('.selected-slot-display').forEach(el => {
    el.innerText = `${timeStr} (${bookingData.range})`;
  });

  document.querySelectorAll('.summary-slot').forEach(el => {
    el.innerText = `${bookingData.date} • ${timeStr} (${bookingData.range})`;
  });

  renderHourlySlots();
}

function onDateChanged(input) {
  const newDate = (input && input.value) ? input.value : (document.querySelector('.wizard-date-input')?.value || bookingData.date);
  bookingData.date = newDate;

  document.querySelectorAll('.wizard-date-input').forEach(el => {
    if (el !== input) el.value = newDate;
  });

  document.querySelectorAll('.summary-slot').forEach(el => {
    el.innerText = `${bookingData.date} • ${bookingData.slot}`;
  });

  renderHourlySlots();
}

function goToStep(stepNumber) {
  currentWizardStep = stepNumber;
  for (let s = 1; s <= 3; s++) {
    document.querySelectorAll(`.wizard-step-${s}`).forEach(el => {
      if (s === stepNumber) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    });
  }

  document.querySelectorAll('.step-badge').forEach(badge => {
    badge.innerText = currentLang === 'hi' ? `चरण ${stepNumber} / 3` : `Step ${stepNumber} of 3`;
  });

  const progressPercent = stepNumber === 1 ? '33.33%' : stepNumber === 2 ? '66.66%' : '100%';
  document.querySelectorAll('.step-progress-bar').forEach(bar => {
    bar.style.width = progressPercent;
  });

  if (stepNumber === 2) {
    renderHourlySlots();
  }

  if (stepNumber === 3) {
    const dateInput = document.querySelector('.wizard-date-input');
    if (dateInput && dateInput.value) {
      bookingData.date = dateInput.value;
    }
    document.querySelectorAll('.summary-proc').forEach(el => {
      el.innerText = currentLang === 'hi' ? (PROCEDURE_HI_MAP[bookingData.procedure] || bookingData.procedure) : bookingData.procedure;
    });
    document.querySelectorAll('.summary-slot').forEach(el => {
      el.innerText = `${bookingData.date} • ${bookingData.slot}`;
    });
  }

  if (window.lucide) lucide.createIcons();
}

function selectProcedureChip(btn, procName) {
  bookingData.procedure = procName;

  document.querySelectorAll('.proc-chip').forEach(c => {
    const isMatch = c.getAttribute('data-proc') === procName ||
                    (c.innerText && c.innerText.includes(procName)) ||
                    (procName && procName.includes(c.querySelector('span')?.innerText || ''));
    if (isMatch) {
      c.className = "proc-chip text-left p-3 rounded-2xl border border-sky-400 bg-blue-950/80 text-white shadow-lg shadow-blue-900/40 transition-all flex flex-col justify-between cursor-pointer";
    } else {
      c.className = "proc-chip text-left p-3 rounded-2xl border border-slate-700/80 bg-slate-800/80 hover:bg-slate-800 hover:border-sky-400/80 text-white transition-all flex flex-col justify-between cursor-pointer";
    }
  });

  document.querySelectorAll('.summary-proc').forEach(el => {
    el.innerText = currentLang === 'hi' ? (PROCEDURE_HI_MAP[bookingData.procedure] || bookingData.procedure) : bookingData.procedure;
  });
}

function pickProcedureFromCard(procName) {
  const serviceName = procName || "In-House TruAlign Clear Aligners";
  bookingData.procedure = serviceName;
  selectProcedureChip(null, serviceName);
  openServiceBookingModal(serviceName);
}

function scrollToBookingTool() {
  const el = document.getElementById('booking-tool');
  if (!el) return;
  const header = document.querySelector('header');
  const headerBottom = header ? header.getBoundingClientRect().bottom : 100;
  
  const isMobile = window.innerWidth < 1024;
  const absoluteTop = el.getBoundingClientRect().top + window.pageYOffset;
  
  const topPadding = isMobile ? 16 : 24;
  const targetY = Math.max(0, absoluteTop - (headerBottom + topPadding));
  
  window.scrollTo({ top: targetY, behavior: 'smooth' });
  
  const card = el.querySelector('.tilt-card');
  if (card) {
    card.classList.add('ring-4', 'ring-sky-400/60', 'ring-offset-4', 'ring-offset-[#031329]');
    setTimeout(() => {
      card.classList.remove('ring-4', 'ring-sky-400/60', 'ring-offset-4', 'ring-offset-[#031329]');
    }, 1600);
  }
}

function handlePhoneInput(input) {
  let cleaned = input.value.replace(/\D/g, '');
  
  if (cleaned.length > 10 && cleaned.startsWith('91')) {
    cleaned = cleaned.substring(2);
  }
  
  if (cleaned.length > 10) {
    cleaned = cleaned.substring(0, 10);
  }
  
  input.value = cleaned;
  bookingData.phone = cleaned;

  // Synchronize across all phone inputs
  document.querySelectorAll('.wizard-phone-input').forEach(other => {
    if (other !== input) other.value = cleaned;
  });
  
  document.querySelectorAll('.phone-input-group').forEach(pGroup => {
    const counter = pGroup.querySelector('.phone-digit-counter');
    const validIcon = pGroup.querySelector('.phone-valid-icon');
    const errorMsg = pGroup.querySelector('.phone-error-msg');
    const phoneIn = pGroup.querySelector('.wizard-phone-input');

    if (counter) {
      counter.innerText = currentLang === 'hi' ? `${cleaned.length}/10 अंक` : `${cleaned.length}/10 Digits`;
      if (cleaned.length === 10) {
        counter.className = "phone-digit-counter text-[10px] font-extrabold text-emerald-400";
      } else {
        counter.className = "phone-digit-counter text-[10px] font-bold text-slate-500";
      }
    }
    
    if (validIcon && phoneIn) {
      if (cleaned.length === 10) {
        validIcon.classList.remove('hidden');
        phoneIn.classList.remove('border-rose-500', 'border-slate-700');
        phoneIn.classList.add('border-emerald-500');
      } else {
        validIcon.classList.add('hidden');
        phoneIn.classList.remove('border-emerald-500');
        phoneIn.classList.add('border-slate-700');
      }
    }
    
    if (errorMsg) {
      errorMsg.classList.add('hidden');
    }
  });
}

function launchWhatsAppBooking(sourceBtn) {
  const container = (sourceBtn && sourceBtn.closest) ? (sourceBtn.closest('#booking-modal') || sourceBtn.closest('#booking-tool')) : null;

  let nameInput = container ? container.querySelector('.wizard-name-input') : document.querySelector('.wizard-name-input');
  let phoneInput = container ? container.querySelector('.wizard-phone-input') : document.querySelector('.wizard-phone-input');
  let errorMsg = container ? container.querySelector('.phone-error-msg') : document.querySelector('.phone-error-msg');

  if (!nameInput) nameInput = document.getElementById('wizard_name') || document.querySelector('.wizard-name-input');
  if (!phoneInput) phoneInput = document.getElementById('wizard_phone') || document.querySelector('.wizard-phone-input');
  if (!errorMsg) errorMsg = document.getElementById('phone-error-msg') || document.querySelector('.phone-error-msg');
  
  const name = nameInput ? nameInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.replace(/\D/g, '').trim() : '';

  if (!name) {
    showToast(currentLang === 'hi' ? "कृपया आगे बढ़ने के लिए मरीज का पूरा नाम दर्ज करें।" : "Please enter patient full name to proceed.");
    if (nameInput) nameInput.focus();
    return;
  }

  if (phone.length !== 10) {
    if (errorMsg) {
      errorMsg.innerText = currentLang === 'hi' ? "कृपया मान्य 10-अंकों का मोबाइल नंबर दर्ज करें।" : "Please enter a valid 10-digit mobile number.";
      errorMsg.classList.remove('hidden');
    }
    if (phoneInput) {
      phoneInput.classList.remove('border-slate-700', 'border-emerald-500');
      phoneInput.classList.add('border-rose-500');
      phoneInput.focus();
    }
    return;
  }

  if (!/^[6-9]\d{9}$/.test(phone)) {
    if (errorMsg) {
      errorMsg.innerText = currentLang === 'hi' ? "कृपया 6, 7, 8 या 9 से शुरू होने वाला मान्य भारतीय मोबाइल नंबर दर्ज करें।" : "Please enter a valid Indian mobile number starting with 6, 7, 8, or 9.";
      errorMsg.classList.remove('hidden');
    }
    if (phoneInput) {
      phoneInput.classList.remove('border-slate-700', 'border-emerald-500');
      phoneInput.classList.add('border-rose-500');
      phoneInput.focus();
    }
    return;
  }

  // Sync entered name across inputs
  document.querySelectorAll('.wizard-name-input').forEach(other => {
    other.value = name;
  });

  bookingData.name = name;
  bookingData.phone = `+91 ${phone}`;

  const msg = currentLang === 'hi'
    ? `नमस्ते डॉ. वैभव,\n\nमैं हैप्पी व्हाइट्स डेंटल क्लिनिक में परामर्श के लिए अपॉइंटमेंट बुक करना चाहता/चाहती हूँ:\n\nमरीज का नाम: ${bookingData.name}\nमोबाइल: ${bookingData.phone}\nउपचार: ${bookingData.procedure}\nतारीख: ${bookingData.date}\nसमय स्लॉट: ${bookingData.time} (1 घंटे का परामर्श: ${bookingData.range})\n\nकृपया मेरे अपॉइंटमेंट स्लॉट की पुष्टि करें। धन्यवाद!`
    : `Namaste Dr. Vaibhav,\n\nI would like to book a dental consultation at Happy Whites Dental Clinic:\n\nPatient Name: ${bookingData.name}\nMobile: ${bookingData.phone}\nProcedure: ${bookingData.procedure}\nPreferred Date: ${bookingData.date}\nExact Time Slot: ${bookingData.time} (1-Hour Consultation: ${bookingData.range})\n\nPlease confirm my appointment slot. Thank you!`;
  const encoded = encodeURIComponent(msg);
  const url = `https://wa.me/919406951737?text=${encoded}`;
  window.open(url, '_blank');
  trackConversion('whatsapp_booking_submit', { procedure: bookingData.procedure, slot: bookingData.slot });

  closeBookingModal();
}

// ==========================================
// Master Interactive Smile Slider Engine
// ==========================================
const sliderContainer = document.getElementById('comparison-slider');
const beforeLayer = document.getElementById('slider-before-layer');
const divider = document.getElementById('slider-divider');
const beforeBadge = document.getElementById('before-badge');
const afterBadge = document.getElementById('after-badge');
const sliderReadout = document.getElementById('slider-readout');

let sliderState = {
  currentPercent: 50,
  targetPercent: 50,
  isDragging: false,
  rafId: null,
  animating: false,
  hasInteracted: false
};

function applySliderPercent(percent, cancelActiveAnim = false) {
  if (cancelActiveAnim && sliderState.animating) {
    cancelAnimationFrame(sliderState.rafId);
    sliderState.animating = false;
  }
  percent = Math.max(0, Math.min(100, percent));
  sliderState.currentPercent = percent;

  if (beforeLayer) {
    beforeLayer.style.clipPath = `polygon(0 0, ${percent.toFixed(2)}% 0, ${percent.toFixed(2)}% 100%, 0 100%)`;
  }
  if (divider) {
    divider.style.left = `${percent.toFixed(2)}%`;
  }

  if (beforeBadge) {
    if (percent < 22) {
      beforeBadge.style.opacity = Math.max(0.1, (percent / 22)).toFixed(2);
    } else {
      beforeBadge.style.opacity = '1';
    }
  }
  if (afterBadge) {
    if (percent > 78) {
      afterBadge.style.opacity = Math.max(0.1, ((100 - percent) / 22)).toFixed(2);
    } else {
      afterBadge.style.opacity = '1';
    }
  }

  if (sliderReadout) {
    if (Math.round(percent) === 50) {
      sliderReadout.innerText = 'Split: 50% / 50%';
    } else {
      sliderReadout.innerText = `Before: ${Math.round(percent)}% | After: ${100 - Math.round(percent)}%`;
    }
  }

  if (sliderContainer) {
    sliderContainer.setAttribute('aria-valuenow', Math.round(percent));
  }

  updatePresetButtonStyles(percent);
}

function updatePresetButtonStyles(percent) {
  const p0 = document.getElementById('preset-0');
  const p50 = document.getElementById('preset-50');
  const p100 = document.getElementById('preset-100');

  const activeClass = "preset-btn px-4 py-2 rounded-xl text-xs font-extrabold bg-blue-50 text-[#0050A8] border-2 border-[#0050A8] shadow-sm transition-all flex items-center gap-2 ring-2 ring-blue-200/60";
  const inactiveClass = "preset-btn px-4 py-2 rounded-xl text-xs font-bold bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-sm transition-all flex items-center gap-2";

  if (p0 && p50 && p100) {
    p0.className = percent >= 95 ? activeClass : inactiveClass;
    p50.className = (percent >= 45 && percent <= 55) ? activeClass : inactiveClass;
    p100.className = percent <= 5 ? activeClass : inactiveClass;
  }
}

function setSliderPreset(target) {
  sliderState.hasInteracted = true;
  animateToPercent(target);
}

function animateToPercent(target, duration = 380) {
  if (sliderState.animating) {
    cancelAnimationFrame(sliderState.rafId);
  }
  sliderState.animating = true;
  const startPercent = sliderState.currentPercent;
  const delta = target - startPercent;
  const startTime = performance.now();

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / duration);
    const current = startPercent + delta * easeOutCubic(progress);
    applySliderPercent(current, false);

    if (progress < 1) {
      sliderState.rafId = requestAnimationFrame(step);
    } else {
      sliderState.animating = false;
      applySliderPercent(target, false);
    }
  }
  sliderState.rafId = requestAnimationFrame(step);
}

function calculatePercentFromPointer(clientX) {
  if (!sliderContainer) return 50;
  const rect = sliderContainer.getBoundingClientRect();
  const x = clientX - rect.left;
  return (x / rect.width) * 100;
}

if (sliderContainer) {
  sliderContainer.addEventListener('pointerdown', (e) => {
    sliderState.hasInteracted = true;
    if (sliderState.animating) {
      cancelAnimationFrame(sliderState.rafId);
      sliderState.animating = false;
    }
    sliderState.isDragging = true;
    sliderContainer.setPointerCapture(e.pointerId);
    const percent = calculatePercentFromPointer(e.clientX);
    applySliderPercent(percent);
  });

  sliderContainer.addEventListener('pointermove', (e) => {
    if (!sliderState.isDragging) return;
    const percent = calculatePercentFromPointer(e.clientX);
    if (sliderState.rafId) {
      cancelAnimationFrame(sliderState.rafId);
    }
    sliderState.rafId = requestAnimationFrame(() => {
      applySliderPercent(percent);
    });
  });

  const handlePointerEnd = (e) => {
    if (!sliderState.isDragging) return;
    sliderState.isDragging = false;
    try {
      sliderContainer.releasePointerCapture(e.pointerId);
    } catch (err) {}
  };

  sliderContainer.addEventListener('pointerup', handlePointerEnd);
  sliderContainer.addEventListener('pointercancel', handlePointerEnd);

  sliderContainer.addEventListener('keydown', (e) => {
    let step = e.shiftKey ? 10 : 2;
    if (e.key === 'ArrowLeft') {
      sliderState.hasInteracted = true;
      applySliderPercent(sliderState.currentPercent - step);
      e.preventDefault();
    } else if (e.key === 'ArrowRight') {
      sliderState.hasInteracted = true;
      applySliderPercent(sliderState.currentPercent + step);
      e.preventDefault();
    } else if (e.key === 'Home') {
      setSliderPreset(100);
      e.preventDefault();
    } else if (e.key === 'End') {
      setSliderPreset(0);
      e.preventDefault();
    }
  });
}

// Interactive Viewport Entrance Tease
const observeTransformation = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !sliderState.hasInteracted) {
      observeTransformation.disconnect();
      setTimeout(() => {
        if (sliderState.hasInteracted) return;
        animateToPercent(36, 450);
        setTimeout(() => {
          if (sliderState.hasInteracted) return;
          animateToPercent(64, 500);
          setTimeout(() => {
            if (sliderState.hasInteracted) return;
            animateToPercent(50, 450);
          }, 550);
        }, 500);
      }, 400);
    }
  });
}, { threshold: 0.45 });

const transformSection = document.getElementById('transformation');
if (transformSection) {
  observeTransformation.observe(transformSection);
}

// Initialize Default State
applySliderPercent(50);
lucide.createIcons();

// ==========================================
// Framer Motion Micro-Interactions
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  if (window.Motion && window.Motion.animate) {
    const { animate, spring } = window.Motion;

    document.querySelectorAll('.framer-card, .framer-treatment-card').forEach((card) => {
      card.addEventListener('mouseenter', () => {
        animate(card, { y: -8, scale: 1.015 }, { duration: 0.35, easing: spring({ stiffness: 350, damping: 25 }) });
      });
      card.addEventListener('mouseleave', () => {
        animate(card, { y: 0, scale: 1 }, { duration: 0.35, easing: spring({ stiffness: 350, damping: 25 }) });
      });
    });

    document.querySelectorAll('.framer-motion-btn, .framer-cta-btn').forEach((btn) => {
      btn.addEventListener('mouseenter', () => {
        animate(btn, { scale: 1.05 }, { duration: 0.2, easing: spring({ stiffness: 450, damping: 15 }) });
      });
      btn.addEventListener('mouseleave', () => {
        animate(btn, { scale: 1 }, { duration: 0.2, easing: spring({ stiffness: 450, damping: 20 }) });
      });
      btn.addEventListener('mousedown', () => {
        animate(btn, { scale: 0.94 }, { duration: 0.1 });
      });
      btn.addEventListener('mouseup', () => {
        animate(btn, { scale: 1.05 }, { duration: 0.15 });
      });
    });
  }
});

// ==========================================
// Modal Functions
// ==========================================
function openClinicLightbox(imgSrc, title, desc) {
  const modal = document.getElementById('clinic-lightbox');
  if (!modal) return;
  document.getElementById('lightbox-img').src = imgSrc;
  document.getElementById('lightbox-title').textContent = title;
  document.getElementById('lightbox-desc').textContent = desc;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  if (window.lucide) lucide.createIcons();
}

function openClinicVideoModal() {
  const modal = document.getElementById('clinic-video-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
  if (window.lucide) lucide.createIcons();
}

function closeClinicVideoModal() {
  const modal = document.getElementById('clinic-video-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

function closeClinicLightbox() {
  const modal = document.getElementById('clinic-lightbox');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

document.getElementById('clinic-lightbox')?.addEventListener('click', function(e) {
  if (e.target === this) closeClinicLightbox();
});

// ==========================================
// Service Booking Modal Logic
// ==========================================
const SERVICE_DETAILS_MAP = {
  'In-House TruAlign Clear Aligners': { badge: 'Invisible Braces', icon: 'sparkles' },
  'Single-Sitting Painless Rotary RCT': { badge: '45-Min Painless', icon: 'activity' },
  'Permanent Dental Implants & Zirconia Crown': { badge: 'Lifetime Warranty', icon: 'shield' },
  'Laser Teeth Whitening': { badge: '8 Shades Brighter', icon: 'zap' },
  'Ultrasonic Dental Scaling & Polishing': { badge: 'Deep Cleaning', icon: 'sparkles' },
  'Wisdom Tooth Pain / Extraction': { badge: 'Emergency Relief', icon: 'heart-pulse' },
  'FREE 3D Digital Dental Scan': { badge: '₹0 Worth ₹5,000', icon: 'scan' }
};

function openServiceBookingModal(procName) {
  const modal = document.getElementById('service-booking-modal');
  if (!modal) return;

  const serviceName = procName || 'In-House TruAlign Clear Aligners';
  bookingData.procedure = serviceName;

  const titleEl = document.getElementById('modal-proc-title');
  const badgeEl = document.getElementById('modal-proc-badge');
  const selectEl = document.getElementById('modal_service_select');
  const iconContainer = document.getElementById('modal-proc-icon');
  
  if (titleEl) titleEl.textContent = serviceName;
  
  const meta = SERVICE_DETAILS_MAP[serviceName] || { badge: 'Specialty', icon: 'sparkles' };
  if (badgeEl) badgeEl.textContent = meta.badge;
  if (iconContainer) {
    iconContainer.innerHTML = `<i data-lucide="${meta.icon}" class="w-5 h-5"></i>`;
  }

  if (selectEl) {
    selectEl.value = serviceName;
    if (!selectEl.value) {
      selectEl.value = 'In-House TruAlign Clear Aligners';
    }
  }

  const dateInput = document.getElementById('modal_appointment_date');
  if (dateInput) {
    const todayStr = new Date().toISOString().split('T')[0];
    dateInput.min = todayStr;
    if (!dateInput.value) dateInput.value = todayStr;
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';

  translateServiceModal(currentLang);

  setTimeout(() => {
    document.getElementById('modal_patient_name')?.focus();
  }, 100);

  if (window.lucide) lucide.createIcons();
}

function closeServiceBookingModal() {
  const modal = document.getElementById('service-booking-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  document.body.style.overflow = '';
}

function onModalServiceDropdownChange(val) {
  bookingData.procedure = val;
  const titleEl = document.getElementById('modal-proc-title');
  const badgeEl = document.getElementById('modal-proc-badge');
  const iconContainer = document.getElementById('modal-proc-icon');
  if (titleEl) titleEl.textContent = val;
  const meta = SERVICE_DETAILS_MAP[val] || { badge: 'Specialty', icon: 'sparkles' };
  if (badgeEl) badgeEl.textContent = meta.badge;
  if (iconContainer) {
    iconContainer.innerHTML = `<i data-lucide="${meta.icon}" class="w-5 h-5"></i>`;
  }
  if (window.lucide) lucide.createIcons();
}

function handleModalPhoneInput(input) {
  let cleaned = input.value.replace(/\D/g, '');
  if (cleaned.length > 10 && cleaned.startsWith('91')) {
    cleaned = cleaned.substring(2);
  }
  if (cleaned.length > 10) {
    cleaned = cleaned.substring(0, 10);
  }
  input.value = cleaned;

  const counter = document.getElementById('modal-phone-digit-counter');
  const validIcon = document.getElementById('modal-phone-valid-icon');
  const errorMsg = document.getElementById('modal-phone-error-msg');

  if (counter) {
    counter.innerText = currentLang === 'hi' ? `${cleaned.length}/10 अंक` : `${cleaned.length}/10 Digits`;
    counter.className = cleaned.length === 10 ? "text-[10px] font-extrabold text-emerald-400" : "text-[10px] font-bold text-slate-500";
  }

  if (validIcon) {
    if (cleaned.length === 10) {
      validIcon.classList.remove('hidden');
      input.classList.remove('border-rose-500', 'border-slate-700');
      input.classList.add('border-emerald-500');
    } else {
      validIcon.classList.add('hidden');
      input.classList.remove('border-emerald-500');
      input.classList.add('border-slate-700');
    }
  }
  if (errorMsg) errorMsg.classList.add('hidden');
}

function submitModalWhatsAppBooking() {
  const nameInput = document.getElementById('modal_patient_name');
  const phoneInput = document.getElementById('modal_patient_phone');
  const dateInput = document.getElementById('modal_appointment_date');
  const slotSelect = document.getElementById('modal_appointment_slot');
  const errorMsg = document.getElementById('modal-phone-error-msg');

  const name = nameInput.value.trim();
  const phone = phoneInput.value.replace(/\D/g, '').trim();
  const date = dateInput.value || (currentLang === 'hi' ? 'जल्द से जल्द' : 'Earliest Available');
  const slot = slotSelect ? slotSelect.value : (currentLang === 'hi' ? 'शाम (05:00 PM – 09:00 PM)' : 'Evening (05:00 PM – 09:00 PM)');
  const proc = bookingData.procedure || document.getElementById('modal-proc-title')?.innerText || (currentLang === 'hi' ? 'डेंटल परामर्श' : 'Dental Consultation');

  if (!name) {
    showToast(currentLang === 'hi' ? "कृपया मरीज का पूरा नाम दर्ज करें।" : "Please enter patient full name.");
    nameInput.focus();
    return;
  }

  if (phone.length !== 10 || !/^[6-9]\d{9}$/.test(phone)) {
    if (errorMsg) {
      errorMsg.innerText = currentLang === 'hi' ? "कृपया 10-अंकों का मान्य भारतीय मोबाइल नंबर दर्ज करें (उदा. 9876543210)।" : "Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).";
      errorMsg.classList.remove('hidden');
    }
    phoneInput.classList.remove('border-slate-700', 'border-emerald-500');
    phoneInput.classList.add('border-rose-500');
    phoneInput.focus();
    return;
  }

  closeServiceBookingModal();

  const msg = currentLang === 'hi'
    ? `नमस्ते डॉ. वैभव,\n\nमैं हैप्पी व्हाइट्स डेंटल क्लिनिक में परामर्श के लिए अपॉइंटमेंट बुक करना चाहता/चाहती हूँ:\n\nचुनी गई सेवा: *${proc}*\nमरीज का नाम: *${name}*\nमोबाइल: *+91 ${phone}*\nपसंदीदा तारीख: *${date}*\nपसंदीदा शिफ्ट: *${slot}*\n\nकृपया मेरे अपॉइंटमेंट स्लॉट की पुष्टि करें। धन्यवाद!`
    : `Namaste Dr. Vaibhav,\n\nI would like to book an appointment at Happy Whites Dental Clinic:\n\nSelected Service: *${proc}*\nPatient Name: *${name}*\nMobile: *+91 ${phone}*\nPreferred Date: *${date}*\nPreferred Shift: *${slot}*\n\nKindly confirm my consultation slot. Thank you!`;
  const encoded = encodeURIComponent(msg);
  const url = `https://wa.me/919406951737?text=${encoded}`;
  window.open(url, '_blank');
  trackConversion('modal_booking_submit', { procedure: proc, date: date, shift: slot });
}

// Track WhatsApp button clicks
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
  link.addEventListener('click', () => {
    trackConversion('whatsapp_click', { source: link.closest('section')?.id || 'unknown' });
  });
});

document.getElementById('service-booking-modal')?.addEventListener('click', function(e) {
  if (e.target === this) closeServiceBookingModal();
});

document.getElementById('booking-modal')?.addEventListener('click', function(e) {
  if (e.target === this) closeBookingModal();
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeClinicLightbox();
    closeServiceBookingModal();
    closeBookingModal();
  }
});

// ==========================================
// AI Dental Assistant Chatbot
// ==========================================
const aiResponses = {
  'treatments': {
    text: "We offer a full range of dental treatments:\n\n🦷 **TruAlign Clear Aligners** - Invisible braces from ₹45,000\n🔴 **Painless Root Canal** - Single sitting in 45 mins\n💉 **Dental Implants** - German titanium from ₹25,000\n✨ **Laser Teeth Whitening** - 8 shades brighter in 45 mins\n🧹 **Dental Scaling** - Ultrasonic stain removal\n\nWould you like to know more about any specific treatment?",
    quickReplies: ['TruAlign Aligners', 'Root Canal', 'Implants', 'Whitening']
  },
  'timing': {
    text: "Our clinic timings are:\n\n📅 **Monday to Saturday**\n• Morning: 10:00 AM – 2:00 PM\n• Evening: 5:00 PM – 9:00 PM\n\n📅 **Sunday** - By prior appointment only\n\n📍 Located at Chamber No. 4, 2nd Floor, Mahendra Medisquare, Bawadiya Kalan, Bhopal",
    quickReplies: ['Get Directions', 'Book Appointment', 'Call Clinic']
  },
  'pricing': {
    text: "Here are our key treatment prices:\n\n🦷 **TruAlign Clear Aligners** - Starting ₹45,000\n🔴 **Root Canal (RCT)** - Starting ₹8,000\n💉 **Single Implant + Crown** - Starting ₹25,000\n✨ **Laser Whitening** - Starting ₹5,000\n🧹 **Scaling & Polishing** - Starting ₹2,000\n\n💡 **FREE 3D Dental Scan** (worth ₹5,000) included!\n\nWant to book a consultation?",
    quickReplies: ['Book Consultation', 'WhatsApp Doctor', 'View Treatments']
  },
  'booking': {
    text: "I'd be happy to help you book an appointment! 📅\n\nTap a button below to proceed:",
    quickReplies: ['Open Booking Wizard', 'WhatsApp Direct', 'Call Now'],
    actions: ['open-booking', 'whatsapp', 'call']
  },
  'location': {
    text: "📍 **Happy Whites Dental Clinic**\n\nChamber No. 4, 2nd Floor,\nMahendra Medisquare,\nBawadiya Kalan Main Rd,\nArera Colony, Bhopal - 462039\n\n🏥 **Near ApolloSAGE Hospital**\n\n🚗 **Distance from key areas:**\n• 10 No. Market / Arera Colony - 5 mins\n• Gulmohar Colony / Trilanga - 3 mins\n• Shahpura / Rohit Nagar - 7 mins",
    quickReplies: ['Open in Google Maps', 'WhatsApp Location', 'Book Visit']
  },
  'scan': {
    text: "Great choice! 🎉\n\nThe **FREE 3D Digital Dental Scan** is worth ₹5,000 and includes:\n\n✅ 100,000+ data points captured\n✅ No messy impression paste\n✅ No gag reflex\n✅ Results in under 3 minutes\n✅ Used for treatment planning\n\nThis is completely FREE with zero hidden charges.",
    quickReplies: ['Book Free Scan', 'WhatsApp Now', 'Call Clinic']
  },
  'aligner': {
    text: "TruAlign Clear Aligners are our specialty! 🦷\n\n**How they work:**\n1. Free 3D digital scan\n2. Custom treatment plan\n3. Invisible aligner trays\n4. Switch every 2 weeks\n5. Complete smile in 6-12 months\n\n**Benefits:**\n✅ 100% invisible\n✅ Removable for eating\n✅ No diet restrictions\n✅ In-house lab = faster results\n\nStarting from ₹45,000.",
    quickReplies: ['Book Free Scan', 'View Price', 'WhatsApp Dr. Vaibhav']
  },
  'RCT': {
    text: "Painless Root Canal Treatment! 🔴\n\n**What makes it special:**\n✅ Single sitting (45 minutes)\n✅ Computerized painless anesthesia\n✅ Digital rotary endodontics\n✅ Zero discomfort during/after\n✅ Preserves your natural tooth\n\n**Cost:** Starting from ₹8,000\n\nDr. Vaibhav has done 2,500+ successful RCTs.",
    quickReplies: ['Book RCT', 'WhatsApp Doctor', 'View Cases']
  },
  'implant': {
    text: "Dental Implants - Permanent Solution! 💉\n\n**Our implant features:**\n✅ German titanium posts\n✅ CAD/CAM Zirconia crowns\n✅ Lifetime warranty\n✅ Natural look & feel\n✅ Direct doctor oversight\n\n**Cost:** Starting from ₹25,000 per implant\n\nMissing teeth? Book a free consultation!",
    quickReplies: ['Book Consultation', 'WhatsApp Now', 'View Pricing']
  }
};

function toggleAIChatbot() {
  const chatWindow = document.getElementById('ai-chatbot-window');
  chatWindow.classList.toggle('hidden');
  if (!chatWindow.classList.contains('hidden')) {
    document.getElementById('ai-chatbot-input').focus();
  }
}

function sendAIMessage() {
  const input = document.getElementById('ai-chatbot-input');
  const text = input.value.trim();
  if (!text) return;
  
  addAIMessage(text, 'user');
  input.value = '';
  
  setTimeout(() => {
    const response = getAIResponse(text);
    addBotMessage(response);
  }, 600 + Math.random() * 800);
}

function sendAIQuickReply(text) {
  addAIMessage(text, 'user');
  document.getElementById('ai-quick-replies').innerHTML = '';
  
  setTimeout(() => {
    const response = getAIResponse(text);
    addBotMessage(response);
  }, 600 + Math.random() * 800);
}

function handleAIAction(action) {
  switch(action) {
    case 'open-booking':
      toggleAIChatbot();
      setTimeout(() => openBookingModal(), 300);
      break;
    case 'whatsapp':
      window.open('https://wa.me/919406951737?text=Namaste%20Dr.%20Vaibhav,%20I%20would%20like%20to%20consult%20at%20Happy%20Whites%20Dental%20Clinic.', '_blank');
      break;
    case 'call':
      window.location.href = 'tel:+919406951737';
      break;
    case 'maps':
      window.open('https://maps.google.com/?q=Happy+Whites+Dental+Clinic+Mahendra+Medisquare+Bhopal', '_blank');
      break;
    case 'scan':
      toggleAIChatbot();
      setTimeout(() => openServiceBookingModal('FREE 3D Digital Dental Scan'), 300);
      break;
    case 'aligner':
      toggleAIChatbot();
      setTimeout(() => openServiceBookingModal('In-House TruAlign Clear Aligners'), 300);
      break;
    case 'rct':
      toggleAIChatbot();
      setTimeout(() => openServiceBookingModal('Single-Sitting Painless Rotary RCT'), 300);
      break;
    case 'implant':
      toggleAIChatbot();
      setTimeout(() => openServiceBookingModal('Permanent Dental Implants & Zirconia Crown'), 300);
      break;
    case 'whitening':
      toggleAIChatbot();
      setTimeout(() => openServiceBookingModal('Laser Teeth Whitening'), 300);
      break;
    case 'scaling':
      toggleAIChatbot();
      setTimeout(() => openServiceBookingModal('Ultrasonic Dental Scaling & Polishing'), 300);
      break;
  }
}

function addBotMessage(response) {
  const container = document.getElementById('ai-chatbot-messages');
  const msg = document.createElement('div');
  msg.className = 'ai-msg ai-msg-bot';
  msg.innerHTML = response.text.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  container.appendChild(msg);
  container.scrollTop = container.scrollHeight;
  
  // Add action buttons if present
  if (response.actions && response.actions.length > 0) {
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'ai-msg-actions';
    response.actions.forEach((action, i) => {
      const labels = {
        'open-booking': '📅 Open Booking Wizard',
        'whatsapp': '💬 WhatsApp Doctor',
        'call': '📞 Call Now',
        'maps': '🗺️ Open Google Maps',
        'scan': '🦷 Book Free Scan',
        'aligner': '🦷 Book Aligner Consult',
        'rct': '🔴 Book RCT',
        'implant': '💉 Book Implant Consult',
        'whitening': '✨ Book Whitening',
        'scaling': '🧹 Book Scaling'
      };
      const btn = document.createElement('button');
      btn.className = 'ai-action-btn';
      btn.textContent = labels[action] || action;
      btn.onclick = () => handleAIAction(action);
      actionsDiv.appendChild(btn);
    });
    container.appendChild(actionsDiv);
    container.scrollTop = container.scrollHeight;
  }
  
  // Update quick replies
  const quickRepliesContainer = document.getElementById('ai-quick-replies');
  quickRepliesContainer.innerHTML = '';
  if (response.quickReplies) {
    response.quickReplies.forEach(reply => {
      const btn = document.createElement('button');
      btn.className = 'ai-quick-reply';
      btn.textContent = reply;
      btn.onclick = () => sendAIQuickReply(reply);
      quickRepliesContainer.appendChild(btn);
    });
    quickRepliesContainer.style.display = 'flex';
  } else {
    quickRepliesContainer.style.display = 'none';
  }
}

function addAIMessage(text, type) {
  const container = document.getElementById('ai-chatbot-messages');
  const msg = document.createElement('div');
  msg.className = `ai-msg ai-msg-${type}`;
  msg.innerHTML = text.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  container.appendChild(msg);
  container.scrollTop = container.scrollHeight;
}

function getAIResponse(input) {
  const lower = input.toLowerCase();
  
  // Direct action matches
  if (lower.includes('open booking') || lower.includes('booking wizard') || lower.includes('launch booking')) {
    return { text: "Opening the booking wizard for you now! 📅", actions: ['open-booking'] };
  }
  if (lower.includes('whatsapp') || lower.includes('chat on whatsapp') || lower.includes('message')) {
    return { text: "Opening WhatsApp to chat with Dr. Vaibhav... 💬", actions: ['whatsapp'] };
  }
  if (lower.includes('call') || lower.includes('phone')) {
    return { text: "Calling Happy Whites Dental Clinic... 📞", actions: ['call'] };
  }
  if (lower.includes('direction') || lower.includes('map') || lower.includes('google map')) {
    return { text: "Opening Google Maps to show you the way! 🗺️", actions: ['maps'] };
  }
  
  // Treatment matches
  if (lower.includes('treatment') || lower.includes('service') || lower.includes('procedure') || lower.includes('what do you')) {
    return aiResponses.treatments;
  }
  if (lower.includes('timing') || lower.includes('time') || lower.includes('hour') || lower.includes('open') || lower.includes('close') || lower.includes('schedule') || lower.includes('opd')) {
    return aiResponses.timing;
  }
  if (lower.includes('price') || lower.includes('cost') || lower.includes('how much') || lower.includes('expensive') || lower.includes('rate') || lower.includes('fee')) {
    return aiResponses.pricing;
  }
  if (lower.includes('book') || lower.includes('appointment') || lower.includes('consult') || lower.includes('visit') || lower.includes('schedule')) {
    return aiResponses.booking;
  }
  if (lower.includes('where') || lower.includes('location') || lower.includes('address') || lower.includes('reach') || lower.includes('near')) {
    return aiResponses.location;
  }
  if (lower.includes('scan') || lower.includes('free scan') || lower.includes('3d scan') || lower.includes('digital scan')) {
    return { text: aiResponses.scan.text, quickReplies: ['Book Free Scan', 'WhatsApp Now', 'Call Clinic'], actions: ['scan', 'whatsapp', 'call'] };
  }
  if (lower.includes('align') || lower.includes('braces') || lower.includes('invisible') || lower.includes('straight') || lower.includes('trualign')) {
    return { text: aiResponses.aligner.text, quickReplies: ['Book Free Scan', 'View Price', 'WhatsApp Dr. Vaibhav'], actions: ['aligner', 'whatsapp'] };
  }
  if (lower.includes('root') || lower.includes('rct') || lower.includes('canal') || lower.includes('tooth pain')) {
    return { text: aiResponses.RCT.text, quickReplies: ['Book RCT', 'WhatsApp Doctor', 'Call Now'], actions: ['rct', 'whatsapp', 'call'] };
  }
  if (lower.includes('implant') || lower.includes('missing') || lower.includes('crown') || lower.includes('teeth replacement')) {
    return { text: aiResponses.implant.text, quickReplies: ['Book Consultation', 'WhatsApp Now', 'View Pricing'], actions: ['implant', 'whatsapp'] };
  }
  if (lower.includes('whiten') || lower.includes('bleach') || lower.includes('bright') || lower.includes('shades')) {
    return { text: "Laser Teeth Whitening - 8 shades brighter in 45 mins! ✨\n\n**Cost:** Starting from ₹5,000\n\nZero sensitivity, enamel-safe procedure.", quickReplies: ['Book Whitening', 'WhatsApp Doctor', 'View Price'], actions: ['whitening', 'whatsapp'] };
  }
  if (lower.includes('scaling') || lower.includes('cleaning') || lower.includes('polish') || lower.includes('tartar') || lower.includes('stain')) {
    return { text: "Ultrasonic Scaling & Polishing - Removes all stains and tartar! 🧹\n\n**Duration:** 35-45 mins\n**Cost:** Starting from ₹2,000\n\nZero pain, fresh feel immediately.", quickReplies: ['Book Scaling', 'WhatsApp Doctor'], actions: ['scaling', 'whatsapp'] };
  }
  if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey') || lower.includes('namaste') || lower.includes('hii')) {
    return { text: "Namaste! 🙏 Welcome to Happy Whites Dental Clinic. I'm here to help you with:\n\n• Treatment information & pricing\n• Booking appointments\n• Clinic timings & location\n• Dental health tips\n\nHow can I help you today?", quickReplies: ['Treatments', 'Book Appointment', 'Timings', 'Location'] };
  }
  if (lower.includes('thank') || lower.includes('thanks') || lower.includes('bye')) {
    return { text: "You're welcome! 😊 If you have any more questions, feel free to ask anytime. We're here to help you achieve your perfect smile!", quickReplies: ['Book Appointment', 'Call Clinic', 'WhatsApp'] };
  }
  if (lower.includes('doctor') || lower.includes('vaibhav') || lower.includes('who')) {
    return { text: "**Dr. Vaibhav Shrivastav** 🩺\n\n• BDS, MDS (Oral & Maxillofacial Surgery)\n• 8+ years experience\n• 2,500+ successful RCTs\n• In-House TruAlign Certified Provider\n• Known for painless digital dentistry\n\nHe personally oversees every treatment at Happy Whites.", quickReplies: ['Book Consultation', 'View Team', 'WhatsApp Dr. Vaibhav'] };
  }
  
  return { text: "I'd be happy to help with that! For the most accurate information, choose an option below:", quickReplies: ['Book Appointment', 'View Treatments', 'WhatsApp Doctor', 'Call Clinic', 'Get Directions'] };
}

// ==========================================
// Page Loader
// ==========================================
window.addEventListener('load', function() {
  setTimeout(function() {
    const loader = document.getElementById('page-loader');
    if (loader) loader.classList.add('loaded');
  }, 500);
});

// ==========================================
// Scroll Reveal Animations
// ==========================================
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  revealElements.forEach(function(el) {
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  initScrollReveal();
});

// ==========================================
// Mobile Navigation Menu
// ==========================================
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('hamburger-icon');
  menu.classList.toggle('hidden');
  if (!menu.classList.contains('hidden')) {
    icon.setAttribute('data-lucide', 'x');
    lucide.createIcons();
    document.body.style.overflow = 'hidden';
  } else {
    icon.setAttribute('data-lucide', 'menu');
    lucide.createIcons();
    document.body.style.overflow = '';
  }
}

// Global window exposure
window.setLanguage = setLanguage;
window.switchLanguage = setLanguage;

