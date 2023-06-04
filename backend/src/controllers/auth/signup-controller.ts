import { Request, Response } from 'express';
import { User } from '../../models'
import bcrypt from 'bcrypt'

export class SignUpController {

  public static async SignUp(req: Request, res: Response): Promise<void> {
    try {
      const form = req.body;
      const checkEmail = await User.findOne({ email: form.email });
      if (checkEmail) {
        res.json({ message: "Email Already in use please try with other" });
        return;
      }
      const salt = await bcrypt.genSalt(10);
      const register = await User.create({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: await bcrypt.hash(form.password, salt),
      });
      register.save();
      res.json({ message: "Register Successfully" });

    } catch (error) {
      res.json({ message: `Something went wrong ${error}` });
    }

  }

}