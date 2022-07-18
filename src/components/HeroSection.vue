<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20 bg-slate-400">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1 border border-blue-700">
          1 column
        </div>
        <div class="col-start-2 col-span-5 border border-blue-700">
          <hero-headline />
        </div>
        <div class="col-start-7 col-span-5 border border-blue-700">
          5 columns
        </div>
        <div class="col-start-12 col-span-1 border border-blue-700">
          1 columns
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import HeroHeadline from "@/components/HeroHeadline.vue";

export default {
  name: "HeroSection",
  components: {
    HeroHeadline,
  },
};
</script>
