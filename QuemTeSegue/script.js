
let seguidores = []
let numeroDeRed = 0
let elemento

window.onload = automatizar()


function automatizar(){
    
    let seguidorDiv = document.getElementsByClassName("g47SY")[1]
    let seguindoDiv = document.getElementsByClassName("g47SY")[2]
    if(seguindoDiv && seguidorDiv){
        adcElemento();
        console.log("Seguidores: ", seguidorDiv.innerHTML )
        console.log("Seguindo: ", seguindoDiv.innerHTML )

        seguidorDiv.click()

        let objDiv
        let controlador = false
        const rollTime = 200 //ms

        let interval = setInterval(() => {
            objDiv = document.getElementsByClassName("isgrP")[0];
            objDiv.scrollTop = objDiv.scrollHeight
            carregarSeguidores()
            if(seguidores.length >= seguidorDiv.innerHTML){
                
                console.log("Foram carregados ", seguidores.length, " seguidores.")
                controlador = true

                seguindoDiv.click()

        
                let interval2 = setInterval(() => {
                    objDiv = document.getElementsByClassName("isgrP")[0];
                    objDiv.scrollTop = objDiv.scrollHeight
                    verificarSeguidores()
                    if(document.getElementsByClassName("_0imsa").length >= seguindoDiv.innerHTML){
                        clearInterval(interval2)
                        elemento.parentNode.removeChild(elemento)
                    }
                }, rollTime);

                clearInterval(interval)
            }
        }, rollTime);

    } else {
        window.alert("Não achamos seus seguidores ou quem vc esta seguindo.")
    }
}

function carregarSeguidores(){
    seguidores = []
    document.querySelectorAll('._0imsa').forEach( (item, index) => {
            seguidores[index] = item.innerHTML
        }
    )
}

function verificarSeguidores(){
    let user
    numeroDeRed = 0
    document.querySelectorAll('._0imsa').forEach( (item) => {
        user = item.innerHTML
        if(verificarCada(user)){
            item.style.color = 'green'
        } else {
            numeroDeRed++
            item.style.color = 'red'
        }
    }   )
}

function verificarCada(user){
    let segue = false
    seguidores.forEach( (element) => {
        if(user == element){
            segue = true
        }
    }   )
    return segue
}

function adcElemento () { 
    elemento = criarElemento()
    const header = document.getElementsByTagName('div')[0]
    document.body.insertBefore(elemento, header)
  }

  function criarElemento(){
    let elemento = document.createElement('div'); 
    elemento.style.height = '100%'
    elemento.style.width = '100%'
    elemento.style.backgroundColor = 'rgba(0,0,0,0.6)'
    elemento.style.position = 'fixed'
    elemento.style.textAlign = 'center'
    elemento.style.fontSize = '40px'
    elemento.style.color = 'white'
    elemento.style.paddingTop = '20%'
    elemento.innerHTML = "Aguarde enquanto carregamos seus seguidores..."
    elemento.style.zIndex = '999999999999'

    elemento.append(criarCancelar())
    return elemento
  }

  function criarCancelar(){
    let cancelarBtn = document.createElement('a')
    cancelarBtn.innerHTML = "Cancelar"
    cancelarBtn.style.marginTop = "20px"
    cancelarBtn.style.fontSize = "20px"
    cancelarBtn.style.cursor = "pointer"
    cancelarBtn.id = "CancelarAutomacao"
    cancelarBtn.onclick = ()=>{
        elemento.parentNode.removeChild(elemento)
        this.interval = 0
    }
    return cancelarBtn
  }
