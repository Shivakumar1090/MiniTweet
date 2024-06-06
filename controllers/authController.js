const User = require("../models/user");
const {hashPassword, comparePassword, generateToken} = require("../utils/auth");

const register = async (req, res) => {
    try {
        console.log("h")
        const { username, password } = req.body;

        const hasUsername = await User.findOne({username});

        if(hasUsername){
            throw new Error('Username already registered');
        }

        const hashedPassword = await hashPassword(password);
        
        const user = new User({ username, password: hashedPassword });
        await user.save();

        return res.status(201).json(user);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        
        if (!user || !(await comparePassword(password, user.password))) {
            throw new Error('Invalid credentials');
        }
        const token = generateToken(user);

        return res.status(200).json({ user, token });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = { register, login };
