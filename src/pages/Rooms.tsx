import { useEffect, useState } from "react";
import { getRooms, deleteRoom } from "../services/roomService";
import { Room } from "../interfaces/Room";
import RoomForm from "../components/RoomForm";

function Rooms() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = () => {
    getRooms().then(setRooms);
  };

  const handleDelete = async (id: number) => {
    await deleteRoom(id);
    fetchRooms();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Habitaciones</h1>
      <RoomForm room={selectedRoom} onSave={fetchRooms} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {rooms.map((room) => (
          <div key={room.id} className="border p-4 rounded shadow">
            <p>Hotel ID: {room.hotel_id}</p>
            <p>Tipo de Habitación: {room.room_type_id}</p>
            <p>Acomodación: {room.accommodation_id}</p>
            <p>Cantidad: {room.quantity}</p>
            <button onClick={() => setSelectedRoom(room)} className="mr-2 bg-blue-500 text-white px-3 py-1 rounded">Editar</button>
            <button onClick={() => handleDelete(room.id)} className="bg-red-500 text-white px-3 py-1 rounded">Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
