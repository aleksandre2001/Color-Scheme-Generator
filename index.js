//Starting scheme set
setColorScheme("monochrome", "000000" )

document.getElementById('get-btn').addEventListener('click', function (){
    const mode = document.querySelector('#scheme-mode').value 
    const seed = document.querySelector('#seed-color').value.slice(1)
    
    setColorScheme(mode.toLowerCase(), seed)
    
})


function setColorScheme(mode, seed){  
   
    fetch(`https://www.thecolorapi.com/scheme?hex=${seed}&mode=${mode}`)
        .then(res => res.json())
        .then(data => {
                
                 schemesHex = data.colors.map(function(color) {
                    return color.hex.value;
                });
                setSchemeStyle(schemesHex);
                
            })                                                      
}

        
        
function setSchemeStyle(schemeArr){
    document.querySelector('#strip1').style.backgroundColor = schemeArr[0]
    document.querySelector('#hex1').textContent = schemeArr[0]
    
    document.querySelector('#strip2').style.backgroundColor = schemeArr[1]
    document.querySelector('#hex2').textContent = schemeArr[1]
    
    document.querySelector('#strip3').style.backgroundColor = schemeArr[2]
    document.querySelector('#hex3').textContent = schemeArr[2]
    
    document.querySelector('#strip4').style.backgroundColor = schemeArr[3]
    document.querySelector('#hex4').textContent = schemeArr[3]
    
    document.querySelector('#strip5').style.backgroundColor = schemeArr[4]
    document.querySelector('#hex5').textContent = schemeArr[4]
    
}