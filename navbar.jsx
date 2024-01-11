import React from "react";
import { Navbar, Typography, Button } from "@material-tailwind/react";

export function NavbarMain() {
  return (
    <Navbar className="mx-auto max-w-screen-lg px-4 py-2 rounded-full bg-gold-200 border-2">
      <div className="flex flex-col md:flex-row items-center justify-between text-blue-gray-900">
      <div className="md:mr-4 md:cursor-pointer md:py-1.5 md:flex md:items-center md:gap-2">
  <Typography
    as="a"
    href="#"
    variant="h6"
    className="cursor-pointer py-1.5 flex items-center gap-2"
    style={{
      fontFamily: "'Arial', sans-serif",
      fontWeight: "bold",
      fontSize: "24px",
      color: "#1877F2",
    }}
  >
    <i className="fab fa-facebook"></i> PlaceBook
  </Typography>
</div>

        {/* NavList and buttons section */}
<div className="flex flex-wrap items-center justify-center md:flex md:items-center md:justify-start">
  <div className="flex items-center space-x-2"> 
    <Button 
      variant="text" 
      size="sm" 
      className="hover:bg-blue-200 md:text-lg lg:text-xl rounded-full"
      style={{ color: '#3A8EBA' }}
    >
      Home
    </Button>
    <Button 
      variant="text" 
      size="sm" 
      className="hover:bg-blue-200 md:text-lg lg:text-xl rounded-full"
      style={{ color: '#3A8EBA' }}
    >
      Add
    </Button>
  </div>
        </div>
      </div>
    </Navbar>
  );
}

export default NavbarMain;
