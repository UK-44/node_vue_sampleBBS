<template>
  <div class="home">a</div>
</template>
<script>
import axios from "axios";

export default {
  name: "ThreadPage",
  components: {},
  data: () => ({
    tasks: [],
    currentTask: "",
  }),
  created: async function () {
    try {
      const result = await axios.get("http://localhost:3000/ThreadPage");
      this.tasks = result.data;
    } catch (err) {
      alert(JSON.stringify(err));
    }
  },
  provide() {
    return {
      providedData: this.provideData,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>