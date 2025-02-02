import { servicesTypes } from "./servicesTypes.model";

export type DoctorDetailsModel = {
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
  about: string;
  phone: string;
  services_types: servicesTypes[];
  reviews: {
    average_rating: number;
    total: number;
    criteria: {
      professional_behavior: number;
      time_allocation: number;
      diagnostic_skill: number;
      reception_process: number;
      clinic_conditions: number;
    };
    average_wait_time: string;
  };
};
