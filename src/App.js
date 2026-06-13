import { useState } from "react";

const COLORS = {
navy: "#0D1B2A",
teal: "#0A9396",
tealLight: "#94D2BD",
cream: "#F8F4F0",
white: "#FFFFFF",
accent: "#E9C46A",
red: "#E76F51",
gray: "#6B7280",
lightGray: "#F1F5F9",
border: "#E2E8F0",
};

const SAMPLE_JOBS = [
{
id: 1,
title: "Senior Forecasting Analyst",
company: "IQVIA",
location: "Gurgaon",
type: "Full-time",
sector: "Pharma Analytics",
salary: "₹18–24 LPA",
referrer: "Priya S.",
referrerRole: "Associate Director, IQVIA",
postedDate: "2 days ago",
tags: ["Forecasting", "Excel", "Oncology"],
description: "Build patient-based models for global pharma clients across Oncology and Rare Disease. Experience with IQVIA MIDAS preferred.",
isHot: true,
},
{
id: 2,
title: "Commercial Analytics Manager",
company: "Axtria",
location: "Bangalore",
type: "Full-time",
sector: "Pharma Analytics",
salary: "₹22–30 LPA",
referrer: "Rahul M.",
referrerRole: "Principal, Axtria",
postedDate: "1 day ago",
tags: ["Commercial Analytics", "Python", "Market Access"],
description: "Lead analytics delivery for top-10 pharma clients. Drive forecasting and market research projects end-to-end.",
isHot: true,
},
{
id: 3,
title: "Life Sciences Analyst",
company: "GlobalData",
location: "Hyderabad",
type: "Full-time",
sector: "Market Research",
salary: "₹8–13 LPA",
referrer: "Sneha K.",
referrerRole: "Senior Analyst, GlobalData",
postedDate: "3 days ago",
tags: ["Market Research", "Epidemiology", "Immunology"],
description: "Research and author therapy area reports for pharma clients. Strong writing and analytical skills required.",
isHot: false,
},
{
id: 4,
title: "Biotech Research Associate",
company: "Novartis GCC",
location: "Hyderabad",
type: "Full-time",
sector: "Pharma R&D",
salary: "₹12–18 LPA",
referrer: "Amit P.",
referrerRole: "Senior Associate, Novartis",
postedDate: "5 days ago",
tags: ["Biotechnology", "R&D", "Molecular Biology"],
description: "Support global research teams at Novartis GCC. Work on biologics pipeline analytics and data management.",
isHot: false,
},
{
id: 5,
title: "Market Access Consultant",
company: "ZS Associates",
location: "Gurgaon / Pune",
type: "Full-time",
sector: "Pharma Consulting",
salary: "₹20–28 LPA",
referrer: "Deepika R.",
referrerRole: "Consultant, ZS Associates",
postedDate: "Today",
tags: ["Market Access", "Payer Strategy", "Launch"],
description: "Drive market access strategy for pharma launches across EU and US markets. Strong payer landscape knowledge needed.",
isHot: true,
},
];

const SECTORS = ["All", "Pharma Analytics", "Market Research", "Pharma R&D", "Pharma Consulting"];
const LOCATIONS = ["All", "Gurgaon", "Bangalore", "Hyderabad", "Pune", "Remote"];

