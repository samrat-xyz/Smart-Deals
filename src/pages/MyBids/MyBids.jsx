import React, { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

function MyBids() {
  const { user } = useContext(AuthContext);
  const [bids, setBid] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3030/bids?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setBid(data))
        .catch((err) => console.error("Fetch error:", err));
    }
  }, [user?.email]);

  const handleRemoveBid = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log(_id)
        fetch(`http://localhost:3030/bids/${_id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            console.log("After deleting", data);
            if (data.deletedCount) {
              const remining = bids.filter(bid => bid._id !== _id);
              setBid(remining)
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="w-11/12 mx-auto my-19">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>SL No</th>
              <th>Buyer Image</th>
              <th>Buyer Name</th>
              <th>Bid Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          {bids.map((bid, index) => (
            <tbody key={bid._id}>
              <tr>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={bid?.buyer_image} alt="Buyer" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{bid.buyer_name}</td>
                <td>{bid.bid_price}</td>
                <th>
                  <button
                    onClick={() => handleRemoveBid(bid._id)}
                    className="btn btn-outline btn-xs"
                  >
                    Remove
                  </button>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default MyBids;
