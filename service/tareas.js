export function getTasks(){
    return fetch('http://localhost:3000/tareas')
    .then(res=>res.json())
    .then(json=>json)
}

export function getOneTask(id){
    return fetch(`http://localhost:3000/tareas/${id}`)
    .then(res=>res.json())
    .then(json=>json)
}

export function getProductInState(estado){
    return fetch(`http://localhost:3000/tareas?estado=${estado}`)
    .then(res=>res.json())
    .then(json=>json)
}