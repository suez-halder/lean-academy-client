import toast from "react-hot-toast";
import useUsers from "../../../hooks/useUsers";

const ManageUsers = () => {

    const [users, refetch] = useUsers()
    // console.log(users);

    const filterAdminUser = users?.filter(user => user.email !== `${import.meta.env.VITE_SUPER_ADMIN}`)

    const updateUserRole = (user, newRole) =>{
        fetch(`${import.meta.env.VITE_API_URL}/users/role/${user._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ role: newRole })
        })

        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            if(data.modifiedCount){
                refetch();
                toast.success("Role Updated Successfully")
                
            }
        })
    }


    return (
        <div className="overflow-x-auto w-full">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Current Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        filterAdminUser.map((user, index) => <tr
                            key={user._id}
                        >
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td className="uppercase">{user.role}</td>
                            <td>
                                <button 
                                onClick={() => updateUserRole(user, 'admin')}  
                                className="btn btn-error"
                                disabled={user.role === 'admin'}
                                >Admin
                                
                                </button>
                                
                                <button onClick={() => 
                                    updateUserRole(user, 'instructor')} 
                                className="btn btn-warning"
                                disabled={user.role === 'instructor'}
                                >Instructor</button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;



