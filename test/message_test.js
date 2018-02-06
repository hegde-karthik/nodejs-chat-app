const expect = require('expect');
const {generateMessage} = require('../server/utils/message');

describe('generateMessage',()=>{
  it('should generate correct message object',(done)=>{
    let msg = {
      from:'karthik',
      text:'hello'
    };
    let res = generateMessage(msg.from,msg.text);
    expect(res.from).toBe(msg.from);
    expect(res.text).toBe(msg.text);
    expect(res.createdAt).toBeTruthy();
    done();
  })
})
