import { useState, useEffect } from "react";
import { Props, Room } from "../interfaces/Room";
import { Hotel } from "../interfaces/Hotel";
import { createRoom, updateRoom } from "../services/roomService";
import { getHotels } from "../services/hotelService";


function RoomForm({ room, onSave }: Props) {
  const [form, setForm] = useState<Partial<Room>>({});
  const [hotels, setHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    if (room) {
      setForm(room);
    }
    getHotels().then(setHotels);
  }, [room]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.hotel_id || !form.room_type_id || !form.accommodation_id || !form.quantity) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    if (form.id) {
      await updateRoom(form.id, form as Room);
    } else {
      await createRoom(form as Room);
    }

    setForm({});
    onSave();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded shadow-lg bg-white">
      <h2 className="text-xl font-bold mb-2">{room ? "Editar Habitación" : "Nueva Habitación"}</h2>

      <label className="block mb-2">Hotel:</label>
      <select
        value={form.hotel_id || ""}
        onChange={(e) => setForm({ ...form, hotel_id: Number(e.target.value) })}
        className="border p-2 w-full mb-2"
      >
        <option value="">Seleccione un hotel</option>
        {hotels.map((hotel) => (
          <option key={hotel.id} value={hotel.id}>
            {hotel.name}
          </option>
        ))}
      </select>

      <label className="block mb-2">Tipo de Habitación:</label>
      <input
        type="number"
        placeholder="Tipo de Habitación (Ej: 1 para Estándar, 2 para Junior, etc.)"
        value={form.room_type_id || ""}
        onChange={(e) => setForm({ ...form, room_type_id: Number(e.target.value) })}
        className="border p-2 w-full mb-2"
      />

      <label className="block mb-2">Acomodación:</label>
      <input
        type="number"
        placeholder="Acomodación (Ej: 1 para Sencilla, 2 para Doble, etc.)"
        value={form.accommodation_id || ""}
        onChange={(e) => setForm({ ...form, accommodation_id: Number(e.target.value) })}
        className="border p-2 w-full mb-2"
      />

      <label className="block mb-2">Cantidad:</label>
      <input
        type="number"
        placeholder="Cantidad de habitaciones"
        value={form.quantity || ""}
        onChange={(e) => setForm({ ...form, quantity: Number(e.target.value) })}
        className="border p-2 w-full mb-4"
      />

      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full">
        {room ? "Actualizar" : "Crear"}
      </button>
    </form>
  );
}

export default RoomForm;
