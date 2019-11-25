let request = require('supertest')
let app = require('../app')
let expect = require('chai').expect

describe('Getting courses', () => {
    it('should return the name and ids of all courses', async () => {
        const res = await request(app)
            .get('/api/courses')
        expect(res.statusCode).equals(200)
        expect(res.body).to.have.nested.property('data[0].name','Web Applications')
        expect(res.body).to.have.nested.property('data[1].name','Communication Thoery & Research Methods')
        expect(res.body).to.have.nested.property('data[2].name','Languages & Data Structures')
        expect(res.body).to.have.nested.property('data[3].name','Human-Computer Interaction')
        expect(res.body).to.have.nested.property('data[4].name','Calculus 1')  
    })
    it('should return the name and id of a certain courses', async () => {
        const res = await request(app)
            .get('/api/courses/1')
        expect(res.statusCode).equals(200)
        expect(res.body).to.have.nested.property('data[0].name','Web Applications')
    })
})

describe('Creating courses', () => {
    it('should create correctly', async () => {
        let newCourse = {name: "Printer"}
        var res = await request(app)
        .post('/api/courses')
        .send(newCourse)
        expect(res.statusCode).equals(201)
        expect(res.body).to.have.property('data').to.have.property('message','Created ok')
        expect(res.body).to.have.property('data').to.have.property('id')
        const id = res.body.data.id
        res = await request(app)
        .get(`/api/courses/${id}`)
        expect(res.statusCode).equals(200)
        expect(res.body).to.have.nested.property('data.name','Web Applications')
        })
})