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
/* Outer container with a gray background and always "hovered" effect */
.image-section {
  background-color: #2d3e50; /* Darker shade for contrast */
  padding: 40px;
  border-radius: 15px; /* Slightly rounder corners */
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2); /* Stronger shadow */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Ensures content is vertically centered */
  width: 100vw; /* Takes up full viewport width */
  margin: 0; /* No margins */
  padding-left: 5vw; /* Optional padding to avoid content hugging the left side */
  padding-right: 5vw; /* Optional padding to avoid content hugging the right side */
  margin-bottom: 60px;
  box-sizing: border-box; /* Ensures padding is included in the container width */
  transform: scale(1.05); /* Always zoomed in */
  transition: box-shadow 0.3s ease; /* Only transition the shadow */
}




/* Styling for the title */
.gallery-title {
  font-size: 36px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 20px; /* Space between title and images */
  text-align: center;
}

/* Container for images */
.image-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
}

/* Ensure images are the same height while keeping aspect ratio */
figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px; /* Fixed width for uniform image sizes */
  height: 250px; /* Fixed height for uniform alignment */
  overflow: hidden;
  background-color: #eff6f8;
}

/* Image styling */
.food-image {
  width: 100%;
  height: 180px; /* Uniform height */
  object-fit: cover; /* Ensures images fill the space properly */
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

figcaption {
  text-align: center;
  font-size: 16px;
  color: #000000; /* White color for the caption text */
  margin-top: 5px;
  font-weight: 300; /* Make the caption text bolder */
  text-transform: capitalize; /* Capitalize first letter of each word */
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
}

  </style>
  