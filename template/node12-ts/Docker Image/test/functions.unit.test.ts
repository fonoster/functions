import * as chai from 'chai';
import chaiHttp = require('chai-http');
chai.use(chaiHttp);
const app = require('../index');

describe("@fonos/functions", () => {
  
    before(async () => {

    });
  
    it('should return an ok', async (done) => {
         chai.request(app).get('/')
        .end((err, res) => {
              res.should.have.status(200);
              done();

        })

    });
  
  });