/* eslint-disable @next/next/no-img-element */
// E-Robo Wallet — Login / Register (Light Theme)
// Figma: Login 02

import { useState } from "react";
import { useRouter } from "next/router";
import RoboNewLayout, { L } from "@/components/robo-new/RoboNewLayout";

// ── Asset URLs from Figma ─────────────────────────────────────────────────────
const imgIllustrationRobot3 = "https://www.figma.com/api/mcp/asset/1ba37e55-f2ab-4335-bca0-e4c5c9f90de7";
const imgIllustrationBackgroundLight = "https://www.figma.com/api/mcp/asset/f4065cba-627b-4bcc-a641-9fdcbca96ad0";
const imgIllustrationBackground = "https://www.figma.com/api/mcp/asset/7159e9b6-715e-40b2-9047-01d6d1206fc9";
const imgIcon32PxLightUser = "https://www.figma.com/api/mcp/asset/5135b395-5bc6-47a3-b8b5-13b9a96a9a5f";
const imgIcon32PxWatchlists = "https://www.figma.com/api/mcp/asset/58a3f281-a0ad-432d-8f55-0039bad0cfdf";
const imgIcon32PxLightPassword = "https://www.figma.com/api/mcp/asset/5661d968-987c-461c-9083-97c1dce82bc0";

// Social icons as SVG
function FacebookIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" fill="#1877F2" />
    </svg>
  );
}
function GoogleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}
function AppleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.4c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 3.99zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

// ── Form Input ────────────────────────────────────────────────────────────────
function FormInput({ icon, placeholder, type = "text" }: { icon: string; placeholder: string; type?: string }) {
  const [value, setValue] = useState("");
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.8)",
        borderRadius: L.RADIUS_LG,
        height: 55,
        display: "flex",
        alignItems: "center",
        padding: "0 16px",
        gap: 10,
        marginBottom: 12,
      }}
    >
      <img src={icon} alt="" style={{ width: 32, height: 32, flexShrink: 0 }} />
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          background: "transparent",
          color: L.TEXT2,
          fontSize: 15,
          fontFamily: "var(--font-poppins), sans-serif",
        }}
      />
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function RoboNewLogin() {
  const router = useRouter();

  return (
    <RoboNewLayout title="E-Robo Wallet — Register" hideTabBar>
      <div style={{ minHeight: "100vh", padding: "0 25px 40px", position: "relative" }}>
        {/* Robot illustration */}
        <div style={{ position: "relative", height: 300, marginBottom: 20 }}>
          {/* Background hexagon shapes */}
          <div style={{ position: "absolute", left: 44, top: 13, width: 287, height: 287 }}>
            <img src={imgIllustrationBackgroundLight} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
          <div style={{ position: "absolute", left: 81, top: 50, width: 213, height: 213 }}>
            <img src={imgIllustrationBackground} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
          {/* Robot */}
          <div style={{ position: "absolute", left: 64, top: 23, width: 235, height: 235 }}>
            <img src={imgIllustrationRobot3} alt="Robot" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>

        {/* Title */}
        <p
          style={{
            color: L.TEXT,
            fontSize: 32,
            fontWeight: 600,
            textAlign: "center",
            marginBottom: 28,
          }}
        >
          Register
        </p>

        {/* Form fields */}
        <FormInput icon={imgIcon32PxLightUser} placeholder="Username" />
        <FormInput icon={imgIcon32PxWatchlists} placeholder="Email" type="email" />
        <FormInput icon={imgIcon32PxLightPassword} placeholder="Password" type="password" />

        {/* Register button */}
        <button
          onClick={() => router.push("/robo-new")}
          style={{
            width: "100%",
            background: L.TEXT,
            color: "white",
            fontSize: 15,
            fontWeight: 600,
            padding: "16px",
            borderRadius: 40,
            marginTop: 8,
            boxShadow: "0px 20px 30px 0px rgba(25,28,50,0.1)",
          }}
          className="transition-all duration-150 active:scale-[0.97] hover:opacity-90"
        >
          Register
        </button>

        {/* Social logins */}
        <div className="flex items-center justify-center gap-6 mt-6">
          {[
            { Icon: FacebookIcon, bg: "#f0f4ff" },
            { Icon: GoogleIcon, bg: "#f0f4ff" },
            { Icon: AppleIcon, bg: "#f0f4ff" },
          ].map(({ Icon, bg }, i) => (
            <button
              key={i}
              style={{
                width: 54,
                height: 54,
                borderRadius: "50%",
                background: bg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0px 4px 20px rgba(55,62,125,0.08)",
              }}
              className="transition-all duration-150 active:scale-95 hover:opacity-80"
            >
              <Icon />
            </button>
          ))}
        </div>

        {/* Login link */}
        <p style={{ color: L.TEXT3, fontSize: 14, textAlign: "center", marginTop: 20 }}>
          Already have an account?{" "}
          <button
            onClick={() => router.push("/robo-new")}
            style={{ color: L.PRIMARY, fontWeight: 600 }}
            className="hover:opacity-70"
          >
            Log In
          </button>
        </p>
      </div>
    </RoboNewLayout>
  );
}
