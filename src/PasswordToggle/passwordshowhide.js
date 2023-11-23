import React, { useState } from "react";

const MyPasswordToggle = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div>
        <label>Password</label>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleToggle}>
          {showPassword ? "Hide" : "Show"} password
        </button>
      </div>
    </>
  );
};

export default MyPasswordToggle;
