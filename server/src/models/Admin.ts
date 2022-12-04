import mongoose, { Schema } from 'mongoose';
import IAdmin from '../interfaces/post';

const AdminSchema: Schema = new Schema(
    {
        username: { type: String, require: true, unique: true },
        password: { type: String, require: true }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IAdmin>('Admin', AdminSchema);