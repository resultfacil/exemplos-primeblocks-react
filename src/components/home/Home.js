import React, { useRef } from "react";
import { Button } from "primereact/button";
import { NavLink, useHistory } from "react-router-dom";

const Home = (props) => {
    const application = useRef(null);
    const history = useHistory();

    const viewBlocks = (el) => {
        el.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div className="introduction">
                <div className="introduction-content shadow-2">
                    <div className="introduction-title text-900">
                        React UI Blocks
                    </div>
                    <div className="introduction-subtitle">
                        Powered by PrimeReact
                    </div>
                    <p>
                        <strong>370+</strong> ready to use UI blocks to build
                        spectacular applications in no time.
                    </p>
                    <div className="flex flex-nowrap flex-column align-items-center sm:flex-row sm:justify-content-center">
                        <Button
                            label="Browse All"
                            onClick={() => viewBlocks(application)}
                            className="w-full sm:w-auto font-bold p-3 mb-3 sm:mb-0 sm:mr-3"
                        />
                        <Button
                            onClick={() => history.push("/free")}
                            label="Free Blocks"
                            className="w-full sm:w-auto p-button-outlined font-bold p-3"
                        />
                    </div>
                </div>
            </div>

            <div ref={application} className="block-category-title">
                Application UI
            </div>
            <div className="block-category">
                <div className="block-group">
                    <span className="block-group-title">
                        Application Shells
                    </span>
                    <div className="block-group-content">
                        <div className="grid">
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/stackedlayout">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-stackedlayout-dark.svg"
                                                : "assets/images/placeholders/placeholder-stackedlayout.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Stacked Layout"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Stacked Layout
                                        </span>
                                        <span className="block-count">
                                            7 Blocks
                                        </span>
                                    </div>
                                    <span className="badge-new">2 New</span>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/sidebarlayout">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-sidebarlayouts-dark.svg"
                                                : "assets/images/placeholders/placeholder-sidebarlayouts.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Sidebar Layout"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Sidebar Layout
                                        </span>
                                        <span className="block-count">
                                            13 Blocks
                                        </span>
                                    </div>
                                    <span className="badge-new">1 New</span>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/multicolumnlayout">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-multicolumnlayouts-dark.svg"
                                                : "assets/images/placeholders/placeholder-multicolumnlayouts.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Multi-Column Layout"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Multi-Column Layout
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
                    <span className="block-group-title">Samples</span>
                    <div className="block-group-content">
                        <div className="grid">
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/dashboard">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-dashboard-dark.svg"
                                                : "assets/images/placeholders/placeholder-dashboard.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Dashboard"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Dashboard
                                        </span>
                                        <span className="block-count">
                                            3 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/detailscreen">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-detailscreens-dark.svg"
                                                : "assets/images/placeholders/placeholder-detailscreens.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Detail"
                                    />
                                </NavLink>
                                <span className="block-name">Detail</span>
                                <span className="block-count">1 Block</span>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/settingscreen">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-settingscreens-dark.svg"
                                                : "assets/images/placeholders/placeholder-settingscreens.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Settings"
                                    />
                                </NavLink>
                                <span className="block-name">Settings</span>
                                <span className="block-count">1 Block</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-group">
                    <span className="block-group-title">Headings</span>
                    <div className="block-group-content">
                        <div className="grid">
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/pageheading">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-pageheadings-dark.svg"
                                                : "assets/images/placeholders/placeholder-pageheadings.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Page Heading"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Page Heading
                                        </span>
                                        <span className="block-count">
                                            13 Blocks
                                        </span>
                                    </div>
                                    <span className="badge-new">1 New</span>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/cardheading">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-cardheadings-dark.svg"
                                                : "assets/images/placeholders/placeholder-cardheadings.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Card Heading"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Card Heading
                                        </span>
                                        <span className="block-count">
                                            7 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/sectionheading">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-sectionheadings-dark.svg"
                                                : "assets/images/placeholders/placeholder-sectionheadings.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Section Heading"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Section Heading
                                        </span>
                                        <span className="block-count">
                                            6 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-group">
                    <span className="block-group-title">Data Display</span>
                    <div className="block-group-content">
                        <div className="grid">
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/descriptionlist">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-descriptionlist-dark.svg"
                                                : "assets/images/placeholders/placeholder-descriptionlist.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Description List"
                                    />
                                </NavLink>
                                <span className="block-name">
                                    Description List
                                </span>
                                <span className="block-count">4 Blocks</span>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/stats">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-stats-data-dark.svg"
                                                : "assets/images/placeholders/placeholder-stats-data.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Stats"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Stats
                                        </span>
                                        <span className="block-count">
                                            11 Blocks
                                        </span>
                                    </div>
                                    <span className="badge-new">2 New</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-group">
                    <span className="block-group-title">Lists</span>
                    <div className="block-group-content">
                        <div className="grid">
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/stackedlist">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-stackedlists-dark.svg"
                                                : "assets/images/placeholders/placeholder-stackedlists.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Stacked List"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Stacked List
                                        </span>
                                        <span className="block-count">
                                            6 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/gridlist">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-gridlists-dark.svg"
                                                : "assets/images/placeholders/placeholder-gridlists.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Grid List"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Grid List
                                        </span>
                                        <span className="block-count">
                                            8 Blocks
                                        </span>
                                    </div>
                                    <span className="badge-new">1 New</span>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/feed">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-feeds-dark.svg"
                                                : "assets/images/placeholders/placeholder-feeds.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Feed"
                                    />
                                </NavLink>
                                <span className="block-name">Feed</span>
                                <span className="block-count">3 Blocks</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-group">
                    <span className="block-group-title">Forms</span>
                    <div className="block-group-content">
                        <div className="grid">
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/formlayout">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-formlayouts-dark.svg"
                                                : "assets/images/placeholders/placeholder-formlayouts.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Form Layout"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Form Layout
                                        </span>
                                        <span className="block-count">
                                            4 Blocks
                                        </span>
                                    </div>
                                    <span className="badge-new">1 New</span>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/signin">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-signin-dark.svg"
                                                : "assets/images/placeholders/placeholder-signin.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Sign-in"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Sign-in
                                        </span>
                                        <span className="block-count">
                                            5 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/radiogroup">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-radiogroups-dark.svg"
                                                : "assets/images/placeholders/placeholder-radiogroups.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Radio Group"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Radio Group
                                        </span>
                                        <span className="block-count">
                                            7 Blocks
                                        </span>
                                    </div>
                                    <span className="badge-new">1 New</span>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/actionpanel">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-actionpanels-dark.svg"
                                                : "assets/images/placeholders/placeholder-actionpanels.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Action Panel"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Action Panel
                                        </span>
                                        <span className="block-count">
                                            6 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-group">
                    <span className="block-group-title">Feedback</span>
                    <div className="block-group-content">
                        <div className="grid">
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/alert">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-alert-dark.svg"
                                                : "assets/images/placeholders/placeholder-alert.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Alert"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Alert
                                        </span>
                                        <span className="block-count">
                                            4 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-group">
                    <span className="block-group-title">Navigation</span>
                    <div className="block-group-content">
                        <div className="grid">
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/navbar">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-app-navbar-dark.svg"
                                                : "assets/images/placeholders/placeholder-app-navbar.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Navbar"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Navbar
                                        </span>
                                        <span className="block-count">
                                            11 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/tabs">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-tabs-dark.svg"
                                                : "assets/images/placeholders/placeholder-tabs.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Tabs"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">Tabs</span>
                                        <span className="block-count">
                                            6 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/verticalnav">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-verticalnavigation-dark.svg"
                                                : "assets/images/placeholders/placeholder-verticalnavigation.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Vertical Navigation"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Vertical Navigation
                                        </span>
                                        <span className="block-count">
                                            7 Blocks
                                        </span>
                                    </div>
                                    <span className="badge-new">2 New</span>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/sidebarnav">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-sidebarnavigation-dark.svg"
                                                : "assets/images/placeholders/placeholder-sidebarnavigation.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Sidebar Navigation"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Sidebar Navigation
                                        </span>
                                        <span className="block-count">
                                            5 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/breadcrumb">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-breadcrumb-dark.svg"
                                                : "assets/images/placeholders/placeholder-breadcrumb.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Breadcrumb"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Breadcrumbs
                                        </span>
                                        <span className="block-count">
                                            5 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/steps">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-steps-dark.svg"
                                                : "assets/images/placeholders/placeholder-steps.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Steps"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Steps
                                        </span>
                                        <span className="block-count">
                                            6 Blocks
                                        </span>
                                    </div>
                                    <span className="badge-new">1 New</span>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/footer">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-footers-appui-dark.svg"
                                                : "assets/images/placeholders/placeholder-footers-appui.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Footer"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Footer
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
                    <span className="block-group-title">Overlays</span>
                    <div className="block-group-content">
                        <div className="grid">
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/dialog">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-dialog-dark.svg"
                                                : "assets/images/placeholders/placeholder-dialog.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Modal"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Dialog
                                        </span>
                                        <span className="block-count">
                                            3 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/slideover">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-slideovers-dark.svg"
                                                : "assets/images/placeholders/placeholder-slideovers.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Slide-over"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            SlideOver
                                        </span>
                                        <span className="block-count">
                                            10 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/notification">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-notification-dark.svg"
                                                : "assets/images/placeholders/placeholder-notification.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Notification"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Notification
                                        </span>
                                        <span className="block-count">
                                            7 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-group">
                    <span className="block-group-title">Pages</span>
                    <div className="block-group-content">
                        <div className="grid">
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/pagenotfound">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-pagenotfound-dark.svg"
                                                : "assets/images/placeholders/placeholder-pagenotfound.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Container"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Page Not Found
                                        </span>
                                        <span className="block-count">
                                            4 Blocks
                                        </span>
                                    </div>
                                    <span className="badge-new">1 New</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-group">
                    <span className="block-group-title">Layout</span>
                    <div className="block-group-content">
                        <div className="grid">
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/container">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-containers-dark.svg"
                                                : "assets/images/placeholders/placeholder-containers.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Container"
                                    />
                                </NavLink>
                                <span className="block-name">Container</span>
                                <span className="block-count">5 Blocks</span>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/panel">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-panels-dark.svg"
                                                : "assets/images/placeholders/placeholder-panels.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Panel"
                                    />
                                </NavLink>
                                <span className="block-name">Panel</span>
                                <span className="block-count">4 Blocks</span>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/listcontainer">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-listcontainers-dark.svg"
                                                : "assets/images/placeholders/placeholder-listcontainers.svg"
                                        }
                                        className="block-placeholder"
                                        alt="List Container"
                                    />
                                </NavLink>
                                <span className="block-name">
                                    List Container
                                </span>
                                <span className="block-count">3 Blocks</span>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/application/divider">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-dividers-dark.svg"
                                                : "assets/images/placeholders/placeholder-dividers.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Dividers"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Divider
                                        </span>
                                        <span className="block-count">
                                            6 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block-category-title">Marketing</div>
            <div className="block-category">
                <div className="block-group">
                    <span className="block-group-title">Page Sections</span>
                    <div className="block-group-content">
                        <div className="grid">
                            <div className="col-12 md:col-3">
                                <NavLink to="/marketing/hero">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-hero-dark.svg"
                                                : "assets/images/placeholders/placeholder-hero.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Hero"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">Hero</span>
                                        <span className="block-count">
                                            6 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/marketing/feature">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-feature-dark.svg"
                                                : "assets/images/placeholders/placeholder-feature.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Feature"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Feature
                                        </span>
                                        <span className="block-count">
                                            14 Blocks
                                        </span>
                                    </div>
                                    <span className="badge-new">2 New</span>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/marketing/cta">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-cta-dark.svg"
                                                : "assets/images/placeholders/placeholder-cta.svg"
                                        }
                                        className="block-placeholder"
                                        alt="CTA"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Call to Action
                                        </span>
                                        <span className="block-count">
                                            12 Blocks
                                        </span>
                                    </div>
                                    <span className="badge-new">2 New</span>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/marketing/pricing">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-pricing-dark.svg"
                                                : "assets/images/placeholders/placeholder-pricing.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Pricing"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Pricing
                                        </span>
                                        <span className="block-count">
                                            6 Blocks
                                        </span>
                                    </div>
                                    <span className="badge-new">1 New</span>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/marketing/faq">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-faq-dark.svg"
                                                : "assets/images/placeholders/placeholder-faq.svg"
                                        }
                                        className="block-placeholder"
                                        alt="FAQ"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">FAQ</span>
                                        <span className="block-count">
                                            5 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/marketing/newsletter">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-newsletter-dark.svg"
                                                : "assets/images/placeholders/placeholder-newsletter.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Newsletter"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Newsletter
                                        </span>
                                        <span className="block-count">
                                            3 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/marketing/stats">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-stats-dark.svg"
                                                : "assets/images/placeholders/placeholder-stats.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Newsletter"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Stats
                                        </span>
                                        <span className="block-count">
                                            5 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/marketing/testimonials">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-testimonials-dark.svg"
                                                : "assets/images/placeholders/placeholder-testimonials.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Testimonial"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Testimonial
                                        </span>
                                        <span className="block-count">
                                            5 Blocks
                                        </span>
                                    </div>
                                    <span className="badge-new">1 New</span>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/marketing/blog">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-blogsections-dark.svg"
                                                : "assets/images/placeholders/placeholder-blogsections.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Blog"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">Blog</span>
                                        <span className="block-count">
                                            7 Blocks
                                        </span>
                                    </div>
                                    <span className="badge-new">1 New</span>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/marketing/contact">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-contactsections-dark.svg"
                                                : "assets/images/placeholders/placeholder-contactsections.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Contact"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Contact
                                        </span>
                                        <span className="block-count">
                                            3 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/marketing/team">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-teamsections-dark.svg"
                                                : "assets/images/placeholders/placeholder-teamsections.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Team"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">Team</span>
                                        <span className="block-count">
                                            5 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/marketing/content">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-contentsections-dark.svg"
                                                : "assets/images/placeholders/placeholder-contentsections.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Content"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Content
                                        </span>
                                        <span className="block-count">
                                            3 Blocks
                                        </span>
                                    </div>
                                    <span className="badge-new">1 New</span>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/marketing/footer">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-footer-dark.svg"
                                                : "assets/images/placeholders/placeholder-footer.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Footer"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Footer
                                        </span>
                                        <span className="block-count">
                                            4 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/marketing/logocloud">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-logocloud-dark.svg"
                                                : "assets/images/placeholders/placeholder-logocloud.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Logo Cloud"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Logo Cloud
                                        </span>
                                        <span className="block-count">
                                            5 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/marketing/navbar">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-marketing-navbar-dark.svg"
                                                : "assets/images/placeholders/placeholder-marketing-navbar.svg"
                                        }
                                        className="block-placeholder"
                                        alt="NavBar"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Navbar
                                        </span>
                                        <span className="block-count">
                                            6 Blocks
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 md:col-3">
                                <NavLink to="/marketing/banner">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-banner-dark.svg"
                                                : "assets/images/placeholders/placeholder-banner.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Banners"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Banners
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
                    <span className="block-group-title">Samples</span>
                    <div className="block-group-content">
                        <div className="grid">
                            <div className="col-12 md:col-3">
                                <NavLink to="/marketing/landing">
                                    <img
                                        src={
                                            props.dark
                                                ? "assets/images/placeholders/placeholder-landingscreens-dark.svg"
                                                : "assets/images/placeholders/placeholder-landingscreens.svg"
                                        }
                                        className="block-placeholder"
                                        alt="Landing"
                                    />
                                </NavLink>
                                <div className="flex align-items-start justify-content-between">
                                    <div>
                                        <span className="block-name">
                                            Landing
                                        </span>
                                        <span className="block-count">
                                            2 Block
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                                            6 Blocks
                                        </span>
                                    </div>
                                    <span className="badge-new">1 New</span>
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
                                            4 Blocks
                                        </span>
                                    </div>
                                    <span className="badge-new">1 New</span>
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

export default Home;
