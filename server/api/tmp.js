if((SMonth == "09" && SDay > "30") || (SMonth == "11" && SDay > "30") || (EMonth == "09" && EDay > "30") || (EMonth == "11" && EDay > "30")){
    alert()
} else {
    if(SYear < EYear && SMonth >= "08" && EMonth <= "02"){
        if(SMonth == "08" && SDay >= "16"){
            if(EMonth == "02" && EDay <= "19"){
                
            } else if(EMonth == "01"){

            } else {
                alert()
            }
        } else if(SMonth != "08"){
            if(EMonth == "02" && EDay <= "19"){
                
            } else if(EMonth == "01"){

            } else {
                alert()
            }
        } else {
            alert()
        }
    }else if(SYear == EYear){
        if(SYear == "2019" && SMonth >= "08"){
            if(SMonth < EMonth){
                if(SMonth == "08" && SDay >= "16"){

                } else if(SMonth > "08"){

                } else {
                    alert()
                }
            } else if(SMonth == EMonth){
                if(SMonth == "08" && SDay >= "16" && SDay < EDay){
                    
                } else if(SMonth > "08" && SDay < EDay){
                
                } else {
                    alert()
                }
            } else {
                alert()
            }
        } else if(SYear == "2020" && EMonth <= "02"){
            if(SMonth < EMonth){
                if(EMonth == "02" && EDay <= 19){

                } else if(EMonth == "01"){

                } else {
                    alert()
                } 
            } else if(SMonth == EMonth){
                if(EMonth == "02" && EDay <= 19 && SDay < EDay){

                } else if(EMonth == "01" && SDay < EDay){

                } else {
                    alert()
                }
            } else {
                alert()
            }
        } else {
            alert()
        }
    } else {
        alert()
    }
}

// message = "Please select date range between 2019-08-16 to 2020-02-19."

//tmp
// if(SYear < EYear && SMonth >= "08" && EMonth <= "02"){
//     if(SMonth == "08" && SDay >= "16"){
//         if(EMonth == "02" && EDay <= "19"){
            
//         } else if(EMonth == "01"){

//         } else {
//             alert()
//         }
//     } else if(SMonth != "08"){
//         if(EMonth == "02" && EDay <= "19"){
            
//         } else if(EMonth == "01"){

//         } else {
//             alert()
//         }
//     } else {
//         alert()
//     }
// }else if(SYear == EYear){
//     if(SYear == "2019" && SMonth >= "08"){
//         if(SMonth < EMonth){
//             if(SMonth == "08" && SDay >= "16"){

//             } else if(SMonth > "08"){

//             } else {
//                 alert()
//             }
//         } else if(SMonth == EMonth){
//             if(SMonth == "08" && SDay >= "16" && SDay < EDay){
                
//             } else if(SMonth > "08" && SDay < EDay){
            
//             } else {
//                 alert()
//             }
//         } else {
//             alert()
//         }
//     } else if(SYear == "2020" && EMonth <= "02"){
//         if(SMonth < EMonth){
//             if(EMonth == "02" && EDay <= 19){

//             } else if(EMonth == "01"){

//             } else {
//                 alert()
//             } 
//         } else if(SMonth == EMonth){
//             if(EMonth == "02" && EDay <= 19 && SDay < EDay){

//             } else if(EMonth == "01" && SDay < EDay){

//             } else {
//                 alert()
//             }
//         } else {
//             alert()
//         }
//     } else {
//         alert()
//     }
// } else {
//     alert()
// }