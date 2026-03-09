/* eslint-disable @next/next/no-img-element */
// E-Robo Wallet — Register / Login — Figma: Login 02
import { useRouter } from "next/router";
import { useState } from "react";
import RoboLiveLayout, { L } from "@/components/robo-live/RoboLiveLayout";

// ── Figma asset URLs ───────────────────────────────────────────────────────
const imgRobot = "https://www.figma.com/api/mcp/asset/d83c6618-4fd6-4635-b88a-ec30de9e0e1d";

// ── Form Input ─────────────────────────────────────────────────────────────
function FormInput({
  placeholder,
  type = "text",
  icon,
  value,
  onChange,
}: {
  placeholder: string;
  type?: string;
  icon: React.ReactNode;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div
      className="flex items-center gap-3"
      style={{
        background: L.CARD,
        borderRadius: L.RADIUS_LG,
        padding: "14px 18px",
        boxShadow: "0px 4px 20px rgba(55,62,125,0.05)",
      }}
    >
      <div style={{ width: 32, height: 32, borderRadius: L.RADIUS_SM, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        {icon}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          flex: 1,
          background: "transparent",
          border: "none",
          outline: "none",
          fontSize: 16,
          color: L.TEXT2,
          fontFamily: "var(--font-poppins), sans-serif",
        }}
      />
    </div>
  );
}

// ── Social Button ──────────────────────────────────────────────────────────
function SocialButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center transition-all duration-150 active:scale-95 hover:opacity-80"
      style={{
        width: 54,
        height: 54,
        borderRadius: "50%",
        background: L.CARD,
        boxShadow: "0px 4px 20px rgba(55,62,125,0.08)",
      }}
    >
      {children}
    </button>
  );
}

export default function RoboLiveLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <RoboLiveLayout title="Register — E-Robo Wallet" hideTabBar>
      {/* Background blur */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", bottom: -50, left: -191, width: 707, height: 486, background: "radial-gradient(ellipse at 30% 70%, rgba(159,157,243,0.2) 0%, transparent 60%)", filter: "blur(50px)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, padding: "0 25px" }}>
        {/* Robot Illustration */}
        <div className="flex items-center justify-center" style={{ paddingTop: 32 }}>
          <div style={{ position: "relative", width: 235, height: 235 }}>
            {/* Hexagon background */}
            <svg
              style={{ position: "absolute", inset: 0 }}
              width="235"
              height="235"
              viewBox="0 0 287 287"
              fill="none"
            >
              <polygon
                points="143.5,0 287,71.75 287,215.25 143.5,287 0,215.25 0,71.75"
                fill="#f8c8d4"
                opacity="0.5"
              />
              <polygon
                points="143.5,37 250,97 250,190 143.5,250 37,190 37,97"
                fill="#f4a0ba"
                opacity="0.35"
              />
            </svg>
            {/* Shadow ellipse */}
            <div
              style={{
                position: "absolute",
                bottom: 24,
                left: "50%",
                transform: "translateX(-50%)",
                width: 120,
                height: 36,
                borderRadius: "50%",
                background: "rgba(240,64,134,0.15)",
                filter: "blur(12px)",
              }}
            />
            {/* Robot */}
            <img
              src={imgRobot}
              alt="Robot"
              style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: 180, height: 180, objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: 32, fontWeight: 700, color: L.TEXT, textAlign: "center", margin: "20px 0 32px" }}>
          Register
        </h1>

        {/* Form */}
        <div className="flex flex-col gap-4">
          <FormInput
            placeholder="Username"
            value={username}
            onChange={setUsername}
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke={L.YELLOW} strokeWidth="1.5" fill={`${L.YELLOW}20`} />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={L.YELLOW} strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            }
          />
          <FormInput
            placeholder="Email"
            type="email"
            value={email}
            onChange={setEmail}
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke={L.GREEN} strokeWidth="1.5" fill={`${L.GREEN}20`} />
                <path d="M3 8l9 6 9-6" stroke={L.GREEN} strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            }
          />
          <FormInput
            placeholder="Password"
            type="password"
            value={password}
            onChange={setPassword}
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="5" y="11" width="14" height="10" rx="2" stroke={L.PRIMARY} strokeWidth="1.5" fill={`${L.PRIMARY}20`} />
                <path d="M8 11V7a4 4 0 118 0v4" stroke={L.PRIMARY} strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="12" cy="16" r="1.5" fill={L.PRIMARY} />
              </svg>
            }
          />

          {/* Register Button */}
          <button
            onClick={() => router.push("/robo-live")}
            className="w-full transition-all duration-150 active:scale-[0.98] hover:opacity-90 mt-2"
            style={{
              background: L.TEXT,
              color: "#fff",
              fontSize: 16,
              fontWeight: 600,
              padding: "16px",
              borderRadius: L.RADIUS_LG,
            }}
          >
            Register
          </button>
        </div>

        {/* Social Login */}
        <div className="flex items-center justify-center gap-6" style={{ marginTop: 28, paddingBottom: 32 }}>
          {/* Facebook */}
          <SocialButton>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" fill="#1877f2" />
            </svg>
          </SocialButton>
          {/* Google */}
          <SocialButton>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 01-5.279-5.28 5.27 5.27 0 015.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 00-8.934 8.934 8.907 8.907 0 008.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z" fill="#ea4335" />
            </svg>
          </SocialButton>
          {/* Apple */}
          <SocialButton>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.55-1.32 3.08-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" fill={L.TEXT} />
            </svg>
          </SocialButton>
        </div>
      </div>
    </RoboLiveLayout>
  );
}
