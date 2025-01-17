import React from "react"
import "./partnersInvestors.scss"
import { Row, Col } from "antd"
import PartnerCard from "../misc/partnerCard"

import fera from "../../images/partners/fera.png"
import penguin from "../../images/partners/penguin.png"
import moontools from "../../images/partners/moontools.png"
import stacker from "../../images/partners/stacker.png"
import curtis from "../../images/partners/curtis.png"
import psiCapital from "../../images/partners/psiCapital.svg"

const partners = [
  { title: "Stacker Ventures", logo: stacker, url: "https://stacker.vc/", text: "Check them out" },
  { title: "Moontools", logo: moontools, url: "https://moontools.io/", text: "Check them out" },
  { title: "Penguin Party", logo: penguin, url: "https://penguinparty.eth.link/", text: "Check them out" },
  { title: "Fera Strategies", logo: fera, url: "https://www.ferastrategies.com/", text: "Check them out" },
  { title: "PSI Capital", logo: psiCapital, url: "https://psi.capital/", text: "Check them out" },
  // { title: "Curtis Bear", logo: curtis, url: "https://curtisbear.com/", text: "Check them out" }
]

const PartnersInvestors = () => {
  return (
    <section className="aboutPartnersInvestors container">
      <h2>Our Partners</h2>
      <Row>
        <Col span={24} >
          <div >
            {partners.map((partner, index) =>
              <PartnerCard key={index} {...partner} />
            )}
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default PartnersInvestors
