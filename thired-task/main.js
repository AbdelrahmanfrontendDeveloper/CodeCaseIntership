let turn ='x' ; 
let header = document.getElementsByClassName('header')[0];
  
let sequare = [] 
function end(num1,num2,num3){
         header.innerHTML=`${sequare[num1]} Winner`; 
      document.getElementById('item'+num1).style.backgroundColor='gray'; 
      document.getElementById('item'+num2).style.backgroundColor='gray'; 
      document.getElementById('item'+num3).style.backgroundColor='gray'; 
      setInterval(function(){
         header.innerHTML+='.' ; 
      },1000) ;  
      setTimeout(function(){  
         window.location.reload() ; 
      } , 4000) ; 
}
function winner(){
   for(let i=1 ; i<10 ; i++){
       sequare[i]= document.getElementById('item'+i).innerHTML ; 
   } 
   if(sequare[1]==sequare[2] && sequare[2]==sequare[3] && sequare[1]!=''){
     end(1,2,3) ;
   } 
  else if(sequare[4]==sequare[5] && sequare[5]==sequare[6] && sequare[5]!=''){
  end(4,5,6) ;
   } 
   else if(sequare[7]==sequare[8] && sequare[8]==sequare[9] && sequare[8]!=''){
 end(7,8,9) ;
   } 
   else if(sequare[1]==sequare[4] && sequare[4]==sequare[7] && sequare[4]!=''){
end(1,4,7) ;
   } 
   else if(sequare[2]==sequare[5] && sequare[5]==sequare[8] && sequare[5]!=''){
end(2,5,8) ;
   } 
   else if(sequare[3]==sequare[6] && sequare[6]==sequare[9] && sequare[9]!=''){
end(3,6,9) ;
   } 
   else if(sequare[1]==sequare[5] && sequare[5]==sequare[9] && sequare[5]!=''){
end(1,5,9) ;
   } 
   else if(sequare[3]==sequare[5] && sequare[5]==sequare[7] && sequare[7]!=''){
end(3,5,7) ;
   }  
   else{
      let count = 0 ; 
      for(let i=1 ; i<10 ; i++){
         if(sequare[i]!=''){
            count++ ; 
         } 
      } 
      if(count==9){
         header.innerHTML='Draw' ; 
         setInterval(function(){
            header.innerHTML+='.' ; 
         },1000) ;  
         setTimeout(function(){  
            window.location.reload() ; 
         } , 4000) ; 
      }
   }

}
function round(id){ 
    let el = document.getElementById(id);
    if(turn=='x' && el.innerHTML=='' ){
        el.innerHTML='x';
        turn='o'; 
        header.innerHTML='o turn';
    }
    else if(turn=='o' && el.innerHTML=='' ){
        el.innerHTML='o';
        turn='x'; 
        header.innerHTML='x turn';
    } 
    winner() ; 
}