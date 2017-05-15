import React from 'react'

import Icon from 'react-icons-kit'
import { facebook, twitter, mail2, github, instagram } from 'react-icons-kit/icomoon/'

export default class HeaderBanner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        isLoaded: true
      })
    }, 500);
  }

  getClassName (className) {

    if (className == 'logo') {
      if(this.state.isLoaded) {
        return 'wsite-image wsite-image-border-none logo-img-div banner-show-anim';
      }
      else {
        return 'wsite-image wsite-image-border-none logo-img-div';
      }
    }
  }

  render() {
    return (
      <div id="header-banner" className="banner-wrap">
        <div className="wsite-elements wsite-not-footer wsite-header-elements">
          <div className="wsite-section-wrap">
            <div className="wsite-section wsite-header-section wsite-section-bg-image wsite-section-effect-reveal">
              <div className="wsite-section-content">
                <div className="container">
                  <div className="banner">
                    <div className="wsite-section-elements">

                      <div className={this.getClassName('logo')}>
                        <a>
                          <img className="logo-img" src="./images/logo-panafintech.png" alt="Picture" />
                        </a>
                      </div>

                      <h2 className="wsite-content-title" data-sr-id="3">
                        <font size="7">
                          <strong>PROMOVIENDO LA INNOVACIÓN FINANCIERA</strong>
                        </font>
                      </h2>

                      <div className="paragraph" data-sr-id="4">
                        <font size="4">Somos la comunidad de Fintech de Panamá.</font>
                      </div>

                      <div className="" data-sr-id="5">
                        <div className="wsite-multicol">
                          <div className="wsite-multicol-table-wrap">
                            <table className="wsite-multicol-table">
                              <tbody className="wsite-multicol-tbody">
                                <tr className="wsite-multicol-tr">
                                  <td className="wsite-multicol-col td-asist">
                                    <div className="text-left">
                                      <a
                                        className="wsite-button wsite-button-large wsite-button-highlight" href="http://www.panafintech.com/#evento">
                                        <span className="wsite-button-inner">
                                          <strong>¡asiste a nuestros eventos!</strong>
                                        </span>
                                      </a>
                                    </div>
                                  </td>

                                  <td className="wsite-multicol-col td-comunidad">
                                    <div className="text-left">
                                      <a
                                        className="wsite-button wsite-button-large wsite-button-normal"
                                        href="http://www.panafintech.com/#slack">
                                        <span className="wsite-button-inner">
                                          Comunidad slack
                                        </span>
                                      </a>
                                    </div>
                                  </td>

                                  <td className="wsite-multicol-col td-space">
                                    <div className="wsite-spacer"></div>
                                  </td>

                                  <td className="wsite-multicol-col td-objective">
                                    <div className="text-left">
                                      <a className="wsite-button wsite-button-large wsite-button-normal" href="http://www.panafintech.com/#objetivos">
                                        <span className="wsite-button-inner">Objetivos</span>
                                      </a>
                                    </div>
                                  </td>

                                  <td className="wsite-multicol-col td-socials">
                                    <div>
                                      <span className="wsite-social wsite-social-default">
                                        <a className="first-child wsite-social-item wsite-social-facebook" href="https://www.facebook.com/panafintech/" target="_blank">
                                          <Icon icon={facebook} size={20}/>
                                        </a>
                                        <a className="wsite-social-item wsite-social-twitter" href="https://twitter.com/panafintech" target="_blank">
                                          <Icon icon={twitter} size={20}/>
                                        </a>
                                        <a className="wsite-social-item wsite-social-instagram" href="https://www.instagram.com/pana.fintech/" target="_blank">
                                          <Icon icon={instagram} size={20}/>
                                        </a>
                                        <a className="last-child wsite-social-item wsite-social-mail" href="mailto:comunidad@panafintech.com" target="_blank">
                                          <Icon icon={mail2} size={20}/>
                                        </a>
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
