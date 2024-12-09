import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { server } from "../../server";

const SalesReport = () => {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReport = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${server}/user/sales-report`, {
          withCredentials: true,
        });
        setReport(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching report. Please try again later.");
        setLoading(false);
      }
    };

    fetchReport();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black text-white">
        <p className="text-xl font-semibold">Loading report...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 bg-black text-white min-h-screen flex items-center justify-center">
        <p>{error}</p>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="text-center bg-black text-white min-h-screen flex items-center justify-center">
        <p>No report data available.</p>
      </div>
    );
  }

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 250, flex: 1 },
    { field: "totalPrice", headerName: "Total Price", minWidth: 120, flex: 0.6 },
    { field: "status", headerName: "Status", minWidth: 150, flex: 0.6 },
    { field: "date", headerName: "Date", minWidth: 200, flex: 0.8 },
  ];

  const rows = report.orders.map((order) => ({
    id: order._id,
    totalPrice: `$${order.totalPrice.toFixed(2)}`,
    status: order.status,
    date: new Date(order.createdAt).toLocaleDateString(),
  }));

  return (
    <div className="w-full mx-auto pt-10 bg-[#111827] rounded-lg shadow-lg p-6">
      <h1 className="text-3xl text-white font-bold text-center mb-6">Sales Report</h1>

      <div className="text-center mb-6">
        <h3 className="text-xl text-white  font-semibold">Total Revenue: ${report.totalRevenue.toFixed(2)}</h3>
        <h3 className="text-xl text-white  font-semibold">Total Orders: {report.ordersCount}</h3>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-lg">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          autoHeight
        />
      </div>

      <div className="text-center mt-6">
        <button
          onClick={() => navigate("/admin/dashboard")}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-200"
        >
          Go Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default SalesReport;
