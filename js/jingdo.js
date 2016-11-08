$(function(){
    function tbxxk(obj1,obj2){
        obj1.onmouseover=function(){
            obj2.style.display="block";
        }
        obj1.onmouseout=function(){
            obj2.style.display="none";
        }
    }

    var dingbulefts=$("#dingbulefts");
    var dingbuleftsb=$("#dingbuleftsb");
    tbxxk(dingbulefts,dingbuleftsb)
    var wdjd=$("#wdjd")
    var wdjds=$("ul",$("#wdjds"))[0]
    tbxxk(wdjd,wdjds)
    var dr_3=$("#dr-3")
    var sjjds=$("#sjjds")
    tbxxk(dr_3,sjjds)
    var gzjd=$("#gzjd")
    var gzjds=$("#gzjds")
    tbxxk(gzjd,gzjds)
    var khfw=$("#khfw")
    var khfws=$("#khfws")
    tbxxk(khfw,khfws)
    var wzdh=$("#wzdh")
    var wzdhs=$("#wzdhs")
    tbxxk(wzdh,wzdhs)


   //bannerѡ�

    function xxk2(obj1,obj2){
        for(var i=0;i<obj1.length;i++){
            obj1[i].index=i;
            obj1[i].onmouseover=function(){
                obj2[this.index].style.display="block";
            }
            obj1[i].onmouseout=function(){
                obj2[this.index].style.display="none";
            }
        }
    }

    var lbrs=$(".lbrs");
    var lbl=$(".lbl");
    xxk2(lbrs,lbl);




    //lunbo

    var middle=$(".middle")[0];
    var bit=$("a",$(".bit")[0]);
    var bits=$("li",$(".bits")[0]);
    var jtleft=$(".jtleft")[0];
    var jtright=$(".jtright")[0];
    // ҳ��״̬��ʼ��
    // bit[0].style.zIndex=10;
    for( var i=0;i<bit.length;i++){
        if(i==0){
            continue;
        }
        bit[i].style.opacity=0;
    }

    bits[0].style.background="red";


    var now=0;
    var t=setInterval(move,2000);
// ������벻��
    middle.onmouseover=function(){
        clearInterval(t);
    }
    middle.onmouseout=function(){
        t=setInterval(move,2000);
    }
// СԲ��
    for(var i=0;i<bits.length;i++){
        bits[i].bitt=i;
        bits[i].onclick=function(){
            for(var i=0;i<bit.length;i++){
                // bit[i].style.zIndex=5;
                animate(bit[i],{opacity:0})
                bits[i].style.background="#ccc";
            }
            bits[this.bitt].style.background="red";
            // bit[this.bitt].style.zIndex=10;
            animate(bit[this.bitt],{opacity:1})
            now=this.bitt;
        }
    }
// ���Ҽ�ͷ
    jtleft.onclick=function(){
        movel()
    }
    jtright.onclick=function(){
        move()
    }

    function move(){
        now++;
        if(now==bit.length){
            now=0;}
        for (var i=0; i<bit.length; i++) {
            // bit[i].style.zIndex=5;
            animate(bit[i],{opacity:0})
            bits[i].style.background="#ccc";
        }
        bits[now].style.background="red";
        // bit[now].style.zIndex=10;
        animate(bit[now],{opacity:1})

    }
    function movel(){
        now--;
        if(now<0){
            now=bit.length-1;}
        for (var i=0; i<bit.length; i++) {
            // bit[i].style.zIndex=5;
            animate(bit[i],{opacity:0})
            bits[i].style.background="#ccc";
        }
        bits[now].style.background="red";
        // bit[now].style.zIndex=10;
        animate(bit[now],{opacity:1})

    }



    // f1

    function louxxk(obj1,obj2,obj3,spans){
        for(var k=0;k<obj3.length;k++){
            obj3[k].style.display="none"
        }
        spans[0].style.display="none"
        obj2[0].style.display="block";
        obj3[0].style.display="block";
        for(var i=0;i<obj2.length;i++){
            obj1[i].xx=i;
            obj1[i].onmouseover=function(){
                for(var j=0;j<obj2.length;j++){
                    obj2[j].style.display="none";
                    obj3[j].style.display="none";
                    spans[j].style.display="block"
                }
                obj2[this.xx].style.display="block";
                obj3[this.xx].style.display="block";
                spans[this.xx].style.display="none";
                if(this.xx!=0){
                    spans[this.xx-1].style.display="none";
                }

            }
        }
    }
    var f1tr1=$(".f1tr1");
    var f1br=$(".f1br1");
    var f1tr1K=$(".f1tr1K");
    var f1trspan=$(".f1trspan");
    louxxk(f1tr1,f1br,f1tr1K,f1trspan)
    var f2tr1=$(".f2tr1");
    var f2br=$(".f2br1");
    var f2tr1K=$(".f2tr1K");
    var f2trspan=$(".f2trspan");
    louxxk(f2tr1,f2br,f2tr1K,f2trspan)
    var f3tr1=$(".f3tr1");
    var f3br=$(".f3br1");
    var f3tr1K=$(".f3tr1K");
    var f3trspan=$(".f3trspan");
    louxxk(f3tr1,f3br,f3tr1K,f3trspan)
    var f4tr1=$(".f4tr1");
    var f4br=$(".f4br1");
    var f4tr1K=$(".f4tr1K");
    var f4trspan=$(".f4trspan");
    louxxk(f4tr1,f4br,f4tr1K,f4trspan)
    var f5tr1=$(".f5tr1");
    var f5br=$(".f5br1");
    var f5tr1K=$(".f5tr1K");
    var f5trspan=$(".f5trspan");
    louxxk(f5tr1,f5br,f5tr1K,f5trspan)
    var f6tr1=$(".f6tr1");
    var f6br=$(".f6br1");
    var f6tr1K=$(".f6tr1K");
    var f6trspan=$(".f6trspan");
    louxxk(f6tr1,f6br,f6tr1K,f6trspan)
    var f7tr1=$(".f7tr1");
    var f7br=$(".f7br1");
    var f7tr1K=$(".f7tr1K");
    var f7trspan=$(".f7trspan");
    louxxk(f7tr1,f7br,f7tr1K,f7trspan)
    var f8tr1=$(".f8tr1");
    var f8br=$(".f8br1");
    var f8tr1K=$(".f8tr1K");
    var f8trspan=$(".f8trspan");
    louxxk(f8tr1,f8br,f8tr1K,f8trspan)
    var f9tr1=$(".f9tr1");
    var f9br=$(".f9br1");
    var f9tr1K=$(".f9tr1K");
    var f9trspan=$(".f9trspan");
    louxxk(f9tr1,f9br,f9tr1K,f9trspan)
    var f10tr1=$(".f10tr1");
    var f10br=$(".f10br1");
    var f10tr1K=$(".f10tr1K");
    var f10trspan=$(".f10trspan");
    louxxk(f10tr1,f10br,f10tr1K,f10trspan)
    var f11tr1=$(".f11tr1");
    var f11br=$(".f11br1");
    var f11tr1K=$(".f11tr1K");
    var f11trspan=$(".f11trspan");
    louxxk(f11tr1,f11br,f11tr1K,f11trspan)


//�����Ƽ�

    function jrtj(dk,jtl,jtr){
        var cen=$(dk)[0];
        var one=$("ul",$(dk)[0]);
        var btnl=$(jtl)[0];
        var btnr=$(jtr)[0];
        var wm=parseInt(getStyle(cen,"width"));
        var text=0;
        var now=0;
        one[0].style.zIndex=10;
        //��ʼ��
        for(var i=0;i<one.length;i++){
            if(i==0){continue;}
            one[i].style.left=wm+"px";
        }
        //  //���Ҽ�ͷ
        var flag=true;
        btnr.onclick=function(){
            if(flag){
                aa();
                flag=false;
            }

        }
        btnl.onclick=function(){
            if(flag){
                bb();
                flag=false;
            }
        }
        //�Զ��ֲ�ͼ
        //��¼��ǰ����ͼƬ�±�

        function aa(){
            text++;
            if(text==one.length){
                text=0;
            }
            //��������ͼƬ�㼶���ͣ���ǰ�㼰ͼƬ����
            for(var i=0;i<one.length;i++){
                one[text].style.left=wm+"px";
                animate(one[now],{left:-wm});
                animate(one[text],{left:0},function(){flag=true});
                now=text;
            }
        }

        function bb(){
            text--;
            if(text<0){
                text=one.length-1;
            }
            for(var i=0;i<one.length;i++){
                one[text].style.left=-wm+"px";
                animate(one[now],{left:wm});
                animate(one[text],{left:0},function(){flag=true});
                now=text;
            }
        }
    }
jrtj(".jrtjsL",".jrtjL",".jrtjR")




// ¥����ת

    var floor=$(".floor");
    var floor_nav=$("#floor_nav");
    var nne;
    var nHeight=floor_nav.offsetHeight;
    var floor_lis=$(".floor_lis");
    var cHeight=document.documentElement.clientHeight;
    var h=floor[0].offsetTop;
    console.log(h)
    var floor_z=$(".floor_z");
    var floor_l=$(".floor_l");
    var flag=true;
    var flag2=true;
    floor_nav.style.display="none"
    window.onscroll=function(){
        var obj=document.documentElement.scrollTop?document.documentElement:document.body;

        if(obj.scrollTop>h-300){
            floor_nav.style.display="block";
            //floor_nav.style.top=(cHeight-nHeight)/2+"px"
        }
        else{
            floor_nav.style.display="none";
        }

        for(i=0;i<floor.length;i++){
            if(obj.scrollTop>floor[i].offsetTop-300){
                for(j=0;j<floor.length;j++){
                    floor_z[j].style.display="none"
                    floor_l[j].style.display="block"
                }
                floor_z[i].style.display="block";
                floor_l[i].style.display="none";
                nne=i;
            }
        }

    }
    for(i=0;i<floor.length;i++){
        var obj=document.documentElement.scrollTop?document.documentElement:document.body;
        floor_lis[i].index=i;
        floor_lis[i].onclick=function(){
            animate(obj,{scrollTop:floor[this.index].offsetTop},400);
        }
        floor_lis[i].onmouseover=function(){
            floor_z[this.index].style.display="block"
            floor_l[this.index].style.display="none"
        }
        floor_lis[i].onmouseout=function(){
            if(this.index==nne){
                return;
            }
            floor_z[this.index].style.display="none"
            floor_l[this.index].style.display="block"
        }
    }



    function lunbo(obj1,obj2,left,right,middle){
        // ҳ��״̬��ʼ��
        // obj1[0].style.zIndex=10;
        for( var i=0;i<obj1.length;i++){
            if(i==0){
                continue;
            }
            obj1[i].style.opacity=0;
        }
        obj2[0].style.background="red";


        var now=0;
        var t=setInterval(move,2000);
        // ������벻��
        middle.onmouseover=function(){
            clearInterval(t);
        }
        middle.onmouseout=function(){
            t=setInterval(move,2000);
        }
        // СԲ��
        for(var i=0;i<obj2.length;i++){
            obj2[i].lunbo=i;
            obj2[i].onclick=function(){
                for(var i=0;i<obj1.length;i++){
                    // obj1[i].style.zIndex=5;
                    obj1[i].style.opacity=0;
                    // animate(obj1[i],{opacity:0})
                    obj2[i].style.background="#666";
                }
                obj2[this.lunbo].style.background="red";
                // obj1[this.lunbo].style.zIndex=10;
                obj1[this.lunbo].style.opacity=1;
                // animate(obj1[this.lunbo],{opacity:1})
                now=this.lunbo;
            }
        }
        // ���Ҽ�ͷ
        left.onclick=function(){
            movel()
        }
        right.onclick=function(){
            move()
        }

        function move(){
            now++;
            if(now==obj1.length){
                now=0;}
            for (var i=0; i<obj1.length; i++) {
                // obj1[i].style.zIndex=5;
                obj1[i].style.opacity=0;
                // animate(obj1[i],{opacity:0})
                obj2[i].style.background="#666";
            }
            obj2[now].style.background="red";
            // obj1[now].style.zIndex=10;
            obj1[now].style.opacity=1;
            // animate(obj1[now],{opacity:1})

        }
        function movel(){
            now--;
            if(now<0){
                now=obj1.length-1;}
            for (var i=0; i<obj1.length; i++) {
                // obj1[i].style.zIndex=5;
                obj1[i].style.opacity=0;
                // animate(obj1[i],{opacity:0})
                obj2[i].style.background="#666";
            }
             obj2[now].style.background="red";
            // obj1[now].style.zIndex=10;
            obj1[now].style.opacity=1;
            // animate(obj1[now],{opacity:1})

        }
    }

    var lunbos=$(".lunbos")[0];
    var imgs=$("img",$(".lunbos")[0]);
    var lis=$("li",$(".f1-lunbos")[0]);
    var f1_left=$(".f1-jtleft")[0];
    var f1_right=$(".f1-jtright")[0];
    lunbo(imgs,lis,f1_left,f1_right,lunbos)


    var f2br1=$("#f2brls");
    var f2_imgs=$("li",$("#f2brls"));
    var f2_lis=$("li",$(".f2-lunbos")[0]);
    var f2_left=$(".f2-jtleft")[0];
    var f2_right=$(".f2-jtright")[0];
    lunbo(f2_imgs,f2_lis,f2_left,f2_right,f2br1)


    for(var i=0;i<3;i++){
        var f3lunbo=$(".f3_lunbo")[i];
        var f3_imgs=$("img",$(".f3_lunbo")[i]);
        var f3_lis=$("li",$(".f3-lunbos")[i]);
        var f3_left=$(".f3-jtleft")[i];
        var f3_right=$(".f3-jtright")[i];
        lunbo(f3_imgs,f3_lis,f3_left,f3_right,f3lunbo)
    }

    for(var i=0;i<4;i++){
        var f6lunbo=$(".f6_lunbo")[i];
        var f6_img=$(".f6_img",$(".f6_lunbo")[i]);
        var f6_lis=$("li",$(".f6-lunbos")[i]);
        var f6_left=$(".f6-jtleft")[i];
        var f6_right=$(".f6-jtright")[i];
        lunbo(f6_img,f6_lis,f6_left,f6_right,f6lunbo)
    }


    var f10lunbo=$(".f10_lunbo")[0];
    var f10_imgs=$("img",$(".f10_lunbo")[0]);
    var f10_lis=$("li",$(".f10-lunbos")[0]);
    var f10_left=$(".f10-jtleft")[0];
    var f10_right=$(".f10-jtright")[0];
    lunbo(f10_imgs,f10_lis,f10_left,f10_right,f10lunbo)


    var f11lunbo=$(".f11_lunbo")[0];
    var f11_imgs=$("img",$(".f11_lunbo")[0]);
    var f11_lis=$("li",$(".f11-lunbos")[0]);
    var f11_left=$(".f11-jtleft")[0];
    var f11_right=$(".f11-jtright")[0];
    lunbo(f11_imgs,f11_lis,f11_left,f11_right,f11lunbo)

//�Ҳർ��
    var cdRlis=$("li",$(".cdRB")[0]);
    for(var i=0;i<cdRlis.length;i++){
        cdRlis[i].index=i;
        cdRlis[i].onmouseover=function(){
            this.style.backgroundColor="#c81623";
            animate($("span",this)[0],{left:-60},200);
        }
        cdRlis[i].onmouseout=function(){
            var that=this.index;
            animate($("span",this)[0],{left:0},200,function(){
                cdRlis[that].style.backgroundColor="#7a6e6e";
            })
        }
    }
      var dingbu=$("#dingbu")
     var cdRb1=$(".cdRb1")[0]
    cdRb1.onclick=function(){
        var obj=document.documentElement.scrollTop?document.documentElement:document.body;
        animate(obj,{scrollTop:dingbu.offsetTop},400)
    }
    
//  jQuery("img").lazyload({effect: "fadeIn"});
})
