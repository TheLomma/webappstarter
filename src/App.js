import { useState, useEffect, useRef } from "react";

const translations = {
  en: {
    title: "Web App Launcher",
    myApps: "MY APPS",
    favorites: "FAVORITES",
    clearCache: "Clear Cache",
    clearCacheConfirm: "Clear all cache & local storage?",
    clearCacheDone: "Cache cleared!",
    resetApps: "Restore Default Apps",
    resetConfirm: "Reset to default apps?",
    settings: "Settings",
    addNewApp: "Add New App",
    appName: "App Name",
    url: "URL",
    emoji: "Emoji Icon",
    addBtn: "+ Add App",
    theme: "Theme",
    language: "Language",
    manageApps: "Manage Apps",
    emptyTitle: "No apps yet",
    emptyDesc: "Tap the settings button to add your first app!",
    namePlaceholder: "My App",
    urlPlaceholder: "https://example.com",
    emojiPlaceholder: "🌐",
    version: "v6.6",
    search: "Search apps...",
    stats: "Usage Statistics",
    statsDesc: "How often each app was opened",
    statsReset: "Reset Statistics",
    statsResetConfirm: "Reset all usage statistics?",
    statsEmpty: "No data yet — open some apps first!",
    statsOpens: "opens",
    noteTitle: "Note",
    notePlaceholder: "Enter note text...",
    noteSave: "Save",
    noteAdd: "+ Add Note",
    importExport: "Import / Export",
    exportBtn: "Export JSON",
    importBtn: "Import JSON",
    pinProtect: "PIN Protection",
    pinFor: "PIN for app",
    pinSet: "Set PIN",
    pinRemove: "Remove PIN",
    pinEnter: "Enter PIN",
    pinWrong: "Wrong PIN",
    pinPlaceholder: "4-digit PIN",
    addToHome: "Add to Home Screen",
    addToHomeDesc: "Install this app on your home screen for quick access.",
    addToHomeBtn: "Add to Home Screen",
    addToHomeDismiss: "Not now",
    recentlyUsed: "RECENTLY USED",
    cardSize: "Card Size",
    small: "Small",
    medium: "Medium",
    large: "Large",
    customBg: "Custom Background",
    customBgColor1: "Color 1",
    customBgColor2: "Color 2",
    offlineTitle: "You are offline",
    offlineDesc: "Please check your internet connection.",
    qrExport: "QR Code Export",
    qrBtn: "Show QR Code",
    qrClose: "Close",
    vibration: "Vibration",
    vibrationOn: "On",
    vibrationOff: "Off",
    backupReminder: "Backup Reminder",
    backupReminderDesc: "Get reminded to export your apps",
    backupReminderOff: "Off",
    backupReminderOptions: ["Off", "7 days", "14 days", "30 days"],
    backupBannerTitle: "Backup reminder",
    backupBannerDesc: "It's time to export your apps as a backup!",
    backupBannerBtn: "Export now",
    backupBannerDismiss: "Later",
    globalPin: "Global PIN",
    pinTimeout: "Auto-Lock",
    pinTimeoutDesc: "Lock app automatically after inactivity",
    pinTimeoutOff: "Off",
    pinTimeoutOptions: ["Off", "1 min", "5 min", "15 min", "30 min"],
    globalPinDesc: "Lock the entire app with a PIN",
    globalPinSet: "Set Global PIN",
    globalPinRemove: "Remove Global PIN",
    globalPinEnter: "Enter App PIN",
    globalPinNew: "Set new PIN",
    globalPinConfirm: "Confirm PIN",
    globalPinMismatch: "PINs do not match",
    globalPinWrong: "Wrong PIN",
    globalPinActive: "Global PIN active",
    animations: "Animations",
    animationsOn: "On",
    animationsOff: "Off",
    helpTitle: "How to use",
    helpClose: "Close",
    helpItems: [
      { icon: "➕", title: "Add App", desc: "Open Settings (⚙️) → fill in name, URL & emoji → tap '+ Add App'." },
      { icon: "✏️", title: "Edit App", desc: "Settings → Manage Apps → tap ✏️ next to an app → change fields → Save." },
      { icon: "🗑️", title: "Delete App", desc: "Settings → Manage Apps → tap 🗑️ next to the app." },
      { icon: "⭐", title: "Favorites", desc: "Tap ⭐ on a card to mark it as favorite. Favorites appear at the top." },
      { icon: "🔍", title: "Search", desc: "Type in the search bar to filter apps by name or URL in real time." },
      { icon: "↕️", title: "Reorder", desc: "Hold & drag a card to change its position. Order is saved automatically." },
      { icon: "👥", title: "Groups", desc: "Tap ➕ next to the group tabs to create a group. Assign apps to it and swipe left/right to switch groups." },
      { icon: "🔒", title: "App PIN", desc: "Settings → Manage Apps → tap 🔒 → set a 4-digit PIN. Protected apps ask for PIN before opening." },
      { icon: "🔐", title: "Global PIN", desc: "Settings → Global PIN → Set Global PIN → enter & confirm a 4-digit PIN." },
      { icon: "⏱️", title: "Auto-Lock", desc: "Settings → Global PIN → Auto-Lock → choose after how many minutes the app locks automatically." },
      { icon: "🔲", title: "View Mode", desc: "Tap the 🔲/📊 button in the header to switch between grid and list view." },
      { icon: "📐", title: "Card Size", desc: "Settings → Card Size → choose Small, Medium or Large." },
      { icon: "🎨", title: "Themes", desc: "Settings → Theme → pick one of 6 color themes. Use ☀️/🌙 to toggle light/dark." },
      { icon: "🌈", title: "Custom Background", desc: "Settings → Custom Background → enable & pick two gradient colors." },
      { icon: "✨", title: "Animations", desc: "Settings → Animations → toggle off to disable background animations." },
      { icon: "📳", title: "Vibration", desc: "Settings → Vibration → toggle on/off (Android only)." },
      { icon: "🌐", title: "Language", desc: "Settings → Language → choose 🇩🇪 Deutsch or 🇬🇧 English." },
      { icon: "👤", title: "Profiles", desc: "Tap the launcher title 5 times quickly to switch profiles." },
      { icon: "💾", title: "Backup Reminder", desc: "Settings → Backup Reminder → choose an interval." },
      { icon: "📤", title: "Export", desc: "Settings → Import/Export → Export JSON to save your apps." },
      { icon: "📥", title: "Import", desc: "Settings → Import/Export → Import JSON to restore a saved app list." },
      { icon: "📷", title: "QR Code", desc: "Settings → QR Code Export → Show QR Code → scan with another device." },
      { icon: "🔗", title: "Share App", desc: "Tap the 🔗 icon on a card to share a single app via link." },
      { icon: "📲", title: "Install PWA", desc: "Tap 'Add to Home Screen' in the banner to install as an app." },
      { icon: "🗄️", title: "Clear Cache", desc: "Settings → Clear Cache → resets all data. Export a backup first!" },
    ],
  },
  de: {
    title: "Web App Launcher",
    myApps: "MEINE APPS",
    favorites: "FAVORITEN",
    clearCache: "Cache leeren",
    clearCacheConfirm: "Gesamten Cache & lokalen Speicher leeren?",
    clearCacheDone: "Cache geleert!",
    resetApps: "Standard-Apps wiederherstellen",
    resetConfirm: "Wirklich auf Standard-Apps zurücksetzen?",
    settings: "Einstellungen",
    addNewApp: "Neue App hinzufügen",
    appName: "App-Name",
    url: "URL",
    emoji: "Emoji-Symbol",
    addBtn: "+ App hinzufügen",
    theme: "Design",
    language: "Sprache",
    manageApps: "Apps verwalten",
    emptyTitle: "Noch keine Apps",
    emptyDesc: "Tippe auf Einstellungen um deine erste App hinzuzufügen!",
    namePlaceholder: "Meine App",
    urlPlaceholder: "https://beispiel.de",
    emojiPlaceholder: "🌐",
    version: "v6.6",
    search: "Apps suchen...",
    stats: "Nutzungsstatistik",
    statsDesc: "Wie oft wurde welche App geöffnet",
    statsReset: "Statistik zurücksetzen",
    statsResetConfirm: "Alle Nutzungsstatistiken zurücksetzen?",
    statsEmpty: "Noch keine Daten – öffne zuerst ein paar Apps!",
    statsOpens: "×",
    noteTitle: "Notiz",
    notePlaceholder: "Notiztext eingeben...",
    noteSave: "Speichern",
    noteAdd: "+ Notiz hinzufügen",
    importExport: "Import / Export",
    exportBtn: "JSON exportieren",
    importBtn: "JSON importieren",
    pinProtect: "PIN-Schutz",
    pinFor: "PIN für App",
    pinSet: "PIN setzen",
    pinRemove: "PIN entfernen",
    pinEnter: "PIN eingeben",
    pinWrong: "Falsche PIN",
    pinPlaceholder: "4-stellige PIN",
    addToHome: "Zum Startbildschirm",
    addToHomeDesc: "Installiere diese App auf deinem Startbildschirm für schnellen Zugriff.",
    addToHomeBtn: "Zum Startbildschirm hinzufügen",
    addToHomeDismiss: "Nicht jetzt",
    recentlyUsed: "ZULETZT GEÖFFNET",
    cardSize: "Kartengröße",
    small: "Klein",
    medium: "Mittel",
    large: "Groß",
    customBg: "Eigener Hintergrund",
    customBgColor1: "Farbe 1",
    customBgColor2: "Farbe 2",
    offlineTitle: "Du bist offline",
    offlineDesc: "Bitte überprüfe deine Internetverbindung.",
    qrExport: "QR-Code Export",
    qrBtn: "QR-Code anzeigen",
    qrClose: "Schließen",
    vibration: "Vibration",
    vibrationOn: "An",
    vibrationOff: "Aus",
    backupReminder: "Backup-Erinnerung",
    backupReminderDesc: "Erinnerung zum Exportieren der Apps",
    backupReminderOff: "Aus",
    backupReminderOptions: ["Aus", "7 Tage", "14 Tage", "30 Tage"],
    backupBannerTitle: "Backup fällig",
    backupBannerDesc: "Es ist Zeit, deine Apps als Backup zu exportieren!",
    backupBannerBtn: "Jetzt exportieren",
    backupBannerDismiss: "Später",
    globalPin: "Globaler PIN",
    pinTimeout: "Auto-Sperre",
    pinTimeoutDesc: "App nach Inaktivität automatisch sperren",
    pinTimeoutOff: "Aus",
    pinTimeoutOptions: ["Aus", "1 Min", "5 Min", "15 Min", "30 Min"],
    globalPinDesc: "Die gesamte App mit einem PIN schützen",
    globalPinSet: "Globalen PIN setzen",
    globalPinRemove: "Globalen PIN entfernen",
    globalPinEnter: "App-PIN eingeben",
    globalPinNew: "Neuen PIN setzen",
    globalPinConfirm: "PIN bestätigen",
    globalPinMismatch: "PINs stimmen nicht überein",
    globalPinWrong: "Falscher PIN",
    globalPinActive: "Globaler PIN aktiv",
    animations: "Animationen",
    animationsOn: "An",
    animationsOff: "Aus",
    helpTitle: "So funktioniert's",
    helpClose: "Schließen",
    helpItems: [
      { icon: "➕", title: "App hinzufügen", desc: "Einstellungen (⚙️) öffnen → Name, URL & Emoji eingeben → '+ App hinzufügen' tippen." },
      { icon: "✏️", title: "App bearbeiten", desc: "Einstellungen → Apps verwalten → ✏️ tippen → Felder ändern → Speichern." },
      { icon: "🗑️", title: "App löschen", desc: "Einstellungen → Apps verwalten → 🗑️ neben der App tippen." },
      { icon: "⭐", title: "Favoriten", desc: "⭐ auf einer Karte tippen, um sie als Favorit zu markieren." },
      { icon: "🔍", title: "Suche", desc: "Im Suchfeld tippen, um Apps nach Name oder URL zu filtern." },
      { icon: "↕️", title: "Reihenfolge", desc: "Karte gedrückt halten & ziehen, um die Reihenfolge zu ändern." },
      { icon: "👥", title: "Gruppen", desc: "➕ neben den Gruppen-Tabs tippen, um eine Gruppe zu erstellen." },
      { icon: "🔒", title: "App-PIN", desc: "Einstellungen → Apps verwalten → 🔒 tippen → 4-stellige PIN setzen." },
      { icon: "🔐", title: "Globaler PIN", desc: "Einstellungen → Globaler PIN → Globalen PIN setzen → PIN eingeben & bestätigen." },
      { icon: "⏱️", title: "Auto-Sperre", desc: "Einstellungen → Globaler PIN → Auto-Sperre → Zeitraum wählen." },
      { icon: "🔲", title: "Ansicht", desc: "🔲/📊-Button im Header tippen, um zwischen Gitter- und Listenansicht zu wechseln." },
      { icon: "📐", title: "Kartengröße", desc: "Einstellungen → Kartengröße → Klein, Mittel oder Groß wählen." },
      { icon: "🎨", title: "Design", desc: "Einstellungen → Design → eines von 6 Farbthemes wählen." },
      { icon: "🌈", title: "Eigener Hintergrund", desc: "Einstellungen → Eigener Hintergrund → aktivieren & zwei Farben wählen." },
      { icon: "✨", title: "Animationen", desc: "Einstellungen → Animationen → deaktivieren für bessere Performance." },
      { icon: "📳", title: "Vibration", desc: "Einstellungen → Vibration → ein/aus schalten (nur Android)." },
      { icon: "🌐", title: "Sprache", desc: "Einstellungen → Sprache → 🇩🇪 Deutsch oder 🇬🇧 English wählen." },
      { icon: "👤", title: "Profile", desc: "App-Titel 5x schnell tippen, um das Profil zu wechseln." },
      { icon: "💾", title: "Backup-Erinnerung", desc: "Einstellungen → Backup-Erinnerung → Intervall wählen." },
      { icon: "📤", title: "Exportieren", desc: "Einstellungen → Import/Export → JSON exportieren." },
      { icon: "📥", title: "Importieren", desc: "Einstellungen → Import/Export → JSON importieren." },
      { icon: "📷", title: "QR-Code", desc: "Einstellungen → QR-Code Export → QR-Code anzeigen." },
      { icon: "🔗", title: "App teilen", desc: "🔗-Icon auf einer Karte tippen, um eine App per Link zu teilen." },
      { icon: "📲", title: "Als App installieren", desc: "Banner 'Zum Startbildschirm' tippen oder über das Browser-Menü." },
      { icon: "🗄️", title: "Cache leeren", desc: "Einstellungen → Cache leeren → setzt alle Daten zurück." },
    ],
  },
};

