// @flow

import * as React from 'react'
import PouchDB from 'pouchdb'
import Details from './../Details'

/**
 * [COMP DESCRIPTION]
 * @param {object} props - Component properties
 * @return {JSX} - Component
 */

const db = new PouchDB(process.env.DB_URL, {
  auth: { username: process.env.DB_USER, password: process.env.DB_PASS }
})

db.info().then(console.log)

type Props = {||}

const Comp = (props: Props) =>
<div>
  <Details />
</div>

export default Comp
