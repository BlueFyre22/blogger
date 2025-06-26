<script setup>
import { Blog } from '@/models/Blog.js';



defineProps({
  blog: { type: Blog, required: true }
})



</script>


<template>
  <div class="row border">
    <div class="col-8">
      <div>
        <img :src="blog.creator.picture" alt="" class="creator-img">
        <small class="p-3">{{ blog.creator.name }}</small>
      </div>
      <div class="d-flex flex-column align-items-start ms-2">
        <RouterLink :to="{ name: 'Blog Card', params: { blogId: blog.id } }">

          <p class="mt-3 fs-4 fw-bold">{{ blog.title }}</p>
        </RouterLink>

        <p>{{ blog.body.slice(0, 200) }}...</p>
        <p class="mt-5">{{ blog.createdAt }}</p>
      </div>
    </div>
    <div class="col-4 p-3 rounded">
      <img
        :src="blog.imgUrl || `https://images.unsplash.com/photo-1514486926376-b0ce3e56c145?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNhZCUyMGZhY2V8ZW58MHx8MHx8fDA%3D`"
        :alt="`picture of ${blog.title}`" class="img-fluid card-img">
    </div>
  </div>
</template>


<style lang="scss" scoped>
.card-img {
  width: 400px;
  aspect-ratio: 2/1;
  box-shadow: 0 3px 5px black;
  object-fit: cover;

}

.creator-img {
  width: 75px;
  object-fit: cover;
  border-radius: 50%;
  margin-top: 4px;
}

a {
  color: black;
  text-decoration: none;

  &:hover {
    color: blue;
  }
}
</style>