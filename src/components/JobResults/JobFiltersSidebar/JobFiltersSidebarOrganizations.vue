<template>
  <accordion-filters header="Organizations" class="mt-5">
    <fieldset>
      <ul class="flex flex-row flex-wrap">
        <li class="w-1/2 h-8">
          <input id="VueTube" type="checkbox" class="mr-3" />
          <label for="VueTube">VueTube</label>
        </li>
        <li class="w-1/2 h-8">
          <input id="Between Vue Me" type="checkbox" class="mr-3" />
          <label for="Between Vue Me">Between Vue</label>
        </li>
        <li class="w-1/2 h-8">
          <input id="Et Vue Brute" type="checkbox" class="mr-3" />
          <label for="Et Vue Brute">Et Vue Brute</label>
        </li>
        <li class="w-1/2 h-8">
          <input id="Vue and You" type="checkbox" class="mr-3" />
          <label for="Vue and You">Vue and You</label>
        </li>
      </ul>
    </fieldset>
  </accordion-filters>
</template>

<script>
import AccordionFilters from "@/components/Shared/AccordionFilters.vue";

export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    AccordionFilters,
  },
};
</script>
