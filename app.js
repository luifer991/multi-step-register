document.addEventListener('DOMContentLoaded', function () {

    const btn3 = document.querySelector('#btn3')
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')
    const nameInput = document.querySelector('#name')
    const emailInput = document.querySelector('#email')
    const form = document.querySelector('#register-form')
    const form2 = document.querySelector('#register-form2')
    const nameResponse = document.querySelector('#nameResponse')
    const emailResponse = document.querySelector('#emailResponse')
    const newList = document.createElement('ul')
    const slider = document.querySelector('#slider')

    form.addEventListener('submit', event => {
        event.preventDefault()

        const name = nameInput.value
        const email = emailInput.value

        let index = 0
        index += 33.3
        slider.style.transform = `translateX(-${index}%)`
        slider.style.transition = 'all 0.2s ease'

        nameResponse.innerHTML = `Name: <span class="span">${name}</span>`
        emailResponse.innerHTML = `Email: <span class="span">${email}</span>`

        form.reset()
    })

    form2.addEventListener('submit', event => {
        event.preventDefault()

        let index = 0
        index += 66.6
        slider.style.transform = `translateX(-${index}%)`
        slider.style.transition = 'all 0.2s ease-in-out'

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const item = document.createElement('li')
                item.textContent = checkbox.value
                item.style.paddingBottom = '6px'
                item.style.marginLeft = '40px'
                item.style.fontSize = '14px'
                newList.appendChild(item)
                btn3.parentNode.insertBefore(newList, btn3)
            }
        })

        newList.style.color = '#e5e7eb'
        newList.style.fontSize = '14px'
        newList.style.paddingTop = '16px'
        newList.style.paddingBottom = '32px'

        form2.reset()
    })

    btn3.addEventListener('click', () => {
        window.location.reload(true)    

        // index = 0
        // slider.style.transform = `translateX(-${index}%)`
        // slider.style.transition = 'all 0.2s ease-in-out'
    })
})
