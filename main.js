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
// Hindi Language Toggle
// ==========================================
const translations = {
  hi: {
    heroTitle: 'पेनलेस और डिजिटल डेंटिस्ट्री में भोपाल का भरोसेमंद केंद्र',
    heroSubtitle: '<strong class="text-white font-bold">इन-हाउस ट्रूअलाइन क्लियर अलाइनर</strong>, <strong class="text-white font-bold">सिंगल-सिटिंग रोटरी आरसीटी</strong>, और <strong class="text-white font-bold">परमानेंट डेंटल इम्प्लांट्स</strong> में विशेषज्ञता।',
    bookNow: 'अभी बुक करें',
    liveBooking: 'लाइव बुकिंग',
    realCases: 'असली केस',
    smileTransformation: 'स्माइल ट्रांसफॉर्मेशन',
    treatments: 'उपचार',
    clinicTour: 'क्लिनिक टूर',
    team: 'टीम',
    location: 'लोकेशन',
    verifiedCases: 'सत्यापित क्लिनिकल परिणाम',
    realTransformations: 'असली मरीज़ों की स्माइल ट्रांसफॉर्मेशन',
    patientStories: 'मरीज़ों की कहानियाँ और समीक्षाएँ',
    whatPatientsSay: 'हमारे मरीज़ क्या कहते हैं',
    faq: 'अक्सर पूछे जाने वाले सवाल',
    meetTeam: 'हैप्पी व्हाइट्स की समर्पित टीम से मिलें',
    visitClinic: 'हैप्पी व्हाइट्स डेंटल क्लिनिक विज़िट करें',
    claimFreeScan: 'फ्री 3D स्कैन प्राप्त करें',
    consultWhatsApp: 'व्हाट्सएप पर डॉ. वैभव से बात करें',
    services: 'भोपाल में पूर्ण डेंटल उपचार',
    clinicTimings: 'ओपीडी समय',
    morning: 'सुबह',
    evening: 'शाम',
  },
  en: {}
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  
  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  document.getElementById('lang-hi').classList.toggle('active', lang === 'hi');
  
  if (lang === 'en') {
    location.reload();
    return;
  }
  
  const heroTitle = document.querySelector('#booking-tool')?.closest('section')?.querySelector('h1');
  if (heroTitle && t.heroTitle) heroTitle.innerHTML = t.heroTitle;
  
  const heroSubtitle = document.querySelector('#booking-tool')?.closest('section')?.querySelector('p.text-base');
  if (heroSubtitle && t.heroSubtitle) heroSubtitle.innerHTML = t.heroSubtitle;
  
  const navLinks = document.querySelectorAll('nav a');
  const navTexts = [t.liveBooking, t.realCases, t.smileTransformation, t.treatments, t.patientStories, t.clinicTour, t.location];
  navLinks.forEach((link, i) => {
    if (navTexts[i]) link.textContent = navTexts[i];
  });
  
  const sectionHeaders = {
    'cases': t.realTransformations,
    'testimonials': t.whatPatientsSay,
    'faq': t.faq,
    'doctor': t.meetTeam,
    'location': t.visitClinic,
  };
  
  Object.entries(sectionHeaders).forEach(([id, text]) => {
    const section = document.getElementById(id);
    if (section) {
      const h2 = section.querySelector('h2');
      if (h2) h2.textContent = text;
    }
  });
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
  
  // Clone booking tool content into modal
  const content = document.getElementById('booking-modal-content');
  const bookingTool = document.getElementById('booking-tool');
  if (content && bookingTool) {
    content.innerHTML = '';
    const clone = bookingTool.cloneNode(true);
    clone.id = 'booking-tool-modal';
    clone.classList.remove('lg:col-span-5', 'relative', 'z-10', 'scroll-mt-36');
    content.appendChild(clone);
    
    // Re-initialize icons in modal
    if (window.lucide) lucide.createIcons();
  }
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
  { id: 'm10', time: '10:00 AM', display: '10:00 AM', shift: 'morning', period: 'Morning' },
  { id: 'm11', time: '11:00 AM', display: '11:00 AM', shift: 'morning', period: 'Morning' },
  { id: 'm12', time: '12:00 PM', display: '12:00 PM', shift: 'morning', period: 'Morning' },
  { id: 'm01', time: '01:00 PM', display: '01:00 PM', shift: 'morning', period: 'Morning' },
  { id: 'e05', time: '05:00 PM', display: '05:00 PM', shift: 'evening', period: 'Evening' },
  { id: 'e06', time: '06:00 PM', display: '06:00 PM', shift: 'evening', period: 'Evening' },
  { id: 'e07', time: '07:00 PM', display: '07:00 PM', shift: 'evening', period: 'Evening' },
  { id: 'e08', time: '08:00 PM', display: '08:00 PM', shift: 'evening', period: 'Evening' }
];

