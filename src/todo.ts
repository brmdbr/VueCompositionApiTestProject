import { toRefs, reactive } from "@vue/composition-api";

interface TodoItem  {id: number, text: string}

export default () => {
  let items: TodoItem[] = [];
  const data = reactive({
    items
  });

  const addItem = (_text: string) => {
    const _id = new Date().getMilliseconds();
    data.items.push({id: _id, text: _text});
  };

  const deleteItem = (_id: number) => {
      const newArray = data.items.filter(i => i.id !== _id);
      data.items = newArray;
  };

  return {
    ...toRefs(data),
    addItem,
    deleteItem
  };
};