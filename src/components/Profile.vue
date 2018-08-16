<template>
  <div class="profile">
    <div class="content" v-for="i in 9" :key=i>
    <h3> {{ name }} </h3>
    <p> {{ text }} </p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data: function() {
    return {
      name: 'おおたまを学ぶ',
      text: 'おおたまを学ぶ'
      /*.repeat(3)*/
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.output {
  text-align: center;
}

div.content {
  background-color: #eee;
  display: inline-block;
  margin: 10px;
  width: 30%;
}

h3 {
  color: black;
}

p {
  width: 90%;
  display: inline-block;
  text-align: left;
}

</style>