let currentActiveShift = 'evening';

function getSlotsForDate(dateString) {
  let hash = 0;
  for (let i = 0; i < dateString.length; i++) {
    hash = (hash << 5) - hash + dateString.charCodeAt(i);
    hash |= 0;
  }
  
  return ALL_CLINIC_SLOTS.map((slot, index) => {
    const seedVal = Math.abs((hash * 9301 + 49297 + index * 233) % 233280) / 233280;
    const isAvailable = seedVal > 0.32;
    return { ...slot, isAvailable: isAvailable };
  });
}

let bookingData = {
  procedure: "In-House TruAlign Clear Aligners",
  date: new Date().toISOString().split('T')[0],
  slot: "06:00 PM (Evening)",
  time: "06:00 PM",
  shift: "evening",
  name: "",
  phone: ""
};

document.getElementById('wizard_date').value = bookingData.date;
document.getElementById('wizard_date').min = bookingData.date;

function renderHourlySlots() {
  const dateVal = document.getElementById('wizard_date').value || bookingData.date;
  const slots = getSlotsForDate(dateVal);
  
  const morningAvailable = slots.filter(s => s.shift === 'morning' && s.isAvailable);
  const eveningAvailable = slots.filter(s => s.shift === 'evening' && s.isAvailable);
  const totalAvailable = slots.filter(s => s.isAvailable);

  document.getElementById('morning-count-badge').innerText = `${morningAvailable.length} Left`;
  document.getElementById('evening-count-badge').innerText = `${eveningAvailable.length} Left`;
  
  const dateSlotsCount = document.getElementById('date-slots-count');
  const liveBadge = document.getElementById('live-slots-text');
  
  if (totalAvailable.length === 0) {
    if (dateSlotsCount) {
      dateSlotsCount.innerText = 'No Slots Available';
      dateSlotsCount.className = "text-[10px] font-bold text-rose-400 bg-rose-950/80 px-2 py-0.5 rounded border border-rose-500/30";
    }
    if (liveBadge) {
      liveBadge.innerText = 'No slots open — try another date';
    }
  } else {
    if (dateSlotsCount) {
      dateSlotsCount.innerText = `${totalAvailable.length} Slots Available`;
      dateSlotsCount.className = "text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30";
    }
    if (liveBadge) {
      liveBadge.innerText = `⚡ ${totalAvailable.length} Slots Open Today`;
    }
  }

  const currentShiftSlots = slots.filter(s => s.shift === currentActiveShift);
  const grid = document.getElementById('hourly-slots-grid');
  grid.innerHTML = '';

  const currentShiftAvailable = currentShiftSlots.filter(s => s.isAvailable);

  if (currentShiftAvailable.length === 0) {
    const emptyDiv = document.createElement('div');
    emptyDiv.className = 'slots-empty-state col-span-2';
    const otherShift = currentActiveShift === 'morning' ? 'Evening' : 'Morning';
    emptyDiv.innerHTML = `
      <div class="slots-empty-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
      </div>
      <div class="slots-empty-title">All ${otherShift} slots booked</div>
      <div class="slots-empty-desc">Try selecting the ${otherShift} shift or pick a different date for more availability.</div>
    `;
    grid.appendChild(emptyDiv);
  } else {
    let hasSelected = false;
    currentShiftSlots.forEach(slot => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('data-slot-id', slot.id);
      btn.setAttribute('data-time', slot.time);

      if (slot.isAvailable) {
        const isSelected = bookingData.time === slot.time;
        if (isSelected) hasSelected = true;

        btn.className = isSelected
          ? "hourly-slot-btn p-2.5 rounded-xl border border-teal-400 bg-teal-950 text-white font-extrabold text-left transition-all shadow-md shadow-teal-500/20 flex items-center justify-between group"
          : "hourly-slot-btn p-2.5 rounded-xl border border-slate-700 bg-slate-800/90 hover:border-sky-400/80 hover:bg-slate-800 text-slate-100 text-left transition-all flex items-center justify-between group";

        btn.onclick = () => selectHourlySlot(slot.time, slot.period);
        btn.innerHTML = `
          <div>
            <div class="text-xs font-black text-white flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full ${isSelected ? 'bg-emerald-400 animate-pulse' : 'bg-teal-400'}"></span>
              ${slot.time}
            </div>
            <div class="text-[9px] ${isSelected ? 'text-teal-200' : 'text-slate-400'} mt-0.5">Doctor Available</div>
          </div>
          <span class="text-[9px] font-black ${isSelected ? 'bg-emerald-500 text-slate-950' : 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/30'} px-2 py-0.5 rounded-full">
            ${isSelected ? 'Selected' : 'Open'}
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
            <div class="text-[9px] text-rose-400/80 mt-0.5">Booked by Patient</div>
          </div>
          <span class="text-[9px] font-bold bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">Full</span>
        `;
      }

      grid.appendChild(btn);
    });

    if (!hasSelected && currentShiftAvailable.length > 0) {
      selectHourlySlot(currentShiftAvailable[0].time, currentShiftAvailable[0].period);
    }
  }

  lucide.createIcons();
}

