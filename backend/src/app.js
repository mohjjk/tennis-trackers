const express = require('express');
const session = require('express-session');
const multer = require('multer');
const statsRouter = require('./routes/stats');
const authRouter = require('./routes/auth');
const aiProxyRouter = require('./routes/aiProxy');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.json());
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));

// Authentication routes
app.use('/auth', authRouter);

// Session handling
app.use((req, res, next) => {
    // your session logic here
    next();
});

// Media upload route
app.post('/upload', upload.single('file'), (req, res) => {
    res.send('File uploaded successfully.');
});

// Stats routes
app.use('/stats', statsRouter);

// AI Proxy endpoint
app.use('/ai-proxy', aiProxyRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});