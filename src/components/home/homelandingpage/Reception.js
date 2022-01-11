import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import RequestModals from "../../modals/Modals";
import './landing.css';

function Reception() {
    const history = useHistory();
    const [confirmationModal, setConfirmationModal] = useState({ modal: false, type: '', action: '', modalType: '', details: {} });

    const houseKeepingData = [
        {
            name: "Front Desk Call",
            desc: "Lorem ipsum",
            img: "./icons/rece1.png",
            type: "Request for Front Desk Call"
        },
        {
            name: "Bell Boy",
            desc: "Lorem ipsum",
            img: "./icons/rece2.png",
            type: "Request for Bell Boy"
        },
        {
            name: "Express Check-out",
            desc: "Lorem ipsum",
            img: "./icons/rece3.png",
            type: "Request for Front Desk Call"
        },

        {
            name: "Valet",
            desc: "Lorem ipsum",
            img: "./icons/rece4.png",
            type: "Request Valet"
        },

    ]
    return (
        <>
            <div className="d-flex justify-content-between p-4 pb-3 border-bottom" style={{ background: "#F2F4F8" }}>
                <img src="./logo2.png" width="60%" alt="logo" />
                <div className="d-flex">
                    <img src="./icons/search2.png" className="cursor-pointer" width="18px" height="18px"
                        onClick={(e) => {
                            history.push(
                                `/search`
                            )
                        }}
                    />
                    <img src="./icons/BellSimple.png" className="cursor-pointer mx-2" width="18px" height="18px"
                        onClick={(e) => {
                            history.push({
                                pathname: `/notifications`,
                                state: {
                                    data: "notifications"
                                }
                            }
                            )
                        }}
                    />
                    <img src="./icons/menu.png" width="18px" height="18px" />
                </div>
            </div>
            <div className="p-4">
                <img src="./icons/arrow-left.png"
                    className="cursor-pointer mb-3"
                    width="18px" height="18px"
                    onClick={() => history.goBack()}
                />

                <div className="requirement-text">
                    What do you need from house reception?
                </div>
            </div>
            <div style={{ background: "rgb(244 252 253)", padding: "20px", borderRadius: "16px", height: "100%" }}>
                <div style={{ background: "#fff", borderRadius: "10px" }}>
                    {
                        houseKeepingData.map((item, index) =>
                            <div key={index} className="d-flex cursor-pointer justify-content-between p-3 align-items-center"
                                onClick={() => setConfirmationModal({ modal: true, modalType: item.tabname, type: item.type, details: '' })}
                            >
                                <div className="d-flex align-items-center p-0" style={{ padding: "10px", paddingTop: "10px", borderRadius: "6px", color: "#AAAAAA" }}>
                                    <img src={item.img} width="60px" height="63px" />
                                    <div className="calender-date">
                                        <span>{item.name}</span>
                                        <br />
                                        <div style={{ fontSize: "12px", fontWeight: "400" }}>Lerem pisum doler ishsd</div>
                                    </div>
                                </div>
                                <img src="./icons/rounded-arrow-down.png" width="30px" height="30px" alt="food-item" />

                                {/* <i className="fas fa-chevron-circle-up fa-2x" style={{ color: "rgb(137 137 137)" }}></i> */}
                            </div>
                        )
                    }
                </div>
            </div>
            <RequestModals
                setConfirmationModal={(doc) => setConfirmationModal(doc)}
                show={confirmationModal.modal}
                onHide={() => setConfirmationModal({ modal: false, modalType: '', type: '', details: {} })}
                params={confirmationModal}
            />
        </>
    );
}

export default Reception;

