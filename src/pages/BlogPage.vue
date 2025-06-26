<script setup>
import { AppState } from '@/AppState.js';
import EditBlogForm from '@/components/editBlogForm.vue';
import { blogsService } from '@/services/BlogsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';


const activeBlog = computed(() => AppState.activeBlog)

const route = useRoute()

const identity = AppState.identity;
const account = AppState.account;

onMounted(() => {
  getBlogById()
})



async function getBlogById() {
  try {
    logger.log("🗞️📎", route, route.params.blogId)
    const blogId = route.params.blogId
    await blogsService.getBlogById(blogId)

  }
  catch (error) {
    Pop.error(error);
    logger.log("no blog id here", error)
  }
}

const editableBlog = ref({
  title: '',
  picture: '',
  body: ''
})


</script>


<template>
  <div class="container">
    <div class="row text-center align-items-start justify-content-center border border-black rounded my-3">
      <div class="py-3 px-4">
        <img
          :src="activeBlog.imgUrl || 'https://images.unsplash.com/photo-1620110488106-dad904f50930?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
          :alt="activeBlog.title" class="blog-img img-fluid">
      </div>
      <div class="col-3">
        <img :src="activeBlog.creator.picture" :alt="`${activeBlog.creator.name}`" class="profile-img">
      </div>
      <div class="col-5">
        <h5>{{ activeBlog.title }}</h5>
        <p>by {{ activeBlog.creator.name }}</p>
        <p>Last Updated: {{ activeBlog.updatedAt.toLocaleDateString() }}</p>
      </div>
      <div class="col-1">
        <button class="btn btn-warning"><span class="mdi mdi-pen fs-3" type="button" data-bs-toggle="modal"
            data-bs-target="#editBlogForm.vue"></span></button>
      </div>
      <div class="row justify-content-center">
        <p class="col-8 text-start">{{ activeBlog.body }}</p>
      </div>
    </div>

  </div>
  <EditBlogForm />
</template>


<style lang="scss" scoped>
.blog-img {
  height: 300px;
  aspect-ratio: 2/1;
  object-fit: cover;
  border-radius: 10px;
}

.profile-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;

}
</style>