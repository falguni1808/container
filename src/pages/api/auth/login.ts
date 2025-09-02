// import type { NextApiRequest, NextApiResponse } from "next";
// import jwt from "jsonwebtoken";

// const SECRET = "MY_SUPER_SECRET";

// const USER = {
//     email: "falguni@gmail.com",
//     password: "1234",
// };

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method !== "POST") {
//         return res.status(405).json({ message: "Method Not Allowed" });
//     }

//     const { email, password } = req.body;

//     if (email === USER.email && password === USER.password) {
//         const token = jwt.sign({ email }, SECRET, { expiresIn: "1h" });
//         return res.status(200).json({ token, email, password });
//     }

//     return res.status(401).json({ message: "Invalid credentials" });
// }


import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

const SECRET = "MY_SUPER_SECRET";

const USER = {
  email: "falguni@gmail.com",
  password: "1234",
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, password } = req.body;

  if (email === USER.email && password === USER.password) {
    const token = jwt.sign({ email }, SECRET, { expiresIn: "1h" });

    // ✅ set token in cookie
    res.setHeader(
      "Set-Cookie",
      serialize("auth_token", token, {
        httpOnly: true,   // prevent JS access
        secure: process.env.NODE_ENV === "production", // HTTPS only in prod
        sameSite: "strict",
        path: "/",
        maxAge: 60 * 60, // 1 hour
      })
    );

    return res.status(200).json({ email }); // no need to send password/token in body
  }

  return res.status(401).json({ message: "Invalid credentials" });
}
