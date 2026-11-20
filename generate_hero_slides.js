const fs = require('fs');
const path = require('path');

const heroDir = path.join(__dirname, 'public', 'images', 'hero');
if (!fs.existsSync(heroDir)) {
  fs.mkdirSync(heroDir, { recursive: true });
}

// Slide 1: Water Purifier - Deep Luxury Midnight Navy to Cyan Atmospheric Glow
const slide1Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
  <defs>
    <linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#030712"/>
      <stop offset="40%" stop-color="#0b1528"/>
      <stop offset="80%" stop-color="#0f2748"/>
      <stop offset="100%" stop-color="#0369a1"/>
    </linearGradient>
    <radialGradient id="glow1" cx="70%" cy="45%" r="55%">
      <stop offset="0%" stop-color="#0284c7" stop-opacity="0.45"/>
      <stop offset="40%" stop-color="#0369a1" stop-opacity="0.18"/>
      <stop offset="75%" stop-color="#021526" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#030712" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="cyanFlare" cx="80%" cy="40%" r="35%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.35"/>
      <stop offset="60%" stop-color="#0ea5e9" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#030712" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1920" height="1080" fill="url(#bg1)"/>
  <circle cx="1400" cy="480" r="700" fill="url(#glow1)"/>
  <circle cx="1500" cy="420" r="450" fill="url(#cyanFlare)"/>

  <!-- High-Tech Isometric Precision Grid -->
  <g opacity="0.06" stroke="#38bdf8" stroke-width="1.2">
    <path d="M0 120 H1920 M0 240 H1920 M0 360 H1920 M0 480 H1920 M0 600 H1920 M0 720 H1920 M0 840 H1920 M0 960 H1920" />
    <path d="M160 0 V1080 M320 0 V1080 M480 0 V1080 M640 0 V1080 M800 0 V1080 M960 0 V1080 M1120 0 V1080 M1280 0 V1080 M1440 0 V1080 M1600 0 V1080 M1760 0 V1080" />
  </g>

  <!-- Concentric Radial Orbit Rings -->
  <g transform="translate(1420, 500)" opacity="0.18">
    <circle cx="0" cy="0" r="280" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="12 16"/>
    <circle cx="0" cy="0" r="380" fill="none" stroke="#7dd3fc" stroke-width="1.5" stroke-dasharray="6 24"/>
    <circle cx="0" cy="0" r="480" fill="none" stroke="#0284c7" stroke-width="2"/>
    <circle cx="0" cy="0" r="580" fill="none" stroke="#0369a1" stroke-width="1" stroke-dasharray="8 32"/>
  </g>

  <!-- Left Dark Gradient for High-Contrast Readable Typography -->
  <rect width="1150" height="1080" fill="url(#bg1)" opacity="0.94"/>
  <rect width="1920" height="1080" fill="black" opacity="0.2"/>
</svg>`;

// Slide 2: Water Treatment Plants - Deep Industrial Navy to Electric Cobalt
const slide2Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
  <defs>
    <linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020617"/>
      <stop offset="45%" stop-color="#0a152e"/>
      <stop offset="80%" stop-color="#0d2850"/>
      <stop offset="100%" stop-color="#1e3a8a"/>
    </linearGradient>
    <radialGradient id="glow2" cx="72%" cy="48%" r="55%">
      <stop offset="0%" stop-color="#1d4ed8" stop-opacity="0.45"/>
      <stop offset="45%" stop-color="#0284c7" stop-opacity="0.2"/>
      <stop offset="80%" stop-color="#020617" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="blueBeam" cx="78%" cy="40%" r="40%">
      <stop offset="0%" stop-color="#60a5fa" stop-opacity="0.3"/>
      <stop offset="60%" stop-color="#2563eb" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#020617" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1920" height="1080" fill="url(#bg2)"/>
  <circle cx="1420" cy="500" r="750" fill="url(#glow2)"/>
  <circle cx="1500" cy="440" r="500" fill="url(#blueBeam)"/>

  <!-- High-Tech Engineering Blueprint Grid -->
  <g opacity="0.07" stroke="#60a5fa" stroke-width="1.2">
    <path d="M0 140 H1920 M0 280 H1920 M0 420 H1920 M0 560 H1920 M0 700 H1920 M0 840 H1920 M0 980 H1920" />
    <path d="M200 0 V1080 M400 0 V1080 M600 0 V1080 M800 0 V1080 M1000 0 V1080 M1200 0 V1080 M1400 0 V1080 M1600 0 V1080 M1800 0 V1080" />
  </g>

  <!-- Technical Schematic Circles -->
  <g transform="translate(1440, 520)" opacity="0.2">
    <circle cx="0" cy="0" r="300" fill="none" stroke="#60a5fa" stroke-width="2" stroke-dasharray="16 16"/>
    <circle cx="0" cy="0" r="420" fill="none" stroke="#93c5fd" stroke-width="1"/>
    <circle cx="0" cy="0" r="540" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="8 20"/>
  </g>

  <rect width="1150" height="1080" fill="url(#bg2)" opacity="0.94"/>
  <rect width="1920" height="1080" fill="black" opacity="0.2"/>
</svg>`;

