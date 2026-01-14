import EmployeeGrading from '@/components/EmployeeGrading';
import { getEmployees } from '@/lib/database';

export default async function Home() {
  // Initial data fetch
  const employees = await getEmployees();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">ShiftCraft Pro</h1>
        <p className="text-gray-600">Intelligent Restaurant Scheduling</p>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Employee Grading Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Employee Skill Grading</h2>
          <EmployeeGrading initialEmployees={employees} />
        </div>
        
        {/* Quick Stats */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Store Overview</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Total Employees</span>
              <span className="font-bold">{employees.length}</span>
            </div>
            <div className="flex justify-between">
              <span>Avg. Skill Score</span>
              <span className="font-bold">7.8</span>
            </div>
            <div className="flex justify-between">
              <span>Next Schedule Due</span>
              <span className="font-bold">In 3 days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
