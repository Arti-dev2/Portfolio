export default function Skills() {
  return (
    <div className="p-10 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>

      <div className="flex flex-wrap justify-center gap-3">
        {["Java", "Python", "React", "JavaScript", "SQL", "HTML", "CSS"].map(
          (skill) => (
            <span key={skill} className="bg-blue-500 text-white px-4 py-2 rounded">
              {skill}
            </span>
          )
        )}
      </div>
    </div>
  );
}