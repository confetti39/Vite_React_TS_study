import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
} from "@mui/material";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { userId, userPassword } from "../states/User";
import Header from "../components/Header";

export default function Login() {
  // router
  const navigate = useNavigate();

  // local
  const [id, setId] = useRecoilState(userId);
  const [password, setPassword] = useRecoilState(userPassword);

  // handler
  const handleLogIn = () => {
    if (!(id && password)) return;
    navigate(`/home`);
    localStorage.setItem("id", id);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      handleLogIn();
    }
  };

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
      setId(id);
      navigate(`/home`);
    }
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography> */}
        <Header />
        <TextField
          name="email"
          label="Email Address"
          required
          fullWidth
          autoComplete="email"
          autoFocus
          margin="normal"
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => {
            setId(e.target.value);
          }}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          required
          fullWidth
          autoComplete="current-password"
          margin="normal"
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => {
            setPassword(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <FormControlLabel
          label="Remember me"
          control={<Checkbox value="remember" color="primary" />}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleLogIn}
        >
          Sign in
        </Button>
        <Grid container>
          <Grid item xs>
            <Link>Forgot Password?</Link>
          </Grid>
          <Grid item>
            <Link>Sign Up</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
