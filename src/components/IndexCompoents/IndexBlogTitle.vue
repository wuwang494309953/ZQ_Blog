<template>
  <div class="row">
    <div class="col-md-8">
      <IndexBlogItem v-for="n in 5" :key="n"></IndexBlogItem>
    </div>
    <div class="col-md-4 rightWidth">
      <div class="row">
        <div class="col-md-11 col-md-offset-1">
          <IndexME></IndexME>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IndexBlogItem from './IndexBlogItem.vue'
import IndexME from './IndexME.vue'
export default {
  name: 'IndexBlogTitle',
  components: {
    IndexBlogItem,
    IndexME
  }
}
</script>

<style>
  .rightWidth {
  }
</style>
