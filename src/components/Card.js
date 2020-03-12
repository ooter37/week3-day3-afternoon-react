import React, { Component } from "react";
import './Card.css';

function Card(props) {
        return (
            
            <div className='text-container'>
                <div className='num'><b>{props.person.id}/25</b></div>
                <div className='name'><b>{props.person.name.first} {props.person.name.last}</b></div>
                <div className='from'><b>From:</b> {props.person.city}, {props.person.country}</div>
                <div className='job'><b>Job Title:</b> {props.person.title}</div>
                <div className='employer'><b>Employer:</b> {props.person.employer}</div>
                <div className='fav-mov'><b>Favorite Movies</b></div>
                <div className='mov-1'>1. {props.person.favoriteMovies[0]}</div>
                <div className='mov-2'>2. {props.person.favoriteMovies[1]}</div>
                <div className='mov-3'>3. {props.person.favoriteMovies[2]}</div>
            </div>
        )
    }

export default Card