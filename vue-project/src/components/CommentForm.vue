<template>
    <div>
      <h2>Leave a Comment</h2>
      <form @submit.prevent="submitComment">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" required class="form-control">
        </div>
        <div class="form-group">
          <label for="comment">Comment:</label>
          <textarea id="comment" v-model="comment" required class="form-control"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <div v-if="submissionStatus" class="mt-2">
          {{ submissionStatus }}
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import { createClient } from '@supabase/supabase-js'
  
  export default {
    data() {
      return {
        name: '',
        comment: '',
        submissionStatus: null,
        supabase: null, // Initialize Supabase client
        //  Your Supabase URL and Key - IMPORTANT!
        supabaseUrl: 'YOUR_SUPABASE_URL', 
        supabaseKey: 'YOUR_SUPABASE_ANON_KEY',
        tableName: 'comments' // Name of your Supabase table
      }
    },
    mounted() {
      // Initialize Supabase client on component mount
      this.supabase = createClient(this.supabaseUrl, this.supabaseKey)
    },
    methods: {
      async submitComment() {
        this.submissionStatus = "Submitting..."
        try {
          const { error } = await this.supabase
            .from(this.tableName)
            .insert([{ name: this.name, comment: this.comment }])
  
          if (error) {
            console.error("Error inserting comment:", error)
            this.submissionStatus = "Error submitting comment. Please try again."
          } else {
            this.submissionStatus = "Comment submitted successfully!"
            this.name = ''; // Clear form fields
            this.comment = '';
          }
        } catch (err) {
          console.error("An unexpected error occurred:", err)
          this.submissionStatus = "An unexpected error occurred. Please try again later."
        }
      }
    }
  }
  </script>
  
  <style scoped>
  /* Basic styling - Customize as needed */
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .form-control {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .btn {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>