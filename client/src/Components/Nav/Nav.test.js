/*
import { NavLink } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Nav from './Nav';

configure({adapter: new Adapter()});

describe('<Nav />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Nav />)
    })

    it('Should be render three <NavLink/>.', () => {
        expect(wrapper.find(NavLink)).toHaveLength(3);
    });
    it('First NavLink should be have "Pokemon App" and turn to route "/pokemons".', () => {
        expect(wrapper.find(NavLink).at(0).prop('to')).toEqual('/pokemons');
        expect(wrapper.find(NavLink).at(0).text()).toEqual('Pokemon App');
    })
    it('Second NavLink should be have "Create a Pokemon" and turn to route "/pokemon/create".', () => {
        expect(wrapper.find(NavLink).at(1).prop('to')).toEqual('/pokemon/create');
        expect(wrapper.find(NavLink).at(1).text()).toEqual('Create a Pokemon');
    })
    it('Third NavLink should be have "Landing page" and turn to route "/landing".', () => {
        expect(wrapper.find(NavLink).at(2).prop('to')).toEqual('/landing');
        expect(wrapper.find(NavLink).at(2).text()).toEqual('Landing page');
    })
})
*/