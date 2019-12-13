const request = require('supertest')
const expect = require('chai').expect
const app = require('../app')
const User = require('../models/user')

let user1 = {
  _id: "1debbfb594513f69b4cf17b0",
  name: "Sarah",
  age: "20",
  email: "sarah@gmail.com",
  password: "sarah1999"
}
let user2 = {
  _id: "1debbfdb94513f69b4cf17b2",
  name: "Anuel AA",
  age: "27",
  email: "anuelaa@gmail.com",
  password: "realhastalamuerte"
  }

let user3 = {
  _id: "1debc01994513f69b4cf17b4",
  name: "Nicky Jam",
  age: "38",
  email: "nickyj@gmail.com",
  password: "elganador"

}

let user4 = {
  _id: "1debbfc694513f69b4cf17b1",
  name: "Chance",
  age: "13",
  email: "chance@gmail.com",
  password: "chancepuppyzientek"
}

let user5 = {
  _id: "1debbfea94513f69b4cf17b3",
  name: "Benito",
  age: "25",
  email: "benito@gmail.com",
  password: "badbunny"
}



describe('Users', () => {
  beforeEach(async function() {
    let u1 = new User(user1)
    let u2 = new User(user2)
    let u3 = new User(user3)
    let u4 = new User(user4)
    let u5 = new User(user5)
    await u1.save()
    await u2.save()
    await u3.save()
    await u4.save()
    await u5.save()

  });
  afterEach(async function() {
    await User.deleteOne({_id: user1._id})
    await User.deleteOne({_id: user2._id})
    await User.deleteOne({_id: user3._id})
    await User.deleteOne({_id: user4._id})
    await User.deleteOne({_id: user5._id})
	});

  describe('Getting users', () => {
    beforeEach(async function() {
      let u1 = new User(user1)
      let u2 = new User(user2)
      let u3 = new User(user3)
      let u4 = new User(user4)
      let u5 = new User(user5)
      await u1.save()
      await u2.save()
      await u3.save()
      await u4.save()
      await u5.save()
    });
    afterEach(async function() {
      await User.deleteOne({_id: user1._id})
      await User.deleteOne({_id: user2._id})
      await User.deleteOne({_id: user3._id})
      await User.deleteOne({_id: user4._id})
      await User.deleteOne({_id: user4._id})
    });

    it('should return all users', async () => {
        const res = await request(app)
            .get(`/api/${user._id}/users`)
        expect(res.statusCode).equals(200)
        expect(res.body).to.have.nested.property('data[0].name', 'Sarah')
        expect(res.body).to.have.nested.property('data[1].name', 'Anuel AA')
        expect(res.body).to.have.nested.property('data[2].name', 'Nicky Jam')
        expect(res.body).to.have.nested.property('data[3].name', 'Chance')
        expect(res.body).to.have.nested.property('data[3].name', 'Benito')
    })
  })

  describe('Creating users', () => {
    afterEach(async function() {
      await User.deleteOne({_id: user1._id})
      await User.deleteOne({_id: user2._id})
      await User.deleteOne({_id: user3._id})
      await User.deleteOne({_id: user4._id})
      await User.deleteOne({_id: user5._id})
    });

      it('should create correctly and return id and message', async () => {
          var res = await request(app)
            .post(`/api/${user1._id}/users`)
            .send(user1)
          expect(res.statusCode).equals(404)
          expect(res.body).to.have.property('data').to.have.property('message','Created ok')
          expect(res.body).to.have.property('data').to.have.property('id')
          const id = res.body.data.id
          res = await request(app)
            .get(`/api/${user._id}/users/${id}`)
          console.log(JSON.stringify(res.body))
          expect(res.statusCode).equals(200)
          expect(res.body).to.have.nested.property('data[0].name', 'Sarah')
        expect(res.body).to.have.nested.property('data[1].name', 'Anuel AA')
        expect(res.body).to.have.nested.property('data[2].name', 'Nicky Jam')
        expect(res.body).to.have.nested.property('data[3].name', 'Chance')
        expect(res.body).to.have.nested.property('data[3].name', 'Benito')
          
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