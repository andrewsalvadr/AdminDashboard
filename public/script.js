$('#menu-btn').click(function() {
  $('#menu').toggleClass('active')
})


const profileImg = document.querySelectorAll('profileImg')
const statusBtn = document.querySelectorAll('statusBtn')
const editBtn = document.querySelectorAll('edit')
const editButton = document.getElementById('editButton')

const addUser = document.getElementById('plus-user')

var entryButton = document.getElementById('inputButton')
const tbodyEl = document.querySelector("tbody");
var row = 1;

entryButton.addEventListener('click', tableDisplay)
 
function tableDisplay(e) {
  e.preventDefault()
  let inputName = document.getElementById('inputName').value 
  let inputEmail = document.getElementById('inputEmail').value 
  let inputTitle = document.getElementById('inputTitle').value 
  let inputPosition = document.getElementById('inputPosition').value 
  
  tbodyEl.innerHTML+= `<tr>
  <td class="people">
  <p><div class="image-preview" id="imagePreview">
  <input type="file" name="inpFile" id="inpFile">
    <img src="" alt="Image Preview" class="image-preview__image">
    <span class="image-preview__default-text"></span>
  </div></p>
  <div class="people-description-innerhtml">
    <h5>${inputName}</h5>
    <p>${inputEmail}</p>
  </div>
  </td>

  <td class="people-des">
    <h5>${inputTitle}</h5>
    <p>${inputPosition}</p>
  </td>

  <td class="active">
    <p class="statusBtn">Active</p>
  </td> 

  <td class="role">
    <p>Employee</p>
  </td>
  
  <td>
  </td>

</tr>`

rows++;

const inpFile = document.getElementById("inpFile");
const previewContainer = document.getElementById("imagePreview")
const previewImage = previewContainer.querySelector(".image-preview__image")
const previewDefaultText = previewContainer.querySelector(".image-preview__default-text")
const personNameEmail = document.querySelector(".people-description-innerhtml")

inpFile.addEventListener("change", function() {
  const file = this.files[0]

  if (file) {
    const reader = new FileReader ();

    previewDefaultText.style.display = "none";
    previewImage.style.display = "block";
    inpFile.style.visibility = "hidden";
    personNameEmail.style.visibility = "visible";
    

    reader.addEventListener("load", function () {
      previewImage.setAttribute("src", this.result)

    })

    reader.readAsDataURL(file);
  } else {
    previewDefaultText.style.display = null;
    previewImage.style.display = null;
    previewImage.setAttribute("src", "")
  }

})





/* Data Boxes */

//Totalusers in all rows
const usersTotal = document.getElementById('usersTotal') 
const table = document.getElementById('displayTable')
var rows = table.rows.length;
document.getElementById("usersTotal").innerHTML = rows;



selectedRow()

}

//highlight per row
function selectedRow() {
  const table = document.getElementById('displayTable')
        for (var i = 0 ; i < table.rows.length; i++) {
          if (i > 0) {
            table.rows[i].onclick = function() {
              if (!this.selected) {
                this.classList.add('selected-row')
                this.selected = true;
              } else {
                this.classList.remove('selected-row')
                this.selected = false;
              }    
            }
          }
        }
      }


//delete per rows
document.getElementById('delete-user').addEventListener('click', deleteSelections);
  
function deleteSelections() {
  let selectedRows = document.getElementsByClassName("selected-row");
  while(selectedRows.length > 0){
    selectedRows[0].parentNode.removeChild(selectedRows[0]);
  }        
  
  const usersTotal = document.getElementById('usersTotal') 
  const table = document.getElementById('displayTable')
  var rows = table.rows.length;
  document.getElementById("usersTotal").innerHTML = rows;
  rows--;

}

selectedRow()
allSalesPersons()



////////////PER CASE * QTY CASE = $TOTAL REFLECTED TO DATA SALES BOX 

