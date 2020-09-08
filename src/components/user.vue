<template>
    <div>
        这是我的用户组件
        <h3>用户列表页</h3>
        <table border="2">
            <tr>
                <td>ID</td>
                <td>姓名</td>
                <td>生日</td>
                <td>个人信息</td>
                <td>操作</td>
            </tr>
            <tr v-for="(user,index) in users" :key="user.id">
                <td>{{user.id}}</td>
                <td>{{user.username}}</td>
                <td>{{user.bir}}</td>
                <td>{{user.content}}</td>
                <td><a href="javascript:;" @click="del(index)">删除</a>|
                    <router-link :to="`/detail/${user.id}/${user.username}/${user.bir}/${user.content}/`">查看用户详情</router-link>
                </td>
            </tr>
        </table>
        id:<input type="text" v-model="msg_id"><br>
        姓名:<input type="text" v-model="msg_name"><br>
        生日:<input type="text" v-model="msg_bir"><br>
        个人信息:<input type="text" v-model="msg_content"><br>
        <input type="button" value="添加用户" @click="addUser">
    </div>
</template>

<script>
    export default {
        name: "User",
        data: function () {
            return {
                users: [
                    {id: 1, username: "小黑", bir: "2012-12-12", content: "自我介绍"},
                    {id: 2, username: "小白", bir: "2013-12-12", content: "自我介绍"},
                    {id: 3, username: "小红", bir: "2014-12-12", content: "自我介绍"},
                ],
                msg_id: "",
                msg_name: "",
                msg_bir: "",
                msg_content: ""
            }
        },
        methods: {
            del(index) {
                this.users.splice(index, 1)
            },
            addUser() {
                let m1 = this.msg_id;
                let m2 = this.msg_name;
                let m3 = this.msg_bir;
                let m4 = this.msg_content;
                this.users.push({id: m1, username: m2, bir: m3, content: m4})
                this.msg_id="";
                this.msg_name="";
                this.msg_bir="";
                this.msg_content="";
            }
        }
    }
</script>

<style scoped>

</style>
