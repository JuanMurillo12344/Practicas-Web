export const systemName: string = "Tracking System";
export let totalLocations: number = 150;

export interface LocationHistory {
  id: number;
  latitude: number;
  longitude: number;
  timestamp: string;
  userId: number;
}

export const location1: LocationHistory = {
  id: 1,
  latitude: -2.170998,
  longitude: -79.922359,
  timestamp: "2025-04-30T10:00:00Z",
  userId: 101
};

export function addLocation(id: number, latitude: number, longitude: number, timestamp: string, userId: number): LocationHistory {
  return { id, latitude, longitude, timestamp, userId };
}


