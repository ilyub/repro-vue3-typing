import { defineComponent } from "vue";

export const comp = defineComponent({
  name: "Sample1",
  emits: {
    event(): boolean { return true; }
  },
  methods: {
      method() {
      this.$emit("wrong-event-name");
    }
  }
});
