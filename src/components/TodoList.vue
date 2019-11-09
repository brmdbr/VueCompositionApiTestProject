<template>
  <div class="todo-list">
    <div>
      <textarea v-model="newItem" cols="30" rows="10"></textarea>
      <button @click="addItem(newItem), (newItem = '')">Add</button>
    </div>
    <div v-for="item in items" :key="item.id">
      <div>
        <button @click="deleteItem(item.id)">Delete</button>
        &nbsp;
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { toRefs, reactive } from "@vue/composition-api";

import todo from "@/todo";

export default {
  name: "TodoList",
  props: {},
  setup() {
    const todoProps = todo();
    let newItem: string = "";
    return {
      // this returns all of the properties from the
      // useThings function so they are accessible in
      // in the script section and the template
      newItem,
      ...todoProps
    };
  }
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
