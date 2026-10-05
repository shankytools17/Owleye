const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// In-Memory Store for Demo
const telemetryStore = new Map();
const sessionStore = new Map();

app.post('/api/telemetry', (req, res) => {
    const data = req.body;
    const sessionId = data.sessionId;
    const timestamp = new Date();

    const existingSession = sessionStore.get(sessionId);
    sessionStore.set(sessionId, {
        ...existingSession,
        lastSeen: timestamp,
        location: data.location,
        battery: data.battery,
        device: data.device,
        visitCount: (existingSession?.visitCount || 0) + 1
    });

    if (!telemetryStore.has(sessionId)) telemetryStore.set(sessionId, []);
    const history = telemetryStore.get(sessionId);
    history.push({ timestamp, location: data.location, battery: data.battery?.level });
    if (history.length > 100) history.shift();

    if (data.battery && data.battery.level < 0.2) {
        console.log(`ALERT: Low Battery detected for session ${sessionId}`);
    }

    res.json({ status: 'ok', sessionId });
});

app.get('/api/sessions/:id', (req, res) => {
    const { id } = req.params;
    const session = sessionStore.get(id);
    const history = telemetryStore.get(id) || [];
    if (!session) return res.status(404).json({ error: 'Session not found' });
    res.json({ session, history });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`OwlEye Mission Control running on port ${PORT}`));
