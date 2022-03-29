// import { Jwt } from 'jsonwebtoken'; 
// import { NextFunction, Request, Response } from 'express';

// const secret = '12345';

// export default const auth = async (req: Request, res: Response, next: NextFunction) => {
//   const token = req.headers.authorization;
  
//   if (!token) return res.status(401).json({ message: 'Token not found' });
  
//   try {
//     const decoded = jwt.verify(token, secret);

//     const verifiedUser = await User.findOne({ where: { email: decoded.data } });

//     if (!verifiedUser) return res.status(401).json({ message: 'Expired or invalid token' });

//     req.user = verifiedUser;

//     next();
//   } catch (e) {
//     return res.status(401).json({ message: 'Expired or invalid token' });
//   }
// };
