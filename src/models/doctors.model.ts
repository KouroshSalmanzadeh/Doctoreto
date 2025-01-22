export type DoctorModel = {
    id: number;
    name: string;
    image?: string;
    specialtie: string;
    services: string[];
    serviceType: string[];
    star: number;
    reviewCount: number;
    price?: string;
    gender: string;
    lastFreeTime?: string;
    address: string; 
}