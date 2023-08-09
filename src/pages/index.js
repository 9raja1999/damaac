import * as React from "react"
import { useEffect } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/style.scss'
// import Header from "../components/Header/Header";
import HomeLayout from "../components/layouts/HomeLayout";
import FilterForm from "../components/Forms/FilterForm";
import ProductListing from "../components/Products/ProductListing";
// import Footer from "../components/Footer/Footer";

const IndexPage = () => {
  const [searchData, setSearchData] = React.useState({
    property_type: [],
    bedroom: [],
    floor_area: [],
    price: []
  })


  const getSearchData = (data) => {
    setSearchData(data)
  }


  return (
    <HomeLayout>
      <FilterForm getSearchData={getSearchData} />
      <ProductListing searchData={searchData} />
    </HomeLayout>
  )
}

export default IndexPage

export const Head = () => <title>Damaac</title>
