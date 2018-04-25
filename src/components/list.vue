<template>
 <div id="list">
     <h2>目标列表</h2>
     <div class="todo">
         <h3>添加目标</h3>
         <input type="text" class="text-keyword" placeholder="输入目标后，按回车确认" @keyup.13="addList" v-model="addText">
         <p>共有{{prolist.length}}个目标,{{noend==0?"全部完成了":"已完成"+(prolist.length-noend)+", 还有"+noend+"条未完成"}}</p>
         <p>
             <input type="radio" name="chooseType" checked="true"><label>所有目标</label>
             <input type="radio" name="chooseType"><label>已完成目标</label>
             <input type="radio" name="chooseType"><label>未完成目标</label>
         </p>
     </div>
     <ul>
         <li class="li1" v-for="list in newlist">
             <div>
                <span class="status-span"></span>
                <span>{{list.name}}</span>
                <span class="close" @click="delectList(index)">X</span>
             </div>
         </li>
     </ul>
 </div>
</template>
<script>
export default {
  name: 'list',
  data() {
      return {
          addText: '',
          prolist: [
              {name: 'html5',status: false},
              {name: 'css3',status: true}
          ],
          newList: []
      }
  },
  methods:{
      addList() {
          this.prolist.push({
              name: this.addText,
              status: false
          });
          this.addText = ''
      },
      chooseList(type) {
          switch(type) {
              case 1:
                this.newList=this.prolist;
                break;
              case 2:
                this.newList=this.prolist.filter(function(item){
                  return item.status
                });
                break;
              case 3:
                this.newList=this.prolist.filter(function(item){
                    return !item.status
                });
                break;
          }
      },
      deleteList(index) {
          this.prolist.splice(index,1);
          this.newList=this.prolist;
      }
  },
  computed: {
      noend: function() {
          return this.prolist.filter(function(item){
              return !item.status
          }).length;
      }
  },
  mounted(){
      this.newList=this.prolist;
  }
  
}
</script>

<style>
body,ul,div,html {
    padding: 0;
    margin: 0;
}
.hidden {
    display: none;
}
.main {
    width: 800px;
    margin: 0 auto;
}
li {
    list-style-type: none;
    line-height: 40px;
    position: relative;
    border: 1px solid transparent;
    padding: 0 20px;
}

#list h2 {
    margin:10px;
}

.todo h3,p {
    margin:10px;
}
li .type-span {
    display: block;
    width: 10px;
    height: 10px;
    background: #ccc;
    margin: 14px 10px 0 0 ;float: left;
}
li .close {
    position: absolute;
    color: #f00;
    font-size: 20px;
    line-height: 40px;
    height: 40px;
    right: 20px;
    cursor: pointer;
    display: none;
    top: 0;
}
li:hover {
    border: 1px solid #09f;
}
li:hover .close {
    display: block;
}
li .text-keyword {
    height: 40px;
    padding-left: 10px;
    box-sizing: border-box;
    margin-left: 10px;
    width: 80%;
    display: none;
}
.text-keyword {
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    padding-left: 10px;
    outline: none;
}
</style>


