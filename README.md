# Nexus - Business Platform

A comprehensive React + TypeScript web application connecting entrepreneurs and investors for deal-making, collaboration, and secure financial transactions.

## 🚀 Project Overview

Nexus is a full-featured platform that streamlines the process of connecting entrepreneurs seeking funding with investors looking for promising opportunities. The platform includes meeting scheduling, video calling, secure document handling, and payment processing.

## 📋 Architecture

### Technology Stack

- **Frontend**: React 18.3 + TypeScript 5.5
- **Build Tool**: Vite 5.4
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React 0.344
- **Calendar**: FullCalendar 6.1
- **Router**: React Router v6
- **State Management**: React Context API
- **Notifications**: React Hot Toast 2.4

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── calendar/       # Meeting scheduling components
│   ├── chat/           # Chat and messaging components
│   ├── collaboration/  # Collaboration request cards
│   ├── documents/      # Document upload, signing, management
│   ├── entrepreneur/   # Entrepreneur-specific components
│   ├── investor/       # Investor-specific components
│   ├── layout/         # Main layout (DashboardLayout, Navbar, Sidebar)
│   ├── onboarding/     # Guided walkthrough and tutorials
│   ├── payment/        # Payment and wallet components
│   ├── security/       # Security-related components
│   ├── ui/            # Base UI components (Button, Card, Badge, etc.)
│   └── video/         # Video calling components
├── pages/              # Page-level components
│   ├── auth/          # Login, Register, Password recovery
│   ├── calendar/      # Calendar management page
│   ├── chat/          # Chat/Messaging page
│   ├── dashboard/     # Role-specific dashboards
│   ├── deals/         # Deal management
│   ├── documents/     # Document management
│   ├── entrepreneurs/ # Browse entrepreneurs
│   ├── help/          # Help & support
│   ├── investors/     # Browse investors
│   ├── messages/      # Message inbox
│   ├── notifications/ # Notification center
│   ├── payment/       # Payment & wallet page
│   ├── profile/       # User profiles
│   ├── security/      # Security settings
│   └── settings/      # Account settings
├── context/            # React Context (Auth, Theme, etc.)
├── data/               # Mock data for development
├── types/              # TypeScript type definitions
├── App.tsx            # Main app component
├── main.tsx           # React entry point
└── index.css          # Global styles
```

## 🎯 Key Features

### Milestone 1: Setup & Foundation ✅
- Responsive design with Tailwind CSS
- Consistent color scheme (primary, secondary, accent, success, warning, error)
- Grid-based layout system
- Typography system

### Milestone 2: Calendar & Meeting Scheduling ✅
- Full calendar view with month/week/day modes
- Set and manage availability slots
- Send/accept/decline meeting requests
- Upcoming meetings display
- Meeting status tracking

### Milestone 3: Video Calling ✅
- Video call UI with mock WebRTC
- Mute/unmute audio
- Camera toggle
- Screen sharing controls
- Call duration timer
- Participant list
- Room ID sharing

### Milestone 4: Document Processing Chamber ✅
- Upload PDF/DOC/DOCX files
- Document preview
- Digital signature pad
- Document status tracking (Draft, In Review, Signed)
- Signature history
- Download documents

### Milestone 5: Payment & Wallet ✅
- Wallet balance display
- Deposit, Withdraw, Transfer functions
- Transaction history with status
- Payment method management
- Funding rounds display
- Investment tracking
- Mock payment flows

### Milestone 6: Security & Access Control ✅
- Password strength meter with requirements
- Two-factor authentication setup (Email, SMS, Authenticator)
- OTP verification (6-digit code)
- Active session management
- Security checklist
- Role-based access (Entrepreneur vs Investor)

### Milestone 7: Integration & Demo Prep ✅
- Guided platform walkthrough
- All modules integrated in navigation
- Responsive across devices
- Comprehensive component library

## 🔐 User Roles

### Entrepreneur
- Dashboard with startup metrics
- Find and connect with investors
- Schedule meetings
- Upload pitch documents
- Manage fundraising rounds
- Track investment deals

### Investor
- Dashboard with portfolio overview
- Browse startup opportunities
- Schedule due diligence meetings
- Review deal documents
- Manage investments
- Track returns

## 🛠️ Component Library

### UI Components (`src/components/ui/`)
- **Button**: Primary, secondary, danger variants
- **Card**: Container with shadow and padding
- **Badge**: Status indicators
- **Input**: Text input with validation
- **Avatar**: User profile pictures

### Layout Components
- **DashboardLayout**: Main layout with sidebar and navbar
- **Navbar**: Top navigation with user menu
- **Sidebar**: Navigation menu with role-based items

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Sidebar hidden on mobile, shown on md and above
- Flexible grid layouts
- Touch-friendly buttons and inputs

## 🎨 Color Scheme

**Primary**: Blue shades (#3B82F6)
**Secondary**: Teal shades (#14B8A6)
**Accent**: Amber shades (#F59E0B)
**Success**: Green (#22C55E)
**Warning**: Yellow (#FBBF24)
**Error**: Red (#EF4444)

## 🔄 Routing

All authenticated routes use DashboardLayout:

```
/                     → Redirect to /login
/login                → Login page
/register             → Registration page
/dashboard/:role      → Role-specific dashboard
/profile/:role/:id    → User profile
/calendar             → Calendar & meetings
/video                → Video calling
/document-chamber     → Document management
/payment              → Wallet & payments
/security             → Security settings
/investors            → Browse investors
/entrepreneurs        → Browse entrepreneurs
/messages             → Chat/messaging
/notifications        → Notification center
/documents            → Document storage
/settings             → Account settings
/help                 → Help & support
/deals                → Deal management
```

## 🎬 Running the Project

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📦 State Management

- **AuthContext**: User authentication and login state
- Local component state with `useState` for UI interactions
- Mock data in `src/data/` for development

## 🔮 Future Enhancements

- Real WebRTC integration for video calls
- Backend API integration
- Real payment processing (Stripe/PayPal)
- Email notifications
- Database persistence
- Analytics dashboard
- Advanced search and filtering
- Message read receipts
- Video call recording
- Document versioning

## 📄 Component Patterns

### Page Components
All page components follow this pattern:
```tsx
export const PageName: React.FC = () => {
  // State
  // Handlers
  // Return JSX with:
  // - Header with gradient
  // - Content area
  // - Modals/dialogs as needed
}
```

### Feature Components
Feature components are self-contained and accept props:
```tsx
interface Props {
  data: Type;
  onAction?: (param: Type) => void;
}

export const FeatureComponent: React.FC<Props> = ({ data, onAction }) => {
  // Implementation
}
```

## 🚀 Deployment

The project includes Vercel configuration. Deploy with:
```bash
npm run build
```
Output in `/dist/` directory.

## 💡 Development Tips

1. **Navigation**: Edit Sidebar.tsx to add new menu items
2. **Routes**: Add new routes in App.tsx
3. **Styling**: Use Tailwind utility classes, modify tailwind.config.js for customization
4. **Types**: Add new types in `src/types/` for each feature
5. **Mock Data**: Add sample data in `src/data/` files

## 📞 Support

For questions or issues, check the Help section in the app or review the code structure above.
"# project-nexus" 
