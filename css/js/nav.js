<<<<<<< HEAD

window.onload = function() {
    
    var word =['H','i!',' I',' a','m',' T','a','m',' a','n','d',' i','s',' p','r','o','g','r','a','m','m','e','r',' t','h','a','n','k',' for',' h','i','r','e',' me'];
    // var word1 =['2.','N','ế','u',' ','e','m ','đ','i ' ,'tr','ái ' ,'ty','m n','ày buồ','n bi','ết m','ấy '];
    // var word2 =['3.','N','ế','u',' ','e','m ','đ','i ' ,'tr','ái ' ,'ty','m n','ày buồ','n bi','ết m','ấy '];
    
    var le=word.length;
    var chuoi=' ',chuoij=" ",i=0,j=0,checkb=0;
    j=le;
    var s=document.getElementById("word");
    var s1=document.getElementById("word1");
//     function what(){
//         var interval=setInterval(() => {
//             if(i==le){
//                 clearInterval(interval);
//                 removew();
//             }
//             else{
//                 chuoi+=word[i];
//                 s.innerHTML=chuoi;
//                 i++;
//             }
//        }, 400); 
//     }
    function removew(chuoij,words,x){
       var rein= setInterval(()=>{
            if(j<0){
                read(chuoij,words,x);
                clearInterval(rein);
                
            }
            else{ 
                for(var check=0;check<j;check++){
                    chuoij+=words[check];                 
                }
                x.innerHTML=chuoij;
                chuoij=" ";
                j--;
            }
        },200);
    }
//   what();  
function read(chuois ,words,x){
   
    var u=setInterval(()=>{
        if(i<=j){
            for(var t=0;t<i;t++){
                chuois+=words[t];  
                }i++;         
                x.innerHTML=chuois;
                chuois="";
            }
        else {
            clearInterval(u);
            removew(chuois,words,x);
        }
    },200); 
    }
    var i=0;
    function dequy(i){
        if(i<3){
            if(i==0){
                read(chuoi,word,s);}
            else{
                read(chuoij,word2,s1);
            }
        }
        else{
            return dequy(i+1);
        }
    }
    read(chuoi,word,s);
    // while(1){
    //     read(chuoi,word,s);
    // }
    //dequy(i);
    //read(chuoi,word);
    // setInterval(()=>{
    //     switch(checkb){
    //         case 0:
    //             read(chuoi,word);
    //             break;
    //         case 1:
    //             read(chuoi,word1);
    //             break;
    //         case 2:
    //             read(chuoi,word2);
    //             break;
    //     }
    //     checkb++;    
    // },12000);
    //dequy(i);
//     var bool=false;
//     var ro=setInterval(()=>{
//         read(chuoi,word,s);
//         bool=true;
//         if(bool){
//             bool=false;
//             clearInterval(ro);
//         }
        
//     },1000);
    // setTimeout(() => {
    //     read(chuoi,word1,s1);
    // },setInterval(() => {
    //     read(chuoij,word,s); 
    //     console.log('run');
    // }, 18000),1000);
    
       
}
=======

window.onload = function() {
    
    var word =['H','i!',' I',' a','m',' T','a','m',' a','n','d',' i','s',' p','r','o','g','r','a','m','m','e','r',' t','h','a','n','k',' for',' h','i','r','e',' me'];
    // var word1 =['2.','N','ế','u',' ','e','m ','đ','i ' ,'tr','ái ' ,'ty','m n','ày buồ','n bi','ết m','ấy '];
    // var word2 =['3.','N','ế','u',' ','e','m ','đ','i ' ,'tr','ái ' ,'ty','m n','ày buồ','n bi','ết m','ấy '];
    
    var le=word.length;
    var chuoi=' ',chuoij=" ",i=0,j=0,checkb=0;
    j=le;
    var s=document.getElementById("word");
    var s1=document.getElementById("word1");
//     function what(){
//         var interval=setInterval(() => {
//             if(i==le){
//                 clearInterval(interval);
//                 removew();
//             }
//             else{
//                 chuoi+=word[i];
//                 s.innerHTML=chuoi;
//                 i++;
//             }
//        }, 400); 
//     }
    function removew(chuoij,words,x){
       var rein= setInterval(()=>{
            if(j<0){
                read(chuoij,words,x);
                clearInterval(rein);
                
            }
            else{ 
                for(var check=0;check<j;check++){
                    chuoij+=words[check];                 
                }
                x.innerHTML=chuoij;
                chuoij=" ";
                j--;
            }
        },200);
    }
//   what();  
function read(chuois ,words,x){
   
    var u=setInterval(()=>{
        if(i<=j){
            for(var t=0;t<i;t++){
                chuois+=words[t];  
                }i++;         
                x.innerHTML=chuois;
                chuois="";
            }
        else {
            clearInterval(u);
            removew(chuois,words,x);
        }
    },200); 
    }
    var i=0;
    function dequy(i){
        if(i<3){
            if(i==0){
                read(chuoi,word,s);}
            else{
                read(chuoij,word2,s1);
            }
        }
        else{
            return dequy(i+1);
        }
    }
    read(chuoi,word,s);
    // while(1){
    //     read(chuoi,word,s);
    // }
    //dequy(i);
    //read(chuoi,word);
    // setInterval(()=>{
    //     switch(checkb){
    //         case 0:
    //             read(chuoi,word);
    //             break;
    //         case 1:
    //             read(chuoi,word1);
    //             break;
    //         case 2:
    //             read(chuoi,word2);
    //             break;
    //     }
    //     checkb++;    
    // },12000);
    //dequy(i);
//     var bool=false;
//     var ro=setInterval(()=>{
//         read(chuoi,word,s);
//         bool=true;
//         if(bool){
//             bool=false;
//             clearInterval(ro);
//         }
        
//     },1000);
    // setTimeout(() => {
    //     read(chuoi,word1,s1);
    // },setInterval(() => {
    //     read(chuoij,word,s); 
    //     console.log('run');
    // }, 18000),1000);
    
       
}
>>>>>>> 1988d74f6ae1fe5d6b8a6658f43a500733dafad8
