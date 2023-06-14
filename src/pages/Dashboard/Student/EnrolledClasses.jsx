import useSelected from "../../../hooks/useSelected";

const EnrolledClasses = () => {
    const [selected] = useSelected()
    // console.log(selected);
    const enrolledClasses = selected.filter((item) => item.transactionId);
    // console.log(enrolledClasses);
    return (
        <div className="overflow-x-auto w-full">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Class Image</th>
                        <th>Class Name</th>
                        <th>Instructor Name</th>
                        <th>Price</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        enrolledClasses.map((singleClass, index) => <tr
                            key={singleClass._id}
                        >
                            <th>{index + 1}</th>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={singleClass.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>


                            </td>
                            <td>{singleClass.className}</td>
                            <td>{singleClass.name}</td>
                            <td>${singleClass.price}</td>
                            

                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default EnrolledClasses;