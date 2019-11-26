let request = require('supertest')
let app = require('../app')
let expect = require('chai').expect

describe('Getting users', () => {
    it('should return the name and ids of all users', async () => {
        const res = await request(app)
            .get('/api/users')
        expect(res.statusCode).equals(200)
        expect(res.body).to.have.nested.property('data[0].name','Sarah')
        expect(res.body).to.have.nested.property('data[1].name','Chance')
        expect(res.body).to.have.nested.property('data[2].name','Anuel')
        expect(res.body).to.have.nested.property('data[3].name','Benito')
    })
    it('should return the name and id of a certain user', async () => {
        const res = await request(app)
            .get('/api/users/1')
        expect(res.statusCode).equals(200)
        expect(res.body).to.have.nested.property('data[0].name','Sarah')
    })
})
describe('Creating users', () => {
    it('should create correctly', async () => {
        let newUser = {
            name: "Nicky Jam"
    }
    var res = await request(app)
    .post('/api/users')
    .send(newUser)
    expect(res.statusCode).equals(201)
    expect(res.body).to.have.property('data').
    to.have.property('message','Created ok')
    expect(res.body).to.have.property('data')
    .to.have.property('id')
const id = res.body.data.id
res = await request(app)
.get(`/api/users/${id}`)
expect(res.statusCode).equals(200)
expect(res.body).
to.have.nested.property('data.name','Nicky Jam')
        })
})