const s = {
app: {
fontFamily: "'Inter', system-ui, sans-serif",
background: COLORS.cream,
minHeight: "100vh",
color: COLORS.navy,
},
nav: {
background: COLORS.navy,
padding: "0 24px",
display: "flex",
alignItems: "center",
justifyContent: "space-between",
height: 60,
position: "sticky",
top: 0,
zIndex: 100,
},
logo: {
color: COLORS.white,
fontWeight: 800,
fontSize: 20,
letterSpacing: "-0.5px",
display: "flex",
alignItems: "center",
gap: 8,
},
logoAccent: { color: COLORS.teal },
navTabs: { display: "flex", gap: 4 },
navTab: (active) => ({
background: active ? COLORS.teal : "transparent",
color: active ? COLORS.white : COLORS.tealLight,
border: "none",
borderRadius: 8,
padding: "6px 14px",
fontSize: 13,
fontWeight: 600,
cursor: "pointer",
transition: "all 0.15s",
}),
hero: {
background: `linear-gradient(135deg, ${COLORS.navy} 0%, #1a3a5c 100%)`,
padding: "48px 24px 40px",
textAlign: "center",
},
heroTag: {
display: "inline-block",
background: COLORS.teal + "22",
color: COLORS.tealLight,
border: `1px solid ${COLORS.teal}44`,
borderRadius: 20,
padding: "4px 14px",
fontSize: 12,
fontWeight: 600,
letterSpacing: "0.5px",
marginBottom: 16,
textTransform: "uppercase",
},
heroTitle: {
color: COLORS.white,
fontSize: 32,
fontWeight: 800,
margin: "0 0 12px",
lineHeight: 1.2,
letterSpacing: "-0.5px",
},
heroSub: {
color: COLORS.tealLight,
fontSize: 15,
margin: "0 0 28px",
maxWidth: 480,
marginLeft: "auto",
marginRight: "auto",
lineHeight: 1.6,
},
searchRow: {
display: "flex",
gap: 8,
maxWidth: 560,
margin: "0 auto",
},
searchInput: {
flex: 1,
padding: "12px 16px",
borderRadius: 10,
border: "none",
fontSize: 14,
background: COLORS.white,
color: COLORS.navy,
outline: "none",
},
searchBtn: {
background: COLORS.teal,
color: COLORS.white,
border: "none",
borderRadius: 10,
padding: "12px 20px",
fontWeight: 700,
fontSize: 14,
cursor: "pointer",
},
statsRow: {
display: "flex",
justifyContent: "center",
gap: 32,
marginTop: 28,
},
stat: { textAlign: "center" },
statNum: { color: COLORS.accent, fontWeight: 800, fontSize: 22 },
statLabel: { color: COLORS.tealLight, fontSize: 12, marginTop: 2 },
main: { maxWidth: 900, margin: "0 auto", padding: "24px 16px" },
filtersRow: {
display: "flex",
gap: 8,
marginBottom: 20,
flexWrap: "wrap",
alignItems: "center",
},
filterLabel: { fontSize: 12, color: COLORS.gray, fontWeight: 600, marginRight: 4 },
filterChip: (active) => ({
background: active ? COLORS.teal : COLORS.white,
color: active ? COLORS.white : COLORS.navy,
border: `1.5px solid ${active ? COLORS.teal : COLORS.border}`,
borderRadius: 20,
padding: "5px 14px",
fontSize: 12,
fontWeight: 600,
cursor: "pointer",
transition: "all 0.15s",
}),
jobCard: (hot) => ({
background: COLORS.white,
borderRadius: 14,
padding: "20px",
marginBottom: 14,
border: `1.5px solid ${hot ? COLORS.teal + "44" : COLORS.border}`,
cursor: "pointer",
transition: "box-shadow 0.15s, transform 0.15s",
position: "relative",
}),
hotBadge: {
position: "absolute",
top: 16,
right: 16,
background: COLORS.red,
color: COLORS.white,
fontSize: 10,
fontWeight: 800,
borderRadius: 6,
padding: "2px 8px",
letterSpacing: "0.5px",
textTransform: "uppercase",
},
jobTop: { display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 12 },
companyIcon: {
width: 44,
height: 44,
borderRadius: 10,
background: COLORS.navy,
display: "flex",
alignItems: "center",
justifyContent: "center",
color: COLORS.teal,
fontWeight: 800,
fontSize: 15,
flexShrink: 0,
},
jobTitle: { fontWeight: 700, fontSize: 16, color: COLORS.navy, marginBottom: 2 },
jobMeta: { color: COLORS.gray, fontSize: 13 },
jobDesc: { color: COLORS.gray, fontSize: 13, lineHeight: 1.6, marginBottom: 14 },
tagsRow: { display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 14 },
tag: {
background: COLORS.lightGray,
color: COLORS.navy,
borderRadius: 6,
padding: "3px 10px",
fontSize: 12,
fontWeight: 500,
},
referrerBox: {
background: COLORS.teal + "11",
border: `1px solid ${COLORS.teal}33`,
borderRadius: 10,
padding: "10px 14px",
display: "flex",
alignItems: "center",
justifyContent: "space-between",
marginBottom: 14,
},
referrerInfo: { fontSize: 13 },
referrerName: { fontWeight: 700, color: COLORS.teal },
referrerRole: { color: COLORS.gray, fontSize: 12 },
salaryChip: {
background: COLORS.accent + "22",
color: "#7a5c00",
borderRadius: 8,
padding: "4px 10px",
fontSize: 13,
fontWeight: 700,
},
cardFooter: { display: "flex", justifyContent: "space-between", alignItems: "center" },
applyBtn: {
background: COLORS.teal,
color: COLORS.white,
border: "none",
borderRadius: 8,
padding: "8px 18px",
fontWeight: 700,
fontSize: 13,
cursor: "pointer",
},
postedDate: { color: COLORS.gray, fontSize: 12 },
overlay: {
position: "fixed", inset: 0, background: "#00000066",
display: "flex", alignItems: "center", justifyContent: "center",
zIndex: 200, padding: 16,
},
modal: {
background: COLORS.white,
borderRadius: 16,
padding: 28,
maxWidth: 520,
width: "100%",
maxHeight: "90vh",
overflowY: "auto",
},
modalTitle: { fontWeight: 800, fontSize: 20, marginBottom: 4 },
modalSub: { color: COLORS.gray, fontSize: 14, marginBottom: 20 },
inputLabel: { fontWeight: 600, fontSize: 13, color: COLORS.navy, marginBottom: 6, display: "block" },
input: {
width: "100%", padding: "10px 14px", borderRadius: 8,
border: `1.5px solid ${COLORS.border}`, fontSize: 14,
outline: "none", marginBottom: 14, boxSizing: "border-box",
fontFamily: "inherit",
},
textarea: {
width: "100%", padding: "10px 14px", borderRadius: 8,
border: `1.5px solid ${COLORS.border}`, fontSize: 14,
outline: "none", marginBottom: 14, boxSizing: "border-box",
fontFamily: "inherit", resize: "vertical", minHeight: 90,
},
primaryBtn: {
background: COLORS.teal, color: COLORS.white,
border: "none", borderRadius: 8, padding: "11px 20px",
fontWeight: 700, fontSize: 14, cursor: "pointer", width: "100%",
},
secondaryBtn: {
background: "transparent", color: COLORS.gray,
border: `1.5px solid ${COLORS.border}`, borderRadius: 8,
padding: "10px 20px", fontWeight: 600, fontSize: 14,
cursor: "pointer", marginBottom: 10, width: "100%",
},
aiBox: {
background: `linear-gradient(135deg, ${COLORS.navy}08, ${COLORS.teal}11)`,
border: `1.5px solid ${COLORS.teal}33`,
borderRadius: 12, padding: 16, marginTop: 16,
},
aiTitle: { fontWeight: 700, fontSize: 13, color: COLORS.teal, marginBottom: 8 },
aiText: { fontSize: 13, color: COLORS.navy, lineHeight: 1.6 },
referrerCard: {
background: COLORS.white, borderRadius: 14, padding: 20,
marginBottom: 14, border: `1.5px solid ${COLORS.border}`,
},
referrerCardTop: { display: "flex", gap: 14, alignItems: "center", marginBottom: 12 },
avatar: {
width: 48, height: 48, borderRadius: 24,
background: COLORS.teal, display: "flex",
alignItems: "center", justifyContent: "center",
color: COLORS.white, fontWeight: 800, fontSize: 18,
},
pricingGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 20 },
pricingCard: (highlight) => ({
background: highlight ? COLORS.navy : COLORS.white,
border: `2px solid ${highlight ? COLORS.teal : COLORS.border}`,
borderRadius: 14, padding: 20,
color: highlight ? COLORS.white : COLORS.navy,
}),
pricingName: { fontWeight: 700, fontSize: 15, marginBottom: 4 },
pricingPrice: { fontSize: 26, fontWeight: 800, marginBottom: 4 },
pricingPer: { fontSize: 12, opacity: 0.6, marginBottom: 14 },
pricingFeature: { fontSize: 13, marginBottom: 6, display: "flex", gap: 6 },
upgradeBtn: (highlight) => ({
background: highlight ? COLORS.teal : COLORS.lightGray,
color: highlight ? COLORS.white : COLORS.navy,
border: "none", borderRadius: 8, padding: "9px 0",
fontWeight: 700, fontSize: 13, cursor: "pointer",
width: "100%", marginTop: 14,
}),
};

