/*!

=========================================================
* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react'
import PropTypes from 'prop-types'

import NoUISlider from 'nouislider'

// Add your info to the docs if you edit this!

/**
 * ### Baseline slider!
 * 
 * @version 1.0.0
 * @author Noah Templet ([w3aseL](https://github.com/w3aseL))
 */
class Slider extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { rangeMin, rangeMax, step } = this.props

    var slider = this.refs.slider;

    NoUISlider.create(slider, {
      start: [40],
      connect: [true, false],
      step: step,
      range: { min: rangeMin, max: rangeMax }
    });
  }

  static propTypes = {
    /**
     * The color of the slider.
     */
    color: PropTypes.string,
    /**
     * The minimum range of the slider.
     */
    rangeMin: PropTypes.number,
    /**
     * The maximum range of the slider.
     */
    rangeMax: PropTypes.number,
    /**
     * The step size of the slider.
     */
    step: PropTypes.number
  }

  static defaultProps = {
    rangeMin: 0,
    rangeMax: 100,
    step: 1
  }

  render() {
    const { color } = this.props

    return (
      <div className={`slider ${color ? `slider-${color}` : ""}`} ref="slider" />
    )
  }
}

export { Slider }

export default Slider