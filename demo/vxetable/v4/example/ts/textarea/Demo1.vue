<template>
  <div>
    <vxe-textarea v-model="val1" placeholder="默认尺寸"></vxe-textarea>
    <vxe-textarea v-model="val2" size="medium" placeholder="中等尺寸"></vxe-textarea>
    <vxe-textarea v-model="val3" size="small" placeholder="小型尺寸"></vxe-textarea>
    <vxe-textarea v-model="val4" size="mini" placeholder="超小尺寸"></vxe-textarea>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const val1 = ref('')
const val2 = ref('')
const val3 = ref('')
const val4 = ref('')
</script>
