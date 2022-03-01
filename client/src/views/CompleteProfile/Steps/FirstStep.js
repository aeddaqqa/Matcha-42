import { StyledFirstStep } from "./FirstStep.Style";
import TextField from "@mui/material/TextField";
import { Radio } from "antd";
import { useEffect, useState } from "react";
import { DatePicker } from "antd";
import moment from "moment";
import { Input } from "antd";
import { CompleteProfileActionTypes } from "../../../store/actions/actionTypes";
import Chip from "@mui/material/Chip";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { AutoComplete } from "antd";

const { TextArea } = Input;

const options = [
    { value: "Burns Bay Road" },
    { value: "Downing Street" },
    { value: "Wall Street" },
];

const FirstStep = () => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        console.info("You clicked the delete icon.");
    };
    const dateFormat = "YYYY/MM/DD";
    const state = useSelector((state) => state);
    const {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        birthdate: birthdate,
        biography: biography,
        sexualPreferences: sexualPreferences,
        listOfInterests: listOfInterests,
    } = state.completeProfile;
    let token = state.userLogin.user.token;
    // useEffect(() => {
    //     // token = state.userLogin.user?.token;
    //     console.log(state.userLogin?.token);
    // }, [state]);
    const [value, setValue] = useState("");
    const [options, setOptions] = useState([]);
    const onSearch = (searchText) => {
        console.log(token);
        if (token && searchText)
            axios
                .post(
                    "http://localhost:1337/user/getsearchtag",
                    {
                        tag: searchText,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                )
                .then((res) => {
                    console.log(res.data.result);
                    setOptions(res.data.result);
                });
    };
    const onSelect = (data) => {
        dispatch({
            type: CompleteProfileActionTypes.listOfInterests,
            listOfInterests: [...listOfInterests, data],
        });
        console.log("onSelect", data);
    };
    const onChange = (data) => {
        setValue(data);
    };
    return (
        <StyledFirstStep>
            <div className="content--userinfo">
                <div className="content--userinfo__name">
                    <TextField
                        value={firstName}
                        onChange={(e) => {
                            dispatch({
                                type: CompleteProfileActionTypes.firstName,
                                firstName: e.target.value,
                            });
                        }}
                        className="name"
                        label="First Name"
                        variant="standard"
                    />
                    <TextField
                        onChange={(e) => {
                            dispatch({
                                type: CompleteProfileActionTypes.lastName,
                                lastName: e.target.value,
                            });
                        }}
                        value={lastName}
                        className="name"
                        label="Last Name"
                        variant="standard"
                    />
                </div>
                <div className="content--userinfo__dateandgender">
                    <div className="gender">
                        <div className="lab">Gender</div>
                        <Radio.Group
                            className="radiopicker"
                            // onChange={onChange}
                            onChange={(e) => {
                                dispatch({
                                    type: CompleteProfileActionTypes.gender,
                                    gender: e.target.value,
                                });
                            }}
                            value={gender}
                        >
                            <Radio value="male">Male</Radio>
                            <Radio value="female">Female</Radio>
                            <Radio value="other">Other</Radio>
                        </Radio.Group>
                    </div>
                    <div className="date">
                        <div className="date--label">Birthdate</div>
                        <DatePicker
                            defaultValue={moment(birthdate, dateFormat)}
                            format={dateFormat}
                            onChange={(data, dateString) => {
                                dispatch({
                                    type: CompleteProfileActionTypes.birthdate,
                                    birthdate: dateString,
                                });
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="looking-for">
                <div className="looking-for__label">Looking for</div>
                <Radio.Group
                    onChange={(e) => {
                        dispatch({
                            type: CompleteProfileActionTypes.sexualPreferences,
                            sexualPreferences: e.target.value,
                        });
                    }}
                    value={sexualPreferences}
                >
                    <Radio value={"male"}>Male</Radio>
                    <Radio value={"female"}>Female</Radio>
                    <Radio value={"Both"}>Both</Radio>
                </Radio.Group>
            </div>
            <div className="tags-and-biography">
                <div className="tags-and-biography__tags">
                    <div className="tags-and-biography__tags--input">
                        <AutoComplete
                            value={value}
                            options={options}
                            style={{
                                width: 200,
                            }}
                            onSelect={onSelect}
                            onSearch={onSearch}
                            onChange={onChange}
                            placeholder="search for tags"
                        />
                    </div>
                    <div className="tags-and-biography__tags--container">
                        {listOfInterests.map((item, index) => (
                            <Chip label={item} onDelete={handleDelete} />
                        ))}
                    </div>
                </div>
                <div className="tags-and-biography__biography">
                    <div className="tags-and-biography__biography--label">
                        Biography
                    </div>
                    <TextArea
                        className="tags-and-biography__biography--textarea"
                        value={biography}
                        showCount
                        maxLength={150}
                        onChange={(e) => {
                            dispatch({
                                type: CompleteProfileActionTypes.biography,
                                biography: e.target.value,
                            });
                        }}
                    />
                </div>
            </div>
        </StyledFirstStep>
    );
};

export default FirstStep;
