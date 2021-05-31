import React, { Component } from 'react';
import './MonsterList.css';
import {MonsterCard} from "../monsterCard/MonsterCard";
export const MonsterList = (props) => {
    return (
        <div className="card-list">{
            props.monsters.map((monster) => {
                return <MonsterCard key={monster.id} monster={monster}/>
            })

        }</div>
    )
};