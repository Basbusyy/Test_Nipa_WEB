import React from "react";
import TicketBody from "./TicketBody";

function TicketContainer() {
  return (
    <div className=" w-full h-full overflow-y-scroll scrollbar-hide">
      <TicketBody />
    </div>
  );
}

export default TicketContainer;