const THEMES = {
  light:     { bg: "linear-gradient(135deg,#e8eaf6 0%,#e3f2fd 50%,#f3e5f5 100%)", surface: "rgba(255,255,255,0.25)", primary: "#4f46e5", primarySoft: "rgba(79,70,229,0.15)", text: "#1e1e2e", subtext: "rgba(30,30,46,0.55)", border: "rgba(255,255,255,0.55)", headerBg: "rgba(255,255,255,0.2)", headerText: "#1e1e2e", cardHover: "rgba(255,255,255,0.45)", inputBg: "rgba(255,255,255,0.2)", label: "Light", dot: "linear-gradient(135deg,#f0f2f5,#4f46e5)" },
  dark:      { bg: "linear-gradient(135deg,#0f0f17 0%,#1a1a2e 50%,#16213e 100%)", surface: "rgba(255,255,255,0.07)", primary: "#a78bfa", primarySoft: "rgba(167,139,250,0.15)", text: "#e2e8f0", subtext: "rgba(226,232,240,0.5)", border: "rgba(255,255,255,0.12)", headerBg: "rgba(255,255,255,0.05)", headerText: "#e2e8f0", cardHover: "rgba(255,255,255,0.13)", inputBg: "rgba(255,255,255,0.05)", label: "Dark", dot: "linear-gradient(135deg,#1c1c2e,#7c6bf8)" },
  blue:      { bg: "linear-gradient(135deg,#dbeafe 0%,#e0f2fe 50%,#ede9fe 100%)", surface: "rgba(255,255,255,0.28)", primary: "#0ea5e9", primarySoft: "rgba(14,165,233,0.15)", text: "#0c1a2e", subtext: "rgba(12,26,46,0.5)", border: "rgba(255,255,255,0.55)", headerBg: "rgba(255,255,255,0.2)", headerText: "#0c1a2e", cardHover: "rgba(255,255,255,0.45)", inputBg: "rgba(255,255,255,0.2)", label: "Blue", dot: "linear-gradient(135deg,#e0f2fe,#0ea5e9)" },
  blueDark:  { bg: "linear-gradient(135deg,#060d1a 0%,#0d1b2e 50%,#0a1628 100%)", surface: "rgba(255,255,255,0.06)", primary: "#38bdf8", primarySoft: "rgba(56,189,248,0.15)", text: "#e2f0ff", subtext: "rgba(226,240,255,0.5)", border: "rgba(255,255,255,0.1)", headerBg: "rgba(255,255,255,0.04)", headerText: "#e2f0ff", cardHover: "rgba(255,255,255,0.11)", inputBg: "rgba(255,255,255,0.04)", label: "Blue Dark", dot: "linear-gradient(135deg,#0d1b2e,#38bdf8)" },
  green:     { bg: "linear-gradient(135deg,#d1fae5 0%,#ecfdf5 50%,#dcfce7 100%)", surface: "rgba(255,255,255,0.28)", primary: "#10b981", primarySoft: "rgba(16,185,129,0.15)", text: "#064e3b", subtext: "rgba(6,78,59,0.55)", border: "rgba(255,255,255,0.55)", headerBg: "rgba(255,255,255,0.2)", headerText: "#064e3b", cardHover: "rgba(255,255,255,0.45)", inputBg: "rgba(255,255,255,0.2)", label: "Green", dot: "linear-gradient(135deg,#ecfdf5,#10b981)" },
  greenDark: { bg: "linear-gradient(135deg,#061410 0%,#0d2018 50%,#071a12 100%)", surface: "rgba(255,255,255,0.06)", primary: "#34d399", primarySoft: "rgba(52,211,153,0.15)", text: "#d1fae5", subtext: "rgba(209,250,229,0.5)", border: "rgba(255,255,255,0.1)", headerBg: "rgba(255,255,255,0.04)", headerText: "#d1fae5", cardHover: "rgba(255,255,255,0.11)", inputBg: "rgba(255,255,255,0.04)", label: "Green Dark", dot: "linear-gradient(135deg,#0d2018,#34d399)" },
};

const STORAGE_APPS  = "wal_apps";
const STORAGE_THEME = "wal_theme";
const STORAGE_LANG  = "wal_lang";
const STORAGE_PINS   = "wal_pins";
const STORAGE_SIZE   = "wal_size";
const STORAGE_VIBRO  = "wal_vibro";
const STORAGE_CUSTBG = "wal_custbg";
const STORAGE_VIEW      = "wal_view";
const STORAGE_GLOBAL_PIN = "wal_global_pin";
const STORAGE_PIN_TIMEOUT = "wal_pin_timeout";
const STORAGE_BACKUP_DAYS = "wal_backup_days";
const STORAGE_LAST_EXPORT = "wal_last_export";
const STORAGE_GROUPS = "wal_groups";
const STORAGE_PROFILE = "wal_profile";
const STORAGE_STATS   = "wal_stats";
const STORAGE_NOTES = "wal_notes";

const PROFILES = {
  dominik: { name: "Dominik", emoji: "👨🏻" },
  joern:   { name: "Jörn",    emoji: "👨🏻‍🦳" },
};

const BlobBg = ({ isDark, enabled }) => {
  if (!enabled) return null;
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none" }}>
      <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: isDark ? "radial-gradient(circle,rgba(124,107,248,0.35) 0%,transparent 70%)" : "radial-gradient(circle,rgba(167,139,250,0.45) 0%,transparent 70%)", top: "-120px", left: "-100px", animation: "blob1 8s ease-in-out infinite" }} />
      <div style={{ position: "absolute", width: 420, height: 420, borderRadius: "50%", background: isDark ? "radial-gradient(circle,rgba(56,189,248,0.25) 0%,transparent 70%)" : "radial-gradient(circle,rgba(14,165,233,0.35) 0%,transparent 70%)", top: "40%", right: "-80px", animation: "blob2 10s ease-in-out infinite" }} />
      <div style={{ position: "absolute", width: 380, height: 380, borderRadius: "50%", background: isDark ? "radial-gradient(circle,rgba(52,211,153,0.2) 0%,transparent 70%)" : "radial-gradient(circle,rgba(16,185,129,0.3) 0%,transparent 70%)", bottom: "-80px", left: "30%", animation: "blob3 12s ease-in-out infinite" }} />
      <style>{`
        @keyframes blob1 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(40px,30px) scale(1.08)} 66%{transform:translate(-20px,50px) scale(0.95)} }
        @keyframes blob2 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(-50px,20px) scale(1.05)} 66%{transform:translate(30px,-40px) scale(0.97)} }
        @keyframes blob3 { 0%,100%{transform:translate(0,0) scale(1)} 33%{transform:translate(30px,-30px) scale(1.06)} 66%{transform:translate(-40px,20px) scale(0.94)} }
      `}</style>
    </div>
  );
};

