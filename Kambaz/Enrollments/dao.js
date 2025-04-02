import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";


//refer to courses routes for sending over to client 
// also courses client 



export function fetchAllEnrollments() {
    const { enrollmnents } = Database.enrollments;
    return enrollmnents;
}

export function createEnrollment(enrollment) {
    const newEnrollment = { ...enrollment, _id: uuidv4() };
    Database.enrollments = [...Database.enrollments, newEnrollment];
    return newEnrollment;
}

// export function deleteEnrollment(userId, courseId) {
//     const { enrollments } = Database;
//     Database.enrollments = enrollments.filter((enrollment) => ((enrollment.user !== userId) && (enrollment.course != courseId)));
// }


// export function enrollUserInCourse(enrollment) {
//     const { enrollments } = Database;
//     enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
// }

export function deleteEnrollment(userId, courseId) {
    const { enrollments } = Database;
    console.log("deleteEnrollment", userId, courseId);
    const enrollmentIndex = enrollments.findIndex((e) => e.user === userId && e.course === courseId);
    enrollments.splice(enrollmentIndex, 1);
    // Database.enrollments = enrollments.filter(
    //     (e) => { !(e.user === userId && e.course === courseId) }
    // );
}


