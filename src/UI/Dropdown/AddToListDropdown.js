import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  Checkbox,
  FormControl,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/Check";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";

const useStyles = makeStyles({
  dropdown: {
    textAlign: "left",
    font: "normal normal 600 12px/17px Open Sans !important",
    letterSpacing: "0px",
    color: "#000000",
    opacity: "1",
    textTransform: "capitalize",
  },
  listItem: {
    marginBottom: "5px",
    minHeight: "30px",
    "& label": {
      marginRight: "0",
    },
  },
  inputField: {
    border: " none !important",
    font: "normal normal normal 12px/17px Open Sans",
    letterSpacing: "0px",
    color: "#000000",
    width: "90%",
  },
  addNewDiv: {
    padding: "5px 8px",
    borderBottom: "1px solid #C4C4C4",
  },
  addNew: {
    textAlign: "left",
    font: "normal normal 600 12px/17px Open Sans !important",
    letterSpacing: "0px",
    color: "#0072C6",
    opacity: "1",
    padding: "3.5px 0px",
    textTransform: "capitalize",
  },
  noData: {
    textAlign: "left",
    font: "italic normal normal 12px/17px Open Sans",
    letterSpacing: "0px",
    color: "#767676",
    padding: "0px 8px",
  },
});
function SwimlaneDropdown(props) {
  const classes = useStyles();

  const [showInput, setshowInput] = useState(false);
  const [checked, setChecked] = useState(null);

  const clickNew = () => {
    setshowInput(true);
  };

  useEffect(() => {
    // if(!props.multiple){
    props.wholeList &&
      props.wholeList.map((item) => {
        if (props.defaultValue && item.localeCompare(props.defaultValue) == 0) {
          setChecked((prev) => {
            return { ...prev, [item]: true };
          });
        } else {
          setChecked((prev) => {
            return { ...prev, [item]: false };
          });
        }
      });
    // }
  }, []);

  const handleChange = (e, data) => {
    if (props.multiple) {
      props.wholeList &&
        props.wholeList.map((item) => {
          if (item.localeCompare(data) == 0) {
            setChecked((prev) => {
              return { ...prev, [item]: !prev[item] };
            });
          }
        });
      // props.onChange(e.target.value);
    } else {
      props.wholeList &&
        props.wholeList.map((item) => {
          if (item.localeCompare(data) == 0) {
            setChecked((prev) => {
              return { ...prev, [item]: true };
            });
          } else {
            setChecked((prev) => {
              return { ...prev, [item]: false };
            });
          }
        });
      props.onChange(e.target.value);
    }
  };

  return (
    <div
      className={props.dropdownClass ? props.dropdownClass : classes.dropdown}
    >
      <FormControl style={{ width: "100%" }}>
        <div className={classes.addNewDiv}>
          {showInput ? (
            <div>
              <input
                className={classes.inputField}
                autoFocus
                value={props.inputValue}
                type="text"
                // onChange={(e) => props.inputOnchange(e)}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setshowInput(false);
                    props.onKeydown(e);
                  }
                }}
              />
              <CancelOutlinedIcon
                style={{ width: "13px", height: "13px" }}
                onClick={() => setshowInput(false)}
              />
            </div>
          ) : (
            <p
              className={classes.addNew}
              onClick={(e) => {
                e.stopPropagation();
                clickNew();
              }}
            >
              {props.addNewLabel}
            </p>
          )}
        </div>
        <List>
          {props.wholeList.length > 0 ? (
            props.wholeList.map((data, index) => (
              <ListItem key={data} value={data} className={classes.listItem}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checkedIcon={
                        <span className={props.checkedCheckBoxStyle}>
                          <CheckIcon className={props.checkIcon} />
                        </span>
                      }
                      icon={<span className={props.checkboxStyle} />}
                      value={data}
                      checked={checked ? checked[data] : false}
                      onChange={(e) => handleChange(e, data)}
                      name="check"
                    />
                  }
                  label={<div className={classes.dropdown}>{data}</div>}
                />
              </ListItem>
            ))
          ) : (
            <p className={classes.noData}>{props.noDataLabel}</p>
          )}
        </List>
      </FormControl>
    </div>
  );
}

export default SwimlaneDropdown;
