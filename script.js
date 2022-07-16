var breweryContainer=document.getElementById('breweryContainer')

 

async function breweryData(url){
  var breweryName=document.getElementById('breweryName').value
    console.log(breweryName)
    let data=await fetch(`https://api.openbrewerydb.org/breweries/search?query=${breweryName}`)
    let res=await data.json()
    console.log(res)

    
    
    breweryContainer.innerHTML=`
    
        <div class="row g-0">
      <div class="col-md-4">
        <img
          src="https://static.wixstatic.com/media/b60a64_8d72da9a15a441cdb6fd58e35f3f7ad2~mv2.jpg/v1/fill/w_640,h_872,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/b60a64_8d72da9a15a441cdb6fd58e35f3f7ad2~mv2.jpg"
          class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${res[0].name}</h5>
          <p class="card-text">Brewery type:${res[0].brewery_type}</p>
          <p class="card-text">Address:${res[0].street},${res[0].city},${res[0].state},${res[0].country}</p>
          <p class="card-text">Website:${res[0].website_url}</p>
          <p class="card-text">Phone No:${res[0].phone}</p>
          
        </div>
      </div>
    </div>`
      

    } 
    catch(err){
      console.log(err)
    }
      







