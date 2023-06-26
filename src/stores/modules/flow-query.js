import { getFlow } from "@/service";
import { defineStore } from "pinia";

const useFlowStore = defineStore('flow', {
  state: () => ({
    flowList: [],
    regionId: null,
    page: 1,
    pageCount: 10,
    deviceCode: null,
    total:0,
    // 选中的项目
    selections: null,
  }),
  actions: {
    async fetchFlowList(){
      const res = await getFlow(this.regionId, this.page, this.pageCount, this.deviceCode)
      this.flowList = res.data
      this.total = res.total
    }
  }
});

export default useFlowStore;