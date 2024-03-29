// Get elements
const op = document.querySelectorAll('.table-op')
const table = document.getElementById('table')
const tableBtn = document.querySelectorAll('.btn')[0]
// Create div to the result
const tableResult = document.createElement('div')
tableResult.className = 'result'

// TABLE FUNCTION function
tableBtn.onclick = function() {
    let start = Number(document.getElementByid('tableStart').value)
    let end = Number(document.getElementById('tableEnd').value)
    let steps = Number(document.getElementById('tableSteps').value)

    // Clean result space
    tableResult.innerHTML = ''

    // Avoid infinite loop
    if (steps == 0) {steps = 1}

    // Call functions according to the condition
    start <= end ? increasingTable(start, end, steps) : decreasingTable(start, end, steps)

    table.append(tableResult)
}

// Increasing Table
const increasingTable = (start, end, steps) => {
    // Generate table according to the params
    if (op[0].checked) {
        for (start; start <= end; start += steps) {
            tableRes.innerHTML += generateTable(start, 'add')
        }   
    } else if (op[1].checked) {
        for (start; start <= end; start += steps) {
            tableRes.innerHTML += generateTable(start, 'sub')
        }
    } else if (op[2].checked) {
        for (start; start <= end; start += steps) {
            tableRes.innerHTML += generateTable(start, 'mult')
        }
    } else {
        for (start; start <= end; start += steps) {
            tableRes.innerHTML += generateTable(start, 'div')
        }
    }
}

// Decreasing table
const decreasingTable = (start, end, steps) => {
    // Generate table according to the params
    if (op[0].checked) {
        for (start; start >= end; start -= steps) {
            tableRes.innerHTML += generateTable(start, 'add')
        }   
    } else if (op[1].checked) {
        for (start; start >= end; start -= steps) {
            tableRes.innerHTML += generateTable(start, 'sub')
        }
    } else if (op[2].checked) {
        for (start; start >= end; start -= steps) {
            tableRes.innerHTML += generateTable(start, 'mult')
        }
    } else {
        for (start; start >= end; start -= steps) {
            tableRes.innerHTML += generateTable(start, 'div')
        }
    }
}

// Generate table
const generateTable = (s, operation) => {
    const n = Number(document.getElementById('tableNumber').value)

    switch (operation) {
        case 'add':
            result = `<p class='fw-bold text-center'>${s} + ${n} = ${s + n}</p>`
            break
        case 'sub':
            result = `<p class='fw-bold text-center'>${s} - ${n} = ${s - n}</p>`
            break
        case 'mult':
            result = `<p class='fw-bold text-center'>${s} X ${n} = ${s * n}</p>`
            break
        case 'div': 
            result = `<p class='fw-bold text-center'>${s} ÷ ${n} = ${s / n}</p>`
        break
    }
    return result
}