import {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import axios from "axios";
import useMainCampaignAccessToken from "./useMainCampaignAccessToken";
import useFetch from "./useFetch";

export default function useAirtableAccessToken() {
    const [accessToken, setAccessToken] = useState(null)
    const {REACT_APP_MAIN_CAMPAIGN_API_URL} = process.env
    const mainCampaignBusinessId = "7cc47fbe-e8bc-4f93-a06b-8deed6d71bab"
    const { data } = useFetch(`${REACT_APP_MAIN_CAMPAIGN_API_URL}/sales-crm-account/airtable/oauth/access-token/${mainCampaignBusinessId}`, [])

    useEffect(() => {
        if(data) {
            setAccessToken(data.result.accessToken)
        }
    }, [data]);

    return { accessToken }
}