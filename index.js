const board = document.querySelector('#root')
const SQUEARS_NUMBER = 500
const colors = ['blue', 'yellow']

const getRandomColor = () => {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

const setColor = (item) => {
    const color = getRandomColor()
    item.style.backgroundColor = color
    item.style.boxShadow = `0 0 2px ${color},
    0 0 10px ${color}`
}

const removeColor = (item) => {
    item.style.backgroundColor = "#1d1d1d"
    item.style.boxShadow = `0 0 2px #000`
}

for (let i = 0; i < SQUEARS_NUMBER; i++) {
    const square = document.createElement('div')

    square.classList.add('square')

    square.addEventListener('pointerover', () => {
        setColor(square)
    })

    square.addEventListener('pointerleave', () => {
        removeColor(square)
    })

    board.append(square)
}
