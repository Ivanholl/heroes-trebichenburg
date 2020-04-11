import React from 'react';
// import {Navbar, Nav} from 'react-bootstrap';
// import { useSelector } from 'react-redux';

export default function CharCard(args) {
    const race = args.race;

    return (
    <div className="card">
        <div className={`wrapper ${race.name}`}>
            <div className="header">
                <div className="date">
                    <span>Stats</span>
                </div>
                <ul className="menu-content">
                    <li className="fa fa-bookmark-o">
                        hp
                        <span>{race.hp}</span>
                    </li>
                    <li className="fa fa-heart-o">
                        mp
                        <span>{race.mp}</span>
                    </li>
                    <li className="fa fa-comment-o">
                        dmg
                        <span>{race.minDm}-{race.maxDm}</span>
                    </li>
                    <li className="fa fa-comment-o">
                        df
                        <span>{race.df}</span>
                    </li>
                </ul>
            </div>
            <div className="data">
                <div className="content">
                    <span className="author">Jane Doe</span>
                    <h1 className="title">
                        {race.name}
                    </h1>
                    <p className="text">{race.info}</p>
                </div>
            </div>
        </div>
    </div>
    )
}
