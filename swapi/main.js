const residentContainer = document.querySelector('#residents-container')
const button = document.querySelector("button")

const alderaanAPI = `https://swapi.dev/api/planets/2/`

const alderaanCallback = ({ data: residents }) => findResidents(residents)
const residentCallback = ({ data: residents }) => createResidentCard(residents)
const errCallback = err => console.log(err)

const getAlderaan = () => axios.get(alderaanAPI).then(alderaanCallback).catch(errCallback)
const getResident = (person) => axios.get(person).then(residentCallback).catch(errCallback)

function getResidents(event) {
    event.preventDefault()
    console.log("Button clicked")

    getAlderaan()
}


const createResidentCard = (resident) => {
    console.log('Creating resident card')
    const residentCard = document.createElement('div')
    residentCard.classList.add('resident-card')

    residentCard.innerHTML = `
    <h2 class="name">${resident.name}</h2>
    `


    residentContainer.appendChild(residentCard)
}

const findResidents = (ald) => {
    console.log('Finding residents')
    console.log(ald)
    const res = ald.residents
    for (let i = 0; i < res.length; i++) {
        const getResidents = () => axios.get(arr[i]).then(alderaanCallback).catch(errCallback)
        getResident(res[i])
    }
}



button.addEventListener("click", getResidents)



