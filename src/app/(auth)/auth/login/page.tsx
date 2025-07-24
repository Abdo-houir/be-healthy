
import { Stack, Typography } from "@mui/material";
import LoginForm from "./components/LoginForm";

export default function Home() {

 

  return (
    <Stack
      justifyContent="space-between"
      height={1}
    >
      <Typography
        variant="h3"
      >
        welcome back to be-healthy!
      </Typography>
     <LoginForm />
    </Stack >
  );
}
