import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first Test', ()=>{
    it('should pass', ()=>{
        expect (true).to.equal(true);
    })
});

describe('index.html', ()=>{
    it('should habe h1 that says Users',  ()=>{
        const index = fs.readFileSync('./src/index.html', "utf-8");
        jsdom.env(index, function(err, window) {
            const h1 = window.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Users");
            // done();
            window.close();
        })
    })
})