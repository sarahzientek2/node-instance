const request = require('supertest')
const expect = require('chai').expect
const app = require('../app')
const Dog = require('../models/dog')
const User = require('../models/user')


let user1 = {
  _id: "1debbfea94513f69b4cf17b1",
  name: "Sarah",
  age: "20",
  email: "sarah@gmail.com",
  password: "sarah1999"
}
let dog1 = {
    _id: "1debbfea94513f69b4cf17b7",
    name: "Chance",
    user: user1
}

describe('Dogs', () => {
  beforeEach(async function() {
    let u1 = new User(user1)
    await u1.save()
  });
  afterEach(async function() {
    await User.deleteOne({_id: user1._id})
	});

  describe('Getting dogs', () => {
    beforeEach(async function() {
      let d1 = new Dog(dog1)
      await d1.save()
    });
    afterEach(async function() {
      await Dog.deleteOne({_id: dog1._id})
    });

    it('should return all dogs', async () => {
        const res = await request(app)
            .get(`/api/${user1._id}/dogs`)
        expect(res.statusCode).equals(200)
        expect(res.body).to.have.nested.property('data[0].name', 'Chance')
    })
  })

  describe('Creating dogs', () => {
    afterEach(async function() {
      await Dog.deleteOne({_id: dog1._id})
    });

      it('should create correctly and return id and message', async () => {
          var res = await request(app)
            .post(`/api/${user1._id}/dogs`)
            .send(dog1)
          expect(res.statusCode).equals(201)
          expect(res.body).to.have.property('data').to.have.property('message','Created ok')
          expect(res.body).to.have.property('data').to.have.property('id')
          const id = res.body.data.id
          res = await request(app)
            .get(`/api/${user1._id}/dogs/${id}`)
          console.log(JSON.stringify(res.body))
          expect(res.statusCode).equals(200)
          expect(res.body).to.have.nested.property('data.name', 'Chance')
      })
  })
})

exports.init = async function() {
    try {
        await mongoose.connect(env.db, {useNewUrlParser: true, useUnifiedTopology: true});
    } catch (error) {
        console.log(error)
    }
}