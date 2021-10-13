<template>
  <div class="thread-item">
    <div class="thread-item-wrapper">
      <ul>
        <li
          v-for="(category, key) in threadCategories"
          :key="key"
          class="thread-item-category"
        >
          {{ category }}
        </li>
      </ul>
    </div>
    <div class="thread-item-wrapper">
      <p class="thread-item-title">{{ taskItem.threadTitle }}</p>
    </div>
    <div class="thread-item-wrapper">
      <div class="thread-item-info">
        <span>最終更新：{{ taskItem.updatedAt }}</span>
        <span>書き込み数：{{ taskItem.updatedAt }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ThreadItem",
  data: () => ({
    threadCategories: [],
  }),
  props: ["taskItem"],
  mounted() {
    this.threadCategories = this.taskItem.threadCategoryName.split(",");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.thread-item {
  margin-bottom: 20px;
  padding: 10px 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.thread-item-wrapper {
  display: flex;
  justify-content: start;
  margin-bottom: 5px;
}

.thread-item-wrapper > ul {
  display: flex;
  justify-content: start;
}

.thread-item-category {
  padding: 2px 10px;
  margin-right: 5px;
  border-radius: 15px;
  background-color: #c8ca2a;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
}

.thread-item-title {
  font-size: 25px;
}

.thread-item-info {
  font-size: 15px;
  color: #888;
}
</style>