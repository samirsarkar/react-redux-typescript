import { Suspense, lazy } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { RoutingPaths } from "../constants/constants"
import Loading from "../components/Loading"

const ItemList = lazy(() => import("../pages/ItemListPage"))
const ItemDetailsPage = lazy(() => import("../pages/ItemDetailPage"))
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"))

const AppRouter = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path={RoutingPaths.home} element={<ItemList />} />
          <Route path={RoutingPaths.postItem} element={<ItemDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default AppRouter
