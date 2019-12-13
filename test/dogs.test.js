const request = require('supertest')
const expect = require('chai').expect
const app = require('../app')
const Dog = require('../models/dog')
const User = require('../models/user')


let user = {
  _id: "1debbfb594513f69b4cf17b0",
  name: "Sarah",
  age: "20",
  email: "sarah@gmail.com",
  password: "sarah1999"
}
let dog1 = {
    _id: "1debc27294513f69b4cf17b8",
    name: "Chance",
    user: user
}

describe('Dogs', () => {
  beforeEach(async function() {
    let u = new User(user)
    await u.save()
  });
  afterEach(async function() {
    await User.deleteOne({_id: user._id})
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
            .get(`/api/${user._id}/dogs`)
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
            .post(`/api/${user._id}/dogs`)
            .send(dog1)
          expect(res.statusCode).equals(201)
          expect(res.body).to.have.property('data').to.have.property('message','Created ok')
          expect(res.body).to.have.property('data').to.have.property('id')
          const id = res.body.data.id
          res = await request(app)
            .get(`/api/${user._id}/dogs/${id}`)
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