import {
  Box,
  Button,
  Container,
  CssBaseline,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

type url = string;

const url = "https://ck3nnrut0d.execute-api.us-east-1.amazonaws.com/?id=test";

function App() {
  const [msg, setMsg] = useState<null | "">(null);
  async function fetchData() {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setMsg(data.message);
    } catch (e) {
      const error = e as Error;
      console.error("Error fetching data:", error.message);
      // You can handle the error here or rethrow it if needed
      throw error;
    }
  }

  const message = msg && <Typography>{msg}</Typography>;

  return (
    <CssBaseline>
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: "center",
            mt: "5em",
          }}
        >
          <Stack spacing={5} sx={{ alignItems: "center" }}>
            <Typography variant="h3">
              Análisis de precios de la competencia
            </Typography>
            <Button
              sx={{ maxWidth: "10em" }}
              variant="contained"
              onClick={fetchData}
            >
              Descarga
            </Button>
            {message}
          </Stack>
        </Box>
      </Container>
    </CssBaseline>
  );
}

export default App;
