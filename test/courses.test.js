const request = require('supertest')
const expect = require('chai').expect
const app = require('../app')
const Course = require('../models/course')

let course1 = {
  name: "Web Applications",
  professor: "Tomer Libal"
}
let course2 = {
  name: "Communication Theory & Research Methods",
  professor: "Youna Kim"
}
let course3 = {
  name: "Languages & Data Structures",
  professor: "Georgi Stojanov"
}
let course4 = {
  name: "Calculus 1",
  professor: "Taylor Coffman"
}
let course5 = {
  name: "Human-Computer Interaction",
  professor: "Claudia Roda"
}
let course6 = {
  name: "Video Internship",
  professor: "none"
}


describe('Courses', () => {
  beforeEach(async function() {
    let c = new Course(course1)
    await c.save()
  });
  afterEach(async function() {
    await Course.deleteOne({_id: course1._id})
	});

  describe('Getting courses', () => {
    beforeEach(async function() {
      let c1 = new Course(course1)
      let c2 = new Course(course2)
      let c3 = new Course(course3)
      let c4 = new Course(course4)
      let c5 = new Course(course5)
      let c6 = new Course(course6)
      await c1.save()
      await c2.save()
      await c3.save()
      await c4.save()
      await c5.save()
      await c6.save()
    });
    afterEach(async function() {
      await Course.deleteOne({_id: course1._id})
      await Course.deleteOne({_id: course2._id})
      await Course.deleteOne({_id: course3._id})
      await Course.deleteOne({_id: course4._id})
      await Course.deleteOne({_id: course5._id})
      await Course.deleteOne({_id: course6._id})
    });

    it('should return all courses', async () => {
        const res = await request(app)
            .get(`/api/${course1._id}/courses`)
        expect(res.statusCode).equals(200)
        expect(res.body).to.have.nested.property('data[0].name', 'Web Applications')
        expect(res.body).to.have.nested.property('data[1].name', 'Communication Theory & Research Methods')
        expect(res.body).to.have.nested.property('data[2].name', 'Languages & Data Structures')
        expect(res.body).to.have.nested.property('data[3].name', 'Calculus 1')
        expect(res.body).to.have.nested.property('data[4].name', 'Human-Computer Interaction')
        expect(res.body).to.have.nested.property('data[5].name', 'Video Internship')
    })
  })

  describe('Creating courses', () => {
    afterEach(async function() {
      await Course.deleteOne({_id: course1._id})
    });

      it('should create correctly and return id and message', async () => {
          var res = await request(app)
            .post(`/api/${course1._id}/courses`)
            .send(course1)
          expect(res.statusCode).equals(201)
          expect(res.body).to.have.property('data').to.have.property('message','Created ok')
          expect(res.body).to.have.property('data').to.have.property('id')
          const id = res.body.data.id
          res = await request(app)
            .get(`/api/${course1._id}/courses/${id}`)
          console.log(JSON.stringify(res.body))
          expect(res.statusCode).equals(200)
          expect(res.body).to.have.nested.property('data.name', 'Web Applications')
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
