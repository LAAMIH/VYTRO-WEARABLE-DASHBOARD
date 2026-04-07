# Vytro Wearable Dashboard - Context for Antigravity

Hello fellow Antigravity instance! Use this file to understand the current state of the Vytro Wearable Dashboard project and assist the user with further iteration.

## Project Overview
This project is a desktop dashboard application called "Vytro" for an embedded systems course. It's built with HTML, CSS (Vanilla), and JavaScript (Vanilla). The design aesthetic is a greenish glassmorphism theme aimed at looking premium, dynamic, and modern. 

It interfaces with an ESP32 wearable device to capture real-time vital signs and provide emergency alerts.

## File Structure
- `index.html`: The main single-page application structure including all modals, tabs, widgets, and layout.
- `styles.css`: The styling engine featuring CSS variables, glassmorphism (`.glass-panel`), responsive layouts, and CSS animations.
- `app.js`: The application logic handling UI state, data processing, hardware connectivity (USB/BLE), and the manual simulation engine.

## Core Features Implemented So Far

### 1. UI & Navigation Layer
- **Login Screen**: Passcode/username authentication screen that transitions smoothly to the main dashboard.
- **Glassmorphism Theme**: Robust CSS implementation of blurred backgrounds with neon green (`var(--accent-primary)`) as the core accent.
- Tab-based navigation swapping between Dashboard, Profile, and Symptom Search.

### 2. Dashboard Interface (`tab-dashboard`)
- Real-time display of Heart Rate, Blood O2, Skin Temperature, and Stress Levels.
- Live-updating Chart.js integration for Heart Rate trends (`#chart-hr`).
- Fall detection status panel that updates dynamically based on the data payload.

### 3. Patient Profile Management (`tab-profile`)
- Comprehensive edit mode toggling to modify user states.
- Strict input validation for physical metrics (height/weight) and emergency contact phone numbers (10 digits).
- Dynamic BMI calculation and physical status tagging (Underweight, Normal, Overweight, Obese).
- Management of primary Doctor and three secondary emergency contacts.
- Tag-based display for known allergies and input field for pre-existing conditions.

### 4. Symptom Search Engine (`tab-faq`)
- Real-time search bar that filters symptoms based on keywords and titles.
- Structured, vertical display of Immediate Actions and specific food-based recipes/remedies for various symptoms (Fever, Nausea, Insomnia, Muscle Cramps, etc.).

### 5. Emergency & Alert Systems
- **Dynamic SOS Modal**: Automatically triggered on fall detection or critical vitals (e.g., HR > 140 & O2 < 90). It dynamically grabs the exact emergency contacts registered in the profile and simulates a dispatch call.
- **Floating Action Buttons (FAB)**: Persistent quick dials for personal doctor and 911 dispatch, complete with simulated calling modals and ripple animations.

### 6. Hardware & Simulation Engine
- **Manual Simulation Modal**: Slider-based UI to manually push vital payloads and test UI reactions, evaluate alert thresholds, and simulate hardware without physical devices.
- **USB Web Serial API**: Connects to the ESP32 via USB at 115200 baud, parsing incoming JSON streams.
- **Bluetooth Web API (BLE)**: Connects to the ESP32 via the standard Nordic UART Service for wireless testing.

## Next Iteration Steps / Focus Areas
*When the user is ready to iterate, consider focusing on:*
- Implementing Data Persistence (e.g., `localStorage`) so profile edits and data aren't lost on page refresh.
- Refactoring `app.js` if it grows to accommodate more complex data structures.
- Adding historical data viewing or exporting for the course deliverables.
- Integrating external APIs or cloud services if the course requires it.

## System Instructions for Antigravity
1. Maintain the precise greenish glassmorphism design aesthetics as requested.
2. If writing new Javascript logic, ensure it hooks seamlessly into the existing DOM architecture without breaking the simulation engine or hardware events.
3. Prioritize clean, well-documented code that the user can explain for their course.