async function generateCoverLetter(job, candidate) {
const response = await fetch("https://api.anthropic.com/v1/messages", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
model: "claude-sonnet-4-6",
max_tokens: 1000,
messages: [{
role: "user",
content: `Write a short, punchy 3-paragraph cover letter for this job application. Make it specific and compelling, not generic.

Job: ${job.title} at ${job.company}
Sector: ${job.sector}
Job Description: ${job.description}
Key Skills Required: ${job.tags.join(", ")}

Candidate Name: ${candidate.name}
Candidate Experience: ${candidate.experience}
Candidate Skills: ${candidate.skills}

Keep it under 200 words. Professional but not stiff. Start directly with a strong opening, no "Dear Hiring Manager" preamble.`
}]
})
});
const data = await response.json();
return data.content?.[0]?.text || "Could not generate cover letter.";
}

function JobCard({ job, onApply }) {
const domainMap = {
"IQVIA": "iqvia.com",
"Axtria": "axtria.com",
"GlobalData": "globaldata.com",
"Novartis GCC": "novartis.com",
"ZS Associates": "zs.com",
};
const domain = domainMap[job.company];
const logoUrl = domain ? `https://logo.clearbit.com/${domain}` : null;

return (
<div style={s.jobCard(job.isHot)}>
{job.isHot && <span style={s.hotBadge}>🔥 Hot</span>}
<div style={s.jobTop}>
<div style={{
...s.companyIcon,
background: logoUrl ? COLORS.white : COLORS.navy,
border: logoUrl ? `1.5px solid ${COLORS.border}` : "none",
overflow: "hidden",
padding: 4,
}}>
{logoUrl ? (
<img
src={logoUrl}
alt={job.company}
style={{ width: "100%", height: "100%", objectFit: "contain" }}
onError={(e) => { e.target.style.display = "none"; e.target.parentNode.innerText = job.company.slice(0,2).toUpperCase(); }}
/>
) : (
job.company.slice(0, 2).toUpperCase()
)}
</div>

<div>
<div style={s.jobTitle}>{job.title}</div>
<div style={s.jobMeta}>{job.company} · {job.location} · {job.type}</div>
</div>
</div>
<p style={s.jobDesc}>{job.description}</p>
<div style={s.tagsRow}>
{job.tags.map(t => <span key={t} style={s.tag}>{t}</span>)}
</div>
<div style={s.referrerBox}>
<div style={s.referrerInfo}>
<div>🤝 Referred by <span style={s.referrerName}>{job.referrer}</span></div>
<div style={s.referrerRole}>{job.referrerRole}</div>
</div>
<span style={s.salaryChip}>{job.salary}</span>
</div>
<div style={s.cardFooter}>
<span style={s.postedDate}>Posted {job.postedDate}</span>
<button style={s.applyBtn} onClick={() => onApply(job)}>Apply with Referral →</button>
</div>
</div>
);
}

