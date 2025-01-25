import type { Timestamp } from "firebase/firestore";

export interface EventDto {
  id: string;
  name: string;
  description: string;
  date: string;
}
