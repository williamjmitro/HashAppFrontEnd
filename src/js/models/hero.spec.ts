import { Hero } from './hero';

describe('Hero', () => {
    it('has name', () => {
        let hero: Hero = {hasherId: 1, hashName: 'Super Cat'};
        expect(hero.hashName).toEqual('Super Cat');
    });
    it('has id', () => {
        let hero: Hero = {hasherId: 1, hashName: 'Super Cat'};
        expect(hero.hasherId).toEqual(1);
    });
});
