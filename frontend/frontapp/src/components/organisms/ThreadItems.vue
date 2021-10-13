<template>
  <div class="thread-item-wrapper">
    <ThreadItem
      v-for="task in all_tasks"
      :key="task.thread_id"
      :taskItem="task"
    />
  </div>
</template>
<script>
import ThreadItem from "../molecules/ThreadItem";

export default {
  name: "ThreadItems",
  components: {
    ThreadItem,
  },
  data: () => ({}),
  props: ["all_tasks"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.thread-item-wrapper {
  width: 100%;
  max-width: 800px;
}
</style>