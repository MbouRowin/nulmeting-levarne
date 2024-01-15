interface TodoItem {
  id: number;
  assignee: string;
  dueDateTime: string;
  description: string;
}

export const useTodoStore = defineStore("todo", () => {
  const items = reactive<TodoItem[]>([]);
  const isLoading = ref(false);
  const error = ref<string>();

  async function fetchItems() {
    isLoading.value = true;

    try {
      const res = await fetch("/api/todo");
      const { todo }: { todo: TodoItem } = await res.json();

      if (items.some((item) => item.id == todo.id)) {
        error.value = `Item already exists: ${todo.description}`;
        return;
      }

      items.push(todo as TodoItem);
      error.value = undefined;
    } catch (e: any) {
      error.value = e.message;
    } finally {
      isLoading.value = false;
    }
  }

  return { items, isLoading, error, fetchItems };
});
