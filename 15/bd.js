// JavaScript Document	<script>
			
		
			
		function yanzheng(){	
	var a=document.getElementById("shuru");
		var b=document.getElementById("p2");
			alert(a.value.length);
			if(!a.value)
			{

			a.style.borderColor="red";
			b.innerHTML="姓名不能为空";
			
			b.style.color="red";
			}
		else
			{//alert(a.value.length);
				var len=0;
			 for(var i=0;i<a.value.length;i++)
				 {
				 var c=a.value.charCodeAt(i);
				
				if (c>=0 && c<= 128) 
					  { len++; 
     					} 
     				  else{ 
      					len+=2; 
     					}
				 }
			
			if(len>=4&&len<=16)
				 {
					 a.style.borderColor="green";
					 b.innerHTML="姓名格式正确";
					 b.style.color="green";
				 }
			else
				{
				 a.style.borderColor="red";
				b.innerHTML="姓名格式错误";
				b.style.color="red";
				}
			}
		}
	