import React from "react";
import BlockViewer from "../../blockviewer/BlockViewer";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
const Content = () => {
    const block1 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="text-600 text-sm mb-3">
        <span>Published </span>
        <span className="font-bold">April 6, 2021</span>
        <span> by </span>
        <span className="font-bold">Claire Williams</span>
    </div>
    <div className="border-blue-600 font-medium text-2xl p-3 mb-3 text-900" style={{ borderLeft: '8px solid' }}>Content Section Title</div>
    <div className="line-height-3 text-xl text-700 mb-5">Metus aliquam eleifend mi in nulla posuere. In vitae turpis massa sed elementum tempus egestas sed. Dui ut ornare lectus sit. Massa ultricies mi quis hendrerit.</div>
    <div className="mb-5">
        <Tag value="New" className="mr-2" />
        <Tag value="Technology" severity="success" className="mr-2" />
        <Tag value="Education" severity="warning" />
    </div>
    <div className="line-height-3 text-lg text-700 mb-4">
        Nisi est sit amet facilisis. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Nullam vehicula ipsum a arcu cursus vitae congue.
        Leo urna molestie at elementum eu facilisis. Fusce id velit ut tortor. Purus non enim praesent elementum facilisis leo vel fringilla est. Semper risus in hendrerit gravida rutrum quisque non tellus orci.
        Neque convallis a cras semper. Vitae elementum curabitur vitae nunc sed. Ornare massa eget egestas purus viverra accumsan in. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan.
        Sit amet risus nullam eget. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at.
    </div>
    <blockquote className="line-height-3 text-xl text-600 mb-4 py-0 mx-0 px-4">
        “In short, GPU.js is a JavaScript acceleration library that can be used for general-purpose computations on GPUs using JavaScript. It supports browsers, Node.js and TypeScript.”
    </blockquote>
    <div className="line-height-3 text-lg text-700 mb-4">
        Convallis tellus id interdum velit laoreet id donec ultrices. Lacus sed viverra tellus in hac habitasse platea dictumst. Ultricies tristique nulla aliquet enim. Nunc scelerisque viverra mauris in aliquam sem fringilla.
        Laculis urna id volutpat lacus laoreet.
    </div>
    <ul className="mb-4 text-lg ml-6 p-0">
        <li className="mb-3">Nunc sed velit dignissim sodales ut.</li>
        <li className="mb-3">Lorem mollis aliquam ut porttitor. </li>
        <li>Urna nec tincidunt praesent semper feugiat nibh sed.</li>
    </ul>
    <div className="text-center mb-4">
        <img src="assets/images/blocks/content/content-1.jpg" alt="content-1" className="w-full border-round" />
        <span className="block text-700 line-height-3 mt-2">Id porta nibh venenatis cras sed felis eget velit.</span>
    </div>

    <div className="text-2xl text-900 mb-4">Massa vitae tortor condimentum lacinia</div>
    <div className="line-height-3 text-lg text-700 mb-4">
        Lacus viverra vitae congue eu consequat ac felis donec et. A lacus vestibulum sed arcu non. Mauris vitae ultricies leo integer malesuada nunc vel. Dolor sit amet consectetur adipiscing elit ut aliquam purus.
        Ac tincidunt vitae semper quis lectus nulla at volutpat. Enim lobortis scelerisque fermentum dui faucibus in ornare. In mollis nunc sed id semper. Vitae ultricies leo integer malesuada nunc vel risus commodo.
    </div>
</div>
    `;

    const block2 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8 text-700">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-6 pr-0 lg:pr-5">
            <span className="text-blue-700 bg-blue-50 inline-block py-2 px-3" style={{ borderRadius: '50px' }}>Long Read</span>
            <div className="font-normal text-2xl mt-3 mb-3 text-900">In hendrerit gravida rutrum quisque non tellus</div>
            <div className="text-600 mb-5">by Jenny Wilson | jennyw.com | 16 mins</div>
            <p className="line-height-3 mt-0 mb-5">
                Nisi est sit amet facilisis. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Pellentesque pulvinar pellentesque habitant morbi tristique senectus.
                Nullam vehicula ipsum a arcu cursus vitae congue. Leo urna molestie at elementum eu facilisis. Fusce id velit ut tortor. Purus non enim praesent elementum facilisis leo vel fringilla est.
                Semper risus in hendrerit gravida rutrum quisque non tellus orci. Neque convallis a cras semper. Vitae elementum curabitur vitae nunc sed. Ornare massa eget egestas purus viverra accumsan in.
                Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Sit amet risus nullam eget. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at.
            </p>
            <p className="line-height-3 text-600 text-2xl mb-5">
                “Science is the most reliable guide for civilization, for life, for success in the world. Searching a guide other than the science is meaning carelessness, ignorance and heresy.”
            </p>
            <p className="line-height-3  mt-0 mb-5">
                Convallis tellus id interdum velit laoreet id donec ultrices. Lacus sed viverra tellus in hac habitasse platea dictumst.
                Ultricies tristique nulla aliquet enim. Nunc scelerisque viverra mauris in aliquam sem fringilla. Laculis urna id volutpat lacus laoreet.
            </p>
            <ul className="pt-0 px-5 mt-0 mb-5">
                <li className="line-height-3">Nunc sed velit dignissim sodales ut. </li>
                <li className="line-height-3">Lorem mollis aliquam ut porttitor. </li>
                <li className="line-height-3">Urna nec tincidunt praesent semper feugiat nibh sed.</li>
            </ul>
            <div className="text-3xl text-900">Massa vitae tortor condimentum lacinia</div>
            <p className="line-height-3"> Lacus viverra vitae congue eu consequat ac felis donec et. A lacus vestibulum sed arcu non. Mauris vitae ultricies leo integer malesuada nunc vel.
                Dolor sit amet consectetur adipiscing elit ut aliquam purus. Ac tincidunt vitae semper quis lectus nulla at volutpat. Enim lobortis scelerisque fermentum dui faucibus in ornare.
                In mollis nunc sed id semper. Vitae ultricies leo integer malesuada nunc vel risus commodo. </p>
        </div>
        <div className="w-full lg:w-6 pl-0 lg:pl-5 pt-5">
            <img src="assets/images/blocks/content/content-2.png" alt="Image" className="w-full border-round" />
            <div className="text-center text-sm font-medium mt-3">Consequat nisl vel pretium lectus quam id leo in.</div>
        </div>
    </div>
</div>
    `;
    const block3 = `
<div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="py-4 text-center md:text-left border-round bg-cover h-20rem lg:h-30rem flex flex-column justify-content-end mb-5" style={{ background: "url('assets/images/blocks/content/content-4.png')" }}>
        <div className="grid">
            <div className="col lg:col-offset-2 px-5">
                <div className="text-5xl font-bold text-white">Create Your Own PrimeBlock with Built-in Dark Mode</div>
                <p className="line-height-3 text-white text-lg text-center md:text-left mt-3">Published May 16, 2022 by Jessica Doe</p>
            </div>
        </div>
    </div>
    <div className="grid">
        <div className="col-12 lg:col-2">
            <div className="flex flex-row lg:flex-column lg:border-right-1 surface-border gap-5 mb-4 lg:px-5">
                <div className="text-900 flex flex-row align-items-center justify-content-end">
                    <span className="font-semibold mr-3">71</span>
                    <i className="pi pi-bookmark"></i>
                </div>
                <div className="text-900 flex flex-row align-items-center justify-content-end">
                    <span className="font-semibold mr-3">298</span>
                    <i className="pi pi-heart"></i>
                </div>
                <div className="text-900 flex flex-row align-items-center justify-content-end">
                    <span className="font-semibold mr-3">34</span>
                    <i className="pi pi-comments"></i>
                </div>
            </div>
        </div>
        <div className="col-12 lg:col lg:px-5">
            <div className="flex flex-wrap align-items-center justify-content-between mb-5 gap-5">
                <div className="flex flex-row">
                    <span className="text-900 surface-100 inline-flex font-semibold py-2 px-3 mr-2 border-round">New</span>
                    <span className="text-900 surface-100 inline-flex font-semibold py-2 px-3 mr-2 border-round">Technology</span>
                    <span className="text-900 surface-100 inline-flex font-semibold py-2 px-3 border-round">Education</span>
                </div>
                <div className="flex align-items-center gap-4">
                    <i className="pi pi-twitter cursor-pointer"></i>
                    <i className="pi pi-facebook cursor-pointer"></i>
                    <i className="pi pi-link cursor-pointer"></i>
                </div>
            </div>
            <div className="line-height-3 text-xl text-900 mb-5">Metus aliquam eleifend mi in nulla posuere. In vitae turpis massa sed elementum tempus egestas sed. Dui ut ornare lectus sit. Massa ultricies mi quis hendrerit.</div>
            <div className="line-height-3 text-lg text-900 mb-4">
                Nisi est sit amet facilisis. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Nullam vehicula ipsum a arcu cursus vitae congue. Leo urna molestie at elementum eu facilisis. Fusce id velit ut tortor. Purus non enim praesent elementum facilisis leo vel fringilla est. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Neque convallis a cras semper. Vitae elementum curabitur vitae nunc sed.
                Ornare massa eget egestas purus viverra accumsan in. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Sit amet risus nullam eget. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at.
            </div>
            <blockquote className="surface-50 line-height-3 text-xl text-800 mb-4 py-3 px-3 border-round mx-0">“In short, GPU.js is a JavaScript acceleration library that can be used for general-purpose computations on GPUs using JavaScript. It supports browsers, Node.js and TypeScript.”</blockquote>
            <div className="line-height-3 text-lg text-900 mb-4">Convallis tellus id interdum velit laoreet id donec ultrices. Lacus sed viverra tellus in hac habitasse platea dictumst. Ultricies tristique nulla aliquet enim. Nunc scelerisque viverra mauris in aliquam sem fringilla. Laculis urna id volutpat lacus laoreet.</div>
            <ul className="text-lg mb-5 mt-0 mr-0 ml-3 p-0 text-900 font-light">
                <li className="mb-3">Nunc sed velit dignissim sodales ut.</li>
                <li className="mb-3">Lorem mollis aliquam ut porttitor.</li>
                <li>Urna nec tincidunt praesent semper feugiat nibh sed.</li>
            </ul>
            <div className="text-center mb-5">
                <img src="assets/images/blocks/content/content-3.svg" alt="Image" className="w-full border-round mb-2" />
                <span className="block text-600 line-height-3">Id porta nibh venenatis cras sed felis eget velit.</span>
            </div>
            <div className="text-3xl text-800 mb-4">Massa vitae tortor condimentum lacinia</div>
            <div className="line-height-3 text-lg text-900 mb-5">Lacus viverra vitae congue eu consequat ac felis donec et. A lacus vestibulum sed arcu non. Mauris vitae ultricies leo integer malesuada nunc vel. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Ac tincidunt vitae semper quis lectus nulla at volutpat. Enim lobortis scelerisque fermentum dui faucibus in ornare. In mollis nunc sed id semper. Vitae ultricies leo integer malesuada nunc vel risus commodo.</div>
            <div className="flex flex-wrap justify-content-between align-items-center gap-3 bg-primary text-primary-700 p-3 border-round">
                <span className="font-medium text-2xl">Content Section Title</span>
                <div className="flex align-items-center cursor-pointer">
                    <span className="font-bold mr-3">View Post Statistics</span>
                    <i className="pi pi-arrow-right"></i>
                </div>
            </div>
        </div>

        <div className="col-12 lg:col-3 lg:border-left-1 surface-border">
            <div className="p-3">
                <div className="flex border-bottom-1 surface-border pb-4 mb-5">
                    <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" className="mr-3 h-5rem w-5rem" />
                    <div className="flex flex-column align-items-start">
                        <span className="text-lg text-900 font-medium mb-1">Jessica Doe</span>
                        <span className="text-600 font-medium mb-2">1.7K Followers</span>
                        <Button type="button" label="Follow" className="p-button-rounded p-button-primary"></Button>
                    </div>
                </div>
                <span className="text-900 font-medium text-xl block mb-5">Other Posts</span>
                <div className="flex pb-4">
                    <img src="assets/images/blocks/content/content-5.png" className="mr-3 h-5rem w-5rem" />
                    <div className="flex flex-column align-items-start">
                        <span className="text-lg text-900 font-medium mb-1">Post Title</span>
                        <span className="text-600 mb-2">Metus aliquam eleifend mi in nulla posuere.</span>
                    </div>
                </div>
                <div className="flex pb-4">
                    <img src="assets/images/blocks/content/content-6.png" className="mr-3 h-5rem w-5rem" />
                    <div className="flex flex-column align-items-start">
                        <span className="text-lg text-900 font-medium mb-1">Post Title</span>
                        <span className="text-600 mb-2">Metus aliquam eleifend mi in nulla posuere.</span>
                    </div>
                </div>
                <div className="flex pb-4">
                    <img src="assets/images/blocks/content/content-7.png" className="mr-3 h-5rem w-5rem" />
                    <div className="flex flex-column align-items-start">
                        <span className="text-lg text-900 font-medium mb-1">Post Title</span>
                        <span className="text-600 mb-2">Metus aliquam eleifend mi in nulla posuere.</span>
                    </div>
                </div>
                <div className="flex flex-column gap-3">
                    <div className="w-full h-full p-5 border-round" style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, #000000 100%), url('assets/images/blocks/content/content-8.png')" }}>
                        <span className="text-white font-medium mb-3">Post Title</span>
                        <span className="text-white-alpha-70 block line-height-3">Metus aliquam eleifend mi innulla posuere.</span>
                    </div>
                    <div className="w-full h-full p-5 border-round" style={{ background: " linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, #000000 100%), url('assets/images/blocks/content/content-9.png')" }}>
                        <span className="text-white font-medium mb-3">Post Title</span>
                        <span className="text-white-alpha-70 block line-height-3">Metus aliquam eleifend mi innulla posuere.</span>
                    </div>
                    <div className="w-full h-full p-5 border-round" style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, #000000 100%), url('assets/images/blocks/content/content-10.png')" }}>
                        <span className="text-white font-medium mb-3">Post Title</span>
                        <span className="text-white-alpha-70 block line-height-3">Metus aliquam eleifend mi in nulla posuere.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `;

    return (
        <>
            <div className="block-category-title">Content Sections</div>
            <BlockViewer header="Centered" code={block1}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div className="text-600 text-sm mb-3">
                        <span>Published </span>
                        <span className="font-bold">April 6, 2021</span>
                        <span> by </span>
                        <span className="font-bold">Claire Williams</span>
                    </div>
                    <div
                        className="border-blue-600 font-medium text-2xl p-3 mb-3 text-900"
                        style={{ borderLeft: "8px solid" }}
                    >
                        Content Section Title
                    </div>
                    <div className="line-height-3 text-xl text-700 mb-5">
                        Metus aliquam eleifend mi in nulla posuere. In vitae
                        turpis massa sed elementum tempus egestas sed. Dui ut
                        ornare lectus sit. Massa ultricies mi quis hendrerit.
                    </div>
                    <div className="mb-5">
                        <Tag value="New" className="mr-2" />
                        <Tag
                            value="Technology"
                            severity="success"
                            className="mr-2"
                        />
                        <Tag value="Education" severity="warning" />
                    </div>
                    <div className="line-height-3 text-lg text-700 mb-4">
                        Nisi est sit amet facilisis. Ac odio tempor orci dapibus
                        ultrices in iaculis nunc sed. Pellentesque pulvinar
                        pellentesque habitant morbi tristique senectus. Nullam
                        vehicula ipsum a arcu cursus vitae congue. Leo urna
                        molestie at elementum eu facilisis. Fusce id velit ut
                        tortor. Purus non enim praesent elementum facilisis leo
                        vel fringilla est. Semper risus in hendrerit gravida
                        rutrum quisque non tellus orci. Neque convallis a cras
                        semper. Vitae elementum curabitur vitae nunc sed. Ornare
                        massa eget egestas purus viverra accumsan in. Leo
                        integer malesuada nunc vel risus commodo viverra
                        maecenas accumsan. Sit amet risus nullam eget. Egestas
                        maecenas pharetra convallis posuere morbi leo urna
                        molestie at.
                    </div>
                    <blockquote className="line-height-3 text-xl text-600 mb-4 py-0 mx-0 px-4">
                        “In short, GPU.js is a JavaScript acceleration library
                        that can be used for general-purpose computations on
                        GPUs using JavaScript. It supports browsers, Node.js and
                        TypeScript.”
                    </blockquote>
                    <div className="line-height-3 text-lg text-700 mb-4">
                        Convallis tellus id interdum velit laoreet id donec
                        ultrices. Lacus sed viverra tellus in hac habitasse
                        platea dictumst. Ultricies tristique nulla aliquet enim.
                        Nunc scelerisque viverra mauris in aliquam sem
                        fringilla. Laculis urna id volutpat lacus laoreet.
                    </div>
                    <ul className="mb-4 text-lg ml-6 p-0">
                        <li className="mb-3">
                            Nunc sed velit dignissim sodales ut.
                        </li>
                        <li className="mb-3">
                            Lorem mollis aliquam ut porttitor.{" "}
                        </li>
                        <li>
                            Urna nec tincidunt praesent semper feugiat nibh sed.
                        </li>
                    </ul>
                    <div className="text-center mb-4">
                        <img
                            src="assets/images/blocks/content/content-1.jpg"
                            alt="content-1"
                            className="w-full border-round"
                        />
                        <span className="block text-700 line-height-3 mt-2">
                            Id porta nibh venenatis cras sed felis eget velit.
                        </span>
                    </div>

                    <div className="text-2xl text-900 mb-4">
                        Massa vitae tortor condimentum lacinia
                    </div>
                    <div className="line-height-3 text-lg text-700 mb-4">
                        Lacus viverra vitae congue eu consequat ac felis donec
                        et. A lacus vestibulum sed arcu non. Mauris vitae
                        ultricies leo integer malesuada nunc vel. Dolor sit amet
                        consectetur adipiscing elit ut aliquam purus. Ac
                        tincidunt vitae semper quis lectus nulla at volutpat.
                        Enim lobortis scelerisque fermentum dui faucibus in
                        ornare. In mollis nunc sed id semper. Vitae ultricies
                        leo integer malesuada nunc vel risus commodo.
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="Two Columns with Image" code={block2}>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8 text-700">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-6 pr-0 lg:pr-5">
                            <span
                                className="text-blue-700 bg-blue-50 inline-block py-2 px-3"
                                style={{ borderRadius: "50px" }}
                            >
                                Long Read
                            </span>
                            <div className="font-normal text-2xl mt-3 mb-3 text-900">
                                In hendrerit gravida rutrum quisque non tellus
                            </div>
                            <div className="text-600 mb-5">
                                by Jenny Wilson | jennyw.com | 16 mins
                            </div>
                            <p className="line-height-3 mt-0 mb-5">
                                Nisi est sit amet facilisis. Ac odio tempor orci
                                dapibus ultrices in iaculis nunc sed.
                                Pellentesque pulvinar pellentesque habitant
                                morbi tristique senectus. Nullam vehicula ipsum
                                a arcu cursus vitae congue. Leo urna molestie at
                                elementum eu facilisis. Fusce id velit ut
                                tortor. Purus non enim praesent elementum
                                facilisis leo vel fringilla est. Semper risus in
                                hendrerit gravida rutrum quisque non tellus
                                orci. Neque convallis a cras semper. Vitae
                                elementum curabitur vitae nunc sed. Ornare massa
                                eget egestas purus viverra accumsan in. Leo
                                integer malesuada nunc vel risus commodo viverra
                                maecenas accumsan. Sit amet risus nullam eget.
                                Egestas maecenas pharetra convallis posuere
                                morbi leo urna molestie at.
                            </p>
                            <p className="line-height-3 text-600 text-2xl mb-5">
                                “Science is the most reliable guide for
                                civilization, for life, for success in the
                                world. Searching a guide other than the science
                                is meaning carelessness, ignorance and heresy.”
                            </p>
                            <p className="line-height-3  mt-0 mb-5">
                                Convallis tellus id interdum velit laoreet id
                                donec ultrices. Lacus sed viverra tellus in hac
                                habitasse platea dictumst. Ultricies tristique
                                nulla aliquet enim. Nunc scelerisque viverra
                                mauris in aliquam sem fringilla. Laculis urna id
                                volutpat lacus laoreet.
                            </p>
                            <ul className="pt-0 px-5 mt-0 mb-5">
                                <li className="line-height-3">
                                    Nunc sed velit dignissim sodales ut.{" "}
                                </li>
                                <li className="line-height-3">
                                    Lorem mollis aliquam ut porttitor.{" "}
                                </li>
                                <li className="line-height-3">
                                    Urna nec tincidunt praesent semper feugiat
                                    nibh sed.
                                </li>
                            </ul>
                            <div className="text-3xl text-900">
                                Massa vitae tortor condimentum lacinia
                            </div>
                            <p className="line-height-3">
                                {" "}
                                Lacus viverra vitae congue eu consequat ac felis
                                donec et. A lacus vestibulum sed arcu non.
                                Mauris vitae ultricies leo integer malesuada
                                nunc vel. Dolor sit amet consectetur adipiscing
                                elit ut aliquam purus. Ac tincidunt vitae semper
                                quis lectus nulla at volutpat. Enim lobortis
                                scelerisque fermentum dui faucibus in ornare. In
                                mollis nunc sed id semper. Vitae ultricies leo
                                integer malesuada nunc vel risus commodo.{" "}
                            </p>
                        </div>
                        <div className="w-full lg:w-6 pl-0 lg:pl-5 pt-5">
                            <img
                                src="assets/images/blocks/content/content-2.png"
                                alt="Image"
                                className="w-full border-round"
                            />
                            <div className="text-center text-sm font-medium mt-3">
                                Consequat nisl vel pretium lectus quam id leo
                                in.
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>

            <BlockViewer header="3 Columns" code={block3} new>
                <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                    <div
                        className="py-4 text-center md:text-left border-round bg-cover h-20rem lg:h-30rem flex flex-column justify-content-end mb-5"
                        style={{
                            background:
                                "url('assets/images/blocks/content/content-4.png')",
                        }}
                    >
                        <div className="grid">
                            <div className="col lg:col-offset-2 px-5">
                                <div className="text-5xl font-bold text-white">
                                    Create Your Own PrimeBlock with Built-in
                                    Dark Mode
                                </div>
                                <p className="line-height-3 text-white text-lg text-center md:text-left mt-3">
                                    Published May 16, 2022 by Jessica Doe
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid">
                        <div className="col-12 lg:col-2">
                            <div className="flex flex-row lg:flex-column lg:border-right-1 surface-border gap-5 mb-4 lg:px-5">
                                <div className="text-900 flex flex-row align-items-center justify-content-end">
                                    <span className="font-semibold mr-3">
                                        71
                                    </span>
                                    <i className="pi pi-bookmark"></i>
                                </div>
                                <div className="text-900 flex flex-row align-items-center justify-content-end">
                                    <span className="font-semibold mr-3">
                                        298
                                    </span>
                                    <i className="pi pi-heart"></i>
                                </div>
                                <div className="text-900 flex flex-row align-items-center justify-content-end">
                                    <span className="font-semibold mr-3">
                                        34
                                    </span>
                                    <i className="pi pi-comments"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 lg:col lg:px-5">
                            <div className="flex flex-wrap align-items-center justify-content-between mb-5 gap-5">
                                <div className="flex flex-row">
                                    <span className="text-900 surface-100 inline-flex font-semibold py-2 px-3 mr-2 border-round">
                                        New
                                    </span>
                                    <span className="text-900 surface-100 inline-flex font-semibold py-2 px-3 mr-2 border-round">
                                        Technology
                                    </span>
                                    <span className="text-900 surface-100 inline-flex font-semibold py-2 px-3 border-round">
                                        Education
                                    </span>
                                </div>
                                <div className="flex align-items-center gap-4">
                                    <i className="pi pi-twitter cursor-pointer"></i>
                                    <i className="pi pi-facebook cursor-pointer"></i>
                                    <i className="pi pi-link cursor-pointer"></i>
                                </div>
                            </div>
                            <div className="line-height-3 text-xl text-900 mb-5">
                                Metus aliquam eleifend mi in nulla posuere. In
                                vitae turpis massa sed elementum tempus egestas
                                sed. Dui ut ornare lectus sit. Massa ultricies
                                mi quis hendrerit.
                            </div>
                            <div className="line-height-3 text-lg text-900 mb-4">
                                Nisi est sit amet facilisis. Ac odio tempor orci
                                dapibus ultrices in iaculis nunc sed.
                                Pellentesque pulvinar pellentesque habitant
                                morbi tristique senectus. Nullam vehicula ipsum
                                a arcu cursus vitae congue. Leo urna molestie at
                                elementum eu facilisis. Fusce id velit ut
                                tortor. Purus non enim praesent elementum
                                facilisis leo vel fringilla est. Semper risus in
                                hendrerit gravida rutrum quisque non tellus
                                orci. Neque convallis a cras semper. Vitae
                                elementum curabitur vitae nunc sed. Ornare massa
                                eget egestas purus viverra accumsan in. Leo
                                integer malesuada nunc vel risus commodo viverra
                                maecenas accumsan. Sit amet risus nullam eget.
                                Egestas maecenas pharetra convallis posuere
                                morbi leo urna molestie at.
                            </div>
                            <blockquote className="surface-50 line-height-3 text-xl text-800 mb-4 py-3 px-3 border-round mx-0">
                                “In short, GPU.js is a JavaScript acceleration
                                library that can be used for general-purpose
                                computations on GPUs using JavaScript. It
                                supports browsers, Node.js and TypeScript.”
                            </blockquote>
                            <div className="line-height-3 text-lg text-900 mb-4">
                                Convallis tellus id interdum velit laoreet id
                                donec ultrices. Lacus sed viverra tellus in hac
                                habitasse platea dictumst. Ultricies tristique
                                nulla aliquet enim. Nunc scelerisque viverra
                                mauris in aliquam sem fringilla. Laculis urna id
                                volutpat lacus laoreet.
                            </div>
                            <ul className="text-lg mb-5 mt-0 mr-0 ml-3 p-0 text-900 font-light">
                                <li className="mb-3">
                                    Nunc sed velit dignissim sodales ut.
                                </li>
                                <li className="mb-3">
                                    Lorem mollis aliquam ut porttitor.
                                </li>
                                <li>
                                    Urna nec tincidunt praesent semper feugiat
                                    nibh sed.
                                </li>
                            </ul>
                            <div className="text-center mb-5">
                                <img
                                    src="assets/images/blocks/content/content-3.svg"
                                    alt="Image"
                                    className="w-full border-round mb-2"
                                />
                                <span className="block text-600 line-height-3">
                                    Id porta nibh venenatis cras sed felis eget
                                    velit.
                                </span>
                            </div>
                            <div className="text-3xl text-800 mb-4">
                                Massa vitae tortor condimentum lacinia
                            </div>
                            <div className="line-height-3 text-lg text-900 mb-5">
                                Lacus viverra vitae congue eu consequat ac felis
                                donec et. A lacus vestibulum sed arcu non.
                                Mauris vitae ultricies leo integer malesuada
                                nunc vel. Dolor sit amet consectetur adipiscing
                                elit ut aliquam purus. Ac tincidunt vitae semper
                                quis lectus nulla at volutpat. Enim lobortis
                                scelerisque fermentum dui faucibus in ornare. In
                                mollis nunc sed id semper. Vitae ultricies leo
                                integer malesuada nunc vel risus commodo.
                            </div>
                            <div className="flex flex-wrap justify-content-between align-items-center gap-3 bg-primary text-primary-700 p-3 border-round">
                                <span className="font-medium text-2xl">
                                    Content Section Title
                                </span>
                                <div className="flex align-items-center cursor-pointer">
                                    <span className="font-bold mr-3">
                                        View Post Statistics
                                    </span>
                                    <i className="pi pi-arrow-right"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 lg:col-3 lg:border-left-1 surface-border">
                            <div className="p-3">
                                <div className="flex border-bottom-1 surface-border pb-4 mb-5">
                                    <img
                                        src="assets/images/blocks/avatars/circle/avatar-f-1.png"
                                        className="mr-3 h-5rem w-5rem"
                                    />
                                    <div className="flex flex-column align-items-start">
                                        <span className="text-lg text-900 font-medium mb-1">
                                            Jessica Doe
                                        </span>
                                        <span className="text-600 font-medium mb-2">
                                            1.7K Followers
                                        </span>
                                        <Button
                                            type="button"
                                            label="Follow"
                                            className="p-button-rounded p-button-primary"
                                        ></Button>
                                    </div>
                                </div>
                                <span className="text-900 font-medium text-xl block mb-5">
                                    Other Posts
                                </span>
                                <div className="flex pb-4">
                                    <img
                                        src="assets/images/blocks/content/content-5.png"
                                        className="mr-3 h-5rem w-5rem"
                                    />
                                    <div className="flex flex-column align-items-start">
                                        <span className="text-lg text-900 font-medium mb-1">
                                            Post Title
                                        </span>
                                        <span className="text-600 mb-2">
                                            Metus aliquam eleifend mi in nulla
                                            posuere.
                                        </span>
                                    </div>
                                </div>
                                <div className="flex pb-4">
                                    <img
                                        src="assets/images/blocks/content/content-6.png"
                                        className="mr-3 h-5rem w-5rem"
                                    />
                                    <div className="flex flex-column align-items-start">
                                        <span className="text-lg text-900 font-medium mb-1">
                                            Post Title
                                        </span>
                                        <span className="text-600 mb-2">
                                            Metus aliquam eleifend mi in nulla
                                            posuere.
                                        </span>
                                    </div>
                                </div>
                                <div className="flex pb-4">
                                    <img
                                        src="assets/images/blocks/content/content-7.png"
                                        className="mr-3 h-5rem w-5rem"
                                    />
                                    <div className="flex flex-column align-items-start">
                                        <span className="text-lg text-900 font-medium mb-1">
                                            Post Title
                                        </span>
                                        <span className="text-600 mb-2">
                                            Metus aliquam eleifend mi in nulla
                                            posuere.
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-column gap-3">
                                    <div
                                        className="w-full h-full p-5 border-round"
                                        style={{
                                            background:
                                                "linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, #000000 100%), url('assets/images/blocks/content/content-8.png')",
                                        }}
                                    >
                                        <span className="text-white font-medium mb-3">
                                            Post Title
                                        </span>
                                        <span className="text-white-alpha-70 block line-height-3">
                                            Metus aliquam eleifend mi innulla
                                            posuere.
                                        </span>
                                    </div>
                                    <div
                                        className="w-full h-full p-5 border-round"
                                        style={{
                                            background:
                                                " linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, #000000 100%), url('assets/images/blocks/content/content-9.png')",
                                        }}
                                    >
                                        <span className="text-white font-medium mb-3">
                                            Post Title
                                        </span>
                                        <span className="text-white-alpha-70 block line-height-3">
                                            Metus aliquam eleifend mi innulla
                                            posuere.
                                        </span>
                                    </div>
                                    <div
                                        className="w-full h-full p-5 border-round"
                                        style={{
                                            background:
                                                "linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, #000000 100%), url('assets/images/blocks/content/content-10.png')",
                                        }}
                                    >
                                        <span className="text-white font-medium mb-3">
                                            Post Title
                                        </span>
                                        <span className="text-white-alpha-70 block line-height-3">
                                            Metus aliquam eleifend mi in nulla
                                            posuere.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BlockViewer>
        </>
    );
};

export default Content;
