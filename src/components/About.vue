<template>
  <div class="hello">
    <p class="font" id="show"></P>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'hello about'
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
