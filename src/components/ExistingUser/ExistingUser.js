import React, { Component } from 'react'
import ExperimentsContext from '../../contexts/ExperimentsContext'
import { Link } from 'react-router-dom'
import moment from 'moment'
import LabBookService from '../../services/lab-book-api-service'
import './ExistingUser.css'

export class ExistingUser extends Component {

  static defaultProps = {
    match: {
      params: {}
    },
    deleteExperiment: () => { },
  }

  static contextType = ExperimentsContext

  handleClickDelete = (e, experimentId) => {
    e.preventDefault();

    LabBookService.deleteExperiment(experimentId)
      .then(res => {
        if (!res.ok) {
          return res.json().then(e => Promise.reject(e))
        }
        return res
      })
      .then(() => {
        this.context.deleteExperiment(experimentId)
        this.props.deleteExperiment(experimentId)
      })
      .catch(error => {
        console.error({ error })
      })
  }



  render() {
    const { experiments = [] } = this.context
    const username = experiments ? this.context.experiments[0].user.username : '';
    const experimentsArray = experiments.map(experiment => {
      return (<section className='experimentCard' key={experiment.id}>
        <h2>
          <Link to={`/experiments/${experiment.id}`} >
            {experiment.experiment_title}
          </Link>
        </h2>

        <button onClick={(e) => this.handleClickDelete(e, experiment.id)}> Delete Experiment</button>
        <p> Date created: {moment(experiment.date_created).format("MMM Do YY")} </p>
      </section>)
    });

    return (
      <div className='existingUser'>
        <section className='userWelcome'>
        <h2>Welcome back, {username}!</h2>
        <p>Total Experiments: {experiments.length}</p>
        <Link to={'/newExperiment'}>
          <button >Add new experiment</button>
        </Link>
        </section>
      <section className='experimentList'>
        <h2>Experiments</h2>
        {experimentsArray}
      </section>
      </div>
    )
  }
}

export default ExistingUser
