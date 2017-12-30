fixture('YMKZ Portofolio E2E Test').page('http://localhost:3000/')

test('contact form filling test', async t => {
  await t
    .typeText('#name', 'John Doe')
    .typeText('#email', 'mail@example.com')
    .typeText('#message', 'hello, world')
})
