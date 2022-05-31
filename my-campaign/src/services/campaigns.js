const API_URL_ENV = process.env.REACT_APP_URL;
const API_URL = 'http://localhost:8080';

export async function createCampaign(campaign) { 
  console.log('La data recibida es.. ',campaign)
  console.log('La url es ', API_URL)
  const payload = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(campaign),
  };
  console.log('Este es el Payload:',payload)
  try {
    const response = await fetch(`${API_URL}/api/campaigns`, payload);
    console.log('REsultado del fetch es..',response)
    const data = await response.json();
    console.log('REsultado del servicio createCAmpaig es..',data)
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateUser(campaign) {
  const payload = {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(campaign),
  };

  try {
    const response = await fetch(`${API_URL}/api/campaigns/${campaign.id}`, payload);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getAllCampaigns() {
  try {
    const response = await fetch(`${API_URL}/api/campaigns`);
    const campaigns = await response.json();
    return campaigns;
  } catch (error) {
    return null;
  }
}
