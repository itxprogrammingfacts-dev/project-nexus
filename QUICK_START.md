# Quick Start Guide - Nexus Platform

## 🎯 How to Test All Features

### 1. Start the Dev Server
```bash
cd c:\raufee\Nexus-main
npm install  # if not already done
npm run dev
```
The app will be available at **http://localhost:5174**

---

## 📱 Testing Guide

### Login Credentials
Use any email/password combination to login (mock authentication):
- Email: `entrepreneur@example.com`
- Password: `password123`

Or:
- Email: `investor@example.com`
- Password: `password123`

The app will accept any credentials in demo mode.

---

## ✅ Feature Checklist

### **MILESTONE 1: Architecture & Theme**
- [x] Responsive design (view on mobile, tablet, desktop)
- [x] Consistent color scheme (blue, teal, amber)
- [x] Typography system
- [x] Component library

**How to Test:**
- View sidebar navigation
- Try resizing browser window (mobile to desktop)
- Check color consistency across all pages

---

### **MILESTONE 2: Calendar & Meetings**
📍 **Navigation**: Dashboard → Calendar & Meetings (or `/calendar`)

**Features to Test:**
1. **View Calendar**
   - [ ] Switch between Month/Week/Day view
   - [ ] Click on meetings to see details
   - [ ] Click "Close" to dismiss modal

2. **Upcoming Meetings**
   - [ ] See list of scheduled meetings
   - [ ] Click to view meeting details
   - [ ] Check meeting types (video, audio, in-person)

3. **Meeting Requests**
   - [ ] See pending meeting requests
   - [ ] Click "Accept" to accept a request
   - [ ] Click "Decline" to decline a request

4. **Availability Slots**
   - [ ] View current availability
   - [ ] Click "Add Slot" button
   - [ ] Select day, start/end time, timezone
   - [ ] Click "Add Availability"
   - [ ] Click trash icon to delete

---

### **MILESTONE 3: Video Calling**
📍 **Navigation**: Dashboard → Video Calls (or `/video`)

**Features to Test:**
1. **Start a Call**
   - [ ] Select a participant (3 shown)
   - [ ] Click "Call" button
   - [ ] See video call interface

2. **Video Call Controls**
   - [ ] Click microphone icon to mute/unmute
   - [ ] Click camera icon to turn video off/on
   - [ ] Click screen share icon
   - [ ] Click participants icon to see list
   - [ ] Watch call duration timer counting up
   - [ ] Click red phone button to end call

3. **Recent Calls**
   - [ ] See history of previous calls
   - [ ] Click phone icon to call again

---

### **MILESTONE 4: Document Chamber**
📍 **Navigation**: Dashboard → Document Chamber (or `/document-chamber`)

**Features to Test:**
1. **Upload Documents**
   - [ ] Click in upload area or "Select files"
   - [ ] Select PDF/DOC file (or drag & drop)
   - [ ] See file listed with size
   - [ ] Click "Upload Files"

2. **View Documents**
   - [ ] See document grid with 3 sample docs
   - [ ] Check document status (Draft/In Review/Signed)
   - [ ] Click "View" to see document preview modal

3. **Sign Documents**
   - [ ] Click "Sign" on a document
   - [ ] Draw signature in canvas area
   - [ ] Click "Sign" button
   - [ ] See "Success" confirmation
   - [ ] Check document status changed to "In Review"

4. **Document Stats**
   - [ ] See counts at top (Total, Signed, In Review, Draft)

---

### **MILESTONE 5: Payment & Wallet**
📍 **Navigation**: Dashboard → Payment & Wallet (or `/payment`)

**Features to Test:**
1. **Wallet Tab**
   - [ ] See wallet balance ($150,000)
   - [ ] Click "Deposit" button
   - [ ] Click "Withdraw" button
   - [ ] Click "Transfer" button
   - [ ] View payment methods
   - [ ] See recent transactions preview

2. **Deposit**
   - [ ] Click "Deposit"
   - [ ] Enter amount (e.g., 1000)
   - [ ] Select "From Account"
   - [ ] Click "Confirm"
   - [ ] Balance increases
   - [ ] New transaction appears

3. **Withdraw**
   - [ ] Click "Withdraw"
   - [ ] Enter amount (e.g., 500)
   - [ ] Click "Confirm"
   - [ ] Status shows "pending"
   - [ ] Transaction appears

4. **Transfer**
   - [ ] Click "Transfer"
   - [ ] Enter amount and recipient name
   - [ ] Add description (optional)
   - [ ] Click "Confirm"
   - [ ] See completed transaction

5. **Transactions Tab**
   - [ ] View all transaction history
   - [ ] See transaction types with icons
   - [ ] Check status indicators
   - [ ] See timestamps

