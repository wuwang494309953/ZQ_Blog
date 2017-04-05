<template>
  <div class="row">
    <div class="col-md-9">
      <IndexBlogItem v-for="n in 5"></IndexBlogItem>
  </div>
  </div>
</template>

<script>
import IndexBlogItem from './IndexBlogItem.vue'
export default {
  name: 'IndexBlogTitle',
  components: {
    IndexBlogItem
  }
}
</script>

<style>
</style>