function filterShift(shiftName) {
  currentActiveShift = shiftName;
  const morningBtn = document.getElementById('shift-btn-morning');
  const eveningBtn = document.getElementById('shift-btn-evening');

  if (shiftName === 'morning') {
    morningBtn.className = "shift-btn p-2.5 rounded-xl border border-amber-400 bg-amber-950/50 text-white font-bold text-left transition-all shadow-md shadow-amber-500/20";
    eveningBtn.className = "shift-btn p-2.5 rounded-xl border border-slate-700 bg-slate-800/80 hover:border-sky-400 text-slate-300 text-left transition-all";
  } else {
    eveningBtn.className = "shift-btn p-2.5 rounded-xl border border-sky-400 bg-blue-950/80 text-white font-bold text-left transition-all shadow-md shadow-blue-900/40";
    morningBtn.className = "shift-btn p-2.5 rounded-xl border border-slate-700 bg-slate-800/80 hover:border-sky-400 text-slate-300 text-left transition-all";
  }

  renderHourlySlots();
}

function selectHourlySlot(timeStr, periodStr) {
  bookingData.time = timeStr;
  bookingData.slot = `${timeStr} (${periodStr})`;
  const selectedDisplay = document.getElementById('selected-slot-display');
  if (selectedDisplay) {
    selectedDisplay.innerText = `${timeStr} (${periodStr})`;
  }
  renderHourlySlots();
}

function onDateChanged() {
  bookingData.date = document.getElementById('wizard_date').value;
  renderHourlySlots();
}

function goToStep(stepNumber) {
  document.getElementById('wizard-step-1').classList.add('hidden');
  document.getElementById('wizard-step-2').classList.add('hidden');
  document.getElementById('wizard-step-3').classList.add('hidden');

  document.getElementById(`wizard-step-${stepNumber}`).classList.remove('hidden');

  document.getElementById('step-badge').innerText = `Step ${stepNumber} of 3`;
  const progressPercent = stepNumber === 1 ? '33.33%' : stepNumber === 2 ? '66.66%' : '100%';
  document.getElementById('step-progress-bar').style.width = progressPercent;

  if (stepNumber === 2) {
    renderHourlySlots();
  }

  if (stepNumber === 3) {
    bookingData.date = document.getElementById('wizard_date').value || bookingData.date;
    document.getElementById('summary-proc').innerText = bookingData.procedure;
    document.getElementById('summary-slot').innerText = `${bookingData.date} • ${bookingData.slot}`;
  }

  lucide.createIcons();
}

function selectProcedureChip(btn, procName) {
  bookingData.procedure = procName;
  document.querySelectorAll('.proc-chip').forEach(c => {
    c.className = "proc-chip text-left p-3 rounded-2xl border border-slate-700/80 bg-slate-800/80 hover:bg-slate-800 hover:border-sky-400/80 text-white transition-all flex flex-col justify-between";
  });
  btn.className = "proc-chip text-left p-3 rounded-2xl border border-sky-400 bg-blue-950/80 text-white shadow-lg shadow-blue-900/40 transition-all flex flex-col justify-between";
}

