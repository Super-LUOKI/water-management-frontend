import { getRegion } from "@/service";
import { defineStore } from "pinia";

const useRegionStore = defineStore('region', {
  state: () => ({
    regionList: []
  }),
  actions: {
    async fetchAllRegions() {
      const res = await getRegion()
      this.regionList = res.data
    }
  }
});

export default useRegionStore;