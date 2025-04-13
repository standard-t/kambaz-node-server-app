import { v4 as uuidv4 } from "uuid";
import model from "./model.js";


export function findAttemptsForQuiz(quizId) {
    return model.find({ quiz: quizId });

}

export function findAttemptsForUser(userId) {
    return model.find({ user: userId });
}

export function createAttempt(attempt) {
    const newAttempt = { ...attempt, _id: uuidv4() };
    return model.create(newAttempt);
}

export function deleteAttempt(attemptId) {
    return model.deleteOne({ _id: attemptId });
}


export function updateAttempt(attemptId, attemptUpdates) {
    return model.updateOne({ _id: attemptId }, attemptUpdates);

}