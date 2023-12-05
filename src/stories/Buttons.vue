<template>
  <v-btn @click="onClick" :color="color" :size="size" :disabled="disabled" :appendIcon="appendIcon" :prependIcon="prependIcon" :variant="variant" :tile="tile" :rounded="rounded">{{ label }}</v-btn>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'MyButton',

  props: {
    label: {
      type: String,
      required: true,
    },
    color: String,
    size: String,
    disabled: Boolean,
    appendIcon: String,
    prependIcon: String,
    variant: String,
    loading: Boolean,
    tile: Boolean,
    flat: Boolean,
    rounded: Boolean
    // ... include other v-btn properties as needed
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      onClick() {
        emit('click');
      },
    };
  },
};
</script>
