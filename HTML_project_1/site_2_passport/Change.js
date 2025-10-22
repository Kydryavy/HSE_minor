function find_edit(){
    const secondName_node = document.getElementById('secondName')
    console.log(secondName_node.innerText)
    secondName_node.innerHTML="<b>Orlow</b>"

    const Name_node = document.getElementById('Name')
    console.log(Name_node.innerText)
    Name_node.innerHTML="<b>Mikhail</b>"

    const lastName_node = document.getElementById('lastName')
    console.log(Name_node.innerText)
    lastName_node.innerHTML="<b>Alekseevich</b>"

    const Year_node = document.getElementById('Year')
    console.log(Name_node.innerText)
    Year_node.innerHTML="<b>27.12.2005</b>"
}

const node_for_click = document.getElementById("click")
node_for_click.addEventListener("click",find_edit)