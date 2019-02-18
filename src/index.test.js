import {expect} from 'chai';
import jsdom from 'jsdom';


describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});

const { JSDOM } = jsdom;
describe('index.html', () => { // eslint-disable-line
    it('should say h1 that says Users' , (done) => { // eslint-disable-line
      const options = { }
      JSDOM.fromFile('./src/index.html', options).then(dom => {
        const h1 = dom.window.document.getElementsByTagName('h1')[0]
        expect(h1.innerHTML).to.equal("Users")
        done();
      }).catch(done)
    })
})
