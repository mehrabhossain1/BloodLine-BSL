import { nanoid } from "nanoid";

type BloodType = "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";

export interface Donor {
  id: string;
  fullName: string;
  bloodGroup: BloodType;
  location: string;
  contact: string;
  lastDonated: string;
}

export const donors: Donor[] = [
  {
    id: nanoid(),
    fullName: "John Doe",
    bloodGroup: "A+",
    location: "Kathmandu",
    contact: "1234567890",
    lastDonated: "2023-01-01",
  },
  {
    id: nanoid(),
    fullName: "Jane Doe",
    bloodGroup: "B+",
    location: "Kathmandu",
    contact: "1234567890",
    lastDonated: "2023-01-01",
  },
  {
    id: nanoid(),
    fullName: "John Doe",
    bloodGroup: "A+",
    location: "Kathmandu",
    contact: "1234567890",
    lastDonated: "2023-01-01",
  },
];
