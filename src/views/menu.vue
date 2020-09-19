<template>
  <div class="menu">
    <template v-for="item of menus">
      <MenuItem v-if="!item.children" :title="item.title" :key="item.id"></MenuItem>
      <SubMenuItem v-else :data="item" :key="item.id"></SubMenuItem>
    </template>
  </div>
</template>

<script>
    // @ is an alias to /src
    import { reactive, toRefs } from '@vue/composition-api';
    import MenuItem from "@/components/MenuItem.vue";
    import SubMenuItem from "@/components/SubMenuItem.vue";

    export default {
        name: "Menu",
        components: {
            MenuItem,
            SubMenuItem
        },
        setup() {
            let state = reactive({
                menus: [
                    {
                        id: '1',
                        title: '菜单1'
                    },
                    {
                        id: '2',
                        title: '菜单2',
                        children: [
                            {
                                id: '2-1',
                                title: '菜单2-1',
                            },
                            {
                                id: '2-2',
                                title: '菜单2-2',
                                children: [
                                    {
                                        id: '2-2-1',
                                        title: '菜单2-2-1',
                                        children: [
                                            {
                                                id: '2-2-1-1',
                                                title: '菜单2-2-1-1',
                                            }
                                        ]
                                    },
                                    {
                                        id: '2-2-2',
                                        title: '菜单2-2-2',
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        id: '3',
                        title: '菜单3',
                        children: [
                            {
                                id: '3-1',
                                title: '菜单3-1',
                            },
                            {
                                id: '3-2',
                                title: '菜单3-2',
                                children: [
                                    {
                                        id: '3-2-1',
                                        title: '菜单3-2-1',
                                    }
                                ]
                            },
                        ]
                    },
                ]
            })

            return {
                ...toRefs(state),
            }
        }
    };
</script>
<style scoped lang="less">
  .menu {
   width: 120px;
  }
</style>
