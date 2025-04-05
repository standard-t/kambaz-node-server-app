import model from "./model.js";
import { v4 as uuidv4 } from "uuid";


//refer to courses routes for sending over to client 
// also courses client 

export async function findCoursesForUser(userId) {
    const enrollments = await model.find({ user: userId }).populate("course");
    return enrollments.map((enrollment) => enrollment.course);
}

export async function findUsersForCourse(courseId) {
    const enrollments = await model.find({ course: courseId }).populate("user");
    return enrollments.map((enrollment) => enrollment.user);
}

export function enrollUserInCourse(user, course) {
    const newEnrollment = { user, course, _id: `${user}-${course}` };
    return model.create(newEnrollment);
}


export function unenrollUserFromCourse(user, course) {
    return model.deleteOne({ user, course });
}


export function fetchAllEnrollments() {
    model.find();
}