export default function App() {
  const [profile, setProfile] = useState(() => localStorage.getItem(STORAGE_PROFILE) || null);
  const [profileScreen, setProfileScreen] = useState(() => !localStorage.getItem(STORAGE_PROFILE));

  const DEFAULT_APPS_DOMINIK = [
    { id: 1,  name: "Magic Showrunner", url: "https://magicshowrunnernew.vercel.app", emoji: "🎪", fav: false },
    { id: 3,  name: "SynaTest",         url: "https://synaptictester.vercel.app",      emoji: "🧠", fav: false },
    { id: 4,  name: "Reiseplaner",      url: "https://reiseplaner-psi.vercel.app",     emoji: "✈️", fav: false },
    { id: 5,  name: "5 Star",           url: "https://magic.pm/5star/lomma/",          emoji: "🌟", fav: false },
    { id: 6,  name: "The Wheel",        url: "https://thewheel.fun/login.php",         emoji: "🎡", fav: false },
    { id: 7,  name: "Prestige",         url: "https://prestige-magic.com",             emoji: "📋", fav: false },
    { id: 8,  name: "RP Dashboard",     url: "https://rpdashboard.vercel.app",         emoji: "📊", fav: false },
    { id: 9,  name: "API Test",         url: "https://apitest-pi-seven.vercel.app",    emoji: "🔌", fav: false },
    { id: 10, name: "Restaurant Magic", url: "https://restaurantmagic.vercel.app",     emoji: "🍽️", fav: false },
    { id: 11, name: "Papierinventur",   url: "https://papierinventur.vercel.app",      emoji: "📄", fav: false },
    { id: 12, name: "Coup d'État",      url: "https://cardgame-omega-six.vercel.app",  emoji: "🃏", fav: false },
    { id: 13, name: "Jump Runner",      url: "https://jumprunner.vercel.app",          emoji: "🕹️", fav: false },
    { id: 14, name: "Hopmanns Olive",   url: "https://olivespeisekarte.vercel.app",    emoji: "🫒", fav: false },
    { id: 15, name: "SMS Web App",      url: "https://smswebapp.vercel.app",           emoji: "💬", fav: false },
    { id: 16, name: "BoardVault",       url: "https://brettspielesapp.vercel.app",     emoji: "🎲", fav: false },
    { id: 17, name: "Coffee Magic",     url: "https://coffeemagic.vercel.app",         emoji: "☕", fav: false },
    { id: 18, name: "Arc",              url: "https://arc-liart-one.vercel.app",       emoji: "🌀", fav: false },
    { id: 20, name: "QR Genie",         url: "https://linkgen.ie/datlomma",            emoji: "▣",  fav: false },
    { id: 21, name: "ParcWizard",       url: "https://parcwizard.vercel.app",          emoji: "🪄", fav: false },
  ];

  const DEFAULT_APPS_JOERN = [
    { id: 1,  name: "Magic Showrunner", url: "https://magicshowrunnernew.vercel.app", emoji: "🎪", fav: false },
    { id: 3,  name: "SynaTest",         url: "https://synaptictester.vercel.app",      emoji: "🧠", fav: false },
    { id: 4,  name: "Reiseplaner",      url: "https://reiseplaner-psi.vercel.app",     emoji: "✈️", fav: false },
    { id: 5,  name: "5 Star",           url: "https://magic.pm/5star/derkusterer/",    emoji: "🌟", fav: false },
    { id: 6,  name: "The Wheel",        url: "https://thewheel.fun/login.php",         emoji: "🎡", fav: false },
    { id: 7,  name: "Prestige",         url: "https://prestige-magic.com",             emoji: "📋", fav: false },
    { id: 9,  name: "API Test",         url: "https://apitest-pi-seven.vercel.app",    emoji: "🔌", fav: false },
    { id: 10, name: "Restaurant Magic", url: "https://restaurantmagic.vercel.app",     emoji: "🍽️", fav: false },
    { id: 12, name: "Coup d'État",      url: "https://cardgame-omega-six.vercel.app",  emoji: "🃏", fav: false },
    { id: 13, name: "Jump Runner",      url: "https://jumprunner.vercel.app",          emoji: "🕹️", fav: false },
    { id: 14, name: "Hopmanns Olive",   url: "https://olivespeisekarte.vercel.app",    emoji: "🫒", fav: false },
    { id: 15, name: "SMS Web App",      url: "https://smswebapp.vercel.app",           emoji: "💬", fav: false },
    { id: 16, name: "BoardVault",       url: "https://brettspielesapp.vercel.app",     emoji: "🎲", fav: false },
    { id: 17, name: "Coffee Magic",     url: "https://coffeemagic.vercel.app",         emoji: "☕", fav: false },
    { id: 18, name: "Arc",              url: "https://arc-liart-one.vercel.app",       emoji: "🌀", fav: false },
    { id: 19, name: "Sky Hopper",       url: "https://skyhopgame.com/38782",           emoji: "🦅", fav: false },
    { id: 20, name: "QR Genie",         url: "https://linkgen.ie/joernk",              emoji: "▣",  fav: false },
    { id: 21, name: "ParcWizard",       url: "https://parcwizard.vercel.app",          emoji: "🪄", fav: false },
  ];

  const DEFAULT_PINS = {
    "https://rpdashboard.vercel.app": "2026",
    "https://papierinventur.vercel.app": "2026",
  };

  const DEFAULT_GROUPS = [{ id: "g1", name: "Alle Apps", emoji: "🌐", appIds: [] }];

  const [apps, setApps] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_APPS); return s ? JSON.parse(s) : (localStorage.getItem(STORAGE_PROFILE) === "joern" ? DEFAULT_APPS_JOERN : DEFAULT_APPS_DOMINIK); } catch { return DEFAULT_APPS_DOMINIK; }
  });
  const [pins, setPins] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_PINS); return { ...DEFAULT_PINS, ...(s ? JSON.parse(s) : {}) }; } catch { return DEFAULT_PINS; }
  });
  const [themeName, setThemeName] = useState(() => {
    const saved = localStorage.getItem(STORAGE_THEME);
    if (saved) return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  const [lang, setLang] = useState(() => localStorage.getItem(STORAGE_LANG) || "de");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [form, setForm] = useState({ name: "", url: "", emoji: "" });
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [pwModal, setPwModal] = useState({ open: false, url: "", pin: "" });
  const [pinError, setPinError] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showBanner, setShowBanner] = useState(false);
  const [dragId, setDragId] = useState(null);
  const [cardSize, setCardSize] = useState(() => localStorage.getItem(STORAGE_SIZE) || "medium");
  const [vibro, setVibro] = useState(() => localStorage.getItem(STORAGE_VIBRO) !== "off");
  const [customBg, setCustomBg] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_CUSTBG); return s ? JSON.parse(s) : { enabled: false, color1: "#1a1a2e", color2: "#16213e" }; } catch { return { enabled: false, color1: "#1a1a2e", color2: "#16213e" }; }
  });
  const [isOffline, setIsOffline] = useState(() => !navigator.onLine);
  const [urlImportModal, setUrlImportModal] = useState({ open: false, apps: [] });
  const [qrModal, setQrModal] = useState({ open: false, url: "" });
  const [editApp, setEditApp] = useState({ appId: null, name: "", url: "", emoji: "" });
  const [viewMode, setViewMode] = useState(() => localStorage.getItem(STORAGE_VIEW) || "grid");
  const [animEnabled, setAnimEnabled] = useState(() => localStorage.getItem("wal_anim") !== "off");
  const [notes, setNotes] = useState(() => { try { const s = localStorage.getItem(STORAGE_NOTES); return s ? JSON.parse(s) : []; } catch { return []; } });
  const [noteModal, setNoteModal] = useState({ open: false, id: null, text: "" });
  const [helpOpen, setHelpOpen] = useState(false);
  const [globalPin, setGlobalPin] = useState(() => localStorage.getItem(STORAGE_GLOBAL_PIN) || "");
  const [globalUnlocked, setGlobalUnlocked] = useState(false);
  const [globalPinModal, setGlobalPinModal] = useState({ open: false, input: "", error: false, mode: "unlock" });
  const [globalPinSetup, setGlobalPinSetup] = useState({ step: 0, first: "", input: "" });
  const [pinTimeout, setPinTimeout] = useState(() => parseInt(localStorage.getItem(STORAGE_PIN_TIMEOUT) || "0"));
  const [backupDays, setBackupDays] = useState(() => parseInt(localStorage.getItem(STORAGE_BACKUP_DAYS) || "0"));
  const [showBackupBanner, setShowBackupBanner] = useState(false);
  const [appStats, setAppStats] = useState(() => { try { const s = localStorage.getItem(STORAGE_STATS); return s ? JSON.parse(s) : {}; } catch { return {}; } });
  const [groups, setGroups] = useState(() => { try { const s = localStorage.getItem(STORAGE_GROUPS); return s ? JSON.parse(s) : DEFAULT_GROUPS; } catch { return DEFAULT_GROUPS; } });
  const [activeGroup, setActiveGroup] = useState("all");
  const [groupModal, setGroupModal] = useState({ open: false, editId: null, name: "", emoji: "📁", appIds: [] });
  const [pinEditModal, setPinEditModal] = useState({ open: false, appId: null, appUrl: "", value: "", mode: "set" });
  const [settingsTab, setSettingsTab] = useState("general");
  const [notifBadges, setNotifBadges] = useState(() => { try { const s = localStorage.getItem("wal_badges"); return s ? JSON.parse(s) : {}; } catch { return {}; } });
  const [badgeEditModal, setBadgeEditModal] = useState({ open: false, appId: null, appUrl: "", value: "" });

  const lastUnlockedRef = useRef(null);
  const logoClickRef = useRef(0);
  const logoTimerRef = useRef(null);
  const importRef = useRef();
  const longPressTimer = useRef(null);
  const swipeTouchStartX = useRef(null);
  const swipeTouchStartY = useRef(null);

  const t = translations[lang] || translations.en;
  const theme = THEMES[themeName] || THEMES.dark;
  const isDark = ["dark", "blueDark", "greenDark"].includes(themeName);
  const DEFAULT_APPS = profile === "joern" ? DEFAULT_APPS_JOERN : DEFAULT_APPS_DOMINIK;

  // persist effects
  useEffect(() => { localStorage.setItem(STORAGE_APPS, JSON.stringify(apps)); }, [apps]);
  useEffect(() => { localStorage.setItem(STORAGE_PINS, JSON.stringify(pins)); }, [pins]);
  useEffect(() => { localStorage.setItem(STORAGE_THEME, themeName); }, [themeName]);
  useEffect(() => { localStorage.setItem(STORAGE_LANG, lang); }, [lang]);
  useEffect(() => { localStorage.setItem(STORAGE_SIZE, cardSize); }, [cardSize]);
  useEffect(() => { localStorage.setItem(STORAGE_VIBRO, vibro ? "on" : "off"); }, [vibro]);
  useEffect(() => { localStorage.setItem(STORAGE_CUSTBG, JSON.stringify(customBg)); }, [customBg]);
  useEffect(() => { localStorage.setItem(STORAGE_VIEW, viewMode); }, [viewMode]);
  useEffect(() => { localStorage.setItem(STORAGE_GLOBAL_PIN, globalPin); }, [globalPin]);
  useEffect(() => { localStorage.setItem(STORAGE_PIN_TIMEOUT, String(pinTimeout)); }, [pinTimeout]);
  useEffect(() => { localStorage.setItem(STORAGE_BACKUP_DAYS, String(backupDays)); }, [backupDays]);
  useEffect(() => { localStorage.setItem(STORAGE_GROUPS, JSON.stringify(groups)); }, [groups]);
  useEffect(() => { localStorage.setItem(STORAGE_NOTES, JSON.stringify(notes)); }, [notes]);
  useEffect(() => { localStorage.setItem(STORAGE_STATS, JSON.stringify(appStats)); }, [appStats]);
  useEffect(() => { localStorage.setItem("wal_badges", JSON.stringify(notifBadges)); }, [notifBadges]);
  useEffect(() => { localStorage.setItem("wal_anim", animEnabled ? "on" : "off"); }, [animEnabled]);
  useEffect(() => { if (profile) localStorage.setItem(STORAGE_PROFILE, profile); }, [profile]);

  useEffect(() => {
    const goOffline = () => setIsOffline(true);
    const goOnline = () => setIsOffline(false);
    window.addEventListener("offline", goOffline);
    window.addEventListener("online", goOnline);
    return () => { window.removeEventListener("offline", goOffline); window.removeEventListener("online", goOnline); };
  }, []);

  useEffect(() => {
    if (backupDays === 0) { setShowBackupBanner(false); return; }
    const last = parseInt(localStorage.getItem(STORAGE_LAST_EXPORT) || "0");
    if (!last) { setShowBackupBanner(true); return; }
    const daysSince = (Date.now() - last) / 86400000;
    if (daysSince >= backupDays) setShowBackupBanner(true);
  }, [backupDays]);

  useEffect(() => {
    if (!globalPin || pinTimeout === 0) return;
    const interval = setInterval(() => {
      if (lastUnlockedRef.current && globalUnlocked) {
        const elapsed = (Date.now() - lastUnlockedRef.current) / 60000;
        if (elapsed >= pinTimeout) {
          setGlobalUnlocked(false);
          setGlobalPinModal({ open: true, input: "", error: false, mode: "unlock" });
          lastUnlockedRef.current = null;
        }
      }
    }, 15000);
    return () => clearInterval(interval);
  }, [globalPin, pinTimeout, globalUnlocked]);

  useEffect(() => {
    const pin = localStorage.getItem(STORAGE_GLOBAL_PIN) || "";
    if (pin) setGlobalPinModal({ open: true, input: "", error: false, mode: "unlock" });
  }, []); // eslint-disable-line

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const raw = params.get("import");
      if (raw) {
        const decoded = JSON.parse(atob(raw));
        if (Array.isArray(decoded) && decoded.length > 0) {
          setUrlImportModal({ open: true, apps: decoded });
          window.history.replaceState({}, "", window.location.pathname);
        }
      }
    } catch {}
  }, []);

  useEffect(() => {
    const handler = e => { e.preventDefault(); setDeferredPrompt(e); setShowBanner(true); };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  function handleLogoClick() {
    logoClickRef.current += 1;
    if (logoTimerRef.current) clearTimeout(logoTimerRef.current);
    if (logoClickRef.current >= 5) {
      logoClickRef.current = 0;
      setProfileScreen(true);
    } else {
      logoTimerRef.current = setTimeout(() => { logoClickRef.current = 0; }, 1500);
    }
  }

  function toggleDark() {
    const pairs = { light: "dark", dark: "light", blue: "blueDark", blueDark: "blue", green: "greenDark", greenDark: "green" };
    setThemeName(pairs[themeName] || "dark");
  }

  function vibrate(pattern) {
    if (vibro && navigator.vibrate) navigator.vibrate(pattern || 30);
  }

  function addApp() {
    if (!form.name.trim() || !form.url.trim()) { setError("Name and URL required."); return; }
    let url = form.url.trim();
    if (!/^https?:\/\//i.test(url)) url = "https://" + url;
    try { new URL(url); } catch { setError("Invalid URL."); return; }
    setApps(prev => [...prev, { id: Date.now(), name: form.name.trim(), url, emoji: form.emoji.trim() || "🌐", fav: false }]);
    setForm({ name: "", url: "", emoji: "" });
    setError("");
  }

  function saveEditApp() {
    if (!editApp.name.trim() || !editApp.url.trim()) return;
    let url = editApp.url.trim();
    if (!/^https?:\/\//i.test(url)) url = "https://" + url;
    setApps(prev => prev.map(a => a.id === editApp.appId ? { ...a, name: editApp.name.trim(), url, emoji: editApp.emoji.trim() || "🌐" } : a));
    setEditApp({ appId: null, name: "", url: "", emoji: "" });
  }

  function deleteApp(id) { setApps(prev => prev.filter(a => a.id !== id)); }
  function toggleFav(id) { setApps(prev => prev.map(a => a.id === id ? { ...a, fav: !a.fav } : a)); }

  function handleAppClick(e, app) {
    vibrate(30);
    // clear badge
    if (notifBadges[app.id]) {
      setNotifBadges(prev => { const n = { ...prev }; delete n[app.id]; return n; });
    }
    // track stats
    setAppStats(prev => ({ ...prev, [app.id]: (prev[app.id] || 0) + 1 }));
    if (pins[app.url]) {
      e.preventDefault();
      setPwModal({ open: true, url: app.url, pin: "" });
      setPinError(false);
    }
  }

  function submitPin(digit) {
    const next = pwModal.pin + digit;
    if (next.length < 4) { setPwModal(m => ({ ...m, pin: next })); return; }
    if (next === pins[pwModal.url]) {
      const url = pwModal.url;
      setPwModal({ open: false, url: "", pin: "" });
      window.open(url, "_blank");
    } else {
      setPinError(true);
      setTimeout(() => { setPwModal(m => ({ ...m, pin: "" })); setPinError(false); }, 700);
    }
  }

  function submitGlobalPin(digit) {
    const next = globalPinModal.input + digit;
    if (next.length < 4) { setGlobalPinModal(m => ({ ...m, input: next })); return; }
    if (next === globalPin) {
      setGlobalUnlocked(true);
      lastUnlockedRef.current = Date.now();
      setGlobalPinModal({ open: false, input: "", error: false, mode: "unlock" });
    } else {
      setGlobalPinModal(m => ({ ...m, error: true, input: "" }));
      setTimeout(() => setGlobalPinModal(m => ({ ...m, error: false })), 700);
    }
  }

  function handleGlobalPinSetup(digit) {
    if (globalPinSetup.step === 0) {
      const next = globalPinSetup.input + digit;
      if (next.length < 4) { setGlobalPinSetup(s => ({ ...s, input: next })); return; }
      setGlobalPinSetup({ step: 1, first: next, input: "" });
    } else {
      const next = globalPinSetup.input + digit;
      if (next.length < 4) { setGlobalPinSetup(s => ({ ...s, input: next })); return; }
      if (next === globalPinSetup.first) {
        setGlobalPin(next);
        setGlobalUnlocked(true);
        lastUnlockedRef.current = Date.now();
        setGlobalPinSetup({ step: 0, first: "", input: "" });
        setGlobalPinModal({ open: false, input: "", error: false, mode: "unlock" });
      } else {
        setGlobalPinSetup({ step: 0, first: "", input: "" });
        setGlobalPinModal(m => ({ ...m, error: true }));
        setTimeout(() => setGlobalPinModal(m => ({ ...m, error: false })), 700);
      }
    }
  }

  function shareApp(app) {
    const payload = btoa(JSON.stringify([app]));
    const shareUrl = window.location.origin + window.location.pathname + "?import=" + payload;
    if (navigator.share) {
      navigator.share({ title: app.name, url: shareUrl });
    } else {
      navigator.clipboard.writeText(shareUrl).then(() => alert("🔗 Link kopiert!"));
    }
  }

  function generateQr() {
    try {
      const base64 = btoa(JSON.stringify(apps));
      const importUrl = window.location.origin + window.location.pathname + "?import=" + base64;
      const qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + encodeURIComponent(importUrl);
      setQrModal({ open: true, url: qrUrl });
    } catch {}
  }

  function exportApps() {
    localStorage.setItem(STORAGE_LAST_EXPORT, String(Date.now()));
    setShowBackupBanner(false);
    const blob = new Blob([JSON.stringify(apps, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "web-app-launcher.json";
    a.click();
  }

  function importApps(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => { try { const data = JSON.parse(ev.target.result); if (Array.isArray(data)) setApps(data); } catch {} };
    reader.readAsText(file);
    e.target.value = "";
  }

  function onDragStart(e, id) { setDragId(id); e.dataTransfer.effectAllowed = "move"; }
  function onDragOver(e, id) {
    e.preventDefault();
    if (id === dragId) return;
    setApps(prev => {
      const from = prev.findIndex(a => a.id === dragId);
      const to = prev.findIndex(a => a.id === id);
      if (from < 0 || to < 0) return prev;
      const next = [...prev];
      next.splice(to, 0, next.splice(from, 1)[0]);
      return next;
    });
  }
  function onDragEnd() { setDragId(null); }

  function handleSwipeTouchStart(e) {
    swipeTouchStartX.current = e.touches[0].clientX;
    swipeTouchStartY.current = e.touches[0].clientY;
  }
  function handleSwipeTouchEnd(e) {
    if (swipeTouchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - swipeTouchStartX.current;
    const dy = e.changedTouches[0].clientY - swipeTouchStartY.current;
    swipeTouchStartX.current = null;
    swipeTouchStartY.current = null;
    if (Math.abs(dx) < 60 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    const allGroupIds = ["all", ...groups.map(g => g.id)];
    const currentIdx = allGroupIds.indexOf(activeGroup);
    if (dx < 0 && currentIdx < allGroupIds.length - 1) { setActiveGroup(allGroupIds[currentIdx + 1]); vibrate(15); }
    else if (dx > 0 && currentIdx > 0) { setActiveGroup(allGroupIds[currentIdx - 1]); vibrate(15); }
  }

  async function installApp() {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setShowBanner(false);
  }

  const activeGroupObj = groups.find(g => g.id === activeGroup);
  const groupFiltered = activeGroup === "all" ? apps : apps.filter(a => activeGroupObj?.appIds?.includes(a.id));
  const filtered = groupFiltered.filter(a =>
    a.name.toLowerCase().includes(search.toLowerCase()) ||
    a.url.toLowerCase().includes(search.toLowerCase())
  );
  const favApps = filtered.filter(a => a.fav);
  const allApps = filtered.filter(a => !a.fav);

  // shared styles
  const s = {
    input: {
      width: "100%", boxSizing: "border-box", padding: "10px 14px",
      background: theme.inputBg, border: "1px solid " + theme.border,
      borderRadius: 12, color: theme.text, fontSize: 14, outline: "none",
      fontFamily: "inherit",
    },
    btn: {
      background: theme.primary, color: "#fff", border: "none",
      borderRadius: 12, padding: "11px 0", fontSize: 14, fontWeight: 700,
      cursor: "pointer", width: "100%",
    },
    iconBtn: {
      background: theme.surface, border: "1px solid " + theme.border,
      borderRadius: 10, width: 32, height: 32, display: "flex",
      alignItems: "center", justifyContent: "center", cursor: "pointer",
      fontSize: 14, color: theme.text, flexShrink: 0,
    },
    sectionLabel: {
      fontSize: 11, fontWeight: 800, letterSpacing: 1.2,
      color: theme.subtext, textTransform: "uppercase", marginBottom: 10,
    },
    row: {
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "13px 0", borderBottom: "1px solid " + theme.border,
    },
    rowLabel: { fontSize: 14, fontWeight: 600, color: theme.text },
    rowSub: { fontSize: 12, color: theme.subtext, marginTop: 2 },
    pill: (active) => ({
      padding: "5px 14px", borderRadius: 20, fontSize: 13, fontWeight: 700,
      cursor: "pointer", border: "1.5px solid " + (active ? theme.primary : theme.border),
      background: active ? theme.primarySoft : "transparent", color: active ? theme.primary : theme.subtext,
      transition: "all .15s",
    }),
  };

  const cardSizeMap = { small: { minW: 80, pad: "12px 6px", iconSize: 28, fontSize: 11 }, medium: { minW: 100, pad: "16px 8px", iconSize: 36, fontSize: 12 }, large: { minW: 120, pad: "20px 10px", iconSize: 44, fontSize: 13 } };
  const cs = cardSizeMap[cardSize] || cardSizeMap.medium;

  // ---- Profile screen ----
  if (profileScreen) return (
    <div style={{ position: "fixed", inset: 0, background: "linear-gradient(135deg,#0f0f17 0%,#1a1a2e 50%,#16213e 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 9999, padding: 32 }}>
      <div style={{ fontSize: 48, marginBottom: 16 }}>🚀</div>
      <div style={{ fontSize: 28, fontWeight: 900, color: "#e2e8f0", marginBottom: 8, letterSpacing: -0.5 }}>Web App Launcher</div>
      <div style={{ fontSize: 15, color: "rgba(226,232,240,0.5)", marginBottom: 48 }}>Wähle dein Profil</div>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "center" }}>
        {Object.entries(PROFILES).map(([key, p]) => (
          <button key={key} onClick={() => {
            localStorage.removeItem(STORAGE_APPS);
            setProfile(key);
            setApps(key === "joern" ? DEFAULT_APPS_JOERN : DEFAULT_APPS_DOMINIK);
            setProfileScreen(false);
          }} style={{ background: "rgba(255,255,255,0.07)", border: "2px solid rgba(255,255,255,0.15)", borderRadius: 28, padding: "32px 40px", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 14, minWidth: 140, transition: "all .2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(167,139,250,0.18)"; e.currentTarget.style.borderColor = "#a78bfa"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}>
            <span style={{ fontSize: 52 }}>{p.emoji}</span>
            <span style={{ fontSize: 20, fontWeight: 800, color: "#e2e8f0" }}>{p.name}</span>
          </button>
        ))}
      </div>
    </div>
  );

  // ---- PIN keypad helper ----
  const PinKeypad = ({ onDigit, onDelete, pinLen, hasError, label, sublabel }) => (
    <div style={{ textAlign: "center" }}>
      {label && <div style={{ fontSize: 20, fontWeight: 800, color: theme.text, marginBottom: 6 }}>{label}</div>}
      {sublabel && <div style={{ fontSize: 13, color: theme.subtext, marginBottom: 24 }}>{sublabel}</div>}
      <div style={{ display: "flex", justifyContent: "center", gap: 14, marginBottom: 28 }}>
        {[0,1,2,3].map(i => (
          <div key={i} style={{ width: 16, height: 16, borderRadius: "50%", background: i < pinLen ? (hasError ? "#dc2626" : theme.primary) : theme.border, transition: "background .15s" }} />
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 8 }}>
        {[1,2,3,4,5,6,7,8,9].map(n => (
          <button key={n} onClick={() => onDigit(String(n))} style={{ background: theme.inputBg, border: "1px solid " + theme.border, borderRadius: 14, padding: "14px 0", fontSize: 22, fontWeight: 600, color: theme.text, cursor: "pointer" }}>{n}</button>
        ))}
        <div />
        <button onClick={() => onDigit("0")} style={{ background: theme.inputBg, border: "1px solid " + theme.border, borderRadius: 14, padding: "14px 0", fontSize: 22, fontWeight: 600, color: theme.text, cursor: "pointer" }}>0</button>
        <button onClick={onDelete} style={{ background: theme.inputBg, border: "1px solid " + theme.border, borderRadius: 14, padding: "14px 0", fontSize: 18, color: theme.text, cursor: "pointer" }}>⌫</button>
      </div>
      {hasError && <div style={{ color: "#dc2626", fontSize: 13, marginTop: 8 }}>✗</div>}
    </div>
  );

  // ---- App card ----
  const AppCard = ({ app }) => {
    const badge = notifBadges[app.id];
    const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${new URL(app.url).hostname}`;
    const [imgOk, setImgOk] = useState(true);

    return (
      <div
        draggable
        onDragStart={e => onDragStart(e, app.id)}
        onDragOver={e => onDragOver(e, app.id)}
        onDragEnd={onDragEnd}
        style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: cs.pad, background: theme.surface, border: "1px solid " + theme.border, borderRadius: 20, cursor: "pointer", transition: "all .2s", minWidth: cs.minW, userSelect: "none", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", boxShadow: "0 2px 16px rgba(0,0,0,0.08)", opacity: dragId === app.id ? 0.5 : 1 }}
        onMouseEnter={e => { e.currentTarget.style.background = theme.cardHover; e.currentTarget.style.transform = "translateY(-3px)"; }}
        onMouseLeave={e => { e.currentTarget.style.background = theme.surface; e.currentTarget.style.transform = "none"; }}
      >
        {/* badge */}
        {badge > 0 && (
          <div style={{ position: "absolute", top: 6, right: 6, background: "#ef4444", color: "#fff", borderRadius: 10, minWidth: 18, height: 18, fontSize: 10, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 4px", zIndex: 2 }}>{badge > 99 ? "99+" : badge}</div>
        )}
        {/* fav star */}
        <button onClick={e => { e.preventDefault(); e.stopPropagation(); toggleFav(app.id); }} style={{ position: "absolute", top: 5, left: 5, background: "none", border: "none", fontSize: 13, cursor: "pointer", opacity: app.fav ? 1 : 0.3, padding: 2 }}>⭐</button>
        {/* share */}
        <button onClick={e => { e.preventDefault(); e.stopPropagation(); shareApp(app); }} style={{ position: "absolute", top: 5, right: badge > 0 ? 26 : 5, background: "none", border: "none", fontSize: 11, cursor: "pointer", opacity: 0.4, padding: 2, color: theme.text }}>🔗</button>
        {/* icon */}
        <a href={app.url} target="_blank" rel="noopener noreferrer" onClick={e => handleAppClick(e, app)} style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, width: "100%" }}>
          <div style={{ width: cs.iconSize, height: cs.iconSize, borderRadius: 12, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: theme.primarySoft, flexShrink: 0 }}>
            {imgOk ? (
              <img src={faviconUrl} alt="" width={cs.iconSize} height={cs.iconSize} style={{ objectFit: "contain" }} onError={() => setImgOk(false)} />
            ) : (
              <span style={{ fontSize: cs.iconSize * 0.65 }}>{app.emoji}</span>
            )}
          </div>
          <div style={{ fontSize: cs.fontSize, fontWeight: 700, color: theme.text, textAlign: "center", lineHeight: 1.3, wordBreak: "break-word", width: "100%" }}>{app.name}</div>
          {pins[app.url] && <div style={{ fontSize: 10, color: theme.subtext }}>🔒</div>}
        </a>
      </div>
    );
  };

  // ---- List row ----
  const AppListRow = ({ app }) => {
    const badge = notifBadges[app.id];
    const faviconUrl = `https://www.google.com/s2/favicons?sz=32&domain=${new URL(app.url).hostname}`;
    const [imgOk, setImgOk] = useState(true);
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", background: theme.surface, border: "1px solid " + theme.border, borderRadius: 14, backdropFilter: "blur(20px)", marginBottom: 6, position: "relative" }}
        draggable onDragStart={e => onDragStart(e, app.id)} onDragOver={e => onDragOver(e, app.id)} onDragEnd={onDragEnd}>
        <div style={{ width: 32, height: 32, borderRadius: 8, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: theme.primarySoft, flexShrink: 0 }}>
          {imgOk ? <img src={faviconUrl} alt="" width={32} height={32} style={{ objectFit: "contain" }} onError={() => setImgOk(false)} /> : <span style={{ fontSize: 20 }}>{app.emoji}</span>}
        </div>
        <a href={app.url} target="_blank" rel="noopener noreferrer" onClick={e => handleAppClick(e, app)} style={{ textDecoration: "none", flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: theme.text, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{app.name}</div>
          <div style={{ fontSize: 11, color: theme.subtext, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{app.url}</div>
        </a>
        {badge > 0 && <div style={{ background: "#ef4444", color: "#fff", borderRadius: 10, minWidth: 18, height: 18, fontSize: 10, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 4px" }}>{badge}</div>}
        <button onClick={() => toggleFav(app.id)} style={{ background: "none", border: "none", fontSize: 16, cursor: "pointer", opacity: app.fav ? 1 : 0.3 }}>⭐</button>
        {pins[app.url] && <span style={{ fontSize: 13 }}>🔒</span>}
      </div>
    );
  };

  // ---- Group modal ----
  const GroupModal = () => !groupModal.open ? null : (
    <div style={{ position: "fixed", inset: 0, zIndex: 500, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
      <div onClick={() => setGroupModal({ open: false, editId: null, name: "", emoji: "📁", appIds: [] })} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }} />
      <div style={{ position: "relative", zIndex: 1, background: theme.surface, backdropFilter: "blur(40px)", border: "1px solid " + theme.border, borderRadius: "28px 28px 0 0", padding: "24px 20px 40px", width: "100%", maxWidth: 500, maxHeight: "85vh", overflowY: "auto", boxShadow: "0 -4px 40px rgba(0,0,0,0.2)" }}>
        <div style={{ fontSize: 17, fontWeight: 800, color: theme.text, marginBottom: 16 }}>{groupModal.editId ? "✏️ Gruppe bearbeiten" : "➕ Neue Gruppe"}</div>
        <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
          <input style={{ ...s.input, width: 60, textAlign: "center", fontSize: 22 }} maxLength={2} value={groupModal.emoji} onChange={e => setGroupModal(m => ({ ...m, emoji: e.target.value }))} />
          <input style={{ ...s.input, flex: 1 }} placeholder="Gruppenname" value={groupModal.name} onChange={e => setGroupModal(m => ({ ...m, name: e.target.value }))} />
        </div>
        <div style={{ fontSize: 12, color: theme.subtext, fontWeight: 700, marginBottom: 8 }}>Apps auswählen</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, maxHeight: 240, overflowY: "auto", marginBottom: 16 }}>
          {apps.map(app => {
            const checked = groupModal.appIds.includes(app.id);
            return (
              <div key={app.id} onClick={() => setGroupModal(m => ({ ...m, appIds: checked ? m.appIds.filter(i => i !== app.id) : [...m.appIds, app.id] }))}
                style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: checked ? theme.primarySoft : theme.inputBg, border: "1.5px solid " + (checked ? theme.primary : theme.border), borderRadius: 12, cursor: "pointer" }}>
                <span style={{ fontSize: 20 }}>{app.emoji}</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: theme.text, flex: 1 }}>{app.name}</span>
                <span>{checked ? "✅" : "⬜"}</span>
              </div>
            );
          })}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => setGroupModal({ open: false, editId: null, name: "", emoji: "📁", appIds: [] })} style={{ ...s.btn, background: theme.inputBg, color: theme.text, flex: 1 }}>Abbrechen</button>
          <button style={{ ...s.btn, flex: 2 }} onClick={() => {
            if (!groupModal.name.trim()) return;
            if (groupModal.editId) {
              setGroups(prev => prev.map(g => g.id === groupModal.editId ? { ...g, name: groupModal.name, emoji: groupModal.emoji, appIds: groupModal.appIds } : g));
            } else {
              const newId = "g" + Date.now();
              setGroups(prev => [...prev, { id: newId, name: groupModal.name, emoji: groupModal.emoji, appIds: groupModal.appIds }]);
              setActiveGroup(newId);
            }
            setGroupModal({ open: false, editId: null, name: "", emoji: "📁", appIds: [] });
          }}>Speichern</button>
        </div>
      </div>
    </div>
  );

  // ---- Settings drawer ----
  const Drawer = () => !drawerOpen ? null : (
    <div style={{ position: "fixed", inset: 0, zIndex: 400, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
      <div onClick={() => setDrawerOpen(false)} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(10px)" }} />
      <div style={{ position: "relative", zIndex: 1, background: isDark ? "rgba(20,20,35,0.97)" : "rgba(245,245,255,0.97)", backdropFilter: "blur(40px)", border: "1px solid " + theme.border, borderRadius: "28px 28px 0 0", width: "100%", maxWidth: 540, maxHeight: "90vh", overflowY: "auto", boxShadow: "0 -8px 48px rgba(0,0,0,0.3)", paddingBottom: 40 }}>
        {/* handle */}
        <div style={{ display: "flex", justifyContent: "center", paddingTop: 12, paddingBottom: 4 }}>
          <div style={{ width: 40, height: 4, borderRadius: 2, background: theme.border }} />
        </div>
        {/* header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px 8px" }}>
          <div style={{ fontSize: 18, fontWeight: 900, color: theme.text }}>⚙️ {t.settings}</div>
          <button onClick={() => setDrawerOpen(false)} style={{ background: theme.surface, border: "1px solid " + theme.border, borderRadius: 10, padding: "6px 14px", cursor: "pointer", color: theme.text, fontWeight: 700, fontSize: 13 }}>✕</button>
        </div>
        {/* tabs */}
        <div style={{ display: "flex", gap: 6, padding: "0 20px 16px", overflowX: "auto" }}>
          {[["general","🛠️ Allgemein"],["apps","📱 Apps"],["security","🔐 Sicherheit"],["data","💾 Daten"],["notif","🔔 Badges"]].map(([tab, label]) => (
            <button key={tab} onClick={() => setSettingsTab(tab)} style={{ ...s.pill(settingsTab === tab), whiteSpace: "nowrap", fontSize: 12 }}>{label}</button>
          ))}
        </div>

        <div style={{ padding: "0 20px" }}>
          {/* GENERAL TAB */}
          {settingsTab === "general" && <>
            {/* Theme */}
            <div style={s.sectionLabel}>{t.theme}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
              {Object.entries(THEMES).map(([key, th]) => (
                <button key={key} onClick={() => setThemeName(key)} style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 12px", borderRadius: 12, border: "1.5px solid " + (themeName === key ? theme.primary : theme.border), background: themeName === key ? theme.primarySoft : theme.inputBg, cursor: "pointer", fontSize: 12, fontWeight: 600, color: theme.text }}>
                  <div style={{ width: 14, height: 14, borderRadius: "50%", background: th.dot }} />{th.label}
                </button>
              ))}
            </div>
            {/* Card size */}
            <div style={s.sectionLabel}>{t.cardSize}</div>
            <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
              {[["small", t.small], ["medium", t.medium], ["large", t.large]].map(([k, label]) => (
                <button key={k} onClick={() => setCardSize(k)} style={s.pill(cardSize === k)}>{label}</button>
              ))}
            </div>
            {/* View mode */}
            <div style={{ ...s.row, borderBottom: "none" }}>
              <div><div style={s.rowLabel}>🔲 Ansicht</div></div>
              <div style={{ display: "flex", gap: 6 }}>
                {[["grid","🔲"],["list","📊"]].map(([v, icon]) => (
                  <button key={v} onClick={() => setViewMode(v)} style={{ ...s.iconBtn, background: viewMode === v ? theme.primarySoft : theme.inputBg, border: "1.5px solid " + (viewMode === v ? theme.primary : theme.border), color: theme.primary, fontSize: 16 }}>{icon}</button>
                ))}
              </div>
            </div>
            <div style={s.row}>
              <div><div style={s.rowLabel}>{t.language}</div></div>
              <div style={{ display: "flex", gap: 6 }}>
                {[["de","🇩🇪"],["en","🇬🇧"]].map(([l, flag]) => (
                  <button key={l} onClick={() => setLang(l)} style={{ ...s.iconBtn, background: lang === l ? theme.primarySoft : theme.inputBg, border: "1.5px solid " + (lang === l ? theme.primary : theme.border), fontSize: 16 }}>{flag}</button>
                ))}
              </div>
            </div>
            <div style={s.row}>
              <div><div style={s.rowLabel}>{t.vibration}</div></div>
              <button onClick={() => setVibro(v => !v)} style={{ ...s.iconBtn, background: vibro ? theme.primarySoft : theme.inputBg, border: "1.5px solid " + (vibro ? theme.primary : theme.border), color: vibro ? theme.primary : theme.subtext, width: "auto", padding: "0 12px", fontSize: 12, fontWeight: 700 }}>{vibro ? t.vibrationOn : t.vibrationOff}</button>
            </div>
            <div style={s.row}>
              <div><div style={s.rowLabel}>{t.animations}</div></div>
              <button onClick={() => setAnimEnabled(v => !v)} style={{ ...s.iconBtn, background: animEnabled ? theme.primarySoft : theme.inputBg, border: "1.5px solid " + (animEnabled ? theme.primary : theme.border), color: animEnabled ? theme.primary : theme.subtext, width: "auto", padding: "0 12px", fontSize: 12, fontWeight: 700 }}>{animEnabled ? t.animationsOn : t.animationsOff}</button>
            </div>
            {/* Custom BG */}
            <div style={{ ...s.row, flexDirection: "column", alignItems: "flex-start", gap: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                <div style={s.rowLabel}>{t.customBg}</div>
                <button onClick={() => setCustomBg(b => ({ ...b, enabled: !b.enabled }))} style={{ ...s.iconBtn, background: customBg.enabled ? theme.primarySoft : theme.inputBg, border: "1.5px solid " + (customBg.enabled ? theme.primary : theme.border), color: customBg.enabled ? theme.primary : theme.subtext, width: "auto", padding: "0 12px", fontSize: 12, fontWeight: 700 }}>{customBg.enabled ? "An" : "Aus"}</button>
              </div>
              {customBg.enabled && (
                <div style={{ display: "flex", gap: 12 }}>
                  <label style={{ fontSize: 12, color: theme.subtext }}>{t.customBgColor1} <input type="color" value={customBg.color1} onChange={e => setCustomBg(b => ({ ...b, color1: e.target.value }))} style={{ marginLeft: 6, cursor: "pointer" }} /></label>
                  <label style={{ fontSize: 12, color: theme.subtext }}>{t.customBgColor2} <input type="color" value={customBg.color2} onChange={e => setCustomBg(b => ({ ...b, color2: e.target.value }))} style={{ marginLeft: 6, cursor: "pointer" }} /></label>
                </div>
              )}
            </div>
            {/* Backup reminder */}
            <div style={{ ...s.row, borderBottom: "none" }}>
              <div><div style={s.rowLabel}>{t.backupReminder}</div><div style={s.rowSub}>{t.backupReminderDesc}</div></div>
              <select value={backupDays} onChange={e => setBackupDays(Number(e.target.value))} style={{ background: theme.inputBg, border: "1px solid " + theme.border, borderRadius: 10, color: theme.text, padding: "6px 10px", fontSize: 12, cursor: "pointer" }}>
                {[0,7,14,30].map((d,i) => <option key={d} value={d}>{t.backupReminderOptions[i]}</option>)}
              </select>
            </div>
            <div style={{ marginTop: 8 }}>
              <button onClick={() => setHelpOpen(true)} style={{ ...s.btn, background: theme.surface, color: theme.text, border: "1px solid " + theme.border }}>❓ {t.helpTitle}</button>
            </div>
          </>}

          {/* APPS TAB */}
          {settingsTab === "apps" && <>
            <div style={s.sectionLabel}>{t.addNewApp}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
              <input style={s.input} placeholder={t.namePlaceholder} value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
              <input style={s.input} placeholder={t.urlPlaceholder} value={form.url} onChange={e => setForm(f => ({ ...f, url: e.target.value }))} />
              <input style={s.input} placeholder={t.emojiPlaceholder} value={form.emoji} onChange={e => setForm(f => ({ ...f, emoji: e.target.value }))} maxLength={2} />
              {error && <div style={{ color: "#ef4444", fontSize: 12 }}>{error}</div>}
              <button style={s.btn} onClick={addApp}>{t.addBtn}</button>
            </div>
            <div style={s.sectionLabel}>{t.manageApps}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, maxHeight: 340, overflowY: "auto" }}>
              {apps.map(app => (
                <div key={app.id}>
                  {editApp.appId === app.id ? (
                    <div style={{ background: theme.primarySoft, border: "1px solid " + theme.primary, borderRadius: 14, padding: 12, display: "flex", flexDirection: "column", gap: 8 }}>
                      <input style={s.input} value={editApp.name} onChange={e => setEditApp(ea => ({ ...ea, name: e.target.value }))} />
                      <input style={s.input} value={editApp.url} onChange={e => setEditApp(ea => ({ ...ea, url: e.target.value }))} />
                      <input style={s.input} value={editApp.emoji} onChange={e => setEditApp(ea => ({ ...ea, emoji: e.target.value }))} maxLength={2} />
                      <div style={{ display: "flex", gap: 6 }}>
                        <button onClick={saveEditApp} style={{ ...s.btn, flex: 2 }}>💾 Speichern</button>
                        <button onClick={() => setEditApp({ appId: null, name: "", url: "", emoji: "" })} style={{ ...s.btn, flex: 1, background: theme.inputBg, color: theme.text, border: "1px solid " + theme.border }}>✕</button>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", background: theme.inputBg, border: "1px solid " + theme.border, borderRadius: 12 }}>
                      <span style={{ fontSize: 18 }}>{app.emoji}</span>
                      <span style={{ flex: 1, fontSize: 13, fontWeight: 600, color: theme.text, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{app.name}</span>
                      <button onClick={() => setPinEditModal({ open: true, appId: app.id, appUrl: app.url, value: "", mode: pins[app.url] ? "remove" : "set" })} style={{ ...s.iconBtn, fontSize: 13 }}>{pins[app.url] ? "🔒" : "🔓"}</button>
                      <button onClick={() => setEditApp({ appId: app.id, name: app.name, url: app.url, emoji: app.emoji })} style={{ ...s.iconBtn, fontSize: 13 }}>✏️</button>
                      <button onClick={() => deleteApp(app.id)} style={{ ...s.iconBtn, fontSize: 13 }}>🗑️</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 16 }}>
              <button onClick={() => { if (window.confirm(t.resetConfirm)) { setApps(DEFAULT_APPS); } }} style={{ ...s.btn, background: theme.inputBg, color: theme.text, border: "1px solid " + theme.border }}>{t.resetApps}</button>
            </div>
          </>}

          {/* SECURITY TAB */}
          {settingsTab === "security" && <>
            <div style={s.sectionLabel}>{t.globalPin}</div>
            <div style={{ background: theme.inputBg, border: "1px solid " + theme.border, borderRadius: 16, padding: 16, marginBottom: 16 }}>
              <div style={s.rowLabel}>{t.globalPinDesc}</div>
              {globalPin && <div style={{ fontSize: 12, color: theme.primary, marginTop: 4 }}>✅ {t.globalPinActive}</div>}
              <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
                <button onClick={() => { setGlobalPinSetup({ step: 0, first: "", input: "" }); setGlobalPinModal({ open: true, input: "", error: false, mode: "setup" }); }} style={{ ...s.btn, flex: 2 }}>{globalPin ? "🔐 PIN ändern" : t.globalPinSet}</button>
                {globalPin && <button onClick={() => { if (window.confirm("PIN wirklich entfernen?")) { setGlobalPin(""); setGlobalUnlocked(false); } }} style={{ ...s.btn, flex: 1, background: "#dc2626" }}>{t.globalPinRemove}</button>}
              </div>
            </div>
            <div style={{ ...s.row, borderBottom: "none" }}>
              <div><div style={s.rowLabel}>{t.pinTimeout}</div><div style={s.rowSub}>{t.pinTimeoutDesc}</div></div>
              <select value={pinTimeout} onChange={e => setPinTimeout(Number(e.target.value))} style={{ background: theme.inputBg, border: "1px solid " + theme.border, borderRadius: 10, color: theme.text, padding: "6px 10px", fontSize: 12 }}>
                {[0,1,5,15,30].map((m,i) => <option key={m} value={m}>{t.pinTimeoutOptions[i]}</option>)}
              </select>
            </div>
          </>}

          {/* DATA TAB */}
          {settingsTab === "data" && <>
            <div style={s.sectionLabel}>{t.importExport}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
              <button style={s.btn} onClick={exportApps}>📤 {t.exportBtn}</button>
              <button style={{ ...s.btn, background: theme.inputBg, color: theme.text, border: "1px solid " + theme.border }} onClick={() => importRef.current?.click()}>📥 {t.importBtn}</button>
              <input ref={importRef} type="file" accept=".json" style={{ display: "none" }} onChange={importApps} />
              <button style={{ ...s.btn, background: theme.inputBg, color: theme.text, border: "1px solid " + theme.border }} onClick={generateQr}>📷 {t.qrBtn}</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <button onClick={() => {
                if (window.confirm(t.clearCacheConfirm)) {
                  localStorage.clear();
                  localStorage.setItem(STORAGE_GLOBAL_PIN, "");
                  window.location.reload();
                }
              }} style={{ ...s.btn, background: "#dc2626" }}>🗑️ {t.clearCache}</button>
            </div>
            {/* Stats */}
            <div style={{ marginTop: 20 }}>
              <div style={s.sectionLabel}>{t.stats}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, maxHeight: 200, overflowY: "auto" }}>
                {Object.keys(appStats).length === 0 ? (
                  <div style={{ color: theme.subtext, fontSize: 13, padding: 8 }}>{t.statsEmpty}</div>
                ) : apps.filter(a => appStats[a.id]).sort((a,b) => (appStats[b.id]||0)-(appStats[a.id]||0)).map(app => (
                  <div key={app.id} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", background: theme.inputBg, border: "1px solid " + theme.border, borderRadius: 10 }}>
                    <span>{app.emoji}</span>
                    <span style={{ flex: 1, fontSize: 13, color: theme.text }}>{app.name}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: theme.primary }}>{appStats[app.id]} {t.statsOpens}</span>
                  </div>
                ))}
              </div>
              {Object.keys(appStats).length > 0 && (
                <button onClick={() => { if (window.confirm(t.statsResetConfirm)) { setAppStats({}); localStorage.removeItem(STORAGE_STATS); } }} style={{ ...s.btn, background: theme.inputBg, color: theme.text, border: "1px solid " + theme.border, marginTop: 8 }}>{t.statsReset}</button>
              )}
            </div>
          </>}

          {/* BADGES TAB */}
          {settingsTab === "notif" && <>
            <div style={s.sectionLabel}>🔔 Notification Badges</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {apps.map(app => (
                <div key={app.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: theme.inputBg, border: "1px solid " + theme.border, borderRadius: 12 }}>
                  <span style={{ fontSize: 20 }}>{app.emoji}</span>
                  <span style={{ flex: 1, fontSize: 13, fontWeight: 600, color: theme.text }}>{app.name}</span>
                  {notifBadges[app.id] > 0 && <span style={{ background: "#ef4444", color: "#fff", borderRadius: 10, minWidth: 20, height: 20, fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 5px" }}>{notifBadges[app.id]}</span>}
                  <button onClick={() => setBadgeEditModal({ open: true, appId: app.id, appUrl: app.url, value: notifBadges[app.id] ? String(notifBadges[app.id]) : "" })} style={{ ...s.iconBtn, fontSize: 13 }}>✏️</button>
                  {notifBadges[app.id] && <button onClick={() => setNotifBadges(prev => { const n = { ...prev }; delete n[app.id]; return n; })} style={{ ...s.iconBtn, fontSize: 13 }}>✕</button>}
                </div>
              ))}
            </div>
          </>}
        </div>
      </div>
    </div>
  );

  const bgStyle = customBg.enabled
    ? { background: `linear-gradient(135deg, ${customBg.color1} 0%, ${customBg.color2} 100%)` }
    : { background: theme.bg };

  return (
    <div style={{ minHeight: "100vh", ...bgStyle, fontFamily: "'Inter','SF Pro Display',-apple-system,sans-serif", position: "relative", overflowX: "hidden" }}>
      <BlobBg isDark={isDark} enabled={animEnabled && !customBg.enabled} />
      <style>{`* { box-sizing: border-box; } ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: transparent; } ::-webkit-scrollbar-thumb { background: ${theme.border}; border-radius: 2px; } input, select, button { font-family: inherit; }`}</style>

      {/* Offline banner */}
      {isOffline && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 9000, background: "#dc2626", color: "#fff", padding: "10px 20px", textAlign: "center", fontSize: 13, fontWeight: 700 }}>
          📡 {t.offlineTitle} — {t.offlineDesc}
        </div>
      )}

      {/* Backup banner */}
      {showBackupBanner && (
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 8500, background: theme.primary, color: "#fff", padding: "14px 20px", display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <div style={{ flex: 1 }}><div style={{ fontWeight: 800, fontSize: 14 }}>💾 {t.backupBannerTitle}</div><div style={{ fontSize: 12, opacity: 0.85 }}>{t.backupBannerDesc}</div></div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={exportApps} style={{ background: "#fff", color: theme.primary, border: "none", borderRadius: 10, padding: "8px 14px", fontSize: 13, fontWeight: 800, cursor: "pointer" }}>{t.backupBannerBtn}</button>
            <button onClick={() => setShowBackupBanner(false)} style={{ background: "rgba(255,255,255,0.2)", color: "#fff", border: "1px solid rgba(255,255,255,0.4)", borderRadius: 10, padding: "8px 14px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>{t.backupBannerDismiss}</button>
          </div>
        </div>
      )}

      {/* PWA install banner */}
      {showBanner && (
        <div style={{ position: "fixed", bottom: showBackupBanner ? 80 : 0, left: 0, right: 0, zIndex: 8400, background: isDark ? "rgba(30,30,50,0.97)" : "rgba(255,255,255,0.97)", backdropFilter: "blur(20px)", borderTop: "1px solid " + theme.border, padding: "16px 20px", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ flex: 1 }}><div style={{ fontWeight: 800, fontSize: 14, color: theme.text }}>📲 {t.addToHome}</div><div style={{ fontSize: 12, color: theme.subtext }}>{t.addToHomeDesc}</div></div>
          <button onClick={installApp} style={{ background: theme.primary, color: "#fff", border: "none", borderRadius: 10, padding: "8px 14px", fontSize: 13, fontWeight: 800, cursor: "pointer" }}>{t.addToHomeBtn}</button>
          <button onClick={() => setShowBanner(false)} style={{ background: "none", border: "none", color: theme.subtext, cursor: "pointer", fontSize: 13 }}>{t.addToHomeDismiss}</button>
        </div>
      )}

      {/* HEADER */}
      <div style={{ position: "sticky", top: 0, zIndex: 200, background: theme.headerBg, backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderBottom: "1px solid " + theme.border, padding: "12px 16px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", display: "flex", alignItems: "center", gap: 10 }}>
          <span onClick={handleLogoClick} style={{ fontSize: 22, cursor: "pointer", userSelect: "none" }}>🚀</span>
          <span onClick={handleLogoClick} style={{ fontSize: 16, fontWeight: 900, color: theme.headerText, letterSpacing: -0.5, cursor: "pointer", userSelect: "none", flex: 1 }}>
            {t.title} <span style={{ fontSize: 10, fontWeight: 500, opacity: 0.5 }}>{t.version}</span>
          </span>
          <button onClick={() => setViewMode(v => v === "grid" ? "list" : "grid")} style={{ ...s.iconBtn, fontSize: 15 }}>{viewMode === "grid" ? "📊" : "🔲"}</button>
          <button onClick={() => setLang(l => l === "de" ? "en" : "de")} style={{ ...s.iconBtn, fontSize: 12, fontWeight: 800 }}>{lang === "de" ? "EN" : "DE"}</button>
          <button onClick={toggleDark} style={{ ...s.iconBtn, fontSize: 15 }}>{isDark ? "☀️" : "🌙"}</button>
          <button onClick={() => { setDrawerOpen(true); setSettingsTab("general"); }} style={{ ...s.iconBtn, fontSize: 15 }}>⚙️</button>
        </div>
      </div>

      {/* MAIN */}
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "16px 14px 120px", position: "relative", zIndex: 1 }}>
        {/* Search */}
        <div style={{ marginBottom: 14 }}>
          <input style={{ ...s.input, paddingLeft: 38, borderRadius: 16 }} placeholder={t.search} value={search} onChange={e => setSearch(e.target.value)} />
        </div>

        {/* Group tabs */}
        <div style={{ display: "flex", gap: 6, marginBottom: 16, overflowX: "auto", paddingBottom: 4 }} onTouchStart={handleSwipeTouchStart} onTouchEnd={handleSwipeTouchEnd}>
          <button onClick={() => setActiveGroup("all")} style={s.pill(activeGroup === "all")}>🌐 Alle</button>
          {groups.map(g => (
            <button key={g.id} onClick={() => setActiveGroup(g.id)} style={s.pill(activeGroup === g.id)}
              onDoubleClick={() => setGroupModal({ open: true, editId: g.id, name: g.name, emoji: g.emoji, appIds: g.appIds || [] })}>
              {g.emoji} {g.name}
            </button>
          ))}
          <button onClick={() => setGroupModal({ open: false, editId: null, name: "", emoji: "📁", appIds: [] }, setGroupModal({ open: true, editId: null, name: "", emoji: "📁", appIds: [] }))} style={{ ...s.pill(false), flexShrink: 0 }}>➕</button>
        </div>

        {/* Favorites */}
        {favApps.length > 0 && (
          <div style={{ marginBottom: 20 }}>
            <div style={s.sectionLabel}>⭐ {t.favorites}</div>
            {viewMode === "grid" ? (
              <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fill, minmax(${cs.minW}px, 1fr))`, gap: 10 }}>
                {favApps.map(app => <AppCard key={app.id} app={app} />)}
              </div>
            ) : (
              <div>{favApps.map(app => <AppListRow key={app.id} app={app} />)}</div>
            )}
          </div>
        )}

        {/* All apps */}
        {allApps.length > 0 && (
          <div>
            <div style={s.sectionLabel}>📱 {t.myApps}</div>
            {viewMode === "grid" ? (
              <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fill, minmax(${cs.minW}px, 1fr))`, gap: 10 }}>
                {allApps.map(app => <AppCard key={app.id} app={app} />)}
              </div>
            ) : (
              <div>{allApps.map(app => <AppListRow key={app.id} app={app} />)}</div>
            )}
          </div>
        )}

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 20px", color: theme.subtext }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>📭</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: theme.text, marginBottom: 8 }}>{t.emptyTitle}</div>
            <div style={{ fontSize: 14 }}>{t.emptyDesc}</div>
          </div>
        )}

        {/* Notes */}
        <div style={{ marginTop: 24 }}>
          <div style={s.sectionLabel}>📝 Notizen</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {notes.map(note => (
              <div key={note.id} style={{ background: theme.surface, border: "1px solid " + theme.border, borderRadius: 14, padding: "12px 14px", display: "flex", alignItems: "flex-start", gap: 10, backdropFilter: "blur(20px)" }}>
                <div style={{ flex: 1, fontSize: 13, color: theme.text, whiteSpace: "pre-wrap", lineHeight: 1.5 }}>{note.text}</div>
                <div style={{ display: "flex", gap: 4, flexShrink: 0 }}>
                  <button onClick={() => setNoteModal({ open: true, id: note.id, text: note.text })} style={{ ...s.iconBtn, fontSize: 12 }}>✏️</button>
                  <button onClick={() => setNotes(prev => prev.filter(n => n.id !== note.id))} style={{ ...s.iconBtn, fontSize: 12 }}>🗑️</button>
                </div>
              </div>
            ))}
            <button onClick={() => setNoteModal({ open: true, id: null, text: "" })} style={{ ...s.btn, background: theme.surface, color: theme.text, border: "1px solid " + theme.border }}>{t.noteAdd}</button>
          </div>
        </div>
      </div>

      {/* Modals */}
      <Drawer />
      <GroupModal />

      {/* Help modal */}
      {helpOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }} onClick={() => setHelpOpen(false)}>
          <div style={{ background: isDark ? "rgba(20,20,35,0.98)" : "rgba(250,250,255,0.98)", backdropFilter: "blur(20px)", border: "1px solid " + theme.border, borderRadius: 20, padding: 24, maxWidth: 480, width: "100%", maxHeight: "80vh", overflowY: "auto" }} onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
              <h2 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: theme.text }}>❓ {t.helpTitle}</h2>
              <button onClick={() => setHelpOpen(false)} style={{ background: theme.surface, border: "1px solid " + theme.border, borderRadius: 10, padding: "6px 14px", cursor: "pointer", color: theme.text, fontWeight: 700 }}>{t.helpClose}</button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {t.helpItems.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 12, background: theme.surface, border: "1px solid " + theme.border, borderRadius: 12, padding: "10px 12px" }}>
                  <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 13, color: theme.text }}>{item.title}</div>
                    <div style={{ fontSize: 12, color: theme.subtext, lineHeight: 1.5, marginTop: 2 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Global PIN modal */}
      {globalPinModal.open && (
        <div style={{ position: "fixed", inset: 0, zIndex: 8000, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, background: "rgba(0,0,0,0.8)", backdropFilter: "blur(16px)" }}>
          <div style={{ background: isDark ? "rgba(20,20,35,0.97)" : "rgba(250,250,255,0.97)", border: "1px solid " + theme.border, borderRadius: 28, padding: "32px 24px", maxWidth: 340, width: "100%", boxShadow: "0 8px 48px rgba(0,0,0,0.4)" }}>
            <div style={{ fontSize: 52, textAlign: "center", marginBottom: 12 }}>{globalPinModal.mode === "setup" ? "🔐" : "🔒"}</div>
            <PinKeypad
              label={globalPinModal.mode === "setup" ? (globalPinSetup.step === 0 ? t.globalPinNew : t.globalPinConfirm) : t.globalPinEnter}
              sublabel="Web App Launcher"
              pinLen={globalPinModal.mode === "setup" ? globalPinSetup.input.length : globalPinModal.input.length}
              hasError={globalPinModal.error}
              onDigit={d => globalPinModal.mode === "setup" ? handleGlobalPinSetup(d) : submitGlobalPin(d)}
              onDelete={() => globalPinModal.mode === "setup"
                ? setGlobalPinSetup(s => ({ ...s, input: s.input.slice(0,-1) }))
                : setGlobalPinModal(m => ({ ...m, input: m.input.slice(0,-1) }))}
            />
          </div>
        </div>
      )}

      {/* App PIN modal */}
      {pwModal.open && (
        <div style={{ position: "fixed", inset: 0, zIndex: 7000, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, background: "rgba(0,0,0,0.75)", backdropFilter: "blur(12px)" }}>
          <div style={{ background: isDark ? "rgba(20,20,35,0.97)" : "rgba(250,250,255,0.97)", border: "1px solid " + theme.border, borderRadius: 28, padding: "32px 24px", maxWidth: 320, width: "100%", boxShadow: "0 8px 48px rgba(0,0,0,0.4)" }}>
            <div style={{ fontSize: 44, textAlign: "center", marginBottom: 10 }}>🔒</div>
            <PinKeypad
              label={t.pinEnter}
              sublabel={apps.find(a => a.url === pwModal.url)?.name || ""}
              pinLen={pwModal.pin.length}
              hasError={pinError}
              onDigit={submitPin}
              onDelete={() => setPwModal(m => ({ ...m, pin: m.pin.slice(0,-1) }))}
            />
            <button onClick={() => setPwModal({ open: false, url: "", pin: "" })} style={{ ...s.btn, background: theme.inputBg, color: theme.text, border: "1px solid " + theme.border, marginTop: 10 }}>✕ Abbrechen</button>
          </div>
        </div>
      )}

      {/* PIN set/remove modal */}
      {pinEditModal.open && (
        <div style={{ position: "fixed", inset: 0, zIndex: 6000, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(10px)" }}>
          <div style={{ background: isDark ? "rgba(20,20,35,0.97)" : "rgba(250,250,255,0.97)", border: "1px solid " + theme.border, borderRadius: 24, padding: 28, maxWidth: 320, width: "100%" }}>
            <div style={{ fontSize: 20, fontWeight: 800, color: theme.text, marginBottom: 16 }}>{pinEditModal.mode === "set" ? t.pinSet : t.pinRemove}</div>
            {pinEditModal.mode === "set" ? (
              <>
                <PinKeypad
                  label={t.pinPlaceholder}
                  pinLen={pinEditModal.value.length}
                  hasError={false}
                  onDigit={d => {
                    const next = pinEditModal.value + d;
                    if (next.length <= 4) setPinEditModal(m => ({ ...m, value: next }));
                    if (next.length === 4) {
                      setPins(prev => ({ ...prev, [pinEditModal.appUrl]: next }));
                      setPinEditModal({ open: false, appId: null, appUrl: "", value: "", mode: "set" });
                    }
                  }}
                  onDelete={() => setPinEditModal(m => ({ ...m, value: m.value.slice(0,-1) }))}
                />
              </>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ fontSize: 14, color: theme.subtext }}>PIN für diese App wirklich entfernen?</div>
                <button onClick={() => {
                  setPins(prev => { const n = { ...prev }; delete n[pinEditModal.appUrl]; return n; });
                  setPinEditModal({ open: false, appId: null, appUrl: "", value: "", mode: "set" });
                }} style={{ ...s.btn, background: "#dc2626" }}>🗑️ {t.pinRemove}</button>
              </div>
            )}
            <button onClick={() => setPinEditModal({ open: false, appId: null, appUrl: "", value: "", mode: "set" })} style={{ ...s.btn, background: theme.inputBg, color: theme.text, border: "1px solid " + theme.border, marginTop: 10 }}>✕ Abbrechen</button>
          </div>
        </div>
      )}

      {/* Badge edit modal */}
      {badgeEditModal.open && (
        <div style={{ position: "fixed", inset: 0, zIndex: 6000, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(10px)" }}>
          <div style={{ background: isDark ? "rgba(20,20,35,0.97)" : "rgba(250,250,255,0.97)", border: "1px solid " + theme.border, borderRadius: 24, padding: 28, maxWidth: 300, width: "100%" }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: theme.text, marginBottom: 16 }}>🔔 Badge setzen</div>
            <input type="number" min={0} max={999} style={s.input} placeholder="Zahl eingeben..." value={badgeEditModal.value} onChange={e => setBadgeEditModal(m => ({ ...m, value: e.target.value }))} />
            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              <button onClick={() => {
                const num = parseInt(badgeEditModal.value);
                if (!isNaN(num) && num > 0) setNotifBadges(prev => ({ ...prev, [badgeEditModal.appId]: num }));
                else { setNotifBadges(prev => { const n = { ...prev }; delete n[badgeEditModal.appId]; return n; }); }
                setBadgeEditModal({ open: false, appId: null, appUrl: "", value: "" });
              }} style={{ ...s.btn, flex: 2 }}>💾 Speichern</button>
              <button onClick={() => setBadgeEditModal({ open: false, appId: null, appUrl: "", value: "" })} style={{ ...s.btn, flex: 1, background: theme.inputBg, color: theme.text, border: "1px solid " + theme.border }}>✕</button>
            </div>
          </div>
        </div>
      )}

      {/* Note modal */}
      {noteModal.open && (
        <div style={{ position: "fixed", inset: 0, zIndex: 5000, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(10px)" }}>
          <div style={{ background: isDark ? "rgba(20,20,35,0.97)" : "rgba(250,250,255,0.97)", border: "1px solid " + theme.border, borderRadius: 24, padding: 24, maxWidth: 400, width: "100%" }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: theme.text, marginBottom: 12 }}>📝 {t.noteTitle}</div>
            <textarea style={{ ...s.input, minHeight: 100, resize: "vertical" }} placeholder={t.notePlaceholder} value={noteModal.text} onChange={e => setNoteModal(m => ({ ...m, text: e.target.value }))} />
            <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
              <button onClick={() => {
                if (!noteModal.text.trim()) return;
                if (noteModal.id) {
                  setNotes(prev => prev.map(n => n.id === noteModal.id ? { ...n, text: noteModal.text } : n));
                } else {
                  setNotes(prev => [...prev, { id: Date.now(), text: noteModal.text }]);
                }
                setNoteModal({ open: false, id: null, text: "" });
              }} style={{ ...s.btn, flex: 2 }}>💾 {t.noteSave}</button>
              <button onClick={() => setNoteModal({ open: false, id: null, text: "" })} style={{ ...s.btn, flex: 1, background: theme.inputBg, color: theme.text, border: "1px solid " + theme.border }}>✕</button>
            </div>
          </div>
        </div>
      )}

      {/* QR modal */}
      {qrModal.open && (
        <div style={{ position: "fixed", inset: 0, zIndex: 5000, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(10px)" }} onClick={() => setQrModal({ open: false, url: "" })}>
          <div style={{ background: isDark ? "rgba(20,20,35,0.97)" : "#fff", border: "1px solid " + theme.border, borderRadius: 24, padding: 32, textAlign: "center" }} onClick={e => e.stopPropagation()}>
            <div style={{ fontSize: 18, fontWeight: 800, color: theme.text, marginBottom: 20 }}>📷 {t.qrExport}</div>
            <img src={qrModal.url} alt="QR Code" style={{ borderRadius: 12 }} />
            <div><button onClick={() => setQrModal({ open: false, url: "" })} style={{ ...s.btn, marginTop: 20, width: "auto", padding: "10px 28px" }}>{t.qrClose}</button></div>
          </div>
        </div>
      )}

      {/* URL import modal */}
      {urlImportModal.open && (
        <div style={{ position: "fixed", inset: 0, zIndex: 5000, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(10px)" }}>
          <div style={{ background: isDark ? "rgba(20,20,35,0.97)" : "rgba(250,250,255,0.97)", border: "1px solid " + theme.border, borderRadius: 24, padding: 28, maxWidth: 380, width: "100%" }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: theme.text, marginBottom: 12 }}>📥 Import</div>
            <div style={{ fontSize: 14, color: theme.subtext, marginBottom: 16 }}>{urlImportModal.apps.length} App(s) importieren?</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, maxHeight: 200, overflowY: "auto", marginBottom: 16 }}>
              {urlImportModal.apps.map((a, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", background: theme.inputBg, border: "1px solid " + theme.border, borderRadius: 10 }}>
                  <span>{a.emoji}</span><span style={{ fontSize: 13, color: theme.text }}>{a.name}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => { setApps(prev => { const ids = new Set(prev.map(a => a.id)); return [...prev, ...urlImportModal.apps.filter(a => !ids.has(a.id))]; }); setUrlImportModal({ open: false, apps: [] }); }} style={{ ...s.btn, flex: 2 }}>✅ Importieren</button>
              <button onClick={() => setUrlImportModal({ open: false, apps: [] })} style={{ ...s.btn, flex: 1, background: theme.inputBg, color: theme.text, border: "1px solid " + theme.border }}>✕</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
