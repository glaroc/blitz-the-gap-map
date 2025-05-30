import React, { useContext, useEffect } from "react";
//import TranslationContext from "src/context/Translation";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import RangeLegend from "../Map/RangeLegend";

export default function Menus(props) {
  const { challenges, setChallenge, challenge, colorBy, setColorBy } = props;
  const [challengeList, setChallengeList] = React.useState([]);

  useEffect(() => {
    setChallengeList(
      challenges.map((c) => <MenuItem value={c.name}>{c.name}</MenuItem>)
    );
  }, [challenges]);

  return (
    <div
      style={{
        position: "absolute",
        top: 20,
        left: 20,
        zIndex: 1000,
        width: "300px",
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          width: "300px",
          height: "200px",
          background: "url('/blitz-the-gap-map/logo.png') no-repeat",
          marginBottom: "10px",
          backgroundPosition: "center center",
          backgroundSize: "contain",
        }}
      ></div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 280 }}>
        <InputLabel id="simple-select-standard-label">
          Choose challenge
        </InputLabel>
        <Select
          labelId="simple-select-standard-label"
          id="simple-select-standard"
          value={challenge}
          onChange={(event) => {
            setChallenge(event.target.value);
          }}
          label="Challenge"
        >
          {challengeList.length > 0 && challengeList}
        </Select>
        <FormControl sx={{ marginTop: "15px" }}>
          <FormLabel id="row-radio-buttons-group-label">Color by:</FormLabel>
          <RadioGroup
            row
            aria-labelledby="row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={colorBy}
            onChange={(event) => {
              setColorBy(event.target.value);
            }}
          >
            <FormControlLabel
              value="challenges"
              control={<Radio />}
              label={
                challenge === "All challenges"
                  ? "Number of challenges"
                  : "Included in challenge"
              }
            />
            <FormControlLabel
              value="species"
              control={<Radio />}
              label="Number of species"
            />
          </RadioGroup>
        </FormControl>
      </FormControl>
    </div>
  );
}
