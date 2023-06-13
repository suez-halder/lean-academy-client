import useUsers from "../../hooks/useUsers";

const Instructors = () => {
    const [users] = useUsers()
    // console.log(users);
    const instructors = users.filter(instructor => instructor.role === 'instructor')
    console.log(instructors);
    
    
    return (
        <div>
            <h2>All instructors</h2>
        </div>
    );
};

export default Instructors;