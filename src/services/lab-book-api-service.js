import config from '../config'

const LabBookService = {
  getExperiments(){
    return fetch(`${config.API_ENDPOINT}/experiments`, {
      headers: {
        // will need to validated user logged in
      },
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getExperimentById(id){
    return fetch(`${config.API_ENDPOINT}/experiments/${id}`, {
      headers: {
        // will need to validated user logged in
      },
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default LabBookService;