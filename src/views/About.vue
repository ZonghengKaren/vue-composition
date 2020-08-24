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
                getList();
                getList2();
                // getList3();
            })

            let getList = async () => {
                console.log(prpos);
                await root.$axios.get('/api/v1/cmm/hot/products',{size: 20, idx: 1, count: 20})
                    .then((res) => {
                        console.log(res,11111111111);
                    })
                    .then(() => {
                        // console.log(4444);
                        console.log(root.$route.matched,2222222222);
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
               let data =  await root.$axios.get('/api/v1/cmm/hot/products',{size: 20, idx: 1, count: 20});
               await root.$axios.get('/api/v1/cmm/hot/products',{size: 20, idx: 1, count: 20, mobile: data[0].mobile});
            }

            let getList2 = () => {
                root.$axios.get('/api/v1/cmm/hot/products',{size: 20, idx: 1, count: 20})
                    .then((res) => {
                        console.log(res,333333333333);
                    })
                    .catch((e) => {
                        console.log(e);
                    })
                console.log(4444444444444444);
            }

            let getList3 = () => {

                //发送信息给服务端
                root.$socket.emit('login',{
                    username: 'username',
                    password: 'password'
                });
                //
                // root.sockets.subscribe('relogin', (data) => {
                //     console.log(data)
                // })
            }
            return {
                ...toRefs(state),
                data: computed(() => root.$store.getters['Vuextest/getData']),
                actClick
            }
        }
    };
</script>
