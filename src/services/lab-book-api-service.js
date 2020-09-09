import config from '../config'
import newExperimentFrom from '../routes/newExperimentForm/newExperimentFrom'

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
  },
  postExperiment(newExperiment) {
    return fetch(`${config.API_ENDPOINT}/experiments`, {
      method: 'POST',
      headers: {
        'authorization': `basic `,
        'content-type': 'application/json'
      },
      body: JSON.stringify(newExperiment)
    })
    .then(res => 
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json())
  },
  deleteExperiment(experimentId) {
    return fetch(`${config.API_ENDPOINT}/experiments/${experimentId}`, {
      method: 'DELETE',
      headers: {
        'authorization': `basic `,
        'content-type': 'application/json'
      }
    })
  },
  getObservations(id){
    return fetch(`${config.API_ENDPOINT}/experiments/${id}/observations`, {
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
  getObservationById(experimentId, observationId){
    return fetch(`${config.API_ENDPOINT}/experiments/${experimentId}/observations/${observationId}`, {
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
  
}

export default LabBookService;