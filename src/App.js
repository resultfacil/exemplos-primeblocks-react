import React, { useEffect, useState, useRef } from "react";
import { Route, NavLink, useHistory, useLocation } from "react-router-dom";

import { Button } from "primereact/button";
import { InputSwitch } from "primereact/inputswitch";
import { RadioButton } from "primereact/radiobutton";
import { Sidebar } from "primereact/sidebar";
import { Tooltip } from "primereact/tooltip";

import Home from "./components/home/Home";
import Documentation from "./components/documentation/Documentation";
import PricingPage from "./components/pricing/PricingPage";
import Free from "./components/free/Free";
import Marketing from "./components/marketing/Marketing";
import Hero from "./components/marketing/hero/Hero";
import Feature from "./components/marketing/feature/Feature";
import Cta from "./components/marketing/cta/Cta";
import Pricing from "./components/marketing/pricing/Pricing";
import Faq from "./components/marketing/faq/Faq";
import Newsletter from "./components/marketing/newsletter/Newsletter";
import Stats from "./components/marketing/stats/Stats";
import Testimonials from "./components/marketing/testimonials/Testimonials";
import Blog from "./components/marketing/blog/Blog";
import Contact from "./components/marketing/contact/Contact";
import Team from "./components/marketing/team/Team";
import Content from "./components/marketing/content/Content";
import Footer from "./components/marketing/footer/Footer";
import LogoCloud from "./components/marketing/logocloud/LogoCloud";
import Banner from "./components/marketing/banner/Banner";
import NavBar from "./components/marketing/navbar/NavBar";
import Landing from "./components/marketing/landing/Landing";
import Application from "./components/application/Application";
import ActionPanel from "./components/application/actionpanel/ActionPanel";
import Alert from "./components/application/alert/Alert";
import Breadcrumb from "./components/application/breadcrumb/Breadcrumb";
import Container from "./components/application/container/Container";
import DescriptionList from "./components/application/descriptionlist/DescriptionList";
import Dashboard from "./components/application/dashboard/Dashboard";
import DialogBlock from "./components/application/dialog/Dialog";
import CardHeading from "./components/application/cardheading/CardHeading";
import DetailScreen from "./components/application/detailscreen/DetailScreen";
import Divider from "./components/application/divider/Divider";
import Feed from "./components/application/feed/Feed";
import FooterApp from "./components/application/footer/Footer";
import FormLayout from "./components/application/formlayout/FormLayout";
import GridList from "./components/application/gridlist/GridList";
import ListContainer from "./components/application/listcontainer/ListContainer";
import MultiColumnLayout from "./components/application/multicolumnlayout/MultiColumnLayout";
import NavBarApp from "./components/application/navbar/NavBar";
import Notification from "./components/application/notification/Notification";
import PageHeading from "./components/application/pageheading/PageHeading";
import PageNotFound from "./components/application/pagenotfound/PageNotFound";
import Panel from "./components/application/panel/Panel";
import RadioGroup from "./components/application/radiogroup/RadioGroup";
import SectionHeading from "./components/application/sectionheading/SectionHeading";
import SettingScreen from "./components/application/settingscreen/SettingScreen";
import SidebarLayout from "./components/application/sidebarlayout/SidebarLayout";
import SidebarNav from "./components/application/sidebarnav/SidebarNav";
import SignIn from "./components/application/signin/SignIn";
import SlideOver from "./components/application/slideover/SlideOver";
import StackedLayout from "./components/application/stackedlayout/StackedLayout";
import StatsApp from "./components/application/stats/Stats";
import StackedList from "./components/application/stackedlist/StackedList";
import Steps from "./components/application/steps/Steps";
import Tabs from "./components/application/tabs/Tabs";
import VerticalNav from "./components/application/verticalnav/VerticalNav";
import Ecommerce from "./components/ecommerce/ECommerce";
import Storenavigation from "./components/ecommerce/storenavigation/StoreNavigation";
import StoreFront from "./components/ecommerce/storefront/StoreFront";
import ProductPage from "./components/ecommerce/productpage/ProductPage";
import ShoppingCartPage from "./components/ecommerce/shoppingcartpage/ShoppingCartPage";
import ShoppingCart from "./components/ecommerce/shoppingcart/ShoppingCart";
import Review from "./components/ecommerce/review/Review";
import PromoSection from "./components/ecommerce/promosection/PromoSection";
import ProductQuickView from "./components/ecommerce/productquickview/ProductQuickView";
import ProductOverview from "./components/ecommerce/productoverview/ProductOverview";
import ProducList from "./components/ecommerce/productlist/ProductList";
import ProductFeature from "./components/ecommerce/productfeature/ProductFeature";
import OrderSummary from "./components/ecommerce/ordersummary/OrderSummary";
import OrderHistoryPage from "./components/ecommerce/orderhistorypage/OrderHistoryPage";
import OrderHistory from "./components/ecommerce/orderhistory/OrderHistory";
import OrderDetailPage from "./components/ecommerce/orderdetailpage/OrderDetailPage";
import Incentive from "./components/ecommerce/incentive/Incentive";
import CheckoutPage from "./components/ecommerce/checkoutpage/CheckoutPage";
import CheckoutForm from "./components/ecommerce/checkoutform/CheckoutForm";
import CategoryPreview from "./components/ecommerce/categorypreview/CategoryPreview";
import CategoryPage from "./components/ecommerce/categorypage/CategoryPage";
import CategoryFilter from "./components/ecommerce/categoryfilter/CategoryFilter";

