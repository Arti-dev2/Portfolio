export default function Projects() {
  return (
    <div id="projects" className="p-10">
      <h2 className="text-2xl font-bold text-center mb-6">Projects</h2>

      <div className="max-w-3xl mx-auto space-y-6">

        <div className="p-5 border rounded shadow">
          <h3 className="font-bold text-lg">QR Code Generator</h3>
          <p>
            Developed a QR generator with login system, dashboard,
            and history tracking using React and local storage.
          </p>

          <a href="https://qr-code-generator-nine-silk.vercel.app/" className="text-blue-600">
            Live Project
          </a>
        </div>

        <div className="p-5 border rounded shadow">
          <h3 className="font-bold text-lg">To-Do List App</h3>
          <p>
            Built a task management app with add, delete,
            and local storage features.
          </p>
        </div>

      </div>
    </div>
  );
}