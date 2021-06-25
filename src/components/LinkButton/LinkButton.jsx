// file: /components/LinkButton.jsx
import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import "./LinkButton.css"
import { Button } from '@material-ui/core'


const LinkButton = (props) => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    // ⬆ filtering out props that `button` doesn’t know what to do with.
    ...rest
  } = props
  return (
    // <button type='button' className='btn btn-primary'
    //   {...rest} // `children` is just another prop!
    //   onClick={(event) => {
    //     onClick && onClick(event)
    //     history.push(to)
    //   }}
    // />
    <Button variant='contained' disableElevation
    {...rest} // `children` is just another prop!
    onClick={(event) => {
      onClick && onClick(event)
      history.push(to)
    }}
  />
  )
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default withRouter(LinkButton)