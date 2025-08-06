
import { CommonService } from "../service";
import { ApiResponse } from "../services";

export const service = CommonService.enhanceEndpoints({
  addTagTypes: ["dashboard"],
}).injectEndpoints({
    endpoints: (build) => ({
        getDashboardOverview: build.query<ApiResponse<any>, { filterData: any }>({
            query: (params) => ({
                url: `dashboard/overview/`,
                method: "GET",
                params: params.filterData,
            }),
            providesTags: ["dashboard"],
        }),
    }),
    overrideExisting: true,
});

export const {
    useLazyGetDashboardOverviewQuery
} = service;
