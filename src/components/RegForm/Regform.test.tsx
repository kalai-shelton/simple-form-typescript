import {RegForm} from './RegForm'
import * as ReactDOM from 'react-dom'
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

describe ('Login component tests',()=>{
    let container: HTMLDivElement

    beforeEach(()=>{
        container=document.createElement('div')
        document.body.appendChild(container);
        ReactDOM.render(<RegForm/>,container)
    })

    afterEach(() =>{
        document.body.removeChild(container);
        container.remove();
    })

    test('renders initial document correctly',()=>{
        const inputs = container.querySelectorAll('input');
        expect(inputs).toHaveLength(4);
        expect(inputs[0].id).toBe('username');
        expect(inputs[1].id).toBe('email');
        expect(inputs[2].id).toBe('address');
        expect(inputs[3].id).toBe('mobile');
    });

    test('passes credentials correctly',()=>{
        const inputs = container.querySelectorAll('input');
        const nameInput = inputs[0];
        const emailInput = inputs[1];
        const addInput = inputs[2];
        // const signin =inputs[4]
        const signin = screen.getByLabelText('Sign In');
        fireEvent.click(signin);
    })

})