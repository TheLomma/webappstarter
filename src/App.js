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
    emojiPlaceholder: "\U0001f310",
    version: "v1.1",
  },
  de: {
    title: "Web App Launcher",
    myApps: "MEINE APPS",
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
    emojiPlaceholder: "\U0001f310",
    version: "v1.1",
  },
};

const THEMES = {
  light:     { bg: "#f0f2f5", surface: "#fff", primary: "#4f46e5", primarySoft: "#ede9fe", text: "#1e1e2e", subtext: "#6b7280", border: "#e5e7eb", headerBg: "#4f46e5", headerText: "#fff", cardHover: "#f5f3ff", inputBg: "#f9fafb", label: "Light", dot: "linear-gradient(135deg,#f0f2f5,#4f46e5)" },
  dark:      { bg: "#0f0f17", surface: "#1c1c2e", primary: "#7c6bf8", primarySoft: "#2d2b4e", text: "#e2e8f0", subtext: "#94a3b8", border: "#2d2d4e", headerBg: "#1c1c2e", headerText: "#e2e8f0", cardHover: "#2d2b4e", inputBg: "#0f0f17", label: "Dark", dot: "linear-gradient(135deg,#1c1c2e,#7c6bf8)" },
  blue:      { bg: "#e8f4fd", surface: "#fff", primary: "#0ea5e9", primarySoft: "#e0f2fe", text: "#0c1a2e", subtext: "#4a6fa5", border: "#bae6fd", headerBg: "#0ea5e9", headerText: "#fff", cardHover: "#e0f2fe", inputBg: "#f0f9ff", label: "Blue", dot: "linear-gradient(135deg,#e0f2fe,#0ea5e9)" },
  blueDark:  { bg: "#060d1a", surface: "#0d1b2e", primary: "#38bdf8", primarySoft: "#0c2a44", text: "#e2f0ff", subtext: "#7db8d8", border: "#1a3a5c", headerBg: "#0d1b2e", headerText: "#e2f0ff", cardHover: "#0c2a44", inputBg: "#060d1a", label: "Blue Dark", dot: "linear-gradient(135deg,#0d1b2e,#38bdf8)" },
  green:     { bg: "#ecfdf5", surface: "#fff", primary: "#10b981", primarySoft: "#d1fae5", text: "#064e3b", subtext: "#059669", border: "#a7f3d0", headerBg: "#10b981", headerText: "#fff", cardHover: "#d1fae5", inputBg: "#f0fdf4", label: "Green", dot: "linear-gradient(135deg,#ecfdf5,#10b981)" },
  greenDark: { bg: "#061410", surface: "#0d2018", primary: "#34d399", primarySoft: "#0a2e1f", text: "#d1fae5", subtext: "#6ee7b7", border: "#134e37", headerBg: "#0d2018", headerText: "#d1fae5", cardHover: "#0a2e1f", inputBg: "#061410", label: "Green Dark", dot: "linear-gradient(135deg,#0d2018,#34d399)" },
};

const STORAGE_APPS  = "wal_apps";
const STORAGE_THEME = "wal_theme";
const STORAGE_LANG  = "wal_lang";

