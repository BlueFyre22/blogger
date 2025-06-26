<script setup>

</script>


<template>
  <form>
    <div class="floating-form mb-3">
      <input type="url" class="form-control" id="blog-image" placeholder="Blog Image..." maxlength="500">
      <label for="blog-image">Blog Image</label>
    </div>
    <div class="floating-form mb-3">
      <input type="text" class="form-control" name="blog-name" id="blog-name" placeholder="Blog Name..." maxlength="50">
      <label for="blog-name">Blog Name</label>
    </div>
    <div class="floating-form mb-3">
      <input type="test" class="form-control" name="blog-body" id="blog-body" placeholder="Blog body" maxlength="500">
      <label for="blog-body">Body</label>
    </div>
    <button class="btn btn-success w-25">Submit</button>
  </form>
</template>


<style lang="scss" scoped></style>