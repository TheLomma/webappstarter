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
    version: "v3.3",
    search: "Search apps...",
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
      { icon: "🔒", title: "PIN Protection", desc: "Settings → Manage Apps → tap 🔒 → set a 4-digit PIN. Protected apps ask for PIN before opening." },
      { icon: "🔲", title: "View Mode", desc: "Tap the 🔲/📊 button in the header to switch between grid and compact list view." },
      { icon: "📐", title: "Card Size", desc: "Settings → Card Size → choose Small, Medium or Large." },
      { icon: "🎨", title: "Themes", desc: "Settings → Theme → pick one of 6 color themes. Use ☀️/🌙 to toggle light/dark." },
      { icon: "🌈", title: "Custom Background", desc: "Settings → Custom Background → enable & pick two gradient colors." },
      { icon: "🌐", title: "Language", desc: "Settings → Language → choose 🇩🇪 Deutsch or 🇬🇧 English." },
      { icon: "📤", title: "Export", desc: "Settings → Import/Export → Export JSON to save your apps as a file." },
      { icon: "📥", title: "Import", desc: "Settings → Import/Export → Import JSON to restore a saved app list." },
      { icon: "📷", title: "QR Code", desc: "Settings → QR Code Export → Show QR Code → scan with another device to share apps." },
      { icon: "📳", title: "Vibration", desc: "Settings → Vibration → toggle on/off. Vibrates briefly when opening an app (Android only)." },
      { icon: "📲", title: "Install PWA", desc: "Tap 'Add to Home Screen' in the banner or via your browser menu to install as an app." },
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
    resetConfirm: "Wirklich auf Standard-Apps zur\u00fccksetzen?",
    settings: "Einstellungen",
    addNewApp: "Neue App hinzuf\u00fcgen",
    appName: "App-Name",
    url: "URL",
    emoji: "Emoji-Symbol",
    addBtn: "+ App hinzuf\u00fcgen",
    theme: "Design",
    language: "Sprache",
    manageApps: "Apps verwalten",
    emptyTitle: "Noch keine Apps",
    emptyDesc: "Tippe auf Einstellungen um deine erste App hinzuzuf\u00fcgen!",
    namePlaceholder: "Meine App",
    urlPlaceholder: "https://beispiel.de",
    emojiPlaceholder: "🌐",
    version: "v3.3",
    search: "Apps suchen...",
    importExport: "Import / Export",
    exportBtn: "JSON exportieren",
    importBtn: "JSON importieren",
    pinProtect: "PIN-Schutz",
    pinFor: "PIN f\u00fcr App",
    pinSet: "PIN setzen",
    pinRemove: "PIN entfernen",
    pinEnter: "PIN eingeben",
    pinWrong: "Falsche PIN",
    pinPlaceholder: "4-stellige PIN",
    addToHome: "Zum Startbildschirm",
    addToHomeDesc: "Installiere diese App auf deinem Startbildschirm f\u00fcr schnellen Zugriff.",
    addToHomeBtn: "Zum Startbildschirm hinzuf\u00fcgen",
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
      { icon: "⭐", title: "Favoriten", desc: "⭐ auf einer Karte tippen, um sie als Favorit zu markieren. Favoriten erscheinen oben." },
      { icon: "🔍", title: "Suche", desc: "Im Suchfeld tippen, um Apps nach Name oder URL zu filtern." },
      { icon: "↕️", title: "Reihenfolge", desc: "Karte gedrückt halten & ziehen, um die Reihenfolge zu ändern. Wird automatisch gespeichert." },
      { icon: "🔒", title: "PIN-Schutz", desc: "Einstellungen → Apps verwalten → 🔒 tippen → 4-stellige PIN setzen. Geschützte Apps fragen beim Öffnen nach der PIN." },
      { icon: "🔲", title: "Ansicht", desc: "🔲/📊-Button im Header tippen, um zwischen Gitter- und Kompaktansicht zu wechseln." },
      { icon: "📐", title: "Kartengröße", desc: "Einstellungen → Kartengröße → Klein, Mittel oder Groß wählen." },
      { icon: "🎨", title: "Design", desc: "Einstellungen → Design → eines von 6 Farbthemes wählen. ☀️/🌙 schaltet hell/dunkel um." },
      { icon: "🌈", title: "Eigener Hintergrund", desc: "Einstellungen → Eigener Hintergrund → aktivieren & zwei Verlaufsfarben wählen." },
      { icon: "🌐", title: "Sprache", desc: "Einstellungen → Sprache → 🇩🇪 Deutsch oder 🇬🇧 English wählen." },
      { icon: "📤", title: "Exportieren", desc: "Einstellungen → Import/Export → JSON exportieren, um Apps als Datei zu sichern." },
      { icon: "📥", title: "Importieren", desc: "Einstellungen → Import/Export → JSON importieren, um eine gespeicherte App-Liste zu laden." },
      { icon: "📷", title: "QR-Code", desc: "Einstellungen → QR-Code Export → QR-Code anzeigen → mit anderem Gerät scannen." },
      { icon: "📳", title: "Vibration", desc: "Einstellungen → Vibration → ein/aus schalten. Kurze Vibration beim Öffnen einer App (nur Android)." },
      { icon: "📲", title: "Als App installieren", desc: "Banner 'Zum Startbildschirm' tippen oder über das Browser-Menü als PWA installieren." },
      { icon: "🗄️", title: "Cache leeren", desc: "Einstellungen → Cache leeren → setzt alle Daten zurück. Vorher JSON-Export erstellen!" },
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
const STORAGE_GLOBAL_UNLOCKED = "wal_global_unlocked";
  const STORAGE_ANIM   = "wal_anim";


