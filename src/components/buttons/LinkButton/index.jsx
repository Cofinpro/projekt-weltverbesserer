import React from 'react'
import { Link } from 'react-router-dom'


import './style.scss'

class LinkButton extends React.Component {
  render() {
    const { text, path, styleSpan, styleLink } = this.props


    return (
      <Link className={'link-button ' + styleLink} to={path}>
        <span className={'btn btn btn-outline-primary ' + styleSpan}>
          {text}
        </span>
      </Link>
    )
  }
}

export default LinkButton
