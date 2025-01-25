import { nanoid } from "nanoid";

type BloodType = "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";

export interface Donor {
  id: string;
  fullName: string;
  bloodGroup: BloodType;
  gender: "Male" | "Female";
  location: string;
  contact: string;
  lastDonated: string;
}

export const donors: Donor[] = [
  {
    id: nanoid(),
    fullName: "John Doe",
    bloodGroup: "A+",
    gender: "Male",
    location: "New York, USA",
    contact: "+1 123-456-7890",
    lastDonated: "2022-01-01",
  },
  {
    id: nanoid(),
    fullName: "Jane Doe",
    bloodGroup: "B+",
    gender: "Female",
    location: "London, UK",
    contact: "+44 123-456-7890",
    lastDonated: "2022-02-01",
  },
  {
    id: nanoid(),
    fullName: "Jane Doe",
    bloodGroup: "B+",
    gender: "Female",
    location: "London, UK",
    contact: "+44 123-456-7890",
    lastDonated: "2022-02-01",
  },
];
