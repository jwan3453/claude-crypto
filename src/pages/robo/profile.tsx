/* eslint-disable @next/next/no-img-element */
// E-Robo Wallet — Profile / Settings Screen

import { useState } from "react";
import { useRouter } from "next/router";
import RoboLayout, { R, RoboStatusBar } from "@/components/robo/RoboLayout";

function ChevronRight() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke={R.TEXT3} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Toggle({ active, onChange }: { active: boolean; onChange: (v: boolean) => void }) {
  return (
    <button onClick={() => onChange(!active)} style={{ width: 44, height: 24, borderRadius: 999, background: active ? R.ACCENT : "rgba(255,255,255,0.15)", position: "relative", transition: "background 0.2s", flexShrink: 0 }}>
      <div style={{ position: "absolute", top: 3, left: active ? 22 : 3, width: 18, height: 18, borderRadius: "50%", background: active ? "#03313A" : "white", transition: "left 0.2s" }} />
    </button>
  );
}

function SettingRow({ icon, label, value, onClick, toggle, toggleVal, onToggle }: {
  icon: string; label: string; value?: string; onClick?: () => void;
  toggle?: boolean; toggleVal?: boolean; onToggle?: (v: boolean) => void;
}) {
  return (
    <button
      onClick={toggle ? undefined : onClick}
      style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: "14px 0", textAlign: "left", borderBottom: "1px solid rgba(255,255,255,0.04)", cursor: toggle ? "default" : "pointer", transition: "opacity 0.15s" }}
      className={toggle ? "" : "hover:opacity-70 active:opacity-50"}
    >
      <span style={{ fontSize: 18, width: 24, textAlign: "center" }}>{icon}</span>
      <span style={{ color: R.TEXT, fontSize: 14, flex: 1 }}>{label}</span>
      {toggle ? (
        <Toggle active={toggleVal!} onChange={onToggle!} />
      ) : (
        <>
          {value && <span style={{ color: R.TEXT2, fontSize: 13 }}>{value}</span>}
          <ChevronRight />
        </>
      )}
    </button>
  );
}

