$(function(){
//app下拉	
$("#js_phone_app,#js_add_wx").hover(function(){
	$(this).addClass("hover");
	},function(){
	$(this).removeClass("hover");
});
});	
function ch(t){
if (t==1)
{
 document.getElementById("ch1").className="cur"; 
 document.getElementById("ch2").className=""; 
 document.getElementById("ch3").className=""; 
 document.getElementById("a2_3_1").className="lcur"; 
 document.getElementById("a2_3_2").className="lnone";
 document.getElementById("a2_3_3").className="lnone";
}
if (t==2)
{
 document.getElementById("ch1").className=""; 
 document.getElementById("ch2").className="cur"; 
 document.getElementById("ch3").className=""; 
 document.getElementById("a2_3_1").className="lnone"; 
 document.getElementById("a2_3_2").className="lcur";
 document.getElementById("a2_3_3").className="lnone";
}
if (t==3)
{
 document.getElementById("ch1").className=""; 
 document.getElementById("ch2").className=""; 
 document.getElementById("ch3").className="cur"; 
 document.getElementById("a2_3_1").className="lnone"; 
 document.getElementById("a2_3_2").className="lnone";
 document.getElementById("a2_3_3").className="lcur";
}
}