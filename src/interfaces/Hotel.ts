export interface Hotel {
    id: number;
    name: string;
    address: string;
    city: string;
    nit: string;
    total_rooms: number;
}


export interface Props {
    hotel: Hotel | null
    onSave: () => void
  }