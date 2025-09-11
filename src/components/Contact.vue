<template>
  <div
    class="py-4 p-st"
    :class="{
      'bg-light': !nightMode,
      'bg-dark2': nightMode,
    }"
  >
    <div class="container text-center">
      <!-- Top line -->
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />
      <br />

      <!-- Contact message -->
      <p
        class="mb-4 text-lg"
        :class="{ 'text-dark': !nightMode, 'text-light': nightMode }"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        Have a project in mind or just want to say hi? <br />
        I’d love to hear from you!
      </p>

      <!-- Contact button -->
      <a
        :href="'mailto:anakievskaangelina@gmail.com'"
        class="contact-btn"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        Stay in Touch
      </a>

      <br /><br />
      <!-- Bottom line -->
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {
    nightMode: Boolean,
  },
};
</script>

<style scoped>
/* Text color for light mode */
.text-dark {
  color: #333; /* dark gray for light background */
}

/* Button styling */
.contact-btn {
  display: inline-block;
  padding: 14px 36px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid #759CC9;
  color: #759CC9;
  background-color: transparent;
}

.contact-btn:hover {
  background-color: #759CC9;
  color: #fff;
}

/* Responsive button */
@media screen and (max-width: 768px) {
  .contact-btn {
    width: 70%;
    padding: 12px 0;
  }
}
</style>
