<template>
  <div
    class="flex w-full items-center h-16 bg-white border-b border-solid border-brand-gray-1"
  >
    <div class="f-full px-8">
      <div v-if="onJobResultsPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span><span class="text-brand-green-1">1666</span> jobs matched</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubNav",
  computed: {
    onJobResultsPage() {
      return this.$route.name === "JobResults";
    },
  },
};
</script>