import { classNames } from "primereact/utils";
import PrimeReact from "primereact/api";

import "./App.scss";

const App = () => {
    const [visibleSidebar, setVisibleSidebar] = useState(false);
    const [visibleTopbarMenu, setVisibleTopbarMenu] = useState(false);
    const [inputStyle, setInputStyle] = useState("outlined");
    const [rippleEffect, setRippleEffect] = useState(true);
    const [dark, setDark] = useState(false);
    const [theme, setTheme] = useState("lara-light-indigo");
    const [scale, setScale] = useState(16);
    const scales = [12, 13, 14, 15, 16];
    const copyTooltipRef = useRef();

    const history = useHistory();
    const location = useLocation();

    PrimeReact.ripple = true;

    useEffect(() => {
        applyScale();
    }, [scale]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        copyTooltipRef &&
            copyTooltipRef.current &&
            copyTooltipRef.current.updateTargetEvents();
        if (
            location.pathname !== "/" &&
            location.pathname !== "/marketing" &&
            location.pathname !== "/application"
        ) {
            window.scrollTo(0, 0);
        }
        window.process = {
            ...window.process,
        };
    }, [location]);

    const onRipple = (e) => {
        PrimeReact.ripple = e.value;
        setRippleEffect(e.value);
    };

    const decrementScale = () => {
        setScale((prevState) => prevState - 1);
    };

    const incrementScale = () => {
        setScale((prevState) => prevState + 1);
    };

    const applyScale = () => {
        document.documentElement.style.fontSize = scale + "px";
    };

    const showTopbarMenu = (event) => {
        setVisibleTopbarMenu(true);
        event.preventDefault();
    };

    const changeTheme = (event, _theme, dark) => {
        let themeElement = document.getElementById("theme-link");
        themeElement.setAttribute(
            "href",
            themeElement.getAttribute("href").replace(theme, _theme)
        );
        setTheme(_theme);
        setDark(dark);
        event.preventDefault();
    };

    const routes = [
        { parent: "Marketing", child: "" },
        { parent: "Application", child: "" },
        { parent: "Documentation", child: "" },
        { parent: "Pricing", child: "" },
        { parent: "Free", child: "" },
        { parent: "E-Commerce", child: "" },
        { parent: "Marketing", child: "Hero" },
        { parent: "Marketing", child: "Feature" },
        { parent: "Marketing", child: "CTA" },
        { parent: "Marketing", child: "FAQ" },
        { parent: "Marketing", child: "Newsletter" },
        { parent: "Marketing", child: "Stats" },
        { parent: "Marketing", child: "Testimonials" },
        { parent: "Marketing", child: "Blog" },
        { parent: "Marketing", child: "Contact" },
        { parent: "Marketing", child: "Team" },
        { parent: "Marketing", child: "Content" },
        { parent: "Marketing", child: "Pricing" },
        { parent: "Marketing", child: "Footer" },
        { parent: "Marketing", child: "Logo Cloud" },
        { parent: "Marketing", child: "Navbar" },
        { parent: "Marketing", child: "Banner" },
        { parent: "Marketing", child: "Landing" },
        { parent: "Application", child: "Stacked Layout" },
        { parent: "Application", child: "Sidebar Layout" },
        { parent: "Application", child: "Multi Column Layout" },
        { parent: "Application", child: "Page Heading" },
        { parent: "Application", child: "Card Heading" },
        { parent: "Application", child: "Section Heading" },
        { parent: "Application", child: "Description List" },
        { parent: "Application", child: "Stats" },
        { parent: "Application", child: "Stacked List" },
        { parent: "Application", child: "Grid List" },
        { parent: "Application", child: "Feed" },
        { parent: "Application", child: "Form Layout" },
        { parent: "Application", child: "Sign in" },
        { parent: "Application", child: "Radio Group" },
        { parent: "Application", child: "Action Panel" },
        { parent: "Application", child: "Alert" },
        { parent: "Application", child: "Navbar" },
        { parent: "Application", child: "Tabs" },
        { parent: "Application", child: "Vertical Nav" },
        { parent: "Application", child: "Sidebar Navigation" },
        { parent: "Application", child: "Breadcrumb" },
        { parent: "Application", child: "Steps" },
        { parent: "Application", child: "Footer" },
        { parent: "Application", child: "Dialog" },
        { parent: "Application", child: "SlideOver" },
        { parent: "Application", child: "Notification" },
        { parent: "Application", child: "Container" },
        { parent: "Application", child: "Panel" },
        { parent: "Application", child: "List Container" },
        { parent: "Application", child: "Divider" },
        { parent: "Application", child: "Dashboard" },
        { parent: "Application", child: "Detail" },
        { parent: "Application", child: "Setting" },
        { parent: "E-Commerce", child: "Product List" },
        { parent: "E-Commerce", child: "Product OverView" },
        { parent: "E-Commerce", child: "Category Preview" },
        { parent: "E-Commerce", child: "Shopping Cart" },
        { parent: "E-Commerce", child: "Category Filter" },
        { parent: "E-Commerce", child: "Product Quickview" },
        { parent: "E-Commerce", child: "Product Feature" },
        { parent: "E-Commerce", child: "Store Navigation" },
        { parent: "E-Commerce", child: "Promo Section" },
        { parent: "E-Commerce", child: "Checkout Form" },
        { parent: "E-Commerce", child: "Review" },
        { parent: "E-Commerce", child: "Order Summary" },
        { parent: "E-Commerce", child: "Order History" },
        { parent: "E-Commerce", child: "Incentive" },
        { parent: "E-Commerce", child: "Storefront" },
        { parent: "E-Commerce", child: "Product Page" },
        { parent: "E-Commerce", child: "Category Page" },
        { parent: "E-Commerce", child: "Shopping Cart Page" },
        { parent: "E-Commerce", child: "Checkout Page" },
        { parent: "E-Commerce", child: "Order Detail Page" },
        { parent: "E-Commerce", child: "Order History Page" },
    ];

    const convertRoute = (route) => {
        return route.replace(/\s/g, "").toLowerCase();
    };

    const parseRoute = (route) => {
        return route.split("-").join("");
    };

    const useBreadcrumb = () => {
        const pathname =
            location.pathname === "/"
                ? ["", ""]
                : location.pathname.split("/").slice(1);

        const activeRoute = routes.filter((route) => {
            if (pathname.length === 1 && route.child === "") {
                if (route.parent.split("-")) {
                    return (
                        convertRoute(parseRoute(route.parent)) === pathname[0]
                    );
                }

                return convertRoute(route.parent) === pathname[0];
            } else {
                if (route.parent.split("-")) {
                    return (
                        convertRoute(parseRoute(route.parent)) ===
                            pathname[0] &&
                        convertRoute(route.child) === pathname[1]
                    );
                }

                return (
                    convertRoute(route.parent) === pathname[0] &&
                    convertRoute(route.child) === pathname[1]
                );
            }
        });

        const parent = activeRoute.length ? activeRoute[0].parent : "";
        const child = activeRoute.length ? activeRoute[0].child : "";
        const to = `/${
            parent.split("-")
                ? parent.split("-").join("").toLowerCase()
                : parent.toLowerCase()
        }`;

        return (
            <ul>
                <li>
                    <NavLink to="/">
                        <i className="pi pi-home"></i>
                    </NavLink>
                </li>
                <li>
                    <div className="chevron">/</div>
                </li>
                {parent && (
                    <li>
                        <NavLink to={to}>{parent}</NavLink>
                    </li>
                )}
                {child !== "" && (
                    <>
                        <li>
                            <div className="chevron">/</div>
                        </li>
                        <li>
                            <a>{child}</a>
                        </li>
                    </>
                )}
            </ul>
        );
    };

    const breadcrumb = useBreadcrumb();

    return (
        <>
            <Tooltip
                ref={copyTooltipRef}
                target=".block-action-copy:not(.p-disabled)"
                position="bottom"
                content="Copied to clipboard"
                event="focus"
            />

            <div
                className={classNames("layout-wrapper", {
                    "p-input-filled": inputStyle === "filled",
                    "p-ripple-disabled": !rippleEffect,
                    "layout-wrapper-dark": dark,
                })}
            >
                <div className="layout-topbar">
                    <div style={{ cursor: "pointer" }} className="topbar-logo">
                        <a onClick={() => history.push("/")}>
                            <img
                                src={
                                    dark
                                        ? "assets/images/logo-primeblocks-dark.svg"
                                        : "assets/images/logo-primeblocks.svg"
                                }
                                className="logo"
                                alt="PrimeBlocks Logo"
                            />
                            <img
                                src="assets/images/icon-primeblocks.svg"
                                className="icon"
                                alt="PrimeBlocks"
                            />
                        </a>
                    </div>

                    <div className="topbar-actions">
                        <a
                            className="topbar-menu-button"
                            onClick={showTopbarMenu}
                        >
                            <i className="pi pi-bars"></i>
                        </a>
                        <ul className="topbar-menu">
                            <li>
                                <NavLink
                                    exact
                                    to="/"
                                    className="router-link"
                                    activeClassName="router-link-active"
                                >
                                    BLOCKS
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/documentation"
                                    className="router-link"
                                    activeClassName="router-link-active"
                                >
                                    DOCUMENTATION
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/pricing"
                                    className="router-link"
                                    activeClassName="router-link-active"
                                >
                                    PRICING
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="layout-breadcrumb">{breadcrumb}</div>

                <div className="layout-content">
                    <Route path="/" exact render={() => <Home dark={dark} />} />
                    <Route path="/pricing" exact component={PricingPage} />
                    <Route
                        path="/documentation"
                        exact
                        component={Documentation}
                    />
                    <Route path="/free" exact component={Free} />
                    <Route
                        path="/marketing"
                        exact
                        render={() => <Marketing dark={dark} />}
                    />
                    <Route path="/marketing/hero" exact component={Hero} />
                    <Route
                        path="/marketing/feature"
                        exact
                        component={Feature}
                    />
                    <Route path="/marketing/cta" exact component={Cta} />
                    <Route
                        path="/marketing/pricing"
                        exact
                        component={Pricing}
                    />
                    <Route path="/marketing/faq" exact component={Faq} />
                    <Route
                        path="/marketing/newsletter"
                        exact
                        component={Newsletter}
                    />
                    <Route path="/marketing/stats" exact component={Stats} />
                    <Route
                        path="/marketing/testimonials"
                        exact
                        component={Testimonials}
                    />
                    <Route path="/marketing/blog" exact component={Blog} />
                    <Route
                        path="/marketing/contact"
                        exact
                        component={Contact}
                    />
                    <Route path="/marketing/team" exact component={Team} />
                    <Route
                        path="/marketing/content"
                        exact
                        component={Content}
                    />
                    <Route path="/marketing/footer" exact component={Footer} />
                    <Route
                        path="/marketing/logocloud"
                        exact
                        component={LogoCloud}
                    />
                    <Route path="/marketing/banner" exact component={Banner} />
                    <Route path="/marketing/navbar" exact component={NavBar} />
                    <Route
                        path="/marketing/landing"
                        exact
                        component={Landing}
                    />
                    <Route
                        path="/application"
                        exact
                        render={() => <Application dark={dark} />}
                    />
                    <Route
                        path="/application/actionpanel"
                        exact
                        component={ActionPanel}
                    />
                    <Route path="/application/alert" exact component={Alert} />
                    <Route
                        path="/application/breadcrumb"
                        exact
                        component={Breadcrumb}
                    />
                    <Route
                        path="/application/cardheading"
                        exact
                        component={CardHeading}
                    />
                    <Route
                        path="/application/container"
                        exact
                        component={Container}
                    />
                    <Route
                        path="/application/descriptionlist"
                        exact
                        component={DescriptionList}
                    />
                    <Route
                        path="/application/dashboard"
                        exact
                        component={Dashboard}
                    />
                    <Route
                        path="/application/dialog"
                        exact
                        component={DialogBlock}
                    />
                    <Route
                        path="/application/detailscreen"
                        exact
                        component={DetailScreen}
                    />
                    <Route
                        path="/application/divider"
                        exact
                        component={Divider}
                    />
                    <Route path="/application/feed" exact component={Feed} />
                    <Route
                        path="/application/footer"
                        exact
                        component={FooterApp}
                    />
                    <Route
                        path="/application/formlayout"
                        exact
                        component={FormLayout}
                    />
                    <Route
                        path="/application/gridlist"
                        exact
                        component={GridList}
                    />
                    <Route
                        path="/application/listcontainer"
                        exact
                        component={ListContainer}
                    />
                    <Route
                        path="/application/multicolumnlayout"
                        exact
                        component={MultiColumnLayout}
                    />
                    <Route
                        path="/application/navbar"
                        exact
                        component={NavBarApp}
                    />
                    <Route
                        path="/application/notification"
                        exact
                        component={Notification}
                    />
                    <Route
                        path="/application/pageheading"
                        exact
                        component={PageHeading}
                    />
                    <Route
                        path="/application/pagenotfound"
                        exact
                        component={PageNotFound}
                    />
                    <Route path="/application/panel" exact component={Panel} />
                    <Route
                        path="/application/radiogroup"
                        exact
                        component={RadioGroup}
                    />
                    <Route
                        path="/application/sectionheading"
                        exact
                        component={SectionHeading}
                    />
                    <Route
                        path="/application/settingScreen"
                        exact
                        component={SettingScreen}
                    />
                    <Route
                        path="/application/sidebarlayout"
                        exact
                        component={SidebarLayout}
                    />
                    <Route
                        path="/application/sidebarnav"
                        exact
                        component={SidebarNav}
                    />
                    <Route
                        path="/application/signin"
                        exact
                        component={SignIn}
                    />
                    <Route
                        path="/application/slideover"
                        exact
                        component={SlideOver}
                    />
                    <Route
                        path="/application/stackedLayout"
                        exact
                        component={StackedLayout}
                    />
                    <Route
                        path="/application/stats"
                        exact
                        component={StatsApp}
                    />
                    <Route
                        path="/application/stackedlist"
                        exact
                        component={StackedList}
                    />
                    <Route path="/application/steps" exact component={Steps} />
                    <Route path="/application/tabs" exact component={Tabs} />
                    <Route
                        path="/application/verticalnav"
                        exact
                        component={VerticalNav}
                    />
                    <Route
                        path="/ecommerce"
                        exact
                        render={() => <Ecommerce dark={dark} />}
                    />
                    <Route
                        path="/ecommerce/storenavigation"
                        exact
                        component={Storenavigation}
                    />
                    <Route
                        path="/ecommerce/storefront"
                        exact
                        component={StoreFront}
                    />
                    <Route
                        path="/ecommerce/productpage"
                        exact
                        component={ProductPage}
                    />
                    <Route
                        path="/ecommerce/shoppingcartpage"
                        exact
                        component={ShoppingCartPage}
                    />
                    <Route
                        path="/ecommerce/shoppingcart"
                        exact
                        component={ShoppingCart}
                    />
                    <Route path="/ecommerce/review" exact component={Review} />
                    <Route
                        path="/ecommerce/promosection"
                        exact
                        component={PromoSection}
                    />
                    <Route
                        path="/ecommerce/productquickview"
                        exact
                        component={ProductQuickView}
                    />
                    <Route
                        path="/ecommerce/productoverview"
                        exact
                        component={ProductOverview}
                    />
                    <Route
                        path="/ecommerce/productlist"
                        exact
                        component={ProducList}
                    />
                    <Route
                        path="/ecommerce/productfeature"
                        exact
                        component={ProductFeature}
                    />
                    <Route
                        path="/ecommerce/ordersummary"
                        exact
                        component={OrderSummary}
                    />
                    <Route
                        path="/ecommerce/orderhistorypage"
                        exact
                        component={OrderHistoryPage}
                    />
                    <Route
                        path="/ecommerce/orderhistory"
                        exact
                        component={OrderHistory}
                    />
                    <Route
                        path="/ecommerce/orderdetailpage"
                        exact
                        component={OrderDetailPage}
                    />
                    <Route
                        path="/ecommerce/Incentive"
                        exact
                        component={Incentive}
                    />
                    <Route
                        path="/ecommerce/checkoutpage"
                        exact
                        component={CheckoutPage}
                    />
                    <Route
                        path="/ecommerce/checkoutform"
                        exact
                        component={CheckoutForm}
                    />
                    <Route
                        path="/ecommerce/categorypage"
                        exact
                        component={CategoryPage}
                    />
                    <Route
                        path="/ecommerce/categoryfilter"
                        exact
                        component={CategoryFilter}
                    />
                    <Route
                        path="/ecommerce/categorypreview"
                        exact
                        component={CategoryPreview}
                    />
                </div>

                <a
                    tabIndex="0"
                    className="layout-config-button"
                    onClick={() => setVisibleSidebar(true)}
                >
                    <i className="pi pi-cog"></i>
                </a>

                <Sidebar
                    position="right"
                    visible={visibleTopbarMenu}
                    onHide={() => setVisibleTopbarMenu(false)}
                >
                    <ul className="topbar-mobile-menu">
                        <li>
                            <NavLink
                                exact
                                to="/"
                                className="router-link"
                                activeClassName="router-link-active"
                            >
                                BLOCKS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/documentation"
                                className="router-link"
                                activeClassName="router-link-active"
                            >
                                DOCUMENTATION
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/pricing"
                                className="router-link"
                                activeClassName="router-link-active"
                            >
                                PRICING
                            </NavLink>
                        </li>
                    </ul>
                </Sidebar>

                <Sidebar
                    visible={visibleSidebar}
                    onHide={() => setVisibleSidebar(false)}
                    position="right"
                    className="layout-config p-sidebar-md"
                >
                    <div className="config-title" style={{ marginTop: "0" }}>
                        Component Scale
                    </div>
                    <div className="config-scale">
                        <Button
                            type="button"
                            icon="pi pi-minus"
                            onClick={() => decrementScale()}
                            className="p-button-rounded p-button-text"
                            disabled={scale === scales[0]}
                        ></Button>
                        {scales.map((s, i) => {
                            return (
                                <i
                                    key={i}
                                    className={classNames(
                                        "pi pi-circle-on p-m-1 scale-icon",
                                        { "scale-active": s === scale }
                                    )}
                                ></i>
                            );
                        })}
                        <Button
                            type="button"
                            icon="pi pi-plus"
                            onClick={() => incrementScale()}
                            className="p-button-rounded p-button-text"
                            disabled={scale === scales[scales.length - 1]}
                        ></Button>
                    </div>

                    <div className="config-title">Input Style</div>
                    <div className="formgroup-inline">
                        <div className="field-radiobutton">
                            <RadioButton
                                name="inputstyle"
                                value="outlined"
                                checked={inputStyle === "outlined"}
                                onChange={(e) => setInputStyle(e.value)}
                                inputId="input_outlined"
                            ></RadioButton>
                            <label htmlFor="input_outlined">Outlined</label>
                        </div>
                        <div className="field-radiobutton">
                            <RadioButton
                                name="inputstyle"
                                value="filled"
                                checked={inputStyle === "filled"}
                                onChange={(e) => setInputStyle(e.value)}
                                inputId="input_filled"
                            ></RadioButton>
                            <label htmlFor="input_filled">Filled</label>
                        </div>
                    </div>

                    <div className="config-title">Ripple Effect</div>
                    <InputSwitch checked={rippleEffect} onChange={onRipple} />

                    <div className="config-title">Bootstrap</div>
                    <div className="grid themes-grid">
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(
                                        event,
                                        "bootstrap4-light-blue",
                                        false
                                    )
                                }
                            >
                                <img
                                    src="assets/images/themes/bootstrap4-light-blue.svg"
                                    alt="Bootstrap Light Blue"
                                />
                            </a>
                            <span>Blue</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(
                                        event,
                                        "bootstrap4-light-purple",
                                        false
                                    )
                                }
                            >
                                <img
                                    src="assets/images/themes/bootstrap4-light-purple.svg"
                                    alt="Bootstrap Light Purple"
                                />
                            </a>
                            <span>Purple</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(
                                        event,
                                        "bootstrap4-dark-blue",
                                        true
                                    )
                                }
                            >
                                <img
                                    src="assets/images/themes/bootstrap4-dark-blue.svg"
                                    alt="Bootstrap Dark Blue"
                                />
                            </a>
                            <span>Blue</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(
                                        event,
                                        "bootstrap4-dark-purple",
                                        true
                                    )
                                }
                            >
                                <img
                                    src="assets/images/themes/bootstrap4-dark-purple.svg"
                                    alt="Bootstrap Dark Purple"
                                />
                            </a>
                            <span>Purple</span>
                        </div>
                    </div>

                    <div className="config-title">Material Design</div>
                    <div className="grid themes-grid">
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(event, "md-light-indigo", false)
                                }
                            >
                                <img
                                    src="assets/images/themes/md-light-indigo.svg"
                                    alt="Material Light Indigo"
                                />
                            </a>
                            <span>Indigo</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(
                                        event,
                                        "md-light-deeppurple",
                                        false
                                    )
                                }
                            >
                                <img
                                    src="assets/images/themes/md-light-deeppurple.svg"
                                    alt="Material Light Deep Purple"
                                />
                            </a>
                            <span>Deep Purple</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(event, "md-dark-indigo", true)
                                }
                            >
                                <img
                                    src="assets/images/themes/md-dark-indigo.svg"
                                    alt="Material Dark Indigo"
                                />
                            </a>
                            <span>Indigo</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(
                                        event,
                                        "md-dark-deeppurple",
                                        true
                                    )
                                }
                            >
                                <img
                                    src="assets/images/themes/md-dark-deeppurple.svg"
                                    alt="Material Dark Deep Purple"
                                />
                            </a>
                            <span>Deep Purple</span>
                        </div>
                    </div>

                    <div className="config-title">Material Design Compact</div>
                    <div className="grid themes-grid">
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(
                                        event,
                                        "mdc-light-indigo",
                                        false
                                    )
                                }
                            >
                                <img
                                    src="assets/images/themes/md-light-indigo.svg"
                                    alt="Material Compact Light Indigo"
                                />
                            </a>
                            <span>Indigo</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(
                                        event,
                                        "mdc-light-deeppurple",
                                        false
                                    )
                                }
                            >
                                <img
                                    src="assets/images/themes/md-light-deeppurple.svg"
                                    alt="Material Compact Deep Purple"
                                />
                            </a>
                            <span>Deep Purple</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(event, "mdc-dark-indigo", true)
                                }
                            >
                                <img
                                    src="assets/images/themes/md-dark-indigo.svg"
                                    alt="Material Compact Dark Indigo"
                                />
                            </a>
                            <span>Indigo</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(
                                        event,
                                        "mdc-dark-deeppurple",
                                        true
                                    )
                                }
                            >
                                <img
                                    src="assets/images/themes/md-dark-deeppurple.svg"
                                    alt="Material Compact Dark Deep Purple"
                                />
                            </a>
                            <span>Deep Purple</span>
                        </div>
                    </div>

                    <div className="config-title">Tailwind</div>
                    <div className="grid themes-grid">
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(event, "tailwind-light", false)
                                }
                            >
                                <img
                                    src="assets/images/themes/tailwind-light.png"
                                    alt="Tailwind Light"
                                />
                            </a>
                            <span>Light</span>
                        </div>
                    </div>

                    <div className="config-title">Fluent UI</div>
                    <div className="grid themes-grid">
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(event, "fluent-light", false)
                                }
                            >
                                <img
                                    src="assets/images/themes/fluent-light.png"
                                    alt="Fluent Light"
                                />
                            </a>
                            <span>Light</span>
                        </div>
                    </div>

                    <div className="config-title">PrimeOne Design - 2022</div>
                    <div className="grid themes-grid">
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(
                                        event,
                                        "lara-light-indigo",
                                        false
                                    )
                                }
                            >
                                <img
                                    src="assets/images/themes/lara-light-indigo.svg"
                                    alt="Lara Light Indigo"
                                />
                            </a>
                            <span>Lara Light Indigo</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(event, "lara-dark-indigo", true)
                                }
                            >
                                <img
                                    src="assets/images/themes/lara-dark-indigo.svg"
                                    alt="Lara Dark Indigo"
                                />
                            </a>
                            <span>Lara Dark Indigo</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(
                                        event,
                                        "lara-light-purple",
                                        false
                                    )
                                }
                            >
                                <img
                                    src="assets/images/themes/lara-light-purple.svg"
                                    alt="Lara Light Purple"
                                />
                            </a>
                            <span>Lara Light Purple</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(event, "lara-dark-purple", true)
                                }
                            >
                                <img
                                    src="assets/images/themes/lara-dark-purple.svg"
                                    alt="Lara Dark Purple"
                                />
                            </a>
                            <span>Lara Dark Purple</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(event, "lara-light-blue", false)
                                }
                            >
                                <img
                                    src="assets/images/themes/lara-light-blue.png"
                                    alt="Lara Light Blue"
                                />
                            </a>
                            <span>Lara Light Blue</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(event, "lara-dark-blue", true)
                                }
                            >
                                <img
                                    src="assets/images/themes/lara-dark-blue.png"
                                    alt="Lara Dark Blue"
                                />
                            </a>
                            <span>Lara Dark Blue</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(event, "lara-light-teal", false)
                                }
                            >
                                <img
                                    src="assets/images/themes/lara-light-teal.png"
                                    alt="Lara Light Teal"
                                />
                            </a>
                            <span>Lara Light Teal</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(event, "lara-dark-teal", true)
                                }
                            >
                                <img
                                    src="assets/images/themes/lara-dark-teal.png"
                                    alt="Lara Dark Teal"
                                />
                            </a>
                            <span>Lara Dark Teal</span>
                        </div>
                    </div>

                    <div className="config-title">PrimeOne Design - 2021</div>
                    <div className="grid themes-grid">
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(event, "saga-blue", false)
                                }
                            >
                                <img
                                    src="assets/images/themes/saga-blue.png"
                                    alt="Saga Blue"
                                />
                            </a>
                            <span>Saga Blue</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(event, "saga-green", false)
                                }
                            >
                                <img
                                    src="assets/images/themes/saga-green.png"
                                    alt="Saga Green"
                                />
                            </a>
                            <span>Saga Green</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(event, "saga-orange", false)
                                }
                            >
                                <img
                                    src="assets/images/themes/saga-orange.png"
                                    alt="Saga Orange"
                                />
                            </a>
                            <span>Saga Orange</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(event, "saga-purple", false)
                                }
                            >
                                <img
                                    src="assets/images/themes/saga-purple.png"
                                    alt="Saga Purple"
                                />
                            </a>
                            <span>Saga Purple</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(event, "vela-blue", true)
                                }
                            >
                                <img
                                    src="assets/images/themes/vela-blue.png"
                                    alt="Vela Blue"
                                />
                            </a>
                            <span>Vela Blue</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(event, "vela-green", true)
                                }
                            >
                                <img
                                    src="assets/images/themes/vela-green.png"
                                    alt="Vela Green"
                                />
                            </a>
                            <span>Vela Green</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                onClick={(event) =>
                                    changeTheme(event, "vela-orange", true)
                                }
                            >
                                <img
                                    src="assets/images/themes/vela-orange.png"
                                    alt="Vela Orange"
                                />
                            </a>
                            <span>Vela Orange</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(event, "vela-purple", true)
                                }
                            >
                                <img
                                    src="assets/images/themes/vela-purple.png"
                                    alt="Vela Purple"
                                />
                            </a>
                            <span>Vela Purple</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(event, "arya-blue", true)
                                }
                            >
                                <img
                                    src="assets/images/themes/arya-blue.png"
                                    alt="Arya Blue"
                                />
                            </a>
                            <span>Arya Blue</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(event, "arya-green", true)
                                }
                            >
                                <img
                                    src="assets/images/themes/arya-green.png"
                                    alt="Arya Green"
                                />
                            </a>
                            <span>Arya Green</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(event, "arya-orange", true)
                                }
                            >
                                <img
                                    src="assets/images/themes/arya-orange.png"
                                    alt="Arya Orange"
                                />
                            </a>
                            <span>Arya Orange</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(event, "arya-purple", true)
                                }
                            >
                                <img
                                    src="assets/images/themes/arya-purple.png"
                                    alt="Arya Purple"
                                />
                            </a>
                            <span>Arya Purple</span>
                        </div>
                    </div>

                    <div className="config-title">Premium Themes</div>

                    <div className="grid themes-grid">
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(event, "soho-light", false)
                                }
                            >
                                <img
                                    src="assets/images/themes/soho-light.png"
                                    alt="Soho Light"
                                />
                            </a>
                            <span>Soho Light</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(event, "soho-dark", true)
                                }
                            >
                                <img
                                    src="assets/images/themes/soho-dark.png"
                                    alt="Soho Dark"
                                />
                            </a>
                            <span>Soho Dark</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(event, "viva-light", false)
                                }
                            >
                                <img
                                    src="assets/images/themes/viva-light.svg"
                                    alt="Viva Light"
                                />
                            </a>
                            <span>Viva Light</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(event, "viva-dark", true)
                                }
                            >
                                <img
                                    src="assets/images/themes/viva-dark.svg"
                                    alt="Viva Dark"
                                />
                            </a>
                            <span>Viva Dark</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(event, "mira", false)
                                }
                            >
                                <img
                                    src="assets/images/themes/mira.jpg"
                                    alt="Mira"
                                />
                            </a>
                            <span>Mira</span>
                        </div>
                        <div className="col-6 sm:col-3">
                            <a
                                className="cursor-pointer inline-block"
                                onClick={(event) =>
                                    changeTheme(event, "nano", false)
                                }
                            >
                                <img
                                    src="assets/images/themes/nano.jpg"
                                    alt="Nano"
                                />
                            </a>
                            <span>Nano</span>
                        </div>
                    </div>
                </Sidebar>
            </div>
        </>
    );
};

export default App;
