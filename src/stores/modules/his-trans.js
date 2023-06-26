import { getHisTrans } from "@/service";
import { defineStore } from "pinia";

const useHisTranStore = defineStore('his-trans', {
  state: () => ({
    // 费用列表
    hisTransList: [],
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
    total: 0
  }),
  actions: {
    async fetchHisTranList() {
      const res = await getHisTrans(this.page, this.pageCount, this.address, this.deviceCode, this.userCode, this.username, this.startTimestamp, this.endTimestamp)
      this.hisTransList = res.data
      this.total = res.total
    }
  }
});

export default useHisTranStore;