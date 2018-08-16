<template>
  <div>
    <ol>
      <li v-for="(item, index) in items" :key=index>
         <router-link v-bind:to=item.path>
            {{index +1}} ・ {{ item.title }}
         </router-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'TabMenu',
  data: function() {
    return {
      items: [
        { title: 'top', path: '/' },
        { title: 'profile', path: '/profiles' },
        { title: 'skills', path: '/skills' },
        { title: 'outputs', path: '/outputs' }
      ]
    }
  }
}
</script>

<style scoped>

ol {
  margin-left:300px;
  width: 600px;
  display:flex;
  justify-content: center;
  padding: 0;
  list-style: none;
}

li {
  width: 120px;
  height: 50px;
  margin-left:10px;
  margin-right:10px;
  font-size: 18px;
  background-color: black;
  border-radius: 3px;
  position: relative;
}

li:hover {
  opacity: 0.4;
}

/*  router-linkがaタグとして表示されてたのでスタイルをaタグに書いた*/
a {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: white;
  text-decoration: none;
  line-height: 50px;
}

</style>
