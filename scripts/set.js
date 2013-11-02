
window.onload = function () {

    /*初始化变量*/
    var t = 0, /*追踪点击的三角形按钮*/
        items = document.querySelectorAll('#side-nav ul li');

   /*点击站点名称里的三角形变化*/
   /*先把所有的三角形都none*/
   for(var i = 0; i < items.length; i++) {
        for(var r = 0 ; r < items.length ; r++) {
            items[r].getElementsByTagName("img")[0].classList.add("section_hide","section");
        }
   /*给站点名称第一个数据第一个三角形*/        
        items[t].getElementsByTagName("img")[0].classList.remove("section_hide");
   /*点击按钮,按钮添加三角形,其他的按钮的三角形消失*/    
        items[i].onclick = function (i){
            return function (e) {
                /*把原来按钮的三角形消失*/
                     items[t].getElementsByTagName("img")[0].classList.add("section_hide");
                /*继续追踪按钮*/     
                     t = i;
                if (items[i].getElementsByTagName("img")[0].classList.contains("section_hide")) {
                    items[i].getElementsByTagName("img")[0].classList.remove("section_hide");

                }else {
                    items[i].getElementsByTagName("img")[0].classList.add("section_hide");
                } 
            };
        }(i);/*闭包啊*/
   }
};
