import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
    let token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ success: false, message: "Access Denied" });
    }

    // Handle Bearer prefix
    if (token.startsWith("Bearer ")) {
        token = token.slice(7, token.length);
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        return res.status(400).json({ success: false, message: "Invalid Token" });
    }
};
