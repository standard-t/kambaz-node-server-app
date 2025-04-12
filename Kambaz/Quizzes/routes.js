import * as quizzesDao from "./dao.js";
import * as questionsDao from "../Questions/dao.js";
import * as attemptsDao from "../Attempts/dao.js";
export default function QuizRoutes(app) {


    app.delete("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const status = await quizzesDao.deleteQuiz(quizId);
        res.send(status);
    });
    app.put("/api/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const quizUpdates = req.body;
        const status = await quizzesDao.updateQuiz(quizId, quizUpdates);
        res.send(status);
    });

    app.get("/api/quizzes/:quizId/questions", async (req, res) => {
        const { quizId } = req.params;
        const questions = await questionsDao.findQuestionsForQuiz(quizId);
        res.json(questions);
    });

    app.post("/api/quizzes/:quizId/questions", async (req, res) => {
        const { quizId } = req.params;
        const question = {
            ...req.body,
            quiz: quizId,
        };
        const newQuestion = await questionsDao.createQuestion(question);
        res.send(newQuestion);
    });

    app.get("/api/quizzes/:quizId/attempts", async (req, res) => {
        const { quizId } = req.params;
        const attempts = await attemptsDao.findAttemptsForQuiz(quizId);
        res.json(attempts);
    });

    app.post("/api/quizzes/:quizId/attempts", async (req, res) => {
        const { quizId } = req.params;
        const attempt = {
            ...req.body,
            quiz: quizId,
        };
        const newAttempt = await attemptsDao.createAttempt(attempt);
        res.send(newAttempt);
    });

}
