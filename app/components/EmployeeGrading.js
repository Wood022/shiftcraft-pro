// components/EmployeeGrading.js
'use client';

export default function EmployeeGrading() {
  const skills = ['Slicer', 'Wrapper', 'Grill', 'Register', 'Prep'];
  
  return (
    <div className="p-6 bg-white rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-4">Employee Skill Grading</h3>
      <div className="space-y-4">
        {skills.map(skill => (
          <div key={skill} className="flex items-center justify-between">
            <span>{skill}</span>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <button
                  key={num}
                  className="w-8 h-8 border rounded hover:bg-blue-50"
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg">
        Save All Scores
      </button>
    </div>
  );
}
