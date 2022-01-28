import { defineComponent } from "vue";

export const comp = defineComponent({
  name: "Sample1",
  emits: {
    event(): boolean { return true; }
  },
  setup(_props, { emit }) {
    emit("wrong-event-name");
  }
});
