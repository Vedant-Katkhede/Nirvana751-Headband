import { useState } from "react";

const boatHeadphone = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600";
const boatBlack = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600";
const boatNavy = "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600";
const boatSilver = "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600";

const ORANGE = "#FF5722";

const quotes = [
  { text: "Same thing happened to me after 9 months", name: "Rohan Mehta" },
  { text: "Snapped the exact day my warranty expired", name: "Priya Sharma" },
  { text: "Used it 2 months and the headband just broke", name: "Aditya Kulkarni" },
  { text: "Superglue didn't work, nothing works", name: "Sneha Rajput" },
];

const colorOptions = [
  {
    label: "Black",
    img: boatBlack,
    dot: "#1a1a1a",
  },
  {
    label: "Navy Blue",
    img: boatNavy,
    dot: "#1565C0",
  },
  {
    label: "Silver",
    img: boatSilver,
    dot: "#9e9e9e",
  },
];

const steps = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="16" fill={ORANGE} fillOpacity="0.15" />
        <path d="M10 13h12M10 16h8M10 19h5" stroke={ORANGE} strokeWidth="2" strokeLinecap="round" />
        <rect x="8" y="9" width="16" height="14" rx="2" stroke={ORANGE} strokeWidth="2" />
      </svg>
    ),
    step: "01",
    title: "Order Below",
    desc: "Fill in your details, pick your colour, and hit Place Order.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="16" fill={ORANGE} fillOpacity="0.15" />
        <path d="M12 22c0-4 8-4 8-8a4 4 0 00-8 0" stroke={ORANGE} strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="23" r="1.5" fill={ORANGE} />
      </svg>
    ),
    step: "02",
    title: "We Print It",
    desc: "Your headband is 3D-printed fresh, just for your order.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="16" fill={ORANGE} fillOpacity="0.15" />
        <path d="M8 16l5 5 11-10" stroke={ORANGE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    step: "03",
    title: "Delivered in 1–2 Weeks",
    desc: "Shipped straight to your door anywhere in India.",
  },
];

const faqs = [
  {
    q: "Will it fit my headphones?",
    a: "Yes — this headband is precision-modelled specifically for the boAt Nirvana 751 ANC. It snaps in exactly where the original did.",
  },
  {
    q: "How long does delivery take?",
    a: "We print each order on demand and ship within 3–5 days of payment confirmation. Delivery takes 1–2 weeks to most Indian pincodes.",
  },
  {
    q: "Why no returns?",
    a: "Since every headband is custom 3D-printed for your order, we can't accept returns. But if the part is defective or doesn't fit, we'll make it right — just WhatsApp us.",
  },
  {
    q: "How do I install it?",
    a: "We include a simple installation guide with every order. It involves popping off the ear cups, sliding out the broken headband rails, and snapping in the new one — no tools needed.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{ borderBottom: "1px solid #eee" }}
      className="py-4 cursor-pointer"
      onClick={() => setOpen((v) => !v)}
    >
      <div className="flex items-center justify-between gap-4">
        <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "1rem", color: "#1a1a1a" }}>
          {q}
        </span>
        <span
          style={{
            color: ORANGE,
            fontSize: "1.4rem",
            lineHeight: 1,
            flexShrink: 0,
            transition: "transform 0.2s",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </div>
      {open && (
        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "0.95rem", color: "#555", marginTop: "10px", lineHeight: 1.7 }}>
          {a}
        </p>
      )}
    </div>
  );
}

