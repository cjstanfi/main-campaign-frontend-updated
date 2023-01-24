import { configureStore } from "@reduxjs/toolkit";
import {chartSlice} from "../reducer/ChartSlice.js";
import { dataSlice } from "../reducer/reducer.js";
import { facebookAdSetSlice} from "../reducer/FacebookAdSetSlice.js";
import {facebookCampaignSlice} from "../reducer/FacebookCampaignSlice.js";
import {facebookAdSlice} from "../reducer/FacebookAdSlice.js";
import {facebookAdDailyInsightSlice} from "../reducer/FacebookAdDailyInsightSlice.js";
import {facebookAdSetDailyInsightSlice} from "../reducer/FacebookAdSetDailyInsightSlice.js";
import {facebookCampaignDailyInsightSlice} from "../reducer/FacebookCampaignDailyInsightSlice.js";
import {marketingPlatformBusinessSlice} from "../reducer/MarketingPlatformBusinessSlice.js";
import {facebookAdAccountSlice} from "../reducer/FacebookAdAccountSlice.js";
import {generatedLeadSlice} from "../reducer/GeneratedLeadSlice.js";
import {marketingPlatformAccountSlice} from "../reducer/MarketingPlatformAccountSlice.js";
import {mainCampaignAccountSlice} from "../reducer/MainCampaignAccountSlice.js";
import {mainCampaignBusinessSlice} from "../reducer/MainCampaignBusinessSlice.js";
import {salesCrmAccountSlice} from "../reducer/SalesCrmAccountSlice.js";
import {smallViewNumbersSlice} from "../reducer/SmallViewNumbersSlice.js";
import {facebookSummarySlice} from "../reducer/FacebookSummarySlice.js";
import {barchartSlice} from "../reducer/BarchartSlice.js"
export const dataActions = dataSlice.actions;

const store = configureStore({
  reducer: {
    chart: chartSlice.reducer,
    data: dataSlice.reducer,
    facebookAdAccount: facebookAdAccountSlice.reducer,
    facebookAd: facebookAdSlice.reducer,
    facebookAdDailyInsight: facebookAdDailyInsightSlice.reducer,
    facebookSummary: facebookSummarySlice.reducer,
    facebookAdSet: facebookAdSetSlice.reducer,
    facebookAdSetDailyInsight: facebookAdSetDailyInsightSlice.reducer,
    facebookCampaign: facebookCampaignSlice.reducer,
    facebookCampaignDailyInsight: facebookCampaignDailyInsightSlice.reducer,
    generatedLead: generatedLeadSlice.reducer,
    mainCampaignAccount: mainCampaignAccountSlice.reducer,
    mainCampaignBusiness: mainCampaignBusinessSlice.reducer,
    marketingPlatformAccount: marketingPlatformAccountSlice.reducer,
    marketingPlatformBusiness: marketingPlatformBusinessSlice.reducer,
    salesCrmAccount: salesCrmAccountSlice.reducer,
    smallViewNumbers: smallViewNumbersSlice.reducer,
    barChart: barchartSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
