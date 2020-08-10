<template>
    <div class="about">
        <h1>This is an about page</h1>
        <p @click="actClick">{{aaa}}</p>
        <p>{{data}}</p>
        <div class="button">
            <van-button type="default">默认按钮</van-button>
            <van-button type="primary">主要按钮</van-button>
            <van-button type="info">信息按钮</van-button>
            <van-button type="warning">警告按钮</van-button>
            <van-button type="danger">危险按钮</van-button>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import { onMounted, reactive, toRefs, computed } from '@vue/composition-api';

    export default {
        name: "Home",
        setup(prpos, { root }) {
            let state = reactive({
                aaa: 33
            })

            let actClick = () => {
                state.aaa = 44444
            }
            onMounted(() => {
                console.log(prpos);
                root.$axios.get('/api/v1/cmm/hot/products',{size: 20, idx: 1, count: 20})
                    .then((res) => {
                        console.log(res);
                    })
                    .then(() => {
                        // console.log(4444);
                        console.log(root.$route.matched);
                    })
                    .then(() => {
                        // console.log(55555);
                        setTimeout(() => {
                            root.$store.dispatch('Vuextest/fetchData', {data: 222222});
                        },1000)
                    })
                    .catch((e) => {
                        console.log(e);
                    })
            })
            return {
                ...toRefs(state),
                data: computed(() => root.$store.getters['Vuextest/getData']),
                actClick
            }
        }
    };
</script>
