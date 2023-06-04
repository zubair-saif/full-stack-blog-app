import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const postSchema = new Schema({

    title: {
        type: String, required: true
    },
    description: {
        type: String, required: true
    },
    createdBy: String,
},
    {
        timestamps: true
    });

const Post = model('Post', postSchema)
export default Post
