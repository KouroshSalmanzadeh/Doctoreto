export type servicesTypes = {
  type: string;
  next_slot: string;
  details_type: {
    price: number;
    duration: number;
    description: string;
    features?: string[];
  };
};
