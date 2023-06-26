import { getHisPays } from "@/service";
import { defineStore } from "pinia";

const useHisPayStore = defineStore('his-pay', {
  state: () => ({
    // 费用列表
    hisPayList: [],
    // 查询条件
    page:1,
    pageCount:10,
    address:null,
    deviceCode:null,
    userCode:null,
    username:null,
    startTimestamp:null,
    endTimestamp:null,
    // 总数据条数
    total: 0,
    // 用户选中的条目信息
    selections:null
  }),
  actions: {
    async fetchHisPayList() {
      const res = await getHisPays(this.page, this.pageCount, this.address, this.deviceCode, this.userCode, this.username, this.startTimestamp, this.endTimestamp)
      this.hisPayList = res.data
      this.total = res.total
    }
  }
});

export default useHisPayStore;