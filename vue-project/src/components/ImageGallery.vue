<template>
    <div id="gallery "class="image-section">
      <h1 class="gallery-title">My Images</h1>
      <div class="image-container">
        <figure v-for="x in manyFoods" :key="x.name">
          <img :src="x.url" class="food-image">
          <figcaption>{{ x.name }}</figcaption>
        </figure>
      </div>
    </div>
  </template>
  
  <script>
  import { manyFoods } from '../assets/js/images.js'; 
  
  export default {
    data() {
      return {
        manyFoods: manyFoods
      };
    }
  };
  </script>
  
  <style scoped>

.image-section {
  background-color: #2d3e50; 
  padding: 40px;
  border-radius: 15px; 
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2); 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  width: 100vw; 
  margin: 0; 
  padding-left: 5vw; 
  padding-right: 5vw; 
  margin-bottom: 60px;
  box-sizing: border-box; 
  transform: scale(1.05); 
  transition: box-shadow 0.3s ease; 
}


.gallery-title {
  font-size: 36px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 20px; 
  text-align: center;
}

.image-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
}


figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px; 
  height: 250px; 
  overflow: hidden;
  background-color: #eff6f8;
}

.food-image {
  width: 100%;
  height: 180px; 
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

figcaption {
  text-align: center;
  font-size: 16px;
  color: #000000; 
  margin-top: 5px;
  font-weight: 300; 
  text-transform: capitalize; 
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2); 
}

  </style>
  