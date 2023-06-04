import express from 'express'
import { UsersController } from '../controllers/users/users-controller';
import { asyncWrapper } from '../middleware/async-wrapper';
import { PostController } from '../controllers/post/post-controller';
import {SignUpController} from '../controllers/auth/signup-controller';
import {SignInController} from '../controllers/auth/signin-controller';


const root = express.Router()

//User 
root.post('/user', [asyncWrapper(UsersController.getUsers)]);

//Post
root.get('/post', [asyncWrapper(PostController.getPost)]);

//auth

root.post('/signup', [asyncWrapper(SignUpController.SignUp)]);
root.post('/signin', [asyncWrapper(SignInController.SignIn)]);

export default root