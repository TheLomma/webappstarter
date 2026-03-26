import { useState, useEffect } from "react";

const translations = {
  en: {
    title: "Web App Launcher",
    myApps: "MY APPS",
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
    version: "v1.5",
  },
  de: {
    title: "Web App Launcher",
    myApps: "MEINE APPS",
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
    version: "v1.5",
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
const PROTECTED = { "https://rpdashboard.vercel.app": "2026" };

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
    { id: 1, name: "Magic Showrunner", url: "https://magicshowrunnernew.vercel.app", emoji: "🎪" },
    { id: 2, name: "Showrunner Test", url: "https://magicshowrunnertest.vercel.app", emoji: "🧪" },
    { id: 3, name: "Synaptic Tester", url: "https://synaptictester.vercel.app", emoji: "🧠" },
    { id: 4, name: "Reiseplaner", url: "https://reiseplaner-psi.vercel.app", emoji: "✈️" },
    { id: 5, name: "RP Dashboard", url: "https://rpdashboard.vercel.app", emoji: "📊" },
  ];

  const [apps, setApps] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_APPS);
      if (stored) return JSON.parse(stored);
      return DEFAULT_APPS;
    } catch { return DEFAULT_APPS; }
  });
  const [themeName, setThemeName] = useState("dark");
  const [lang, setLang] = useState("de");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [form, setForm] = useState({ name: "", url: "", emoji: "" });
  const [error, setError] = useState("");
  const [pwModal, setPwModal] = useState({ open: false, url: "" });
  const [pwInput, setPwInput] = useState("");
  const [pwError, setPwError] = useState(false);

  const t = translations[lang] || translations.en;
  const theme = THEMES[themeName] || THEMES.dark;
  const isDark = ["dark", "blueDark", "greenDark"].includes(themeName);

  useEffect(() => { localStorage.setItem(STORAGE_APPS,  JSON.stringify(apps)); }, [apps]);
  useEffect(() => { localStorage.setItem(STORAGE_THEME, themeName); }, [themeName]);
  useEffect(() => { localStorage.setItem(STORAGE_LANG,  lang); }, [lang]);

  function toggleDark() {
    const pairs = { light: "dark", dark: "light", blue: "blueDark", blueDark: "blue", green: "greenDark", greenDark: "green" };
    setThemeName(pairs[themeName] || "dark");
  }

  function addApp() {
    if (!form.name.trim() || !form.url.trim()) { setError("Name and URL required."); return; }
    let url = form.url.trim();
    if (!/^https?:\/\//i.test(url)) url = "https://" + url;
    try { new URL(url); } catch { setError("Invalid URL."); return; }
    setApps(prev => [...prev, { id: Date.now(), name: form.name.trim(), url, emoji: form.emoji.trim() || "🌐" }]);
    setForm({ name: "", url: "", emoji: "" });
    setError("");
  }

  function resetApps() { setApps(DEFAULT_APPS); }
  function deleteApp(id) { setApps(prev => prev.filter(a => a.id !== id)); }

  function handleAppClick(e, app) {
    if (PROTECTED[app.url]) {
      e.preventDefault();
      setPwModal({ open: true, url: app.url });
      setPwInput("");
      setPwError(false);
    }
  }

  function submitPassword() {
    if (pwInput === PROTECTED[pwModal.url]) {
      setPwModal({ open: false, url: "" });
      window.open(pwModal.url, "_blank");
    } else {
      setPwError(true);
      setPwInput("");
    }
  }

  const s = {
    body:       { position: "relative", background: theme.bg, minHeight: "100vh", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif", color: theme.text, transition: "background .4s,color .3s" },
    header:     { background: theme.headerBg, backdropFilter: "blur(24px) saturate(180%)", WebkitBackdropFilter: "blur(24px) saturate(180%)", color: theme.headerText, padding: "0 20px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 1px 0 " + theme.border + ", 0 4px 24px rgba(0,0,0,.08)", borderBottom: "1px solid " + theme.border },
    iconBtn:    { background: "rgba(255,255,255,0.18)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.3)", color: theme.headerText, width: 38, height: 38, borderRadius: "50%", cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" },
    main:       { position: "relative", zIndex: 1, padding: "24px 20px", maxWidth: 900, margin: "0 auto" },
    secLabel:   { fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: theme.subtext, marginBottom: 14 },
    grid:       { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(130px,1fr))", gap: 14 },
    card:       { position: "relative", overflow: "hidden", background: theme.surface, backdropFilter: "blur(20px) saturate(180%)", WebkitBackdropFilter: "blur(20px) saturate(180%)", border: "1px solid " + theme.border, borderRadius: 22, padding: "22px 14px", textAlign: "center", cursor: "pointer", textDecoration: "none", color: theme.text, display: "block", boxShadow: "0 4px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.35)", transition: "all .25s cubic-bezier(.34,1.56,.64,1)" },
    overlay:    { position: "fixed", inset: 0, background: "rgba(0,0,0,.5)", zIndex: 200, opacity: drawerOpen ? 1 : 0, pointerEvents: drawerOpen ? "all" : "none", transition: "opacity .3s" },
    drawer:     { position: "fixed", bottom: 0, left: 0, right: 0, background: theme.surface, backdropFilter: "blur(40px) saturate(200%)", WebkitBackdropFilter: "blur(40px) saturate(200%)", borderRadius: "28px 28px 0 0", zIndex: 201, transform: drawerOpen ? "translateY(0)" : "translateY(100%)", transition: "transform .4s cubic-bezier(.34,1.56,.64,1)", maxHeight: "85vh", overflowY: "auto", boxShadow: "0 -4px 40px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.3)", border: "1px solid " + theme.border },
    drawerHead: { padding: "16px 20px 12px", fontSize: 17, fontWeight: 700, color: theme.text, borderBottom: "1px solid " + theme.border, display: "flex", alignItems: "center", justifyContent: "space-between" },
    closeBtn:   { background: theme.primarySoft, border: "none", color: theme.primary, width: 28, height: 28, borderRadius: "50%", cursor: "pointer", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" },
    drawerBody: { padding: "16px 20px 32px" },
    secTitle:   { fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: theme.subtext, marginBottom: 12 },
    input:      { width: "100%", background: theme.inputBg, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1.5px solid " + theme.border, borderRadius: 14, padding: "11px 14px", fontSize: 14, color: theme.text, outline: "none", boxSizing: "border-box", boxShadow: "inset 0 1px 3px rgba(0,0,0,0.06)" },
    addBtn:     { width: "100%", background: theme.primary, color: "#fff", border: "none", borderRadius: 16, padding: 13, fontSize: 15, fontWeight: 700, cursor: "pointer", marginTop: 6, boxShadow: "0 4px 16px rgba(0,0,0,0.18)", letterSpacing: 0.3 },
    themeGrid:  { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 },
    langRow:    { display: "flex", gap: 8 },
    listItem:   { display: "flex", alignItems: "center", gap: 10, padding: "11px 14px", background: theme.inputBg, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderRadius: 14, marginBottom: 8, border: "1px solid " + theme.border, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15)" },
    delBtn:     { background: "#fee2e2", border: "none", color: "#dc2626", width: 30, height: 30, borderRadius: 8, cursor: "pointer", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  };

  return (
    <div style={s.body}>
      <BlobBg isDark={isDark} />

      {pwModal.open && (
        <div style={{ position: "fixed", inset: 0, zIndex: 500, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div onClick={() => setPwModal({ open: false, url: "" })} style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }} />
          <div style={{ position: "relative", zIndex: 1, background: theme.surface, backdropFilter: "blur(40px) saturate(200%)", WebkitBackdropFilter: "blur(40px) saturate(200%)", border: "1px solid " + theme.border, borderRadius: 28, padding: "32px 28px", width: "100%", maxWidth: 340, boxShadow: "0 8px 48px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.3)", textAlign: "center" }}>
            <div style={{ fontSize: 44, marginBottom: 12 }}>🔒</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: theme.text, marginBottom: 6 }}>Gesch\u00fctzter Bereich</div>
            <div style={{ fontSize: 13, color: theme.subtext, marginBottom: 20 }}>Bitte Passwort eingeben um fortzufahren</div>
            <input
              autoFocus
              type="password"
              placeholder="Passwort"
              value={pwInput}
              onChange={e => { setPwInput(e.target.value); setPwError(false); }}
              onKeyDown={e => e.key === "Enter" && submitPassword()}
              style={{ ...s.input, textAlign: "center", fontSize: 18, letterSpacing: 4, marginBottom: 8, border: "1.5px solid " + (pwError ? "#dc2626" : theme.border) }}
            />
            {pwError && <div style={{ color: "#dc2626", fontSize: 12, marginBottom: 8 }}>❌ Falsches Passwort</div>}
            <button onClick={submitPassword} style={{ ...s.addBtn, marginTop: 8 }}>\u00d6ffnen \u2192</button>
            <button onClick={() => setPwModal({ open: false, url: "" })} style={{ marginTop: 10, background: "none", border: "none", color: theme.subtext, fontSize: 13, cursor: "pointer", width: "100%" }}>Abbrechen</button>
          </div>
        </div>
      )}

      <header style={s.header}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 24 }}>🚀</span>
          <div>
            <div style={{ fontSize: 17, fontWeight: 700 }}>{t.title}</div>
            <div style={{ fontSize: 10, opacity: 0.6 }}>{t.version}</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button style={s.iconBtn} onClick={toggleDark}>{isDark ? "☀️" : "🌙"}</button>
          <button style={s.iconBtn} onClick={() => setDrawerOpen(true)}>⚙️</button>
        </div>
      </header>

      <main style={s.main}>
        <div style={s.secLabel}>{t.myApps}</div>
        <div style={s.grid}>
          {apps.length === 0 ? (
            <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "50px 20px", color: theme.subtext }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>📦</div>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{t.emptyTitle}</div>
              <div style={{ fontSize: 13 }}>{t.emptyDesc}</div>
            </div>
          ) : apps.map(app => (
            <a
              key={app.id}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              style={s.card}
              onClick={e => handleAppClick(e, app)}
              onMouseEnter={e => { e.currentTarget.style.background = theme.cardHover; e.currentTarget.style.borderColor = theme.primary; e.currentTarget.style.transform = "translateY(-4px) scale(1.03)"; e.currentTarget.style.boxShadow = "0 12px 36px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.5)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = theme.surface; e.currentTarget.style.borderColor = theme.border; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.35)"; }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "45%", background: "linear-gradient(180deg,rgba(255,255,255,0.18) 0%,transparent 100%)", borderRadius: "22px 22px 0 0", pointerEvents: "none" }} />
              <span style={{ fontSize: 38, display: "block", marginBottom: 10 }}>{app.emoji}</span>
              <span style={{ fontSize: 13, fontWeight: 600, lineHeight: 1.3 }}>{app.name}</span>
            </a>
          ))}
        </div>
      </main>

      <div style={s.overlay} onClick={() => setDrawerOpen(false)} />

      <div style={s.drawer}>
        <div style={{ width: 40, height: 4, background: theme.border, borderRadius: 2, margin: "12px auto 0" }} />
        <div style={s.drawerHead}>
          <span>⚙️ {t.settings}</span>
          <button style={s.closeBtn} onClick={() => setDrawerOpen(false)}>✕</button>
        </div>
        <div style={s.drawerBody}>

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

          <div style={{ marginBottom: 24 }}>
            <div style={s.secTitle}>{t.manageApps}</div>
            {apps.length === 0 && <div style={{ color: theme.subtext, fontSize: 13 }}>{t.emptyTitle}</div>}
            {apps.map(app => (
              <div key={app.id} style={s.listItem}>
                <span style={{ fontSize: 22 }}>{app.emoji}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{app.name}</div>
                  <div style={{ fontSize: 11, color: theme.subtext, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{app.url}</div>
                </div>
                <button style={s.delBtn} onClick={() => deleteApp(app.id)}>🗑️</button>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: 24 }}>
            <div style={s.secTitle}>Reset</div>
            <button
              onClick={() => { if (window.confirm(t.resetConfirm)) resetApps(); }}
              style={{ width: "100%", background: "transparent", border: "2px solid #dc2626", color: "#dc2626", borderRadius: 12, padding: 10, fontSize: 14, fontWeight: 700, cursor: "pointer" }}
            >
              {t.resetApps}
            </button>
          </div>

          <div style={{ textAlign: "center", fontSize: 11, color: theme.subtext, marginTop: 24 }}>Web App Launcher \u00b7 v1.4</div>
        </div>
      </div>
    </div>
  );
}
