<template>
    <h1>Countries</h1>
      <ul>
          <li v-for="comment in comments" :key="comment.id">{{ comment.name }}</li>
      </ul>
</template>    
      <style>
      #app > div {
      border: dashed black 1px;
      display: inline-block;
      margin: 10px;
      padding: 10px;
      background-color: lightyellow;
    }
     </style>
    
    
    <script setup>
    import { ref, onMounted } from 'vue'
    import { supabase } from './lib/supabaseClient'
    
    const comments = ref([])
    
    async function getComments() {
      const { data } = await supabase.from('comments').select()
      countries.value = data
    }
    
    onMounted(() => {
      getComments()
    })
    </script>