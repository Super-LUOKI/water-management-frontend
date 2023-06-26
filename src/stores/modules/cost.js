import { getCost } from "@/service";
import { defineStore } from "pinia";

const useCostStore = defineStore('cost', {
  state: () => ({
    // 费用列表
    costList: [],
    // 查询条件
    regionId: null,
    page: 1,
    pageCount: 10,
    username: null,
    usercode: null,
    // 总数据条数
    total: 0,
    // 选择的条目信息
    selections:null
  }),
  actions: {
    async fetchCostList() {
      const res = await getCost(this.regionId, this.page, this.pageCount, this.username, this.usercode)
      this.costList = res.data
      this.total = res.total
    }
  }
});

export default useCostStore;