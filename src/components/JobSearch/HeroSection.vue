<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1">1 column</div>
        <div class="col-start-2 col-span-5">
          <hero-headline />
          <job-search-form />
        </div>
        <div class="col-start-7 col-span-5 self-center justify-self-center">
          <img
            class="w-80 h-80 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
          />
        </div>
        <div class="col-start-12 col-span-1">1 columns</div>
      </div>
    </section>
  </main>
</template>

<script>
import HeroHeadline from "@/components/JobSearch/HeroHeadline.vue";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";

export default {
  name: "HeroSection",
  components: {
    HeroHeadline,
    JobSearchForm,
  },
};
</script>
