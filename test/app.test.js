 
 import chai from 'chai';
 import chaiHttp from 'chai-http';
 
 import app from '../app';
import cases from '../SERVER/Models/cases';


 const {expect} = chai;
 chai.should();
chai.use(chaiHttp);



describe("user authentication",()=>{
    it("User can create an account", (done) => {
        const email = "lebron@gmail.com";
        chai.request(app).post("/api/V1/auth/userSignup").send({
            id: 1,
            firstname: "james",
            lastname: "lebron",
            phone: "0789013204",
            email,
            password: "kingjames2019",}).end((err, res) => {

            res.should.have.status(201);
            expect(res.body.message).to.equals("user created succesfully");
        });
        
        done();
    });
    
    it("User can login", (done) => {
        chai.request(app).post("/api/V1/auth/userLogin").send({
            email: "lebron@gmail.com",
            password: "kingjames2019",
        }).end((err, res) => {
            res.should.have.status(200);
            expect(res.body.message).to.equals("logged in successfully");
            
        });
        done();
    });
    
    it("existing user", (done) => {
        chai.request(app).post("/api/V1/auth/userSignup")
            .send({
            email: "lebron@gmail.com"
            
        })
            .end((err, res) => {
               
                res.should.have.status(409);
                res.body.should.be.an('object');
                done();
        });
    });
});

describe("case records",()=>{
    it(">> User should create a case >>", (done) => {
        chai.request(app).post("/api/V1/case/newIncident").send({
            
            createdOn: new Date(),
            createdBy: '2',
            title : 'a man died',
            type : 'intervention',
            
            location: '23,45',
            description : ' a man died in front of police office',
            attachment : 'image'
        }).end((err, res) =>
             {

            res.should.have.status(200);
            res.body.should.be.an('object');
        });
        
        done();
    });

    it('>> Should get all the cases >>', (done) => {
        chai
          .request(app)
          .get('/api/V1/case/allIncident')
          .end((err, res) => {
            res.should.have.status(200);
            
          });
        done();
      });

      it('>> Should get a specific case >>', (done) => {
        chai
          .request(app)
          .get('/api/V1/case/specificIncident/'+cases.id)
          .end((err, res) => {
            chai.request(app)
            .get('/api/V1/case/specificIncident/'+cases.id)
            .end((error,res) =>{
                let del= cases.find(item =>  parseInt(item.id) != 1);
                
                res.should.have.status(201);
                res.body.message.should.be.equal('case retrieved successfully');
            });
            

          });
        done();
      });

    //   it('Should delete a specific CASE', (done) => {
     
    //     chai
    //       .request(app)
    //       .delete('/api/V1/case/deleteIncident/1', )
    //       .end((err, res) =>  {
    //             res.should.have.status(201);
    //             res.body.should.be.an('object');
              
    //         // console.log('>>>',delet.id);
    //         // res.should.have.status(201);
    //           });
    //           done();
              
              
              
    //         //res.body.should.be.an('object');


    //       });
       
      });

    

