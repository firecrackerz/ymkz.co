import { Selector } from 'testcafe'
import { getLocation } from './functions'

fixture('ymkz portofolio E2E test').page('http://localhost:3000/')

test('contact form filling test', async t => {
  await t
    .typeText('#name', 'John Doe')
    .typeText('#email', 'mail@example.com')
    .typeText('#message', 'hello, world')
  await t.expect(Selector('#submit').hasAttribute('disabled')).notOk('The contact form is filled')
})

test('Move to /about', async t => {
  await t.click('#about')
  const location = await getLocation()
  await t.expect(location.pathname).eql('/about')
})

test('Move to /work', async t => {
  await t.click('#work')
  const location = await getLocation()
  await t.expect(location.pathname).eql('/work')
})

test('Move to /', async t => {
  await t.click('#root')
  const location = await getLocation()
  await t.expect(location.pathname).eql('/')
})
