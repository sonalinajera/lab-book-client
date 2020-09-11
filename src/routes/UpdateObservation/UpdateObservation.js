// import React, { Component } from 'react'
// import LabBookService from '../../services/lab-book-api-service'

// export class UpdateObservation extends Component {

//   constructor(props) {
//     super(props);
//     this.state = (
//       {
//         observationId: null,
//         observationTitle: '',
//         observationNotes: '',
//         experimentId: null,
//         experimentTitle: '',
//       }
//     );

//     this.formUpdate = this.formUpdate.bind(this);
//   }

//   componentDidMount(){
//     this.setState({
//       observationId: this.props.location.observation.id,
//       observationTitle: this.props.location.observation.observation_title,
//       observationNotes: this.props.location.observation.observation_notes,
//       experimentId: this.props.location.observation.experiment_id,
//       experimentTitle: this.props.location.experimentTitle
//     })
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//    const { observationTitle, observationNotes } = e.target;
  
//   //  const experimentId = this.props.location.experiment ? this.props.location.experiment.id : ''
   
//   //  const newObservation = {
//   //    observation_title: observationTitle.value,
//   //    observation_notes: observationNotes.value,
//   //    experiment_id: experimentId
//   //   }
//   //  LabBookService.postObservation(experimentId, newObservation)
//   //  .then(res => console.log(res))
//   }

//   formUpdate(event) {
//     this.setState({
//       observationTitle: event.target.event,
//       observationNotes: event.target.event
//     })
//   }

//   render() {
  
    
//     return (
//       <div>
//         <main role="main">
//       <header>
//         <h1>Edit Observation</h1>
//       </header>
//       <section>
//         <form id="experimentSetup" onSubmit={this.handleSubmit}>
//           <div className="form-section">
//             <h2>{this.state.experimentTitle}</h2>
//             <label 
//               htmlFor="observationTitle">
//                   Observation header 
//                 <input 
//                 type="text" 
//                 name="observationTitle" 
//                 value={this.state.observationTitle} 
//                 onChange={this.formUpdate}
//                 required/>
//             </label>
            
//           </div>
//           <div className="form-section">
//             <label htmlFor="observationNotes">Observation Notes</label>
//             <textarea 
//             name="observationNotes" 
//             rows="4"   
//             value= {this.state.observationNotes}
//             onChange={this.formUpdate}
//             required></textarea>
//           </div>
      
        
//           <button onClick={() => this.props.history.goBack()} type="submit">Submit</button>
//           <button onClick={() => this.props.history.goBack()}>Cancel</button>
//         </form>
//       </section>
//     </main>
//       </div>
//     )
//   }
// }

// export default UpdateObservation
