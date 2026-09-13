import studentData from "../data/studentData.json";
import { useParams } from "react-router-dom";

export default function StudentDetails() {
    const { id } = useParams();
    
    const student = studentData.find((student) => student.id === parseInt(id));

    if (!student) {
        return <div>Student not found buang</div>;
    }
    return(
        <div className="flex flex-col gap-3 border-4 border-gray-200 rounded-md w-64 align-center">
            <p>Student Name: {student.name}</p>
            <p>Student Number: {student.studentNumber}</p>
            <p>Course: {student.course}</p>
            <p>Email: {student.email}</p>
           
         
        </div>
    )
}