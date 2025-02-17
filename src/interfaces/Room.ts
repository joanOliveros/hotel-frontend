export interface Room {
    id: number;
    hotel_id: number;
    room_type_id: number;
    accommodation_id: number;
    quantity: number;
}

export interface Props {
    room: Room | null;
    onSave: () => void;
  }