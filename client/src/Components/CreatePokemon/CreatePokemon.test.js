import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CreatePokemon, {validate} from './CreatePokemon';

configure({adapter: new Adapter()});

describe('<CreatePokemon /> Mounted', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<CreatePokemon />);
    });
    it('El form debe tener un label que diga: "Name: "', () => {
        const { container } = render(<CreatePokemon />)
        const element = container.querySelectorAll('label')[0]
        expect(element.innerHTML).toBe('Name: ');
    });
  
    it('El form debe tener un label que diga: "Health: "', () => {
      const { container } = render(<CreatePokemon />)
      const element = container.querySelectorAll('label')[1]
      expect(element.innerHTML).toBe('Health: ');
    });
  
    it('El form debe tener un input con name "name" y type "text"', () => {
      const { container } = render(<CreatePokemon />)
      const element = container.querySelectorAll('input')[0]
      expect(element.type).toBe('text');
      expect(element.name).toBe('name');
    });
  
    it('El form debe tener un input con name "hp" y type "text"', () => {
      const { container } = render(<CreatePokemon />)
      const element = container.querySelectorAll('input')[1]
      expect(element.type).toBe('text');
      expect(element.name).toBe('hp');
    });
});