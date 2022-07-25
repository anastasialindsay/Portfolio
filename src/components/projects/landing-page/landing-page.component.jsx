import { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./landing-page.styles.scss";

const LandingPage = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (e) => {
    if (!isValidEmail(e.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setMessage(e.target.value);
  };

  return (
    <div className="landing-container">
      <div className="landing-textbox">
        <h1 className="copy">We're working on something</h1>
        <p className="big">BIG.</p>
        <div className="landing-email-submit">
          <TextField
            id="outlined-basic"
            label="Enter your email"
            variant="outlined"
            size="small"
            value={message}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            className="Button"
            onClick={() => {
              setMessage("");
            }}
          >
            Send me updates!
          </Button>
          {error && <h2 style={{ color: "red" }}>{error}</h2>}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