function ApplyModal({ job, onClose }) {
const [step, setStep] = useState(1);
const [form, setForm] = useState({ name: "", experience: "", skills: "", why: "" });
const [coverLetter, setCoverLetter] = useState("");
const [loading, setLoading] = useState(false);
const [applied, setApplied] = useState(false);

const handleGenerate = async () => {
setLoading(true);
const cl = await generateCoverLetter(job, form);
setCoverLetter(cl);
setLoading(false);
setStep(3);
};

if (applied) return (
<div style={s.overlay}>
<div style={s.modal}>
<div style={{ textAlign: "center", padding: "20px 0" }}>
<div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
<div style={{ fontWeight: 800, fontSize: 20, marginBottom: 8 }}>Application Sent!</div>
<div style={{ color: COLORS.gray, fontSize: 14, marginBottom: 24 }}>
Your application for <strong>{job.title}</strong> at <strong>{job.company}</strong> has been forwarded to <strong>{job.referrer}</strong> for internal referral.
</div>
<button style={s.primaryBtn} onClick={onClose}>Back to Jobs</button>
</div>
</div>
</div>
);

return (
<div style={s.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
<div style={s.modal}>
{step === 1 && (<>
<div style={s.modalTitle}>Apply via Referral</div>
<div style={s.modalSub}>{job.title} at {job.company} · via {job.referrer}</div>
<label style={s.inputLabel}>Your Full Name</label>
<input style={s.input} placeholder="e.g. Vipin Sharma" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
<label style={s.inputLabel}>Years of Experience & Background</label>
<input style={s.input} placeholder="e.g. 8 years in pharma forecasting at ZS, Axtria" value={form.experience} onChange={e => setForm({ ...form, experience: e.target.value })} />
<label style={s.inputLabel}>Key Skills</label>
<input style={s.input} placeholder="e.g. Patient-based modelling, Monte Carlo, Oncology" value={form.skills} onChange={e => setForm({ ...form, skills: e.target.value })} />
<button style={s.primaryBtn} onClick={() => setStep(2)} disabled={!form.name || !form.experience}>
Next: AI Cover Letter →
</button>
<button style={{ ...s.secondaryBtn, marginTop: 8, marginBottom: 0 }} onClick={onClose}>Cancel</button>
</>)}

{step === 2 && (<>
<div style={s.modalTitle}>Generate Cover Letter</div>
<div style={s.modalSub}>Our AI will write a tailored cover letter for this specific role</div>
<div style={{ background: COLORS.lightGray, borderRadius: 10, padding: 14, marginBottom: 16, fontSize: 13 }}>
<strong>Job:</strong> {job.title} at {job.company}<br />
<strong>Your profile:</strong> {form.experience}
</div>
<button style={s.primaryBtn} onClick={handleGenerate} disabled={loading}>
{loading ? "✨ Generating..." : "✨ Generate AI Cover Letter (Free)"}
</button>
<button style={{ ...s.secondaryBtn, marginTop: 8, marginBottom: 0 }} onClick={() => { setCoverLetter(""); setStep(3); }}>
Skip, apply without cover letter
</button>
</>)}

{step === 3 && (<>
<div style={s.modalTitle}>Review & Submit</div>
<div style={s.modalSub}>Your application will be sent via {job.referrer}'s internal referral</div>
{coverLetter && (
<div style={s.aiBox}>
<div style={s.aiTitle}>✨ AI-Generated Cover Letter</div>
<div style={s.aiText}>{coverLetter}</div>
</div>
)}
<div style={{ marginTop: 16 }}>
<button style={s.primaryBtn} onClick={() => setApplied(true)}>
Submit Application →
</button>
<button style={{ ...s.secondaryBtn, marginTop: 8, marginBottom: 0 }} onClick={() => setStep(2)}>
← Back
</button>
</div>
</>)}
</div>
</div>
);
}

function AddJobModal({ onClose, onAdd }) {
const [form, setForm] = useState({ title: "", company: "", location: "", salary: "", tags: "", description: "", referrerName: "", referrerRole: "" });
const [submitted, setSubmitted] = useState(false);

const handleSubmit = () => {
onAdd({
id: Date.now(),
...form,
tags: form.tags.split(",").map(t => t.trim()),
sector: "Pharma Analytics",
type: "Full-time",
referrer: form.referrerName,
postedDate: "Just now",
isHot: false,
});
setSubmitted(true);
};

if (submitted) return (
<div style={s.overlay}>
<div style={s.modal}>
<div style={{ textAlign: "center", padding: 20 }}>
<div style={{ fontSize: 48, marginBottom: 12 }}>✅</div>
<div style={{ fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Job Posted!</div>
<div style={{ color: COLORS.gray, fontSize: 14, marginBottom: 20 }}>Your internal opening is now live for candidates to apply.</div>
<button style={s.primaryBtn} onClick={onClose}>Done</button>
</div>
</div>
</div>
);

return (
<div style={s.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
<div style={s.modal}>
<div style={s.modalTitle}>Post an Internal Opening</div>
<div style={s.modalSub}>Share a role from your company with the RefHire network</div>
<label style={s.inputLabel}>Job Title</label>
<input style={s.input} placeholder="e.g. Senior Forecasting Analyst" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
<label style={s.inputLabel}>Company</label>
<input style={s.input} placeholder="e.g. IQVIA" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
<label style={s.inputLabel}>Location</label>
<input style={s.input} placeholder="e.g. Gurgaon / Remote" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} />
<label style={s.inputLabel}>Salary Range</label>
<input style={s.input} placeholder="e.g. ₹18–24 LPA" value={form.salary} onChange={e => setForm({ ...form, salary: e.target.value })} />
<label style={s.inputLabel}>Skills / Tags (comma separated)</label>
<input style={s.input} placeholder="e.g. Forecasting, Oncology, Excel" value={form.tags} onChange={e => setForm({ ...form, tags: e.target.value })} />
<label style={s.inputLabel}>Job Description</label>
<textarea style={s.textarea} placeholder="Brief role description..." value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} />
<label style={s.inputLabel}>Your Name (Referrer)</label>
<input style={s.input} placeholder="e.g. Priya S." value={form.referrerName} onChange={e => setForm({ ...form, referrerName: e.target.value })} />
<label style={s.inputLabel}>Your Role</label>
<input style={s.input} placeholder="e.g. Associate Director, IQVIA" value={form.referrerRole} onChange={e => setForm({ ...form, referrerRole: e.target.value })} />
<button style={s.primaryBtn} onClick={handleSubmit} disabled={!form.title || !form.company || !form.referrerName}>
Post Opening →
</button>
<button style={{ ...s.secondaryBtn, marginTop: 8, marginBottom: 0 }} onClick={onClose}>Cancel</button>
</div>
</div>
);
}

function PricingTab() {
const plans = [
{
name: "Free",
price: "₹0",
per: "forever",
features: ["Browse all jobs", "See referrer name", "1 application/month", "Basic profile"],
highlight: false,
},
{
name: "Pro",
price: "₹199",
per: "per month",
features: ["Unlimited applications", "Direct referrer contact", "AI cover letter (unlimited)", "Priority listing"],
highlight: true,
},
{
name: "Referrer",
price: "Free",
per: "earn referral bonus",
features: ["Post internal openings", "Track applicants", "Earn 20% of company bonus", "Verified badge"],
highlight: false,
},
{
name: "Company",
price: "₹8,000",
per: "per hire",
features: ["Pre-vetted candidates", "Employee-backed referrals", "Higher retention rate", "Analytics dashboard"],
highlight: false,
},
];

return (
<div style={{ maxWidth: 700, margin: "0 auto", padding: "24px 16px" }}>
<div style={{ textAlign: "center", marginBottom: 8 }}>
<div style={{ fontWeight: 800, fontSize: 22, color: COLORS.navy }}>Simple, Transparent Pricing</div>
<div style={{ color: COLORS.gray, fontSize: 14, marginTop: 6 }}>Revenue model built for scale</div>
</div>
<div style={s.pricingGrid}>
{plans.map(plan => (
<div key={plan.name} style={s.pricingCard(plan.highlight)}>
<div style={s.pricingName}>{plan.name}</div>
<div style={s.pricingPrice}>{plan.price}</div>
<div style={s.pricingPer}>{plan.per}</div>
{plan.features.map(f => (
<div key={f} style={s.pricingFeature}>
<span style={{ color: COLORS.teal }}>✓</span> {f}
</div>
))}
<button style={s.upgradeBtn(plan.highlight)}>
{plan.highlight ? "Upgrade to Pro" : "Get Started"}
</button>
</div>
))}
</div>
<div style={{ background: COLORS.white, borderRadius: 14, padding: 20, marginTop: 14, border: `1.5px solid ${COLORS.border}` }}>
<div style={{ fontWeight: 700, marginBottom: 10 }}>💰 Revenue Projection</div>
{[
["100 Pro users/month", "₹19,900/mo"],
["10 successful hires (company fee)", "₹80,000/mo"],
["Referral bonus cuts (20%)", "₹40,000/mo"],
["Total at early scale", "~₹1.4L/mo"],
].map(([label, value]) => (
<div key={label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: `1px solid ${COLORS.border}`, fontSize: 14 }}>
<span style={{ color: COLORS.gray }}>{label}</span>
<span style={{ fontWeight: 700, color: COLORS.teal }}>{value}</span>
</div>
))}
</div>
</div>
);
}

export default function App() {
const [tab, setTab] = useState("jobs");
const [jobs, setJobs] = useState(SAMPLE_JOBS);
const [search, setSearch] = useState("");
const [sector, setSector] = useState("All");
const [location, setLocation] = useState("All");
const [applyJob, setApplyJob] = useState(null);
const [showAddJob, setShowAddJob] = useState(false);

const filtered = jobs.filter(j => {
const q = search.toLowerCase();
const matchSearch = !q || j.title.toLowerCase().includes(q) || j.company.toLowerCase().includes(q) || j.tags.some(t => t.toLowerCase().includes(q));
const matchSector = sector === "All" || j.sector === sector;
const matchLocation = location === "All" || j.location.includes(location);
return matchSearch && matchSector && matchLocation;
});

return (
<div style={s.app}>
<nav style={s.nav}>
<div style={s.logo}>
<span style={s.logoAccent}>Ref</span>Hire
<span style={{ background: COLORS.teal + "22", color: COLORS.tealLight, fontSize: 10, borderRadius: 4, padding: "2px 6px", fontWeight: 600 }}>PHARMA</span>
</div>
<div style={s.navTabs}>
{[["jobs", "Jobs"], ["referrers", "Referrers"], ["pricing", "Pricing"]].map(([key, label]) => (
<button key={key} style={s.navTab(tab === key)} onClick={() => setTab(key)}>{label}</button>
))}
</div>
<button style={{ ...s.searchBtn, fontSize: 12, padding: "6px 12px" }} onClick={() => setShowAddJob(true)}>
+ Post Job
</button>
</nav>

{tab === "jobs" && (
<div style={s.hero}>
<div style={s.heroTag}>🤝 Referral-Powered Hiring</div>
<h1 style={s.heroTitle}>Get hired through someone<br />on the inside</h1>
<p style={s.heroSub}>Every job comes with a real employee referral — higher interview rate, faster hiring, better fit.</p>
<div style={s.searchRow}>
<input style={s.searchInput} placeholder="Search jobs, companies, skills..." value={search} onChange={e => setSearch(e.target.value)} />
<button style={s.searchBtn}>Search</button>
</div>
<div style={s.statsRow}>
{[["47", "Live Openings"], ["23", "Companies"], ["89%", "Interview Rate"], ["₹0", "Free to Apply"]].map(([n, l]) => (
<div key={l} style={s.stat}>
<div style={s.statNum}>{n}</div>
<div style={s.statLabel}>{l}</div>
</div>
))}
</div>
</div>
)}

{tab === "jobs" && (
<div style={s.main}>
<div style={s.filtersRow}>
<span style={s.filterLabel}>Sector:</span>
{SECTORS.map(s_ => <button key={s_} style={s.filterChip(sector === s_)} onClick={() => setSector(s_)}>{s_}</button>)}
<span style={{ ...s.filterLabel, marginLeft: 8 }}>City:</span>
{LOCATIONS.map(l => <button key={l} style={s.filterChip(location === l)} onClick={() => setLocation(l)}>{l}</button>)}
</div>
<div style={{ color: COLORS.gray, fontSize: 13, marginBottom: 16 }}>
Showing <strong>{filtered.length}</strong> referral openings
</div>
{filtered.length === 0 ? (
<div style={{ textAlign: "center", padding: 48, color: COLORS.gray }}>
No jobs found. Try different filters.
</div>
) : (
filtered.map(job => <JobCard key={job.id} job={job} onApply={setApplyJob} />)
)}
</div>
)}

{tab === "referrers" && (
<div style={s.main}>
<div style={{ marginBottom: 20 }}>
<div style={{ fontWeight: 800, fontSize: 20, marginBottom: 4 }}>Our Referrer Network</div>
<div style={{ color: COLORS.gray, fontSize: 14 }}>Employees sharing internal openings from their companies</div>
</div>
{[
{ name: "Priya S.", role: "Associate Director", company: "IQVIA", jobs: 3, referrals: 12 },
{ name: "Rahul M.", role: "Principal", company: "Axtria", jobs: 2, referrals: 8 },
{ name: "Sneha K.", role: "Senior Analyst", company: "GlobalData", jobs: 1, referrals: 5 },
{ name: "Amit P.", role: "Senior Associate", company: "Novartis GCC", jobs: 2, referrals: 9 },
{ name: "Deepika R.", role: "Consultant", company: "ZS Associates", jobs: 1, referrals: 6 },
].map(r => (
<div key={r.name} style={s.referrerCard}>
<div style={s.referrerCardTop}>
<div style={s.avatar}>{r.name[0]}</div>
<div>
<div style={{ fontWeight: 700, fontSize: 15 }}>{r.name} <span style={{ background: COLORS.teal + "22", color: COLORS.teal, fontSize: 10, borderRadius: 4, padding: "2px 6px", fontWeight: 600 }}>Verified</span></div>
<div style={{ color: COLORS.gray, fontSize: 13 }}>{r.role} at {r.company}</div>
</div>
</div>
<div style={{ display: "flex", gap: 20, fontSize: 13 }}>
<span>📋 <strong>{r.jobs}</strong> active openings</span>
<span>🤝 <strong>{r.referrals}</strong> successful referrals</span>
</div>
</div>
))}
<div style={{ background: COLORS.navy, borderRadius: 14, padding: 24, textAlign: "center", marginTop: 8 }}>
<div style={{ color: COLORS.white, fontWeight: 800, fontSize: 18, marginBottom: 8 }}>Become a Referrer</div>
<div style={{ color: COLORS.tealLight, fontSize: 14, marginBottom: 16 }}>Share internal openings and earn 20% of your company's referral bonus when candidates get hired.</div>
<button style={{ ...s.primaryBtn, width: "auto", padding: "10px 28px" }} onClick={() => setShowAddJob(true)}>
Post Your First Opening →
</button>
</div>
</div>
)}

{tab === "pricing" && <PricingTab />}

{applyJob && <ApplyModal job={applyJob} onClose={() => setApplyJob(null)} />}
{showAddJob && (
<AddJobModal
onClose={() => setShowAddJob(false)}
onAdd={(job) => { setJobs(prev => [job, ...prev]); setShowAddJob(false); setTab("jobs"); }}
/>
)}
</div>
);
}