import React, { Component } from 'react';
import Auxi from './hoc/Auxi';
import IntroPage from './IntroPage';
import Subject from './Subject';
import Students from "./Students";
import Footer from './Footer';
import './TA.css';

class TA extends Component {

    state = {
        studentA : [
          { id:'a', name: 'ABC', roll: '19ABC19'},
          { id:'b', name: 'XYZ', roll: '19XYZ19'},
          { id:'c', name: 'PQR', roll: '19PQR19'},
          { id:'d', name: 'LMN', roll: '19LMN19'},
          { id:'e', name: 'EFG', roll: '19EFG19'},
          { id:'f', name: 'IJK', roll: '19IJK19'}
        ],

        studentB : [
            { id:'g', name: 'ABC', roll: '19ABC19'},
            { id:'h', name: 'XYZ', roll: '19XYZ19'},
            { id:'i', name: 'PQR', roll: '19PQR19'},
            { id:'j', name: 'LMN', roll: '19LMN19'},
            { id:'k', name: 'EFG', roll: '19EFG19'},
            { id:'l', name: 'IJK', roll: '19IJK19'}
        ],

        studentC : [
            { id:'m', name: 'ABC', roll: '19ABC19'},
            { id:'n', name: 'XYZ', roll: '19XYZ19'},
            { id:'o', name: 'PQR', roll: '19PQR19'},
            { id:'p', name: 'LMN', roll: '19LMN19'},
            { id:'q', name: 'EFG', roll: '19IJK19'},
            { id:'r', name: 'IJK', roll: '19EFG19'}
        ],

        studentD : [
            { id:'s', name: 'QWE', roll: '19QWE19'},
            { id:'t', name: 'RTY', roll: '19RTY19'},
            { id:'u', name: 'UIO', roll: '19UIO19'},
            { id:'v', name: 'ASD', roll: '19ASD19'},
            { id:'w', name: 'FGH', roll: '19FGH19'},
            { id:'x', name: 'JKL', roll: '19JKL19'}
        ],

        studentE : [
            { id:'ab', name: 'AB', roll: '19AB19'},
            { id:'cd', name: 'CD', roll: '19CD19'},
            { id:'ef', name: 'EF', roll: '19EF19'},
            { id:'gh', name: 'GH', roll: '19GH19'},
            { id:'ij', name: 'IJ', roll: '19IJ19'},
            { id:'kl', name: 'KL', roll: '19KL19'}
        ],

        studentF : [
            { id:'mn', name: 'MN', roll: '19MN19'},
            { id:'op', name: 'OP', roll: '19OP19'},
            { id:'qr', name: 'QR', roll: '19QR19'},
            { id:'st', name: 'ST', roll: '19ST19'},
            { id:'uv', name: 'UV', roll: '19UV19'},
            { id:'wx', name: 'WX', roll: '19WX19'}
        ],

        addingA: false,
        addingB: false,
        addingC: false,
        addingD: false,
        addingE: false,
        addingF: false,
    }


    handleShowA = () =>  {
        const {addingA} = this.state
        this.setState( { addingA: !addingA } );
    }

    handleShowB = () =>  {
        const {addingB} = this.state
        this.setState( { addingB: !addingB } );
    }

    handleShowC = () =>  {
        const {addingC} = this.state
        this.setState( { addingC: !addingC } );
    }

    handleShowD = () =>  {
        const {addingD} = this.state
        this.setState( { addingD: !addingD } );
    }

    handleShowE = () =>  {
        const {addingE} = this.state
        this.setState( { addingE: !addingE } );
    }

    handleShowF = () =>  {
        const {addingF} = this.state
        this.setState( { addingF: !addingF } );
    }

    deletePartA = (index) => {
        const studentAs = Object.assign([], this.state.studentA);
        studentAs.splice(index,1);
        this.setState({studentA:studentAs});
    }

    deletePartB = (index) => {
        const studentAs = Object.assign([], this.state.studentB);
        studentAs.splice(index,1);
        this.setState({studentB:studentAs});
    }

    deletePartC = (index) => {
        const studentAs = Object.assign([], this.state.studentC);
        studentAs.splice(index,1);
        this.setState({studentC:studentAs});
    }

    deletePartD = (index) => {
        const studentAs = Object.assign([], this.state.studentD);
        studentAs.splice(index,1);
        this.setState({studentD:studentAs});
    }

    deletePartE = (index) => {
        const studentAs = Object.assign([], this.state.studentE);
        studentAs.splice(index,1);
        this.setState({studentE:studentAs});
    }

    deletePartF = (index) => {
        const studentAs = Object.assign([], this.state.studentF);
        studentAs.splice(index,1);
        this.setState({studentF:studentAs});
    }


