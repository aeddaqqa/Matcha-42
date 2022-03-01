import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import UserInfo from "./UserInfo";
import {
    StyledHistory,
    StyledProfile,
    StyledGelleryProfile,
    StyledBioAndTags,
    StyledFooter,
    StyledBody,
    StyledMap,
} from "./Profile.style";
import jwt_decode from "jwt-decode";
import { useSelector } from "react-redux";

const images = [
    {
        url: "https://images.unsplash.com/photo-1604436122917-66306388da12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        url: "https://images.unsplash.com/photo-1504276048855-f3d60e69632f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        url: "https://images.unsplash.com/photo-1556347961-f9521a88cb8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        url: "https://images.unsplash.com/photo-1525337187502-a0dbdfb0286f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
        url: "https://images.unsplash.com/photo-1507023490064-d1430fd147ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
];

const Gellery = () => {
    return (
        <StyledGelleryProfile>
            {images.map((image, index) => {
                return (
                    <div
                        key={index}
                        className="card"
                        style={{ backgroundImage: `url(${image.url})` }}
                    />
                );
            })}
        </StyledGelleryProfile>
    );
};

const Map = () => {
    return (
        <StyledMap>
            <MapContainer
                className="map-container"
                center={{ lat: 51.505, lng: -0.09 }}
                zoom={13}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={{ lat: 51.505, lng: -0.09 }}></Marker>
            </MapContainer>
        </StyledMap>
    );
};

const History = () => {
    return <StyledHistory>History</StyledHistory>;
};
const tabs = [
    { label: "Map", component: <Map /> },
    { label: "Gallery", component: <Gellery /> },
    { label: "History", component: <History /> },
];

const Profile = () => {
    const state = useSelector((state) => state.userLogin.user.token);
    useEffect(() => {
        const decoded = jwt_decode(state);
        console.log(state);
        console.log(decoded);
    }, [state]);
    const [selectedTab, setSelectedTab] = useState(0);
    return (
        <>
            <NavBar />
            <StyledProfile>
                <UserInfo />
                <StyledBioAndTags>
                    <div className="container">
                        <div className="container-header">
                            List Of Interests
                        </div>
                        <div className="container-content">
                            <div className="tag">bigola</div>
                            <div className="tag">basla</div>
                            <div className="tag">btata</div>
                            <div className="tag">3jina</div>
                            <div className="tag">kan yamakan</div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="container-header">Biography</div>
                        <div className="container-content">
                            Le Lorem Ipsum est simplement du faux texte employé
                            dans la composition et la mise en page avant
                            impression. Le Lorem Ipsum est le faux texte
                            standard de l'imprimerie depuis les années 1500,
                            quand un imprimeur anonyme assembla ensemble des
                            morceaux de texte pour réaliser un livre spécimen de
                        </div>
                    </div>
                </StyledBioAndTags>
                <StyledFooter>
                    <StyledFooter>
                        <div className="head">
                            {/* <div className="selected"></div> */}
                            {tabs.map((item, index) => (
                                <div
                                    onClick={() => {
                                        setSelectedTab(index);
                                        console.log(item);
                                    }}
                                    key={index}
                                    className={
                                        index === selectedTab
                                            ? "label selected"
                                            : "label"
                                    }
                                >
                                    {item.label}
                                    {index === selectedTab ? (
                                        <motion.div
                                            className="underline"
                                            layoutId="underline"
                                        />
                                    ) : null}
                                </div>
                            ))}
                        </div>
                        <div className="body">
                            <AnimatePresence exitBeforeEnter>
                                <StyledBody
                                    key={selectedTab}
                                    animate={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    {tabs[selectedTab].component}
                                </StyledBody>
                            </AnimatePresence>
                        </div>
                    </StyledFooter>
                </StyledFooter>
            </StyledProfile>
        </>
    );
};

export default Profile;
