import React, { Component } from "react";
import './Navigation.css';

export default class Navigation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list: this.props.locations
        }
        console.log(this.state.list)
    }
    // Used for rendering
    getClasses(ctx, index) {
        let classes = `material-icons ${ctx}`;
        if (ctx === 'dots') {
            if (this.isLast(index)) {
                classes += ' hidden';
            }
        } else {
            classes += this.isLast(index) ? ' small' : ' x-small';
            if (index === 0) {
                classes += ' first';
            }
        }
        return classes;
    }

    // Used for rendering
    isLast(index) {
        return index === this.props.locations.length - 1;
    }

    moveUp=(index)=>{
        let sampleList = this.state.list
        let d1 = sampleList[index]
        let d2 = sampleList[index - 1]
        sampleList[index] = d2
        sampleList[index - 1] = d1
        this.setState({
            list: sampleList
        })
    }

    moveDown=(index)=>{
         let sampleList = this.state.list
        let d1 = sampleList[index]
        let d2 = sampleList[index + 1]
        sampleList[index] = d2
        sampleList[index + 1] = d1
        this.setState({
            list: sampleList
        })
    }
    

    render() {
     
        return (
            <div className="layout-row align-items-center justify-content-center navigation-screen">
                <div className="card layout-row flat map-card">
                    <section className="card pb-16 pr-16 flex-auto layout-column justify-content-center">
                        <ul className="pl-0" data-testid="location-list">
                            {/* Use this li for rendering each location item as it contains all the data-testid attributes required for the tests to pass */}

                            {this.state.list.map((location,index) => {
                                return(
                                <li key={'row' + index} data-testid={'location-' + index}
                                    className="layout-row justify-content-between align-items-center mr-8 pl-40 relative">
                                    <div className="layout-column justify-content-start align-items-center handle">
                                        <i className={this.getClasses('marker', index)}>{this.isLast(index) ? 'room' : 'radio_button_checked'}</i>
                                        <i className={this.getClasses('dots', index)}>more_vert</i>
                                    </div>
                                    <div className="location-name">
                                        <p className="caption text-start mb-4" data-testid="location">{location}</p>
                                    </div>
                                    <div>
                                        {index===0?null:
                                        <button className="icon-only small mx-0" data-testid="up-button" onClick={()=>{this.moveUp(index)}}>
                                            <i className="material-icons">arrow_upward</i>
                                        </button>
                            }
                                {this.isLast(index)?null:
                                        <button className="icon-only small mx-0" data-testid="down-button" onClick={()=>{this.moveDown(index)}}>
                                            <i className="material-icons">arrow_downward</i>
                                        </button>
                            }
                                    </div>
                                </li>
                                )
                            })}
                            {/* <li key={'row' + index} data-testid={'location-' + index}
                                   className="layout-row justify-content-between align-items-center mr-8 pl-40 relative">
                                   <div className="layout-column justify-content-start align-items-center handle">
                                       <i className={this.getClasses('marker', index)}>{this.isLast(index) ? 'room' : 'radio_button_checked'}</i>
                                       <i className={this.getClasses('dots', index)}>more_vert</i>
                                   </div>
                                   <div className="location-name">
                                       <p className="caption text-start mb-4" data-testid="location">{location}</p>
                                   </div>
                                   <div>
                                       <button className="icon-only small mx-0" data-testid="up-button">
                                           <i className="material-icons">arrow_upward</i>
                                       </button>
                                       <button className="icon-only small mx-0" data-testid="down-button">
                                           <i className="material-icons">arrow_downward</i>
                                       </button>
                                   </div>
                                </li> */}
                        </ul>
                    </section>
                    <section className="flex-auto">
                        <img src="images/map.svg" className="fill" alt="map" />
                    </section>
                </div>

            </div>
        );
    }
}
