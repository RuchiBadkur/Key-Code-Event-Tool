// method 1
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {

    insert.innerHTML = `
    
    
        <div class="key text-center">
            <small>e.key</small>
            <h3 class=" text-center p-5 ">${e.key}</h3>
        </div>
        <div class="key text-center">
            
            <small>e.keyCode</small>
            <h3 class=" text-center p-5 ">${e.keyCode}</h3>
        </div>
        <div class="key text-center">
            
            <small>e.code</small>

            <h3 class=" text-center p-5 ">${e.code}</h3>
        </div>
       
        
    `
    const div = document.createElement('div');
    div.innerHTML =`
        <div class="reset">
            <button class="btn w-75 btn-outline-success mt-2 fs-5">Reset</button>
        </div>
    `

    // const main = document.querySelector('#container');

    // main.append(div);

   
    // document.querySelector('button').addEventListener('click', reset);
    
    
    
})


// insert.addEventListener('click', (e)=> {insert.innerHTML = `<h3 class="text-center">Press any key to get the JavaScript event keycode info</h3>`} )

