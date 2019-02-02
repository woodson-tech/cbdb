import * as React from 'react'
import * as ReactDom from 'react-dom'

const Hello = () => <div>{'Hello'}</div>

ReactDom.render(<Hello />, document.getElementsByTagName('main')[0])
