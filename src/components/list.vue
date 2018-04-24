<template>
 <div id="list">
     <h2>目标列表</h2>
     <div class="todo">
         <h3>添加目标</h3>
         <input type="text" class="text-keyword" placeholder="输入目标后，按回车确认">
         <p>共有N个目标</p>
         <p>
             <input type="radio" name="chooseType" checked="true"><label>所有目标</label>
             <input type="radio" name="chooseType"><label>已完成目标</label>
             <input type="radio" name="chooseType"><label>未完成目标</label>
         </p>
     </div>
     <ul>
         <li class="li1">
             <div>
                <span class="type-span"></span>
                <span>html5</span>
                <span class="close">X</span>
             </div>
         </li>
         <li class="li1">
             <div>
                 <span class="type-span"></span>
                 <span>css</span>
                 <span class="close">X</span>
             </div>
         </li>
     </ul>
 </div>
</template>
<script>
export default {
  name: 'list',
  
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
li{list-style-type: none;line-height: 40px;position: relative;border: 1px solid transparent;padding: 0 20px;}
li .type-span{display: block;width: 10px;height: 10px;background: #ccc;margin: 14px 10px 0 0 ;float: left;}
li .close{position: absolute;color: #f00;font-size: 20px;line-height: 40px;height: 40px;right: 20px;cursor: pointer;display: none;top: 0;}
li:hover{border: 1px solid #09f;}
li:hover .close{display: block;}
li .text-keyword{height: 40px;padding-left: 10px;box-sizing: border-box;margin-left: 10px;width: 80%;display: none;}
.text-keyword{box-sizing: border-box;width: 100%;height: 40px;padding-left: 10px;outline: none;}
</style>


