
  $(function(){
      $('body').append('<div id="msg" style="font-size:20px; margin-bottom:20px" align="center"></div>');
      $('body').append('<table id="tbl"  align="center"></table>');
	  for(var i=0;i<3;i++){
	  var p = "<tr><td id='row_"+i+"_0' onclick='fun_event("+i+",0)' style='padding:20px; border:1px solid #000'></td><td id='row_"+i+"_1'  onclick='fun_event("+i+",1)' style='padding:20px; border:1px solid #000'></td><td id='row_"+i+"_2'  onclick='fun_event("+i+",2)' style='padding:20px; border:1px solid #000'></td></tr>";
	  $('#tbl').append(p);
	  }
	  
	  
  });
//play again button click==========
function play_again(){
	$('#msg').html('');
	fun_refresh();
	$('#start_or_finish_tbl').remove();
}  
//set the play again option=====
function play_again_option_show()
{
    $('body').append('<table align="center" id="start_or_finish_tbl"><tr><td><button  onclick="play_again();" style="background-color:green;border:0px;color:#fff;padding:8px 6px;margin:20px">Play Again</button></td></tr></table>')

}  
//check who win===============================================================================
 function win_check(z)
 {
	var p=z;
//where row same col changes...
	if(document.getElementById('row_0_0').innerText==document.getElementById('row_0_1').innerText && document.getElementById('row_0_1').innerText==document.getElementById('row_0_2').innerText && document.getElementById('row_0_0').innerText==p)
	{
		$('#row_0_0').css('background-color','green');
		$('#row_0_1').css('background-color','green');
		$('#row_0_2').css('background-color','green');
	  
	    if(p=='0')
	    {
		  $('#msg').html('Congratualion For Wining');
		  $('#msg').css('color','green');
	    }
	    else
	    {
		  $('#msg').html('You lost the game!!');
		  $('#msg').css('color','red');
	    }
	    return true;
	}
	if(document.getElementById('row_1_0').innerText==document.getElementById('row_1_1').innerText && document.getElementById('row_1_1').innerText==document.getElementById('row_1_2').innerText && document.getElementById('row_1_0').innerText==p)
	{
		$('#row_1_0').css('background-color','green');
		$('#row_1_1').css('background-color','green');
		$('#row_1_2').css('background-color','green');
	  if(p=='0')
	  {
		$('#msg').html('Congratualion For Wining');
		$('#msg').css('color','green');
	  }
	  else
	  {
		$('#msg').html('You lost the game!!');
		$('#msg').css('color','red');
	  }
	  // fun_refresh();
	  return true;
	}
	if(document.getElementById('row_2_0').innerText==document.getElementById('row_2_1').innerText && document.getElementById('row_2_1').innerText==document.getElementById('row_2_2').innerText && document.getElementById('row_2_0').innerText==p)
	{

	   $('#row_2_0').css('background-color','green');
		$('#row_2_1').css('background-color','green');
		$('#row_2_2').css('background-color','green');
	  if(p=='0')
	  {
		$('#msg').html('Congratualion For Wining');
		$('#msg').css('color','green');
	  }
	  else
	  {
		$('#msg').html('You lost the game!!');
		$('#msg').css('color','red');
	  }
	  // fun_refresh();
	  return true;
	}


//where col same  row changes...
	if(document.getElementById('row_0_0').innerText==document.getElementById('row_1_0').innerText && document.getElementById('row_1_0').innerText==document.getElementById('row_2_0').innerText && document.getElementById('row_2_0').innerText==p)
	{

		$('#row_0_0').css('background-color','green');
		$('#row_1_0').css('background-color','green');
		$('#row_2_0').css('background-color','green');
	  if(p=='0')
	  {
		$('#msg').html('Congratualion For Wining');
		$('#msg').css('color','green');
	  }
	  else
	  {
		$('#msg').html('You lost the game!!');
		$('#msg').css('color','red');
		
	  }
	  // fun_refresh();
	  return true;
	}
	if(document.getElementById('row_0_1').innerText==document.getElementById('row_1_1').innerText && document.getElementById('row_1_1').innerText==document.getElementById('row_2_1').innerText && document.getElementById('row_2_1').innerText==p)
	{

		$('#row_0_1').css('background-color','green');
		$('#row_1_1').css('background-color','green');
		$('#row_2_1').css('background-color','green');
	  if(p=='0')
	  {
		$('#msg').html('Congratualion For Wining');
		$('#msg').css('color','green');
	  }
	  else
	  {
		$('#msg').html('You lost the game!!');
		$('#msg').css('color','red');
	  }
	  // fun_refresh();
	  return true;
	}
	if(document.getElementById('row_0_2').innerText==document.getElementById('row_1_2').innerText && document.getElementById('row_1_2').innerText==document.getElementById('row_2_2').innerText && document.getElementById('row_2_2').innerText==p)
	{
	   $('#row_0_2').css('background-color','green');
		$('#row_1_2').css('background-color','green');
		$('#row_2_2').css('background-color','green');
	 if(p=='0')
	  {
		$('#msg').html('Congratualion For Wining');
		$('#msg').css('color','green');
	  }
	  else
	  {
		$('#msg').html('You lost the game!!');
		$('#msg').css('color','red');
	  }
	  // fun_refresh();
	  return true;
	}

    //where same the cross values...
	if(document.getElementById('row_0_0').innerText==document.getElementById('row_1_1').innerText && document.getElementById('row_1_1').innerText==document.getElementById('row_2_2').innerText && document.getElementById('row_2_2').innerText==p)
	{
		$('#row_0_0').css('background-color','green');
		$('#row_1_1').css('background-color','green');
		$('#row_2_2').css('background-color','green');
	  if(p=='0')
	  {
		$('#msg').html('Congratualion For Wining');
		$('#msg').css('color','green');
	  }
	  else
	  {
		$('#msg').html('You lost the game!!');
		$('#msg').css('color','red');
	  }
	  // fun_refresh();
	  return true;
	}
	if(document.getElementById('row_0_2').innerText==document.getElementById('row_1_1').innerText && document.getElementById('row_1_1').innerText==document.getElementById('row_2_0').innerText && document.getElementById('row_2_0').innerText==p)
	{
		$('#row_0_2').css('background-color','green');
		$('#row_1_1').css('background-color','green');
		$('#row_2_0').css('background-color','green');
	  if(p=='0')
	  {
		$('#msg').html('Congratualion For Wining');
		$('#msg').css('color','green');
	  }
	  else
	  {
		$('#msg').html('You lost the game!!');
		$('#msg').css('color','red');
	  }
	  return true;
	}
return false;
 }

 
 
