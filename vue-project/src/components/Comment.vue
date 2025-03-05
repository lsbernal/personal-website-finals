<template>
  <div class = "comment-container">
    <h3>Comments:</h3>
    <ul>
      <li v-for="(c, index) in comments" :key="index">
        <strong>{{ c.first_name }} {{ c.last_name }}</strong>: {{ c.comment }}
      </li>
    </ul>
  </div>
</template> 

<script>
import { supabase } from "../lib/supabaseClient";


export default {
  data() {
    return {
      comments: [],
    };
  },
  mounted() {
    this.fetchComments();
  },
  methods: {
    async fetchComments() {
      const { data, error } = await supabase.from("comments").select("*");
      if (error) {
        console.error("Error fetching comments:", error);
      } else {
        this.comments = data;
      }
    },
  },
};
</script>

<style scoped>
.comment-container {
  background-color: #ff0000 !important;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  width: fit-content;
  margin: 0 auto; /* Centers the comment container */
  text-align: center; /* Aligns text to the center */
}

</style>
