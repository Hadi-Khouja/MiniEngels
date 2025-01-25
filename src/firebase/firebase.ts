import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import type { EventDto } from '@/types/event';

const firebaseConfig = {
  apiKey: 'AIzaSyCP5rS264F_5yflBTbexkDXMPBBXD5rQ-s',
  authDomain: 'rempro-710ba.firebaseapp.com',
  projectId: 'rempro-710ba',
  storageBucket: 'rempro-710ba.firebasestorage.app',
  messagingSenderId: '367624316952',
  appId: '1:367624316952:web:8745338421928fd8d27b6d',
};

initializeApp(firebaseConfig);
const database = getFirestore();

export async function getEvents(): Promise<EventDto[]> {
  const eventsRef = collection(database, 'Events');
  const snapshot = await getDocs(eventsRef);

  let events: EventDto[] = [];

  snapshot.docs.forEach((doc) => {
    const data = doc.data();
    events.push({
      id: doc.id,
      name: data.name,
      description: data.description,
      date: data.date.toDate().toISOString(),
    });
  });

  return events;
}
