
window.onload = function () {

    /*初始化变量*/
    var t = 0, /*追踪点击的三角形按钮*/
        switchButton = document.getElementById("switchButton"),
        switchProject = document.getElementById("switchProject"),
        iterms = document.getElementById("side-nav").getElementsByTagName("ul")[0].getElementsByTagName("li");

    /*切换项目*/    
    switchButton.onclick = function (e) {
        e.preventDefault(); /*阻止事件的默认行为*/
        if (switchProject.classList.contains('hide')) { /*添加一个class选择器可以节省代码*/
            switchProject.classList.remove('hide');
        } else {
            switchProject.classList.add('hide');
        }
   };

   /*点击站点名称里的三角形变化*/
   /*先把所有的三角形都none*/
   for(var i = 0; i < iterms.length; i++) {
        for( var r = 0 ; r < iterms.length ; r++) {
                     iterms[r].getElementsByTagName("img")[0].classList.add("section_hide","section");
        }
   /*给站点名称第一个数据第一个三角形*/        
        iterms[t].getElementsByTagName("img")[0].classList.remove("section_hide");
   /*点击按钮,按钮添加三角形,其他的按钮的三角形消失*/    
        iterms[i].onclick = function (i){
            return function (e) {
                /*把原来按钮的三角形消失*/
                     iterms[t].getElementsByTagName("img")[0].classList.add("section_hide");
                /*继续追踪按钮*/     
                     t = i;
                if (iterms[i].getElementsByTagName("img")[0].classList.contains("section_hide")) {
                    iterms[i].getElementsByTagName("img")[0].classList.remove("section_hide");

                }else {
                    iterms[i].getElementsByTagName("img")[0].classList.add("section_hide");
                } 
            };
        }(i);/*闭包啊*/
   }
};