import React from 'react'
import './home.css';
import Hello from '../../components/hello/hello';
import TextField from '../../components/textField/textField'

const Home = () => {
    return (
        <div>
            <Hello />
            <TextField />
        </div>
    )
}

export default Home