// function add(a, b) {
//   console.log(a + b) 
// }
// console.log('你好棒棒')
// import css from './public/index.css'
// // import img from './public/imgs/1.jpg'
// // let imgNode = new Image()
// // imgNode.src = img
// // document.body.appendChild(imgNode)
import Vue from 'vue'
import App from '@/main'
new Vue({
  el: '#app',
  render: h => h(App)
  // components: {
  //   App
  // },
  // template:'<App/>'
})