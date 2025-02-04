import { useEffect, useState } from "react";
import { getHotels, deleteHotel } from "../services/hotelService";
import { Hotel } from "../interfaces/Hotel";
import HotelForm from "../components/HotelForm";

function Hotels() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = () => {
    getHotels().then(setHotels);
  };

  const handleDelete = async (id: number) => {
    await deleteHotel(id);
    fetchHotels();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 mt-4">Hoteles</h1>
      <HotelForm hotel={selectedHotel} onSave={fetchHotels} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold">{hotel.name}</h2>
            <p>{hotel.city}</p>
            <p className="text-gray-600">{hotel.address}</p>
            <div className="mt-2">
              <button onClick={() => setSelectedHotel(hotel)} className="mr-2 bg-blue-500 text-white px-3 py-1 rounded">
                Editar
              </button>
              <button onClick={() => handleDelete(hotel.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