export default function App() {
  const DEFAULT_APPS = [
    { id: 1, name: "Magic Showrunner", url: "https://magicshowrunnernew.vercel.app", emoji: "\U0001f3aa" },
    { id: 2, name: "Showrunner Test", url: "https://magicshowrunnertest.vercel.app", emoji: "\U0001f9ea" },
    { id: 3, name: "Synaptic Tester", url: "https://synaptictester.vercel.app", emoji: "\U0001f9e0" },
    { id: 4, name: "Reiseplaner", url: "https://reiseplaner-psi.vercel.app", emoji: "\u2708\ufe0f" },
    { id: 5, name: "RP Dashboard", url: "https://rpdashboard.vercel.app", emoji: "\U0001f4ca" },
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
    setApps(prev => [...prev, { id: Date.now(), name: form.name.trim(), url, emoji: form.emoji.trim() || "\U0001f310" }]);
    setForm({ name: "", url: "", emoji: "" });
    setError("");
  }

  function resetApps() { setApps(DEFAULT_APPS); }
  function deleteApp(id) { setApps(prev => prev.filter(a => a.id !== id)); }

  const s = {
    body:       { background: theme.bg, minHeight: "100vh", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif", color: theme.text, transition: "background .3s,color .3s" },
    header:     { background: theme.headerBg, color: theme.headerText, padding: "0 20px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 10px rgba(0,0,0,.15)" },
    iconBtn:    { background: "rgba(255,255,255,.18)", border: "none", color: theme.headerText, width: 38, height: 38, borderRadius: "50%", cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" },
    main:       { padding: "24px 20px", maxWidth: 900, margin: "0 auto" },
    secLabel:   { fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1.5px", color: theme.subtext, marginBottom: 14 },
    grid:       { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(130px,1fr))", gap: 14 },
    card:       { background: theme.surface, border: "1px solid " + theme.border, borderRadius: 16, padding: "20px 14px", textAlign: "center", cursor: "pointer", textDecoration: "none", color: theme.text, display: "block", boxShadow: "0 4px 20px rgba(0,0,0,.08)", transition: "all .2s" },
    overlay:    { position: "fixed", inset: 0, background: "rgba(0,0,0,.5)", zIndex: 200, opacity: drawerOpen ? 1 : 0, pointerEvents: drawerOpen ? "all" : "none", transition: "opacity .3s" },
    drawer:     { position: "fixed", bottom: 0, left: 0, right: 0, background: theme.surface, borderRadius: "24px 24px 0 0", zIndex: 201, transform: drawerOpen ? "translateY(0)" : "translateY(100%)", transition: "transform .35s cubic-bezier(.34,1.56,.64,1)", maxHeight: "85vh", overflowY: "auto" },
    drawerHead: { padding: "16px 20px 12px", fontSize: 17, fontWeight: 700, color: theme.text, borderBottom: "1px solid " + theme.border, display: "flex", alignItems: "center", justifyContent: "space-between" },
    closeBtn:   { background: theme.primarySoft, border: "none", color: theme.primary, width: 28, height: 28, borderRadius: "50%", cursor: "pointer", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" },
    drawerBody: { padding: "16px 20px 32px" },
    secTitle:   { fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, color: theme.subtext, marginBottom: 12 },
    input:      { width: "100%", background: theme.inputBg, border: "1.5px solid " + theme.border, borderRadius: 10, padding: "10px 12px", fontSize: 14, color: theme.text, outline: "none", boxSizing: "border-box" },
    addBtn:     { width: "100%", background: theme.primary, color: "#fff", border: "none", borderRadius: 12, padding: 12, fontSize: 15, fontWeight: 700, cursor: "pointer", marginTop: 4 },
    themeGrid:  { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 },
    langRow:    { display: "flex", gap: 8 },
    listItem:   { display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: theme.inputBg, borderRadius: 10, marginBottom: 8, border: "1px solid " + theme.border },
    delBtn:     { background: "#fee2e2", border: "none", color: "#dc2626", width: 30, height: 30, borderRadius: 8, cursor: "pointer", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  };

  return (
    <div style={s.body}>
      <header style={s.header}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 24 }}>\U0001f680</span>
          <div>
            <div style={{ fontSize: 17, fontWeight: 700 }}>{t.title}</div>
            <div style={{ fontSize: 10, opacity: 0.6 }}>{t.version}</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button style={s.iconBtn} onClick={toggleDark}>{isDark ? "\u2600\ufe0f" : "\U0001f319"}</button>
          <button style={s.iconBtn} onClick={() => setDrawerOpen(true)}>\u2699\ufe0f</button>
        </div>
      </header>

      <main style={s.main}>
        <div style={s.secLabel}>{t.myApps}</div>
        <div style={s.grid}>
          {apps.length === 0 ? (
            <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "50px 20px", color: theme.subtext }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>\U0001f4e6</div>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{t.emptyTitle}</div>
              <div style={{ fontSize: 13 }}>{t.emptyDesc}</div>
            </div>
          ) : apps.map(app => (
            <a key={app.id} href={app.url} target="_blank" rel="noopener noreferrer" style={s.card}
              onMouseEnter={e => { e.currentTarget.style.background = theme.cardHover; e.currentTarget.style.borderColor = theme.primary; e.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = theme.surface; e.currentTarget.style.borderColor = theme.border; e.currentTarget.style.transform = "none"; }}>
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
          <span>\u2699\ufe0f {t.settings}</span>
          <button style={s.closeBtn} onClick={() => setDrawerOpen(false)}>\u2715</button>
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
                  {l === "en" ? "\U0001f1ec\U0001f1e7 English" : "\U0001f1e9\U0001f1ea Deutsch"}
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
                <button style={s.delBtn} onClick={() => deleteApp(app.id)}>\U0001f5d1\ufe0f</button>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: 24 }}>
            <div style={s.secTitle}>Reset</div>
            <button onClick={() => { if (window.confirm(t.resetConfirm)) resetApps(); }}
              style={{ width: "100%", background: "transparent", border: "2px solid #dc2626", color: "#dc2626", borderRadius: 12, padding: 10, fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
              {t.resetApps}
            </button>
          </div>

          <div style={{ textAlign: "center", fontSize: 11, color: theme.subtext, marginTop: 24 }}>Web App Launcher \u00b7 v1.1</div>
        </div>
      </div>
    </div>
  );
}
