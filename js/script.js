const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    // console.log(panel);
    panel.addEventListener('click', () => {
        removeActiveClassess()
        panel.classList.add('active')
    })
})

function removeActiveClassess() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}