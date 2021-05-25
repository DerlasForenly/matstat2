task1_calculate.onclick = () => {
    deleteChilds(document.getElementById('task1_result_div'))
    let t = document.createElement('table')
    t.setAttribute('id', 'task1_table1')
    document.getElementById('task1_result_div').appendChild(t)
    t = document.createElement('canvas')
    t.setAttribute('id', 'gistogram')
    document.getElementById('task1_result_div').appendChild(t)
    t = document.createElement('table')
    t.setAttribute('id', 'task1_table2')
    document.getElementById('task1_result_div').appendChild(t)
    t = 0


    let input_x1 = document.getElementsByClassName('task1_x1')
    let input_x2 = document.getElementsByClassName('task1_x2')
    let input_n = document.getElementsByClassName('task1_n')

    let alpha = 0.05
    let hi2_nab = 0
    let hi2_crit = 0
    let mean = 0
    let s2 = 0
    let sigma = 0
    let k = 0

    let data = []
    for (let i = 0; i < input_x1.length; i++) {
        data.push(
            {
                x1: parseFloat(input_x1[i].value),
                x2: parseFloat(input_x2[i].value),
                n: parseFloat(input_n[i].value),
                avg: 0,
                z1: 0,
                z2: 0,
                phi1: 0,
                phi2: 0,
                n_i: 0,
                k: 0
            }
        )
    }

    console.log(data)

    let n = 0

    for (let e of data) {
        e['avg'] = (e['x1'] + e['x2']) / 2
        mean += e['avg'] * e['n']
        n += e['n']
        t += e['avg'] ** 2 * e['n']
    }
    t /= n
    mean /= n
    s2 = t - mean ** 2
    sigma = Math.sqrt(s2)

    for (let e of data) {
        e['z1'] = Math.abs((e['x1'] - mean) / sigma)
        e['z2'] = Math.abs((e['x2'] - mean) / sigma)
        e['phi1'] = Phi_from_z(Math.abs(e['z1']))
        e['phi2'] = Phi_from_z(Math.abs(e['z2']))
        e['n_i'] = Math.abs(n * (Math.abs(e['phi2']) - Math.abs(e['phi1'])))
        e['k'] = Math.abs((e['n'] - e['n_i']) ** 2) / e['n_i']
        hi2_nab += e['k']
    }
    k = data.length - 3
    hi2_crit = criticalPointPirson(k)

    let labels = []
    let rel = []
    let data_for_chart = []

    for (let e of data) {
        labels.push(`[${e['x1']};${e['x2']})`)
        rel.push(e['n'] / n)
        data_for_chart.push(e['n'])
    }

    let table = document.getElementById('task1_table1')
    for (let i = 0; i < 3; i++) {
        let tr = document.createElement('tr')

        if (i == 0)
            for (let e of data) {
                let td = document.createElement('td')
                td.textContent = `[${e['x1']};${e['x2']})`
                tr.appendChild(td)
            }
        else if (i == 1)
            for (let e of data) {
                let td = document.createElement('td')
                td.textContent = e['n']
                tr.appendChild(td)
            }
        else if (i == 2)
            for (let e of data) {
                let td = document.createElement('td')
                td.textContent = (e['n'] / n).toFixed(5)
                tr.appendChild(td)
            }

        table.appendChild(tr)
    }

    document.getElementById('task1_result_div').appendChild(table)

    let bar = new Chart(document.getElementById('gistogram').getContext('2d'), {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'Interval statistical series',
                backgroundColor: 'rgb(37, 238, 245, 0.5)',
                borderColor: 'rgb(37, 238, 245)',
                data: data_for_chart
            }]
        }
    })

    let h3 = document.createElement('h3')
    h3.textContent = 'Hypothesis:'
    document.getElementById('task1_fieldset').appendChild(h3)

    if (hi2_nab > hi2_crit) {
        let h4 = document.createElement('h4')
        h4.textContent = `H0: false`
        document.getElementById('task1_fieldset').appendChild(h4)
    }
    else {
        let h4 = document.createElement('h4')
        h4.textContent = `H0: true`
        document.getElementById('task1_fieldset').appendChild(h4)
    }

    let h4 = document.createElement('h4')
    h4.textContent = `Power of freedom: ${k}`
    document.getElementById('task1_fieldset').appendChild(h4)

    h4 = document.createElement('h4')
    h4.textContent = `Observed value P: ${hi2_nab}`
    document.getElementById('task1_fieldset').appendChild(h4)

    h4 = document.createElement('h4')
    h4.textContent = `Critical point P: ${hi2_crit}`
    document.getElementById('task1_fieldset').appendChild(h4)

    table = `
    <table>
        <tr>
            <td>xi</td>
            <td>xi+1</td>
            <td>ni</td>
            <td>zi</td>
            <td>zi+1</td>
            <td>Ф(zi)</td>
            <td>Ф(zi+1)</td>
            <td>pi</td>
            <td>ni'</td>
            <td>Ki'</td>
        </tr>
    `
    for (let e of data) {
        tr = `
        <tr>
            <td>${e['x1']}</td>
            <td>${e['x2']}</td>
            <td>${e['n']}</td>
            <td>${e['z1'].toFixed(3)}</td>
            <td>${e['z2'].toFixed(3)}</td>
            <td>${e['phi1'].toFixed(3)}</td>
            <td>${e['phi2'].toFixed(3)}</td>
            <td>${Math.abs(e['phi2'] - e['phi1']).toFixed(3)}</td>
            <td>${e['n_i'].toFixed(3)}</td>
            <td>${e['k'].toFixed(3)}</td>
        </tr>
        `
        table += tr
    }

    table += `</table>`


    document.getElementById('task1_result_div').innerHTML = table

}

