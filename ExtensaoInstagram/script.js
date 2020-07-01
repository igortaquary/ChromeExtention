
let seguidores = []
let numeroDeRed = 0

automatizar()

function automatizar(){
    let seguidorDiv = document.getElementsByClassName("g47SY")[1]
    let seguindoDiv = document.getElementsByClassName("g47SY")[2]
    if(seguindoDiv && seguidorDiv){
        console.log("Seguidores: ", seguidorDiv.innerHTML )
        console.log("Seguindo: ", seguindoDiv.innerHTML )

        seguidorDiv.click()

        let objDiv
        let controlador = false

        let interval = setInterval(() => {
            objDiv = document.getElementsByClassName("isgrP")[0];
            objDiv.scrollTop = objDiv.scrollHeight
            carregarSeguidores()
            if(seguidores.length == seguidorDiv.innerHTML){
                
                console.log("Foram carregados ", seguidores.length, " seguidores.")
                controlador = true

                seguindoDiv.click()

        
                let interval2 = setInterval(() => {
                    objDiv = document.getElementsByClassName("isgrP")[0];
                    objDiv.scrollTop = objDiv.scrollHeight
                    verificarSeguidores()
                    if(document.getElementsByClassName("_0imsa").length == seguindoDiv.innerHTML){
                        clearInterval(interval2)
                    }
                }, 1000);

                clearInterval(interval)
            }
        }, 1000);

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
