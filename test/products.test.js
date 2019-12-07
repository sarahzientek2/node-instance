const request = require('supertest')
const expect = require('chai').expect
const app = require('../app')
const Product = require('../models/product')

let product1 = {
  _id: '5debc0cd94513f69b4cf17b5',
  name: 'Printer'
}
let product2 = {
  _id: '5debc0d894513f69b4cf17b6',
  name: 'Laptop'
}
let product3 = {
  _id: '5debc0dd94513f69b4cf17b7',
  name: 'Eraser'
}


describe('Products', () => {
  beforeEach(async function() {
    let p = new Product(product)
    await p.save()
  });
  afterEach(async function() {
    await Product.deleteOne({_id: product._id})
	});

  describe('Getting products', () => {
    beforeEach(async function() {
      let p1 = new Product(product1)
      let p2 = new Product(product2)
      let p3 = new Product(product3)
      await p1.save()
      await p2.save()
      await p3.save()
    });
    afterEach(async function() {
      await Product.deleteOne({_id: product1._id})
      await Product.deleteOne({_id: product2._id})
      await Product.deleteOne({_id: product3._id})
    });

    it('should return all products', async () => {
        const res = await request(app)
            .get(`/api/${product._id}/products`)
        expect(res.statusCode).equals(200)
        expect(res.body).to.have.nested.property('data[0].name', 'Printer')
        expect(res.body).to.have.nested.property('data[1].name', 'Laptop')
        expect(res.body).to.have.nested.property('data[2].name', 'Eraser')
    })
  })

  describe('Creating products', () => {
    afterEach(async function() {
      await Product.deleteOne({_id: product1._id})
    });

      it('should create correctly and return id and message', async () => {
          var res = await request(app)
            .post(`/api/${product._id}/products`)
            .send(product1)
          expect(res.statusCode).equals(201)
          expect(res.body).to.have.property('data').to.have.property('message','Created ok')
          expect(res.body).to.have.property('data').to.have.property('id')
          const id = res.body.data.id
          res = await request(app)
            .get(`/api/${product._id}/products/${id}`)
          console.log(JSON.stringify(res.body))
          expect(res.statusCode).equals(200)
          expect(res.body).to.have.nested.property('data.name', 'Printer')
      })
  })
})