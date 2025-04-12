import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        _id: String,
        quiz: { type: String, ref: "QuizModel", required: true },
        user: { type: String, ref: "UserModel", required: true },
        answers: [
            {
                question: { type: String, ref: "QuestionModel", required: true },
                answer: String,
                isCorrect: Boolean,
            },
        ],
        score: String,
        attemptNumber: Number,
        timestamp: { type: Date, default: Date.now },
    },
    { collection: "attempts" }
);

export default schema;