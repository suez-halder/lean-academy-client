import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import useStudent from "../../hooks/useStudent";

const DashboardOutlet = () => {

    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()
    const [isStudent] = useStudent()

    return (
        <div className="min-h-screen flex  w-full items-center justify-center bg-gray-100">
            <div className="bg-white w-1/2 p-8 rounded shadow-xl text-center">
                <h2 className="text-5xl font-bold mb-4">Welcome</h2>
                <div className="text-4xl text-green-600">
                    {isAdmin && <div>Admin</div>}
                    {isInstructor && <div>Instructor</div>}
                    {isStudent && <div>Student</div>}
                </div>
            </div>
        </div>
    );
};

export default DashboardOutlet;
