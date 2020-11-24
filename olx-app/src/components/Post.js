import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Button from '@material-ui/core/Button';

class Post extends Component {
    constructor() {
        super()
        this.state = {
            CatValue: "",
            ValueCondition: "",
        }
    }
    render() {
        const Category = [
            { ID: 1, label: "Mobile Phones" },
            { ID: 2, label: "Cars" },
            { ID: 3, label: "Motorcycles" },
            { ID: 4, label: "Houses" },
            { ID: 5, label: "TV-Video-Audio" },
            { ID: 6, label: "Teblets" },
            { ID: 7, label: "Land & Plots" },
        ]

        const handleCategoryChange = (event) => {
            this.setState({
                ...this.state,
                CatValue: event.target.value,
            })
        };
        const handleValueCondition = (event, newAlignment) => {
            this.setState({
                ...this.state,
                ValueCondition: newAlignment
            })
          };
          const ToggelButtonStyle = () => {
              <style>

              </style>
          }

        return (
            <div className="main">
                <div className="head font b s24 color aic tac">
                    <p>POST YOUR AD</p>
                </div>
                <div className="FormHead flex font s16">
                    <div className="select-category color">
                        <h5 className="fontb ml-3 mt-3">
                            <span>SELECTED CATEGORY</span>
                        </h5>
                        <div>
                            <FormControl required className="CategorySelect ml-5 mt-3 mb-4">
                                <InputLabel id="demo-simple-select-required-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-required-label"
                                    id="demo-simple-select-required"
                                    value={this.state.CatValue}
                                    onChange={handleCategoryChange}
                                    className="Select-Empty"
                                >
                                    {Category.map(item => {
                                        return (
                                            <MenuItem className="color s14" value={item.label}>{item.label}</MenuItem>
                                        )
                                    })}

                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className="postBreker"></div>
                    <div className="SomeDetail">
                        <h4 className="fontb color ml-3 mt-3">
                            <span>INCLUDE SOME DETAILS</span>
                        </h4>
                        <div className="Condition ml-4 mt-3">
                            <label>Conditions *</label>
                            <div>
                                <ToggleButtonGroup
                                    value={this.state.ValueCondition}
                                    exclusive
                                    onChange={handleValueCondition}
                                    aria-label="Condition Value"
                                    className="groupButton"
                                >
                                    <ToggleButton className="toggleButton"  value="new" aria-label="New Condition">New </ToggleButton>
                                    <ToggleButton className="toggleButton" value="used" aria-label="Used Condition"> Used </ToggleButton>
                                </ToggleButtonGroup>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default Post;