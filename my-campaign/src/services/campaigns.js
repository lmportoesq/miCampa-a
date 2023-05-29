const API_URL = 'http://localhost:8080'

export async function createCampaign (campaign) {
  const payload = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(campaign)
  }

  try {
    const response = await fetch(`${API_URL}/api/campaigns`, payload)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export async function updateUser (campaign) {
  const payload = {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(campaign)
  }

  try {
    const response = await fetch(`${API_URL}/api/campaigns/${campaign.id}`, payload)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export async function getAllCampaigns () {
  try {
    const response = await fetch(`${API_URL}/api/campaigns`)
    const campaigns = await response.json()
    return campaigns
  } catch (error) {
    return null
  }
}
