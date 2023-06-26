import { getLogs } from "@/service";
import { defineStore } from "pinia";

const useLogStore = defineStore('logs', {
  state: () => ({
    // 费用列表
    logList: [],
    // 查询条件
    page: 1,
    pageCount: 10,
    optType: null,
    // 总数据条数
    total: 0,
    // 选择的条目信息
    selections:null
  }),
  actions: {
    async fetchLogList() {
      const res = await getLogs(this.regionId, this.page, this.pageCount, this.username, this.usercode)
      this.logList = res.data
      this.total = res.total
    }
  }
});

export default useLogStore;