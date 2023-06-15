import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import useAllInstructors from "../../hooks/useAllInstructors";

const Instructors = () => {
    // const [users] = useUsers()
    // // console.log(users);
    // const instructors = users.filter(instructor => instructor.role === 'instructor')
    // console.log(instructors);

    const [allInstructors, isAllInstructorsLoading] = useAllInstructors()
    console.log(allInstructors)

    if (isAllInstructorsLoading) {
        return <Loader></Loader>
      }


    return (
        <>
            <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                {
                    allInstructors?.map(instructor =>
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