import { StyledFirstStep } from "./FirstStep.Style";
import TextField from "@mui/material/TextField";
import { Button, Radio } from "antd";
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

    const optionsss = [
        { value: "Burns Bay Road" },
        { value: "Downing Street" },
        { value: "Wall Street" },
    ];

    const [value, setValue] = useState("");
    const [options, setOptions] = useState(optionsss);
    const onSearch = (searchText) => {
        // http://localhost:3000/api/user/tags/book
        if (token && searchText)
            axios
                .get(`http://localhost:3000/api/user/tags/${searchText}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((res) => {
                    console.log(res);
                    // setOptions(res.data.result);
                })
                .catch((err) => console.log(err));
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
                        <Button type="primary">Add tag</Button>
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
