
function addZero(d) {
  return parseInt(d) >= 10 ? d : '0' + d
}

function formatDate(day) {
  // console.log(day);

  let nowDay = new Date().getTime();
  let commentDay = new Date(day).getTime();
  let ds = (nowDay - commentDay) / 1000;
  if (ds < 60) {
    return "刚刚";
  }
  let dm = ds / 60;
  if (dm < 60) {
    return Math.round(dm) + "分前";
  }
  let dd = dm / 60;
  if (dm < 24) {
    return Math.round(dd) + "小时前";
  }
  let dM = dd / 30;
  if (dM < 30) {
    return Math.round(dM) + "天前";
  }
  let ny = new Date(nowDay).getFullYear();
  let cy = new Date(day).getFullYear();
  let dy = new Date(day).toLocaleDateString();
  dy = dy.split('/').map(item => addZero(item)).join('-')
  if (ny == cy) {
    return dy
      .split("-")
      .splice(1)
      .join("-");
  }
  return dy;
}
export {
  formatDate

}