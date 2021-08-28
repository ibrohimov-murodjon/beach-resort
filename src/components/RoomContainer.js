import React from "react";
import { RoomContext } from "../context.js";
import RoomFilter from "./RoomFilter.js";
import RoomList from "./RoomList.js";
import { withRoomConsumer } from "../context.js";
import Loading from "./Loading.js";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);

// import React from "react";
// import { RoomContext } from "../context.js";
// import RoomFilter from "./RoomFilter.js";
// import RoomList from "./RoomList.js";
// import { RoomConsumer } from "../context.js";
// import Loading from "./Loading.js";

// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value;
// if (loading) {
//   return <Loading />;
// }
// return (
//   <div>
//     hello from rooms container
//     <RoomFilter rooms={rooms} />
//     <RoomList rooms={sortedRooms} />
//   </div>
// );
//       }}
//     </RoomConsumer>
//   );
// }
