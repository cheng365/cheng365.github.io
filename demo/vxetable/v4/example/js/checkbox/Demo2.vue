<template>
  <div>
    <vxe-checkbox v-model="val1" content="默认尺寸" indeterminate></vxe-checkbox>
    <vxe-checkbox v-model="val2" size="medium" content="中等尺寸" indeterminate></vxe-checkbox>
    <vxe-checkbox v-model="val3" size="small" content="小型尺寸" indeterminate></vxe-checkbox>
    <vxe-checkbox v-model="val4" size="mini" content="超小尺寸" indeterminate></vxe-checkbox>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const val1 = ref(false)
const val2 = ref(false)
const val3 = ref(false)
const val4 = ref(false)
</script>
