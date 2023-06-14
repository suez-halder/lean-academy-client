import useSelected from "../../../hooks/useSelected";
import moment from 'moment';

const PaymentHistory = () => {
    const [selected] = useSelected()
    const enrolledClasses = selected.filter((item) => item.transactionId);

    const sortedSelected = enrolledClasses.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
    });

    // console.log(sortedSelected);


    return (
        <div className="overflow-x-auto w-full">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Class Image</th>
                        <th>Class Name</th>
                        <th>Date</th>
                        <th>Transaction ID</th>

                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        sortedSelected.map((singleClass, index) => <tr
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
                            <td>{moment(singleClass.date).format('MMMM Do YYYY, h:mm:ss a')}</td>
                            <td>{singleClass.transactionId}</td>


                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default PaymentHistory;