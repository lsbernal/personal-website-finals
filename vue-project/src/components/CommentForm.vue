<template>
  <div class="comment-form-container">
    <form @submit.prevent="submitComment" class="comment-form">
      <div class="name-fields">
        <input type="text" v-model="firstName" placeholder="First Name" required />
        <input type="text" v-model="lastName" placeholder="Last Name" required />
      </div>
      <textarea v-model="comment" placeholder="Type your comment here" required></textarea>
      <button type="submit">Submit</button>
    </form>

    <!-- Display Comments Below the Form -->
    <div class="comments-section">
      <h3>Comments:</h3>
      <ul>
        <li v-for="(c, index) in comments" :key="index">
          <strong>{{ c.first_name }} {{ c.last_name }}</strong>: {{ c.comment }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { supabase } from "../lib/supabaseClient";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      comment: "",
      comments: [],
    };
  },
  mounted() {
    this.fetchComments(); // Fetch comments when component loads
  },
  methods: {
    async submitComment() {
      const { data, error } = await supabase
        .from("comments")
        .insert([{ first_name: this.firstName, last_name: this.lastName, comment: this.comment }]);

      if (!error) {
        this.firstName = "";
        this.lastName = "";
        this.comment = "";
        this.fetchComments(); // Refresh comments after submission
      }
    },
    async fetchComments() {
      const { data, error } = await supabase.from("comments").select("*");
      if (!error) {
        this.comments = data;
      }
    },
  },
};
</script>

<style scoped>
.comment-form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgb(255, 253, 228)  !important;;
  padding: 20px;
  border-style: none !important;
  width: 100%;
}

.comment-form {
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
}

.name-fields {
  display: flex;
  flex-direction: column;
  width: 100%;
}


input, textarea {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 16px;
}

textarea {
  height: 100px;
}

button {
  margin-top: 10px;
  padding: 12px 24px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  display: inline-block;
  transition: all 0.3s ease;
  cursor: pointer;
  width: 100%;
}

button:hover {
  background-color: #414e53;
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}


.comments-section {
  margin-top: 20px;
  background: rgb(255, 253, 228)  !important;
  padding: 15px;
  border:none !important;
  width: 50%;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  text-align: center; 
}
</style>
