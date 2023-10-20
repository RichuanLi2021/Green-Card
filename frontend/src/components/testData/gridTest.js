// components/gridTest.js

import React from 'react';
import './gridTest.css';

function GridTest() {
    return (
        <div className="gridTest-container">

            {/* Left div */}
            <div className="gridTest-left">
                <p className="gridTest-text-left-title">Team</p>
                <p className="gridTest-text-left">Away</p>
                <p className="gridTest-text-left">Away</p>
                <p className="gridTest-text-left">Away</p>
                <p className="gridTest-text-left">Away</p>
            </div>

            {/* Right div */}
            <div className="gridTest-right">
                <div className="gridTest-right-div">
                    <p className="gridTest-text-title">W</p>
                    <p className="gridTest-text-right">2</p>
                    <p className="gridTest-text-right">3</p>
                    <p className="gridTest-text-right">4</p>
                    <p className="gridTest-text-right">5</p>
                </div>
                <div className="gridTest-right-div">
                    <p className="gridTest-text-title">L</p>
                    <p className="gridTest-text-right">2</p>
                    <p className="gridTest-text-right">3</p>
                    <p className="gridTest-text-right">4</p>
                    <p className="gridTest-text-right">5</p>
                </div>
                <div className="gridTest-right-div">
                    <p className="gridTest-text-title">T</p>
                    <p className="gridTest-text-right">2</p>
                    <p className="gridTest-text-right">3</p>
                    <p className="gridTest-text-right">4</p>
                    <p className="gridTest-text-right">5</p>
                </div>
                <div className="gridTest-right-div">
                    <p className="gridTest-text-title">Pct</p>
                    <p className="gridTest-text-right">2</p>
                    <p className="gridTest-text-right">3</p>
                    <p className="gridTest-text-right">4</p>
                    <p className="gridTest-text-right">5</p>
                </div>
                <div className="gridTest-right-div">
                    <p className="gridTest-text-title">PF</p>
                    <p className="gridTest-text-right">2</p>
                    <p className="gridTest-text-right">3</p>
                    <p className="gridTest-text-right">4</p>
                    <p className="gridTest-text-right">5</p>
                </div>
                <div className="gridTest-right-div">
                    <p className="gridTest-text-title">PA</p>
                    <p className="gridTest-text-right">2</p>
                    <p className="gridTest-text-right">3</p>
                    <p className="gridTest-text-right">4</p>
                    <p className="gridTest-text-right">5</p>
                </div>
                <div className="gridTest-right-div">
                    <p className="gridTest-text-title">Home</p>
                    <p className="gridTest-text-right">2</p>
                    <p className="gridTest-text-right">3</p>
                    <p className="gridTest-text-right">4</p>
                    <p className="gridTest-text-right">5</p>
                </div>
                <div className="gridTest-right-div">
                    <p className="gridTest-text-title">Away</p>
                    <p className="gridTest-text-right">2</p>
                    <p className="gridTest-text-right">3</p>
                    <p className="gridTest-text-right">4</p>
                    <p className="gridTest-text-right">5</p>
                </div>
                <div className="gridTest-right-div">
                    <p className="gridTest-text-title">Strk</p>
                    <p className="gridTest-text-right">2</p>
                    <p className="gridTest-text-right">3</p>
                    <p className="gridTest-text-right">4</p>
                    <p className="gridTest-text-right">5</p>
                </div>
                
            </div>
        </div>
    );
}

export default GridTest;
