import React from 'react'
import Footer from '../../components/footer/Footer'
import GetHome from '../../components/get_home/GetHome'
import CreateCampaign from '../../components/create_campaign/CreateCampaign'

function CampaignPage () {
  return (
        <div className='main'>
            <GetHome />
            <CreateCampaign />
            <Footer />
        </div>
  )
}
export default CampaignPage
