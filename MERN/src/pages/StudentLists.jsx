import StudentCard from "../components/StudentCard.jsx";
import studentData from "../data/studentData.json";

export default function StudentLists() {
  return (
    <div>
      <h1>Student Lists</h1>
      <p>List of students will be displayed here.</p>
      <div className="grid grid-cols-3 gap-4">
        {studentData.map((student) => (
          <StudentCard key={student.id}
            student={student}
          />
        ))}
      </div>

     
    </div>
  );
}