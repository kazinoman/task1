import React from "react";
import { Container, AppBar, Toolbar, Stack, Button } from "@mui/material";

function Header() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <AppBar
        elevation={0}
        sx={{
          // height: "3rem",
          zIndex: 1,
          background:
            "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(84,84,84,1) 100%)",
        }}
      >
        <Container maxWidth="md" disableGutters>
          <Toolbar
            disableGutters
            sx={{ height: "3rem", zIndex: `${1} !important` }}
          >
            <Stack
              direction={"row"}
              alignItems="center"
              justifyContent={"space-between"}
              sx={{ width: "100%" }}
            >
              <Stack
                direction={"row"}
                alignItems="center"
                justifyContent={"center"}
                gap={3}
              >
                <Button>Logo</Button>
                <select
                  name="language"
                  id="language"
                  className="from-neutral-50 bg-black"
                >
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                  <option value="c++">C++</option>
                  <option value="java" selected>
                    Java
                  </option>
                </select>
                <Button
                  size="small"
                  variant="contained"
                  className="rounded-sm p-0 bg-gray-800"
                >
                  Sign in
                </Button>
              </Stack>

              <div>
                <Button>twetter</Button>
                <Button>fb</Button>
                <Button
                  variant="contained"
                  className="rounded-sm p-0 bg-gray-800 text-xs"
                >
                  Download Lightshot for free
                </Button>
              </div>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
      <div style={{ marginTop: "4rem" }} />
    </>
  );
}

export default Header;
