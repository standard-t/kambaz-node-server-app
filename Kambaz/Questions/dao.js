import { v4 as uuidv4 } from "uuid";
import model from "./model.js";


export function findQuestionsForQuiz(quizId) {
    return model.find({ quiz: quizId });

}

export function createQuestion(question) {
    const newQuestion = { ...question, _id: uuidv4() };
    return model.create(newQuestion);
}

export function deleteQuestion(questionId) {
    return model.deleteOne({ _id: questionId });
}


export function updateQuestion(questionId, questionUpdates) {
    return model.updateOne({ _id: questionId }, questionUpdates);

}