//refersh the values==========================================================
function fun_refresh()
{
	for(var k=0;k<3;k++)
	{
	  for(var l=0;l<3;l++)
	  {
		 $('#row_'+k+'_'+l).html('');
		 $('#row_'+k+'_'+l).css('background-color','');
		 $('#row_'+k+'_'+l).css('color','');
	  }
	}
} 





//check for game finished or not=================================================================
function check_for_finish_or_not()
{
      var flag_bit=1;
      for(var k=0;k<3;k++)
    {
         for(var l=0;l<3;l++)
        {
            if(document.getElementById('row_'+k+'_'+l).innerText=='')
	        {
	           flag_bit=0;
	           break;
	        }
        }
        if(flag_bit==0)
	    {
	      break;
	    }
    }
    if(flag_bit==1)
    {
        $('#msg').html('Game Over');
		$('#msg').css('color','red');
		$('#msg').css('font-size','20px');
        //fun_refresh();
        return 1;
    }
    else 
    return 0;
}  
  
  
  
//For play start========================================================================================
 function fun_event(i,j)
{ 
     //game already finished or not==============
     if((win_check('0')==true || win_check('1')==true))
    {
	    alert('already finished game');
		return;
    }
	else if(check_for_finish_or_not()==1)
	{
	  alert('already finished game');
	  return ;
	}
	//if game is not finished==========
	if(document.getElementById('row_'+i+'_'+j).innerText=='')
	{
		 //User play---------------
		 var count1=0;
		 $('#row_'+i+'_'+j).html('0');
		 $('#row_'+i+'_'+j).css('background-color','#000');
		 $('#row_'+i+'_'+j).css('color','#fff');
		 var arr1=[];
		 for(var i=0;i<3;i++)
		{ 
			 for(var j=0;j<3;j++)
			{ 
				 if(document.getElementById('row_'+i+'_'+j).innerText=='0' || document.getElementById('row_'+i+'_'+j).innerText=='1')
				{ 
				  var k=i+'-'+j;
				  arr1.push(k); 
				  count1++;
				}
			}
		}
		//after playing user check he wins or not----
		if(win_check('0'))
		 {
				play_again_option_show();
		  		return;
		 }
		 
		 
		 
		 //system play--------------------
		 //before play for system first checks game already finished or not---
		 var t=check_for_finish_or_not();
		 if(t==0)
		{
			system_play();
		}
         else
         {
		     play_again_option_show();
			 return;
		 }		 
		//after playing system check it wins or not----
		 if(win_check('1'))
		 {
		     play_again_option_show(); 
		     return;
		 }
	}
	else
	{
		 alert('already placed');
	}
 }


