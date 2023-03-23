import { Container } from "@mui/material";

function Footer() {
  return (
    <>
      <div className="border-t-2 mt-10 border-gray-300">
        <Container maxWidth="md" disableGutters>
          <div className="flex flex-row h-16 items-center justify-between gap-5 ">
            <div className="flex flex-row items-center justify-center gap-5">
              <h6 className="text-blue-800 text-sm cursor-pointer">Download</h6>
              <h6 className="text-blue-800 text-sm cursor-pointer">
                Tutorials
              </h6>
              <h6 className="text-blue-800 text-sm cursor-pointer">Privacy</h6>
              <h6 className="text-blue-800 text-sm cursor-pointer">Help</h6>
              <h6 className="text-blue-800 text-sm cursor-pointer">
                Advertise
              </h6>
            </div>
            <div className="flex flex-row items-center justify-center gap-5">
              <h6 className="text-sm">
                <span className="text-blue-800">Skillbrains</span> © 2009-2022
              </h6>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Footer;
