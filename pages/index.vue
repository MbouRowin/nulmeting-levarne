<script setup lang="ts">
const todo = useTodoStore();
</script>

<template>
  <h1>TODO</h1>

  <button @click="todo.fetchItems" :disabled="todo.isLoading">
    {{ !todo.isLoading ? "Load" : "Loading..." }}
  </button>

  <p v-if="todo.error">{{ todo.error }}</p>

  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Assignee</th>
        <th>Due Date Time</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in todo.items" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.assignee }}</td>
        <td>{{ new Date(item.dueDateTime).toLocaleString("nl-NL") }}</td>
        <td>{{ item.description }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  border-collapse: collapse;
}

table,
th,
td {
  border: 1px solid black;
}

th,
td {
  padding: 10px;
}
</style>