// Slide 3: Industrial Gases - Deep Obsidian Charcoal to Warm Molten Bronze / Amber Glow
const slide3Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
  <defs>
    <linearGradient id="bg3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#05070a"/>
      <stop offset="45%" stop-color="#111827"/>
      <stop offset="80%" stop-color="#1f2438"/>
      <stop offset="100%" stop-color="#2d2215"/>
    </linearGradient>
    <radialGradient id="glow3" cx="72%" cy="48%" r="55%">
      <stop offset="0%" stop-color="#d97706" stop-opacity="0.4"/>
      <stop offset="45%" stop-color="#b45309" stop-opacity="0.18"/>
      <stop offset="80%" stop-color="#05070a" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="amberFlare" cx="78%" cy="42%" r="35%">
      <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.32"/>
      <stop offset="60%" stop-color="#f59e0b" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#05070a" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1920" height="1080" fill="url(#bg3)"/>
  <circle cx="1400" cy="500" r="750" fill="url(#glow3)"/>
  <circle cx="1480" cy="440" r="500" fill="url(#amberFlare)"/>

  <!-- Industrial Mesh Grid -->
  <g opacity="0.07" stroke="#f59e0b" stroke-width="1.2">
    <path d="M0 120 H1920 M0 240 H1920 M0 360 H1920 M0 480 H1920 M0 600 H1920 M0 720 H1920 M0 840 H1920 M0 960 H1920" />
    <path d="M160 0 V1080 M320 0 V1080 M480 0 V1080 M640 0 V1080 M800 0 V1080 M960 0 V1080 M1120 0 V1080 M1280 0 V1080 M1440 0 V1080 M1600 0 V1080 M1760 0 V1080" />
  </g>

  <!-- Orbital Pressure Wave Lines -->
  <g transform="translate(1420, 500)" opacity="0.2">
    <circle cx="0" cy="0" r="280" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="14 18"/>
    <circle cx="0" cy="0" r="400" fill="none" stroke="#fbbf24" stroke-width="1"/>
    <circle cx="0" cy="0" r="520" fill="none" stroke="#d97706" stroke-width="2" stroke-dasharray="8 24"/>
  </g>

  <rect width="1150" height="1080" fill="url(#bg3)" opacity="0.94"/>
  <rect width="1920" height="1080" fill="black" opacity="0.2"/>
</svg>`;

// Slide 4: Medical Oxygen - Deep Obsidian to Clean Emerald / Healthcare Teal Glow
const slide4Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" width="1920" height="1080">
  <defs>
    <linearGradient id="bg4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020806"/>
      <stop offset="45%" stop-color="#061f18"/>
      <stop offset="80%" stop-color="#083329"/>
      <stop offset="100%" stop-color="#047857"/>
    </linearGradient>
    <radialGradient id="glow4" cx="72%" cy="48%" r="55%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.4"/>
      <stop offset="45%" stop-color="#059669" stop-opacity="0.18"/>
      <stop offset="80%" stop-color="#020806" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="tealFlare" cx="78%" cy="42%" r="35%">
      <stop offset="0%" stop-color="#34d399" stop-opacity="0.32"/>
      <stop offset="60%" stop-color="#10b981" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#020806" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1920" height="1080" fill="url(#bg4)"/>
  <circle cx="1400" cy="500" r="750" fill="url(#glow4)"/>
  <circle cx="1480" cy="440" r="500" fill="url(#tealFlare)"/>

  <!-- Clean Medical Grid -->
  <g opacity="0.07" stroke="#34d399" stroke-width="1.2">
    <path d="M0 120 H1920 M0 240 H1920 M0 360 H1920 M0 480 H1920 M0 600 H1920 M0 720 H1920 M0 840 H1920 M0 960 H1920" />
    <path d="M160 0 V1080 M320 0 V1080 M480 0 V1080 M640 0 V1080 M800 0 V1080 M960 0 V1080 M1120 0 V1080 M1280 0 V1080 M1440 0 V1080 M1600 0 V1080 M1760 0 V1080" />
  </g>

  <!-- Dynamic ECG / Heartbeat Life Pulse Line -->
  <path d="M900 680 L1120 680 L1150 600 L1180 760 L1220 520 L1260 800 L1290 640 L1320 700 L1340 680 L1920 680" fill="none" stroke="#34d399" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.3"/>

  <!-- Orbital Rings -->
  <g transform="translate(1420, 500)" opacity="0.2">
    <circle cx="0" cy="0" r="280" fill="none" stroke="#34d399" stroke-width="2" stroke-dasharray="14 18"/>
    <circle cx="0" cy="0" r="400" fill="none" stroke="#6ee7b7" stroke-width="1"/>
    <circle cx="0" cy="0" r="520" fill="none" stroke="#059669" stroke-width="2" stroke-dasharray="8 24"/>
  </g>

  <rect width="1150" height="1080" fill="url(#bg4)" opacity="0.94"/>
  <rect width="1920" height="1080" fill="black" opacity="0.2"/>
</svg>`;

fs.writeFileSync(path.join(heroDir, 'slide-water-purifier.svg'), slide1Svg);
fs.writeFileSync(path.join(heroDir, 'slide-water-treatment.svg'), slide2Svg);
fs.writeFileSync(path.join(heroDir, 'slide-industrial-gas.svg'), slide3Svg);
fs.writeFileSync(path.join(heroDir, 'slide-medical-oxygen.svg'), slide4Svg);
console.log('Successfully generated luxury cinematic backdrop SVGs!');
