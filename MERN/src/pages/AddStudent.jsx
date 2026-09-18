import { useState } from "react";

export default function AddStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [count, setCount] = useState(0);
  const [submittedStudent, setSubmittedStudent] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = { name, email };
    setSubmittedStudent(student);
    console.log("Student added:", student);
    setCount((prev) => prev + 1);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2 style={{ marginBottom: "10px" }}>My App</h2>

      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px 12px",
          background: "#e9f2ff",
          borderRadius: "8px",
          marginBottom: "20px",
          border: "1px solid #d7e7ff",
          fontSize: "18px",
          fontWeight: "600",
        }}
      >
        Counter: {count}
      </div>

      <button
        type="button"
        onClick={() => setCount((prev) => prev + 1)}
        style={{
          display: "block",
          width: "48px",
          height: "48px",
          borderRadius: "8px",
          border: "none",
          background: "#3d8bfd",
          color: "white",
          fontSize: "32px",
          lineHeight: 1,
          cursor: "pointer",
          marginBottom: "20px",
        }}
        aria-label="increment counter"
      >
        +
      </button>

      <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: "12px 10px",
            fontSize: "18px",
            border: "1px solid #f0b24c",
            borderRadius: "6px",
            minWidth: "180px",
            outline: "none",
          }}
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "12px 10px",
            fontSize: "18px",
            border: "1px solid #f0b24c",
            borderRadius: "6px",
            minWidth: "200px",
            outline: "none",
          }}
        />

        <button
          type="submit"
          style={{
            background: "#35c46a",
            color: "white",
            border: "none",
            borderRadius: "6px",
            padding: "12px 22px",
            fontSize: "20px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>

      {submittedStudent && (
        <div
          style={{
            marginTop: "20px",
            fontSize: "14px",
            lineHeight: "1.5",
            textAlign: "left",
            width: "fit-content",
          }}
        >
          <p>Name: {submittedStudent.name}</p>
          <p>Email: {submittedStudent.email}</p>
        </div>
      )}
    </div>
  );
}