function pickProcedureFromCard(procName) {
  const serviceName = procName || "In-House TruAlign Clear Aligners";
  bookingData.procedure = serviceName;
  document.querySelectorAll('.proc-chip').forEach(c => {
    if (c.innerText.includes(serviceName) || serviceName.includes(c.querySelector('span')?.innerText || '')) {
      c.className = "proc-chip text-left p-3 rounded-2xl border border-teal-500 bg-teal-50/80 text-brand-900 shadow-sm transition-all flex flex-col justify-between";
    }
  });
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
  
  const counter = document.getElementById('phone-digit-counter');
  const validIcon = document.getElementById('phone-valid-icon');
  const errorMsg = document.getElementById('phone-error-msg');
  
  if (counter) {
    counter.innerText = `${cleaned.length}/10 Digits`;
    if (cleaned.length === 10) {
      counter.className = "text-[10px] font-extrabold text-emerald-400";
    } else {
      counter.className = "text-[10px] font-bold text-slate-500";
    }
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
  
  if (errorMsg) {
    errorMsg.classList.add('hidden');
  }
}

function launchWhatsAppBooking() {
  const nameInput = document.getElementById('wizard_name');
  const phoneInput = document.getElementById('wizard_phone');
  const errorMsg = document.getElementById('phone-error-msg');
  
  const name = nameInput.value.trim();
  const phone = phoneInput.value.replace(/\D/g, '').trim();

  if (!name) {
    showToast("Please enter patient full name to proceed.");
    nameInput.focus();
    return;
  }

  if (phone.length !== 10) {
    if (errorMsg) {
      errorMsg.innerText = "Please enter a valid 10-digit mobile number.";
      errorMsg.classList.remove('hidden');
    }
    phoneInput.classList.remove('border-slate-700', 'border-emerald-500');
    phoneInput.classList.add('border-rose-500');
    phoneInput.focus();
    return;
  }

  if (!/^[6-9]\d{9}$/.test(phone)) {
    if (errorMsg) {
      errorMsg.innerText = "Please enter a valid Indian mobile number starting with 6, 7, 8, or 9.";
      errorMsg.classList.remove('hidden');
    }
    phoneInput.classList.remove('border-slate-700', 'border-emerald-500');
    phoneInput.classList.add('border-rose-500');
    phoneInput.focus();
    return;
  }

  bookingData.name = name;
  bookingData.phone = `+91 ${phone}`;

  const msg = `Namaste Dr. Vaibhav,\n\nI would like to book a dental consultation at Happy Whites Dental Clinic:\n\nPatient Name: ${bookingData.name}\nMobile: ${bookingData.phone}\nProcedure: ${bookingData.procedure}\nPreferred Date: ${bookingData.date}\nSlot: ${bookingData.slot}\n\nPlease confirm my appointment slot. Thank you!`;
  const encoded = encodeURIComponent(msg);
  const url = `https://wa.me/919406951737?text=${encoded}`;
  window.open(url, '_blank');
  trackConversion('whatsapp_booking_submit', { procedure: bookingData.procedure, slot: bookingData.slot });
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
    beforeLayer.style.clipPath = `polygon(${percent.toFixed(2)}% 0, 100% 0, 100% 100%, ${percent.toFixed(2)}% 100%)`;
  }
  if (divider) {
    divider.style.left = `${percent.toFixed(2)}%`;
  }

  if (beforeBadge) {
    if (percent < 22) {
      beforeBadge.style.opacity = '1';
    } else if (percent > 78) {
      beforeBadge.style.opacity = Math.max(0.1, ((100 - percent) / 22)).toFixed(2);
    } else {
      beforeBadge.style.opacity = '1';
    }
  }
  if (afterBadge) {
    if (percent > 78) {
      afterBadge.style.opacity = '1';
    } else if (percent < 22) {
      afterBadge.style.opacity = Math.max(0.1, (percent / 22)).toFixed(2);
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
    p0.className = percent <= 5 ? activeClass : inactiveClass;
    p50.className = (percent >= 45 && percent <= 55) ? activeClass : inactiveClass;
    p100.className = percent >= 95 ? activeClass : inactiveClass;
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
      setSliderPreset(0);
      e.preventDefault();
    } else if (e.key === 'End') {
      setSliderPreset(100);
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
    counter.innerText = `${cleaned.length}/10 Digits`;
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
  const date = dateInput.value || 'Earliest Available';
  const slot = slotSelect ? slotSelect.value : 'Evening (05:00 PM – 09:00 PM)';
  const proc = bookingData.procedure || document.getElementById('modal-proc-title')?.innerText || 'Dental Consultation';

  if (!name) {
    showToast("Please enter patient full name.");
    nameInput.focus();
    return;
  }

  if (phone.length !== 10 || !/^[6-9]\d{9}$/.test(phone)) {
    if (errorMsg) {
      errorMsg.innerText = "Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).";
      errorMsg.classList.remove('hidden');
    }
    phoneInput.classList.remove('border-slate-700', 'border-emerald-500');
    phoneInput.classList.add('border-rose-500');
    phoneInput.focus();
    return;
  }

  closeServiceBookingModal();

  const msg = `Namaste Dr. Vaibhav,\n\nI would like to book an appointment at Happy Whites Dental Clinic:\n\nSelected Service: *${proc}*\nPatient Name: *${name}*\nMobile: *+91 ${phone}*\nPreferred Date: *${date}*\nPreferred Shift: *${slot}*\n\nKindly confirm my consultation slot. Thank you!`;
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
