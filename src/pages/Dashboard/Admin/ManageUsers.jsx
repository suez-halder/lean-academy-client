import useUsers from "../../../hooks/useUsers";

const ManageUsers = () => {

    const [users] = useUsers()
    // console.log(users);

    const filteredUsers = users?.filter(user => user.role !== 'admin') || [];




    return (
        <div className="overflow-x-auto w-full">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        filteredUsers.map((user, index) => <tr
                            key={user._id}
                        >
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button className="btn">Admin</button>
                                <button className="btn">Instructor</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;



