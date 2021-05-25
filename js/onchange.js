task3_size1.onchange = () => {
    deleteChilds(document.getElementById('task3_input_div1'))
    for (let i = 0; i < task2_size1.value; i++) {
        let div = document.createElement('div')
        div.setAttribute('class', 'row')

        let input_x1 = document.createElement('input')
        input_x1.setAttribute('type', 'number')
        input_x1.setAttribute('placeholder', 'x1')
        input_x1.setAttribute('class', 'input_number')
        input_x1.setAttribute('class', 'task3_x11')

        let input_x2 = document.createElement('input')
        input_x2.setAttribute('type', 'number')
        input_x2.setAttribute('placeholder', 'x2')
        input_x2.setAttribute('class', 'input_number')
        input_x2.setAttribute('class', 'task3_x21')

        let input_n = document.createElement('input')
        input_n.setAttribute('type', 'number')
        input_n.setAttribute('placeholder', 'n')
        input_n.setAttribute('class', 'input_number')
        input_n.setAttribute('class', 'task3_n1')

        div.appendChild(input_x1)
        div.appendChild(input_x2)
        div.appendChild(input_n)

        document.getElementById('task3_input_div1').appendChild(div)
    }
}

task3_size2.onchange = () => {
    deleteChilds(document.getElementById('task3_input_div2'))
    for (let i = 0; i < task2_size2.value; i++) {
        let div = document.createElement('div')
        div.setAttribute('class', 'row')

        let input_x1 = document.createElement('input')
        input_x1.setAttribute('type', 'number')
        input_x1.setAttribute('placeholder', 'x1')
        input_x1.setAttribute('class', 'input_number')
        input_x1.setAttribute('class', 'task3_x12')

        let input_x2 = document.createElement('input')
        input_x2.setAttribute('type', 'number')
        input_x2.setAttribute('placeholder', 'x2')
        input_x2.setAttribute('class', 'input_number')
        input_x2.setAttribute('class', 'task3_x22')

        let input_n = document.createElement('input')
        input_n.setAttribute('type', 'number')
        input_n.setAttribute('placeholder', 'n')
        input_n.setAttribute('class', 'input_number')
        input_n.setAttribute('class', 'task3_n2')

        div.appendChild(input_x1)
        div.appendChild(input_x2)
        div.appendChild(input_n)

        document.getElementById('task3_input_div2').appendChild(div)
    }
}

task2_size1.onchange = () => {
    deleteChilds(document.getElementById('task2_input_div1'))
    for (let i = 0; i < task2_size1.value; i++) {
        let div = document.createElement('div')
        div.setAttribute('class', 'row')

        let input_x1 = document.createElement('input')
        input_x1.setAttribute('type', 'number')
        input_x1.setAttribute('placeholder', 'x1')
        input_x1.setAttribute('class', 'input_number')
        input_x1.setAttribute('class', 'task2_x11')

        let input_x2 = document.createElement('input')
        input_x2.setAttribute('type', 'number')
        input_x2.setAttribute('placeholder', 'x2')
        input_x2.setAttribute('class', 'input_number')
        input_x2.setAttribute('class', 'task2_x21')

        let input_n = document.createElement('input')
        input_n.setAttribute('type', 'number')
        input_n.setAttribute('placeholder', 'n')
        input_n.setAttribute('class', 'input_number')
        input_n.setAttribute('class', 'task2_n1')

        div.appendChild(input_x1)
        div.appendChild(input_x2)
        div.appendChild(input_n)

        document.getElementById('task2_input_div1').appendChild(div)
    }
}

task2_size2.onchange = () => {
    deleteChilds(document.getElementById('task2_input_div2'))
    for (let i = 0; i < task2_size2.value; i++) {
        let div = document.createElement('div')
        div.setAttribute('class', 'row')

        let input_x1 = document.createElement('input')
        input_x1.setAttribute('type', 'number')
        input_x1.setAttribute('placeholder', 'x1')
        input_x1.setAttribute('class', 'input_number')
        input_x1.setAttribute('class', 'task2_x12')

        let input_x2 = document.createElement('input')
        input_x2.setAttribute('type', 'number')
        input_x2.setAttribute('placeholder', 'x2')
        input_x2.setAttribute('class', 'input_number')
        input_x2.setAttribute('class', 'task2_x22')

        let input_n = document.createElement('input')
        input_n.setAttribute('type', 'number')
        input_n.setAttribute('placeholder', 'n')
        input_n.setAttribute('class', 'input_number')
        input_n.setAttribute('class', 'task2_n2')

        div.appendChild(input_x1)
        div.appendChild(input_x2)
        div.appendChild(input_n)

        document.getElementById('task2_input_div2').appendChild(div)
    }
}

task1_size.onchange = () => {
    deleteChilds(document.getElementById('task1_input_div'))
    for (let i = 0; i < task1_size.value; i++) {
        let div = document.createElement('div')
        div.setAttribute('class', 'row')

        let input_x1 = document.createElement('input')
        input_x1.setAttribute('type', 'number')
        input_x1.setAttribute('placeholder', 'x1')
        input_x1.setAttribute('class', 'input_number')
        input_x1.setAttribute('class', 'task1_x1')

        let input_x2 = document.createElement('input')
        input_x2.setAttribute('type', 'number')
        input_x2.setAttribute('placeholder', 'x2')
        input_x2.setAttribute('class', 'input_number')
        input_x2.setAttribute('class', 'task1_x2')

        let input_n = document.createElement('input')
        input_n.setAttribute('type', 'number')
        input_n.setAttribute('placeholder', 'n')
        input_n.setAttribute('class', 'input_number')
        input_n.setAttribute('class', 'task1_n')

        div.appendChild(input_x1)
        div.appendChild(input_x2)
        div.appendChild(input_n)

        document.getElementById('task1_input_div').appendChild(div)
    }
}


function deleteChilds(element) {
    while (element.firstChild) element.removeChild(element.firstChild)
}

