<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!-- new pizza -->
      <newPizza></newPizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- 品种展示 -->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import NewPizza from './NewPizza.vue'

  // 组件内守卫
  // beforeRouterEnter 和 beforeRouterLeave
  export default {
    // data() {
    //   return {
    //     name: 'Henry'
    //   }
    // },
    // beforeRouteEnter(to, from, next) {
    //   // 在进入到当前组件的时候，触发此事件
    //   // alert('hello' + this.name)  // 报错----name----undefined
    //   // next()
    //   // 因为在执行beforeRouterEnter的时候，data中的数据还没有被渲染出来

    //   // 此时可以使用回调帮助拿到data中的数据
    //   next(vm =>{
    //     alert("hello " + vm.name)
    //   })
    // },
    // beforeRouteLeave (to, from, next) {
    //   // 在离开当前组件的时候，触发此事件
    //   if(confirm('确认离开么？') == true){
    //     next()
    //   }
    //   else{
    //     next(false)
    //   }
    // }

    components: {
      'newPizza': NewPizza
    },
    data() {
      return {
        // getMenuItems: []
      }
    },
    methods: {
      deleteData(item) {
        fetch("https://wd1695319840sjftof.wilddogio.com/menu/" + item.id + "/.json", {
            method: "DELETE",
            headers: {
              'Content-type': 'application/json'
            }
          })
          .then(res => res.json())
          // .then(data => this.$router.push({
          //   name: 'menuLink'
          // }))
          // 不跳转刷新也能实现数据同步--异步刷新
          .then(data => {
            this.$store.commit('removeMenuItems', item)
          })
          .then(err => console.log(err))
      }
    },
    computed: {
      getMenuItems: {
        // 在vuex中获取数据
        get() {
          // return this.$store.state.menuItems

          // 通过getters获取数据
          return this.$store.getters.getMenuItems
        },
        set() {

        }
      },
    },
    // 钩子函数
    created() {
      fetch("https://wd1695319840sjftof.wilddogio.com/menu.json")
        .then(res => {
          return res.json()
        })
        .then(data => {
          // console.log(data)
          let menuArray = []
          for (let key in data) {
            // console.log(key) //id
            // console.log(data[key]) //每一个对象
            data[key].id = key
            menuArray.push(data[key])
          }
          // this.getMenuItems = menuArray

          // 数据同步
          this.$store.commit('setMenuItems', menuArray)
        })
    }
  }
</script>

<style scoped>

</style>