//for system playing-----------------------------
function system_play()
{
   //first check  total already placed---
   var count=0;
   var arr=[];
   for(var i=0;i<3;i++)
		{ 
			 for(var j=0;j<3;j++)
			{ 
				 if(document.getElementById('row_'+i+'_'+j).innerText=='0' || document.getElementById('row_'+i+'_'+j).innerText=='1')
				{ 
				  var k=i+'-'+j;
				  arr.push(k); 
				  count++;
				}
			}
		}
	if(count==1 && arr.indexOf('1-1')==-1)
	{
		$('#row_1_1').html('1'); 
		$('#row_1_1').css('background-color','red');
		$('#row_1_1').css('color','#fff');
		return;
	}
		//first check if it has opportunity of win or not using call get_opportunity and if no opportunity then follwoing logic---------------
		if(get_opportunity('1')==false)
		{
			//if no opportunity to win for system then ----
			 if(get_opportunity('0')==false)
			 {
			    //alert('randomly have to choise..');
				while(1)
				{
					 var val1=Math.floor(Math.random() * 3) ; 
					 var val2=Math.floor(Math.random() * 3) ; 
					 var y=val1+'-'+val2; 
					 if(arr.indexOf(y)==-1)
					{ 
					  $('#row_'+val1+'_'+val2).html('1'); 
					  $('#row_'+val1+'_'+val2).css('background-color','red');
					  $('#row_'+val1+'_'+val2).css('color','#fff');
					   break;
					}

				}
			}
		}
		
		
} 
  
