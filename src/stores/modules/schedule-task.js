import { getScheduleTask } from "@/service";
import { defineStore } from "pinia";

const useTaskStore = defineStore('schedule-task', {
  state: () => ({
    // 费用列表
    taskList: [],
    // 查询条件
    page: 1,
    pageCount: 10,
    watcherNum: null,
    // 总数据条数
    total: 0
  }),
  actions: {
    async fetchTaskList() {
      const res = await getScheduleTask(this.page, this.pageCount, this.watcherNum)
      this.taskList = res.data
      this.total = res.total
    }
  }
});

export default useTaskStore;