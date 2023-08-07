import * as React from "react"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/style.scss'
// import Header from "../components/Header/Header";
import HomeLayout from "../components/layouts/HomeLayout";
import FilterForm from "../components/Forms/FilterForm";
import ProductListing from "../components/Products/ProductListing";
// import Footer from "../components/Footer/Footer";

const IndexPage = () => {
  return (
    <HomeLayout>
      <FilterForm />
      <ProductListing />
    </HomeLayout>
  )
}

export default IndexPage

export const Head = () => <title>Damaac</title>
