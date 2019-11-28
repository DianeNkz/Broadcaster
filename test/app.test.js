 
 import chai from 'chai';
 import chaiHttp from 'chai-http';
 import request from 'request';
 import app from '../app';
import cases from '../SERVER/Models/cases';


 const {expect} = chai;
 chai.should();
chai.use(chaiHttp);

// describe("server runs",()=>{
//     it("create a user",done =>{
//         chai.request(app)
//              .get("/")
//              .end((err,res) =>{
//                  //expect(res).to.have.status(409);
//                  expect(res.status).to.equals(200);
//                  //expect(res.body.message).to.equals("User already exists");
//                  done();
//              })
//     })
// });

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
            //console.log(res.body);
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
            console.log(res.body);
            res.should.have.status(200);
            expect(res.body.message).to.equals("logged in successfully");
            
        });
        done();
    });
    
    // it("existing user", (done) => {
    //     chai.request(app).post("/api/V1/auth/userLogin")
    //         .send({
    //         email: "lebron@gmail.com",
    //         password: "kingjames2019",
    //     })
    //         .end((err, res) => {
    //             const userfind= userSchema.find(item => item.email === "lebron@gmail.com");
    //     });
    //     if (userfind) expect(userfind).to.be.equal("lebron@gmail.com");
    //     res.should.have.status(409);
    //     res.body.message.should.be('User already exists');
    //     done();
    // });
});

describe("case records",()=>{
    // it("User should create a case", (done) => {
    //     chai.request(app).post("/api/V1/case/newIncident").send({
    //         id: 1,
    //         createdOn:'25/12/2019',
    //         createdBy: '2',
    //         title : 'a man died',
    //         type : 'intervention',
    //         status: 'under-investigation',
    //         location: '23,45',
    //         description : ' a man died in front of police office',
    //         attachment : 'image',}).end((err, res) =>
    //          {
    //         res.should.have.status(200);
    //         res.body.should.be.an('object');
    //     });
        
    //     done();
    // });

    it('Should get all the cases', (done) => {
        chai
          .request(app)
          .get('/api/V1/case/allIncident')
          .end((err, res) => {
            res.should.have.status(200);
            
          });
        done();
      });

    //   it('Should get a specific case', (done) => {
    //     chai
    //       .request(app)
    //       .get('/api/V1/case/specificIncident/'+cases.id)
    //       .end((err, res) => {
    //         chai.request(app)
    //         .delete('/api/V1/case/specificIncident/'+cases.id)
    //         .end((error,res) =>{
    //             let del= cases.find(item =>  parseInt(item.id) != 1);
    //             let index =cases.indexOf(del);
    //             index.expect.to.be.equal.to.index()
    //             res.should.have.status(200);
    //             res.body.should.be.an('object');
    //         });
            

    //       });
    //     done();
    //   });

    //   it('Should delete a specific case', (done) => {
    //     let del= cases.find(item =>  parseInt(item.id) != 1);
    //     let index =cases.indexOf(del);
    //     chai
    //       .request(app)
    //       .delete('/api/V1/case/deleteIncident/'+index)
    //       .end((err, res) => {
            
             
             
    //         res.should.have.status(200);
    //         //res.body.should.be.an('object');

    //       });
    //     done();
    //   });

    });

