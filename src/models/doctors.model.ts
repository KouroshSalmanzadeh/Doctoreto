export type DoctorModel = {
  id: number;
  name: string;
  image?: string;
  expertise: string;
  services: string[];
  plural: string[];
  star: number;
  reviewCount: number;
  price?: string;
  gender: string;
  firstFreeTime?: string;
  address: string;
  avatar?: string;
};
