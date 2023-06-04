import { Request, Response } from 'express';
import { Post } from '../../models'


export class PostController {

  public static async getPost(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const response = await Post.find({});
      res.json({ data: response });
    } catch (error) {
        res.json({ message: `Something went wrong ${error}` });
    }

  }

    public static async createPost(
      req: Request,
      res: Response
    ): Promise<void> {
      try {
        const create = await Post.create({
          title: req.body.title,
          description: req.body.description,
        });
        await create.save();
        res.json({ data: create });
      } catch (error) {
          res.json({ message: `Something went wrong ${error}` });
      }
  
    }
  
  }