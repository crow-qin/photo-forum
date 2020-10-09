import * as types from "./mutation-types";

export default {
  [types.CHANGE_GOOD](state, { flag, id }) {
    console.log(id);

    state.picList = state.picList.map(item => {
      if (item.pid == id) {

        let goodNum = flag ? item.goodNum + 1 : item.goodNum - 1;
        return { ...item, goodNum }
      }
      return item
    })
  },
  [types.CHANGE_LIKE](state, { flag, id }) {
    console.log(id);

    state.picList = state.picList.map(item => {
      if (item.pid == id) {
        let likeNum = flag ? item.likeNum + 1 : item.likeNum - 1;
        return { ...item, likeNum }
      }
      return item
    })
  },
  [types.CHANGE_USER_TAG]({ userList, currentUser }, { id, type, flag }) {
    if (currentUser.length == 0) {
      return;
    }
    let user = userList.find(item => item.uid == currentUser)

    if (flag) {
      user[type].push(id)
    } else {
      let no = user[type].indexOf(id)
      if (no > -1) {
        user[type].splice(no, 1)
      }
    }
    userList = userList.map(item => {
      if (currentUser == item.uid) {
        return user
      }
      return item
    })
    console.log(userList)

  },
  // 改变用户时
  [types.CHANGE_USER](state, uid) {
    state.currentUser = uid
  },
  // 上传图片
  [types.ADD_PIC]({ picList }, pic) {
    picList.unshift(pic)
  },
  // 上传评论
  [types.ADD_COMMENT](state, { pid, obj }) {
    state.picList = state.picList.map(item => {
      if (item.pid == pid) {
        item.comment = item.comment != undefined ? [obj, ...item.comment] : [obj];
        console.log(item.comment, obj)
        // return { ...item, 'comment': [comment, ...item.comment] }
      }
      return item
    })
  }
}