document.addEventListener('DOMContentLoaded', (event) => {
	document.getElementById('foo').onclick = function(){


	    let string = "school: " + document.getElementById('school').value + "\n"
	

	    let ele = document.getElementsByClassName('str');

	    var stream;
	    for(let i=0; i<ele.length; i++){
	    	
	      if (ele[i].checked){
	        // console.log(ele[i].value);
	        stream = ele[i].value;
	      }
	    }
	    stream = "stream: " + stream
	    string += stream + "\n"


	    let ele2 = document.getElementsByClassName('race');
	  ;
	    var race
	    for(let i=0; i<ele2.length; i++){
	      if (ele2[i].checked){
	        // console.log(ele2[i].value)
	        race = ele2[i].value

	        if (ele2[4].checked){
	        // console.log("others value: " + document.getElementById('Othersans').value)
	        race += "(" + document.getElementById('Othersans').value + ")"
	        }
	        
	    }
		}
		string += "race: " + race + "\n"



	// 	let ele3 = document.getElementsByClassName('plsch');
	//   ;
	//     var plsch
	//     for(let i=0; i<ele3.length; i++){
	//       if (ele3[i].checked){
	//         // console.log(ele3[i].value)
	//         plsch = ele2[i].value

	//         if (ele3[4].checked){
	//         // console.log("others value: " + document.getElementById('Othersans2').value)
	//         plsch += "(" + document.getElementById('Othersans2').value + ")"
	//         }
	//     }
	// }
	//       string += "plsch: " + plsch + "\n"

		
// 		var slider = document.getElementById("myRange1.1");
// var output = 0;
// output.innerHTML = slider.value; // Display the default slider value

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//   output.innerHTML = this.value;
// }

		var clip1 = document.getElementById("myRange1.1").value
		clip1 += ", " + document.getElementById("myRange1.2").value
		clip1 += ", " + document.getElementById("myRange1.3").value
		string += "clip1(western): " + clip1 + '\n'


        var clip2 = document.getElementById("myRange2.1").value
		clip2 += ", " + document.getElementById("myRange2.2").value
		clip2 += ", " + document.getElementById("myRange2.3").value
		string += "clip2(malay esl): " + clip2 + '\n'


		var clip3 = document.getElementById("myRange3.1").value
		clip3 += ", " + document.getElementById("myRange3.2").value
		clip3 += ", " + document.getElementById("myRange3.3").value
		string += "clip3(chinese native): " + clip3 + '\n'


		var clip4 = document.getElementById("myRange4.1").value
		clip4 += ", " + document.getElementById("myRange4.2").value
		clip4 += ", " + document.getElementById("myRange4.3").value
		string += "clip4(chinese esl): " + clip4 + '\n'
		

		var clip5 = document.getElementById("myRange5.1").value
		clip5 += ", " + document.getElementById("myRange5.2").value
		clip5 += ", " + document.getElementById("myRange5.3").value
		string += "clip5(indian esl): " + clip5 + '\n'
		

		var clip6 = document.getElementById("myRange6.1").value
		clip6 += ", " + document.getElementById("myRange6.2").value
		clip6 += ", " + document.getElementById("myRange6.3").value
		string += "clip6(indian native): " + clip6 + '\n'
		 

		var clip7 = document.getElementById("myRange7.1").value
		clip7 += ", " + document.getElementById("myRange7.2").value
		clip7 += ", " + document.getElementById("myRange7.3").value
		string += "clip7(malay native): " + clip7 + '\n'
		console.log(string)  

		

 		var inputcheck = true
 		var errormsg = "Questions not answered: \n"
        if(document.getElementById('school').value.length == 0){
        	inputcheck = false
        	errormsg += "School \n"

        }
        var clickcount = 0
        for(let i=0; i<ele.length; i++){
        	if(ele[i].checked == false){
        		clickcount += 1
        	}

        }
        if (clickcount == 4){
inputcheck = false
errormsg += "Stream \n"
        }

        var clickcount2 = 0
        for(let i=0; i<ele2.length; i++){
 			if(ele2[i].checked ==  false){
 				clickcount2 += 1
 			}}
        if (clickcount2 == 6){
inputcheck = false
errormsg += "Race \n"
        }

//         var clickcount3 = 0
//         for(let i=0; i<ele3.length; i++){
//  			if(ele3[i].checked ==  false){
//  				clickcount3 += 1
//  			}}
//         if (clickcount3 == 6){
// inputcheck = false
// errormsg += "Primary Language Spoken in School \n"
//         }
        


        var ac1total = parseInt(document.getElementById("myRange1.1").value,10)+parseInt(document.getElementById("myRange1.2").value,10)+parseInt(document.getElementById("myRange1.3").value,10)
        
        if (ac1total == 3){
        	console.log(ac1total)
        	inputcheck = false
        	errormsg += "audio clip 1 \n"
        }

        var ac2total = parseInt(document.getElementById("myRange2.1").value,10)+parseInt(document.getElementById("myRange2.2").value,10)+parseInt(document.getElementById("myRange2.3").value,10)
        
        if (ac2total == 3){
        	console.log(ac2total)
        	inputcheck = false
        	errormsg += "audio clip 2 \n"
        }
 		
 		 var ac3total = parseInt(document.getElementById("myRange3.1").value,10)+parseInt(document.getElementById("myRange3.2").value,10)+parseInt(document.getElementById("myRange3.3").value,10)
        
        if (ac3total == 3){
        	console.log(ac3total)
        	inputcheck = false
        	errormsg += "audio clip 3 \n"
        }

        var ac4total = parseInt(document.getElementById("myRange4.1").value,10)+parseInt(document.getElementById("myRange4.2").value,10)+parseInt(document.getElementById("myRange4.3").value,10)
      
        if (ac4total == 3){
        	console.log(ac4total)
        	inputcheck = false
        	errormsg += "audio clip 4 \n"
        }

         var ac5total = parseInt(document.getElementById("myRange5.1").value,10)+parseInt(document.getElementById("myRange5.2").value,10)+parseInt(document.getElementById("myRange5.3").value,10)
  
        if (ac5total == 3){
        	inputcheck = false
        	console.log(ac5total)
        	errormsg += "audio clip 5 \n"
        }

        var ac6total = parseInt(document.getElementById("myRange6.1").value,10)+parseInt(document.getElementById("myRange6.2").value,10)+parseInt(document.getElementById("myRange6.3").value,10)
        
        if (ac6total == 3){
        	console.log(ac6total)
        	inputcheck = false
        	errormsg += "audio clip 6 \n"
        }

         var ac7total = parseInt(document.getElementById("myRange7.1").value,10)+parseInt(document.getElementById("myRange7.2").value,10)+parseInt(document.getElementById("myRange7.3").value,10)
        
        if (ac7total == 3){
        	inputcheck = false
        	console.log(ac7total)
        	errormsg += "audio clip 7 \n"
        }





console.log(inputcheck)
console.log(errormsg)




if(inputcheck) {   
	    Email.send({
		Host: "smtp.gmail.com",
		Username : "surveyla1234@gmail.com",
		Password : "m4tth4n!",
		To : 'matthanfoo@gmail.com',
		From : "surveyla1234@gmail.com",
		Subject : "Hi",
		Body : string,
		}).then(
		    
			alert("mail sent successfully")
		);
        	

			setTimeout("location.reload(true);",1500);
	}
else{
	alert(errormsg)
}
}
})
