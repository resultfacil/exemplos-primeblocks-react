import React from "react";
import { NavLink } from "react-router-dom";

const Marketing = (props) => {
    return (
        <>
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
        </>
    );
};

export default Marketing;
