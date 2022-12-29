import React from "react";
import { NavLink } from "react-router-dom";

const Ecommerce = (props) => {
    return (
        <>
            <div className="block-category-title">E-Commerce</div>
            <div className="block-category">
                <div className="block-group">
                    <span className="block-group-title">Blocks</span>
                    <div className="block-group-content">
                        <div className="grid">
                            <div className="col-12 md:col-3">
                                <NavLink to="/ecommerce/productoverview">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-productoverviews-dark.svg"
                                                : "assets/images/placeholders/placeholder-productoverviews.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Product Overview"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Product Overview
                                        </span>
                                        <span className="block-count">
                                            4 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/ecommerce/productlist">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-productlists-dark.svg"
                                                : "assets/images/placeholders/placeholder-productlists.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Product Overview"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Product List
                                        </span>
                                        <span className="block-count">
                                            9 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/ecommerce/categorypreview">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-categorypreviews-dark.svg"
                                                : "assets/images/placeholders/placeholder-categorypreviews.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Product Overview"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Category Preview
                                        </span>
                                        <span className="block-count">
                                            7 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/ecommerce/shoppingcart">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-shoppingcarts-dark.svg"
                                                : "assets/images/placeholders/placeholder-shoppingcarts.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Product Overview"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Shopping Cart
                                        </span>
                                        <span className="block-count">
                                            5 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/ecommerce/categoryfilter">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-categoryfilters-dark.svg"
                                                : "assets/images/placeholders/placeholder-categoryfilters.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Product Overview"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Category Filter
                                        </span>
                                        <span className="block-count">
                                            3 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/ecommerce/productquickview">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-productquickviews-dark.svg"
                                                : "assets/images/placeholders/placeholder-productquickviews.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Product Overview"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Product Quickview
                                        </span>
                                        <span className="block-count">
                                            2 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/ecommerce/productfeature">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-productfeatures-dark.svg"
                                                : "assets/images/placeholders/placeholder-productfeatures.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Product Overview"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Product Feature
                                        </span>
                                        <span className="block-count">
                                            7 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/ecommerce/storenavigation">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-storenavigation-dark.svg"
                                                : "assets/images/placeholders/placeholder-storenavigation.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Product Overview"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Store Navigation
                                        </span>
                                        <span className="block-count">
                                            3 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/ecommerce/promosection">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-promosections-dark.svg"
                                                : "assets/images/placeholders/placeholder-promosections.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Product Overview"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Promo Section
                                        </span>
                                        <span className="block-count">
                                            5 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/ecommerce/checkoutform">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-checkoutforms-dark.svg"
                                                : "assets/images/placeholders/placeholder-checkoutforms.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Product Overview"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Checkout Form
                                        </span>
                                        <span className="block-count">
                                            3 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/ecommerce/review">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-reviews-dark.svg"
                                                : "assets/images/placeholders/placeholder-reviews.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Product Overview"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Review
                                        </span>
                                        <span className="block-count">
                                            4 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/ecommerce/ordersummary">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-ordersummaries-dark.svg"
                                                : "assets/images/placeholders/placeholder-ordersummaries.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Product Overview"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Order Summary
                                        </span>
                                        <span className="block-count">
                                            3 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/ecommerce/orderhistory">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-orderhistory-dark.svg"
                                                : "assets/images/placeholders/placeholder-orderhistory.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Product Overview"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Order History
                                        </span>
                                        <span className="block-count">
                                            1 Block
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/ecommerce/incentive">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-incentives-dark.svg"
                                                : "assets/images/placeholders/placeholder-incentives.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Product Overview"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Incentive
                                        </span>
                                        <span className="block-count">
                                            3 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-group">
                    <span className="block-group-title">Page Samples</span>
                    <div className="block-group-content">
                        <div className="grid">
                            <div className="col-12 md:col-3">
                                <NavLink to="/ecommerce/storefront">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-storefrontpages-dark.svg"
                                                : "assets/images/placeholders/placeholder-storefrontpages.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Store Front"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Storefront
                                        </span>
                                        <span className="block-count">
                                            2 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/ecommerce/productpage">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-productpages-dark.svg"
                                                : "assets/images/placeholders/placeholder-productpages.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Store Front"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Product Page
                                        </span>
                                        <span className="block-count">
                                            1 Block
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/ecommerce/categorypage">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-categorypages-dark.svg"
                                                : "assets/images/placeholders/placeholder-categorypages.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Store Front"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Category Page
                                        </span>
                                        <span className="block-count">
                                            1 Block
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/ecommerce/shoppingcartpage">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-shoppingcarts-dark.svg"
                                                : "assets/images/placeholders/placeholder-shoppingcarts.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Store Front"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Shopping Cart Page
                                        </span>
                                        <span className="block-count">
                                            1 Block
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/ecommerce/checkoutpage">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-checkoutpages-dark.svg"
                                                : "assets/images/placeholders/placeholder-checkoutpages.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Store Front"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Checkout Page
                                        </span>
                                        <span className="block-count">
                                            1 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/ecommerce/orderdetailpage">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-orderdetailpages-dark.svg"
                                                : "assets/images/placeholders/placeholder-orderdetailpages.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Store Front"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Order Detail Page
                                        </span>
                                        <span className="block-count">
                                            1 Block
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/ecommerce/orderhistorypage">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-orderhistorypages-dark.svg"
                                                : "assets/images/placeholders/placeholder-orderhistorypages.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Store Front"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Order History Page
                                        </span>
                                        <span className="block-count">
                                            1 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ecommerce;
