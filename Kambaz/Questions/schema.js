import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        _id: String,
        title: String,
        question: String,
        questionType: String,
        points: Number,
        choices: [String],
        quiz: { type: String, ref: "QuizModel" },
        editing: Boolean
    },
    { collection: "questions" }
);
export default schema;