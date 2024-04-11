export type Hotel = {
  id: string;
  name: string;
  location: string;
}

export type HotelWithoutId = Omit<Hotel, 'id'>;
