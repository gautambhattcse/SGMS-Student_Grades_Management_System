import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Toaster, toast } from "react-hot-toast";

export default function StudentGradeSystem() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [grades, setGrades] = useState("");
  const [deleteRollNo, setDeleteRollNo] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "students"));
      const studentsList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setStudents(studentsList);
    } catch (error) {
      toast.error("Failed to fetch students");
    }
  };

  const addStudent = async () => {
    if (!name || !rollNumber || !grades) {
      toast.error("Please fill all fields");
      return;
    }
    try {
      const gradeArray = grades.split(",").map(Number);
      await addDoc(collection(db, "students"), {
        name,
        rollNumber: Number(rollNumber),
        grades: gradeArray,
      });
      fetchStudents();
      setName("");
      setRollNumber("");
      setGrades("");
      toast.success("Student added successfully");
    } catch (error) {
      toast.error("Failed to add student");
    }
  };

  const removeStudentByRollNumber = async () => {
    if (!deleteRollNo) {
      toast.error("Please enter a roll number");
      return;
    }
    try {
      const querySnapshot = await getDocs(collection(db, "students"));
      const studentDoc = querySnapshot.docs.find(
        (doc) => doc.data().rollNumber === Number(deleteRollNo)
      );
      if (studentDoc) {
        await deleteDoc(doc(db, "students", studentDoc.id));
        fetchStudents();
        toast.success("Student removed successfully");
        setDeleteRollNo("");
      } else {
        toast.error("No student found with this roll number");
      }
    } catch (error) {
      toast.error("Failed to remove student");
    }
  };

  const getAverage = (grades) => {
    return (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(2);
  };

  const highestAverageStudent = students.reduce((max, student) => {
    const avg = parseFloat(getAverage(student.grades));
    return avg > max.avg ? { ...student, avg } : max;
  }, { avg: 0 });

  return (
    <div className="min-h-screen">
      <div className="flex justify-center items-center p-6">
        <Toaster position="top-right" />
        <Card className="w-full max-w-xl p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Manage Students</h2>
          
          <div className="space-y-3">
            <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <Input placeholder="Roll Number" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} />
            <Input placeholder="Grades (comma separated)" value={grades} onChange={(e) => setGrades(e.target.value)} />
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition cursor-pointer" onClick={addStudent}>
              Add Student
            </Button>
          </div>

          <div className="mt-6 space-y-2">
            <h3 className="font-semibold">Delete Student by Roll Number</h3>
            <Input placeholder="Enter Roll Number" value={deleteRollNo} onChange={(e) => setDeleteRollNo(e.target.value)} />
            <Button className="bg-red-600 hover:bg-red-700 text-white w-full py-2 rounded-lg transition" onClick={removeStudentByRollNumber}>
              Delete Student
            </Button>
          </div>

          <ul className="mt-6 space-y-3">
            {students.map((student) => (
              <li key={student.id} className="border p-3 rounded-lg shadow-sm bg-gray-50">
                <span>Roll Number: {student.rollNumber} - {student.name} - Avg: {getAverage(student.grades)} - {getAverage(student.grades) >= 50 ? "Passed" : "Failed"}</span>
              </li>
            ))}
          </ul>

          {highestAverageStudent.avg > 0 && (
            <p className="mt-4 text-center text-lg font-medium text-gray-700">
              Highest Avg: {highestAverageStudent.name} - {highestAverageStudent.avg}
            </p>
          )}
        </Card>
      </div>
    </div>
  );
}
