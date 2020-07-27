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

// Add your info to the docs if you edit this!

/**
 * ### Baseline information area!
 * 
 * @version 0.0.1
 * @author Noah Templet ([w3aseL](https://github.com/w3aseL))
 */
class InfoArea extends React.Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    /**
     * Color of the blob for the info area
     */
    color: PropTypes.string,
    /**
     * Icon for the blob to use
     */
    icon: PropTypes.node.isRequired,
    /**
     * Title of the info area. REQUIRED
     */
    title: PropTypes.string.isRequired,
    /**
     * Description of the info area.
     */
    description: PropTypes.string,
    /**
     * Color of the icon.
     */
    iconColor: PropTypes.string,
    /**
     * Determines if the icon and blob will hover vertically over text.
     */
    hover: PropTypes.bool.isRequired,
    /**
     * An appendable object. Usually a button link.
     */
    append: PropTypes.node,
    /**
     * Hides the blob. No need for the color prop if the blob is hidden!
     */
    noBlob: PropTypes.bool
  }

  static defaultProps = {
    color: "black",
    icon: <i className="tim-icons icon-html5" />,
    iconColor: "primary",
    hover: true
  }

  /**
   * getBlobByColor
   * ===========
   * Blob images in URI format. Takes in a color and returns a URI.
   * 
   * @param {String} color
   * @returns {String} Blob URI
   */
  getBlobByColor(color) {
    switch(color) {
      case "black":
        return "data:image/png;base64,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"
      case "danger":
        return "data:image/png;base64,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"
      case "primary":
        return "data:image/png;base64,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"
      case "info":
        return "data:image/png;base64,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"
      case "secondary":
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEX09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09ff09femcPsZAAAAn3RSTlMAETFRcIqdsMPW3ezu8v8VQ3GezPAWBDNtpuSnJGy1A0KS2wI9l+sbfeBPs/wLF4XtjPYS84YGc+8HuXYyzgWC+4MlyyZfmx7K6mQBDb3FD8/NFNMKpIdpQfodnFwi8caBgHdQ3t8IdfQZhAzcIf3+4TuR5eY+P9ojtKjjcp+Lr8TY1+jiUkRAPI5U93hdXkXQExC+qWXHNLwJjX5TsfXnW05kAAAFXElEQVR42u3dC1NTRxgG4BeiqBHeAAknEQIBoigIAiEoAWyjqICRmxe0IJcqItZaI6VWEZXaemmltra1Xqr+1s60nTIjEBJyLrtf+/yDnTl75tvd7wJr5OS6Nm3O27J1m3t7fgFZkL/dvW3rlrzNm1y5OdCDp7Co2OtjCj5vcVFhCRRm+AM7Spmm0rKA34CCguUVBcxQQUV5ECoJVVZVc4OqqypDUEJ4564aZqVm184wnLZ7Ty1NULtnNxwUqttbT5PU760LwRkNATdN5Q40wH77GptouqbGfbCXpzlCS0SaPbBPS2OUlom2tsAe+w+00VJtB2KwgauWlqt1wWrBdtqiPQgrGR0R2iTSYcAynQdpo4OdsMZHH8dpq/ihj2CBw120nfcITHc0SgdEj8JcsWN0yLEYTNTdQ8f0dMM0hb10UG8hTHI8TkfFj8MMiVY6rjWBrMV2UAFlMWTpRB+V0NeArLT0UBH9A8iCZ5DKGDqZxTpOUSGnPNigAS+VMjSADTndT8X0n8YG7O+jcvr2I2OJM1TQmQQyNUwlDSNDZ6mos8jIuU+oqPg5ZGCkl8rqHUHaYj1UWFcM6Rql0kaRpvNU3HmkZWyciisYQxpCE1TeRAjrm6QGPsW6OuPUQLwT6zAOUgsHDaR2gZq4gJSCEWoiEkQq7dRGO1K4SI1cxJpiU9TIpWms5TK10oE1tPiolfEWrK6VmmnFqkqi1MxMCVbTTO00YxVXItRO5ApWOkQNfYYVrrZRQ21X8aEAtRTABww3tfS5sSLK0tTF1GGvtkHwtS+oqevXVtw4aOoQsCyRpLaSCSy7QY3dwLJZamwW/wp/SY3NLddsfEWt3VzxZWn/bX1NrVXjH7eouVv4WzmXaR0C36bmbuMvoSg1Fw0BADqpPf/y2VDCJpmn9soAAHeovTsA4KEAHgCFFKASwAIFWABwlwLcBeClAF4APgrgA3IoQg5yKUIuXBTBhQWKUIR7FGEz8ihCHu5ThPtYpAiL+IYiPECSIiThowjfIkoRfKAMUVCI/xeimKiYzS7n9/sdRUiKCVHEBI1iwngxBysxR105lw8PKYJLzAWdmCtTKZfYYp4VxDz0SHp6e0QBCsU8T0tJGJCSwjEvK6nGT+35xSSeyUkFlLFJAmLSZaUkMMtLKb9JrT1eLruYo8bmwlIKYaSUJj2RUiwW1rN0OnX5Hq5dp6auj8kscYWL2khddGxMUUtuQ0phvtxWCWikhholtxNBM7XzPVZTMkPNzJQIaYI0jNW1jFMXqdtSoYNa6cBapi9RXalbt+kccf0guL3hsuBTauLpYaS0RE0sITVjkFoYNLAOfz01UO8X0rh4EuszdGglbSANYwVUXMEY0vIjFfdMSAP8PKQr1kWFdcWQtm6Vh0R0IwOV9VRU/U9SBqlIGW0jftiQ/PFPwOkJKmaiARsyMESlDA3814fWAZ6fqYyhk8jC8y4qov8XZOXEr1RC31VkKTZPBfw2jawlhum44QTM8MLpAcEvYJJHNXRQzSOYpruLjunqhommR+mQ0WmY69k4HTD+DKYbm6Dtfh+DBYzJOG0VnzRgjZeDtNHgS1jGWIrQJpElA1Y6/Iq2eHUEVnuYpOWSD2GD15fbaKm2jtewR8twlJaJDj+HfTxvIrRE5E0J7LWvsYmma2q8Avs1BNw0lTvQAGeE6irqaZL623UhOGhkT5ImSP4xAqeFn8zOMStzs0/CUEL4ZlU1N6i66nEYKgmWV8wwQzMV5UEoyPAHykqZptL5gN+AwjyFRcVeH1PweYuLCkugh5zctwv3it8tPpjKz39Pvs/Pn3qw+K743sLb3BxY4k/3F1tEJsMVjwAAAABJRU5ErkJggg=="
      case "success":
        return "data:image/png;base64,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"
      case "warning":
        return "data:image/png;base64,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"
      default:
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnU0RnXYXoo9AAAAn3RSTlMAETFRcIqdsMPW3ezu8v8VQ3GezPAWBDNtpuSnJGy1A0KS2wI9l+sbfeBPs/wLF4XtjPYS84YGc+8HuXYyzgWC+4MlyyZfmx7K6mQBDb3FD8/NFNMKpIdpQfodnFwi8caBgHdQ3t8IdfQZhAzcIf3+4TuR5eY+P9ojtKjjcp+Lr8TY1+jiUkRAPI5U93hdXkXQExC+qWXHNLwJjX5TsfXnW05kAAAFXElEQVR42u3dC1NTRxgG4BeiqBHeAAknEQIBoigIAiEoAWyjqICRmxe0IJcqItZaI6VWEZXaemmltra1Xqr+1s60nTIjEBJyLrtf+/yDnTl75tvd7wJr5OS6Nm3O27J1m3t7fgFZkL/dvW3rlrzNm1y5OdCDp7Co2OtjCj5vcVFhCRRm+AM7Spmm0rKA34CCguUVBcxQQUV5ECoJVVZVc4OqqypDUEJ4564aZqVm184wnLZ7Ty1NULtnNxwUqttbT5PU760LwRkNATdN5Q40wH77GptouqbGfbCXpzlCS0SaPbBPS2OUlom2tsAe+w+00VJtB2KwgauWlqt1wWrBdtqiPQgrGR0R2iTSYcAynQdpo4OdsMZHH8dpq/ihj2CBw120nfcITHc0SgdEj8JcsWN0yLEYTNTdQ8f0dMM0hb10UG8hTHI8TkfFj8MMiVY6rjWBrMV2UAFlMWTpRB+V0NeArLT0UBH9A8iCZ5DKGDqZxTpOUSGnPNigAS+VMjSADTndT8X0n8YG7O+jcvr2I2OJM1TQmQQyNUwlDSNDZ6mos8jIuU+oqPg5ZGCkl8rqHUHaYj1UWFcM6Rql0kaRpvNU3HmkZWyciisYQxpCE1TeRAjrm6QGPsW6OuPUQLwT6zAOUgsHDaR2gZq4gJSCEWoiEkQq7dRGO1K4SI1cxJpiU9TIpWms5TK10oE1tPiolfEWrK6VmmnFqkqi1MxMCVbTTO00YxVXItRO5ApWOkQNfYYVrrZRQ21X8aEAtRTABww3tfS5sSLK0tTF1GGvtkHwtS+oqevXVtw4aOoQsCyRpLaSCSy7QY3dwLJZamwW/wp/SY3NLddsfEWt3VzxZWn/bX1NrVXjH7eouVv4WzmXaR0C36bmbuMvoSg1Fw0BADqpPf/y2VDCJpmn9soAAHeovTsA4KEAHgCFFKASwAIFWABwlwLcBeClAF4APgrgA3IoQg5yKUIuXBTBhQWKUIR7FGEz8ihCHu5ThPtYpAiL+IYiPECSIiThowjfIkoRfKAMUVCI/xeimKiYzS7n9/sdRUiKCVHEBI1iwngxBysxR105lw8PKYJLzAWdmCtTKZfYYp4VxDz0SHp6e0QBCsU8T0tJGJCSwjEvK6nGT+35xSSeyUkFlLFJAmLSZaUkMMtLKb9JrT1eLruYo8bmwlIKYaSUJj2RUiwW1rN0OnX5Hq5dp6auj8kscYWL2khddGxMUUtuQ0phvtxWCWikhholtxNBM7XzPVZTMkPNzJQIaYI0jNW1jFMXqdtSoYNa6cBapi9RXalbt+kccf0guL3hsuBTauLpYaS0RE0sITVjkFoYNLAOfz01UO8X0rh4EuszdGglbSANYwVUXMEY0vIjFfdMSAP8PKQr1kWFdcWQtm6Vh0R0IwOV9VRU/U9SBqlIGW0jftiQ/PFPwOkJKmaiARsyMESlDA3814fWAZ6fqYyhk8jC8y4qov8XZOXEr1RC31VkKTZPBfw2jawlhum44QTM8MLpAcEvYJJHNXRQzSOYpruLjunqhommR+mQ0WmY69k4HTD+DKYbm6Dtfh+DBYzJOG0VnzRgjZeDtNHgS1jGWIrQJpElA1Y6/Iq2eHUEVnuYpOWSD2GD15fbaKm2jtewR8twlJaJDj+HfTxvIrRE5E0J7LWvsYmma2q8Avs1BNw0lTvQAGeE6irqaZL623UhOGhkT5ImSP4xAqeFn8zOMStzs0/CUEL4ZlU1N6i66nEYKgmWV8wwQzMV5UEoyPAHykqZptL5gN+AwjyFRcVeH1PweYuLCkugh5zctwv3it8tPpjKz39Pvs/Pn3qw+K743sLb3BxY4k/3F1tEJsMVjwAAAABJRU5ErkJggg=="
    }
  }
  
  render() {
    const { color, icon, title, description, iconColor, hover, append, noBlob } = this.props

    return (
      <>
        <div className={`info info-${hover ? "hover" : "horizontal"}`}>
          <div className={`icon icon-${iconColor}`}>
            {!noBlob && <img
              alt="..."
              className="bg-blob"
              src={this.getBlobByColor(color)}
            />}
            {icon}
          </div>
          <div className="description">
            <h3 className="info-title">{title}</h3>
            {description && <p>{description}</p>}
            {append && append}
          </div>
        </div>
      </>
    );
  }
}

export { InfoArea }

export default InfoArea