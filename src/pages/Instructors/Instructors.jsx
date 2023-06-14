import Card from "../../components/Card/Card";
import useUsers from "../../hooks/useUsers";

const Instructors = () => {
    const [users] = useUsers()
    // console.log(users);
    const instructors = users.filter(instructor => instructor.role === 'instructor')
    console.log(instructors);


    return (
        <>
            <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                {
                    instructors.map(instructor =>
                        <Card
                            key={instructor._id}
                            instructor={instructor}
                        ></Card>)
                }
            </div>
        </>
    );
};

export default Instructors;