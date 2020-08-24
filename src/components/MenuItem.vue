<template>
  <div class="item">{{title}}</div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
      title: {
          default: '',
          type: String
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .item {
    line-height: 50px;
    background-color: #000;
    color: #FFF;
  }
</style>
