<template>
  <div class="comment-section">
    <ImageGallery />
  <h1>Leave a comment</h1>
    <CommentForm @comment-added="fetchComments" />
  </div>
</template>

<script>
import CommentForm from "./components/CommentForm.vue";
import ImageGallery from './components/ImageGallery.vue'; 

export default {
  components: { 
    CommentForm, 
    ImageGallery 
  },
};
</script>


<style scoped>
.comment-section {
  display: flex;
  justify-content: center; /* Centers horizontally */
  align-items: flex-start; /* Aligns items at the top */
  gap: 30px; /* Adds spacing between CommentForm and Comment */
  width: 100%;
  border-style:none !important;
  background-color:rgb(255, 253, 228)  !important;
  padding-top: 50px; /* Adds spacing from the top */
}

</style>
