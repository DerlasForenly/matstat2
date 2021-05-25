task2_default.onclick = () => {
    let x = {
        sample:[
            {x1:0,x2:2,n:1,r:0,avg:0},
            {x1:2,x2:12,n:1,r:0,avg:0},
            {x1:12,x2:13,n:2,r:0,avg:0},
            {x1:13,x2:14,n:6,r:0,avg:0},
            {x1:14,x2:16,n:6,r:0,avg:0},
            {x1:16,x2:18,n:5,r:0,avg:0},
            {x1:18,x2:20,n:12,r:0,avg:0},
            {x1:20,x2:22,n:12,r:0,avg:0},
            {x1:22,x2:24,n:4,r:0,avg:0},
            {x1:24,x2:25,n:1,r:0,avg:0},
            {x1:25,x2:32,n:2,r:0,avg:0}
        ],
        n: 0,
        labels: [],
        m: 0,
        s: 0,
        k: 0
    }
    
    let y = {
        sample: [
            {x1:10,x2:14,n:2,r:0,avg:0},
            {x1:14,x2:16,n:7,r:0,avg:0},
            {x1:16,x2:18,n:6,r:0,avg:0},
            {x1:18,x2:20,n:13,r:0,avg:0},
            {x1:20,x2:22,n:14,r:0,avg:0},
            {x1:22,x2:24,n:4,r:0,avg:0},
            {x1:24,x2:25,n:2,r:0,avg:0},
            {x1:25,x2:28,n:1,r:0,avg:0},
            {x1:28,x2:32,n:2,r:0,avg:0}
        ],
        n: 0,
        labels: [],
        m: 0,
        s: 0,
        k: 0
    }


    document.getElementById('task2_size1').value = x['sample'].length
    task2_size1.onchange()

    document.getElementById('task2_size2').value = y['sample'].length
    task2_size2.onchange()

    let input_x11 = document.getElementsByClassName('task2_x11')
    let input_x21 = document.getElementsByClassName('task2_x21')
    let input_n1 = document.getElementsByClassName('task2_n1')

    let input_x12 = document.getElementsByClassName('task2_x12')
    let input_x22 = document.getElementsByClassName('task2_x22')
    let input_n2 = document.getElementsByClassName('task2_n2')

    for (let i = 0; i < input_x11.length; i++) {
        input_x11[i].value = x['sample'][i]['x1']
        input_x21[i].value = x['sample'][i]['x2']
        input_n1[i].value = x['sample'][i]['n']
    }

    for (let i = 0; i < input_x12.length; i++) {
        input_x12[i].value = y['sample'][i]['x1']
        input_x22[i].value = y['sample'][i]['x2']
        input_n2[i].value = y['sample'][i]['n']
    }
}