//checking there is an opportunity of win or not----------------------
function get_opportunity(place_val)
{
	 var val1;
	 var val2;
	 var p=place_val;
	 //for rows same get any opportunity--------
	 for(var d=0;d<3;d++)
	 {
	    val1=d;
		for(var e=0;e<3;e++)
		{
			if(document.getElementById('row_'+d+'_'+e).innerText==p)
			{
				for(var f=0;f<3;f++)
				{
					if(f==e)
					{
						continue;
					}
					//for dth row  eth col and compares to other col excepet eth col-----
					if(document.getElementById('row_'+d+'_'+e).innerText==document.getElementById('row_'+d+'_'+f).innerText)
					{
					    var arr_check=[];
						var x;
						arr_check.push(e);
						arr_check.push(f);
						if(arr_check.indexOf(0)==-1)
						{
							x=0;
						}
						if(arr_check.indexOf(1)==-1)
						{
							x=1;
						}
						if(arr_check.indexOf(2)==-1)
						{
							x=2;
						}
						if(document.getElementById('row_'+d+'_'+x).innerText=='')
						{
							val2=x;
							$('#row_'+val1+'_'+val2).html('1'); 
							$('#row_'+val1+'_'+val2).css('background-color','red');
							$('#row_'+val1+'_'+val2).css('color','#fff');
							return true;
						}
						
					}
					
				}
			}
		}
		
	 }
	 
	 //for cols same get any opportunity--------
	 for(var e=0;e<3;e++)
	 {
	    val2=e;
		for(var d=0;d<3;d++)
		{
			if(document.getElementById('row_'+d+'_'+e).innerText==p)
			{
				for(var f=0;f<3;f++)
				{
					if(f==d)
					{
						continue;
					}
					//for dth row  eth col and compares to other col excepet eth col-----
					if(document.getElementById('row_'+d+'_'+e).innerText==document.getElementById('row_'+f+'_'+e).innerText)
					{
					    var arr_check=[];
						var x;
						arr_check.push(d);
						arr_check.push(f);
						if(arr_check.indexOf(0)==-1)
						{
							x=0;
						}
						if(arr_check.indexOf(1)==-1)
						{
							x=1;
						}
						if(arr_check.indexOf(2)==-1)
						{
							x=2;
						}
						if(document.getElementById('row_'+x+'_'+e).innerText=='')
						{
							val1=x;
							$('#row_'+val1+'_'+val2).html('1'); 
							$('#row_'+val1+'_'+val2).css('background-color','red');
							$('#row_'+val1+'_'+val2).css('color','#fff');
							return true;
						}
					}
					
				}
			}
		}
		
	 }
	 //for crossly get opportunity--------------
	 if(document.getElementById('row_0_0').innerText==document.getElementById('row_1_1').innerText)
	 {
		if(document.getElementById('row_0_0').innerText==p && document.getElementById('row_2_2').innerText=='')
		{
			$('#row_2_2').html('1'); 
			$('#row_2_2').css('background-color','red');
			$('#row_2_2').css('color','#fff');
			return true;
		}
	 }
	 if(document.getElementById('row_0_0').innerText==document.getElementById('row_2_2').innerText)
	 {
		if(document.getElementById('row_0_0').innerText==p && document.getElementById('row_1_1').innerText=='')
		{
			$('#row_1_1').html('1'); 
			$('#row_1_1').css('background-color','red');
			$('#row_1_1').css('color','#fff');
			return true;
		}
	 }
	 if(document.getElementById('row_1_1').innerText==document.getElementById('row_2_2').innerText)
	 {
		if(document.getElementById('row_1_1').innerText==p && document.getElementById('row_0_0').innerText=='' )
		{
			$('#row_0_0').html('1'); 
			$('#row_0_0').css('background-color','red');
			$('#row_0_0').css('color','#fff');
			return true;
		}
	 }
	 
	 if(document.getElementById('row_0_2').innerText==document.getElementById('row_1_1').innerText)
	 {
		if(document.getElementById('row_0_2').innerText==p && document.getElementById('row_2_0').innerText=='')
		{
			$('#row_2_0').html('1'); 
			$('#row_2_0').css('background-color','red');
			$('#row_2_0').css('color','#fff');
			return true;
		}
	 }
	 if(document.getElementById('row_0_2').innerText==document.getElementById('row_2_0').innerText)
	 {
		if(document.getElementById('row_0_2').innerText==p && document.getElementById('row_1_1').innerText=='')
		{
			$('#row_1_1').html('1'); 
			$('#row_1_1').css('background-color','red');
			$('#row_1_1').css('color','#fff');
			return true;
		}
	 }
	 if(document.getElementById('row_1_1').innerText==document.getElementById('row_2_0').innerText)
	 {
		if(document.getElementById('row_1_1').innerText==p && document.getElementById('row_0_2').innerText=='')
		{
			$('#row_0_2').html('1'); 
			$('#row_0_2').css('background-color','red');
			$('#row_0_2').css('color','#fff');
			return true;
		}
	 }
	 return false;
}
