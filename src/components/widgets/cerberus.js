import React from "react"
import "./cerberus.scss"
import pricesThumb from "../../images/cerberus/pricesThumb.jpg"
import detailsThumb from "../../images/cerberus/detailsThumb.jpg"
import walletThumb from "../../images/cerberus/walletThumb.jpg"
import prices from "../../videos/prices.mp4"
import { Col, Row, Tabs } from "antd"
import PremiumButton from "../misc/premiumButton"

const { TabPane } = Tabs


const Cerberus = () => {
  return (
    <section className="cerberus container" id="cerberus">
      <Row>
        <Col md={{span:20, offset:2}}>
          <h2>Explore 100s of cryptocurrencies with our Cerberus tool</h2>
        </Col>
      </Row>
      <Row>
        <Col md={{span:20, offset:2}} xs={24}>
          <Tabs defaultActiveKey="1" centered={true}>
            <TabPane tab="Prices" key="1">
              <video preload='auto' poster={pricesThumb} loop autoPlay muted>
                <source src={prices} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </TabPane>
            <TabPane tab="Details" key="2">
              <img src={detailsThumb} alt="" />
            </TabPane>
            <TabPane tab="Wallet Tracker" key="3">
              <img src={walletThumb} alt="" />
            </TabPane>
          </Tabs>
          <PremiumButton link="https://cerberus.saren.io/">
            Cerberus
          </PremiumButton>
        </Col>
      </Row>
    </section>
  )
}

export default Cerberus