task1_default.onclick = () => {
    let default_for_task1 = [
        {
            x1: 0,
            x2: 0.02,
            n: 48,
            avg: 0,
            z1: 0,
            z2: 0,
            phi1: 0,
            phi2: 0,
            n_i: 0,
            k: 0
        },
        {
            x1: 0.02,
            x2: 0.04,
            n: 42,
            avg: 0,
            z1: 0,
            z2: 0,
            phi1: 0,
            phi2: 0,
            n_i: 0,
            k: 0
        },
        {
            x1: 0.04,
            x2: 0.06,
            n: 34,
            avg: 0,
            z1: 0,
            z2: 0,
            phi1: 0,
            phi2: 0,
            n_i: 0,
            k: 0
        },
        {
            x1: 0.06,
            x2: 0.08,
            n: 26,
            avg: 0,
            z1: 0,
            z2: 0,
            phi1: 0,
            phi2: 0,
            n_i: 0,
            k: 0
        },
        {
            x1: 0.08,
            x2: 0.1,
            n: 18,
            avg: 0,
            z1: 0,
            z2: 0,
            phi1: 0,
            phi2: 0,
            n_i: 0,
            k: 0
        },
        {
            x1: 0.1,
            x2: 0.12,
            n: 10,
            avg: 0,
            z1: 0,
            z2: 0,
            phi1: 0,
            phi2: 0,
            n_i: 0,
            k: 0
        },
        {
            x1: 0.12,
            x2: 0.14,
            n: 6,
            avg: 0,
            z1: 0,
            z2: 0,
            phi1: 0,
            phi2: 0,
            n_i: 0,
            k: 0
        },
        {
            x1: 0.14,
            x2: 0.16,
            n: 4,
            avg: 0,
            z1: 0,
            z2: 0,
            phi1: 0,
            phi2: 0,
            n_i: 0,
            k: 0
        },
    ]

    document.getElementById('task1_size').value = default_for_task1.length
    task1_size.onchange()

    let input_x1 = document.getElementsByClassName('task1_x1')
    let input_x2 = document.getElementsByClassName('task1_x2')
    let input_n = document.getElementsByClassName('task1_n')

    for (let i = 0; i < input_x1.length; i++) {
        input_x1[i].value = default_for_task1[i]['x1']
        input_x2[i].value = default_for_task1[i]['x2']
        input_n[i].value = default_for_task1[i]['n']
    }
}

task3_default.onclick = () => {
    let x = {
        sample:[
            {x1:0,x2:2,n:1,r:0,avg:0},
            {x1:2,x2:12,n:1,r:0,avg:0},
            {x1:12,x2:13,n:2,r:0,avg:0},
            {x1:13,x2:14,n:6,r:0,avg:0},
            {x1:14,x2:16,n:6,r:0,avg:0},
            {x1:16,x2:18,n:5,r:0,avg:0},
            {x1:18,x2:20,n:12,r:0,avg:0},
            {x1:20,x2:22,n:12,r:0,avg:0},
            {x1:22,x2:24,n:4,r:0,avg:0},
            {x1:24,x2:25,n:1,r:0,avg:0},
            {x1:25,x2:32,n:2,r:0,avg:0}
        ],
        n: 0,
        labels: [],
        m: 0,
        s: 0,
        k: 0
    }
    
    let y = {
        sample: [
            {x1:10,x2:14,n:2,r:0,avg:0},
            {x1:14,x2:16,n:7,r:0,avg:0},
            {x1:16,x2:18,n:6,r:0,avg:0},
            {x1:18,x2:20,n:13,r:0,avg:0},
            {x1:20,x2:22,n:14,r:0,avg:0},
            {x1:22,x2:24,n:4,r:0,avg:0},
            {x1:24,x2:25,n:2,r:0,avg:0},
            {x1:25,x2:28,n:1,r:0,avg:0},
            {x1:28,x2:32,n:2,r:0,avg:0}
        ],
        n: 0,
        labels: [],
        m: 0,
        s: 0,
        k: 0
    }


    document.getElementById('task3_size1').value = x['sample'].length
    task3_size1.onchange()

    document.getElementById('task3_size2').value = y['sample'].length
    task3_size2.onchange()

    let input_x11 = document.getElementsByClassName('task3_x11')
    let input_x21 = document.getElementsByClassName('task3_x21')
    let input_n1 = document.getElementsByClassName('task3_n1')

    let input_x12 = document.getElementsByClassName('task3_x12')
    let input_x22 = document.getElementsByClassName('task3_x22')
    let input_n2 = document.getElementsByClassName('task3_n2')

    for (let i = 0; i < input_x11.length; i++) {
        input_x11[i].value = x['sample'][i]['x1']
        input_x21[i].value = x['sample'][i]['x2']
        input_n1[i].value = x['sample'][i]['n']
    }

    for (let i = 0; i < input_x12.length; i++) {
        input_x12[i].value = y['sample'][i]['x1']
        input_x22[i].value = y['sample'][i]['x2']
        input_n2[i].value = y['sample'][i]['n']
    }
}