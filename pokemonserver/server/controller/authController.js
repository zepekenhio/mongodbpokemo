const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authController = {
    register: async (req, res) => {
        try {
            const { username, password } = req.body;
            if (!username || !password) {
                return res.status(400).json({ error: 'Username and password are required.' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({ username, password: hashedPassword });
            await newUser.save();

            const token = jwt.sign({ id: newUser._id, username: newUser.username }, process.env.JWT_SECRET || 'your-secret-key', { expiresIn: '1h' });
            res.status(201).json({ token });
        } catch (err) {
            if (err.code === 11000) {
                res.status(400).json({ error: 'Username already exists.' });
            } else {
                res.status(400).json({ error: err.message });
            }
        }
    },

    login: async (req, res) => {
        try {
            const { username, password } = req.body;
            if (!username || !password) {
                return res.status(400).json({ error: 'Username and password are required.' });
            }

            const user = await User.findOne({ username });
            if (!user) {
                return res.status(401).json({ error: 'Invalid credentials.' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ error: 'Invalid credentials.' });
            }

            const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET || 'your-secret-key', { expiresIn: '1h' });
            res.status(200).json({ token });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
};

module.exports = authController;
