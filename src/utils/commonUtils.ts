// export function _debounce(fn:any, delay:number) {
//   //防抖
//     var delay = delay || 200;
//     var timer: any;
//     return function () {
//       var th: any = this;
//       var args = arguments;
//       if (timer) {
//         clearTimeout(timer);
//       }
//       timer = setTimeout(function () {
//         timer = null;
//         fn.apply(th, args);
//       }, delay);
//     };
//   }
//   // 节流
//   export function _throttle(fn: any, interval:number) {
//     var last: number;
//     var timer: any;
//     var interval = interval || 200;
//     return function () {
//       var th: any = this;
//       var args = arguments;
//       var now = +new Date();
//       if (last && now - last < interval) {
//         clearTimeout(timer);
//         timer = setTimeout(function () {
//           last = now;
//           fn.apply(th, args);
//         }, interval);
//       } else {
//         last = now;
//         fn.apply(th, args);
//       }
//     }
//   }