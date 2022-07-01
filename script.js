const btn = document.querySelector('.btn')
btn.textContent = 'Клик'
document.body.append(btn)

btn.addEventListener('click', () => {
    joke()
})

const joke = () => {
    fetch('https://api.chucknorris.io/jokes/random').then((res) => {
    return res.json()
}).then((data) => {
  document.body.append(data.value)
})
}
