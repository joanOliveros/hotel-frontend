import { useState, useEffect } from "react"
import { Hotel, Props } from "../interfaces/Hotel"
import { createHotel, updateHotel } from "../services/hotelService"



function HotelForm({ hotel, onSave }: Props) {
  const [form, setForm] = useState<Partial<Hotel>>({})

  useEffect(() => {
    if (hotel) {
      setForm(hotel)
    }
  }, [hotel])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.id) {
      await updateHotel(form.id, form as Hotel)
    } else {
      await createHotel(form as Hotel)
    }
    setForm({})
    onSave()
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded">
      <h2 className="text-xl font-bold mb-2">
        {hotel ? "Editar Hotel" : "Nuevo Hotel"}
      </h2>
      <input
        type="text"
        placeholder="Nombre"
        value={form.name || ""}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="border p-2 w-full mb-2"
      />
      <input
        type="text"
        placeholder="Ciudad"
        value={form.city || ""}
        onChange={(e) => setForm({ ...form, city: e.target.value })}
        className="border p-2 w-full mb-2"
      />
      <input
        type="text"
        placeholder="Dirección"
        value={form.address || ""}
        onChange={(e) => setForm({ ...form, address: e.target.value })}
        className="border p-2 w-full mb-2"
      />
      <input
        type="text"
        placeholder="Nit"
        value={form.nit || ""}
        onChange={(e) => setForm({ ...form, nit: e.target.value })}
        className="border p-2 w-full mb-2"
      />
      <input
        type="number"
        placeholder="Total de habitaciones"
        value={form.total_rooms || ""}
        onChange={(e) =>
          setForm({
            ...form,
            total_rooms: e.target.value ? parseInt(e.target.value, 10) : 0,
          })
        }
        className="border p-2 w-full mb-2"
      />

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        {hotel ? "Actualizar" : "Crear"}
      </button>
    </form>
  )
}

export default HotelForm
