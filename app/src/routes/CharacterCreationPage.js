import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {Button} from 'react-bootstrap';
// import {useHistory} from 'react-router-dom';
import CharCard from '../components/CharacterCreate/CharCard';
import * as UserActions from '../redux/actions';

export default function CharacterCreationPage() {

    return (
    <div id="CharacterCreation">
        <h2>Create New Character</h2>

        <div className="row">
            {Allraces.map((race, index) =>
                <CharCard key={index} race={race}/>
            )}
        </div>
    </div>
    );
};

const Allraces = [{
    name: 'dwarf',
    hp: 15,
    mp: 3,
    minDm: 2,
    maxDm: 3,
    df: 4,
    info: "One introvert race, they don't have any interest in battle only in gold mines. Their adventurous spirit and human likeness makes them defessive."
},{
    name: 'elf',
    hp: 13,
    mp: 6,
    minDm: 2,
    maxDm: 3,
    df: 2,
    info:  "The oldest of all races, they have no interest in wars if no one bothers their forests. They rely on magic in battle."
},{
    name: 'human',
    hp: 15,
    mp:5,
    minDm: 3,
    maxDm: 4,
    df: 2,
    info: "The most adaptive race of all and maybe the youngest of all races makes them best for beginners."
},{
    name: 'orc',
    hp: 10,
    mp: 3,
    minDm: 4,
    maxDm: 5,
    df: 3,
    info: "As young race as the humans, they are forged in battle with one another and other races, relying on their brutal strength in battles."
},{
    name: 'undead',
    hp: 16,
    mp: 4,
    minDm: 2,
    maxDm: 3,
    df: 2,
    info: "As the youngest race of them all they struggle to find their place in the world. After a massive earthquake that killed thousands, a great magic emerged and brought dead bodies to life"
}]