6. **Funding Rounds Tab**
   - [ ] View funding round card
   - [ ] See progress bar (70% funded)
   - [ ] Check investor list
   - [ ] Click "Invest Now"
   - [ ] Enter investment amount
   - [ ] Click "Confirm Investment"
   - [ ] Balance decreases, transaction added

---

### **MILESTONE 6: Security**
📍 **Navigation**: Dashboard → Security (or `/security`)

**Features to Test:**
1. **Password Strength Meter**
   - [ ] Type weak password: `abc`
   - [ ] See "Weak" indicator (red)
   - [ ] Type strong password: `MyPass123@Secure`
   - [ ] See "Strong" indicator (green)
   - [ ] Check all requirements marked ✓
   - [ ] Click "Update Password" button (only enabled for strong)

2. **2FA Setup**
   - [ ] Click "Enable 2FA"
   - [ ] Select method (Email, SMS, or Authenticator)
   - [ ] Enter 6-digit code
   - [ ] See countdown timer (5 minutes)
   - [ ] Click "Verify"
   - [ ] See "Success!" message
   - [ ] 2FA status shows "Enabled"

3. **Active Sessions**
   - [ ] View list of devices/sessions
   - [ ] Current session marked with blue badge
   - [ ] Other sessions show "Logout" button
   - [ ] Click "Logout" on a session
   - [ ] Session removed from list

4. **Security Checklist**
   - [ ] See progress of security items
   - [ ] View: Strong password, 2FA, Email verified, No suspicious activity

---

### **MILESTONE 7: Integration & Navigation**
📍 **All Pages**

**Features to Test:**
1. **Sidebar Navigation**
   - [ ] Dashboard link works
   - [ ] All feature links visible (Calendar, Video, Document Chamber, Payment, Security)
   - [ ] Settings and Help links work
   - [ ] Navigation highlights active page

2. **Mobile Responsiveness**
   - [ ] Resize browser to mobile width (< 768px)
   - [ ] Sidebar disappears
   - [ ] Content takes full width
   - [ ] Buttons and text remain readable

3. **Tablet & Desktop**
   - [ ] Sidebar always visible
   - [ ] Content properly sized
   - [ ] Grid layouts work correctly

---

## 🎬 Demo Flow Script (5 minutes)

1. **Login** (30 sec)
   - Show login page
   - Log in as entrepreneur

2. **Dashboard Overview** (30 sec)
   - Show dashboard metrics
   - Point out navigation

3. **Calendar Demo** (1 min)
   - Switch calendar views
   - Show meeting requests
   - Accept a request
   - Add availability slot

4. **Video Call Demo** (1 min)
   - Start a video call
   - Show call controls
   - End call

5. **Documents Demo** (1 min)
   - Upload a document
   - Sign a document
   - Show signature history

6. **Payment Demo** (1 min)
   - Show wallet balance
   - Make a transfer
   - View transactions
   - Show funding round

7. **Security Demo** (30 sec)
   - Show password strength meter
   - Show 2FA setup
   - View active sessions

---

## 🐛 Troubleshooting

### Port 5174 Already in Use
```bash
# Kill the process on the port
# Windows:
netstat -ano | findstr :5174
taskkill /PID <PID> /F

# Or just try the next available port (Vite will suggest one)
```

### Components Not Showing
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+F5)

### Tailwind Styles Not Applied
- Make sure dev server is running
- Check browser console for errors

### TypeScript Errors
- These are mostly unused import warnings
- App will still run and function properly

---

## 📊 Testing Checklist

Print this and check off as you test:

```
MILESTONE 2: Calendar
  [ ] View calendar (month/week/day)
  [ ] View upcoming meetings
  [ ] Accept/decline meeting requests
  [ ] Add availability slot
  [ ] Delete availability slot

MILESTONE 3: Video Calls
  [ ] Start video call
  [ ] Mute/unmute
  [ ] Camera on/off
  [ ] Screen share
  [ ] View participants
  [ ] End call

MILESTONE 4: Documents
  [ ] Upload document
  [ ] View document
  [ ] Sign document
  [ ] Delete document
  [ ] Download document

MILESTONE 5: Payment
  [ ] Deposit funds
  [ ] Withdraw funds
  [ ] Transfer money
  [ ] View transactions
  [ ] Invest in funding round

MILESTONE 6: Security
  [ ] Test password strength meter
  [ ] Enable 2FA (all 3 methods)
  [ ] Enter OTP code
  [ ] Logout sessions
  [ ] View security checklist

MILESTONE 7: Integration
  [ ] Test all navigation links
  [ ] Responsive on mobile
  [ ] Responsive on tablet
  [ ] Responsive on desktop
  [ ] Guided walkthrough
```

---

## 🎉 You're Ready!

The Nexus platform is fully functional and ready to demonstrate. All 7 milestones are implemented and integrated.

**Happy testing!** 🚀
