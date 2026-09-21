# Cloth Forward (क्युनिटी क्लॉथ रियूज़)

> **"Give good clothes a second life by connecting unused wardrobes directly to people who need them most."**

Cloth Forward is a full-stack, community-driven clothing reuse platform. A donor can list clean, usable pre-loved clothing from their wardrobe. Seekers can discover suitable items, filter by location, category, size, and condition, submit respectful requests, and coordinate safe public handovers.

---

## 🌟 Key Features

1. **Editorial & Modern Design System**:
   - Palette tailored for Indian urban communities: Deep Forest (`#12231B`), Warm Off-White (`#F7F5EF`), Soft Sage (`#B8C9B5`), Leaf Green (`#5C8D63`), and Warm Terracotta (`#D9785B`).
   - Editorial typography with `Newsreader` display headlines and `Plus Jakarta Sans` UI text.
   - Rounded 18–24px cards, subtle drop shadows, and responsive layouts.

2. **Zero Broken Images Guarantee**:
   - Curated high-resolution fashion imagery with an automatic SVG illustration fallback generator tailored by garment category and color.

3. **Multi-Role Demo Persona Switcher**:
   - **Demo Donor (Aarav Sharma — Pune)**: Lists clothes, manages incoming requests, approves pickups, and tracks impact.
   - **Demo Seeker (Priya Patel — Bengaluru)**: Discovers items, filters by city and size, submits polite requests, and confirms receipt.
   - **Demo Admin (Ananya Sen — Mumbai)**: Analyzes real-time circularity metrics, category distribution, moderates listings, and manages reports.

4. **Multi-Step Donation Flow (`/give`)**:
   - 5-step intuitive flow: **Photos ➔ Details ➔ Pickup ➔ Review ➔ Published**.
   - Photo upload with drag/drop, sample wardrobe presets, and URL options.
   - Live preview card matching the Discover catalog.

5. **Dignified Request & Handover Lifecycle**:
   - Seekers request items with an optional personal message and guidelines agreement.
   - Donors approve requests in their **Activity Dashboard**.
   - Handover instructions with approximate public meeting spots (protecting exact residential addresses).

6. **Impact & Circularity Dashboard (`/impact`)**:
   - Transparent metrics: Garments Reused, Handovers Completed, People Supported, and Fabric Diverted (calculated conservatively at 1.4kg/item).
   - Clear distinction between demo data and methodology.

7. **Admin & Community Console (`/admin`)**:
   - Interactive Recharts bar and line charts.
   - 1-click Hide/Restore moderation and 1-click Demo Data Reseed/Reset with confirmation dialogs.

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18 or higher, tested on v24)
- npm (v9 or higher)

### 1. Installation
```bash
# Clone or navigate to the directory
cd ClothDonate

# Install dependencies
npm install
```

### 2. Running Locally

#### Run Full Stack (Frontend + Express API Server concurrently)
```bash
npm run dev:all
```
- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend API**: [http://localhost:5000](http://localhost:5000)

#### Run Frontend Only (with Local Storage Persistence fallback)
```bash
npm run dev
```

#### Run Backend Server Only
```bash
npm run server
```

---

## 👥 Demo Accounts

Switch between demo personas at any time using the persistent top bar:

| Persona | Name | Role | City & Area | Journey Highlight |
|---|---|---|---|---|
| **Demo Donor** | Aarav Sharma | Donor | Pune (Kothrud) | List new items, approve pending requests, view impact |
| **Demo Seeker** | Priya Patel | Seeker | Bengaluru (Indiranagar) | Filter items, send requests, track approvals |
| **Demo Admin** | Ananya Sen | Admin | Mumbai (Bandra West) | Moderate listings, view analytics charts, reseed data |

---

## 📁 Project Structure

```
ClothDonate/
├── server/
│   └── server.ts                  # Express REST API backend
├── src/
│   ├── components/
│   │   └── common/
│   │       ├── ClothingCard.tsx   # Reusable card with badges, size, location
│   │       ├── Footer.tsx         # Mission, safety pledge, navigation
│   │       ├── ImageWithFallback.tsx # Category-aware SVG illustration fallback
│   │       ├── Modal.tsx          # Accessible dialog with ESC close
│   │       ├── Navbar.tsx         # Sticky header with quick search & CTAs
│   │       ├── RequestModal.tsx   # Request modal with guideline verification
│   │       └── RoleSwitcherBar.tsx# Sticky demo persona switcher
│   ├── context/
│   │   ├── AuthContext.tsx        # Multi-role demo auth state
│   │   └── ToastContext.tsx       # Reusable notification toaster
│   ├── data/
│   │   ├── mockUsers.ts           # Demo profiles (Donor, Seeker, Admin)
│   │   └── seedData.ts            # 24+ realistic listings across 7 Indian cities
│   ├── pages/
│   │   ├── Activity.tsx           # Dashboard: Listings, Requests, Saved, Completed
│   │   ├── Admin.tsx              # Analytics charts, moderation, seed reseed
│   │   ├── ClothingDetail.tsx     # Large gallery, metadata, request trigger
│   │   ├── Discover.tsx           # Search, category chips, size/condition filters
│   │   ├── GiveClothes.tsx        # 5-step donation creation flow
│   │   ├── Guidelines.tsx         # Community safety & clothing guidelines
│   │   ├── Home.tsx               # Landing page with hero collage & trust stats
│   │   ├── HowItWorks.tsx         # Donor & seeker steps, FAQ accordion
│   │   ├── Impact.tsx             # Circularity statistics and methodology
│   │   └── Profile.tsx            # Settings, privacy rules, demo switcher
│   ├── services/
│   │   ├── api.ts                 # Clean API service layer
│   │   └── store.ts               # Local persistence and event bus
│   ├── types/
│   │   └── index.ts               # TypeScript data models
│   ├── App.tsx                    # React Router configuration
│   ├── main.tsx                   # React root entry
│   └── index.css                  # Tailwind styles and typography tokens
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 📡 API Overview

The Express backend provides clean REST endpoints:

- `GET /api/listings` — List all active garments (supports `?includeHidden=true`)
- `GET /api/listings/:id` — Retrieve a specific listing
- `POST /api/listings` — Create a new garment listing
- `PATCH /api/listings/:id` — Update listing metadata/status
- `DELETE /api/listings/:id` — Remove a listing
- `GET /api/requests` — Retrieve requests (filterable by `donorId` or `requesterId`)
- `POST /api/requests` — Submit a new request for an item
- `PATCH /api/requests/:id` — Update status (`approved`, `declined`, `completed`)
- `GET /api/favorites` — Get favorited listing IDs
- `POST /api/favorites/:listingId` — Toggle saved item
- `GET /api/impact` — Retrieve community impact metrics
- `GET /api/activity` — Get real-time community activity feed
- `GET /api/admin/stats` — Retrieve category distribution and growth trends
- `POST /api/admin/reset` — Reset all data back to the clean seed state

---

## 🛡️ Trust & Privacy Architecture

- **No Public Residential Addresses**: Listings only disclose neighborhood names (e.g. *Kothrud, Pune*).
- **Safe Public Meetups**: Pickups are coordinated around public transit hubs, libraries, and community gates.
- **Client-Side Fallback Engine**: If the Express server is offline, the client seamlessly switches to in-browser storage so all interactive flows remain 100% demoable.

---

## 📄 License
MIT Community License. Built for community reuse, dignity, and sustainable circular fashion.