export default function RoboProfile() {
  const router = useRouter();
  const [biometric, setBiometric] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [priceAlerts, setPriceAlerts] = useState(true);
  const [showLogout, setShowLogout] = useState(false);

  return (
    <RoboLayout title="Profile — E-Robo">
      <RoboStatusBar />

      {/* Header */}
      <div className="px-5 pb-4">
        <h1 style={{ color: R.TEXT, fontSize: 22, fontWeight: 700 }}>Profile</h1>
      </div>

      {/* User Card */}
      <div className="px-5 pb-5">
        <div style={{ background: `linear-gradient(135deg, ${R.PURPLE}88 0%, ${R.BG3} 100%)`, borderRadius: R.RADIUS_LG, padding: "20px", border: "1px solid rgba(255,255,255,0.08)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, borderRadius: "50%", background: `${R.ACCENT}11`, filter: "blur(24px)" }} />
          <div className="flex items-center gap-4">
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: `linear-gradient(135deg, ${R.PURPLE} 0%, ${R.ACCENT} 100%)`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ color: "white", fontSize: 26 }}>👤</span>
            </div>
            <div style={{ flex: 1 }}>
              <div className="flex items-center gap-2">
                <p style={{ color: R.TEXT, fontSize: 18, fontWeight: 700 }}>Alex Carter</p>
                <div style={{ background: `${R.GREEN}22`, borderRadius: 999, padding: "2px 8px" }}>
                  <span style={{ color: R.GREEN, fontSize: 11, fontWeight: 600 }}>✓ Verified</span>
                </div>
              </div>
              <p style={{ color: R.TEXT2, fontSize: 13 }}>alex.carter@email.com</p>
              <p style={{ color: R.TEXT3, fontSize: 11, marginTop: 2 }}>Member since Jan 2024</p>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <div>
              <p style={{ color: R.TEXT2, fontSize: 11 }}>Total P&L</p>
              <p style={{ color: R.GREEN, fontSize: 15, fontWeight: 700 }}>+$8,230</p>
            </div>
            <div>
              <p style={{ color: R.TEXT2, fontSize: 11 }}>Portfolio</p>
              <p style={{ color: R.TEXT, fontSize: 15, fontWeight: 700 }}>$30,798</p>
            </div>
            <div>
              <p style={{ color: R.TEXT2, fontSize: 11 }}>Trades</p>
              <p style={{ color: R.TEXT, fontSize: 15, fontWeight: 700 }}>47</p>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Sections */}
      <div className="px-5">
        {/* Account */}
        <p style={{ color: R.TEXT3, fontSize: 12, fontWeight: 600, letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: 8 }}>Account</p>
        <div style={{ background: R.GLASS, borderRadius: R.RADIUS_LG, padding: "0 16px", marginBottom: 16, border: "1px solid rgba(255,255,255,0.05)" }}>
          <SettingRow icon="✏️" label="Edit Profile" />
          <SettingRow icon="🪪" label="KYC Verification" value="Verified" />
          <SettingRow icon="🔗" label="Connected Wallets" value="3" />
          <SettingRow icon="💳" label="Payment Methods" />
        </div>

        {/* Security */}
        <p style={{ color: R.TEXT3, fontSize: 12, fontWeight: 600, letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: 8 }}>Security</p>
        <div style={{ background: R.GLASS, borderRadius: R.RADIUS_LG, padding: "0 16px", marginBottom: 16, border: "1px solid rgba(255,255,255,0.05)" }}>
          <SettingRow icon="👆" label="Biometric Login" toggle toggleVal={biometric} onToggle={setBiometric} />
          <SettingRow icon="🔑" label="Change PIN" />
          <SettingRow icon="🛡️" label="Two-Factor Auth" value="Enabled" />
          <SettingRow icon="🔐" label="Recovery Phrase" />
        </div>

        {/* Notifications */}
        <p style={{ color: R.TEXT3, fontSize: 12, fontWeight: 600, letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: 8 }}>Notifications</p>
        <div style={{ background: R.GLASS, borderRadius: R.RADIUS_LG, padding: "0 16px", marginBottom: 16, border: "1px solid rgba(255,255,255,0.05)" }}>
          <SettingRow icon="🔔" label="Push Notifications" toggle toggleVal={notifications} onToggle={setNotifications} />
          <SettingRow icon="📊" label="Price Alerts" toggle toggleVal={priceAlerts} onToggle={setPriceAlerts} />
          <SettingRow icon="📰" label="News & Updates" onClick={() => {}} />
        </div>

        {/* Preferences */}
        <p style={{ color: R.TEXT3, fontSize: 12, fontWeight: 600, letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: 8 }}>Preferences</p>
        <div style={{ background: R.GLASS, borderRadius: R.RADIUS_LG, padding: "0 16px", marginBottom: 16, border: "1px solid rgba(255,255,255,0.05)" }}>
          <SettingRow icon="💵" label="Currency" value="USD" />
          <SettingRow icon="🌍" label="Language" value="English" />
          <SettingRow icon="🌙" label="Theme" value="Dark" />
        </div>

        {/* Support */}
        <p style={{ color: R.TEXT3, fontSize: 12, fontWeight: 600, letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: 8 }}>Support</p>
        <div style={{ background: R.GLASS, borderRadius: R.RADIUS_LG, padding: "0 16px", marginBottom: 16, border: "1px solid rgba(255,255,255,0.05)" }}>
          <SettingRow icon="❓" label="Help Center" />
          <SettingRow icon="💬" label="Contact Support" />
          <SettingRow icon="📋" label="Privacy Policy" />
          <SettingRow icon="📄" label="Terms of Service" />
        </div>

        {/* Logout */}
        <button
          onClick={() => setShowLogout(true)}
          style={{ width: "100%", background: `${R.RED}22`, color: R.RED, borderRadius: 999, padding: "14px", fontSize: 15, fontWeight: 700, border: `1px solid ${R.RED}33`, marginBottom: 32, transition: "all 0.15s" }}
          className="hover:bg-[rgba(255,56,129,0.3)] active:scale-[0.98]"
        >
          Log Out
        </button>
      </div>

      {/* Logout Confirm Modal */}
      {showLogout && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 100, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
          <div style={{ background: R.BG2, borderRadius: `${R.RADIUS_LG} ${R.RADIUS_LG} 0 0`, padding: "24px", width: "100%", maxWidth: 390, border: "1px solid rgba(255,255,255,0.08)", borderBottom: "none" }}>
            <h2 style={{ color: R.TEXT, fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Log Out?</h2>
            <p style={{ color: R.TEXT2, fontSize: 14, marginBottom: 24 }}>You will need to login again to access your wallet.</p>
            <div className="flex gap-3">
              <button onClick={() => setShowLogout(false)} style={{ flex: 1, background: R.GLASS, color: R.TEXT2, borderRadius: 999, padding: "13px", fontSize: 15, fontWeight: 600, border: "1px solid rgba(255,255,255,0.08)" }} className="hover:opacity-70">Cancel</button>
              <button onClick={() => router.push("/robo")} style={{ flex: 1, background: R.RED, color: "white", borderRadius: 999, padding: "13px", fontSize: 15, fontWeight: 700 }} className="hover:opacity-85 active:opacity-70">Log Out</button>
            </div>
          </div>
        </div>
      )}
    </RoboLayout>
  );
}
