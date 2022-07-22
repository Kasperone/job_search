<template>
  <div>Job Page {{ currentJobId }}</div>
</template>

<script>
export default {
  name: "JobView",
  computed: {
    currentJobId() {
      console.log("test");
      return 5;
    },
  },
};
</script>
