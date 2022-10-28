import { Box, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { LoadingButton } from "@mui/lab";

enum InputError {
  username = "username",
  password = "password",
}

export default function Login() {
  const [loading, setLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<InputError | null>(null);
  const handleSubmit = () => {
    if (!username) setError(InputError.username);
    else if (!password) setError(InputError.password);
    else {
      setLoading(true);
      //sent to server
    }
  };

  return (
    <Stack
      spacing={3}
      justifyContent="center"
      alignItems={"center"}
      minHeight="calc(100vh - 230px)"
    >
      <Box width={"50%"}>
        <Stack
          spacing={3}
          justifyContent="center"
          alignItems={"center"}
          width="100%"
        >
          <Typography>Login</Typography>
          <TextField
            required
            label="Username"
            variant="standard"
            fullWidth
            value={username}
            onChange={(e) => {
              setUsername(e.target.value as string);
              setError(null);
            }}
            error={error === InputError.username ? true : false}
          />
          <TextField
            type={"password"}
            error={error === InputError.password ? true : false}
            required
            label="Password"
            variant="standard"
            fullWidth
            value={password}
            onChange={(e) => {
              setPassword(e.target.value as string);
              setError(null);
            }}
          />
          <LoadingButton loading={loading} onClick={handleSubmit} fullWidth>
            Submit
          </LoadingButton>
        </Stack>
      </Box>
    </Stack>
  );
}