    render() {
        return(
            <Auxi>
                <div id="intro-page"><IntroPage></IntroPage></div>

                <div id="subject-page">

                    <h2 className="subject-page-h2"> Choose Subject </h2>

                    <div className="subject-page-list">
                        <Subject className="Subject-list" name="Physics" credit="4" semester="Physics" added={this.handleShowA} />
                        <Subject className="Subject-list" name="PDS" credit="3" semester="Physics" added={this.handleShowB} />
                        <Subject className="Subject-list" name="E.D." credit="3" semester="Physics" added={this.handleShowC} />
                    </div>
                    <div className="subject-page-list">
                        <Subject className="Subject-list" name="Chemistry" credit="4" semester="Chemistry" added={this.handleShowD} />
                        <Subject className="Subject-list" name="E.T." credit="4" semester="Chemistry" added={this.handleShowE} />
                        <Subject className="Subject-list" name="English" credit="4" semester="Chemistry" added={this.handleShowF} />
                    </div>

                    {(this.state.addingA && this.state.addingB && this.state.addingC && this.state.addingD && this.state.addingE && this.state.addingF) ?null
                    : <h3 id="select-sub">Please Select Subject</h3>
                    }                 
                </div>


                {this.state.addingA ?
                    <div id="stud">
                    <h2 className="stud-h2">Participants Page</h2>
                    <div className="stud-list">
                        {
                            this.state.studentA.map((studentA, index) => {
                                return(
                                    <Students 
                                    name={studentA.name}
                                    roll={studentA.roll}
                                    id={studentA.id} 
                                    key={studentA.id} 
                                    delEvent={this.deletePartA.bind(this,index)}
                                    />
                                )
                            }
                            )
                        }
                    </div>               
                    <button className="stud-final-btn">Add Participants</button>
                </div> : null}
                
                {this.state.addingB ?
                    <div id="stud">
                    <h2 className="stud-h2">Participants Page</h2>
                    <div className="stud-list">
                        {
                            this.state.studentB.map((studentB, index) => {
                                return(
                                    <Students 
                                    name={studentB.name}
                                    roll={studentB.roll}
                                    id={studentB.id} 
                                    key={studentB.id} 
                                    delEvent={this.deletePartB.bind(this,index)}
                                    />
                                )
                            }
                            )
                        }
                    </div>               
                    <button className="stud-final-btn">Add Participants</button>
                </div> : null}

                {this.state.addingC ?
                    <div id="stud">
                    <h2 className="stud-h2">Participants Page</h2>
                    <div className="stud-list">
                        {
                            this.state.studentC.map((studentC, index) => {
                                return(
                                    <Students 
                                    name={studentC.name}
                                    roll={studentC.roll}
                                    id={studentC.id} 
                                    key={studentC.id} 
                                    delEvent={this.deletePartC.bind(this,index)}
                                    />
                                )
                            }
                            )
                        }
                    </div>               
                    <button className="stud-final-btn">Add Participants</button>
                </div> : null}

                {this.state.addingD ?
                    <div id="stud">
                    <h2 className="stud-h2">Participants Page</h2>
                    <div className="stud-list">
                        {
                            this.state.studentD.map((studentD, index) => {
                                return(
                                    <Students 
                                    name={studentD.name}
                                    roll={studentD.roll}
                                    id={studentD.id} 
                                    key={studentD.id} 
                                    delEvent={this.deletePartD.bind(this,index)}
                                    />
                                )
                            }
                            )
                        }
                    </div>               
                    <button className="stud-final-btn">Add Participants</button>
                </div> : null}

                {this.state.addingE ?
                    <div id="stud">
                    <h2 className="stud-h2">Participants Page</h2>
                    <div className="stud-list">
                        {
                            this.state.studentE.map((studentE, index) => {
                                return(
                                    <Students 
                                    name={studentE.name}
                                    roll={studentE.roll}
                                    id={studentE.id} 
                                    key={studentE.id} 
                                    delEvent={this.deletePartE.bind(this,index)}
                                    />
                                )
                            }
                            )
                        }
                    </div>               
                    <button className="stud-final-btn">Add Participants</button>
                </div> : null}

                {this.state.addingF ?
                    <div id="stud">
                    <h2 className="stud-h2">Participants Page</h2>
                    <div className="stud-list">
                        {
                            this.state.studentF.map((studentF, index) => {
                                return(
                                    <Students 
                                    name={studentF.name}
                                    roll={studentF.roll}
                                    id={studentF.id} 
                                    key={studentF.id} 
                                    delEvent={this.deletePartF.bind(this,index)}
                                    />
                                )
                            }
                            )
                        }
                    </div>               
                    <button className="stud-final-btn">Add Participants</button>
                </div> : null}


                <Footer />
            </Auxi>
        );
    }
}

export default TA;