task2_calculate.onclick = () => {
    deleteChilds(document.getElementById('task2_result_div'))

    let F_cr = 0
    let F_nab = 0

    let x = {
        sample:[],
        n: 0,
        labels: [],
        m: 0,
        s: 0,
        k: 0
    }

    let y = {
        sample: [],
        n: 0,
        labels: [],
        m: 0,
        s: 0,
        k: 0
    }

    for (let i = 0; i < document.getElementById('task2_size1').value; i++) {
        x['sample'].push(
            {
                x1: parseFloat(document.getElementsByClassName('task2_x11')[i].value),
                x2: parseFloat(document.getElementsByClassName('task2_x21')[i].value),
                n: parseFloat(document.getElementsByClassName('task2_n1')[i].value),
                r: 0, avg: 0
            }
        )
    }
    for (let i = 0; i < document.getElementById('task2_size2').value; i++) {
        y['sample'].push(
            {
                x1: parseFloat(document.getElementsByClassName('task2_x12')[i].value),
                x2: parseFloat(document.getElementsByClassName('task2_x22')[i].value),
                n: parseFloat(document.getElementsByClassName('task2_n2')[i].value),
                r: 0, avg: 0
            }
        )
    }

    for (let e of x['sample']) {
        e['avg'] = (e['x1'] - e['x2']) / 2
        x['n'] += e['n']
        e['r'] = e['n'] / x['n']
        x['labels'].push(`[${e['x1']};${e['x2']})`)
        x['m'] += e['n'] * e['avg']
    }
    x['m'] /= x['n']
    for (let e of x['sample']) {
        x['s'] += (e['avg'] - x['m']) ** 2
    }
    x['s'] /= x['n'] - 1
    x['k'] = x['sample'].length - 1
    for (let e of y['sample']) {
        e['avg'] = (e['x1'] - e['x2']) / 2
        y['n'] += e['n']
        e['r'] = e['n'] / y['n']
        y['labels'].push(`[${e['x1']};${e['x2']})`)
        y['m'] += e['n'] * e['avg']
    }
    y['m'] /= y['n']
    for (let e of y['sample']) {
        y['s'] += (e['avg'] - y['m']) ** 2
    }
    y['s'] /= y['n'] - 1
    y['k'] = y['sample'].length - 1

    if (x['s'] > y['s']) {
        F_nab = x['s'] / y['s']
        F_cr = criticalFisher(x['k'], y['k'])
    }
    else {
        F_nab = y['s'] / x['s']
        F_cr = criticalFisher(y['k'], x['k'])
    }

    h4 = document.createElement('h4')
    if (F_nab < F_cr) {
        h4.textContent = "H0: true"
    }
    else {
        h4.textContent = "H0: false"
    }
    document.getElementById('task2_result_div').appendChild(h4)

    h4 = document.createElement('h4')
    h4.textContent = `Power of freedom 1: ${x['k']}`
    document.getElementById('task2_result_div').appendChild(h4)

    h4 = document.createElement('h4')
    h4.textContent = `Power of freedom 1: ${y['k']}`
    document.getElementById('task2_result_div').appendChild(h4)

    h4 = document.createElement('h4')
    h4.textContent = `Variance 1: ${x['s'].toFixed(5)}`
    document.getElementById('task2_result_div').appendChild(h4)

    h4 = document.createElement('h4')
    h4.textContent = `Variance 2: ${y['s'].toFixed(5)}`
    document.getElementById('task2_result_div').appendChild(h4)

    h4 = document.createElement('h4')
    h4.textContent = `Critical point: ${F_cr}`
    document.getElementById('task2_result_div').appendChild(h4)

    h4 = document.createElement('h4')
    h4.textContent = `Observed value: ${F_nab.toFixed(5)}`
    document.getElementById('task2_result_div').appendChild(h4)
}

