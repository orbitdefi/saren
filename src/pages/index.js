import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Banner from "../components/home/banner"
import Cerberus from "../components/widgets/cerberus"
import Contact from "../components/widgets/contact"
import RoadMap from "../components/widgets/roadmap"
import Community from "../components/widgets/community"
import WhySaren from "../components/widgets/whySaren"
import Blog from "../components/widgets/blog"
import Faqs from "../components/widgets/faqs"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner/>
    <Cerberus/>
    <RoadMap/>
    <Community/>
    <WhySaren/>
    <Blog/>
    <Faqs/>
    <Contact/>
  </Layout>
)

export default IndexPage
