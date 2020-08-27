
axios.get(`/api/syrups`)
  .then(({ data }) => {
    data.forEach((syrup) => {
      let syrupElem = document.createElement('a')
      syrupElem.className = 'dropdown-item'
      syrupElem.innerHTML = `${syrup.name}`
      document.getElementById('syrupDrop').append(syrupElem)
    })
  })
  .catch(err => console.log(err))


  axios.get(`/api/toppings`)
  .then(({ data }) => {
    data.forEach((topping) => {
      let toppingElem = document.createElement('a')
      toppingElem.className = 'dropdown-item'
      toppingElem.innerHTML = `${topping.name}`
      document.getElementById('topDrop').append(toppingElem)
    })
  })
  .catch(err => console.log(err))


axios.get(`/api/beans`)
.then(({ data }) => {
  data.forEach((bean, i) => {
    let beanElem = document.createElement('a')
    beanElem.className = 'dropdown-item'
    beanElem.id = `bean${bean.id}`
    beanElem.innerHTML = `${bean.name}`
    document.getElementById('beanDrop').append(beanElem)
  })
})
.catch(err => console.log(err))

document.getElementById('beanDrop').addEventListener('click', event => {
  document.getElementById()
})

document.getElementById('addDrink').addEventListener('click', event => {
  event.preventDefault()
  
  axios.post(`/api/drinks`, {
    name: document.getElementById('name').value
  })
    .then()
    .catch(err => console.log(err))
})