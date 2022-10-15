import '../common/template/denpendecies'
import React from "react"

import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Footer from '../common/template/footer'
import Routes from './routes'
import Mensages from '../common/msg/mensages'

export default props => (
    <div className="wrapper">
        <Header />
        <SideBar />
        <div className="content-wrapper">
            <Routes />
        </div>
        <Footer />
        <Mensages />
    </div>
)