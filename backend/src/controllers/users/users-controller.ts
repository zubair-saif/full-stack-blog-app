import { Request, Response } from 'express';
import { User } from '../../models'


export class UsersController {

  public static async getUsers(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const data = await User.find({});
      res.json({ data: data });
    } catch (error) {
      res.json({ message: `Something went wrong ${error}` });
    }

  }

}