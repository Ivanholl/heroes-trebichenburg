import React, { useState } from 'react';
import { InputGroup, FormControl, Button} from 'react-bootstrap';
// import { useSelector } from 'react-redux';
import {HP,MP,DMG,DF} from '../icons';
import { Race } from '../../types';
import { useDispatch } from 'react-redux';

import * as Actions from '../../redux/actions'; 

type CharCardProps = {
    race: Race
}

const CharCard: React.FC<CharCardProps> = ({race}) => {
    const [name, setName] = useState('');
    const [error, setEror] = useState('');
    const dispatch = useDispatch();

    async function create() {
        let newHero = {
            race: race.name,
            name,
            df :race.df,
            hpMin: race.hp,
            hpMax: race.hp,
            mpMin: race.mp,
            mpMax: race.mp,
            dmMin: race.dmMin,
            dmMax: race.dmMax,
        }
        let res = await dispatch(Actions.createHero(newHero))
        debugger
        if(res.hero) {
            // history.push("/characterSelection");
        } else {
            setEror(res)
        }
    }

    return (        
        <div className="card">
            <h2>SELECT</h2>
            <div className={`wrapper ${race.name}`}>
                <div className="header">
                    <div className="date">
                        <span>stats</span>
                    </div>
                    <ul className="menu-content">
                        <li>
                            <HP />
                            <span>{race.hp}</span>
                        </li>
                        <li>
                            <MP />
                            <span>{race.mp}</span>
                        </li>
                        <li>
                            <DMG />
                            <span>{`${race.dmMin} - ${race.dmMax}`}</span>
                        </li>
                        <li>
                            <DF />
                            <span>{race.df}</span>
                        </li>
                    </ul>
                </div>
                <div className="create-form">
                    <InputGroup className="mb-3">
                        <FormControl placeholder="Your name" onChange={e => setName(e.target.value)}/>
                        <InputGroup.Append>
                            <Button variant="dark" onClick={create}>Create</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
                <div className="data">
                    <div className="content">
                        {/* <span className="author">John Doe</span> */}
                        <h1 className="title">{race.name}</h1>                        
                        <p className="text">{race.info}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharCard;
