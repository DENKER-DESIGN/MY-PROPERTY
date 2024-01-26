<template>
    <div>
    <br/>
    <input v-model="numberone" type="number" placeholder="number one" />
    <br/>
    <input v-model="numberTwo" type="number" placeholder="number two" />
    <br />
    <p>sum = {{ sum }}</p>
  </div>
</template>

<script setup>
  import{ ref, watch} from "vue";

const numberone = ref(0);
const numberTwo = ref(0);
const sum = ref(0);
watch(numberone, function () {
sum.value =numberone.value + numberTwo.value;
});
watch(numberTwo, function () {
sum.value = numberone.value + numberTwo.value;

});
</script>