<template>
  <div class="hello">
    <form>
      <input type="text" style="display: none" />
      <input v-model="currentTask" type="text" />
      <input type="button" value="add!" />
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data: () => ({
    tasks: [],
    currentTask: "",
  }),
  created: async function () {
    try {
      const result = await axios.get("http://localhost:3000");
      this.tasks = result.data;
    } catch (err) {
      alert(JSON.stringify(err));
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
.table {
  height: 100%;
  text-align: center;
}
</style>