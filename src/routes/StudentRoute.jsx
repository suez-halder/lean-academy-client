import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import useAuth from "../hooks/useAuth";
import useStudent from "../hooks/useStudent";

const StudentRoute = ({children}) => {
    const {user, loading} = useAuth()
    const [isStudent, isStudentLoading] = useStudent()
    const location = useLocation()

    if(loading || isStudentLoading){
        return <Loader></Loader>
    }
    if(user && isStudent){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>

};

export default StudentRoute;