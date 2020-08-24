<template>
  <div class="submenu">
    <div class="item">{{data.title}} ></div>
    <div class="sunbox">
      <template v-for="item of data.children">
        <MenuItem v-if="!item.children" :title="item.title" :key="item.id"></MenuItem>
        <SubMenuItem v-else :data="item" :key="item.id"></SubMenuItem>
      </template>
    </div>
  </div>
</template>

<script>
    import SubMenuItem from "@/components/SubMenuItem.vue";
    import MenuItem from "@/components/MenuItem.vue";

    export default {
        name: "SubMenuItem",
        props: {
            data: {
                default: {},
                type: Object
            },
        },
        components: {
            MenuItem,
            SubMenuItem
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .submenu {
    position: relative;
    .item {
      line-height: 50px;
      background-color: #000;
      color: #FFF;
    }
    .sunbox {
      width: 100%;
      position: absolute;
      left: 100%;
      top: 0;
      display: none;
    }
    &:hover {
      > .sunbox {
        display: block;
      }
    }
  }

</style>
