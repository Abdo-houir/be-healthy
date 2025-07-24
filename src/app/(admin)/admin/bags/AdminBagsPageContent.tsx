"use client"

import { endpoints } from "@/app/data/api/endpoints";
import { handleErrorMessageDecider } from "@/lib/api/handleErrorMessageDecider";
import useAxiosQuery from "@/lib/api/react-query/useAxiosQuery";
import MyAlert from "@/lib/components/view/MyAlert";
import LoadingBagList from "./components/loading/LoadingBagList";
import BagsView from "./components/view/BagsView";


const AdminBagsPageContent = () => {
    const bags = useAxiosQuery(endpoints.admin.bags.getAllBags);

    if (bags.isLoading) {
        return <LoadingBagList />
    } else if (bags.isError) {
        return <MyAlert
            severity="error"
            color="error"
            message={handleErrorMessageDecider(bags.error)}
        />
    } else {
        return <BagsView
            bags={bags.data.data as BagType[]}
        />
    }
}

export default AdminBagsPageContent