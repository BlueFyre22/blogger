<script setup>
import { blogsService } from '@/services/BlogsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';


async function editBlog() {
  try {
    await blogsService.editBlog(editableBlogData.value)
    editableBlogData.value = {
      title: '',
      body: "",
      imgUrl: "",

    }

  }
  catch (error) {
    Pop.error(error);
    logger.log("ruh roh", error)
  }
}

const editableBlogData = ref(
  {

    title: '',
    body: "",
    imgUrl: "",

  }
)

</script>


<template>
  <form @submit.prevent="editBlog()">
    <div class="form-floating mb-3">
      <input v-model="editableBlogData.title" type="text" class="form-control" id="blog-title" placeholder="Title..."
        required maxlength="500">
      <label for="house-year">Year home was built</label>
    </div>

    <button class="btn btn-success w-25">Submit</button>
  </form>
</template>


<style lang="scss" scoped></style>