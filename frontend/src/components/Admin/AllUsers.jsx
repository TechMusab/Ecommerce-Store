import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { getAllUsers } from "../../redux/actions/user";
import { AiOutlineDelete } from "react-icons/ai";
import styles from "../../styles/styles";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

const AllUsers = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleDelete = async (id) => {
    await axios
    .delete(`${server}/user/delete-user/${id}`, { withCredentials: true })
    .then((res) => {
      toast.success(res.data.message);
    });

  dispatch(getAllUsers());
  };

  const columns = [
    { field: "id", headerName: "User ID", minWidth: 150, flex: 0.7 },

    {
      field: "name",
      headerName: "name",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "email",
      headerName: "Email",
      type: "text",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "role",
      headerName: "User Role",
      type: "text",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "joinedAt",
      headerName: "joinedAt",
      type: "text",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "Delete User",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => setUserId(params.id) || setOpen(true)}>
              <AiOutlineDelete size={20} />
            </Button>
          </>
        );
      },
    },
  ];

  const row = [];
  users &&
    users.forEach((item) => {
      row.push({
        id: item._id,
        name: item.name,
        email: item.email,
        role: item.role,
        joinedAt: item.createdAt.slice(0, 10),
      });
    });

  return (
    <div className="w-full flex justify-center pt-5">
    <div className="w-[97%] max-w-screen-xl">
      <h3 className="text-2xl font-Poppins font-semibold pb-2 text-gray-800">All Users</h3>
      <div className="w-full min-h-[45vh] bg-white rounded-lg shadow-lg">
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          autoHeight
        />
      </div>
      {open && (
        <div className="w-full fixed top-0 left-0 z-[999] bg-[#00000039] flex items-center justify-center h-screen">
          <div className="w-[95%] 800px:w-[40%] min-h-[20vh] bg-white rounded-xl shadow-xl p-6">
            <div className="w-full flex justify-end cursor-pointer">
              <RxCross1 size={25} onClick={() => setOpen(false)} />
            </div>
            <h3 className="text-xl text-center py-4 font-Poppins text-[#333333]">
              Are you sure you wanna delete this user?
            </h3>
            <div className="w-full flex items-center justify-center gap-6">
              <div
                className={`${styles.button} text-white text-[18px] !h-[42px] mr-4 rounded-md shadow-md hover:bg-opacity-80`}
                onClick={() => setOpen(false)}
              >
                Cancel
              </div>
              <div
                className={`${styles.button} text-white text-[18px] !h-[42px] ml-4 rounded-md shadow-md hover:bg-opacity-80`}
                onClick={() => setOpen(false) || handleDelete(userId)}
              >
                Confirm
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
  
  );
};

export default AllUsers;
