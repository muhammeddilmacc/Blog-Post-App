import mongoose, { Schema } from 'mongoose';
import IPost from '../interfaces/post';

const PostSchema: Schema = new Schema(
    {
        title: { type: String, require: true, unique: true },
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        content: { type: String, require: true },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IPost>('Post', PostSchema);