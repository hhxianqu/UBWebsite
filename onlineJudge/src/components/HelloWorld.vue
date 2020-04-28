<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(item, i) in typeList" v-bind:key="i">
        <type :title='item.title' :content='item.content'></type>
      </li>
    </ul>
  </div>
</template>

<script>
import type from '@/components/type'

export default {
  name: 'Home',
  components: {
    type: type
  },
  data () {
    return {
      msg: 'Welcome !',
      typeList: [
        {
          title: 'IGCSE',
          content: '全新真题'
        },
        {
          title: 'Alevel',
          content: '全新真题'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
