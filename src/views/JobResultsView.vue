<template>
  <div>
    <job-filters-sidebar />
    <job-listings />
  </div>
</template>

<script>
import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSiedebar.vue";
import JobListings from "@/components/JobResults/JobLisitngs.vue";

export default {
  name: "JobResultsView",
  components: {
    JobFiltersSidebar,
    JobListings,
  },
};
</script>
