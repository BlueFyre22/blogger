<script setup>
import { AppState } from '@/AppState.js';
import BlogCard from '@/components/BlogCard.vue';
import { blogsService } from '@/services/BlogsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const blogs = computed(() => AppState.blogs)

onMounted(() => {
  getBlogs()
})


async function getBlogs() {
  try {
    logger.log("is it running?")
    await blogsService.getBlogs()

  } catch (error) {
    Pop.error(error)
    logger.log('No Blogs are here', error)
  }
}


</script>






<template>

  <section class="container">
    <div class="row gap-2">
      <div class="col-12">
        <BlogCard v-for="blog in blogs" :key="blog.id" :blog />
      </div>
    </div>
  </section>



</template>






<style scoped lang="scss"></style>