const BlobBg = ({ isDark }) => (
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

export default function App() {
  const DEFAULT_APPS = [
    { id: 1, name: "Magic Showrunner", url: "https://magicshowrunnernew.vercel.app", emoji: "🎪", fav: false },
    { id: 2, name: "Showrunner Test", url: "https://magicshowrunnertest.vercel.app", emoji: "🧪", fav: false },
    { id: 3, name: "Synaptic Tester", url: "https://synaptictester.vercel.app", emoji: "🧠", fav: false },
    { id: 4, name: "Reiseplaner", url: "https://reiseplaner-psi.vercel.app", emoji: "✈️", fav: false },
    { id: 5, name: "5 Star Lomma", url: "https://magic.pm/5star/lomma/", emoji: "🌟", fav: false },
    { id: 6, name: "The Wheel", url: "https://thewheel.fun/login.php", emoji: "🎡", fav: false },
    { id: 7, name: "Prestige App", url: "https://prestige-app-zeta.vercel.app/dashboard", emoji: "📋", fav: false },
    { id: 8, name: "RP Dashboard", url: "https://rpdashboard.vercel.app", emoji: "📊", fav: false },
  ];

  const [apps, setApps] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_APPS); return s ? JSON.parse(s) : DEFAULT_APPS; } catch { return DEFAULT_APPS; }
  });
  const [pins, setPins] = useState(() => {
    try { const s = localStorage.getItem(STORAGE_PINS); return s ? JSON.parse(s) : { "https://rpdashboard.vercel.app": "2026" }; } catch { return { "https://rpdashboard.vercel.app": "2026" }; }
  });
  const [themeName, setThemeName] = useState(() => localStorage.getItem(STORAGE_THEME) || "dark");
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
  const [pinEdit, setPinEdit] = useState({ appId: null, value: "" });
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
    const [helpOpen, setHelpOpen] = useState(false);
  const [globalPin, setGlobalPin] = useState(() => localStorage.getItem(STORAGE_GLOBAL_PIN) || "");
  const [globalUnlocked, setGlobalUnlocked] = useState(false);
  const [globalPinModal, setGlobalPinModal] = useState({ open: false, input: "", error: false, mode: "unlock" });
  const [globalPinSetup, setGlobalPinSetup] = useState({ step: 0, first: "", input: "" });
  const [pinTimeout, setPinTimeout] = useState(() => parseInt(localStorage.getItem(STORAGE_PIN_TIMEOUT) || "0"));
  const lastUnlockedRef = useRef(null);
  const importRef = useRef();

  useEffect(() => {
    const goOffline = () => setIsOffline(true);
    const goOnline = () => setIsOffline(false);
    window.addEventListener("offline", goOffline);
    window.addEventListener("online", goOnline);
    return () => { window.removeEventListener("offline", goOffline); window.removeEventListener("online", goOnline); };
  }, []);

  const GlobalPinModal = () => !globalPinModal.open ? null : (
    <div style={{ position: "fixed", inset: 0, zIndex: 8000, display: "flex", alignItems: "center", justifyContent: "center", padding: 24, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}>
      <div style={{ background: theme.surface, border: "1px solid " + theme.border, borderRadius: 28, padding: "32px 24px", maxWidth: 340, width: "100%", textAlign: "center", boxShadow: "0 8px 48px rgba(0,0,0,0.4)" }}>
        <div style={{ fontSize: 52, marginBottom: 12 }}>{globalPinModal.mode === "setup" ? "🔐" : "🔒"}</div>
        <div style={{ fontSize: 20, fontWeight: 800, color: theme.text, marginBottom: 6 }}>
          {globalPinModal.mode === "setup"
            ? (globalPinSetup.step === 0 ? t.globalPinNew : t.globalPinConfirm)
            : t.globalPinEnter}
        </div>
        <div style={{ fontSize: 13, color: theme.subtext, marginBottom: 24 }}>Web App Launcher</div>
        <div style={{ display: "flex", justifyContent: "center", gap: 14, marginBottom: 28 }}>
          {[0,1,2,3].map(i => {
            const pinLen = globalPinModal.mode === "setup" ? globalPinSetup.input.length : globalPinModal.input.length;
            return <div key={i} style={{ width: 16, height: 16, borderRadius: "50%", background: i < pinLen ? (globalPinModal.error ? "#dc2626" : theme.primary) : theme.border, transition: "background .15s" }} />;
          })}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 8 }}>
          {[1,2,3,4,5,6,7,8,9].map(n => (
            <button key={n} onClick={() => globalPinModal.mode === "setup" ? handleGlobalPinSetup(String(n)) : submitGlobalPin(String(n))}
              style={{ background: theme.inputBg, border: "1px solid " + theme.border, borderRadius: 14, padding: "14px 0", fontSize: 22, fontWeight: 600, color: theme.text, cursor: "pointer" }}>{n}</button>
          ))}
          <div />
          <button onClick={() => globalPinModal.mode === "setup" ? handleGlobalPinSetup("0") : submitGlobalPin("0")}
            style={{ background: theme.inputBg, border: "1px solid " + theme.border, borderRadius: 14, padding: "14px 0", fontSize: 22, fontWeight: 600, color: theme.text, cursor: "pointer" }}>0</button>
          <button onClick={() => globalPinModal.mode === "setup"
            ? setGlobalPinSetup(s => ({ ...s, input: s.input.slice(0,-1) }))
            : setGlobalPinModal(m => ({ ...m, input: m.input.slice(0,-1) }))}
            style={{ background: theme.inputBg, border: "1px solid " + theme.border, borderRadius: 14, padding: "14px 0", fontSize: 18, color: theme.text, cursor: "pointer" }}>⌫</button>
        </div>
        {globalPinModal.error && <div style={{ color: "#dc2626", fontSize: 13, marginTop: 8 }}>{globalPinModal.mode === "setup" ? t.globalPinMismatch : t.globalPinWrong}</div>}
      </div>
    </div>
  );

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

  const HelpModal = () => !helpOpen ? null : (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }} onClick={() => setHelpOpen(false)}>
      <div style={{ background: theme.bg, border: "1px solid " + theme.border, borderRadius: 20, padding: 24, maxWidth: 480, width: "100%", maxHeight: "80vh", overflowY: "auto", backdropFilter: "blur(20px)" }} onClick={e => e.stopPropagation()}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <h2 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: theme.text }}>❓ {t.helpTitle}</h2>
          <button onClick={() => setHelpOpen(false)} style={{ background: theme.surface, border: "1px solid " + theme.border, borderRadius: 10, padding: "6px 14px", cursor: "pointer", color: theme.text, fontWeight: 700 }}>{t.helpClose}</button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {t.helpItems.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", background: theme.surface, border: "1px solid " + theme.border, borderRadius: 14, padding: "12px 14px" }}>
              <span style={{ fontSize: 22, flexShrink: 0, marginTop: 1 }}>{item.icon}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: theme.text, marginBottom: 3 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: theme.subtext, lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );





  const t = translations[lang] || translations.en;
  const theme = THEMES[themeName] || THEMES.dark;
  const isDark = ["dark", "blueDark", "greenDark"].includes(themeName);

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

  // PIN Timeout checker
  useEffect(() => {
    if (!globalPin || pinTimeout === 0) return;
    const interval = setInterval(() => {
      if (lastUnlockedRef.current && globalUnlocked) {
        const elapsed = (Date.now() - lastUnlockedRef.current) / 1000 / 60;
        if (elapsed >= pinTimeout) {
          setGlobalUnlocked(false);
          setGlobalPinModal({ open: true, input: "", error: false, mode: "unlock" });
          lastUnlockedRef.current = null;
        }
      }
    }, 15000);
    return () => clearInterval(interval);
  }, [globalPin, pinTimeout, globalUnlocked]);

  // Show global PIN lock on load
  useEffect(() => {
    if (globalPin && !globalUnlocked) {
      setGlobalPinModal({ open: true, input: "", error: false, mode: "unlock" });
    }
  }, []);

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

  function toggleDark() {
    const pairs = { light: "dark", dark: "light", blue: "blueDark", blueDark: "blue", green: "greenDark", greenDark: "green" };
    setThemeName(pairs[themeName] || "dark");
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

  function resetApps() { setApps(DEFAULT_APPS); }

  function saveEditApp() {
    if (!editApp.name.trim() || !editApp.url.trim()) return;
    let url = editApp.url.trim();
    if (!/^https?:\/\//i.test(url)) url = "https://" + url;
    setApps(prev => prev.map(a => a.id === editApp.appId ? { ...a, name: editApp.name.trim(), url, emoji: editApp.emoji.trim() || "🌐" } : a));
    setEditApp({ appId: null, name: "", url: "", emoji: "" });
  }
  function deleteApp(id) { setApps(prev => prev.filter(a => a.id !== id)); }
  function toggleFav(id) { setApps(prev => prev.map(a => a.id === id ? { ...a, fav: !a.fav } : a)); }

  function vibrate() {
    if (vibro && navigator.vibrate) navigator.vibrate(30);
  }

  function handleAppClick(e, app) {
    vibrate();
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

  function deletePin(digit) { setPwModal(m => ({ ...m, pin: m.pin.slice(0, -1) })); }

  function generateQr() {
    try {
      const base64 = btoa(JSON.stringify(apps));
      const importUrl = window.location.origin + window.location.pathname + "?import=" + base64;
      const qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + encodeURIComponent(importUrl);
      setQrModal({ open: true, url: qrUrl });
    } catch {}
  }

  function exportApps() {
    const data = JSON.stringify(apps, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "web-app-launcher.json";
    a.click();
  }

  function importApps(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const data = JSON.parse(ev.target.result);
        if (Array.isArray(data)) setApps(data);
      } catch {}
    };
    reader.readAsText(file);
    e.target.value = "";
  }

  // Drag & Drop
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

  async function installApp() {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setShowBanner(false);
  }

  const filtered = apps.filter(a => a.name.toLowerCase().includes(search.toLowerCase()) || a.url.toLowerCase().includes(search.toLowerCase()));
  const favApps = filtered.filter(a => a.fav);
  const allApps = filtered.filter(a => !a.fav);

  const s = {
    body:       { position: "relative", background: customBg.enabled ? `linear-gradient(135deg, ${customBg.color1} 0%, ${customBg.color2} 100%)` : theme.bg, minHeight: "100vh", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif", color: theme.text, transition: "background .4s,color .3s" },
    header:     { background: theme.headerBg, backdropFilter: "blur(24px) saturate(180%)", WebkitBackdropFilter: "blur(24px) saturate(180%)", color: theme.headerText, padding: "0 20px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 1px 0 " + theme.border + ", 0 4px 24px rgba(0,0,0,.08)", borderBottom: "1px solid " + theme.border },
    iconBtn:    { background: "rgba(255,255,255,0.18)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.3)", color: theme.headerText, width: 38, height: 38, borderRadius: "50%", cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" },
    main:       { position: "relative", zIndex: 1, padding: "16px 14px", maxWidth: 900, margin: "0 auto" },
    secLabel:   { fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: theme.subtext, marginBottom: 14 },
    grid:       { display: "grid", gridTemplateColumns: cardSize === "small" ? "repeat(auto-fill,minmax(80px,1fr))" : cardSize === "large" ? "repeat(auto-fill,minmax(150px,1fr))" : "repeat(auto-fill,minmax(110px,1fr))", gap: cardSize === "small" ? 8 : cardSize === "large" ? 16 : 12 },
    card:       { position: "relative", overflow: "hidden", background: theme.surface, backdropFilter: "blur(20px) saturate(180%)", WebkitBackdropFilter: "blur(20px) saturate(180%)", border: "1px solid " + theme.border, borderRadius: 20, padding: "18px 10px", textAlign: "center", cursor: "pointer", textDecoration: "none", color: theme.text, display: "block", boxShadow: "0 4px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.35)", transition: "all .25s cubic-bezier(.34,1.56,.64,1)" },
    overlay:    { position: "fixed", inset: 0, background: "rgba(0,0,0,.5)", zIndex: 200, opacity: drawerOpen ? 1 : 0, pointerEvents: drawerOpen ? "all" : "none", transition: "opacity .3s" },
    drawer:     { position: "fixed", bottom: 0, left: 0, right: 0, background: theme.surface, backdropFilter: "blur(40px) saturate(200%)", WebkitBackdropFilter: "blur(40px) saturate(200%)", borderRadius: "28px 28px 0 0", zIndex: 201, transform: drawerOpen ? "translateY(0)" : "translateY(100%)", transition: "transform .4s cubic-bezier(.34,1.56,.64,1)", maxHeight: "85vh", overflowY: "auto", boxShadow: "0 -4px 40px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.3)", border: "1px solid " + theme.border },
    drawerHead: { padding: "16px 20px 12px", fontSize: 17, fontWeight: 700, color: theme.text, borderBottom: "1px solid " + theme.border, display: "flex", alignItems: "center", justifyContent: "space-between" },
    closeBtn:   { background: theme.primarySoft, border: "none", color: theme.primary, width: 28, height: 28, borderRadius: "50%", cursor: "pointer", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" },
    drawerBody: { padding: "14px 16px 40px" },
    secTitle:   { fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: theme.subtext, marginBottom: 12 },
    input:      { width: "100%", background: theme.inputBg, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1.5px solid " + theme.border, borderRadius: 14, padding: "11px 14px", fontSize: 14, color: theme.text, outline: "none", boxSizing: "border-box", boxShadow: "inset 0 1px 3px rgba(0,0,0,0.06)" },
    addBtn:     { width: "100%", background: theme.primary, color: "#fff", border: "none", borderRadius: 16, padding: 13, fontSize: 15, fontWeight: 700, cursor: "pointer", marginTop: 6, boxShadow: "0 4px 16px rgba(0,0,0,0.18)", letterSpacing: 0.3 },
    themeGrid:  { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 },
    langRow:    { display: "flex", gap: 8 },
    listItem:   { display: "flex", alignItems: "center", gap: 10, padding: "11px 14px", background: theme.inputBg, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderRadius: 14, marginBottom: 8, border: "1px solid " + theme.border, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15)" },
    delBtn:     { background: "#fee2e2", border: "none", color: "#dc2626", width: 30, height: 30, borderRadius: 8, cursor: "pointer", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  };

  const AppCard = ({ app }) => (
    <a
      key={app.id}
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ ...s.card, opacity: dragId === app.id ? 0.4 : 1 }}
      onClick={e => handleAppClick(e, app)}
      draggable
      onDragStart={e => onDragStart(e, app.id)}
      onDragOver={e => onDragOver(e, app.id)}
      onDragEnd={onDragEnd}
      onMouseEnter={e => { e.currentTarget.style.background = theme.cardHover; e.currentTarget.style.borderColor = theme.primary; e.currentTarget.style.transform = "translateY(-4px) scale(1.03)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.5)"; }}
      onMouseLeave={e => { e.currentTarget.style.background = theme.surface; e.currentTarget.style.borderColor = theme.border; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.35)"; }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "45%", background: "linear-gradient(180deg,rgba(255,255,255,0.18) 0%,transparent 100%)", borderRadius: "22px 22px 0 0", pointerEvents: "none" }} />
      {pins[app.url] && <div style={{ position: "absolute", top: 8, right: 8, fontSize: 11 }}>🔒</div>}
      <button
        onClick={e => { e.preventDefault(); e.stopPropagation(); toggleFav(app.id); }}
        style={{ position: "absolute", top: 7, left: 8, background: "none", border: "none", cursor: "pointer", fontSize: 14, opacity: app.fav ? 1 : 0.3, transition: "opacity .2s" }}
      >⭐</button>
      <span style={{ fontSize: cardSize === "small" ? 26 : cardSize === "large" ? 52 : 38, display: "block", marginBottom: cardSize === "small" ? 6 : 10, marginTop: cardSize === "small" ? 4 : 8 }}>{app.emoji}</span>
      <span style={{ fontSize: cardSize === "small" ? 10 : cardSize === "large" ? 15 : 13, fontWeight: 600, lineHeight: 1.3 }}>{app.name}</span>
    </a>
  );

  return (
    <div style={s.body}>

      <style>{`
        * { -webkit-tap-highlight-color: transparent; box-sizing: border-box; }
        body { margin: 0; overscroll-behavior: none; }
        input, button { -webkit-appearance: none; }
        @media (orientation: landscape) and (max-height: 500px) {
          .wal-header { height: 46px !important; padding: 0 14px !important; }
          .wal-main { padding: 10px 12px !important; }
          .wal-grid { grid-template-columns: repeat(auto-fill, minmax(90px, 1fr)) !important; gap: 8px !important; }
          .wal-drawer { max-height: 100vh !important; width: 60vw !important; left: auto !important; top: 0 !important; bottom: 0 !important; border-radius: 0 !important; }
        }
        @media (max-width: 400px) {
          .wal-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 10px !important; }
          .wal-card { padding: 14px 8px !important; border-radius: 16px !important; }
          .wal-card span:first-of-type { font-size: 30px !important; }
          .wal-card span:last-of-type { font-size: 11px !important; }
        }
      `}</style>
      {animEnabled && <BlobBg isDark={isDark} />}
      <GlobalPinModal />
      <HelpModal />

      {/* QR Modal */}
      {qrModal.open && (
        <div style={{ position: "fixed", inset: 0, zIndex: 700, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div onClick={() => setQrModal({ open: false, url: "" })} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }} />
          <div style={{ position: "relative", zIndex: 1, background: theme.surface, backdropFilter: "blur(40px) saturate(200%)", WebkitBackdropFilter: "blur(40px) saturate(200%)", border: "1px solid " + theme.border, borderRadius: 28, padding: "28px 24px", maxWidth: 340, width: "calc(100% - 32px)", boxShadow: "0 8px 48px rgba(0,0,0,0.3)", textAlign: "center" }}>
            <div style={{ fontSize: 36, marginBottom: 8 }}>📷</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: theme.text, marginBottom: 4 }}>{t.qrExport}</div>
            <div style={{ fontSize: 12, color: theme.subtext, marginBottom: 20 }}>Scanne den Code um die Apps zu importieren</div>
            <div style={{ background: "#fff", borderRadius: 16, padding: 12, display: "inline-block", marginBottom: 20 }}>
              <img src={qrModal.url} alt="QR Code" width={220} height={220} style={{ display: "block", borderRadius: 8 }} />
            </div>
            <div style={{ fontSize: 11, color: theme.subtext, marginBottom: 20 }}>{apps.length} App{apps.length !== 1 ? "s" : ""} enthalten</div>
            <button onClick={() => setQrModal({ open: false, url: "" })} style={{ width: "100%", background: theme.primary, color: "#fff", border: "none", borderRadius: 14, padding: 12, fontSize: 14, fontWeight: 700, cursor: "pointer" }}>{t.qrClose}</button>
          </div>
        </div>
      )}

      {/* URL Import Modal */}
      {urlImportModal.open && (
        <div style={{ position: "fixed", inset: 0, zIndex: 600, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div onClick={() => setUrlImportModal({ open: false, apps: [] })} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }} />
          <div style={{ position: "relative", zIndex: 1, background: theme.surface, backdropFilter: "blur(40px) saturate(200%)", WebkitBackdropFilter: "blur(40px) saturate(200%)", border: "1px solid " + theme.border, borderRadius: 28, padding: "24px 20px", maxWidth: 360, width: "calc(100% - 32px)", boxShadow: "0 8px 48px rgba(0,0,0,0.25)" }}>
            <div style={{ fontSize: 36, textAlign: "center", marginBottom: 12 }}>🔗</div>
            <div style={{ fontSize: 17, fontWeight: 700, color: theme.text, textAlign: "center", marginBottom: 6 }}>URL Import</div>
            <div style={{ fontSize: 13, color: theme.subtext, textAlign: "center", marginBottom: 16 }}>{urlImportModal.apps.length} App{urlImportModal.apps.length !== 1 ? "s" : ""} gefunden. Importieren?</div>
            <div style={{ maxHeight: 200, overflowY: "auto", marginBottom: 16 }}>
              {urlImportModal.apps.map((app, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", background: theme.inputBg, borderRadius: 10, marginBottom: 6, border: "1px solid " + theme.border }}>
                  <span style={{ fontSize: 20 }}>{app.emoji || "🌐"}</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: theme.text }}>{app.name}</div>
                    <div style={{ fontSize: 11, color: theme.subtext }}>{app.url}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => setUrlImportModal({ open: false, apps: [] })} style={{ flex: 1, background: theme.inputBg, border: "1px solid " + theme.border, color: theme.text, borderRadius: 12, padding: 11, fontSize: 14, fontWeight: 700, cursor: "pointer" }}>Abbrechen</button>
              <button onClick={() => { setApps(prev => { const newApps = urlImportModal.apps.map((a, i) => ({ ...a, id: Date.now() + i, fav: false })); return [...prev, ...newApps]; }); setUrlImportModal({ open: false, apps: [] }); }} style={{ flex: 1, background: theme.primary, color: "#fff", border: "none", borderRadius: 12, padding: 11, fontSize: 14, fontWeight: 700, cursor: "pointer" }}>✅ Importieren</button>
            </div>
          </div>
        </div>
      )}

      {/* Offline Screen */}
      {isOffline && (
        <div style={{ position: "fixed", inset: 0, zIndex: 9000, background: customBg.enabled ? `linear-gradient(135deg, ${customBg.color1} 0%, ${customBg.color2} 100%)` : theme.bg, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 32, textAlign: "center" }}>
          <BlobBg isDark={isDark} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: 80, marginBottom: 24 }}>📡</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: theme.text, marginBottom: 12 }}>{t.offlineTitle}</div>
            <div style={{ fontSize: 15, color: theme.subtext, marginBottom: 32, maxWidth: 280 }}>{t.offlineDesc}</div>
            <button
              onClick={() => window.location.reload()}
              style={{ background: theme.primary, color: "#fff", border: "none", borderRadius: 16, padding: "14px 32px", fontSize: 15, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 16px rgba(0,0,0,0.2)" }}
            >🔄 Erneut versuchen</button>
          </div>
        </div>
      )}

      {/* Add to Home Banner */}
      {showBanner && (
        <div style={{ position: "fixed", bottom: 24, left: 16, right: 16, zIndex: 400, background: theme.surface, backdropFilter: "blur(30px)", WebkitBackdropFilter: "blur(30px)", border: "1px solid " + theme.border, borderRadius: 20, padding: "14px 16px", boxShadow: "0 8px 32px rgba(0,0,0,0.2)", display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ fontSize: 32 }}>📱</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: theme.text }}>{t.addToHome}</div>
            <div style={{ fontSize: 12, color: theme.subtext }}>{t.addToHomeDesc}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <button onClick={installApp} style={{ background: theme.primary, color: "#fff", border: "none", borderRadius: 10, padding: "6px 12px", fontSize: 12, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>{t.addToHomeBtn}</button>
            <button onClick={() => setShowBanner(false)} style={{ background: "none", border: "none", color: theme.subtext, fontSize: 12, cursor: "pointer" }}>{t.addToHomeDismiss}</button>
          </div>
        </div>
      )}

      {/* PIN Modal */}
      {pwModal.open && (
        <div style={{ position: "fixed", inset: 0, zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div onClick={() => setPwModal({ open: false, url: "", pin: "" })} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }} />
          <div style={{ position: "relative", zIndex: 1, background: theme.surface, backdropFilter: "blur(40px) saturate(200%)", WebkitBackdropFilter: "blur(40px) saturate(200%)", border: "1px solid " + theme.border, borderRadius: 28, padding: "28px 20px", maxWidth: 340, width: "calc(100% - 32px)", boxShadow: "0 8px 48px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.3)", textAlign: "center" }}>
            <div style={{ fontSize: 44, marginBottom: 12 }}>🔒</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: theme.text, marginBottom: 20 }}>{t.pinEnter}</div>
            {/* PIN dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: 14, marginBottom: 28 }}>
              {[0,1,2,3].map(i => (
                <div key={i} style={{ width: 16, height: 16, borderRadius: "50%", background: i < pwModal.pin.length ? (pinError ? "#dc2626" : theme.primary) : theme.border, transition: "background .15s", boxShadow: i < pwModal.pin.length ? "0 0 8px " + theme.primary : "none" }} />
              ))}
            </div>
            {/* Numpad */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 8 }}>
              {[1,2,3,4,5,6,7,8,9].map(n => (
                <button key={n} onClick={() => submitPin(String(n))} style={{ background: theme.inputBg, border: "1px solid " + theme.border, borderRadius: 14, padding: "14px 0", fontSize: 22, fontWeight: 600, color: theme.text, cursor: "pointer", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15)" }}>{n}</button>
              ))}
              <div />
              <button onClick={() => submitPin("0")} style={{ background: theme.inputBg, border: "1px solid " + theme.border, borderRadius: 14, padding: "14px 0", fontSize: 22, fontWeight: 600, color: theme.text, cursor: "pointer", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15)" }}>0</button>
              <button onClick={deletePin} style={{ background: theme.inputBg, border: "1px solid " + theme.border, borderRadius: 14, padding: "16px 0", fontSize: 18, color: theme.text, cursor: "pointer", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}>⌫</button>
            </div>
            {pinError && <div style={{ color: "#dc2626", fontSize: 13, marginTop: 4 }}>{t.pinWrong}</div>}
            <button onClick={() => setPwModal({ open: false, url: "", pin: "" })} style={{ marginTop: 16, background: "none", border: "none", color: theme.subtext, fontSize: 13, cursor: "pointer" }}>Abbrechen</button>
          </div>
        </div>
      )}

      <header style={s.header} className="wal-header">
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 24 }}>🚀</span>
          <div>
            <div style={{ fontSize: 17, fontWeight: 700 }}>{t.title}</div>
            <div style={{ fontSize: 10, opacity: 0.6 }}>{t.version}</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button style={s.iconBtn} onClick={() => setHelpOpen(true)}>❓</button>
          <button style={s.iconBtn} onClick={() => setViewMode(v => v === "compact" ? "grid" : "compact")}>{viewMode === "compact" ? "🔲" : "📊"}</button>
          <button style={s.iconBtn} onClick={toggleDark}>{isDark ? "☀️" : "🌙"}</button>
          <button style={s.iconBtn} onClick={() => setDrawerOpen(true)}>⚙️</button>
        </div>
      </header>

      <main style={s.main} className="wal-main">
        {/* Search */}
        <div style={{ marginBottom: 20 }}>
          <input
            style={{ ...s.input, paddingLeft: 40 }}
            placeholder={t.search}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <span style={{ position: "relative", top: -36, left: 14, fontSize: 16, pointerEvents: "none" }}>🔍</span>
        </div>

        {/* Favorites */}
        {favApps.length > 0 && (
          <div style={{ marginBottom: 28 }}>
            <div style={s.secLabel}>⭐ {t.favorites}</div>
            <div style={s.grid}>
              {favApps.map(app => <AppCard key={app.id} app={app} />)}
            </div>
          </div>
        )}

        {/* All Apps */}
        <div style={s.secLabel}>{t.myApps}</div>
        <div style={viewMode === "compact" ? { display: "flex", flexDirection: "column", gap: 8 } : s.grid} className="wal-grid">
          {allApps.length === 0 && favApps.length === 0 ? (
            <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "50px 20px", color: theme.subtext }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>📦</div>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{t.emptyTitle}</div>
              <div style={{ fontSize: 13 }}>{t.emptyDesc}</div>
            </div>
          ) : viewMode === "compact"
            ? allApps.map(app => (
                <a key={app.id} href={app.url} target="_blank" rel="noopener noreferrer"
                  onClick={e => handleAppClick(e, app)}
                  style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", background: theme.surface, border: "1px solid " + theme.border, borderRadius: 14, textDecoration: "none", color: theme.text, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", transition: "all .2s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = theme.cardHover; e.currentTarget.style.borderColor = theme.primary; }}
                  onMouseLeave={e => { e.currentTarget.style.background = theme.surface; e.currentTarget.style.borderColor = theme.border; }}
                >
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{app.emoji}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{app.name}</span>
                  {pins[app.url] && <span style={{ fontSize: 12, flexShrink: 0 }}>🔒</span>}
                  {app.fav && <span style={{ fontSize: 12, flexShrink: 0 }}>⭐</span>}
                </a>
              ))
            : allApps.map(app => <AppCard key={app.id} app={app} />)}
        </div>
      </main>

      <div style={s.overlay} onClick={() => setDrawerOpen(false)} />

      <div style={s.drawer} className="wal-drawer">
        <div style={{ width: 40, height: 4, background: theme.border, borderRadius: 2, margin: "12px auto 0" }} />
        <div style={s.drawerHead}>
          <span>⚙️ {t.settings}</span>
          <button style={s.closeBtn} onClick={() => setDrawerOpen(false)}>✕</button>
        </div>
        <div style={s.drawerBody}>

          {/* Add App */}
          <div style={{ marginBottom: 24 }}>
            <div style={s.secTitle}>{t.addNewApp}</div>
            {error && <div style={{ color: "#dc2626", fontSize: 12, marginBottom: 8 }}>{error}</div>}
            {[["name", t.appName, t.namePlaceholder, "text"], ["url", t.url, t.urlPlaceholder, "url"], ["emoji", t.emoji, t.emojiPlaceholder, "text"]].map(([key, label, ph, type]) => (
              <div key={key} style={{ marginBottom: 8 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: theme.subtext, display: "block", marginBottom: 4 }}>{label}</label>
                <input style={s.input} type={type} placeholder={ph} value={form[key]} onChange={e => setForm({ ...form, [key]: e.target.value })} maxLength={key === "emoji" ? 2 : undefined} />
              </div>
            ))}
            <button style={s.addBtn} onClick={addApp}>{t.addBtn}</button>
          </div>

          {/* Custom Background */}
          <div style={{ marginBottom: 24 }}>
            <div style={s.secTitle}>{t.customBg}</div>
            <div style={{ background: theme.inputBg, border: "1px solid " + theme.border, borderRadius: 14, padding: 14 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: customBg.enabled ? 14 : 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: theme.text }}>🎨 {t.customBg}</div>
                <button
                  onClick={() => setCustomBg(b => ({ ...b, enabled: !b.enabled }))}
                  style={{ width: 52, height: 28, borderRadius: 14, border: "none", cursor: "pointer", background: customBg.enabled ? theme.primary : theme.border, position: "relative", transition: "background .25s" }}
                >
                  <div style={{ position: "absolute", top: 3, left: customBg.enabled ? 26 : 3, width: 22, height: 22, borderRadius: "50%", background: "#fff", transition: "left .25s", boxShadow: "0 1px 4px rgba(0,0,0,0.2)" }} />
                </button>
              </div>
              {customBg.enabled && (
                <div>
                  <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                    <div style={{ flex: 1 }}>
                      <label style={{ fontSize: 11, fontWeight: 600, color: theme.subtext, display: "block", marginBottom: 6 }}>{t.customBgColor1}</label>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <input type="color" value={customBg.color1} onChange={e => setCustomBg(b => ({ ...b, color1: e.target.value }))} style={{ width: 40, height: 36, border: "none", borderRadius: 8, cursor: "pointer", padding: 2, background: "none" }} />
                        <span style={{ fontSize: 12, color: theme.subtext }}>{customBg.color1}</span>
                      </div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <label style={{ fontSize: 11, fontWeight: 600, color: theme.subtext, display: "block", marginBottom: 6 }}>{t.customBgColor2}</label>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <input type="color" value={customBg.color2} onChange={e => setCustomBg(b => ({ ...b, color2: e.target.value }))} style={{ width: 40, height: 36, border: "none", borderRadius: 8, cursor: "pointer", padding: 2, background: "none" }} />
                        <span style={{ fontSize: 12, color: theme.subtext }}>{customBg.color2}</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ height: 40, borderRadius: 10, background: `linear-gradient(135deg, ${customBg.color1} 0%, ${customBg.color2} 100%)`, marginBottom: 10, border: "1px solid " + theme.border }} />
                  <button onClick={() => setCustomBg({ enabled: false, color1: "#1a1a2e", color2: "#16213e" })} style={{ width: "100%", background: "transparent", border: "1px solid " + theme.border, color: theme.subtext, borderRadius: 10, padding: 8, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>↩️ Reset</button>
                </div>
              )}
            </div>
          </div>

          {/* Global PIN */}
          <div style={{ marginBottom: 24 }}>
            <div style={s.secTitle}>🔐 {t.globalPin}</div>
            <div style={{ background: theme.inputBg, border: "1px solid " + theme.border, borderRadius: 14, padding: "14px" }}>
              <div style={{ fontSize: 13, color: theme.subtext, marginBottom: 12 }}>{t.globalPinDesc}</div>
              {globalPin ? (
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <span style={{ fontSize: 13, color: theme.primary, fontWeight: 700 }}>✅ {t.globalPinActive}</span>
                  </div>
                  <div style={{ marginBottom: 10 }}>
                    <div style={{ fontSize: 12, color: theme.subtext, marginBottom: 6 }}>{t.pinTimeout}</div>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {[0, 1, 5, 15, 30].map((mins, i) => (
                        <button key={mins} onClick={() => setPinTimeout(mins)}
                          style={{ padding: "5px 10px", borderRadius: 10, border: "1px solid " + (pinTimeout === mins ? theme.primary : theme.border), background: pinTimeout === mins ? theme.primary : theme.inputBg, color: pinTimeout === mins ? "#fff" : theme.text, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                          {t.pinTimeoutOptions[i]}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button onClick={() => { setGlobalPin(""); setGlobalUnlocked(false); setPinTimeout(0); }} style={{ width: "100%", background: "#fee2e2", border: "1px solid #fca5a5", color: "#dc2626", borderRadius: 12, padding: "10px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>🗑️ {t.globalPinRemove}</button>
                </div>
              ) : (
                <button onClick={() => setGlobalPinModal({ open: true, input: "", error: false, mode: "setup" })} style={{ width: "100%", background: theme.primary, color: "#fff", border: "none", borderRadius: 12, padding: "10px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>🔐 {t.globalPinSet}</button>
              )}
            </div>
          </div>

          {/* Vibration */}
          <div style={{ marginBottom: 24 }}>
            <div style={s.secTitle}>{t.vibration}</div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: theme.inputBg, border: "1px solid " + theme.border, borderRadius: 14, padding: "12px 16px" }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: theme.text }}>📳 {t.vibration}</div>
                <div style={{ fontSize: 11, color: theme.subtext }}>Android / Mobile</div>
              </div>
              <button
                onClick={() => setVibro(v => !v)}
                style={{ width: 52, height: 28, borderRadius: 14, border: "none", cursor: "pointer", background: vibro ? theme.primary : theme.border, position: "relative", transition: "background .25s" }}
              >
                <div style={{ position: "absolute", top: 3, left: vibro ? 26 : 3, width: 22, height: 22, borderRadius: "50%", background: "#fff", transition: "left .25s", boxShadow: "0 1px 4px rgba(0,0,0,0.2)" }} />
              </button>
            </div>
          </div>

          {/* Card Size */}
          <div style={{ marginBottom: 24 }}>
            <div style={s.secTitle}>{t.cardSize}</div>
            <div style={{ display: "flex", gap: 8 }}>
              {[["small", t.small, "🔹"], ["medium", t.medium, "🔷"], ["large", t.large, "🔶"]].map(([size, label, icon]) => (
                <button key={size} onClick={() => setCardSize(size)} style={{ flex: 1, border: "2px solid " + (cardSize === size ? theme.primary : theme.border), borderRadius: 12, padding: "10px 6px", cursor: "pointer", fontSize: 12, fontWeight: 700, background: cardSize === size ? theme.primarySoft : theme.surface, color: cardSize === size ? theme.primary : theme.text, transition: "all .2s", textAlign: "center" }}>
                  <div style={{ fontSize: size === "small" ? 16 : size === "large" ? 28 : 22, marginBottom: 4 }}>{icon}</div>
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Theme */}
          <div style={{ marginBottom: 24 }}>
            <div style={s.secTitle}>{t.theme}</div>
            <div style={s.themeGrid}>
              {Object.entries(THEMES).map(([key, th]) => (
                <button key={key} onClick={() => setThemeName(key)} style={{ border: "2px solid " + (themeName === key ? theme.primary : theme.border), borderRadius: 12, padding: "10px 6px", cursor: "pointer", fontSize: 11, fontWeight: 700, textAlign: "center", background: themeName === key ? theme.primarySoft : theme.surface, color: themeName === key ? theme.primary : theme.text, transition: "all .2s" }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: th.dot, margin: "0 auto 6px" }} />
                  {th.label}
                </button>
              ))}
            </div>
          </div>

          {/* Language */}
          <div style={{ marginBottom: 24 }}>
            <div style={s.secTitle}>{t.language}</div>
            <div style={s.langRow}>
              {["en", "de"].map(l => (
                <button key={l} onClick={() => setLang(l)} style={{ flex: 1, border: "2px solid " + (lang === l ? theme.primary : theme.border), borderRadius: 10, padding: 8, cursor: "pointer", fontSize: 13, fontWeight: 700, background: lang === l ? theme.primarySoft : theme.surface, color: lang === l ? theme.primary : theme.text, transition: "all .2s" }}>
                  {l === "en" ? "🇬🇧 English" : "🇩🇪 Deutsch"}
                </button>
              ))}
            </div>
          </div>

          {/* Manage Apps + PIN */}
          <div style={{ marginBottom: 24 }}>
            <div style={s.secTitle}>{t.manageApps}</div>
            {apps.length === 0 && <div style={{ color: theme.subtext, fontSize: 13 }}>{t.emptyTitle}</div>}
            {apps.map(app => (
              <div key={app.id}>
                <div style={s.listItem}>
                  <span style={{ fontSize: 22 }}>{app.emoji}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{app.name}</div>
                    <div style={{ fontSize: 11, color: theme.subtext, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{app.url}</div>
                  </div>
                  <button
                    onClick={() => setPinEdit(pinEdit.appId === app.id ? { appId: null, value: "" } : { appId: app.id, value: pins[app.url] || "" })}
                    style={{ background: pins[app.url] ? theme.primarySoft : theme.inputBg, border: "1px solid " + theme.border, color: pins[app.url] ? theme.primary : theme.subtext, width: 30, height: 30, borderRadius: 8, cursor: "pointer", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginRight: 4 }}
                  >🔒</button>
                  <button
                    onClick={() => setEditApp(editApp.appId === app.id ? { appId: null, name: "", url: "", emoji: "" } : { appId: app.id, name: app.name, url: app.url, emoji: app.emoji })}
                    style={{ background: editApp.appId === app.id ? theme.primarySoft : theme.inputBg, border: "1px solid " + theme.border, color: editApp.appId === app.id ? theme.primary : theme.subtext, width: 30, height: 30, borderRadius: 8, cursor: "pointer", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginRight: 4 }}
                  >✏️</button>
                  <button style={s.delBtn} onClick={() => deleteApp(app.id)}>🗑️</button>
                </div>
                {editApp.appId === app.id && (
                  <div style={{ background: theme.inputBg, border: "1px solid " + theme.border, borderRadius: 12, padding: 12, marginBottom: 8, marginTop: -4 }}>
                    <div style={{ fontSize: 12, color: theme.subtext, marginBottom: 8, fontWeight: 700 }}>✏️ App bearbeiten</div>
                    {[["name", "Name", "text"], ["url", "URL", "url"], ["emoji", "Emoji", "text"]].map(([key, label, type]) => (
                      <div key={key} style={{ marginBottom: 8 }}>
                        <label style={{ fontSize: 11, color: theme.subtext, display: "block", marginBottom: 4 }}>{label}</label>
                        <input
                          style={{ ...s.input, fontSize: 13 }}
                          type={type}
                          value={editApp[key]}
                          maxLength={key === "emoji" ? 2 : undefined}
                          onChange={e => setEditApp(p => ({ ...p, [key]: e.target.value }))}
                        />
                      </div>
                    ))}
                    <div style={{ display: "flex", gap: 8 }}>
                      <button onClick={() => setEditApp({ appId: null, name: "", url: "", emoji: "" })} style={{ flex: 1, background: theme.inputBg, border: "1px solid " + theme.border, color: theme.subtext, borderRadius: 10, padding: 8, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Abbrechen</button>
                      <button onClick={saveEditApp} style={{ flex: 1, background: theme.primary, color: "#fff", border: "none", borderRadius: 10, padding: 8, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>✅ Speichern</button>
                    </div>
                  </div>
                )}

                {pinEdit.appId === app.id && (
                  <div style={{ background: theme.inputBg, border: "1px solid " + theme.border, borderRadius: 12, padding: 12, marginBottom: 8, marginTop: -4 }}>
                    <div style={{ fontSize: 12, color: theme.subtext, marginBottom: 6 }}>{t.pinFor}: {app.name}</div>
                    <div style={{ display: "flex", gap: 8 }}>
                      <input
                        style={{ ...s.input, flex: 1, letterSpacing: 4, fontSize: 16 }}
                        type="password"
                        maxLength={4}
                        placeholder={t.pinPlaceholder}
                        value={pinEdit.value}
                        onChange={e => setPinEdit(p => ({ ...p, value: e.target.value.replace(/\D/g, "").slice(0, 4) }))}
                      />
                      <button
                        onClick={() => { if (pinEdit.value.length === 4) { setPins(p => ({ ...p, [app.url]: pinEdit.value })); setPinEdit({ appId: null, value: "" }); } }}
                        style={{ background: theme.primary, color: "#fff", border: "none", borderRadius: 10, padding: "0 14px", cursor: "pointer", fontWeight: 700, fontSize: 13 }}
                      >{t.pinSet}</button>
                      {pins[app.url] && <button
                        onClick={() => { setPins(p => { const n = { ...p }; delete n[app.url]; return n; }); setPinEdit({ appId: null, value: "" }); }}
                        style={{ background: "#fee2e2", color: "#dc2626", border: "none", borderRadius: 10, padding: "0 10px", cursor: "pointer", fontSize: 12, fontWeight: 700 }}
                      >{t.pinRemove}</button>}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Import / Export */}
          <div style={{ marginBottom: 24 }}>
            <div style={s.secTitle}>{t.importExport}</div>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={exportApps} style={{ flex: 1, background: theme.primarySoft, color: theme.primary, border: "1px solid " + theme.border, borderRadius: 12, padding: 10, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>📤 {t.exportBtn}</button>
              <button onClick={generateQr} style={{ flex: 1, background: theme.inputBg, color: theme.text, border: "1px solid " + theme.border, borderRadius: 12, padding: 10, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>📷 {t.qrBtn}</button>
              <button onClick={() => importRef.current.click()} style={{ flex: 1, background: theme.inputBg, color: theme.text, border: "1px solid " + theme.border, borderRadius: 12, padding: 10, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>📥 {t.importBtn}</button>
              <input ref={importRef} type="file" accept=".json" style={{ display: "none" }} onChange={importApps} />
            </div>
          </div>

          {/* Clear Cache */}
          <div style={{ marginBottom: 24 }}>
            <div style={s.secTitle}>Cache</div>
            <button
              onClick={() => {
                if (window.confirm(t.clearCacheConfirm)) {
                  localStorage.clear();
                  sessionStorage.clear();
                  setApps(DEFAULT_APPS);
                  setThemeName("dark");
                  setLang("de");
                  setPins({ "https://rpdashboard.vercel.app": "2026" });
                  alert(t.clearCacheDone);
                }
              }}
              style={{ width: "100%", background: "transparent", border: "2px solid #f59e0b", color: "#f59e0b", borderRadius: 12, padding: 10, fontSize: 14, fontWeight: 700, cursor: "pointer" }}
            >🗑️ {t.clearCache}</button>
          </div>

          {/* Reset */}
          <div style={{ marginBottom: 24 }}>
            <div style={s.secTitle}>Reset</div>
            <button
              onClick={() => { if (window.confirm(t.resetConfirm)) resetApps(); }}
              style={{ width: "100%", background: "transparent", border: "2px solid #dc2626", color: "#dc2626", borderRadius: 12, padding: 10, fontSize: 14, fontWeight: 700, cursor: "pointer" }}
            >{t.resetApps}</button>
          </div>

          <div style={{ textAlign: "center", fontSize: 11, color: theme.subtext, marginTop: 24 }}>Web App Launcher · v3.0</div>
        </div>
      </div>
    </div>
  );
}
