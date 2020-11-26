import Vue from "vue"
import Vuex from "vuex"
import mutations from "./mutations";
import getters from "./getters";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: true,
    picList: [
      
      {
        pid: 16,
        url: [
          "https://hbimg.huabanimg.com/2b4c4f1f4c71767f7f71f703aa86134f4dbd4ea51f169e-TsxvQB_fw658/format/webp"
          ,
          "https://hbimg.huabanimg.com/bbe8c112776a62ff1089f7b28d17e7e8d5e1c6e5370dd-l3MgCq_fw658/format/webp"
          ,
          "https://cdn.biubiu001.com/p/ping/116944/img/0ef64077f2d36970425da27c448a2208.jpg"
        ],
        text: '花瓣转载',
        likeNum: 12,
        goodNum: 51,
        username: "灼华",
        userUrl: "https://wx2.sinaimg.cn/mw600/007Dfsqsgy1g8khq373euj30r60qyq8t.jpg",
        date: "2020-10-09 10:12:45",

      },
      {
        pid: 7,
        url: [
          "https://hbimg.huabanimg.com/2b4c4f1f4c71767f7f71f703aa86134f4dbd4ea51f169e-TsxvQB_fw658/format/webp"
          ,
          "https://hbimg.huabanimg.com/bbe8c112776a62ff1089f7b28d17e7e8d5e1c6e5370dd-l3MgCq_fw658/format/webp"
          ,
          "https://cdn.biubiu001.com/p/ping/116944/img/0ef64077f2d36970425da27c448a2208.jpg"
        ],
        text: '花瓣转载',
        likeNum: 12,
        goodNum: 51,
        username: "灼华",
        userUrl: "https://wx2.sinaimg.cn/mw600/007Dfsqsgy1g8khq373euj30r60qyq8t.jpg",
        date: "2020-10-09 10:12:45",

      },
      {
        pid: 8,
        url: [
          "https://hbimg.huabanimg.com/2b4c4f1f4c71767f7f71f703aa86134f4dbd4ea51f169e-TsxvQB_fw658/format/webp"
          ,
          "https://hbimg.huabanimg.com/bbe8c112776a62ff1089f7b28d17e7e8d5e1c6e5370dd-l3MgCq_fw658/format/webp"
          ,
          "https://cdn.biubiu001.com/p/ping/116944/img/0ef64077f2d36970425da27c448a2208.jpg"
        ],
        text: '花瓣转载',
        likeNum: 12,
        goodNum: 51,
        username: "灼华",
        userUrl: "https://wx2.sinaimg.cn/mw600/007Dfsqsgy1g8khq373euj30r60qyq8t.jpg",
        date: "2020-10-09 10:12:45",

      },
      {
        pid: 9,
        url: [
          "https://hbimg.huabanimg.com/2b4c4f1f4c71767f7f71f703aa86134f4dbd4ea51f169e-TsxvQB_fw658/format/webp"
          ,
          "https://hbimg.huabanimg.com/bbe8c112776a62ff1089f7b28d17e7e8d5e1c6e5370dd-l3MgCq_fw658/format/webp"
          ,
          "https://cdn.biubiu001.com/p/ping/116944/img/0ef64077f2d36970425da27c448a2208.jpg"
        ],
        text: '花瓣转载',
        likeNum: 12,
        goodNum: 51,
        username: "灼华",
        userUrl: "https://wx2.sinaimg.cn/mw600/007Dfsqsgy1g8khq373euj30r60qyq8t.jpg",
        date: "2020-10-09 10:12:45",

      },
      {
        pid: 10,
        url: [
          "https://hbimg.huabanimg.com/2b4c4f1f4c71767f7f71f703aa86134f4dbd4ea51f169e-TsxvQB_fw658/format/webp"
          ,
          "https://hbimg.huabanimg.com/bbe8c112776a62ff1089f7b28d17e7e8d5e1c6e5370dd-l3MgCq_fw658/format/webp"
          ,
          "https://cdn.biubiu001.com/p/ping/116944/img/0ef64077f2d36970425da27c448a2208.jpg"
        ],
        text: '花瓣转载',
        likeNum: 12,
        goodNum: 51,
        username: "灼华",
        userUrl: "https://wx2.sinaimg.cn/mw600/007Dfsqsgy1g8khq373euj30r60qyq8t.jpg",
        date: "2020-10-09 10:12:45",

      },
      {
        pid: 11,
        url: [
          "https://hbimg.huabanimg.com/2b4c4f1f4c71767f7f71f703aa86134f4dbd4ea51f169e-TsxvQB_fw658/format/webp"
          ,
          "https://hbimg.huabanimg.com/bbe8c112776a62ff1089f7b28d17e7e8d5e1c6e5370dd-l3MgCq_fw658/format/webp"
          ,
          "https://cdn.biubiu001.com/p/ping/116944/img/0ef64077f2d36970425da27c448a2208.jpg"
        ],
        text: '花瓣转载',
        likeNum: 12,
        goodNum: 51,
        username: "灼华",
        userUrl: "https://wx2.sinaimg.cn/mw600/007Dfsqsgy1g8khq373euj30r60qyq8t.jpg",
        date: "2020-10-09 10:12:45",

      },
      {
        pid: 12,
        url: [
          "https://hbimg.huabanimg.com/2b4c4f1f4c71767f7f71f703aa86134f4dbd4ea51f169e-TsxvQB_fw658/format/webp"
          ,
          "https://hbimg.huabanimg.com/bbe8c112776a62ff1089f7b28d17e7e8d5e1c6e5370dd-l3MgCq_fw658/format/webp"
          ,
          "https://cdn.biubiu001.com/p/ping/116944/img/0ef64077f2d36970425da27c448a2208.jpg"
        ],
        text: '花瓣转载',
        likeNum: 12,
        goodNum: 51,
        username: "灼华",
        userUrl: "https://wx2.sinaimg.cn/mw600/007Dfsqsgy1g8khq373euj30r60qyq8t.jpg",
        date: "2020-10-09 10:12:45",

      },
      {
        pid: 13,
        url: [
          "https://hbimg.huabanimg.com/2b4c4f1f4c71767f7f71f703aa86134f4dbd4ea51f169e-TsxvQB_fw658/format/webp"
          ,
          "https://hbimg.huabanimg.com/bbe8c112776a62ff1089f7b28d17e7e8d5e1c6e5370dd-l3MgCq_fw658/format/webp"
          ,
          "https://cdn.biubiu001.com/p/ping/116944/img/0ef64077f2d36970425da27c448a2208.jpg"
        ],
        text: '花瓣转载',
        likeNum: 12,
        goodNum: 51,
        username: "灼华",
        userUrl: "https://wx2.sinaimg.cn/mw600/007Dfsqsgy1g8khq373euj30r60qyq8t.jpg",
        date: "2020-10-09 10:12:45",

      },
      {
        pid: 14,
        url: [
          "https://hbimg.huabanimg.com/2b4c4f1f4c71767f7f71f703aa86134f4dbd4ea51f169e-TsxvQB_fw658/format/webp"
          ,
          "https://hbimg.huabanimg.com/bbe8c112776a62ff1089f7b28d17e7e8d5e1c6e5370dd-l3MgCq_fw658/format/webp"
          ,
          "https://cdn.biubiu001.com/p/ping/116944/img/0ef64077f2d36970425da27c448a2208.jpg"
        ],
        text: '花瓣转载',
        likeNum: 12,
        goodNum: 51,
        username: "灼华",
        userUrl: "https://wx2.sinaimg.cn/mw600/007Dfsqsgy1g8khq373euj30r60qyq8t.jpg",
        date: "2020-10-09 10:12:45",

      },
      {
        pid: 15,
        url: [
          "https://hbimg.huabanimg.com/2b4c4f1f4c71767f7f71f703aa86134f4dbd4ea51f169e-TsxvQB_fw658/format/webp"
          ,
          "https://hbimg.huabanimg.com/bbe8c112776a62ff1089f7b28d17e7e8d5e1c6e5370dd-l3MgCq_fw658/format/webp"
          ,
          "https://cdn.biubiu001.com/p/ping/116944/img/0ef64077f2d36970425da27c448a2208.jpg"
        ],
        text: '花瓣转载',
        likeNum: 12,
        goodNum: 51,
        username: "灼华",
        userUrl: "https://wx2.sinaimg.cn/mw600/007Dfsqsgy1g8khq373euj30r60qyq8t.jpg",
        date: "2020-10-09 10:12:45",

      },
      {
        pid: 6,
        url: [
          "https://image.diyiyou.com/game/202005/07/1588830258_3.jpg"
          ,
          "https://cdn.biubiu001.com/p/ping/116944/img/acd41d1791f77dbe2da830d822841a2e.jpg"
          ,
          "https://cdn.biubiu001.com/p/ping/116944/img/0ef64077f2d36970425da27c448a2208.jpg"
        ],
        text: '日本 Good Smile Company 与 NextNinja 联手制作、原订于2019冬季推出的手机游戏新作《东方 LostWord》，日前（2月1日）透过其官方 Twitter 宣布本作的正式推出时期将改为2020年4月',
        likeNum: 12,
        goodNum: 51,
        username: "灼华",
        userUrl: "https://wx2.sinaimg.cn/mw600/007Dfsqsgy1g8khq373euj30r60qyq8t.jpg",
        date: "2020-10-09 10:12:45",

      },
      {
        pid: 1,
        url: [
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573464715306&di=326e1ef808e76178c3f7e398a8e0f541&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F08%2F20170808145522_VUHGK.jpeg"
        ],
        text: '假如你可以获得一罐金条并穿越到清末藏起来再穿越回来，你会埋在哪里确保你回来后一定能拿到呢？',
        likeNum: 2,
        goodNum: 3,
        username: "桥姬",
        userUrl: "https://wx4.sinaimg.cn/mw600/95847ca7ly1g8l9uc70thj20fm0eb751.jpg",
        date: "2019-11-11 15:29:45",

      },
      {
        pid: 2,
        url: [
          "https://wx1.sinaimg.cn/mw600/005MNu9zgy1g8svdjfp1lj30u00zq79z.jpg"
          ,
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573464715306&di=326e1ef808e76178c3f7e398a8e0f541&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F08%2F20170808145522_VUHGK.jpeg"

        ],
        text: '假如你可以获得',
        likeNum: 12,
        goodNum: 51,
        username: "灼华",
        userUrl: "https://wx2.sinaimg.cn/mw600/007Dfsqsgy1g8khq373euj30r60qyq8t.jpg",
        date: "2019-11-11 15:29:45",

      },
      {
        pid: 3,
        url: [
          "https://wx4.sinaimg.cn/mw600/006MKLXily1g8rvwri8n0j30rs0rs7i3.jpg"
          ,
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573464715306&di=326e1ef808e76178c3f7e398a8e0f541&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F08%2F20170808145522_VUHGK.jpeg"

        ],
        likeNum: 9,
        goodNum: 11,
        userUrl: "https://wx2.sinaimg.cn/mw600/005GQXeNgy1g8h7gyv1psj30rs10477n.jpg",
        username: "宫古芳香",
        date: "2019-11-11 15:29:45",
        comment: [
          {
            date: "2019-10-11 12:20:20",
            userName: "桥姬",
            userUrl: "https://wx4.sinaimg.cn/mw600/95847ca7ly1g8l9uc70thj20fm0eb751.jpg",
            content: "可恶呀"
          },
          {
            date: "2019-11-11 12:20:20",
            userName: "桥姬",
            userUrl: "https://wx4.sinaimg.cn/mw600/95847ca7ly1g8l9uc70thj20fm0eb751.jpg",
            content: "可恶呀"
          },
          {
            date: "2019-10-11 12:20:20",
            userName: "桥姬",
            userUrl: "https://wx4.sinaimg.cn/mw600/95847ca7ly1g8l9uc70thj20fm0eb751.jpg",
            content: "可恶呀"
          },
        ]
      },
      {
        pid: 4,
        url: [
          "https://wx1.sinaimg.cn/mw600/3dfbc95fly1g8rn7m8h67j20u00u07wh.jpg"
          ,
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573464715306&di=326e1ef808e76178c3f7e398a8e0f541&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F08%2F20170808145522_VUHGK.jpeg"

        ],
        likeNum: 21,
        goodNum: 9,
        userUrl: "https://wx4.sinaimg.cn/mw600/96b447a6gy1g8gc2efhp0j20m40pl78j.jpg",
        username: "帕秋莉",
        date: "2019-06-09 15:29:45"
      },
      {
        pid: 5,
        url: ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573464715306&di=326e1ef808e76178c3f7e398a8e0f541&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F08%2F20170808145522_VUHGK.jpeg"
        ],
        likeNum: 12,
        goodNum: 3,
        userUrl: "https://wx3.sinaimg.cn/mw600/710516c5ly1g8eacgt6jvj20u0140kjl.jpg",
        username: "桃夭",
        date: "2019-11-11 15:29:45"
      }
    ],
    userList: [
      {
        uid: "u1974",
        password: "123",
        name: "关雎",
        avatarUrl: "http://b-ssl.duitang.com/uploads/item/201805/29/20180529064125_LkQFn.thumb.700_0.jpeg",
        like: [
          1
        ],
        good: [
          3
        ]
      },
      {
        uid: "u232",
        password: "123",
        name: "兰佩",
        avatarUrl: 'http://i0.hdslb.com/bfs/article/c3d2fdf4e0f251027bfa586de18b877f042c18db.jpg',
        like: [
          2, 3
        ],
        good: [
          3, 5
        ]
      },
    ],
    currentUser: "u1974"
  },
  mutations,
  getters,
  actions: {
  },
  modules: {
  }
})