export default function App() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
    color: "Black",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", background: "#fff", color: "#1a1a1a", overflowX: "hidden" }}>
      {/* NAV */}
      <nav style={{ borderBottom: "1px solid #f0f0f0", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, background: "#fff", zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ background: ORANGE, color: "#fff", borderRadius: 8, padding: "4px 10px", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.02em" }}>
            751 FIX
          </span>
          <span style={{ color: "#888", fontSize: "0.85rem" }}>for boAt Nirvana 751 ANC</span>
        </div>
        <a
          href="#order"
          style={{ background: ORANGE, color: "#fff", padding: "8px 20px", borderRadius: 24, fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", transition: "opacity 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          Order ₹400
        </a>
      </nav>

      {/* HERO */}
      <section style={{ background: "#fff", padding: "60px 24px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="hero-grid">
          <div>
            <div style={{ display: "inline-block", background: "#FFF3EF", color: ORANGE, borderRadius: 20, padding: "4px 14px", fontSize: "0.82rem", fontWeight: 600, marginBottom: 20, letterSpacing: "0.04em" }}>
              🖨️ 3D-Printed Replacement Part
            </div>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, lineHeight: 1.2, color: "#111", marginBottom: 20 }}>
              Your boAt Nirvana 751 ANC Headband Broke.{" "}
              <span style={{ color: ORANGE }}>We Fixed That.</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: 1.7, marginBottom: 32 }}>
              Get a strong 3D-printed replacement delivered to your door for just{" "}
              <strong style={{ color: "#111" }}>₹400</strong>.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a
                href="#order"
                style={{ background: ORANGE, color: "#fff", padding: "14px 32px", borderRadius: 32, fontWeight: 700, fontSize: "1rem", textDecoration: "none", display: "inline-block", boxShadow: "0 4px 20px rgba(255,87,34,0.35)", transition: "opacity 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                Get Mine Now →
              </a>
              <a
                href="#how"
                style={{ color: "#555", padding: "14px 24px", borderRadius: 32, fontWeight: 500, fontSize: "1rem", textDecoration: "none", border: "1px solid #ddd", transition: "border-color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = ORANGE)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "#ddd")}
              >
                How it works
              </a>
            </div>
            <div style={{ marginTop: 28, display: "flex", gap: 24, flexWrap: "wrap" }}>
              {["Ships across India", "Precision fit", "Stronger than original"].map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.85rem", color: "#666" }}>
                  <span style={{ color: ORANGE, fontWeight: 700 }}>✓</span> {t}
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              <img
  src={boatHeadphone}
  alt="boAt Nirvana 751 ANC headphones"
  style={{ width: "100%", maxWidth: 540, height: 460, objectFit: "contain", display: "block", filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.18))" }}
/>
            </div>
          </div>
        </div>
        {/* Wave divider */}
        <div style={{ marginTop: 60 }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
            <path d="M0 30C240 60 480 0 720 30C960 60 1200 0 1440 30V60H0V30Z" fill="#f9f9f9" />
          </svg>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ background: "#f9f9f9", padding: "60px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, color: "#111", marginBottom: 12 }}>
              This is <span style={{ color: ORANGE }}>embarrassingly common.</span>
            </h2>
            <p style={{ color: "#777", fontSize: "1rem" }}>Real people. Real frustration. Sound familiar?</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, marginBottom: 40 }}>
            {quotes.map((q) => (
              <div
                key={q.name}
                style={{ background: "#fff", borderRadius: 16, padding: "24px 20px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", border: "1px solid #eee" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <div style={{ width: 32, height: 32, background: "#f0f0f0", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", fontWeight: 700, color: "#555", flexShrink: 0 }}>
                    {q.name[0]}
                  </div>
                  <span style={{ fontSize: "0.88rem", color: "#333", fontWeight: 700 }}>{q.name}</span>
                </div>
                <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>
                  "{q.text}"
                </p>
              </div>
            ))}
          </div>
          <div style={{ background: "#fff", borderLeft: `4px solid ${ORANGE}`, borderRadius: 12, padding: "20px 24px", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
            <p style={{ fontSize: "1rem", color: "#333", lineHeight: 1.7, margin: 0 }}>
              <strong>boAt doesn't sell this part anywhere.</strong> No repair shop has it. You're stuck — <span style={{ color: ORANGE, fontWeight: 700 }}>until now.</span>
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT */}
      <section id="product" style={{ background: "#fff", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, color: "#111", marginBottom: 12 }}>
              A Real Solution. <span style={{ color: ORANGE }}>Not Tape. Not Glue.</span>
            </h2>
            <p style={{ color: "#666", fontSize: "1rem", maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>
              Precision 3D-printed to fit Nirvana 751 ANC perfectly. Stronger than the original. Pick your color and we ship it to you.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24, marginBottom: 48 }}>
            {colorOptions.map((c) => (
              <div key={c.label} style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.09)", border: "2px solid #f0f0f0", transition: "box-shadow 0.2s, border-color 0.2s", cursor: "pointer" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(255,87,34,0.18)"; (e.currentTarget as HTMLElement).style.borderColor = ORANGE; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.09)"; (e.currentTarget as HTMLElement).style.borderColor = "#f0f0f0"; }}
              >
                <div style={{ height: 220, overflow: "hidden" }}>
                <img
    src={c.img}
    alt={`${c.label} headphones`}
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                 />
                </div>
                <div style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 18, height: 18, borderRadius: "50%", background: c.dot, border: "2px solid #eee", flexShrink: 0 }} />
                  <span style={{ fontWeight: 700, fontSize: "1rem" }}>{c.label}</span>
                  <span style={{ marginLeft: "auto", color: ORANGE, fontWeight: 700, fontSize: "0.95rem" }}>₹400</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16 }}>
            {["PLA+ material", "Snap-in fit", "No tools needed", "Tested by users"].map((f) => (
              <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, background: "#FFF3EF", borderRadius: 12, padding: "12px 16px" }}>
                <span style={{ color: ORANGE, fontWeight: 800, fontSize: "1.1rem" }}>✓</span>
                <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#333" }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{ background: "#f9f9f9", padding: "72px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, color: "#111", marginBottom: 8 }}>
              Simple as it gets.
            </h2>
            <p style={{ color: "#777", fontSize: "1rem" }}>Three steps, no nonsense.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 0, position: "relative" }}>
            {steps.map((s, i) => (
              <div key={s.step} style={{ position: "relative", textAlign: "center", padding: "24px 20px" }}>
                {i < steps.length - 1 && (
                  <div style={{ position: "absolute", top: 52, right: 0, width: "50%", height: 2, background: `linear-gradient(to right, ${ORANGE}88, transparent)`, display: "none" }} className="step-connector" />
                )}
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
                  {s.icon}
                </div>
                <div style={{ color: ORANGE, fontWeight: 800, fontSize: "0.8rem", letterSpacing: "0.1em", marginBottom: 6 }}>
                  STEP {s.step}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "1.1rem", color: "#111", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: "#666", fontSize: "0.9rem", lineHeight: 1.6 }}>{s.desc}</p>
                {i < steps.length - 1 && (
                  <div style={{ textAlign: "center", padding: "8px 0", display: "flex", justifyContent: "center", margin: "16px 0 0" }}>
                    <span style={{ color: ORANGE, fontSize: "1.4rem", fontWeight: 700 }}>→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER FORM */}
      <section id="order" style={{ background: "#FFF3EF", padding: "72px 24px" }}>
        <div style={{ maxWidth: 580, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, color: "#111", marginBottom: 10 }}>
              Order Your Replacement —{" "}
              <span style={{ color: ORANGE }}>₹400 Shipped.</span>
            </h2>
            <p style={{ color: "#666", fontSize: "0.95rem" }}>Fill in your details below and we'll get started.</p>
          </div>

          {submitted ? (
            <div style={{ background: "#fff", borderRadius: 20, padding: "48px 32px", textAlign: "center", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
              <div style={{ fontSize: "3rem", marginBottom: 16 }}>🎉</div>
              <h3 style={{ fontWeight: 700, fontSize: "1.3rem", color: "#111", marginBottom: 12 }}>Order Received!</h3>
              <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.95rem" }}>
                Thanks <strong>{form.name}</strong>! We'll WhatsApp you on <strong>{form.phone}</strong> to confirm and share GPay/UPI details shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ background: "#fff", borderRadius: 20, padding: "36px 32px", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", display: "flex", flexDirection: "column", gap: 18 }}
            >
              {[
                { label: "Your Name", name: "name", type: "text", placeholder: "e.g. Rohit Sharma", required: true },
                { label: "Phone Number", name: "phone", type: "tel", placeholder: "10-digit WhatsApp number", required: true },
                { label: "Delivery Address", name: "address", type: "text", placeholder: "Flat/House, Street, City", required: true },
                { label: "Pincode", name: "pincode", type: "text", placeholder: "e.g. 400001", required: true },
              ].map((f) => (
                <div key={f.name} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <label style={{ fontWeight: 600, fontSize: "0.9rem", color: "#333" }}>{f.label}</label>
                  <input
                    name={f.name}
                    type={f.type}
                    placeholder={f.placeholder}
                    required={f.required}
                    value={(form as any)[f.name]}
                    onChange={handleChange}
                    style={{ border: "1.5px solid #e0e0e0", borderRadius: 10, padding: "11px 14px", fontSize: "0.95rem", outline: "none", fontFamily: "Poppins, sans-serif", transition: "border-color 0.2s" }}
                    onFocus={e => (e.currentTarget.style.borderColor = ORANGE)}
                    onBlur={e => (e.currentTarget.style.borderColor = "#e0e0e0")}
                  />
                </div>
              ))}

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ fontWeight: 600, fontSize: "0.9rem", color: "#333" }}>Colour</label>
                <select
                  name="color"
                  value={form.color}
                  onChange={handleChange}
                  required
                  style={{ border: "1.5px solid #e0e0e0", borderRadius: 10, padding: "11px 14px", fontSize: "0.95rem", outline: "none", fontFamily: "Poppins, sans-serif", background: "#fff", cursor: "pointer", transition: "border-color 0.2s" }}
                  onFocus={e => (e.currentTarget.style.borderColor = ORANGE)}
                  onBlur={e => (e.currentTarget.style.borderColor = "#e0e0e0")}
                >
                  <option value="Black">Black</option>
                  <option value="Navy Blue">Navy Blue</option>
                  <option value="Silver">Silver</option>
                </select>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ fontWeight: 600, fontSize: "0.9rem", color: "#333" }}>Notes (optional)</label>
                <textarea
                  name="notes"
                  placeholder="Anything we should know?"
                  value={form.notes}
                  onChange={handleChange}
                  rows={3}
                  style={{ border: "1.5px solid #e0e0e0", borderRadius: 10, padding: "11px 14px", fontSize: "0.95rem", outline: "none", fontFamily: "Poppins, sans-serif", resize: "vertical", transition: "border-color 0.2s" }}
                  onFocus={e => (e.currentTarget.style.borderColor = ORANGE)}
                  onBlur={e => (e.currentTarget.style.borderColor = "#e0e0e0")}
                />
              </div>

              <button
                type="submit"
                style={{ background: ORANGE, color: "#fff", padding: "14px", borderRadius: 32, fontWeight: 700, fontSize: "1rem", border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(255,87,34,0.35)", fontFamily: "Poppins, sans-serif", transition: "opacity 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                Place Order 🚀
              </button>

              <p style={{ textAlign: "center", fontSize: "0.82rem", color: "#888", margin: 0, lineHeight: 1.6 }}>
                We'll WhatsApp you to confirm and share GPay/UPI details.
                <br />No payment needed right now.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: "#fff", padding: "72px 24px" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, color: "#111", marginBottom: 8 }}>
              Got questions? <span style={{ color: ORANGE }}>We've got answers.</span>
            </h2>
          </div>
          <div style={{ border: "1.5px solid #eee", borderRadius: 16, padding: "8px 28px", background: "#fff" }}>
            {faqs.map((f, i) => (
              <FAQItem key={i} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section style={{ background: ORANGE, padding: "52px 24px", textAlign: "center" }}>
        <h2 style={{ color: "#fff", fontSize: "clamp(1.3rem, 3vw, 2rem)", fontWeight: 800, marginBottom: 16 }}>
          Ready to fix your headphones?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", marginBottom: 28 }}>
          ₹400 all-in. Delivered to your door. WhatsApp confirmation.
        </p>
        <a
          href="#order"
          style={{ background: "#fff", color: ORANGE, padding: "14px 36px", borderRadius: 32, fontWeight: 700, fontSize: "1rem", textDecoration: "none", display: "inline-block", boxShadow: "0 4px 20px rgba(0,0,0,0.15)", transition: "opacity 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.88")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          Order Now — ₹400
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#111", color: "#aaa", padding: "32px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 12 }}>
            <span style={{ background: ORANGE, color: "#fff", borderRadius: 8, padding: "4px 10px", fontWeight: 700, fontSize: "0.85rem" }}>
              751 FIX
            </span>
          </div>
          <p style={{ fontSize: "0.82rem", lineHeight: 1.7, margin: 0 }}>
            Not affiliated with boAt. Made independently for Nirvana 751 ANC users.
            <br />
            <span style={{ color: "#666", fontSize: "0.78rem" }}>
              boAt and Nirvana 751 ANC are trademarks of Imagine Marketing Pvt. Ltd.
            </span>
          </p>
        </div>
      </footer>

      <style>{`
        @media (max-width: 720px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
