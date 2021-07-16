import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addPokemon, getTypes} from '../../actions/index';
//import styles

export function validate(input) {
    let errors = {};
    for(let key in input) {
        if(key !== 'name' && key !== 'img') {
            if(!input[key]) {
                errors[key] = 'is required';
            } else if(isNaN(input[key])) {
                errors[key] = 'must be a number';
            }
        } else {
            if(!input[key] && key !== 'img') {
                errors[key] = 'name is required'
            } /*else if(/\d/.test(input[key])) { //ver como hacer para que me valide el link
                errors[key] = 'only letters';
            }*/
        }
    }
    return errors;
};

export default function CreatePokemon() {
    const [error, setError] = useState({});
    const [inputs, setInputs] = useState({
        name:'',
        hp:'',
        attack:'',
        defense:'',
        speed:'',
        height:'',
        weight:'',
        img: ''
    });

    const [types, setTypes] = useState([]);
    const typesDB = useSelector(store => store.types);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTypes());
    },[])

    function handleChecked(e) {
        if(e.target.checked) {
            setTypes([...types, e.target.value]);
            //console.log(types)
        } else {
            //console.log('ready');
            let pos = types.indexOf(e.target.id);
            types.splice(pos, 1);
        }
    }

    function handleInputChange(e) {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
        
        setError(validate({
            ...inputs,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        let error = validate(inputs);
        if(!Object.keys(error).length && types.length) {
            alert('Pokemon created!');
            dispatch(addPokemon({...inputs, types: types.map(n => n)}))
            setInputs({
                name:'',
                hp:'',
                attack:'',
                defense:'',
                speed:'',
                height:'',
                weight:'',
                img:''
            });
            setTypes([]);
            e.target.reset();
        } else {
            alert('Please, complete the form')
        }
    }

    return (
        <div className='home'>
            <div className='form'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='stat'>
                        <label>Nombre: </label>
                        <input
                            name='name'
                            type='text'
                            value={inputs.name}
                            placeholder='name'
                            onChange={handleInputChange}
                        />
                        {error.name && <span>{error.name}</span>}
                    </div>

                    <div className='stat'>
                        <label>Vida: </label>
                        <input
                            name='hp'
                            type='text'
                            value={inputs.hp}
                            placeholder='hp'
                            onChange={handleInputChange}
                        />
                        {error.hp && <span>{error.hp}</span>}
                    </div >

                    <div className='stat'>
                        <label>Ataque: </label>
                        <input
                            name='attack'
                            type='text'
                            value={inputs.attack}
                            placeholder='attack'
                            onChange={handleInputChange}
                        />
                        {error.attack && <span>{error.attack}</span>}
                    </div>

                    <div className='stat'>
                        <label>Defensa: </label>
                        <input
                            name='defense'
                            type='text'
                            value={inputs.defense}
                            placeholder='defense'
                            onChange={handleInputChange}
                        />
                        {error.defense && <span>{error.defense}</span>}
                    </div >

                    <div className='stat'>
                        <label>Velocidad: </label>
                        <input
                            name='speed'
                            type='text'
                            value={inputs.speed}
                            placeholder='speed'
                            onChange={handleInputChange}
                        />
                        {error.speed && <span>{error.speed}</span>}
                    </div>

                    <div className='stat'>
                        <label>Altura: </label>
                        <input
                            name='height'
                            type='text'
                            value={inputs.height}
                            placeholder='height'
                            onChange={handleInputChange}
                        />
                        {error.height && <span>{error.height}</span>}
                    </div>

                    <div className='stat'>
                        <label>Peso: </label>
                        <input
                            name='weight'
                            type='text'
                            value={inputs.weight}
                            placeholder='weight'
                            onChange={handleInputChange}
                        />
                        {error.weight && <span>{error.weight}</span>}
                    </div>

                    <div className='stat'>
                        <label>Image Link: </label>
                        <input
                            name='img'
                            type='text'
                            value={inputs.img}
                            placeholder='img link...'
                            onChange={handleInputChange}
                        />
                        {error.img && <span>{error.img}</span>}
                    </div>

                    <h2>Tipos</h2>
                    <div className='input-types'>
                        {typesDB && typesDB.map(t => (
                            <div key={`${t.id}`} className='type'>
                                <input
                                    key={`${t.id}`}
                                    type='checkbox'
                                    name={`tipos`}
                                    value={`${t.name}`}
                                    id={`${t.id}`}
                                    onChange={handleChecked}
                                />
                                <label htmlFor={`${t.name}`}>{`${t.name}`}</label>
                            </div>
                        ))}
                    </div>
                    <input className='create-btn' type='submit' value='Crear' />
                </form>

            </div>

        </div>
    );
};