<template>
    <div>
        <ul>
            <li>用户详情页：用户的id--->：{{$route.params.id}}</li>
            <li>用户详情页：用户的username--->：{{$route.params.username}}</li>
            <li>用户详情页：用户的bir--->：{{$route.params.bir}}</li>
            <li>用户详情页：用户的content--->：{{$route.params.content}}</li>
        </ul>
        <button><router-link to="/home">返回首页</router-link></button>
        <button><router-link to="/user">返回用户页</router-link></button>

    </div>
</template>

<script>
    export default {
        name: "UserDetail"
    }
</script>

<style scoped>

</style>
