import { Document } from 'mongoose';
import IAdmin from './admin';

export default interface IPost extends Document {
    title: string;
    author: IAdmin;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}