import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        _id: String,
        title: String,
        description: String,
        quizType: String,
        points: Number,
        assignmentGroup: String,
        shuffleAnswers: String,
        timeLimit: Number,
        multipleAttempts: Boolean,
        numberOfAttempts: Number,
        showCorrectAnswers: Boolean,
        accessCode: String,
        oneAtATime: Boolean,
        webcam: Boolean,
        lockQuestions: Boolean,
        published: Boolean,
        score: Number,
        dueDate: Date,
        availableFrom: Date,
        availableUntil: Date,
        course: { type: String, ref: "CourseModel" },
    },
    { collection: "quizzes" }
);
export default schema;