task3_calculate.onclick = () => {
    deleteChilds(document.getElementById('task3_result_div'))

    let Z_test = false
    let T_test = false
    let o_z = 0
    let o_t = 0
    let c_z = 0
    let c_t = 0

    let x = {
        sample:[],
        n: 0,
        labels: [],
        m: 0,
        s: 0,
        k: 0
    }

    let y = {
        sample: [],
        n: 0,
        labels: [],
        m: 0,
        s: 0,
        k: 0
    }

    for (let i = 0; i < document.getElementById('task3_size1').value; i++) {
        x['sample'].push(
            {
                x1: parseFloat(document.getElementsByClassName('task3_x11')[i].value),
                x2: parseFloat(document.getElementsByClassName('task3_x21')[i].value),
                n: parseFloat(document.getElementsByClassName('task3_n1')[i].value),
                r: 0, avg: 0
            }
        )
    }
    for (let i = 0; i < document.getElementById('task3_size2').value; i++) {
        y['sample'].push(
            {
                x1: parseFloat(document.getElementsByClassName('task3_x12')[i].value),
                x2: parseFloat(document.getElementsByClassName('task3_x22')[i].value),
                n: parseFloat(document.getElementsByClassName('task3_n2')[i].value),
                r: 0, avg: 0
            }
        )
    }

    for (let e of x['sample']) {
        e['avg'] = (e['x1'] - e['x2']) / 2
        x['n'] += e['n']
        e['r'] = e['n'] / x['n']
        x['labels'].push(`[${e['x1']};${e['x2']})`)
        x['m'] += e['n'] * e['avg']
    }
    x['m'] /= x['n']
    for (let e of x['sample']) {
        x['s'] += (e['avg'] - x['m']) ** 2
    }
    x['s'] /= x['n'] - 1
    x['k'] = x['sample'].length - 1
    for (let e of y['sample']) {
        e['avg'] = (e['x1'] - e['x2']) / 2
        y['n'] += e['n']
        e['r'] = e['n'] / y['n']
        y['labels'].push(`[${e['x1']};${e['x2']})`)
        y['m'] += e['n'] * e['avg']
    }
    y['m'] /= y['n']
    for (let e of y['sample']) {
        y['s'] += (e['avg'] - y['m']) ** 2
    }
    y['s'] /= y['n'] - 1
    y['k'] = y['sample'].length - 1

    let h4 = document.createElement('h4')
    h4.textContent = 'Hypothesis:'
    document.getElementById('task3_result_div').appendChild(h4)

    if (x['s'] == y['s']) {
        c_t = criticalT(x['sample'].length + y['sample'].length - 2)
        // o_t = (x['m'] - y['m']) / 
        // Math.sqrt((x['n'] - 1) * x['s'] + (y['n'] - 1) * y['s']) *
        // Math.sqrt((x['n'] * y['n'] * (x['n'] + y['n'] - 2)) / (x['n'] + y['n']))

        o_t = (x['m'] - y['m']) / 
        Math.sqrt((x['n'] * x['s'] + y['n'] * y['s']) / (x['n'] + y['m'] - 2) *
        (1 / x['n'] + 1 / y['n']))

        if (Math.abs(o_t) > c_t) T_test = false
        else T_test = true

        h4 = document.createElement('h4')
        h4.textContent = `H0 (T-test): ${T_test}`
        document.getElementById('task3_result_div').appendChild(h4)

        h4 = document.createElement('h4')
        h4.textContent = `Observed value (T): ${o_t}`
        document.getElementById('task3_result_div').appendChild(h4)

        h4 = document.createElement('h4')
        h4.textContent = `Critical point t: ${c_t}`
        document.getElementById('task3_result_div').appendChild(h4)
    }
    else {
        o_z = (x['m'] - y['m']) / Math.sqrt(x['s'] / x['n'] + y['s'] / y['n'])
        c_z = Phi_from_z((1 - 0.05) / 2)

        if (Math.abs(o_z) > c_z) Z_test = false
        else Z_test = true

        h4 = document.createElement('h4')
        h4.textContent = `H0 (Z-test): ${Z_test}`
        document.getElementById('task3_result_div').appendChild(h4)

        h4 = document.createElement('h4')
        h4.textContent = `Observed value (Z): ${o_z}`
        document.getElementById('task3_result_div').appendChild(h4)

        h4 = document.createElement('h4')
        h4.textContent = `Critical point z: ${c_z}`
        document.getElementById('task3_result_div').appendChild(h4)
    }
}