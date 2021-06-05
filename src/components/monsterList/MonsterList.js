import React, { Component } from 'react';
import './MonsterList.css';
import {MonsterCard} from "../monsterCard/MonsterCard";
export const MonsterList = (props) => {
    const monsters = props.monsters.filter(monster=> monster.name.toLowerCase().includes(props.searchValue))
    return (
        
        <div className="card-list">{
            monsters.map((monster) => {
                return <MonsterCard key={monster.id} monster={monster}/>
            })

        }</div>
    )
};