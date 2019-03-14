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

const db = new PouchDB(process.env.DB_URL, {
  auth: { username: process.env.DB_USER, password: process.env.DB_PASS }
})

db.info().then(console.log)

console.log('in containers/index.js', sampleIssue)

// type Props = {||}

// const Comp = (props: Props) =>
const Comp = () =>
<div>
  <Details issue={sampleIssue} />
</div>

export default Comp
