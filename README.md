# Owleye
🦉 OwlEye: A real-time web-based telemetry tool for live location, battery, and hardware fingerprinting via a single link." "Advanced OSINT &amp; Digital Forensics tool that captures GPS, battery status, and device fingerprints using Web APIs." "Turn a simple link into a surveillance tool: Track location, monitor battery, and fingerprint devices in rea
# 🦉 OwlEye: Advanced Digital Telemetry & Location Insight

**OwlEye** is a lightweight, high-performance web-based telemetry tool that captures live location, battery status, hardware fingerprint, and network details from a user's device via a single link.

Designed for OSINT (Open Source Intelligence), security auditing, and digital forensics, OwlEye provides a comprehensive view of a target device's environment without requiring any software installation.

## 🌟 Key Features

*   **📍 Live Geolocation:** High-accuracy GPS tracking with continuous streaming (5s intervals).
*   **🔋 Battery Intelligence:** Real-time charge level, charging status, and time-to-charge estimates.
*   **🖥️ Hardware Fingerprinting:**
    *   GPU Renderer ID (WebGL)
    *   CPU Core Count & RAM Estimation
    *   Canvas Fingerprinting for persistent device ID
    *   Screen Resolution & Color Depth
*   **📡 Network Profiling:** ISP detection, connection speed (downlink), effective type (3G/4G), and latency.
*   **📸 Media Enumeration:** Lists all connected cameras and microphones with hardware labels.
*   **🕵️ Session Persistence:** Unique session IDs that survive browser restarts via `localStorage`.
*   **🎨 Dynamic Theming:** 4 visual themes (Cyberpunk, Ocean, Forest, Monochrome) for UI customization.
*   **📊 Mission Control API:** RESTful backend for real-time data ingestion and session tracking.

## 🏗️ Architecture

*   **Frontend:** Vanilla HTML5, CSS3 (Glassmorphism), and ES6+ JavaScript.
*   **Backend:** Node.js with Express.js.
*   **Database:** In-memory store (Map) for demo purposes. Easily swappable with PostgreSQL, MongoDB, or InfluxDB.
*   **Visualization:** Leaflet.js for live map tracking.

## 🚀 Getting Started

### Prerequisites
*   Node.js (v14+)
*   npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/owleye.git
    cd owleye
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the server:
    ```bash
    npm start
    ```

4.  Access the tool:
    *   **Frontend:** `http://localhost:3000` (Note: The server currently serves the API. For production, serve `index.html` via a static host or add a static file middleware to `server.js`).
    *   **API:** `http://localhost:3000/api`

### Configuration

To change the API endpoint that the frontend sends data to, edit the `CONFIG` object in `index.html`:

```javascript
const CONFIG = {
    API_BASE: 'http://localhost:3000/api', // Change to your deployed backend URL
    TRACK_INTERVAL: 5000, // Update location every 5 seconds
    SESSION_KEY: 'owleye_session_id',
    THEME_KEY: 'owleye_theme'
};
