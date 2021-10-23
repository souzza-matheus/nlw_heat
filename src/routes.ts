import express from 'express';
import {AuthenticateUserController} from './controller/AuthenticateUserController';

const router = express.Router();

router.post("/authenticate", new AuthenticateUserController().handle);

export {router};
