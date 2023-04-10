export const routes = [
  {
    id: "1",
    title: "首页",
    icon: "Home",
    path: "/index/home",
  },
  {
    id: "2",
    title: "业务管理",
    icon: "Folder",
    children: [
      {
        id: "2-1",
        title: "实名认证",
        path: "/index/veripass",
      },
    ],
  },
  {
    id: "3",
    title: "用户管理",
    icon: "Profile",
    children: [
      { id: "3-1", title: "用户信息", path: "/index/userinformation" },
      { id: "3-2", title: "用户账户", path: "/index/usercccount" },
      { id: "3-3", title: "修改记录", path: "/index/modifylog" },
    ],
  },

  {
    id: "4",
    title: "商品管理",
    icon: "Bag",
    children: [
      { id: "4-1", title: "发布商品", path: "/index/productpublish" },
      { id: "4-2", title: "商品列表", path: "/index/productlist" },
      { id: "4-3", title: "商品推荐", path: "/index/productrecommend" },
      { id: "4-4", title: "商品分类", path: "/index/productfilter" },
    ],
  },
  {
    id: "5",
    title: "订单管理",
    icon: "Chart",
    children: [
      { id: "5-1", title: "订单列表", path: "/index/orderlylist" },
      { id: "5-2", title: "退还列表", path: "/index/returnlist" },
    ],
  },

  {
    id: "6",
    title: "营销管理",
    icon: "Document",
    children: [{ id: "6-1", title: "活动列表", path: "/index/activitylist" }],
  },

  {
    id: "7",
    title: "监控",
    icon: "Activity",
    children: [{ id: "7-1", title: "用户监控", path: "/index/usermonitoring" }],
  },
  {
    id: "8",
    title: "数据统计",
    icon: "Graph",
    children: [{ id: "8-1", title: "数据概览", path: "/index/dataoverview" }],
  },
  {
    id: "9",
    title: "客服中心",
    icon: "Chart",
    children: [{ id: "9-1", title: "客服列表", path: "/index/servicelist" }],
  },
  {
    id: "10",
    title: "权限设置",
    icon: "Setting",
    children: [
      { id: "10-1", title: "权限设置", path: "/index/permissionsettings" },
    ],
  },
  {
    id: "11",
    title: "demo",
    icon: "Location",
    children: [{ id: "11-1", title: "百度地图", path: "/index/demo" }],
  },
];

export function getFullPath(path: string) {
  let msg: { title: string; id: string; path?: string }[] = [];

  routes.forEach((item) => {
    if (item.path === path)
      msg = [{ title: item.title, path: item.path, id: item.id }];
    if (msg.length) return;
    item.children?.map((i) => {
      if (i.path === path)
        msg = [
          { title: routes[0].title, path: routes[0].path, id: routes[0].id },
          { title: item.title, id: i.id },
          { title: i.title, path: i.path, id: i.id },
        ];
    });
  });

  return msg;
}