function allSalesPersons() {

  
  perSalesErika()
  perSalesRyan()
  perSalesCarla()
  perSalesRobert()
  perSalesEmily()
  perSalesWilfred()
  perSalesRomeo()
  perSalesAnthony()
  qtyProductLite()
  qtyProductReg()
  qtyProductMax()
  selectedRow()
    


function perSalesErika() {
const table = document.getElementById('displayTable')
let priceCase = 0;
let perQty = 0;

for(let i = 1; i<table.rows.length; i++){  
  priceCase = parseInt(table.rows[1].cells[3].innerText); 
  perQty = parseInt(table.rows[1].cells[2].innerText);
  totalSalesErika = parseInt(priceCase * perQty)
}
  document.getElementById("totalErika").innerHTML = totalSalesErika
  console.log(totalSalesErika)
}


function perSalesRyan() {
  const table = document.getElementById('displayTable')
  let priceCase = 0;
  let perQty = 0;
  
  for(let i = 1; i<table.rows.length; i++){  
    priceCase = parseInt(table.rows[2].cells[3].innerText); 
    perQty = parseInt(table.rows[2].cells[2].innerText);
    totalSalesRyan = parseInt(priceCase * perQty)
  }
    document.getElementById("totalRyan").innerHTML = totalSalesRyan
    console.log(totalSalesRyan)
    
    
  }

  function perSalesCarla() {
    const table = document.getElementById('displayTable')
    let priceCase = 0;
    let perQty = 0;
    
    for(let i = 1; i<table.rows.length; i++){  
      priceCase = parseInt(table.rows[3].cells[3].innerText); 
      perQty = parseInt(table.rows[3].cells[2].innerText);
      totalSalesCarla = parseInt(priceCase * perQty)
    }
      document.getElementById("totalCarla").innerHTML = totalSalesCarla
      console.log(totalSalesCarla)
      
      
    }

    function perSalesRobert() {
      const table = document.getElementById('displayTable')
      let priceCase = 0;
      let perQty = 0;
      
      for(let i = 1; i<table.rows.length; i++){  
        priceCase = parseInt(table.rows[4].cells[3].innerText); 
        perQty = parseInt(table.rows[4].cells[2].innerText);
        totalSalesRobert = parseInt(priceCase * perQty)
      }
        document.getElementById("totalRobert").innerHTML = totalSalesRobert
        console.log(totalSalesRobert)
        
        
      }
    
      function perSalesEmily() {
        const table = document.getElementById('displayTable')
        let priceCase = 0;
        let perQty = 0;
        
        for(let i = 1; i<table.rows.length; i++){  
          priceCase = parseInt(table.rows[5].cells[3].innerText); 
          perQty = parseInt(table.rows[5].cells[2].innerText);
          totalSalesEmily = parseInt(priceCase * perQty)
        }
          document.getElementById("totalEmily").innerHTML = totalSalesEmily
          console.log(totalSalesEmily)
          
          
        }

        function perSalesWilfred() {
          const table = document.getElementById('displayTable')
          let priceCase = 0;
          let perQty = 0;
          
          for(let i = 1; i<table.rows.length; i++){  
            priceCase = parseInt(table.rows[6].cells[3].innerText); 
            perQty = parseInt(table.rows[6].cells[2].innerText);
            totalSalesWilfred = parseInt(priceCase * perQty)
          }
            document.getElementById("totalWilfred").innerHTML = totalSalesWilfred
            console.log(totalSalesWilfred)
            
          }

          function perSalesRomeo() {
            const table = document.getElementById('displayTable')
            let priceCase = 0;
            let perQty = 0;
            
            for(let i = 1; i<table.rows.length; i++){  
              priceCase = parseInt(table.rows[7].cells[3].innerText); 
              perQty = parseInt(table.rows[7].cells[2].innerText);
              totalSalesRomeo = parseInt(priceCase * perQty)
            }
              document.getElementById("totalRomeo").innerHTML = totalSalesRomeo
              console.log(totalSalesRomeo)
              
            }

            function perSalesAnthony() {
              const table = document.getElementById('displayTable')
              let priceCase = 0;
              let perQty = 0;
              
              for(let i = 1; i<table.rows.length; i++){  
                priceCase = parseInt(table.rows[8].cells[3].innerText); 
                perQty = parseInt(table.rows[8].cells[2].innerText);
                totalSalesAnthony = parseInt(priceCase * perQty)
              }
                document.getElementById("totalAnthony").innerHTML = totalSalesAnthony
                console.log(totalSalesAnthony)
                
              }
  

const totalSum = [totalSalesErika + totalSalesRyan + totalSalesCarla + totalSalesRobert + totalSalesEmily + totalSalesWilfred + totalSalesRomeo + totalSalesAnthony]

document.getElementById("overallSales").innerHTML = totalSum;

function qtyProductLite (){
  const table = document.getElementById('displayTable')
  let totalLite = 0;

  for(let i = 1; i<table.rows.length; i++) {
    erikaQty = parseInt(table.rows[1].cells[2].innerText);
    ryanQty = parseInt(table.rows[2].cells[2].innerText);
    carlaQty = parseInt(table.rows[3].cells[2].innerText);
    
    totalLite = [erikaQty + ryanQty + carlaQty]
  }

  document.getElementById("lightTotal").innerHTML = totalLite;
  console.log(totalLite)

}


  function qtyProductReg (){
    const table = document.getElementById('displayTable')
    let totalRegular = 0;
  
    for(let i = 1; i<table.rows.length; i++) {
      robertQty = parseInt(table.rows[4].cells[2].innerText);
      emilyQty = parseInt(table.rows[5].cells[2].innerText);
      wilfredQty = parseInt(table.rows[6].cells[2].innerText);
      
      totalRegular= [robertQty + emilyQty + wilfredQty]
    }
  
    document.getElementById("regularTotal").innerHTML = totalRegular;
    console.log(totalRegular)
  
  
  }
  
  function qtyProductMax (){
    const table = document.getElementById('displayTable')
    let totalMax = 0;
  
    for(let i = 1; i<table.rows.length; i++) {
      romeoQty = parseInt(table.rows[7].cells[2].innerText);
      anthonyQty = parseInt(table.rows[8].cells[2].innerText);
      
      totalMax= [romeoQty + anthonyQty]
    }
  
    document.getElementById("maxTotal").innerHTML = totalMax;
    console.log(totalMax)
  
  }


}  
























