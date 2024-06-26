import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { LoadingStore } from "./loading.interface";

const useLoadingStore = create<LoadingStore>()(
  devtools((set) => ({
    isLoading: true,
    setLoading: (loading: boolean) => set(() => ({ isLoading: loading })),
  }))
);

export default useLoadingStore;
