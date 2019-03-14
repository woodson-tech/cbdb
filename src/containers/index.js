// @flow

import * as React from 'react'
import PouchDB from 'pouchdb'
import Details from './../Details'
import sampleIssue from './../dummydata.json'

/**
 * [COMP DESCRIPTION]
 * @param {object} props - Component properties
 * @return {JSX} - Component
 */

 console.log('url: ', process.env.DB_URL)
const db = new PouchDB(process.env.DB_URL, {
  auth: { username: process.env.DB_USER, password: process.env.DB_PASS }
})
console.log('db')
console.log(db)

db.info().then(result => {
  console.log('db info')
  console.log(result)
})

db.allDocs().then(result => {
  console.log('all docs')
  console.log(result)
})

db.get('ac78f6f1ed5732748818609cc60005b7')
  .then(result => {
  console.log('doc')
  console.log(result)
})
.catch(error => console.log('error: ', error))

console.log('in containers/index.js', sampleIssue)

// type Props = {||}

// const Comp = (props: Props) =>
const Comp = () =>
<div>
  <Details issue={sampleIssue} />
</div>

export default Comp
