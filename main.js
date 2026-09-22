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
    mobile_lang_select: 'Language / भाषा:',

    // Hero Section
    hero_badge: '<span class="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span> ⭐ 4.9 Verified Google Rating (61+ Reviews) • Bawadiya Kalan, Bhopal',
    hero_title: 'Bhopal\'s Trusted Centre for <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-sky-400">Painless & Digital</span> Dentistry.',
    hero_desc: 'Specialized in <strong class="text-white font-bold">In-House TruAlign Clear Aligners</strong>, <strong class="text-white font-bold">Single-Sitting Rotary RCT</strong>, and <strong class="text-white font-bold">Permanent Dental Implants</strong> by <strong class="text-sky-300 font-bold">Dr. Vaibhav Shrivastav</strong> at Mahendra Medisquare (near ApolloSAGE Hospital).',
    hero_cta_booking: '<i data-lucide="sparkles" class="w-5 h-5"></i> Launch Smart Booking Wizard',
    hero_cta_scan: '<i data-lucide="message-circle" class="w-5 h-5 text-emerald-400"></i> Claim Free 3D Scan on WhatsApp',
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
    mobile_lang_select: 'भाषा चुनें / Language:',

    // Hero Section
    hero_badge: '<span class="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span> ⭐ 4.9 गूगल रेटिंग (61+ संतुष्ट मरीज) • बावड़िया कलां, भोपाल',
    hero_title: 'पेनलेस और आधुनिक <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-sky-400">डिजिटल डेंटिस्ट्री</span> में भोपाल का सबसे भरोसेमंद क्लिनिक।',
    hero_desc: '<strong class="text-white font-bold">इन-हाउस ट्रूअलाइन अदृश्य अलाइनर</strong>, <strong class="text-white font-bold">सिंगल-सिटिंग रोटरी आरसीटी</strong>, एवं <strong class="text-white font-bold">परमानेंट डेंटल इम्प्लांट्स</strong> के विशेषज्ञ — <strong class="text-sky-300 font-bold">डॉ. वैभव श्रीवास्तव</strong> (महेंद्रा मेडिस्क्वेयर, अपोलो सेज अस्पताल के पास)।',
    hero_cta_booking: '<i data-lucide="sparkles" class="w-5 h-5"></i> स्मार्ट बुकिंग टूल शुरू करें',
    hero_cta_scan: '<i data-lucide="message-circle" class="w-5 h-5 text-emerald-400"></i> व्हाट्सएप पर फ्री 3D स्कैन पाएं',
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

function translateFaq(lang) {
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
}

function translateTreatments(lang) {
  const cards = document.querySelectorAll('#specialties .framer-treatment-card');
  cards.forEach((card, index) => {
    if (treatmentCardTranslations[index]) {
      const trans = treatmentCardTranslations[index][lang];
      const title = card.querySelector('h3');
      if (title && trans.title) {
        title.childNodes[0].textContent = trans.title + ' ';
      }
      const desc = card.querySelector('p');
      if (desc && trans.desc) desc.textContent = trans.desc;
    }
  });
}

function translateAlignerSteps(lang) {
  const steps = [
    {
      en: { title: '3D Digital Intraoral Scan', desc: 'A comfortable 5-minute digital scan creates a flawless 3D model of your teeth with zero messy putty.' },
      hi: { title: '3D डिजिटल ओरल स्कैन', desc: 'बिना किसी चिपचिपे पेस्ट के मात्र 5 मिनट का डिजिटल स्कैन आपके दांतों का सटीक 3D मॉडल बनाता है।' }
    },
    {
      en: { title: 'Projected Smile Simulation', desc: 'See your final smile outcome on screen before treatment even begins with Dr. Vaibhav.' },
      hi: { title: '3D स्माइल सिमुलेशन', desc: 'इलाज शुरू होने से पहले ही स्क्रीन पर देखें कि आपकी मुस्कान अंत में कैसी दिखेगी।' }
    },
    {
      en: { title: 'Precision In-House Lab Crafting', desc: 'Custom medical-grade aligners thermoformed and trimmed right in our Bhopal facility within 48 hours.' },
      hi: { title: 'इन-हाउस लैब निर्माण', desc: 'भोपाल स्थित हमारे इन-हाउस सेटअप में मेडिकल-ग्रेड अलाइनर मात्र 48 घंटों में तैयार किए जाते हैं।' }
    },
    {
      en: { title: 'Discreet Daily Transformation', desc: 'Wear your invisible trays daily, remove them easily for meals, and watch your smile transform weekly.' },
      hi: { title: 'अदृश्य मुस्कान बदलाव', desc: 'रोजाना अपनी अदृश्य ट्रे पहनें, भोजन के समय आसानी से निकालें और सप्ताह-दर-सप्ताह मुस्कान में सुधार देखें।' }
    }
  ];
  const stepCards = document.querySelectorAll('#aligner-journey .aligner-step-card, #aligner-journey .step-card, #aligner-journey .grid > div');
  stepCards.forEach((card, idx) => {
    if (steps[idx]) {
      const h3 = card.querySelector('h3, h4');
      if (h3 && steps[idx][lang]) h3.textContent = steps[idx][lang].title;
      const p = card.querySelector('p');
      if (p && steps[idx][lang]) p.textContent = steps[idx][lang].desc;
    }
  });
}

