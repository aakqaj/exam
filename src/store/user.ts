import { defineStore } from "pinia";
import { ElNotification } from "element-plus";

const initData: UserInfo[] = [
  {
    id: 1,
    name: "wn",
    age: 18,
    address: "xxxxxx xxxxxdcsd",
  },
  {
    id: 2,
    name: "wc",
    age: 19,
    address: "xxxxxx xxxxxv",
  },
  {
    id: 3,
    name: "wn",
    age: 20,
    address: "xxxxxx xxxxx2qw",
  },
  {
    id: 4,
    name: "wncs",
    age: 21,
    address: "xxxxxx xxxxx das",
  },
];

export const useUserStore = defineStore("user", {
  state: () => ({
    userInfoList: initData as UserInfo[],
    searchText: "",
  }),
  getters: {
    UserInfoList({ userInfoList, searchText }) {
      return userInfoList.filter((i) => i.name.includes(searchText));
    },
  },
  actions: {
    deleteItem(id: number) {
      const index = this.userInfoList.findIndex((i) => i.id === id);
      this.userInfoList.splice(index, 1);
    },

    addItem(data: UserInfo) {
      const lastID = this.userInfoList[this.userInfoList.length - 1].id + 1;
      this.userInfoList.push({
        ...data,
        id: lastID,
      });
      ElNotification.success("添加成功");
    },

    updateItem(data: UserInfo) {
      const index = this.userInfoList.findIndex((i) => i.id === data.id);
      this.userInfoList[index] = data;
      ElNotification.success("编辑成功");
    },

    search(text: string) {
      this.searchText = text;
    },
  },

  persist: true,
});
