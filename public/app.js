let beanId
let toppingId
let syrupId
let beanName
let toppingName
let syrupName

axios.get(`/api/syrups`)
  .then(({ data }) => {
    data.forEach((syrup, i) => {
      let syrupElem = document.createElement('option')
      syrupElem.innerHTML = `${syrup.name}`
      syrupElem.dataset.name = syrup.name
      syrupElem.dataset.id = i + 1
      document.getElementById('syrups').append(syrupElem)
    })
  })
  .catch(err => console.log(err))


axios.get(`/api/toppings`)
  .then(({ data }) => {
    data.forEach((topping, i) => {
      let toppingElem = document.createElement('option')
      toppingElem.innerHTML = `${topping.name}`
      toppingElem.dataset.name = topping.name
      toppingElem.dataset.id = i + 1
      document.getElementById('toppings').append(toppingElem)
    })
  })
  .catch(err => console.log(err))


axios.get(`/api/beans`)
  .then(({ data }) => {
    data.forEach((bean, i) => {
      let beanElem = document.createElement('option')
      beanElem.innerHTML = `${bean.name}`
      beanElem.dataset.name = bean.name
      beanElem.dataset.id = i + 1
      document.getElementById('beans').append(beanElem)
    })
  })
  .catch(err => console.log(err))

document.getElementById('beans').addEventListener('click', event => {
  beanId = event.target.options[event.target.selectedIndex].dataset.id
  beanName = event.target.options[event.target.selectedIndex].dataset.name
})

document.getElementById('toppings').addEventListener('click', event => {
  toppingId = event.target.options[event.target.selectedIndex].dataset.id
  toppingName = event.target.options[event.target.selectedIndex].dataset.name
})

document.getElementById('syrups').addEventListener('change', event => {
  syrupId = event.target.options[event.target.selectedIndex].dataset.id
  syrupName = event.target.options[event.target.selectedIndex].dataset.name
})

document.getElementById('addDrink').addEventListener('click', event => {
  event.preventDefault()
  console.log(toppingId, beanId, syrupId)
  axios.post(`/api/drinks`, {
    name: document.getElementById('name').value,
    toppingId: toppingId,
    beanId: beanId,
    syrupId: syrupId
  })
    .then(({ data }) => {
      let drinkElem = document.createElement('li')
      drinkElem.className = 'list-group-item'
      drinkElem.innerHTML = `
        <p>Drink Name: ${document.getElementById('name').value}</p>
        <p>Beans: ${beanName}</p>
        <p>Toppings: ${toppingName}</p>
        <p>Syrups: ${syrupName}</p>
      `
      document.getElementById('drinks').append(drinkElem)
    })
    .catch(err => console.log(err))
})

axios.get('/api/drinks')
  .then(({ data }) => {
    data.forEach(drink => {
      let drinkElem = document.createElement('li')
      drinkElem.className = 'list-group-item'
      drinkElem.innerHTML = `
        <p>Drink Name: ${drink.name}</p>
        <p>Beans: ${drink.bean.name}</p>
        <p>Toppings: ${drink.topping.name}</p>
        <p>Syrups: ${drink.syrup.name}</p>
      `
      document.getElementById('drinks').append(drinkElem)
    })
  })
  .catch(err => console.log(err))