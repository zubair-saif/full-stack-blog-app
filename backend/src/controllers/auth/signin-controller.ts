import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../../models'
import { jwtSecretKey } from '../../config';

export class SignInController {

    public static async SignIn(req: Request, res: Response): Promise<void> {
        try {

            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                res.status(400).json({ message: 'Invalid email or password!' });
                return;
            }
            const validPassword = await bcrypt.compare(req.body.password, user.password);
            if (!validPassword) {
                res.status(400).json({ message: 'Invalid email or password!' });
                return;
            }
            const token = jwt.sign({
                _id: user._id,
                email: user.email,
                type: user.type
            }, jwtSecretKey, {
                expiresIn: 80 * 60 * 24 // 1 oneday, 
            })

            res.json({ token });

        } catch (error) {
            res.json({ message: `Something went wrong ${error}` });
        }

    }

}