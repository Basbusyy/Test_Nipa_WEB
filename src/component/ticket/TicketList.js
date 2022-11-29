import React from "react";

function TicketList() {
  return (
    <div className="border-4 bg-slate-500 w-[400px] p-4">
      Ticket
      <div>TITLE : </div>
      <div>DESCRIPTION : </div>
      <div>CONTACT : </div>
      <div>INFORMATION : </div>
      <div>CREATED TIMESTAMP : </div>
      <div>UPDATED TIMESTAMP : </div>
      <label for="status">STATUS : </label>
      <select className="w-[100px] h-[35px] rounded-md m-1 px-2 ">
        <option value="pending">pending</option>
        <option value="accepted">accepted</option>
        <option value="resolved">resolved</option>
        <option value="rejected">rejected</option>
      </select>
    </div>
  );
}

export default TicketList;
