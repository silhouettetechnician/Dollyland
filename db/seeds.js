const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const { dbURI } = require('../config/environment')
const Product = require('../models/product')
const User = require('../models/user')

mongoose.connect(dbURI, {useNewUrlParser: true }, (err, db) => {
  db.dropDatabase()
  
  Product.create([
      {
        name: 'Emi',
        type: 'Fixed Vagina Replaceable Vagina',
        description: 'Sea Japanese  Male Sex Doll  Female Sex Doll  Life Size  Mannequin  Small Size Cotton boxers',
        material: 'Solid Silicone',
        gender: 'Female',
        size: 157,
        price: 350,
        images: ['https://i.imgur.com/L0TyCLT.jpg', 'https://imgur.com/b2azxBO.jpg', 'https://imgur.com/Ctwlksl.jpg'],
        accessories: ['Wig', 'Underwear', 'Blanket', 'Vagina Cleaner', 'Gloves']
      },
      {
        name: 'Hayley',
        type: 'Fixed Vagina Replaceable Vagina',
        description: 'Small Breast lifelike Silicone Sex Dolls Full Size Realistic doll. Safe, Soft, lifelike real skin, real touch feeling, can do any sex pose, your sexmate.',
        material: 'medical TPE  Solid Silicone',
        gender: 'Female',
        size: 165,
        price: 450,
        images: ['https://i.imgur.com/L0TyCLT.jpg', 'https://imgur.com/b2azxBO.jpg', 'https://imgur.com/Ctwlksl.jpg'],
        accessories: ['Wig', 'Underwear', 'Blanket', 'Vagina Cleaner', 'Gloves']
      },
      {
        name: 'Natasha',
        type: 'Fixed Vagina Replaceable Vagina',
        description: 'Men C cup Realistic Oral Anal Vagina small Breast Full Love Doll Adult sex Toys, This is a real silicone TPE doll, not an inflatable doll. Real skin touch feeling, soft, real vagina,oral, anal. Can do any sex pose.',
        material: 'TFE Solid Silicone',
        gender: 'Female',
        size: 144,
        price: 459,
        images: ['https://i.imgur.com/L0TyCLT.jpg', 'https://imgur.com/b2azxBO.jpg', 'https://imgur.com/Ctwlksl.jpg'],
        accessories: ['Wig', 'Underwear', 'Blanket', 'Vagina Cleaner', 'Gloves']
      },
      {
        name: 'Laura',
        type: 'Fixed Vagina Replaceable Vagina',
        description: 'Made by high quality medical TPE material, no smell, very soft, real skin feeling, high level makeup',
        material: 'Solid Silicone',
        gender: 'Female',
        size: 166,
        price: 380,
        images: ['https://i.imgur.com/L0TyCLT.jpg', 'https://imgur.com/b2azxBO.jpg', 'https://imgur.com/Ctwlksl.jpg'],
        accessories: ['Wig', 'Underwear', 'Blanket', 'Vagina Cleaner', 'Gloves']
      },
      {
        name: 'Mary',
        type: 'Fixed Vagina Replaceable Vagina',
        description: 'S Big Breast Sex Dolls Oral Anal Vagina Japanese Skeleton Adult Mini Lifelike Anime Love Dolls for Men',
        material: 'TFE Solid Silicone',
        gender: 'Female',
        size: 470,
        price: 19.99,
        images: ['https://i.imgur.com/L0TyCLT.jpg', 'https://imgur.com/b2azxBO.jpg', 'https://imgur.com/Ctwlksl.jpg'],
        accessories: ['Wig', 'Underwear', 'Blanket', 'Vagina Cleaner', 'Gloves']
      },
      
  ])
    .then(products => console.log(`${products.length} products created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})

