// zustand/useGeoStore.js
import { create } from "zustand";

// Zustand 스토어 생성
const useGeoStore = create((set) => ({
  latitude: null,
  longitude: null,

  // 위도와 경도를 설정하는 함수
  setCoordinates: (lat, lon) => set({ latitude: lat, longitude: lon }),

  // 위도와 경도를 초기화하는 함수
  resetCoordinates: () => set({ latitude: null, longitude: null }),
}));

export default useGeoStore;
