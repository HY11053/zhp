/*搜索*/
function search() {
    var url="http://www.xiangmu.com/project/list.aspx?keyword=";
    if (document.getElementById("keyword").value!="" & document.getElementById("keyword").value!="输入项目/品牌/行业关键字")
    {
        var keyword=encodeURI(document.getElementById("keyword").value);
        location.href=url+keyword;
    }
    else
    {
       alert("输入项目/品牌/行业关键字！");
    }
    }
function KeyDown()
{
    if (event.keyCode == 13)
    {
        event.returnValue=false;
        event.cancel = true;
       search();
    }
}
 function showClass(divid)
   {
	  document.getElementById(divid).style.display='block';
    }
function hideClass(divid)
{
   document.getElementById(divid).style.display='none';
}
//弹出企业网站
function web(url)
{
   window.open(url); 
}
/*弹出层*/
function select_lay1(url,w,h)
{
  var msgw,msgh,bordercolor;
  var str='<iframe src='+url+' width='+w+' marginwidth=0 height='+h+' marginheight=0 scrolling=no frameborder=0 id=rightframe10 name=rightframe10></iframe>'
  var sWidth,sHeight;
   sWidth=document.body.offsetWidth;
   sHeight=document.body.offsetHeight+5;

   var bgObj=document.createElement("div");
   bgObj.setAttribute('id','bgDiv');
   bgObj.style.position="absolute";
   bgObj.style.top="0";
   bgObj.style.background="#f1f1f1";
   bgObj.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=4,opacity=55,finishOpacity=35";
   bgObj.style.opacity="0.8";
   bgObj.style.left="0";
   bgObj.style.width="100%";
   bgObj.style.height=sHeight+"px";
   document.body.appendChild(bgObj);
    
   var sWidth,sHeight;
   sWidth=document.body.offsetWidth;
   sHeight=document.body.offsetHeight;
   var msgObj=document.createElement("div")
   msgObj.setAttribute("id","msgDiv");
   msgObj.setAttribute("align","center");
   msgObj.style.position="absolute";
   msgObj.style.background="#808080";
   msgObj.style.font="12px/1.6em 宋体, Geneva, Arial, Helvetica, sans-serif";
   msgObj.style.border="0px solid #C1D7EC";
   msgObj.style.width=w;
   msgObj.style.height=h;
   msgObj.style.top=(document.documentElement.scrollTop+40) + "px";
   msgObj.style.left=(sWidth-w)/2 + "px";


 document.body.appendChild(msgObj);
 var txt=document.createElement("p");
 txt.style.margin="0 0"
 txt.setAttribute("id","msgTxt");
 txt.innerHTML=str;
 document.getElementById("msgDiv").appendChild(txt);
}
function wl(){
 document.getElementById("msgDiv").removeChild(document.getElementById("msgTxt"));
 document.body.removeChild(document.getElementById("bgDiv"));
 document.body.removeChild(document.getElementById("msgDiv"));
 }