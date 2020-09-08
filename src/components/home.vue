<template>
    <div>
        <h3>留言板</h3>
        <input type="text" v-model="msg" ><input type="button" value="发表留言" @click="change_message">
        <br>
        <ul v-for="(value,index) in msg_list">
            <li>{{value}} <a href="javascript:;" @click="del_message(index)">删除</a></li>
        </ul>
        <br>
            <span>留言总数量：{{msg_list.length}}</span>
            <button @click="del_all">删除全部</button>

    </div>
</template>

<script>
    export default {
        name: "Home",
        data: function () {
            return {
                show:true,
                msg:"",
                message: [],
                msg_list:localStorage.msg_list ? JSON.parse(localStorage.msg_list):[]
            }
        },
        methods: {
            change_message() {
                this.message.unshift(this.msg);
                localStorage.msg_list = JSON.stringify(this.message);
                this.msg_list= JSON.parse(localStorage.msg_list);
                this.msg="";
                this.show=true;
            },
            del_message(index){

                this.message.splice(index,1)
                localStorage.msg_list = JSON.stringify(this.message);
                this.msg_list= JSON.parse(localStorage.msg_list);
                if(this.message.length===0){
                    this.show=false
                }
            },
            del_all(){
                this.message=[];
                localStorage.removeItem("msg_list")
                this.show=false
            }
        }
    }
</script>

<style scoped>

</style>
