<template>
  <section>
    <h1>{{ action }} for everyone</h1>
    <h2>Find your next job at Super Corp.</h2>
  </section>
</template>

<script>
export default {
  name: "HeroHeadline",
  data() {
    return {
      action: "Hello",
      interval: null,
    };
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Buid", "Create", "Design", "Code"];
        const currentActionIndex = actions.indexOf(this.action);
        const nextActionIndex = (currentActionIndex + 1) % 4;
        const nextAction = actions[nextActionIndex];
        this.action = nextAction;
      }, 5000);
    },
  },
};
</script>
