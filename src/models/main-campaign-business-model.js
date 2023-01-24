import requiredParam from "../helpers/utils/required-param";
import {toCamel} from "../helpers/utils/case";
import optionalParam from "../helpers/utils/optional-param";

export default function makeMainCampaignBusiness(mainCampaignBusinessInfo) {

    mainCampaignBusinessInfo = toCamel(mainCampaignBusinessInfo)
    const validMainCampaignBusiness = validate(mainCampaignBusinessInfo)
    return Object.freeze(validMainCampaignBusiness)
    function validate({
                          mainCampaignAccountId = requiredParam('main_campaign_account_id'),
                          mainCampaignBusinessName = requiredParam('main_campaign_business_name'),
                          mainCampaignBusinessId = requiredParam('main_campaign_business_id'),
                          mainCampaignBusinessConversionsType = requiredParam('main_campaign_business_conversions_type'),
                          mainCampaignBusinessIsSubscribed = optionalParam()
                      } = {}) {
        return {
            mainCampaignAccountId,
            mainCampaignBusinessName,
            mainCampaignBusinessId,
            mainCampaignBusinessConversionsType,
            mainCampaignBusinessIsSubscribed
        }
    }
}