function translateDoctorSection(lang) {
  const isHi = lang === 'hi';
  const docSec = document.getElementById('doctor');
  if (!docSec) return;
  const docTitle = docSec.querySelector('.doctor-title, .doc-spec');
  if (docTitle) {
    docTitle.textContent = isHi ? 'मुख्य डेंटल सर्जन एवं इम्प्लांटोलॉजिस्ट' : 'Lead Dental Surgeon & Orthodontist';
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
}

function translateSliderAndBeforeAfter(lang) {
  const isHi = lang === 'hi';
  
  // Before badge
  const bBadge = document.querySelector('#before-badge span.whitespace-nowrap');
  if (bBadge) {
    bBadge.textContent = isHi 
      ? '🔍 इलाज से पहले: दांतों का पीलापन व दाग-धब्बे' 
      : '🔍 BEFORE: Natural Tooth Shade & Coffee Staining';
  }

  // After badge
  const aBadge = document.querySelector('#after-badge span.whitespace-nowrap');
  if (aBadge) {
    aBadge.textContent = isHi 
      ? '✨ इलाज के बाद: 8 शेड चमकदार व सफेद मुस्कान' 
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
  const sliderBarText = document.querySelector('#transformation .bg-\\[\\#090e1a\\] span');
  if (sliderBarText) {
    sliderBarText.textContent = isHi
      ? 'इलाज से पहले और बाद की चमक देखने के लिए स्लाइडर को दाएं-बाएं खींचें।'
      : 'Drag the central divider left or right to inspect before and after enamel brightness.';
  }

  const centerBtn = document.querySelector('#transformation button[onclick="setSliderPreset(50)"]');
  if (centerBtn) {
    centerBtn.textContent = isHi ? 'बीच में' : 'Center';
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

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang] || translations.en;
  
  // 1. Update active states on all language toggle buttons (desktop + mobile)
  document.querySelectorAll('[data-lang-btn="en"]').forEach(btn => btn.classList.toggle('active', lang === 'en'));
  document.querySelectorAll('[data-lang-btn="hi"]').forEach(btn => btn.classList.toggle('active', lang === 'hi'));
  
  // Legacy button IDs fallback
  const langEn = document.getElementById('lang-en');
  const langHi = document.getElementById('lang-hi');
  if (langEn) langEn.classList.toggle('active', lang === 'en');
  if (langHi) langHi.classList.toggle('active', lang === 'hi');

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

  // 4. Update section headers (H2 and descriptions)
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
    const p = sec.querySelector('p.text-sm, p.text-base, p.section-subheading');
    if (p && data.desc) p.textContent = data.desc;
  });

  // 5. Run specialized component translators
  translateFaq(lang);
  translateTreatments(lang);
  translateAlignerSteps(lang);
  translateDoctorSection(lang);
  translateChatbot(lang);
  translateBookingWizard(lang);
  translateSliderAndBeforeAfter(lang);
  translateServiceModal(lang);

  // 6. Update hourly slot cards & clinic banners
  renderHourlySlots();

  // 7. Save choice & set HTML lang attribute
  try {
    localStorage.setItem('happy_whites_lang', lang);
  } catch (e) {}
  document.documentElement.lang = lang;

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
